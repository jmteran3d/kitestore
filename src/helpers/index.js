import { db, getCategories, getProducts } from "../services";
import { collection, addDoc } from "firebase/firestore";

/**
 *
 * @param {*} collectionName nombre de la colección
 */

export async function createProductsFirestore(collectionName) {
  try {
    // 1. Obtener los productos/categorias de la API
    // const response = await getProducts();
    const response = await getCategories();
    const fetchedProducts = response.data;

    if (!Array.isArray(fetchedProducts)) {
      throw new Error("La respuesta de la API no es un array.");
    }

    // 2. Referencia a la colección en Firestore
    const productsCollection = collection(db, collectionName);

    // 3. Añadir los nuevos productos/categorias a Firestore
    const addPromises = fetchedProducts.map((product) => {
      delete product.id;
      addDoc(productsCollection, {
        ...product,
        createdAt: new Date(),
      });
    });

    await Promise.all(addPromises);

    console.log(`${fetchedProducts.length} productos añadidos a Firestore.`);
  } catch (err) {
    console.error("Error al obtener o almacenar productos:", err);
  }
}