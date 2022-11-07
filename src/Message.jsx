import { Card, CardContent, Typography } from "@material-ui/core";
import React,{forwardRef} from "react";
import "./Message.css";

const Message=forwardRef(({messages,username },ref)=> {
  const isUser = username === messages.username;

  return (
    <div className="box" ref={ref}>
      <Card className={`message ${isUser && "message_user"}`}>
        <CardContent className="content">
          <Typography sx={{ fontSize: 14 }}>
            {!isUser && `${messages.username || 'Unknown User'}: `} {messages.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
})

export default Message
