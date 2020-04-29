"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('Conectado INDEX');
    }
}
exports.indexController = new IndexController();
