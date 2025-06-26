import { peliculas } from "../models/peliculaModel"

export default defineEventHandler(async (event) => {

    return{
        peliculas: await peliculas.find()
    }
})