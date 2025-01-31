const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Fetch historical quiz data
const fetchHistoricalQuizData = async () => {
  try {
    const response = await axios.get('https://api.jsonserve.com/XgAgFJ');
    return response.data;
  } catch (error) {
    console.error('Error fetching historical quiz data:', error);
    return null;
  }
};

// Preprocess historical quiz data
const preprocessHistoricalQuizData = (data) => {
  const userScores = {};

  data.forEach((entry) => {
    const userId = entry.user_id;
    const score = entry.score;

    if (!userScores[userId]) {
      userScores[userId] = [];
    }
    userScores[userId].push(score);
  });

  // Calculate average score for each user
  const processedData = Object.keys(userScores).map((userId) => {
    const scores = userScores[userId];
    const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return { userId, averageScore };
  });

  return processedData;
};

// Train a simple linear regression model
const trainModel = (data) => {
  // Example: Predict rank based on average score
  const model = {
    slope: -100,  // Example slope
    intercept: 10000,  // Example intercept
  };

  return model;
};

// Predict rank using the trained model
const predictRank = (model, averageScore) => {
  return model.slope * averageScore + model.intercept;
};

// Prediction endpoint
app.post('/predict', async (req, res) => {
  const { quizScores, topicAccuracy } = req.body;

  // Calculate average score
  const averageScore = quizScores.reduce((sum, score) => sum + score, 0) / quizScores.length;

  // Fetch historical quiz data
  const historicalQuizData = await fetchHistoricalQuizData();

  // Preprocess historical quiz data
  const processedData = preprocessHistoricalQuizData(historicalQuizData);

  // Train the model
  const model = trainModel(processedData);

  // Predict rank
  const predictedRank = predictRank(model, averageScore);

  // Recommend college
  let recommendedCollege;
  if (predictedRank <= 1000) {
    recommendedCollege = 'Top Medical College A';
  } else if (predictedRank <= 5000) {
    recommendedCollege = 'Medical College B';
  } else {
    recommendedCollege = 'Medical College C';
  }

  // Identify weak areas
  const weakAreas = Object.entries(topicAccuracy)
    .filter(([topic, accuracy]) => accuracy < 0.75)
    .map(([topic]) => topic);

  // Improvement suggestions
  const suggestions = weakAreas.length > 0
    ? `Focus on ${weakAreas.join(', ')} topics and practice more numerical problems.`
    : "You're doing great! Keep practicing.";

  // Return the result
  res.json({
    predictedRank: Math.round(predictedRank),
    recommendedCollege,
    weakAreas,
    suggestions,
  });
});

// Home route
app.get('/', (req, res) => {
  res.send('Student Rank Predictor API is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});