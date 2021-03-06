// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
// For MongoDB module v3 use the following alternative statement.
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c2a264a0ce3e270c25939c1')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //   console.log(result);
  // });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5c264490884ed11c08d615e6')
  // name: 'Mackanary'
}, {
  $set: {
    name: 'Mac'
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});


  // db.close();
});
