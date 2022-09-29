import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import My1 from "../ny/My1.jpeg"


import { BoxBack, BoxFront, CV, Header, textP, whenIm, BoxButtonsInicio, Home, Italo, Present, Present2, Present3, Rectangle, Text1, TextBack, TextBox, TextFront, Contact, Project, Reajust, PresentR, Education, Educ1, EducText, EducExtra, Extra, Projects, TProjects, Contract, TContract, Foot, Ppad, Tpad, Papad, Ttext, Bpad, TCtext, BoxButtons, CText, BPro, Linkedin, TextOne, BoxEduc, WhatsApp, Github, Twitter, CurseT, CurseP, TTitle, Img } from '../Styles/HomeStyle';

export default function HomePage() {


    return (
        <Home>
            <Header><Italo><a href="https://www.linkedin.com/in/italo-souza09/"><span>Italo</span></a></Italo><whenIm><a href="#quemsou"><span>Quem Sou</span></a></whenIm><Project><a href="#projetos"><span>Projetos</span></a></Project><Contact><a href="#contato"><span>Contato</span></a></Contact></Header>
            <Reajust>
                <Present id="quemsou">
                    <Italo><span>Eu sou Italo</span></Italo>
                    <br></br>
                    <TextOne>
                        <textP> Desenvolvedor Web Full Stack </textP>
                        <h5> Entusiasta por Tecnologia e Apaixonado na área aerospacial </h5>
                        <h5>Sou Desenvolvedor web Full Stack, com conhecimento em HTML, CSS, Java Script, React.js, Material-UI, Typescript, Sempre procurando conhecimento para produzir código limpo, modular e semântico.

                            Sou um entusiasta de tecnologia, sou apaixonado por novidades de computação em nuvem, desenvolvimento de Soluções de Negócios tecnológicos.

                            Tenho conhecimento e experiência em desenvolvimento de jogos e análise de dados, sou fascinado com o mundo e as tecnologias que envolve o mercado Aeroespacial.

                            <br></br>
                            Meus objetivos são, me aperfeiçoar cada vez mais.
                        </h5>
                    </TextOne>
                    <Reajust><Rectangle /><TextBox><span>NodeJs</span></TextBox><Rectangle /><TextBox><span>MySQL</span></TextBox><Rectangle /><TextBox><span>HTML</span></TextBox><Rectangle /><TextBox><span>CSS</span></TextBox><Rectangle /><TextBox><span>JavaScript</span></TextBox><Rectangle /></Reajust>
                    <CV><span>CV</span></CV>
                </Present>
                <Present2 src={My1}>
                    <BoxButtonsInicio>
                        <Linkedin href="https://www.linkedin.com/in/italo-souza09/"><LinkedInIcon /></Linkedin>
                        <WhatsApp href="https://wa.me/5579981435810"><WhatsAppIcon /></WhatsApp>
                        <Github href="https://github.com/italosouza09"><GitHubIcon /></Github>
                        <Twitter href="https://twitter.com/Italo_souza09"><TwitterIcon /></Twitter>
                    </BoxButtonsInicio>
                </Present2>
            </Reajust>
            <Present3>
                <Text1><span>Meus conhecimentos</span></Text1>
                <PresentR>
                    <TextFront><span>Front-end</span></TextFront>
                    <TextBack><span>Back-end</span></TextBack>
                    <BoxFront><span>Desenvolvimento de aplicações
                        web utilizando HTML, CSS e
                        JavaScript.
                        Criação de sites responsivos
                        seguindo princípio de
                        Mobile First.</span></BoxFront>
                    <BoxBack><span>Aplicações utilizando NodeJS,
                        Typescript e MySQL.
                        Criação de API´s para
                        comunicação com front-end
                        seguindo princípio de Clean Code.</span></BoxBack>

                </PresentR>
            </Present3>
            <Education>
                <span>Educação</span>
            </Education>
            <BoxEduc>
                <Educ1>
                    <EducText><span>Curso de Web Full Stack
                        na Labenu</span></EducText>
                    <CText><span>
                        Programa com mais de 1000 horas de experiência prática em desenvolvimento Full-stack, guiadas por metodologias ágeis (Kanban/Scrum).

                        Entre as habilidades aprendidas durante o curso estão HTML, CSS, JavaScript, React, Styled-Components, React Hooks, REST, Api Restful, HTTP, Jest, Node.JS, Knex, TypeScript, MySQL, AWS, SQL, Git, Github, Firebase, Testes unitários e UI Design.
                    </span></CText>
                </Educ1>
                <EducExtra>
                    <Extra>
                        <span>Cursos Extras ou Treinamentos</span>
                    </Extra>
                    <PresentR>
                        <CurseT>Segurança em Tecnologia da Informação - Fundação Bradesco</CurseT>
                        <CurseT>AZ-900 Azure Fundamentals</CurseT>
                        <CText>Curso complementar focado na capacitação de aplicação de metodos de segurança e hábitos,
                            com intenção de aperfeiçoar a segurança no ambiente profissional de empresas.
                        </CText>
                        <CText>Treinamento sobre os fundamentos da rede cloud Azure, ferramentas, recursos e práticas.
                            Treinamento Realizado pela Deal innovation.
                        </CText>
                    </PresentR>
                </EducExtra>
            </BoxEduc>
            <Projects>
                <TProjects id="projetos">
                    <span>Meus Projetos</span>
                </TProjects>
            </Projects>
            <PresentR>
                <Ppad>
                    <Tpad>LabFilmes</Tpad>
                    <Papad>Front-End</Papad>
                    <Ttext>Uma case Front-end feita com base na API TheMovieDB,
                        O intuito era revisar capacidade de aplicar tecnologias no projeto com liberdade de criação no layout,
                        Com alguns requisitos mininos como página inicial com filmes populares, filtragem por gênero e paginação.

                        Projeto solo.
                        <Bpad><a href="https://github.com/italosouza09/LabFilmes"><p>GitHub</p></a></Bpad>
                    </Ttext>
                </Ppad>
                <Ppad>
                    <Tpad>LabeNinjas</Tpad>
                    <Papad>Front-End</Papad>
                    <Ttext>
                        Projeto Front-End realizado atraves do curso Web Full Stack na Labenu, uma página feita com base em uma empresa no ramos de ofertas de serviços profissionais em várias áreas,
                        O intuito era uma página principal com algumas ofertas e com visual limpo, uma página com lista de ofertas de serviços com filtros disponiveis para os clientes,
                        um carrinho, uma página para cadastro de novas ofertas.
                        <Bpad><a href="https://github.com/italosouza09/LabeNinjas"><p>GitHub</p></a></Bpad>
                    </Ttext>
                </Ppad>
            </PresentR>
            <Projects>
            <BPro variant="outlined"><a href="https://github.com/italosouza09?tab=repositories"><span>Mais Projetos</span></a></BPro>
            </Projects>
            <Contract id="contato">
                <TContract>
                    <TTitle>Aberto a Contratação</TTitle>
                    <BoxButtons>
                        <Linkedin href="https://www.linkedin.com/in/italo-souza09/"><LinkedInIcon /></Linkedin>
                        <WhatsApp href="https://wa.me/5579981435810"><WhatsAppIcon /></WhatsApp>
                        <Github href="https://github.com/italosouza09"><GitHubIcon /></Github>
                        <Twitter href="https://twitter.com/Italo_souza09"><TwitterIcon /></Twitter>
                    </BoxButtons>
                    <TCtext><span>Procuro oportunidade de trabalho onde eu possa aprender, me desenvolver e evoluir na minha carreia profissional.
                        <br></br>
                        E-mail para contato: italose09@gmail.com
                        <br></br>
                        Celular: (79) 98143-5810</span></TCtext>
                </TContract>
            </Contract>
            <Foot>
                <span>@2022 Direitos reservados -  Italo enoque de souza barbosa</span>
            </Foot>
        </Home>
    )
}