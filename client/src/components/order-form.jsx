import {
  Container,
  TextField,
  Button,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  OutlinedInput,
  FormControl,
  Grid,
  Card,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { addOrder } from "../api/auth";
import { useState } from "react";

const company = ["IKB", "BBC", "VABB", "SKOTI"];

export const OrderForm = () => {
  const { register, handleSubmit, onChange } = useForm();
  const [select, setSelect] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    // async function addTask(data) {
    console.log(select, "s");
    const res = await addOrder({ ...data, company: select });
    console.log(res, "res");
    // }
  };

  return (
    <Container style={{ padding: 30, margin: "0" }} component={Paper}>
      {/* <CardContent> */}
      <h2>Agregar una orden</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              {...register("name")}
              label="Nombre"
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              {...register("lastName")}
              label="Apellidos"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              {...register("email")}
              type="email"
              label="Email"
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              {...register("dni")}
              type="number"
              label="Dni"
            ></TextField>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              {...register("phoneNumber")}
              type="number"
              label="Numero"
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth {...register("company")}>
              <InputLabel id="company-label">Company</InputLabel>
              <Select
                value={select}
                labelId="company-label"
                id="company"
                onChange={(e) => {
                  setSelect(e.target.value);
                }}
                input={<OutlinedInput label="Company" />}
              >
                {company.map((company) => (
                  <MenuItem key={company} value={company}>
                    {company}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              {...register("province")}
              label="Provincia"
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              {...register("district")}
              label="Distrito"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              {...register("direction")}
              label="Direccion"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Crear orden
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
