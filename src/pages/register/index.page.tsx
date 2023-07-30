import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import * as S from './styles'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <S.Container>
      <S.Header>
        <Heading>Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </S.Header>

      <S.Form as="form">
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput
            size="sm"
            prefix="ignite.com/"
            placeholder="seu-usuario"
            // {...register('username')}
          />
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput
            size="sm"
            placeholder="Seu nome"
            // {...register('username')}
          />
        </label>

        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </S.Form>
    </S.Container>
  )
}
