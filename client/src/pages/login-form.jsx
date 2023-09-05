import {Container, Card, CardContent, Typography, Box} from '@mui/material/'
import { Form } from '../components/form-component'

export const LoginForm = () => {
  return (
    <Box>
      <Card style={{padding: 30}}>
        <Typography variant='h4'>Inicia sesion</Typography>
        <CardContent >
          <Form/>
        </CardContent>
      </Card>
    </Box>
  )
}