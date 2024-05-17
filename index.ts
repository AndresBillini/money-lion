import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import options from "./swagger";
import router from "./routes";

dotenv.config({ override: true });

const app = express();
const backendUri = process.env.BACKEND_URI;

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.get('/', (_req, res) => {
    res.redirect('/api')
});

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.listen(port, () => console.log(`Server is running at ${backendUri}/api`));