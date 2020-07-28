import express from 'express';
import bodyParser from 'body-parser';
import router from './api';
import { connectDb }from './api/db'
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors({origin: 'http://localhost:3042'}));

    // Set to true if you need the website to include cookies in the requests sent
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.get('/', (req, res)=> {
    res.send('hello world');
})
connectDb().then(async () => app.listen(port, () => { console.log('server is up at', port )}))

