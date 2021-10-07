import React from 'react';
import * as S from './styled'

import Contact from 'src/components/molecules/footer-contact';
import Phone from 'assets/icons/phone.svg'
import Gps from 'assets/icons/location.svg'
import Email from 'assets/icons/email.svg'
import Facebook from 'assets/icons/facebook.svg'
import Linkedin from 'assets/icons/linkedin.svg'
import Instagram from 'assets/icons/instagram.svg'
import Map from '../../atoms/Map'


export const Footer = () => {
  return (
    <S.Container>
      <S.Left>
        <p>Price Item ONe </p>
        <p>Price Item ONe </p>
        <p>Price Item ONe </p>
        <p>Price Item ONe </p>
        <p>Price Item ONe </p>
        <p>Price Item ONe </p>
      </S.Left>

      <div>
        <Map/>
        
      </div>
             
      <div>
        <Contact
          title="Arcoverde-PE" 
          img={Gps} />

        <Contact
          title="(87)991054786"
          img={Phone} />

        <Contact
          title=" sertaodigital.org"
          img={Email}
        />

        <S.CardIcons >
          <S.Icons src={Facebook} />
          <S.Icons src={Instagram} />
          <S.Icons src={Linkedin} />

        </S.CardIcons>
      </div>
    </S.Container>
  );
}

