"use client"; // 最終的には外すように
import { Box, Container } from "@mui/material";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { PostType } from "../types";
import Post from "./Post";
import ChatInput from "./ChatInput";
import TopMenu from "@/components/TopMenu";

function Chat({
  posts,
  setPosts,
  postsRef,
}: {
  posts: PostType[];
  setPosts: Dispatch<SetStateAction<PostType[]>>;
  postsRef: any;
}) {
  return (
    <Container
      maxWidth="sm"
      sx={{
        // pt: "2em", // ヘッダーをfixedにする場合
        pb: "4em",
      }}
    >
      {posts.map((post: PostType, index) => (
        <Post key={index} post={post} />
      ))}
      {/* <Box sx={{ height: "1rem" }}></Box> */}
      <Box
        sx={{
          position: "relative",
          maxWidth: "600px",
        }}
      >
        <ChatInput posts={posts} setPosts={setPosts} postsRef={postsRef} />
      </Box>
    </Container>
  );
}

export default Chat;
