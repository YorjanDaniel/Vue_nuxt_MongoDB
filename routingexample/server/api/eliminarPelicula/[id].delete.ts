export default defineEventHandler(async (event) => {

    const id = await getRouterParam(event, 'id')
    return (id)
})