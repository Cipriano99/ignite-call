import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import * as C from '../styles'
import * as S from './styles'

export default function Register() {

  // async function handleRegister(data: RegisterFormData) { }

  return (
    <C.Container>
      <C.Header>
        <Heading>Conecte sua agenda!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </C.Header>

      <S.ConnectBox>
        <S.ConnectItem>
          <Text>Google Calendar</Text>
          <Button variant="secondary" size="sm">
            Conectar <ArrowRight />
          </Button>
        </S.ConnectItem>

      <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </S.ConnectBox>
    </C.Container>
  )
}
