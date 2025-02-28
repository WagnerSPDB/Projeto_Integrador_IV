from flask import Flask, request, jsonify
import joblib
from feature_extractor import feature_extractor
import os
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)

modelo = joblib.load('modelo_svm.pkl')

@app.route('/')
def index():
    return "Bem-vindo ao back-end do ErrorScan3D!"

@app.route('/upload', methods=['POST'])
def upload_image():
    file = request.files.get('file')

    if not file:
        return jsonify({"erro": "Nenhuma imagem recebida."}), 400

    img_path = 'temp_image.jpg'
    file.save(img_path)

    if not os.path.exists(img_path):
        return jsonify({"erro": "Falha ao salvar a imagem."}), 500

    try:
        features = feature_extractor(img_path)

        print(f"Características extraídas: {features}")

        features = np.array(features).reshape(1, -1)

        resultado = modelo.predict(features)
        print(f"Resultado da predição: {resultado}")

        return jsonify({"resultado": int(resultado[0])})

    except Exception as e:
        print(f"Erro no processamento da imagem: {str(e)}")
        return jsonify({"erro": f"Erro no processamento da imagem: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)