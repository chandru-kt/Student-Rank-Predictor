# Student-Rank-Predictor
## Overview

The **Student Rank Predictor** is a Node.js-based API that analyzes student quiz performance and predicts their NEET rank based on historical data. It also provides college recommendations and identifies weak areas for improvement.

## Features

**Rank Prediction:** Predicts a student's NEET rank based on quiz scores and topic accuracy.
**College Recommendation:** Recommends colleges based on the predicted rank.
**Weak Area Identification:** Identifies topics where the student needs improvement.
**Improvement Suggestions:** Provides actionable suggestions for improving performance.

## Setup Instructions

### Install Dependencies:

npm install

### Run the Application:

npm start

## Test the API

**Use Postman or curl** to send a POST request to [http://localhost:5000/predict] with the following JSON body:

{
  "quizScores": [80, 85, 90, 78, 88],
  "topicAccuracy": {
    "Biology": 0.85,
    "Chemistry": 0.75,
    "Physics": 0.70
  }
}

**Expected Response:**

{
  "predictedRank": 1500,
  "recommendedCollege": "Medical College B",
  "weakAreas": ["Physics"],
  "suggestions": "Focus on Physics topics and practice more numerical problems."
}

## Project Approach

### Data Collection

Current Quiz Data: Fetched from [https://www.jsonkeeper.com/b/LLQT].
Quiz Submission Data: Fetched from [https://api.jsonserve.com/rJvd7g].
Historical Quiz Data: Fetched from [https://api.jsonserve.com/XgAgFJ].

### Data Preprocessing

Average Score Calculation: Calculated the average score for each student.
Topic Accuracy Calculation: Determined accuracy for each topic based on the **response_map**.

### Model Training

A simple linear regression model was used to predict ranks based on average scores.

## Screenshots

![image](https://github.com/user-attachments/assets/cde46bf4-b11f-43d3-84c3-b38ff8d635d2)

![image](https://github.com/user-attachments/assets/b4a987af-8256-4a1a-ac8c-f5502700193f)

## Technologies Used

**Node.js:** Backend runtime environment.
**Express:** Web framework for building the API.
**Axios:** HTTP client for fetching data from APIs.
