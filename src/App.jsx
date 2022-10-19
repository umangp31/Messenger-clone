import "./App.css";
import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import { useEffect } from "react";
function App() {
  const [messages, setMessages] = useState([
    {username:'umang', text:'heyyyy'},
    {username:'clever',text:'Yo yo yo yo'}
  ]);
  const [username,setUsername]=useState('');
  const [input, setInput] = useState('');
  useEffect(()=>{
    console.log("before call");
    setUsername(prompt('Please enter your name'));
    console.log("was called");
  },[])
  const sendMessage = (event) => {
    setMessages([...messages, {username:username,text:input}]);
    setInput('');
  };
  return( 
    <div className="App">
      <h1>Hello World</h1>
      <h2>Welcome {username}</h2>
      <FormControl>
        <InputLabel>Enter a message</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          Send Message
        </Button>
      </FormControl>
        
      {messages.map((messages) => (
        <Message username={messages.username} text={messages.text}/>
      ))}
    </div>
  );
}

export default App;
