import { Box, Stack } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import WalletFeed from "../components/WalletFeed";
import SidebarMobile from "../components/SidebarMobile";
import SidebarMedium from "../components/SidebarMedium";

const Wallet = () => {
  return (
    <Box bgcolor="lightyellow">
      <Stack direction="row" height="100vh">
        <Sidebar />
        <SidebarMobile />
        <SidebarMedium />
        <Stack sx={{ width: "85%" }}>
          <Navbar />
          <WalletFeed />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Wallet;
