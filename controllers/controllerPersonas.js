import { db } from "../db/conexion.js";

const getPersonas = async (req, res) => {

    const sql = `select * from personas`;

    const result = await db.query(sql);

    return res.json(result);
};


const postPersonas = async (req, res) => {
    const { nombre, apellido, fecha } = req.body;

    const data = [nombre, apellido, fecha]

    const sql = ` insert into personas 
                 ( nombre, apellido, fecha)
                 values 
                 ($1, $2, $3) returning  *`;

    const result = await db.query(sql, data)

    return res.json({ mensaje: "Insercion Exitosa", obj_creado: result })
}


const putPersona = async (req, res)=>{

    const { id } = req.params;

    console.log(id);

    const { nombre, apellido, fecha } = req.body;
    const data = [ nombre, apellido, fecha, id];

    const sql = ` update personas 
                    set nombre = $1, 
                    apellido = $2,
                    fecha = $3,
                    where id = $4 
                    returning * `;

    const result = await db.query(sql, data);

    return res.json({ mensaje: "Actualizacion Exitosa", obj_modificado: result })
 
}

const deletePersona = async (req, res) => {

    const { id } = req.params;
    const sql = `delete from personas where id = $1 returning * `;
    const data = [id];
    const result = await db.query(sql, data);

    return res.json({ menseje: "Borrado Exitoso", obj_borrado: result });

}

export {
    getPersonas, 
    postPersonas, 
    putPersona, 
    deletePersona
}