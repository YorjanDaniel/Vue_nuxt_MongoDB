import { peliculas } from "../models/peliculaModel"

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    const peli = await peliculas.create({
        nombre: body.title,
        descripcion: body.content
    })
    return peli
})