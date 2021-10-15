import styled from 'styled-components'
import { COLORS } from 'src/constants'

interface ContainerProps {
  direction?: string
  color?: string
  justify?: string
  align?: string
  width?: number
  height?: number
  padding?: number
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  background-color: ${({ color }) =>
    color ? `${COLORS[color]}` : 'transparent'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  width: ${({ width }) => width || '100'}%;
  height: ${({ height }) => height || '100'}%;
  padding: ${({ padding }) => padding || '0'}px;
`

export const StyledContainer = styled.div<ContainerProps>`
  flex-direction: column;
  background-color: ${({ color }) =>
    color ? `${COLORS[color]}` : 'transparent'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
`
