import {
  Avatar,
  Box,
  Divider,
  Fab,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SmsIcon from "@mui/icons-material/Sms";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <Box sx={{ bgcolor: "#080325", width: "15%" }}>
      <Stack spacing="40%">
        <List>
          <ListItem sx={{ gap: "30%", p: "10%" }}>
            <Typography variant="h5" color="white" fontStyle="italic">
              Ringku
            </Typography>
            <Fab size="small" color="primary" sx={{ boxShadow: "none" }}>
              <MenuIcon />
            </Fab>
          </ListItem>

          <ListItem>
            <ListItemButton
              sx={{
                p: "10%",
                borderRadius: "5px",
                "&:hover": { bgcolor: "grey" },
              }}
            >
              <ListItemIcon>
                <SmsIcon sx={{ fontSize: "large", color: "white" }} />
              </ListItemIcon>
              {/* <ListItemText primary="My Wallet" sx={{ color: "white" }} /> */}
              <Typography variant="caption" sx={{ color: "white" }}>
                My Wallet
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              sx={{
                p: "10%",
                borderRadius: "5px",
                "&:hover": { bgcolor: "grey" },
              }}
            >
              <ListItemIcon>
                <SmsIcon sx={{ fontSize: "large", color: "white" }} />
              </ListItemIcon>
              {/* <ListItemText primary="My Card" sx={{ color: "white" }} /> */}
              <Typography variant="caption" color="white">
                My Card
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              sx={{
                p: "10%",
                borderRadius: "5px",
                "&:hover": { bgcolor: "grey" },
              }}
            >
              <ListItemIcon>
                <SmsIcon sx={{ fontSize: "large", color: "white" }} />
              </ListItemIcon>
              {/* <ListItemText primary="Finance Chart" sx={{ color: "white" }} /> */}
              <Typography variant="caption" color="white">
                Finance Chart
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              sx={{
                p: "10%",
                borderRadius: "5px",
                "&:hover": { bgcolor: "grey" },
              }}
            >
              <ListItemIcon>
                <SmsIcon sx={{ fontSize: "large", color: "white" }} />
              </ListItemIcon>
              {/* <ListItemText
              primary="Recent Transactions"
              sx={{ color: "white" }}
            /> */}
              <Typography variant="caption" color="white">
                Recent Transactions
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemButton
              sx={{
                p: "10%",
                borderRadius: "5px",
                "&:hover": { bgcolor: "grey" },
              }}
            >
              <ListItemIcon>
                <SettingsIcon sx={{ fontSize: "large", color: "white" }} />
              </ListItemIcon>
              {/* <ListItemText primary="Settings" sx={{ color: "white" }} /> */}
              <Typography variant="caption" color="white">
                Settings
              </Typography>
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemButton sx={{ pl: "3%", gap: "20%" }}>
              <Avatar sx={{ p: "0" }} />
              <Typography variant="caption" color="white">
                Kevin Akmal
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
};

export default Sidebar;
