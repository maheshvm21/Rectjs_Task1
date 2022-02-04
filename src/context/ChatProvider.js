import { createContext, useContext, useEffect, useState } from "react";


//
const ChatContext = createContext();

const ChatProvider=({childern})=>{
    console.log('before');
    const[user,setUser]=useState("");
    console.log(user,'after user');


//to store user data in local storage.....
    useEffect(()=>{
        
        const userinfo= JSON.parse(localStorage.getItem('userInfo'));
        console.log(userinfo,'inside use effect');
       setUser(userinfo);
    },[])
    return<ChatContext.Provider value={{user,setUser}}>{childern}</ChatContext.Provider>
};
//use react hook
//use context takes that context we have created.
export const ChatState=()=>{
    console.log(ChatContext,'ChatContext');
    return useContext(ChatContext);
};
export default ChatProvider;