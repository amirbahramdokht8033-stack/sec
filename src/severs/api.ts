import axios from "axios";


const client = axios.create({
    baseURL:"http://localhost:8001"

})

export async function getpost(){
  const {data} = await client("/posts")
  return data}

  export async function getposts(id: number | string){
  const {data} = await client(`/posts/${id}`)
  return data }
