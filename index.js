const express = require('express')
const bodyParser = require('body-parser')
const {user_db} = require('./utils/database')
const router = require('./routes/userRoutes')
const session = require('express-session')
const MongoDBsession=require('connect-mongodb-session')(session)
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const store = new MongoDBsession({
    uri: 'mongodb://localhost:27017/demo-session',
    collection:"session_store"
    
})

app.use(session({secret:"topsecret",store:store,resave:false,saveUninitialized:false}))

app.use('/user', router);
user_db((client) => {
    // console.log(client);
    app.listen(3000, () => {
        console.log('server is listening to ' + 3000);
    
    })
})
