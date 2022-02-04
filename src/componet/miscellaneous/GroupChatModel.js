import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ChatState } from '../../context/ChatProvider';

function GroupChatModel({children}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [groupChatName,setGroupChatName]=useState();
    // const [selectedUsers,setSelectedUsers]=useState([]);
    // const [search,setSearch]=useState("");
    // const [searchResult,setSearchResult]=useState();
    // const [loading,setLoading]=useState();

    const toast=useToast();
    // const {user,chats,setchats}=ChatState();
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    return (
      <>
        <span onClick={onOpen}>{children}</span>
  
        <Modal  initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}  >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader  textAlign={'center'} fontFamily={"mono"}>Create Group Chat</ModalHeader>
            <ModalCloseButton />
            <ModalBody  width={"100%"}    >
              {/* <Lorem count={2} /> */}
              <Input   ref={initialRef} placeholder='Group Name' />
            <Input mt={4}ref={initialRef} placeholder='Add Users eg:Mahesh ,Vm,Bhanu' />
            </ModalBody>
           

            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Add
              </Button>
            
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default GroupChatModel;
