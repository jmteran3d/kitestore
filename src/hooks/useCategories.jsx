import { useEffect, useState } from "react";

import { db } from "../services";
import { collection, getDocs } from "firebase/firestore";

export const useCategories = () => {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionName = collection(db, "categories");
    getDocs(collectionName)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { categories, loading };
};