import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ItemMenuList = styled.li`
  display: flex;
  flex-direction: row;
`

export const ContainerButton = styled.div`
  width: 120px;
  display: flex;
  align-items: center;

  margin-left: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`
