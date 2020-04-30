import { Request, Response } from 'express';
import database from '../database'

class UserController{
    
    public async listUsers(req: Request,res: Response){
        var connection = database.db2();
        var sql = 'select * from USUARIO';
        await connection.exec(sql,[],function(result:any){
            if(result.length > 0){
                res.json(result);
            }else{
                res.json({message: 'No existe'});
            }
        });
    }

    public async getUser(req: Request,res: Response){
        const { id } = req.params;
        var connection = database.db2();
        var sql = 'select * from USUARIO where ID_USUARIO = :id';
        await connection.exec(sql,[id],function(result:any){
            if(result.length > 0){
                res.json(result[0]);
            }else{
                res.json({message: 'No existe'});
            }
        });
    }

    public async create(req: Request,res: Response){
        var connection = database.db2();
        const {nombre,apellido,contrasenia,correo,telefono,foto_usuario,genero,
            fecha_nacimiento,direccion} = req.body;

        var sql = 'insert into USUARIO (NOMBRE,APELLIDO,CONTRASENIA,CORREO,TELEFONO,FOTO_USUARIO,'
        +'GENERO,FECHA_NACIMIENTO,DIRECCION,TIPO_USUARIO,ESTADO) values'
        +' (:nombre,:apellido,:contrasenia,:correo,:telefono,:foto_usuario,:genero,'
        +'TO_DATE(:fecha_nacimiento,\'YYYY-MM-DD\'),:direccion,1,0)'; 

        await connection.exec(sql,[nombre,apellido,contrasenia,correo,telefono,foto_usuario,genero,
            fecha_nacimiento,direccion],function(result:any){});

        res.json({message: "Usuario creado"});
    }

    public async deleteUser(req: Request,res: Response){
        var connection = database.db2();
        const {id} = req.params;
        var sql = 'delete from USUARIO where ID_USUARIO = :id';

        await connection.exec(sql,[id],function(result:any){});

        res.json({message: 'El usuario fue eliminado'});
    }

    public async putUser(req: Request,res: Response){
        var connection = database.db2();
        const {nombre,apellido,contrasenia,telefono,direccion} = req.body;
        const { id } = req.params;

        var sql = 'update USUARIO set NOMBRE = :nombre,APELLIDO = :apellido, CONTRASENIA = :contrasenia,'
        +'TELEFONO = :telefono, DIRECCION = :direccion where ID_USUARIO = :id';

        await connection.exec(sql,[nombre,apellido,contrasenia,telefono,direccion,id],function(result:any){});
        res.json({message: 'El usuario fue actualizado'});
    }
}

export const userController = new UserController();