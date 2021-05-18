// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // Create example
    
    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents!');
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert tasks!');
    //     }

    //     console.log(result.ops);
    // });

    // Read example

    // db.collection('users').findOne({ _id: new ObjectID("60a3cdb4f1a5085ed42bd22b") }, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // });

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users);
    // });

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count);
    // });

    // db.collection('tasks').findOne({ _id: new ObjectID("60a3c6a7b5784d829819842a") },((error, task) => {
    //     console.log(task);
    // }));

    // db.collection('tasks').find({ completed: false }).toArray((error, task) => {
    //     console.log(task);
    // });

    // Update

    // db.collection('users').updateOne({
    //     _id: new ObjectID("60a3b8edbf10088888c8698c")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // Delete

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    db.collection('tasks').deleteOne({
        description: "Clean the house"
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
});
