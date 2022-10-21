import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./Message.css";

export default function Message({ messages, username }) {
  const isUser = username === messages.username;

  return (
    <div>
      <Card className={`message ${isUser && "message_user"}`}>
        <CardContent className="content">
          <Typography sx={{ fontSize: 14 }}>
            {messages.username}:{messages.text}
          </Typography>
        </CardContent>
      </Card>
      <h2></h2>
    </div>
  );
}
