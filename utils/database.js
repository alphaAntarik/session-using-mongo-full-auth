const mongoose = require('mongoose')

const user_db = callback => mongoose.connect('mongodb://localhost:27017/demo-session').then((client) => {
    console.log('Connected');
    callback(client)
}).catch((err)=>{console.log('error occurred '+err);
})


module.exports={user_db}