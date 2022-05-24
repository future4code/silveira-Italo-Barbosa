import { useState } from "react"
import React from "react"
import Matches from "./components/Matches"
import Home from "./components/Home"
import { FluentCard } from "./Fluent/Fluent"






function App() {

 const [page, setPage]= useState("Home")
 

 const toPage = () => {
		switch (page) {

      case "Home":
      return <Home setPage ={setPage}/>
      case "Matches":
      return <Matches />
      default: 
      return <Home/>

    }
 }



    return	(
		
				
				<FluentCard>
				{toPage() }
				</FluentCard>
		
			
      	
		);
	
}
   

export default App;
