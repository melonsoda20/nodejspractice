require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('60b105013e55e06ec494717d').then((Task) => {
//     console.log(Task);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const deleteTaskAndCount = async(id) => {
    await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;  
};

deleteTaskAndCount('60a679554f83548680af5108').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});