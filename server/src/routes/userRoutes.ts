import { Router } from 'express';

import {userController} from '../controllers/userController';

class UserRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',userController.listUsers);
        this.router.get('/:id',userController.getUser);

        this.router.post('/',userController.create);
        this.router.delete('/:id',userController.deleteUser);
        this.router.put('/:id',userController.putUser);
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;