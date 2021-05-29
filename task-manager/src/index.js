const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// const multer = require('multer');
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word document'));
//         }

//         cb(undefined, true);
//         // cb(new Error('File must be a PDF'));
//         // cb(undefined, true);
//     }
// });

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send();
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
// });


// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('GET request are disabled');
//     }
//     else{
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send('Service will be available soon');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('App listening on port: ' + port);
});

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async() => {
//     // const task = await Task.findById('60b22216e9d69d20bcdfc5dd');
//     // await task.populate('owner').execPopulate();
//     // console.log(task.owner);

//     const user = await User.findById('60b22206e9d69d20bcdfc5db');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);
// };

// main();


// const jwt = require('jsonwebtoken');

// const myFunction = async() => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days'});
//     console.log(token);

//     const data = jwt.verify(token, 'thisismynewcourse');
//     console.log(data);
// }

// myFunction();

// encrypt algorithm: 
// teddy -> aiognoisngosnogns -> teddy

// hashing algorithm:
// teddy -> sngoinfoisngoinfg -> sngoinfoisngoinfg