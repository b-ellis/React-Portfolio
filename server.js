import express from 'express';

const app = express();

app.use(express.static('build'));
app.use(jsonParser);
app.listen(process.env.PORT || 8080);