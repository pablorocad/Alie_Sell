import { Request, Response } from 'express';

class IndexController{
    index(req: Request,res: Response) {
        res.send('Conectado INDEX')
    }
}

export const indexController = new IndexController();