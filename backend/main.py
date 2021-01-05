import flask
from flask import request, jsonify
import sqlite3

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/new_transaction', methods=['POST'])
def new_transaction():
    data = request.json
    conn = sqlite3.connect('transactions.db')
    c = conn.cursor()
    args_db = ( data['descrizione'],   
                data['giorno'], 
                data['mese'], 
                data['anno'], 
                data['importo'], 
                data['ricarica'])
    c.execute('INSERT INTO tr ( descrizione, giorno, mese, anno, importo, ricarica ) VALUES (?, ?, ?, ?, ?, ?);', args_db)
    conn.commit()
    conn.close()
    return jsonify({"status": 1})

@app.route('/del_transaction', methods=['POST'])
def del_transaction():
    data = request.json
    print(data)
    conn = sqlite3.connect('transactions.db')
    c = conn.cursor()
    c.execute('DELETE FROM tr WHERE id=?;', (data["id"]))
    conn.commit()
    conn.close()
    return jsonify({"status": 1})

@app.route('/get_all', methods=['GET'])
def get_all():
    conn = sqlite3.connect('transactions.db')
    c = conn.cursor()
    c.execute('SELECT * FROM tr;')
    x = c.fetchall()
    out = []
    for el in x:
        out.append({
            "id": str(el[0]),
            "descr": str(el[1]),
            "data": f"{str(el[2])}/{str(el[3])}/{str(el[4])}",
            "importo": str(el[5]),
            "ricarica": el[6]
        })
    conn.close()

    return jsonify(out)

@app.route('/compute_total', methods=['GET'])
def compute_total():
    conn = sqlite3.connect('transactions.db')
    c = conn.cursor()
    c.execute('SELECT * FROM tr;')
    x = c.fetchall()
    conn.close()
    importi = [(el[5], el[6]) for el in x]
    total = 0
    for imp, ric in importi:
        if ric:
            total += imp
        else:
            total -= imp

    return jsonify({"total": total})

app.run(host='0.0.0.0')
