# Student-Rank-Predictor
## Overview

The **Student Rank Predictor** is a Node.js-based API that analyzes student quiz performance and predicts their NEET rank based on historical data. It also provides college recommendations and identifies weak areas for improvement.

## Features

**Rank Prediction:** Predicts a student's NEET rank based on quiz scores and topic accuracy.<br /> 
**College Recommendation:** Recommends colleges based on the predicted rank.<br /> 
**Weak Area Identification:** Identifies topics where the student needs improvement.<br /> 
**Improvement Suggestions:** Provides actionable suggestions for improving performance.<br /> 

## Setup Instructions

### Install Dependencies:

npm install

### Run the Application:

npm start

## Test the API

**Use Postman or curl** to send a POST request to [https://localhost:5000/predict](https://localhost:5000/predict) with the following JSON body:

{<br /> 
  "quizScores": [80, 85, 90, 78, 88],<br /> 
  "topicAccuracy": {<br /> 
    "Biology": 0.85,<br /> 
    "Chemistry": 0.75,<br /> 
    "Physics": 0.70<br /> 
  }<br /> 
}<br /> 

**Expected Response:**

{<br /> 
  "predictedRank": 1500,<br /> 
  "recommendedCollege": "Medical College B",<br /> 
  "weakAreas": ["Physics"],<br /> 
  "suggestions": "Focus on Physics topics and practice more numerical problems."<br /> 
}<br /> 

## Project Approach

### Data Collection

Current Quiz Data: Fetched from [https://www.jsonkeeper.com/b/LLQT].<br /> 
Quiz Submission Data: Fetched from [https://api.jsonserve.com/rJvd7g].<br /> 
Historical Quiz Data: Fetched from [https://api.jsonserve.com/XgAgFJ].<br /> 

### Data Preprocessing

Average Score Calculation: Calculated the average score for each student.<br /> 
Topic Accuracy Calculation: Determined accuracy for each topic based on the **response_map**.

### Model Training

A simple linear regression model was used to predict ranks based on average scores.

## Screenshots

![image](https://github.com/user-attachments/assets/cde46bf4-b11f-43d3-84c3-b38ff8d635d2)

![image](https://github.com/user-attachments/assets/b4a987af-8256-4a1a-ac8c-f5502700193f)

## Technologies Used

**Node.js:** Backend runtime environment.<br /> 
**Express:** Web framework for building the API.<br /> 
**Axios:** HTTP client for fetching data from APIs.<br /> 

## Explanation Video

[https://www.loom.com/share/c6d528937b4144288a19edc4175d107d?sid=9f1ce536-df6e-4b4c-a2d3-2d26a0cc930e]
