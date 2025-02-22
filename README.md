# Sentiment Analysis API

This project consists of two backend services:
1. A **Flask API** that performs sentiment analysis.
2. An **Express.js API** that acts as an intermediary between users and the Flask service.

3. *(Bonus)* A React frontend service for a good and user friendly interface

## **Project Structure**

```bash
.
├── README.md
├── assignment-1.pdf
├── express-server
│   ├── node_modules/
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
├── flask-api
│   └── app.py
└── sentiment-frontend
    ├── README.md
    ├── node_modules/
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   └── index.html
    └── src
        ├── App.css
        ├── App.js
        └── index.js
```

## **1️⃣ Flask API Setup**
### **Installation**
1. Navigate to the `flask-api` directory:
   ```sh
   cd flask-api

   pip install -r requirements.txt

   python app.py
    ```

## **2️⃣ Express.js API Setup**
### **Installation**
1. Navigate to the `express-server` directory:
   ```sh
   cd express-server

   npm install

   node index.js
   ```

### **API Endpoint**
- **URL:** `http://localhost:3000/analyze-sentiment`
- **Method:** `POST`
- **Request Format (JSON)**:
  ```json
  {"text": "This is great!"}

  { "sentiment": "positive" }
  ```


## **3️⃣ React Frontend Setup**
The React frontend is designed to provide a user-friendly interface for interacting with the sentiment analysis API.

### **Installation**
1. Navigate to the `sentiment-frontend` directory:
   ```sh
   cd sentiment-frontend
   
   npm install
   
   npm start
   ```

### **Frontend Features**
- Accepts user input text.
- Sends a request to the Express API for sentiment analysis.
- Displays the predicted sentiment result.

### **4️⃣ Testing the API**
You can use `curl` or Postman to test the API.

### **Flask API Test**
```sh
curl -X POST -H "Content-Type: application/json" -d '{"text": "I love this!"}' http://localhost:5000/predict
```

### **Express API Test**
```sh
curl -X POST -H "Content-Type: application/json" -d '{"text": "Amazing project!"}' http://localhost:3000/analyze-sentiment
```

### React Frontend Test
- Open your browser and go to: http://localhost:3001
- Enter a sentence in the input box and click Analyze.
- You should see the sentiment result displayed.

### **5️⃣ Deployment**
#### Pushing Code to GitHub
1. Initialize a Git repository:
```sh
git init
```
2. Add files and commit:
```sh
git add .
git commit -m "This is the first commit of the assignment."
```
3. Push to GitHub:
```sh
git branch -M main
git remote add origin https://github.com/achrafhoteit/Machine-Learning-API-with-Flask-and-Express.js.git
git push -u origin main
```





