import React from 'react';
import CardStartup from 'src/components/molecules/card-startup';
import { Container,ContainerCard} from './styled';
import Arrow from 'assets/icons/arrow.svg'
import Photo from 'assets/images/fiscal.png'

const OurStartp = () => {

    return (
        <Container>
            <h1>Nossas Startups</h1>
            <p>Conheça Algumas das startups que fazem parte da nossa comunidade</p>
            <div>
                <ContainerCard>
                    <CardStartup
                        img ={Photo}
                        title="Eficiência Fiscal"
                        descripton="Somos uma startup de outsourcing em gestão tributária 
                          com foco nas operações de compra, manutenção de itens e venda de mercadorias."
                        icon ={Arrow} 
                    />
                    <CardStartup
                        img ={Photo}
                        title="Eficiência Fiscal"
                        descripton="Somos uma startup de outsourcing em gestão tributária 
                          com foco nas operações de compra, manutenção de itens e venda de mercadorias."
                        icon ={Arrow} 
                    />
                    <CardStartup
                        img ={Photo}
                        title="Eficiência Fiscal"
                        descripton="Somos uma startup de outsourcing em gestão tributária 
                          com foco nas operações de compra, manutenção de itens e venda de mercadorias."
                        icon ={Arrow} 
                    />
                    <CardStartup
                        img ={Photo}
                        title="Eficiência Fiscal"
                        descripton="Somos uma startup de outsourcing em gestão tributária 
                          com foco nas operações de compra, manutenção de itens e venda de mercadorias."
                        icon ={Arrow} 
                    />
                    <CardStartup
                        img ={Photo}
                        title="Eficiência Fiscal"
                        descripton="Somos uma startup de outsourcing em gestão tributária 
                          com foco nas operações de compra, manutenção de itens e venda de mercadorias."
                        icon ={Arrow} 
                    />
                    <CardStartup
                        img ={Photo}
                        title="Eficiência Fiscal"
                        descripton="Somos uma startup de outsourcing em gestão tributária 
                          com foco nas operações de compra, manutenção de itens e venda de mercadorias."
                        icon ={Arrow} 
                    />
                </ContainerCard>
        
            </div>
        </Container>
    )

        ;
}

export default OurStartp;