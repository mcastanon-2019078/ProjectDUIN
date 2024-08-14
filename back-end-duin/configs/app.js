import { config } from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const app = express();
config();

const port = process.env.PORT || 3200

// Import routes

import studentRoutes from '../src/student/student.routes.js'


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/student', studentRoutes)

export const initServer = () => {
    app.listen(port, () => {
        console.log(`Server http running in port ${port}`);
    });
};
