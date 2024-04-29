import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {

  const[prompt,setPrompt]=useState("")
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  console.log(prompt)
  const showMenu=()=>{
    setMenu(!menu)
  }
  const {user} = useContext(UserContext); // Assuming this is just for testing purposes
  console.log(user)
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4"> 
      <h1 className="text-xl font-extrabold"><Link to="/">Blogify</Link></h1>
      <div className="flex justify-center items-center space-x-0">
        <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer"><FaSearch /></p>
        <input  onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3 py-1" placeholder="Search a post" type="text" />
      </div>
      <div className="hidden md:flex items-center justify-center space-x-4 md:space-x-4">
        {user ? <h3><Link to="/write">Write</Link></h3> : <h3><Link to="/login">Login</Link></h3>}
        {user ? <h3><Link to="/profile">Profile</Link></h3> : <h3><Link to="/register">Register</Link></h3>}
      </div>
    <div onClick={showMenu} className="md:hidden text-lg">
    <p className="cursor-pointer"><FaBars /></p>
    {menu && <Menu/>}

    </div>




    </div>
  );
};

export default Navbar;
