import React from 'react'
import CardCommunity from 'src/components/molecules/card-community'
import { Container } from './styled'
import Startups from 'assets/images/community-startup.png'
import Aceleradoras from 'assets/images/community-aceleradoras.png'
import Incubadoras from 'assets/images/community-incubadoras.png'
import Fomentos from 'assets/images/community-fomentos.png'
import Espacos from 'assets/images/community-espacos.png'
import Investidores from 'assets/images/community-investiment.png'

const Community = () => {
  return (
    <Container>
      <CardCommunity
        img={Startups}
        button="Startup"
        title="Startup"
        description="Startups são empresas que estão no início de suas atividades e que buscam explorar atividades inovadoras no mercado."
      />
      <CardCommunity
        img={Aceleradoras}
        button="Aceleradoras"
        title="Aceleradoras"
        description="Aceleradoras são empresas cujo objetivo principal é apoiar e investir no desenvolvimento e rápido crescimento de startups"
      />
      <CardCommunity
        img={Incubadoras}
        button="Incubadoras"
        title="Incubadoras"
        description="Incubadora tem como objetivo fornecer as condições ideais para o desenvolvimento e crescimento de uma empresa."
      />
      <CardCommunity
        img={Fomentos}
        button="Fomento"
        title="Fomento"
        description="Instituições de fomento são órgãos governamentais, criada pelos Estados e Municípios, com o objetivo de oferecer assistência financeira e apoio a Startups."
      />
      <CardCommunity
        img={Espacos}
        button="Espaços"
        title="Espaços"
        description="Espaços de inovação são locais em que se reúnem as startups, além de médias e grandes empresas e potenciais investidores."
      />
      <CardCommunity
        img={Investidores}
        button="Investidores"
        title="Investidores"
        description="Investidores são pessoas físicas ou jurídicas que já investiram, investem ou pretendem investir em Startups em curto prazo."
      />
    </Container>
  )
}

export default Community
