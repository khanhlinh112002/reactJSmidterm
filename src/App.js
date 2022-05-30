import React,{Component} from 'react';
import Header from './Components/header/Header';
import Navigation from './Components/navigation/Navigation';
import Admin from './Admin/Admin';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Newspaper from './Components/content/Newspaper/Newspaper'
// import Header from './Components/content/Newspaper/Newspaper';
export default class App extends Component{
	
	render(){
		
		return(
			<BrowserRouter>
			{/* <div>
				<Header></Header>
				<Navigation></Navigation>
				<Newspaper></Newspaper>
			</div> */}
			
			  <div class="w3-bar">
  <button class="w3-button w3-left w3-teal"><Link to="/ManagementPost">ManagementPost</Link></button>
  <button class="w3-button w3-right w3-teal"><Link to="/Newspaper">Newspaper</Link></button>
</div>
			
			<Routes>
			  <Route path="/ManagementPost" element={<Admin />}></Route>
			  <Route path="/Newspaper" element={<Newspaper />}></Route>
	
			</Routes>
		  </BrowserRouter>
		)
	}
}