import axios from "axios";
import { BASE_URL } from "../config/api";

export async function getCategories() {
    return axios.get(`${BASE_URL}/products/categories`);
}