// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
// For MongoDB module v3 use the following alternative statement.
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

// db.collection('Users').deleteMany({name: 'Mac'}).then((result) => {
//   console.log(result);
// });

  // deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

  // findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5c2a2e840ce3e270c25939c2')
}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});




  // db.close();
});
