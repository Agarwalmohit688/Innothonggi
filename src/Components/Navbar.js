import React, { useState,useEffect } from 'react'
import {AiFillCaretDown} from 'react-icons/ai';
import {FaBars} from 'react-icons/fa';



function Navbar() {

    const [display,setDisplay] = useState(false);
    const [show,setShow] = useState(false);




    const [showw,handleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>10){
                handleShow(true)
                console.log("window is scrolled")
            }else{
                handleShow(false);
            }
        });
        return () =>{
            window.addEventListener("scroll");
        };
    },[])
    
    return (
        <>
        <div className={`navbar ${showw ? "Nav-hide" :null}`}>
        <div className="logo">
        <img src={process.env.PUBLIC_URL + "/images/logo-circle.png"} alt="logo"></img>
        <span className="logo-heading">Innothon 2021</span>
        </div>
        <ul className="nav-links">
         <li className="links link-discover" onMouseEnter={()=>setDisplay(true)} onMouseLeave={()=>setDisplay(false)}> 
         <a href="#discover">discover</a>
         <span className="down"><AiFillCaretDown className="downlogo"/></span>
         
          {display ? <div className="sub-discover">
             <li><a href="#exploreggi">About GGi</a></li>
             <li><a href="#exploreggi">Explore GGi</a></li>
         </div> :null }
         
         </li>
         <li className="links"><a href="#news&media">New & media</a></li>
         <li className="links"><a href="#Announcements">Announcements</a></li>
         <li className="links"><a href="#Support">Support</a></li>
         <li className="links"><a href="#d">contacts</a></li>
        </ul> 
        <div className="btns">
         <button className="login-btn">Login/Register</button>
        </div>
        <div className="bars">
         <button onClick={()=>setShow(!show)}><FaBars /></button>
        </div>

            
        </div>


       {show ? <div className="sidebar">

        <div className="side-link-div">
        <li className="sidelinks sdiscover" onMouseEnter={()=>setDisplay(true)} onMouseLeave={()=>setDisplay(false)}> 
         <a href="#discover">discover</a>
         <span className="down"><AiFillCaretDown className="sidelogo"/></span>
         
          {display ? <div className="side-discover">
             <li><a href="#exploreggi">About GGi</a></li>
             <li><a href="#exploreggi">Explore GGi</a></li>
         </div> :null }
         
         </li>
        <li className="sidelinks"><a href="#news&media">New & media</a></li>
         <li className="sidelinks"><a href="#Announcements">Announcements</a></li>
         <li className="sidelinks"><a href="#Support">Support</a></li>
         <li className="sidelinks"><a href="#d">contacts</a></li>
         <div className="sidebtn">
         <button className="side-btn">Login/Register</button>
        </div>
         </div> 

              </div> : null}

             
    </>
       
    )
}

export default Navbar;
