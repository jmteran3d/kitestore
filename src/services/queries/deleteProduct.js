import axios from "axios";
import { BASE_URL } from "../config/api";

//Soft Delete --> elimina el producto (pero no lo hace). Le agrega isDelete al registro en la base de datos

export async function deleteProduct(id) {
  return await axios.delete(`${BASE_URL}/products/${id}`);
}