import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import * as C from '../styles'
import * as S from './styles'
import { signIn, useSession } from 'next-auth/react'

export default function Register() {
  // async function handleRegister(data: RegisterFormData) { }

  return (
    <C.Container>
      <C.Header>
        <Heading>Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </C.Header>

      <S.ConnectBox>
        <S.ConnectItem>
          <Text>Google Calendar</Text>
          <Button variant="secondary" size="sm" onClick={() => signIn('google')}>
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
