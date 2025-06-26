import {Schema , model } from 'mongoose'
const peluculasSchema = new Schema({
    title: String,
    content: String,

})

export const peliculas = model('peliculas',peluculasSchema )