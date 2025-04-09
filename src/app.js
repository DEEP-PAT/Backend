import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true,
}))


app.use(express.json({limit: '50mb', extended: true })); // to support JSON-encoded bodies
app.use(express.urlencoded({limit: '50mb', extended: true }));  // to support URL-encoded bodies 
app.use(express.static('public'));  // to support static files
app.use(cookieParser()); // to support cookies




export {app}; 