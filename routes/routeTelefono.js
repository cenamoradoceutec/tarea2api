//const express = require('express');
import express from 'express';
const telefono = express();
import { getTelefono, 
         postTelefono, 
         putTelefono, 
         deleteTelefono } from '../controllers/controllerTelefono.js'; 

// Seleccionar telefono 

telefono.get('/', getTelefono);

// creacion de telefono 

telefono.post('/', postTelefono);

// Actualizacion de telefono

telefono.put('/:id', putTelefono);


telefono.delete('/:id', deleteTelefono );

export {
    telefono
}