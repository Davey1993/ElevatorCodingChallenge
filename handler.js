/////////Imports///////////////////////////////

const serverless = require('serverless-http');
const express = require("express"); 
const app = express();
const bodyParser = require("body-parser");
const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require('uuid'); // I am using uuidv4 for generating id's for our users, buildings & elevators

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/////////////////////// User Endpoints //////////////////////////////////////

//This adds a new user
app.post("/users", async (req, res) => {
  const data = req.body;
  const params = {
    TableName: "usersTable",
    Item: {
      id: uuidv4(),
      name: data.name,
      building_ids: data.building_ids
    },
  };

  try {
    await db.put(params).promise();
    res.status(201).json({ user: params.Item});
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

//This edits the user by id
app.put("/users/:id", async (req, res) => {
  const data = req.body;
  const params = {
    TableName: "usersTable",
    Item: {
      id: data.id,
      name: data.name,
      building_ids: data.building_ids
    },
  }
  await db.put(params).promise();
  res.status(200).json({ user: params.Item});
});

//This gets all users in the database
app.get("/users", async (req, res) => {
  const params = {
    TableName: "usersTable",
  };

  const result = await db.scan(params).promise();
  res.status(200).json({ users: result });
});

//This deletes a user by id
app.delete("/users/:id", async (req, res) => {
  const params = {
    TableName: "usersTable",
    Key: {
      id: req.params.id
    },
  };

  await db.delete(params).promise();
  res.status(200).json({ success: true });

});

//This selects a user by id
app.get("/users/:id", async (req, res) => {
  const params = {
    TableName: "usersTable",
    
    Key: {
      id: req.params.id
    },
  };

  const result = await db.get(params).promise();
  res.status(200).json({ users: result });

});

///////////////////////////////Building Endpoints /////////////////////////////////////////////////

//This adds a new building
app.post("/buildings", async (req, res) => {
  const data = req.body;
  const params = {
    TableName: "buildingsTable",
    Item: {
      id: uuidv4(),
      name: data.name,
      location: data.location,
      elevatorIds: data.elevatorIds
    },
  };

  try {
    await db.put(params).promise();
    res.status(201).json({ buildings: params.Item });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

//This gets all buildings in the database
app.get("/buildings", async (req, res) => {
  const params = {
    TableName: "buildingsTable",
  };

  const result = await db.scan(params).promise();
  res.status(200).json({ buildings: result });
});

//This edits the building by id
app.put("/buildings/:id", async (req, res) => {
  const data = req.body;
  const params = {
    TableName: "buildingsTable",
    Item: {
      elevatorIds: data.elevatorIds
    },
  }
  await db.put(params).promise();
  res.status(200).json({ buildings: params.Item});
});

//This deletes a buildings by id
app.delete("/buildings/:id", async (req, res) => {
  const params = {
    TableName: "buildingsTable",
    Key: {
      id: req.params.id
    },
  };

  await db.delete(params).promise();
  res.status(200).json({ success: true });

});

//This selects a buildings by id
app.get("/buildings/:id", async (req, res) => {
  const params = {
    TableName: "buildingsTable",
    
    Key: {
      id: req.params.id
    },
  };

  const result = await db.get(params).promise();
  res.status(200).json({ buildings: result });

});

///////////////////////////////Elevator Endpoints /////////////////////////////////////////////////

//This adds a new elevator
app.post("/elevators", async (req, res) => {
  const data = req.body;
  const state = ["Up", "Down", "Stopped","Out of Service"];
  const params = {
    TableName: "elevatorsTable",
    Item: {
      id: uuidv4(),
      name: data.name,
      list_of_Floors: data.list_of_Floors,
      current_Floor: data.current_Floor,
      state: state
    },
  };

  try {
    await db.put(params).promise();
    res.status(201).json({ elevators: params.Item });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

//This gets all elevators in the database
app.get("/elevators", async (req, res) => {
  const params = {
    TableName: "elevatorsTable",
  };

  const result = await db.scan(params).promise();
  res.status(200).json({ elevators: result });
});

//This edits the elevator floor by id
app.patch("/elevators/:id", async (req, res) => {
  const data = req.body;
  const params = {
    TableName: "elevatorsTable",
    Item: {
      id: data.id,
      name: data.name,
      list_of_Floors: data.list_of_Floors,
      current_Floor: data.current_Floor,
      state: data.state
    },
  }
  await db.put(params).promise();
  res.status(200).json({ elevators: params.Item});
});

//This deletes an elevator by id
app.delete("/elevators/:id", async (req, res) => {
  const params = {
    TableName: "elevatorsTable",
    Key: {
      id: req.params.id
    },
  };

  await db.delete(params).promise();
  res.status(200).json({ success: true });

});

//Find elevator elevator by id
app.get("/elevators/:id", async (req, res) => {
  const params = {
    TableName: "elevatorsTable",
    
    Key: {
      id: req.params.id
    },
  };

  const result = await db.get(params).promise();
  res.status(200).json({ elevators: result });

});

module.exports.app = serverless(app);