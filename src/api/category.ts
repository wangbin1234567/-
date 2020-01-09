import request from "../utils/request"

export let getCategory =  (id:number) => {
    return request.get(`/categoryDetail?id=${id}`)
}