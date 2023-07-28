import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessages';
import { generateRandomName, makeRandomMessage } from '../utils/helper';


const LiveChat = () => {
    const [sendLiveMessage,setSendLiveMessage]= useState("");
    const dispatch = useDispatch();
    const chatMessage = useSelector((store)=>store.chat.message);


    useEffect(()=>{
        const i = setInterval(()=>{
//api polling
            dispatch(addMessage({
                name:generateRandomName(),
                message:makeRandomMessage(20)+"🙏",
            }));
        },200);

        return ()=>clearInterval(i);
        // eslint-disable-next-line
    },[]);

  return (
    <>
    <div className="w-full h-[558px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
    <div> {chatMessage.map((c, i)=>(<ChatMessage key={i}
        name={c.name}
        message={c.message}
        />
        ))
        }
    </div>
    
    </div>
    <form className='w-full p-2 ml-2 border border-black  flex-wrap bg-green-300' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"Shivam",
            message:sendLiveMessage,
        }))
        setSendLiveMessage("");
    }}>
        <input className='px-2 w-72' type='text' placeholder='Type Your Comment' value={sendLiveMessage} onChange={(e)=>{
            setSendLiveMessage(e.target.value);
        }}/>
        <button className='px-2 mx-2 bg-green-100'>SEND</button>
    </form>
    </>
  )
}

export default LiveChat;
