import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";
import { url } from "../Constants/Url";
import { useParams } from "react-router-dom"

export default function GlobalState(props) {
  const params = useParams()
  const { id } = useParams()
  const token = localStorage.getItem("token")
  const [restaurants, setrestaurants] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [cart, setCart] = useState({
    products: [],
    paymentMethod: ''
  })
  const [address, setaddress] = useState({});
  const [profile, setprofile] = useState({});
  const [updateprofile, setupdateprofile] = useState({});
  const [order, setorder] = useState({});
  const [nameHeader, setNameHeader] = useState("");
  const [buttonBack, setButtonBack] = useState(false)



  useEffect(() => {
    getrestaurants();
    getrestaurantsDetails();
    getaddEndereco();
    getEndereco();
    getprofile();
    getorder();
  }, [order]);

  const getrestaurants = () => {
    axios
      .get(url, { headers: { auth: "coloque seu token aqui" } })
      .then((response) => {
        setrestaurants(response.data.restaurants);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    const NovaList = [];
    restaurants.forEach((item) => {
      axios
        .get(`${url}/restaurants`)
        .then((response) => {
          NovaList.push(response.data);
          if (NovaList.length === 10) {
            const ListOrdern = NovaList.sort((a, b) => {
              return a.id - b.id;
            });
            setrestaurants(ListOrdern);
          }
        })
        .catch((error) => console.log(error.message));
    });
  }, [restaurants]);

  const getrestaurantsDetails = () => {
    axios
      .get(`${url}/restaurants/${params.id}`, {
        headers: { auth: token },
      })
      .then((response) => {
        setRestaurantDetails(response.data.restaurant);
      })
      .catch((error) => console.log(error.message));
  };

  const getaddEndereco = () => {

    axios.put(`${url}/address`, { headers: { auth: "token" } }
    )

      .then((response) => { setaddress(response.data.results) })

      .catch((error) => console.log(error.message));
  };

  const getEndereco = () => {
    axios
      .get(`${url}/profile/address`, {
        headers: { auth: token },
      })

      .then((response) => {
        setaddress(response.data.address);
      })
      .catch((error) => console.log(error.message));
  };

  const getprofile = () => {

    axios.put(`${url}/profile`, { headers: { auth: "token" } }
    )

      .then((response) => { setprofile(response.data.results) })

      .catch((error) => console.log(error.message));
  };

  const getupdateprofile = (getprofile) => {
    axios.put(`${url}/profile`, { headers: { auth: localStorage.getItem("token") } }).then(() => { alert("Perfil atualizado") }).catch((error) => alert(error.response.data.message))
  }

  const foodOrder = (body, clear) => {
    axios.post(`${url}/futureEatsB/restaurants/${restaurants.id}/order`)
      .then(() => {
        setorder(response.data.order)
        alert("Pedido feito")
        clear()
      })
      .catch((error) => alert(error.response.message))
  }

  const getorder = () => {

    axios.put(`${url}/active-order`, { headers: { auth: "token" } }
    )

      .then((response) => { order(response.data.results) })

      .catch((error) => console.log(error.message))
  }

  const getorders = () => {

    axios.put(`${url}/ordens/history`, { headers: { auth: "token" } }
    )

      .then((response) => { order(response.data.results) })

      .catch((error) => console.log(error.message))
  }

  console.log(cartProducts)

  const data = {
    restaurants,
    setrestaurants,
    restaurantDetails,
    setRestaurantDetails,
    cartProducts,
    setCartProducts,
    cart,
    setCart,
    address,
    setaddress,
    nameHeader,
    setNameHeader,
    buttonBack,
    setButtonBack,
  };

  const states = { address, cartProducts };
  const setters = {};
  const requests = {};
  const func = {};

  return (
    <GlobalStateContext.Provider
      value={{ states, setters, requests, func, data }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
}
