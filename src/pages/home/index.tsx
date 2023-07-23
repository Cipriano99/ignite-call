import { Heading, Text } from '@ignite-ui/react'

import previewImage from '@/assets/callendar.png'

import * as S from './styles'
import Image from 'next/image'

export default function Home() {
  return (
    <S.Container>
      <S.Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </S.Hero>

      <S.Preview>
        <Image
          src={previewImage}
          height={400}
          width={800}
          quality={100}
          priority
          alt="Calendar preview"
        />
      </S.Preview>
    </S.Container>
  )
}
