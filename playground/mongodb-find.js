// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
// For MongoDB module v3 use the following alternative statement.
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//  // db.collection('Todos').find().toArray().then((docs) => {
//  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  // db.collection('Todos').find({
  //   _id: new ObjectID('5c29fefd02668a702c4109c9')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });



  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });


  db.collection('Users').find({name: 'Mac'}).toArray().then((count) => {
    console.log(JSON.stringify(count, undefined, 2))
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });


  // db.close();
});
