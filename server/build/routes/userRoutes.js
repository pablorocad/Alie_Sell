"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', userController_1.userController.listUsers);
        this.router.get('/:id', userController_1.userController.getUser);
        this.router.post('/', userController_1.userController.create);
        this.router.delete('/:id', userController_1.userController.deleteUser);
        this.router.put('/:id', userController_1.userController.putUser);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
