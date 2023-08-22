import { TableComp } from "../components/table";
import { Grid, Typography, Box, CssBaseline } from "@mui/material";
import { Sidebar } from "../components/sidebar";
import { OrderForm } from "../components/order-form";
export const Dashboard = () => {
  return (
    <div>
      <CssBaseline />
      {/* 
      <Grid container spacing={2}>
        <Grid item xs={3}>
         <Sidebar/>
        </Grid>
        <Grid item xs={9}> */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Typography variant="h4">Ordenes</Typography>
        <TableComp />
      </Box>
      {/* </Grid>
      </Grid> */}
    </div>
  );
};
