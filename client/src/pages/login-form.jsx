import {Container, Card, CardContent, Typography} from '@mui/material/'
import { Form } from '../components/form-component'

export const LoginForm = () => {
  return (
    <Container>
      <Card style={{padding: 30}}>
        <Typography variant='h4'>Inicia sesion</Typography>
        <CardContent >
          <Form/>
        </CardContent>
      </Card>
    </Container>
  )
}