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
  // const [isSelected, setSelect] = useState(false)
  const navigate = useNavigate();

  // function handleSelectItem(e) {
  //   navigate(e.path)
  //   setSelect(true)
  // }

  return (
    <Drawer
      component={Paper}
      color="primary"
      variant="permanent"
      ModalProps={{
        keepMounted: false,
      }}
      open={true}
      // selected={pathname === path}
    >
      <Container sx={{ padding: 3 }}>
        <Grid container spacing={4} sx={{ textAlign: "center" }}>
          <Grid item xs={12}>
            <Avatar
              alt="User Shoop"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 65, height: 65, margin: "0 auto" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">User Shoop</Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider light />
      <List>
        {routeDetail.map((item, i) => {
          return (
            <ListItem
            // onClick={(e) => {return e.preventDefault()}}
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
