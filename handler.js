const serverless = require('serverless-http');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/users", async (req, res) => {
  const data = req.body;
  const params = {
    TableName: "usersTable",
    Item: {
      id: uuidv4(),
      name: data.name,
      building_id: [1,2,3,4,5]
    },
  };

  try {
    await db.put(params).promise();
    res.status(201).json({ user: params.Item });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


app.get("/users", async (req, res) => {
  const params = {
    TableName: "usersTable",
  };

  const result = await db.scan(params).promise();
  res.status(200).json({ users: result });
});

module.exports.app = serverless(app);