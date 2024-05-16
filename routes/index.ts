import { Router, Request, Response } from "express";
import services from "../services";

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Home Greeting
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/', (_req: Request, res: Response) => {
    res.status(200).send('<h1 style="text-align: center;">Express + TypeScript Server for Money Lion Challenge</h1>')
});

/**
 * @swagger
 * /health-check:
 *   get:
 *     summary: Health Check
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/health-check', (req: Request, res: Response) => {
    res.status(200).send('Ok');
});

/**
 * @swagger
 * /content-feed:
 *   get:
 *     summary: Get content feed for Money Lion app
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *            application/json:
 *              example:
 *               data: [{
 *                      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                        "imageUri": "https://picsum.photos/500/500",
                        "title": "string",
                        "subTitle": "string",
                        "author": "string string",
                        "content": "stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringst",
                        "numberOfComments": 1,
                        "comments": [
                            {
                                "text": "string",
                                "author": "string",
                                "profilePic": "https://picsum.photos/200",
                                "likes": 0
                            }
                        ]
                    }]
 *       500:
 *          description: There was an error with the API
 */
router.get('/content-feed', (_req: Request, res: Response) => {
    services.getContentFeed().then((value) => {
        res.status(201).send(value);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

export default router;