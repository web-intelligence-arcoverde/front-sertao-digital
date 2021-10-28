import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 83vh;
  
  img {
    
  max-width: 100vw;
  
  }

@media (max-width:768px) {
  height: auto;
  background-size: contain;
}
`;
export const ArrowLeft =styled.div`


  top: calc(60% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  left: 10px;
  transform: scale(-1);

  @media (max-width:748px){
    top: calc(30% - 20px);
  }

`
export const ArrowRight =styled.div`


  top: calc(60% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  right: 10px;
  
  @media (max-width:748px){
    top: calc(30% - 20px);
  }
`
