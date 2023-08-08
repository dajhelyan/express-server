import { Container, TextField, Button, Stack, Select,
 MenuItem,
 InputLabel,
 OutlinedInput,
 FormControl,
Grid } from '@mui/material'
import { useForm  } from 'react-hook-form'

const company =  ['IKB', 'BBC', 'VABB', 'SKOTI']

export const OrderForm = () => {
  const {  handleSubmit } = useForm({
    defaultValues: {
      name: '',
      lastName: '',
      dni: '',
      emial: '',
      phoneNumber: '',
      Province: '',
      district: '',
      reference: ''
      // company: {}
    }
  });
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <Container>
      <h2>Agregar una orden</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} width={600}>
        <Grid item xs={6}>
          <TextField fullWidth label="Nombre"></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Apellidos"></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Email"></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth label="Dni"></TextField>
        </Grid>
        <Grid item xs={5}>
          <TextField fullWidth label="Numero"></TextField>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="company-label">Company</InputLabel>
            <Select
              labelId="company-label"
              id="company-select"
              onChange={console.log('value')}
              input={<OutlinedInput label="Company" />}
            >
              {company.map((company) => (
                <MenuItem
                  key={company}
                  value={company}
                >
                  {company}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Provincia"></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Distrito"></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Direccion"></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button type='submit' variant='contained' color='primary'>
            Crear orden
          </Button>
        </Grid>
        </Grid>
      </form>
    </Container>
  )
}