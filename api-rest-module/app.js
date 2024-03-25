import express from 'express';

import { moviesRouter} from './routes/movies.js';
import {corsMiddleware} from './middlewares/cors';

const app = express();
app.use(express.json())
app.use(corsMiddleware())
app.disable('x-powered-by');


// Cuando accedo a /movies cargo todas las rutas que tengo en moviesRouter
app.use('/movies', moviesRouter)


const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
});
