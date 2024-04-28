import { db } from "../db/conexion.js";

const getTelefono = async (req, res) => {

    const sql = `select * from telefono`;

    const result = await db.query(sql);

    return res.json(result);
};


const postTelefono = async (req, res) => {
    const { numero, idpersona } = req.body;

    const data = [numero, idpersona]

    const sql = ` insert into telefono 
                 ( numero_telefono, id_persona)
                 values 
                 ($1, $2) returning  *`;

    const result = await db.query(sql, data)

    return res.json({ mensaje: "Insercion Exitosa", obj_creado: result })
}


const putTelefono = async (req, res)=>{

    const { id } = req.params;

    console.log(id);

    const { numero, idpersona } = req.body;
    const data = [ numero, idpersona, id];

    const sql = ` update telefono 
                    set numero_telefono = $1, 
                    id_persona = $2,
                    where id = $3 
                    returning * `;

    const result = await db.query(sql, data);

    return res.json({ mensaje: "Actualizacion Exitosa", obj_modificado: result })
 
}

const deleteTelefono = async (req, res) => {

    const { id } = req.params;
    const sql = `delete from telefono where id = $1 returning * `;
    const data = [id];
    const result = await db.query(sql, data);

    return res.json({ menseje: "Borrado Exitoso", obj_borrado: result });

}

export {
    getTelefono, 
    postTelefono, 
    putTelefono, 
    deleteTelefono
}