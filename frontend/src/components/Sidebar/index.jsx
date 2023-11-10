import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import DashBoardIcon from "../../components/icons/DashBoardIcon";
import MasterIcon from "../../components/icons/MasterIcon";
import BillingIcon from "../../components/icons/BillingIcon";
import { useNavigate } from "react-router-dom";

const drawerWidth = 177;
const sidebarTabs = [
  {
    name: "Dashboard",
    path: "/",
    icon: <DashBoardIcon />,
  },
  {
    name: "Master",
    path: "/master",
    icon: <MasterIcon />,
  },
  {
    name: "Billing",
    path: "/billing",
    icon: <BillingIcon />,
  },
];

const Sidebar = () => {
  let navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="topbar"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      ></AppBar>
      <Drawer
        className="sidebar"
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            marginTop: "86px",
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{}}>
          <List sx={{ marginTop: "75px" }}>
            {sidebarTabs.map((item, index) => (
              <ListItem key={index} sx={{ p: 0, marginBottom: "29px" }}>
                <ListItemButton
                  sx={{ paddingLeft: "7px" }}
                  onClick={() => navigate(item.path)}
                >
                  <ListItemIcon className="sidebar-icon">
                    {item.icon}
                  </ListItemIcon>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "23px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "normal",
                    }}
                  >
                    {item.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 5, marginLeft: "183px" }}
      ></Box>
    </Box>
  );
};

export default Sidebar;
