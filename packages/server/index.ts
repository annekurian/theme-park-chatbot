import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors({
  origin: 'https://theme-park-chatbot-client.vercel.app/',
}));
app.use(express.json());
app.use(router);
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
