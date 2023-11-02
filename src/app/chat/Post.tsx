import { Avatar, Box } from "@mui/material";
import React from "react";
import { PostType } from "../types";
import { deepOrange, indigo, teal } from "@mui/material/colors";

function Post({ post }: { post: PostType }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "start",
          mt: 1,
          mb: 3,
        }}
      >
        <Box
          sx={{
            // m: 1,
            mr: 1,
          }}
        >
          <Avatar
            sx={{
              bgcolor: teal[500],
              width: { xs: "12" },
              height: { xs: "12" },
            }}
          >
            {post.userName[0]}
          </Avatar>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "start",
              fontSize: "0.8em",
            }}
          >
            <Box
              sx={{
                pr: 1,
              }}
            >
              {post.userName}
            </Box>
            <Box
              sx={{
                color: "#aaa",
              }}
            >
              {post.createdAt}
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: teal[800],
              color: "white",
              py: "5px",
              px: "12px",
              borderRadius: "0.8em",
              // display: "inline",
              fontSize: "1.2em",
              wordBreak: "break-word", // 長い単語の折り返し
            }}
          >
            {post.content}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Post;
