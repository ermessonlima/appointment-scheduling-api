import express from 'express';
import { registerPost } from './routes';

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
    }
);

app.get('/registerPost', registerPost)

app.listen(3333, () => {
    console.log('Server started on port 3333!');
}
);