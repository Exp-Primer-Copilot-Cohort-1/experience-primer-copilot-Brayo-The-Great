// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create server
app.listen(3000, function () {
  console.log('Server is running on port 3000');
});

// Add a new comment
app.post('/comments', function (req, res) {
  var comment = req.body.comment;
  var comments = [];
  var data = fs.readFileSync('./comments.json', 'utf8');
  if (data) {
    comments = JSON.parse(data);
  }
  comments.push(comment);
  fs.writeFileSync('./comments.json', JSON.stringify(comments));
  res.send('Comment added');
});

// Get all comments
app.get('/comments', function (req, res) {
  var data = fs.readFileSync('./comments.json', 'utf8');
  var comments = [];
  if (data) {
    comments = JSON.parse(data);
  }
  res.json(comments);
});
```

## 5. Install and use Axios

- Install Axios
  ```bash
  npm install axios
  ```

- Use Axios to make requests

```javascript
// Path: index.js
var axios = require('axios');

var comment = {
  name: 'John Doe',
  email: '