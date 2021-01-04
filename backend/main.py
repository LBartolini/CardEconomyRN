import flask
from flask import request, jsonify
import sqlite3

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/new_transaction', methods=['POST'])
def home():
    data = request.json

    return jsonify({"status": 1})


app.run(host='0.0.0.0')
