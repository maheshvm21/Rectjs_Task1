import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input, Menu, MenuButton, Text, toast, Tooltip, useToast } from "@chakra-ui/react";
import {useDisclosure} from "@chakra-ui/hooks"
import {BellIcon,} from "@chakra-ui/icons"
import React from "react";
import { useState } from "react";
import ChatLoading from "../ChatLoading";
import UserListItem from "../UserListItem";

function SiderBar() {
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

  const [search,setSearch]= useState();
  const [searchResult,setSearchResult]=useState(chats);
  const [loading,setLoading]=useState(false);
  const [loadingchat,setLoadingChat]=useState();
  const { isOpen, onOpen, onClose } = useDisclosure()

  
  let accessChat=()=>{

  }
  // console.log(typeof(chats),'hhhhhh');
  let result;
console.log(result,'result');
  const toast=useToast()
  const handleSearch=()=>{
    if(!search){
      toast({
         title:"Somthing went wrong...",
         status:"warning",
         duration:5000,
         isClosable:true,
         position:"top-left",
      });
      return;
    }
    try {
      
       setLoading(true);
       console.log((chats[0].name),'chats');
       console.log((search),'searchhh');
       
       result=chats.filter((chat)=> JSON.stringify(chat).toLowerCase().filter(search.toLowerCase()) !== -1);
       console.log(result,'result inside');
       setLoading(false);
      // api
    } catch (error) {
      toast({
        title:"Error occured..",
        status:"Failed to search",
        duration:5000,
        isClosable:true,
        position:"bottom-left",
     });
    }
  }
  return (
    <div>
      <Box
        d="flex"
        width={"100%"}
        bg={"white"}
        alignItems={"center"}
        p={"5px 10px 5px 10px"}
        borderWidth={"5px"}
      >
        <Tooltip label="Search User to chat" hasArrow placement="bottom-end">
          <Button variant={"ghost"} onClick={onOpen}>
            <i class="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px="4">
              Search user
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize={"2xl"} m={"0px 0px 0px 30%"} textAlign={"justify"} >
          Chat-Box
          </Text>
        <div>
          <Menu>
            <MenuButton p={"1"} m={"0px 0px 0px 500px"}>
              <BellIcon fontSize={"2xl"} />
            </MenuButton>
         
          </Menu>
        </div>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderWidth={"1px"}>user search</DrawerHeader>
            <DrawerBody d={"flex"} pb={2}  flexDir={"column"}>
          <Input placeholder="Search by email or user" mr={2} value={search} onChange={(e)=>setSearch(e.target.value)}/>
          <Button onClick={handleSearch} d={"flex"} flexDir={""}>Go</Button>
          {/* {console.log(searchResult,'searchResult')}; */}
          {loading?<ChatLoading/>:(searchResult?.map((chat)=>
          (<UserListItem
            key={chat.id}
            user={chat}
            handleFunction={()=>accessChat(chat.id)}
            >
          </UserListItem>)))}
        </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
        
      </Drawer>
    </div>
  );
}

export default SiderBar;
