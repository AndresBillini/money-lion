import dotenv from "dotenv";

dotenv.config({ override: true });

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Money Lion Content Feed System',
            version: '1.0.0',
            description: 'Money Lion Content Feed System covered for Read operation using a Node.js API',
        },
        servers:[
            {url:`${process.env.BACKEND_URI}/api`}, //you can change you server url
        ],
    },
    apis: ['./routes/*.ts'], //you can change you swagger path
};

export default options;