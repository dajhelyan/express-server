import {
  Grid,
  Drawer,
  ListItemIcon,
  List,
  ListItemText,
  ListItem,
  ListItemButton,
  Box,
  Divider,
  Avatar,
  Typography,
  Container,
  Paper,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/Inbox";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
// const {pathname} = useLocation();

const routeDetail = [
  {
    text: "Crear orden",
    icon: <LocalShippingIcon color="primary" />,
    keys: "new order",
    path: `/order`,
  },
  {
    text: "Ver ordenes",
    icon: <InboxIcon color="primary" />,
    keys: "orders",
    path: `/`,
  },
];

export const Sidebar = () => {
  const navigate = useNavigate();


  return (
    <Drawer
      color="primary"
      variant="permanent"
      ModalProps={{
        keepMounted: false,
      }}
      open={true}
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}      // selected={pathname === path}
    >
      <List>
        {routeDetail.map((item, i) => {
          return (
            <ListItem
              disablePadding
            >
              <ListItemButton  key={i +1} onClick={() => {
                navigate(item.path)
              }} selected={location.pathname === item.path} color="primary">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
    // </Box>
  );
};
