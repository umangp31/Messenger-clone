import "./App.css";
import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import { useEffect } from "react";
import db from "./firebase.js";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    console.log("before call");
    setUsername(prompt("Please enter your name"));
    console.log("was called");
  }, []);
  const sendMessage = (event) => {
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  return (
    <div className="App">
      <img src="./messenger.svg" alt="" width={"100px"} height="100px" />
      <h1>Hello World</h1>
      <h2>Welcome {username}</h2>

      <form className="app_form" action="">
        <FormControl className="app_formcontrol">
          <Input className="app_input" placeholder="Enter a message"
            value={input}
            onChange={(event) => setInput(event.target.value)} 
          />
          <IconButton
            className="app_iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} messages={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
