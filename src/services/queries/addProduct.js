import axios from "axios";
import { BASE_URL, API_CONFIG } from "../config/api";

export async function addProduct(data) {
  return await axios.post(
    `${BASE_URL}/products/add`,
    JSON.stringify(data),
    API_CONFIG
  );
}