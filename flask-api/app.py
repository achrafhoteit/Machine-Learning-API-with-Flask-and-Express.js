from flask import Flask, request, jsonify
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

app = Flask(__name__)

analyzer = SentimentIntensityAnalyzer()

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    
    if 'text' not in data:
        return jsonify({"error": "Missing 'text' field"}), 400
    
    text = data['text']
    sentiment_score = analyzer.polarity_scores(text)['compound']

    if sentiment_score >= 0.05:
        sentiment = "positive"
    elif sentiment_score <= -0.05:
        sentiment = "negative"
    else:
        sentiment = "neutral"

    return jsonify({"sentiment": sentiment})

if __name__ == '__main__':
    app.run(debug=True)


# curl -X POST -H "Content-Type: application/json" -d '{"text": "I love this!"}' http://127.0.0.1:5000/predict
# -X (HTTP Method)
# -H (Header) --> -H "Content-Type: application/json" tells the server that the request body is in JSON format
# -d (Data) --> ends the JSON data {"text": "I love this!"} in the request body


