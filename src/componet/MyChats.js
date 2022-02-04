import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { getSender } from '../config/ChatLogic';
import { ChatState } from '../context/ChatProvider';
import ChatLoading from './ChatLoading';
import GroupChatModel from './miscellaneous/GroupChatModel';

function MyChats(fetchAgain) {
  let chats = [
    {
      id: 1,
      name: "Mahesh",
    },
    {
      id: 2,
      name: "vm",
    },
    {
      id: 3,
      name: "rama",
    },
    {
      id: 4,
      name: "sita",
    },
    {
      id: 6,
      name: "Mahesh",
    },
    {
      id: 8,
      name: "vm",
    },
  ];
  // const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
  let [loggedUser, setLoggedUser] = useState();
  let [selectedChat, setSelectedChat] = useState({
    id: 1,
    name: "Mahesh",
  });
  let [user, setUser] = useState();
  // let [notification, setNotification] = useState([]);
  // let [chats, setChats] = useState();
  useEffect(() => {
    setLoggedUser((chats));
    // fetchChats();
    // eslint-disable-next-line
  }, []);


  return (<Box
    d={{ base: "flex", md: "flex" }}
    flexDir={"column"}
    alignItems={"center"}
    p={3}
    bg={"white"}
    w={{ base: "100%", md: "31%" }}
    borderRadius={"lg"}
  >

    <Box pb={3} px={3} fontSize={{ base: "28px", md: "30px" }} d="flex"
     width={"100%"} justifyContent={"space-between"} alignItems={"center"}>
       My Chats
       <GroupChatModel>
      <Button
        d="flex"
        fontSize={{ base: "17px", md: "10px", lg: "17px" }} rightIcon={<AddIcon />}
      >New Group </Button>
       </GroupChatModel>
    </Box>
    <Box d={"flex"} flexDir={"column"} p={3} bg={"#F8F8F8"} width={"100%"} h="100%" borderRadius={"lg"} overflow={"hidden"}>
      {chats ?
        <Stack overflowY={"scroll"}>
          {chats.map((chat) => (
            <Box
              onClick={(chat) => setSelectedChat(chat)}
              cursor="pointer"
              bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
              color={selectedChat.id === chat.id ? "white" : "black"}
              px={6}
              py={6}
              borderRadius="lg"
              key={chat.id}>
              <Text>{chat.isGroupChat ? getSender(loggedUser, chat.users) : chat.name}</Text>

            </Box>

          ))}
        </Stack> : <ChatLoading />}
    </Box>
  </Box>);
}

export default MyChats;
