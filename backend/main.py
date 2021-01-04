import flask
from flask import request, jsonify
import sqlite3

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "id": 0,
        "prova": "blabal"
    })


app.run()
