"use client";
import { Box, Fab, IconButton, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { Dispatch, SetStateAction, useState } from "react";
import { PostType } from "../types";
import SendIcon from "@mui/icons-material/Send";
import { addDoc, serverTimestamp } from "firebase/firestore";
import TopMenu from "@/components/TopMenu";

const Form = styled("form")({
  color: "darkslategray",
  maxWidth: "100%",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
});

const CustomButton = styled(IconButton)({
  color: "white",
  backgroundColor: "#0F4C75",
  boxShadow: " 0 0 4px gray",
  "&:hover": {
    backgroundColor: "#0F4C75",
    boxShadow: " 0 0 4px gray",
  },
});

function ChatInput({
  posts,
  setPosts,
  postsRef,
}: {
  posts: PostType[];
  setPosts: Dispatch<SetStateAction<PostType[]>>;
  postsRef: any;
}) {
  const [input, setInput] = useState("");

  function handleChange(e: any) {
    setInput(e.target.value);
  }
  async function handleSubmit(e: any) {
    e.preventDefault();
    // 入力が無かったら何もしない
    if (input === "") {
      return;
    }
    const newPost = {
      userName: "名無し",
      content: input,
      createdAt: serverTimestamp(),
    };
    const res = await addDoc(postsRef, newPost); // データベースに追加
    console.log(res);
    // setPosts([...posts, newPost]); // データベースに追加されると検知するので，postsに追加される
    setInput("");
  }

  return (
    <Box
      className="chatInput"
      sx={{
        position: "fixed",
        bottom: { xs: "0.5em", sm: "2em" },
        width: { xs: "90%", md: "60%", lg: "65%" },
        maxWidth: "600px", // Chat欄のコンテナがsmで設定されてあるので，それと対応
        // width: { xs: "350px", sm: "90%" },
      }}
    >
      <Form onSubmit={handleSubmit}>
        <TextField
          size="small"
          fullWidth
          id="outlined-basic"
          label="chat!"
          variant="outlined"
          onChange={handleChange}
          value={input}
          sx={{
            // border: "1px solid #aaa",
            // borderRadius: "2em",
            mr: "0.5em",
          }}
          InputProps={{
            style: {
              backgroundColor: "white",
              borderRadius: "2em",
            },
          }}
        />
        {/* <Fab size="small" color="primary" aria-label="add" type="submit"></Fab> */}
        <CustomButton type="submit">
          <SendIcon />
        </CustomButton>
        {/* <TopMenu /> */}
      </Form>
    </Box>
  );
}

export default ChatInput;
