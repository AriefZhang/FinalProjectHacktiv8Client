import axios from "axios"

const ORIGIN = "http://localhost:3000"

export const carsApi = axios.create({
  baseURL: `${ORIGIN}/cars`
})

export const dealerApi = axios.create({
  baseURL: `${ORIGIN}/dealers`
})