import { TextField, Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'

export const Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
      // select: {}
    }
  });
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width={400}>
          <TextField label="Email" type='email'></TextField>
          <TextField label="Password" type='password'></TextField>
          <Button type='submit' variant='contained' color='primary'>
            Iniciar Sesion
          </Button>
        </Stack>
      </form>
    </>
  )
}