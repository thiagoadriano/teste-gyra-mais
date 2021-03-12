const path = require('path');
const dotenv = require('dotenv');

const parsePath = path.parse(__dirname);
const configEnv = dotenv.config({path: path.resolve(parsePath.dir, '.env')});

if (configEnv.error) {
    throw configEnv.error;
}

const { connect } = require('mongoose');

// Database
const db = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
 };

 const dbUri = generateUri();

 const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 };

 function generateUri() {
    let uri = `mongodb`;

    if (db.user) {
        uri += `+srv://${db.user}`;

        if (db.pass) {
            uri += `:${db.pass}`;
        } 

        uri += '@';
    } else {
        uri += '://';
    }

    return uri += `${db.host}/${db.name}?retryWrites=true&w=majority`;
 }

 function starter() {
    connect(dbUri, dbOptions)
        .then(() => console.log("Database connected"))
        .catch((error) => console.log("Databased failed: ", error));
 }
 
 module.exports = {starter};
 