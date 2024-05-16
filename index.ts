import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import options from "./swagger";
import router from "./routes";

dotenv.config({ override: true });

const app = express();
const port = process.env.PORT;
const backendUri = process.env.BACKEND_URI;

app.use(cors());
app.use(express.json());
app.use('/api', router);

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.listen(port, () => console.log(`Server is running at ${backendUri}:${port}/api`));