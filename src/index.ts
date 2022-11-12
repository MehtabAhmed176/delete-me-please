import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();

// app.use(cors({ exposedHeaders: ['*', 'token'] }));
app.options('*', cors());

app.get('/', async (req: Request, res: Response) => {
  return res.send({ error: false, message: 'Success' });
});

app.get('/home', async (req: Request, res: Response) => {
  return res.send({ error: false, message: 'Success', data: ["hello"] });
});

app.listen(process.env.PORT || 8080, () => {
console.log(`server is running on port ${process.env.PORT || 8080}`)
});
