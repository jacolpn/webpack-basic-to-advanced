import * as express from 'express';
import { Request, Response } from 'express';

let color: string = 'blue';
console.log(color);

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send({ messege: 'hello world!' });
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta: ' + PORT);
})
