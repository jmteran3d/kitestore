import axios from "axios";
import { BASE_URL } from "../config/api";

export async function searchProduct(searchText) {
  return await axios.get(`${BASE_URL}/products/search?q=${searchText}`);
}