const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const sequelize = new Sequelize('mysql://user:password@localhost:3306/database_name');

// Define the Sequelize model for the users table
const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  status: DataTypes.STRING,
});

// Define the /users route
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(3000, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    console.log('Server running on port 3000');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
