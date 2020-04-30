"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UserController {
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var connection = database_1.default.db2();
            var sql = 'select * from USUARIO';
            yield connection.exec(sql, [], function (result) {
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.json({ message: 'No existe' });
                }
            });
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var connection = database_1.default.db2();
            var sql = 'select * from USUARIO where ID_USUARIO = :id';
            yield connection.exec(sql, [id], function (result) {
                if (result.length > 0) {
                    res.json(result[0]);
                }
                else {
                    res.json({ message: 'No existe' });
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var connection = database_1.default.db2();
            const { nombre, apellido, contrasenia, correo, telefono, foto_usuario, genero, fecha_nacimiento, direccion } = req.body;
            var sql = 'insert into USUARIO (NOMBRE,APELLIDO,CONTRASENIA,CORREO,TELEFONO,FOTO_USUARIO,'
                + 'GENERO,FECHA_NACIMIENTO,DIRECCION,TIPO_USUARIO,ESTADO) values'
                + ' (:nombre,:apellido,:contrasenia,:correo,:telefono,:foto_usuario,:genero,'
                + 'TO_DATE(:fecha_nacimiento,\'YYYY-MM-DD\'),:direccion,1,0)';
            yield connection.exec(sql, [nombre, apellido, contrasenia, correo, telefono, foto_usuario, genero,
                fecha_nacimiento, direccion], function (result) { });
            res.json({ message: "Usuario creado" });
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var connection = database_1.default.db2();
            const { id } = req.params;
            var sql = 'delete from USUARIO where ID_USUARIO = :id';
            yield connection.exec(sql, [id], function (result) { });
            res.json({ message: 'El usuario fue eliminado' });
        });
    }
    putUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var connection = database_1.default.db2();
            const { nombre, apellido, contrasenia, telefono, direccion } = req.body;
            const { id } = req.params;
            var sql = 'update USUARIO set NOMBRE = :nombre,APELLIDO = :apellido, CONTRASENIA = :contrasenia,'
                + 'TELEFONO = :telefono, DIRECCION = :direccion where ID_USUARIO = :id';
            yield connection.exec(sql, [nombre, apellido, contrasenia, telefono, direccion, id], function (result) { });
            res.json({ message: 'El usuario fue actualizado' });
        });
    }
}
exports.userController = new UserController();
