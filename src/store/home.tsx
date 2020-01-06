// import React from 'react'
import {observable, action, computed} from 'mobx'
import axios from "axios"
export default class HomeStore{
  
    @action 
    getCarousel(){
        axios.get("/").then(res=>{
            console.log(res)
        })
    }
}