import express from 'express';
import fetch from 'node-fetch'; // importuojam fetch, nes nera tikro back-end
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//get movies
app.get('/api/movies/:id?', async (req, res) => {
    const data = await fetch(`http://localhost:8080/movies/${req.params.id ? req.params.id : ''}`).then(data => data.json())
    res.json(data);
});
// post movies
app.post('/api/movies', async (req, res) => {
    console.log('hello');
    await fetch('http://localhost:8080/movies', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
    })
    res.json()
});

app.listen(5050, () => console.log(`serveris vaziuoja ant 5050 porto`))