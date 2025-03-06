import axios from "axios";

const Instance = axios.create({
    baseURL: "https://base-api-dev.azurewebsites.net/base/"
    // baseURL: process.env.NODE_ENV==='development'?'https://base-api-dev.azurewebsites.net/base/':'https://api.itbase.am/base/'
})


export default Instance;