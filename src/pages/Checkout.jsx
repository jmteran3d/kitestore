import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { Button, Input } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { db } from "../services";
import { useProductsStore } from "../store";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
  });

  const cartState = useProductsStore((state) => state.cart);
  const total = useProductsStore((state) => state.getTotalPrice());
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      buyer: form,
      items: cartState.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      total,
    };

    const collectionName = collection(db, "orders");

    addDoc(collectionName, data)
      .then(({ id }) => {
        Swal.fire({
          title: "Su compra ha sido realizada!",
          text: `Para reclamos indicar el siguiente numero de compra: ${id}`,
          icon: "success",
          draggable: true,
          confirmButtonText: "Listo",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input
        type="text"
        placeholder="Nombre completo"
        onChange={(e) => {
          setForm({
            ...form,
            name: e.target.value,
          });
        }}
      />
      <Input
        type="text"
        placeholder="Telefono"
        onChange={(e) => {
          setForm({
            ...form,
            phone: e.target.value,
          });
        }}
      />
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setForm({
            ...form,
            email: e.target.value,
          });
        }}
      />
      <Button type="submit">Comprar</Button>
    </form>
  );
};