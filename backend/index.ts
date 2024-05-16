import express, { Request, Response } from "express";
import services from "./services";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;
const backendUri = process.env.BACKEND_URI;

app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    res.send('<h1 style="text-align: center;">Express + TypeScript Server for Money Lion Challenge</h1>')
});

app.get('/content-feed', (_req: Request, res: Response) => {
    services.getContentFeed().then((value) => {
        res.send(value);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.listen(port, () => console.log(`Server is running at ${backendUri}:${port}`));