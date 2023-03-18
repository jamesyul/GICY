from flask import Flask, jsonify
from flask_cors import CORS

from sentiment_analysis_spanish import sentiment_analysis

app = Flask(__name__)
CORS(app)

# -- API -- #
@app.route('/')
def inicio():
    return 'Bienvenido a la API'

@app.route('/sentimientos/<string:texto>', methods=['GET'])
def analisis_sentimiento_GET(texto):
    return jsonify({'resultado': str(analisis_sentimiento(texto))}) 

# -- FUNCIONES -- #


def analisis_sentimiento(texto):
    
    sentiment = sentiment_analysis.SentimentAnalysisSpanish()
    score = sentiment.sentiment(texto)

    if (score > 0.5):
        return 'Texto positivo'
    elif (score < 0.5):
        return 'Texto negativo'
    else:
        return 'Texto neutral'

if __name__ == '__main__':
    app.run(debug=True)
