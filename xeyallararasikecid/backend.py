from flask import Flask, send_file, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
binasayi=1
# Define a sample image endpoint
@app.route('/images/<imgn>', methods=['GET'])
def get_image(imgn):
    image_path = f'./{imgn}.jpg'
    return send_file(image_path, mimetype='image/jpeg')

@app.route('/get', methods=['GET'])
def get():
    arr = []
    for i in range(1, binasayi+1):
        arr.append({
        "name": f"Bina {i}",
        "image": f"http://127.0.0.1:5000/images/{i}",
        "price": "5",
  })
        
    return jsonify(arr)
if __name__ == '__main__':
    app.run()
