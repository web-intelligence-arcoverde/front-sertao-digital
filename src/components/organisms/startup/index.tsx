
import StartInformation from 'src/components/molecules/startup-information';
import { Container,  LeftSide, LeftSideIcon, RightSide } from './styled'
import Foto from 'assets/images/statups4.png'
import Maleta from 'assets/icons/maleta.svg'
import Selo from 'assets/icons/selo.svg'


const Startup = () => {
  return (
    <Container>
      <LeftSide>
        <div>
          <h1 >Startups</h1>
          <p>O que oferecemos para nossas startups</p>
        </div>
        <LeftSideIcon>
          <img src={Selo}/>
          <StartInformation
            title="Conexão"
            descripton="Temos embaixadores dentro dos principais programas
         de inovação do Brasil. Nosso papel é de representar as startups
          e empreendedores de Pernambuco, buscando oportunidades que gerem
           valor e tragam resultados na prática." />
        </LeftSideIcon>
        <LeftSideIcon>
        <img src={Maleta}/>
          <StartInformation
            title="Oportunidades"
            descripton="Inserimos Pernambuco nos principais programas de aceleração
           e buscamos a todo momento oportunidades para alavancar nossas startups.
            Tanto através de parcerias e acesso a investidores quanto a divulgação 
            de editais e recursos disponíveis." />
        </LeftSideIcon>
      </LeftSide>
      <RightSide>
        <img src ={Foto} width="auto" height="450px"/>
      </RightSide>
    </Container>
  )
}

export default Startup;