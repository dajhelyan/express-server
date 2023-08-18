import { TableComp } from "../components/table";
import {
  Grid,
  Box,
  CssBaseline
} from "@mui/material";
import { Sidebar } from "../components/sidebar";
import { OrderForm } from "../components/order-form";
export const Dashboard = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
        <CssBaseline />

      <Grid container spacing={2}>
        <Grid item xs={3}>
         <Sidebar/>
        </Grid>
        <Grid item xs={9}>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            {/* <TableComp /> */}
            <OrderForm/>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
