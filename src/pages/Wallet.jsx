import { Box, Stack } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import WalletFeed from "../components/WalletFeed";

const Wallet = () => {
  return (
    <Box bgcolor="lightyellow">
      <Stack direction="row">
        <Sidebar />
        <Stack sx={{ width: "85%" }}>
          <Navbar />
          <WalletFeed />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Wallet;
