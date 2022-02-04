// import logo from './logo.svg';
import './App.css';

import {Route} from 'react-router-dom'
import Chatpage from './pages/ChatPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
     <Route path="/" component={HomePage} exact></Route>
     <Route path="/chats" component={Chatpage}></Route> 
    </div>
  );
}

export default App;
