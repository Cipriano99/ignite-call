import { Button, Text, TextInput } from '@ignite-ui/react'

import * as S from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, 'Informe pelo menos 3 letras')
    .regex(/^([a-z\\\\-]+)$/i, 'Somente letras e -')
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export const ClaimUsernameForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  const handleClaimUsername = (data: ClaimUsernameFormData) => {
    console.log(data)
  }

  return (
    <>
      <S.Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuario"
          {...register('username')}
        />
        <Button size="sm" type="submit">
          Reservar
          <ArrowRight />
        </Button>
      </S.Form>
      <S.FormAnnotations>
        <Text size="sm">
          {errors.username
            ? errors.username?.message
            : 'Digite o nome do usuário'}
        </Text>
      </S.FormAnnotations>
    </>
  )
}
