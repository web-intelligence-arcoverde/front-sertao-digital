import React from 'react';
import {Main,Icons,ContainerRight,ContainerLeft}from './styled'

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
    <Main>
      <ContainerLeft>
        <p>Price Item ONe </p>
        <p>Price Item ONe </p>
        <p>Price Item ONe </p>
        <p>Price Item ONe </p>
        <p>Price Item ONe </p>
        <p>Price Item ONe </p>
      </ContainerLeft>

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

        <ContainerRight >
          <Icons src={Facebook} />
          <Icons src={Instagram} />
          <Icons src={Linkedin} />

        </ContainerRight>
      </div>
    </Main>
  );
}

