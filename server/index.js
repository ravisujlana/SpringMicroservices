const keys  = require('./keys');

//Express App Setup

const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const app  = express();
app.use(cors);
app.use(bodyParser.json());


// Postgres Client Setup

const { Pool } = require('pg');

const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    password: keys.pgPassword,
    database: keys.pgDatabase,
    port: keys.pgPort
});

pgClient.on('error', () => console.log('Lost PG connection'));

pgClient
    .query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch(err => console.log(err));

// Define Redis Publisher
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
    }
);

const redisPublisher = redisClient.duplicate();

app.get('/', (req,res) => {
    res.send('hi');
});

app.get('/values/all', async(res,req) => {
    const values = await pgClient.query('SELECT * from values');
});

app.get('/values/all', async(res,req) => {
    redisClient.hgetall('values',(err,values) => {
        res.send(values);
    })
});


app.get('/values', async(res,req) => {
    const index = res.body.index;

    if(parseInt(index) > 40) {
        return res.status(422).send('Index too high');
    }
    redisClient.hset('values',index,'Nothing Yet');

    redisPublisher.publish('insert',index);

    pgClient.query(' INSERT INTO values (number) VALUES($1)',[index]);
    res.send({workging : true});
});

app.listen(5000, err =>{
    console.log('listening');
})