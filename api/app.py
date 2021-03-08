import requests

from flask import Flask, jsonify, make_response

app = Flask(__name__)

@app.route('/api/v1.0/stations', methods=['GET'])
def test_response():
    response = make_response(requests.get('https://gbfs.bcycle.com/bcycle_madison/station_status.json').content)

    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    
    return response
