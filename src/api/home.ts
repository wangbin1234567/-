import request from "../utils/request"

export let getCarousel =  () => {
    return request.get("/")
}