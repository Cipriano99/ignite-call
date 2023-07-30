import { Box, Text, styled } from '@ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',
  marginTop: '$4',
  padding: '$4',
})

export const FormAnnotations = styled('div', {
  marginTop: '$2',
  [`> ${Text}`]: {
    color: '$gray400',
  },
})
