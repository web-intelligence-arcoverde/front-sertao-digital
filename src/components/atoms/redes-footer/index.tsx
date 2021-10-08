import React from 'react';
import { Container ,Img} from './styled';
import Facebook from 'assets/icons/facebook.svg'
import Linkedin from 'assets/icons/linkedin.svg'
import Instagram from 'assets/icons/instagram.svg'

const IconsFooter= () => {
  return (
      <Container>
          
          <Img src ={Facebook}/>
          <Img src ={Instagram}/>
          <Img src ={Linkedin}/>
         
      </Container>
  );
}

export default IconsFooter;