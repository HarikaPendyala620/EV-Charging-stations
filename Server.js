const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
const notificationController = require('./controllers/NotificationController');

app.use(cors());
app.use(bodyParser.json());

app.use('/notifications', notificationController);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});