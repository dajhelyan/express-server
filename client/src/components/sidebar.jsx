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

  return (
    <Drawer
      component={Paper}
      color="primary"
      variant="permanent"
      ModalProps={{
        keepMounted: false,
      }}
      open={true}
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
              disablePadding
            >
              <ListItemButton key={i +1} to={item.path} selected={location.pathname === item.path} color="primary">
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
