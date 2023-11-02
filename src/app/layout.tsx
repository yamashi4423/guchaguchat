import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import "../styles/global.css";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import TopMenu from "@/components/TopMenu";
import Head from "next/head";

export const metadata = {
  title: "ぐちゃぐちゃっと | だんだんぐちゃぐちゃになっていくチャットアプリ",
  description:
    "ぐちゃぐちゃっと | だんだんぐちゃぐちゃになっていくチャットアプリ",
};

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "Starred", href: "/starred", icon: StarIcon },
  { text: "Tasks", href: "/tasks", icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [
  { text: "Settings", icon: SettingsIcon },
  { text: "Support", icon: SupportIcon },
  { text: "Logout", icon: LogoutIcon },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];
  return (
    <html lang="ja">
      {/* <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 10, m: 0 }}>
            <Toolbar
              sx={{ backgroundColor: "background.paper", display: "flex" }}
            >
              <Link href="/">
                <Box
                  component="img"
                  sx={{
                    height: 30,
                    width: 30,
                    // maxHeight: { xs: 30, md: 50 },
                    // maxWidth: { xs: 30, md: 50 },
                    display: "flex",
                    alignItems: "center",
                    mr: 1,
                  }}
                  alt="logo"
                  src="/logo3.png"
                />
              </Link>
              <Link href="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  color="primary.main"
                  sx={{ fontWeight: "bold" }}
                >
                  ぐちゃぐちゃっと
                </Typography>
              </Link>
              <Box
                sx={{
                  "&: last-child": {
                    ml: "auto",
                  },
                }}
              >
                <TopMenu />
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              // ml: `${DRAWER_WIDTH}px`, // 左ドロワーを表示する用
              mt: ["48px", "56px", "64px"],
              pt: "1rem", // ヘッダーをfixedにする場合 -----------------
              // p: 1,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
