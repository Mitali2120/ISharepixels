import React, { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar, UserProfile }  from '../components'; 
import { client } from '../client';
import { userQuery } from '../utils/data';
import logo from '../assets/logo.png';
import pins from './Pins';



const Home = () => {

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);
    client.fetch(query)
    .then((data) => {
      setUser(data[0]);
    })
  }, []);
  
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  return (
    <div className= "flex bg-gray-50 md:flow-row flex-col h-screen transaction-height duration-75 ease-out">
          <div className= "hidden md:flex h-screen flex-initial">
            <Sidebar />
          </div>
          <div className="flex md:hidden flex-row">
            <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
              <Link to="/">
                <img src={logo} alt = "logo" className="w-28"/>
              </Link>
              <Link to={`user-profile/${user?._id}`}>
                <img src={user?.image} alt = "logo" className="w-28"/>
              </Link>
          </div>
          {toggleSidebar && }
    </div>
    )
  
}

export default Home;
