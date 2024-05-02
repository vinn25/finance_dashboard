import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Toolbar,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/Inbox";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import HelpIcon from "@mui/icons-material/Help";

const Navbar = () => {
  return (
    <AppBar
      sx={{
        bgcolor: "white",
        position: "sticky",
        width: "100%",
        boxShadow: "none",
        borderBottom: "1px solid grey",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack spacing="4%" direction="row">
          <IconButton>
            <InboxIcon />
          </IconButton>

          <IconButton>
            <ZoomOutMapIcon />
          </IconButton>
        </Stack>

        <IconButton>
          <HelpIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
