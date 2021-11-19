import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 83vh;
  
  img {
  
  max-width: 98.85vw;
  
  @media (max-width:768px) {
    max-width: 94vw;
  }
  }

@media (max-width:768px) {
 
  height: auto;
  background-size: contain;
}
`;
export const ArrowLeft =styled.div`


  top: calc(60% - 20px);
  position: absolute;
  background: #ffffff94;
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
  :hover {
    background: #fff;
  }

  @media (max-width:748px){
    display: none;
  }

`
export const ArrowRight =styled.div`


  top: calc(60% - 20px);
  position: absolute;
  background: #ffffff94;
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

  :hover {
    background: #fff;
  }
  
  @media (max-width:748px){
    display: none;
  }
`
