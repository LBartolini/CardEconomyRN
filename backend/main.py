import flask
from flask import request, jsonify
import mysql.connector
from datetime import datetime

app = flask.Flask(__name__)

def getDBConnection():
    mydb = mysql.connector.connect(
    host="192.168.1.10",
    user="cardeconomy",
    password="cardeconomy",
    database="CardEconomy")

    return mydb

@app.route('/new_transaction', methods=['POST'])
def new_transaction():
    data = request.json
    mydb = getDBConnection()
    c = mydb.cursor()

    args_db = ( data['descrizione'],
                data['giorno'],
                data['mese'],
                data['anno'],
                data['importo'],
                data['ricarica'])
    c.execute("INSERT INTO tr ( descrizione, giorno, mese, anno, importo, ricarica ) VALUES (%s, %s, %s, %s, %s, %s);", args_db)
    mydb.commit()
    c.close()
    mydb.close()
    return jsonify({"status": 1})

@app.route('/del_transaction', methods=['POST'])
def del_transaction():
    data = request.json
    mydb = getDBConnection()
    c = mydb.cursor()
    c.execute("DELETE FROM tr WHERE id=%s", (data['id'],))
    mydb.commit()
    c.close()
    mydb.close()
    return jsonify({"status": 1})

@app.route('/get_partial', methods=['GET'])
def get_partial():
    mydb = getDBConnection()
    c = mydb.cursor()
    c.execute('SELECT * FROM tr;')
    x = c.fetchall()
    out = []
    for el in x:
        out.append({
            "id": str(el[0]),
            "descr": str(el[1]),
            "data": f"{str(el[2])}/{str(el[3])}/{str(el[4])[-2:]}",
            "importo": str(el[5]),
            "ricarica": el[6]
        })
    c.close()
    mydb.close()
    out.sort(key=lambda transazione: datetime.strptime(transazione["data"], "%d/%m/%y"))
    out = out[-20:]
    return jsonify(out)

@app.route('/get_all', methods=['GET'])
def get_all():
    mydb = getDBConnection()
    c = mydb.cursor()
    c.execute('SELECT * FROM tr;')
    x = c.fetchall()
    out = []
    for el in x:
        out.append({
            "id": str(el[0]),
            "descr": str(el[1]),
            "data": f"{str(el[2])}/{str(el[3])}/{str(el[4])[-2:]}",
            "importo": str(el[5]),
            "ricarica": el[6]
        })
    c.close()
    mydb.close()
    out.sort(key=lambda transazione: datetime.strptime(transazione["data"], "%d/%m/%y"))
    return jsonify(out)

@app.route('/compute_total', methods=['GET'])
def compute_total():
    mydb = getDBConnection()
    c = mydb.cursor()
    c.execute('SELECT * FROM tr;')
    x = c.fetchall()
    importi = [(el[5], el[6]) for el in x]
    total = 0
    for imp, ric in importi:
        if ric:
            total += imp
        else:
            total -= imp
    c.close()
    mydb.close()
    return jsonify({"total": total})

if __name__ == "__main__":
	app.run(host='0.0.0.0', port='5000')
