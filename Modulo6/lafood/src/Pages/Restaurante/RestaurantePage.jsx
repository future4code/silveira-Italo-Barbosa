import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {url} from '../../Constants/Url'
import ProductsSection from '../../Components/ProductSection/ProductSection';
import ShowModal from '../../Components/modal/Modal';
import { useGlobal } from '../../Context/GlobalStateContext';

export default function Restaurante () {
    const [restaurantDetails, setRestaurantDetails] = useState([]);
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(false)
    const [open, setOpen] = useState(false)
    const [quantity, setQuantity] = useState('')
    const token = localStorage.getItem("token")
    const {data} = useGlobal();
    const {cart, setCart} = data

    useEffect(() => {
        getrestaurantsDetails();
      }, []);

    const getrestaurantsDetails = () => {
        axios
          .get(`${url}/restaurants/5`, {
            headers: { auth: token },
          })
          .then((response) => {
            setRestaurantDetails(response.data.restaurant);
            setProducts(response.data.restaurant.products)
          })
          .catch((error) => console.log(error.message));
      };

      const handleOpen = () => {
        setOpen(true)
      }
    
      const handleClose = () => {
        setOpen(false)
      }

      const addToCartOrder = (id, quantity) => {
        const newCart = cart
        newCart.products.push({id: id, quantity: quantity})
        setCart(newCart)
        console.log(cart)
      }


    return (
      <div>
        <ShowModal
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
          quantity={quantity}
          setQuantity={setQuantity}
          product={product}
          addToCartOrder={addToCartOrder}
        />
        <div>
          <img src={restaurantDetails.logoUrl} alt={"Logo do restaurante"} />
        </div>
        <h2> {restaurantDetails.name} </h2>
        <p> {restaurantDetails.category} </p>
        <span> {restaurantDetails.deliveryTime} min </span>
        <span>
          Frete:
          {restaurantDetails.shipping === 0
            ? "Grátis"
            : `R$ ${restaurantDetails.shipping},00`}
        </span>
        <p> {restaurantDetails.address} </p>

        <div>
          <ProductsSection
            products={products}
            handleOpen={handleOpen}
            setProduct={setProduct}
            addToCartOrder={addToCartOrder}
          />
        </div>
      </div>
    );
}