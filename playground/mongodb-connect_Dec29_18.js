const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
// For MongoDB module v3 use the following alternative statement.
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
// For MongoDB module v3 add the following statement.
  // const db = client.db('todoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

db.collection('Users').insertOne({
  name: 'Mac',
  age: 33,
  location: 'Palo Alto'
}, (err, result) => {
  if (err) {
    return console.log('Unable to insert users', err);
  }
  // console.log(JSON.stringify(result.ops));
  console.log(result.ops);
  console.log(result.ops[0]._id);
  console.log(result.ops[0]._id.getTimestamp());
});

  db.close();
// For MongoDB module v3 use the following alternative statement.
  // client.close();
});
