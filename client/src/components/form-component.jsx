import { TextField, Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useAuth } from '../authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
  const { register, handleSubmit } = useForm();
  const { userLoged, isActive } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isActive) {
      return navigate('/orders')
    }
  }, [isActive])

  const onSubmit = async (values) => {
    const res = await userLoged(values)
    return res
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width={400}>
          <TextField {...register("email")} label="Correo" type='email' variant="filled"></TextField>
          <TextField {...register("password")} label="Contraseña" type='password'variant="filled"></TextField>
          <Button type='submit' variant='contained' color='primary'>
            Iniciar Sesion
          </Button>
        </Stack>
      </form>
    </>
  )
}