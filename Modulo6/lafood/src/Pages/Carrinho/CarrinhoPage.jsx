import React, { useState, useEffect } from 'react';
import { useGlobal } from '../../Context/GlobalStateContext';
import { url } from '../../constants/Url';
import axios from 'axios'

export default function Carrinho() {
  const { states } = useGlobal();
  const { address, cartProducts } = states;
  const [restaurantDetails, setRestaurantDetails] = useState([]);

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = () => {
    const URL = `${url}/restaurants/1`;
    const token = localStorage.getItem("token");

    axios
      .get(URL, {
        headers: { auth: token },
      })
      .then((response) => {
        setRestaurantDetails(response.data.restaurant);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <main>
      <div>
        <p> Endereço de entrega </p>
        <p>
          {" "}
          {address.street}, {address.number}{" "}
        </p>
      </div>

      <div>
        <p> {restaurantDetails.name} </p>
        <p> {restaurantDetails.category} </p>
        <span> {restaurantDetails.deliveryTime} min </span>
        <span>
          Frete:
          {restaurantDetails.shipping === 0
            ? "Grátis"
            : `R$ ${restaurantDetails.shipping},00`}
        </span>
        <p> {restaurantDetails.address} </p>
      </div>

      <div>
          Carrinho vazio :/
      </div>

      <div>
        <p> SUBTOTAL </p>
        <span>
          Frete:
          {restaurantDetails.shipping === 0
            ? "Grátis"
            : `R$ ${restaurantDetails.shipping},00`}{" "}
        </span>
        <span> R$ 00,00 </span>
      </div>

      <div>
        <form>
          <p> Forma de pagamento </p>
          <hr />
          <input type="checkbox" id='money'/>
          <label for='money'> Dinheiro </label>
          <input type="checkbox" id='credit'/>
            <label for='credit'> Cartão de crédito </label>
          <button>Confirmar </button>
        </form>
      </div>
    </main>
  );
}