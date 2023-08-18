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
} from "@mui/material";

import InboxIcon from "@mui/icons-material/Inbox";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export const Sidebar = () => {
  return(
    <Box
    sx={{
      // backgroundColor:'primary',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        position: "relative",
        height: "100vh",
        boxSizing: "border-box",
      },
    }}
  >
    <Drawer
    color="primary"
      variant="permanent"
      ModalProps={{
        keepMounted: false,
      }}
      open={true}
    >
      <Container sx={{padding:3}}>
        <Grid container spacing={4} sx={{textAlign:'center'}}>
          <Grid item xs={12}>
            <Avatar
              alt="User Shoop"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 65, height: 65, margin: '0 auto' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" >User Shoop</Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider light />
      <List>
        {["Add Order", "Orders"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton color="primary">
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon color="primary" />
                ) : (
                  <LocalShippingIcon color="primary"/>
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  </Box>
  )
}