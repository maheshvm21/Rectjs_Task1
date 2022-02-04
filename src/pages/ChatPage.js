import { Box } from '@chakra-ui/react';
import React from 'react';
import SiderBar from '../componet/miscellaneous/SiderBar';
import MyChats from '../componet/MyChats';
import MyChatsBox from '../componet/MyChatsBox';
import { ChatState } from '../context/ChatProvider';

function ChatPage() {
    //  const {} =ChatState();
  return <div style={{width:"100%"}}>
      { <SiderBar/>}   
      <Box d='flex' justifyContent="space-between" width={"100%"} height={"91.5vh"} p="10px">
          {<MyChats/>}
          { <MyChatsBox/>}
      </Box>

  </div>;
}

export default ChatPage;
