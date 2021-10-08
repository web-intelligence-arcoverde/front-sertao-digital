import React from 'react';
import { Container} from './styled'

import Contact from 'src/components/molecules/footer-contact';
import Map from '../../atoms/Map'





export const Footer = () => {
  return (
    <>
    <Container>

      <div>

        <Contact
          title="Endereço"
          descripton="Av. Dom Pedro II, 311-355 "
          descripton2="Santa Luzia, Arcoverde - PE"
        />

        <Contact
          title="Ligue "
          descripton="(87)991054786"

        />
        <Contact
          title="Email "
          descripton2="sertaodigital.org"

        />


        <Contact
          title="Horário"
          descripton="Seg - Sex: 08:00 ás 18:00"
          descripton2="Sab - Dom:Fechado"
        />
       
      </div>

      <div>
        <Map />

      </div>

    </Container>
   
    </>
  );
}

