// "use client"; // 最終的には外すように
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function HomePage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        pb: "4em",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", py: "2rem" }}>
        つかいかた
      </Typography>
      <Typography variant="h5" paragraph={true}>
        「ぐちゃぐちゃっと」とは？
      </Typography>
      <Typography>
        「ぐちゃぐちゃっと」
        は，簡単にいうと「一つのスレしかない2ちゃんねる」です
      </Typography>
      <Typography paragraph={true}>
        もしくは「誰でも入れるラインの公開グループ」と言ってもいいかもしれません
      </Typography>
      <Typography paragraph={true}>
        すべての人の投稿がひとつのチャット欄に表示されるということです．いっぱい投稿してもっとぐちゃぐちゃにしてください
      </Typography>
      <Typography paragraph={true}>
        何をチャットしても構いません！雑談用でもいいですし，メモ代わりに使ってもOKです！あと今季のアニメの話とか...（最低限のリテラシーは守ってください．詳しくは利用規約を読んでください）
      </Typography>
      <Typography paragraph={true}>
        さっそくなにかチャットしてみましょう！
      </Typography>
      <Typography variant="h5" paragraph={true}>
        チャットしてみる
      </Typography>
      <Typography paragraph={true}>
        上のメニューボタンからホームに戻って，下のチャット欄から投稿してみてね
      </Typography>
      <Typography variant="h5" paragraph={true}>
        作者について
      </Typography>
      <Typography paragraph={true}>
        何かありましたら「yamashi4423@gmail.com」までよろしくお願いします
      </Typography>
      <Box
        sx={{
          pr: "1rem",
          display: "flex",
          justifyContent: "right",
          flexWrap: "wrap",
          gap: "0 0.5rem",
        }}
      >
        <a href="https://twitter.com/aQ4xlQ0XYdL0AG7" target="_blank">
          <TwitterIcon sx={{ color: "black" }} />
        </a>
        <a href="https://github.com/yamashi4423">
          <GitHubIcon sx={{ color: "black" }} />
        </a>
      </Box>
    </Container>
  );
}
