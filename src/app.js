import express from 'express';
import bodyParser from 'body-parser';
import phoneRoutes from './routes/phoneRoutes.js';
import cors from 'cors';

const app = express();

app.use(cors());
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/phones', phoneRoutes);

app.use((err, req, res, next) => {
    console.error('Unhandled Error:', err.message);
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
        },
    });
});

export default app;
