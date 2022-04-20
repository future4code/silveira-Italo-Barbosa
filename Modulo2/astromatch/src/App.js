import { useState } from "react"
import React from "react"
import Matches from "./components/Matches"
import Home from "./components/Home"







function App() {

 const [Page, setPage]= useState("Home")
 

 const ToPage = () => {
		switch (Page) {

      case "Home":
      return <home ToPage ={ToPage}/>
      case "Matches":
      return <Matches/>
      default: 
      return <home/>

    }
 }



    return	(
		
				
				<div>
				{ToPage() }
				</div>
		
			
      	
		);
	
}
   

export default App;
