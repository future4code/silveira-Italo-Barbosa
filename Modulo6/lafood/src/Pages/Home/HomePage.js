/* import React from 'react';

export default function HomePage () {

    const RestaurantesOp = restaurants && restaurants.filter( ((restaurant) => { return ( ! search? true : restaurant.name.tolowerCase().includes(search.tolowerCase())
        ) 
        
        }) 
        
        ).map((restaurant) => { 
        return( <div Key={restaurant.id}> 
          <div onClick={()=> onClickCard(restaurant.id)}>
          <Img src={restaurant.logoUrl}/>
        <h3> {restaurant.name} </h3> 
        <p> Tempo de entrega : {restaurant.deliveryTime} tempo </p> 
        <p> Taxa de entrega: R${restaurant.shipping}</p>
        </div>
        </div> 
        
        )}) 
        
        const restaurantFilter = ( type ) => { 
        
        if( type === category) { setCategory("")
        }
        else{
        setCategory(type)} 
        
        } 
        return(
        <div> 
        
        {RestaurantesOp}
        
        
        </div>
        
        )
}

*/