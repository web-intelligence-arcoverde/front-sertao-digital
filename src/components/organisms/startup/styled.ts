import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
 width:100%;
  background: #222;
    color: white;
    text-align: left;
    
    @media (max-width:768px) {

      flex-direction: column;
      align-items: center;
      padding: 10px;
      
    }
 
`;

export const RightSide =styled.div `


padding: 10px;
margin-top: 6%;
margin-right:2%;
align-items: center;

img {
  width: 100%;
}

@media (max-width:768px) {
  display: contents;

  img {
    align-items: center;
    width: 90%;
    height: auto;
    margin: 0;
    border-radius: 10px;
  }
}


`
export const LeftSide =styled.div `

width: 50%;
padding: 10px;
margin: 7%;
text-align: left;

p{
  margin-top: 12px;
}

@media (max-width:768px) {
  text-align: center;
  width: 100%;
}



`
export const LeftSideIcon =styled.div`
display: flex;

p {
  margin-top: 22px;
}

@media (max-width:768px) {
  flex-direction: column;
  align-items: center;
  justify-content: center;


  img {
    width: 80px;
    margin-top: 30px;
    margin-left: 20px;
  }
 
}


`



