import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(cors);
app.listen(process.env.PORT, () =>
    console.log('Server listening on port ' + process.env.PORT + '...')
);