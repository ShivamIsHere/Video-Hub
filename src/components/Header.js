import React, { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineMenu, AiOutlineSearch } from  "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo.png";

import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions]= useState([]);
  const [ showSuggestions, setShowSuggestions] = useState(false);
  

  const searchCache =useSelector((store)=> store.search);
  
  useEffect(()=>{
    // console.log(searchQuery)
    //make an api call after every key press when diff btw 2api call is <200ms else decline
   const timer= setTimeout(()=>{
    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
    }else{
      // eslint-disable-next-line
      getSearchSuggestions();
    }
  },200);
  
    return ()=>{
      clearTimeout(timer);
    }; 
    // eslint-disable-next-line
  },[searchQuery]);


  const getSearchSuggestions= async()=>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    //update cache
    dispatch(cacheResults({
      [searchQuery]:json[1],
    })
    );
  };



  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col px-5 py-2.5 shadow h-14' >
      <div className="flex col-span-1">
        <AiOutlineMenu className="h-8 cursor-pointer" onClick={()=> toggleMenuHandler()}/>
        <a href="/"> <img  className="h-8 mx-2"
            alt="youtube-logo"
            src={logo}
        /> 
        </a>

      </div>
      <div className="col-span-10 px-10">
        <div>
        <input
          className="w-1/2 h-[36px] border border-gray-200 py-2 px-5  rounded-l-full"
          placeholder=' Search'
          type="text"
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
        />
        <button className="border border-gray-200 py-2 px-5 h-[36px] rounded-r-full bg-gray-100">
          <AiOutlineSearch className=''/>
        </button>
      </div>
      {showSuggestions && (
      <div className=" fixed bg-white py-2 px-2 w-[37rem] shadow-lg border-gray-100">
        <ul>
          {suggestions.map((s)=>(
        <li  key={s}  className="py-2 py-3 shadow-sm hover:bg-gray-100">🔍{s}</li>))}
        </ul>
      </div>
      )}
      </div>
      <div className="col-span-1">
        <FaUserCircle />
      </div>
      
    </div>
  )
}

export default Header;