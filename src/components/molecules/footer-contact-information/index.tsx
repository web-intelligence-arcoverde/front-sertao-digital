import { Container } from 'src/components/atoms/Container'
import Contact from 'src/components/molecules/contact-component'

const Index = () => {
  return (
    <Container direction="column" justify="space-between">
      <Contact
        title="Endereço"
        descripton="Av. Dom Pedro II, 311-355, Santa Luzia, Arcoverde - Pernambuco "
      />

      <Contact title="Telefone" descripton="(87) 9 9105-4786" />
      <Contact title="Email " descripton="suporte@sertaodigital.org" />

      <Contact
        title="Horário"
        descripton="Seg - Sex: 08:00 ás 18:00"
        descripton2="Sab - Dom:Fechado"
      />
    </Container>
  )
}

export default Index
