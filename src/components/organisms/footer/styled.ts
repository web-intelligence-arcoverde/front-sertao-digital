import styled from 'styled-components'
import { COLORS } from 'src/constants'
import { Container } from 'src/components/atoms/Container'


export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;

  background: ${COLORS.primaryBlue};

  @media (max-width:768px){
    
  }
`
