"use client"; // 最終的には外すように
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import MediaCard from "@/components/MediaCard";
import { Container } from "@mui/material";
import Chat from "./chat/Chat";
import { PostType } from "./types";
import {
  QuerySnapshot,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebase";
import { format } from "date-fns";
import dayjs from "dayjs";
export default function HomePage() {
  const [posts, setPosts] = React.useState<PostType[]>([]);
  const postsRef = React.useMemo(() => collection(db, "posts"), []);

  React.useEffect(() => {
    const q = query(postsRef, orderBy("createdAt", "asc"), limit(100));
    return onSnapshot(q, (snapshot: QuerySnapshot) => {
      snapshot.docChanges().forEach((change) => {
        // データベースへの追加を検知したとき
        if (change.type === "added") {
          // チャット初期化
          setPosts((prev) =>
            [
              ...prev,
              {
                id: change.doc.id,
                userName: change.doc.data().userName,
                content: change.doc.data().content,
                createdAt: format(
                  change.doc
                    .data({ serverTimestamps: "estimate" })
                    .createdAt.toDate(),
                  "yyyy/MM/dd"
                ),
              },
            ].sort((a, b) => Number(a.createdAt) - Number(b.createdAt))
          );

          // 画面最下部へスクロール
          const doc = document.documentElement;
          window.setTimeout(
            () => window.scroll(0, doc.scrollHeight - doc.clientHeight),
            100
          );
        }
        // setPosts((prev) => {
        //   const prevPosts = [...prev];
        //   prevPosts.sort((a, b) => Number(a.createdAt) - Number(b.createdAt));
        //   return prevPosts;
        // });
      });
    });
  }, []);

  return (
    <Box>
      <Chat posts={posts} setPosts={setPosts} postsRef={postsRef} />
      {/* <>
        {posts.map((post: PostType) => (
          <div key={post.id}>{post.content}</div>
        ))}
      </> */}
    </Box>
  );
}
