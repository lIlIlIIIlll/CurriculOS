// src/data/desktopItems.js
import React from 'react';

// Importando os componentes de conteúdo das janelas
import Text from '../components/window-content/Text';
import PdfViewer from '../components/PdfViewer';
import imagemBWR1 from '/imagemBWR1.png'
import imagemBWR2 from '/imagemBWR2.jpg'
import imagem2TOK1 from '/imagem2TOK1.png'
import imagem2TOK2 from '/imagem2TOK2.png'
import imagem2TOK3 from '/imagem2TOK3.png'
import imagem2TOK4 from '/imagem2TOK4.png'
import imagem2TOK5 from '/imagem2TOK5.png'

/*
  "Banco de dados" estático para os ícones do Desktop.
  Cada objeto representa um item e contém todas as informações necessárias
  para renderizar seu ícone e a janela correspondente.

  - id: Identificador único.
  - name: Nome exibido abaixo do ícone e no título da janela.
  - icon: Caminho para a imagem do ícone (na pasta /public).
  - component: (Opcional) O componente React a ser renderizado dentro da janela.
  - resizable: (Opcional) Booleano que indica se a janela pode ser redimensionada.
  - defaultSize: (Opcional) Tamanho inicial da janela.
  - defaultPosition: (Opcional) Posição inicial da janela.
  - directory: (Opcional) Identificador de diretório para agrupar itens no ExplorerWindow.
  - subItems: (Opcional) Array de itens que aparecerão DENTRO da janela deste item,
              criando um "sub-desktop".
*/

const desktopItems = [
  // --- Item 1: Sobre Mim (Abre uma janela com texto) ---
  {
    id: 'about-me',
    name: 'Sobre Mim.txt',
    icon: 'txt.avif',
    component: <Text paragrafos={["Olá, me chamo Leonardo!","Sou um Desenvolvedor Full-Stack apaixonado por criar soluções que integram de forma harmônica e robusta o front-end e o back-end para aplicações web, mobile e desktop.","Tenho experiência de dez meses atuando remotamente em uma empresa de desenvolvimento e também realizo projetos como freelancer por meio do 99freelas e Workana. Atualmente, estou aprofundando meus conhecimentos no curso Técnico de Desenvolvimento de Sistemas pelo SENAI.","Estou sempre em busca de novos desafios, metodologias e tecnologias que me permitam evoluir e criar projetos cada vez mais inovadores. Se você procura um profissional comprometido, extremamente versátil e com vontade de aprender, vamos marcar uma conversa!"]} />,
    resizable: true,
    defaultSize: { width: 550, height: 350 },
    defaultPosition: { x: 150, y: 100 },
  },

  // --- Item 3: Currículo (Abre um visualizador de PDF) ---
  {
    id: 'resume-pdf',
    name: 'Currículo (PDF)',
    icon: 'pdf.png',
    component: <PdfViewer />,
    resizable: true,
    defaultSize: { width: 800, height: 600 },
    defaultPosition: { x: 350, y: 50 },
  },

  // --- Item 4: Pasta de Projetos (Abre o ExplorerWindow) ---
  {
    id: 'projects-folder',
    name: 'Projeto 01 - Rastreio BWR',
    icon: 'folder.avif',
    resizable: true,
    directory: 'projects', // Usado pelo Window.js para renderizar o ExplorerWindow
    subItems: [
      {
        id: 'whatisBWR',
        name: 'O que é.txt',
        icon: 'txt.avif',
        component: <Text paragrafos={["O Projeto Rastreio BWR foi o primeiro projeto Freelancer que eu realizei. Ele foi feito para uma empresa com mais de dez anos no mercado de venda de bombas hidráulicas.","A solução foi desenvolvida com React.js para o front-end e Node.js para o back-end. Entregue com trinta dias de antecipação, foi uma solução que melhorou muito a gestão de pedidos e contato com o cliente na empresa."]}/>, // Sub-itens podem abrir componentes complexos.
        defaultSize: { width: 400, height: 270 },
      },
      {
        id: 'imagemBWR1',
        name: 'frontEnd.png',
        icon: 'imagemBWR1.png',
        component: (<img style={{width:'100%',height:'100%'}} src={imagemBWR1}/>), // Sub-itens podem abrir componentes complexos.
        defaultSize: { width: 950, height: 605 },
      },
      {
        id: 'imagemBWR2',
        name: 'imagem do pedido.png',
        icon: 'imagemBWR2.jpg',
        component: (<img style={{width:'100%',height:'100%'}} src={imagemBWR2}/>), // Sub-itens podem abrir componentes complexos.
        defaultSize: { width: 600, height: 500 },
      },
    ],
    defaultSize: { width: 750, height: 450 },
    defaultPosition: { x: 200, y: 200 },
  },

  // --- Itens que pertencem ao diretório 'projects' ---
  // Não aparecem no Desktop, mas são usados pelo ExplorerWindow.
  {
    id: 'project-1',
    name: 'Projeto 02 - Plataforma 2TOK',
    icon: 'folder.avif',
    resizable: true,
    directory: 'projects',
    // 1. A propriedade 'component' foi removida e substituída por 'subItems'.
    // Este array define os ícones que aparecerão dentro da janela deste projeto.
    subItems: [
      {
        id: 'whatisplataforma',
        name: 'O que é.txt',
        icon: 'txt.avif',
        component: <Text paragrafos={["A Plataforma 2TOK foi meu segundo projeto freelancer, se trata de um painel web para gestão de cliente com um auto-cadastro com foco no cadastro via dispositivos mobile.","A plataforma 2TOK é integrada com um dispositivo Hikvision de controle de acesso, e os usuários são sincronizados entre a plataforma web e o dispositivo Hikvision.","Através dessa integração, a inseração, exclusão e modificação dos usuários dentro do dispositivo pode ser feitas pela plataforma web. Além disso, a plataforma possui uma página onde é possível visualizar os últimos eventos de acesso do Hikvision."]}/>, // Sub-itens podem abrir componentes complexos.
        defaultSize: { width: 400, height: 400 },
      },
      {
        id: 'imagem2TOK1',
        name: 'frontEnd1.png',
        icon: 'imagem2TOK1.png',
        component: (<img style={{width:'100%',height:'100%'}} src={imagem2TOK1}/>), // Sub-itens podem abrir componentes complexos.
        defaultSize: { width: 950, height: 605 },
      },
      {
        id: 'imagem2TOK2',
        name: 'frontEnd2.png',
        icon: 'imagem2TOK2.png',
        component: (<img style={{width:'100%',height:'100%'}} src={imagem2TOK2}/>), // Sub-itens podem abrir componentes complexos.
        defaultSize: { width: 950, height: 605 },
      },
      {
        id: 'imagem2TOK3',
        name: 'frontEnd3.png',
        icon: 'imagem2TOK3.png',
        component: (<img style={{width:'100%',height:'100%'}} src={imagem2TOK3}/>), // Sub-itens podem abrir componentes complexos.
        defaultSize: { width: 950, height: 605 },
      },
      {
        id: 'imagem2TOK4',
        name: 'frontEnd4.png',
        icon: 'imagem2TOK4.png',
        component: (<img style={{width:'100%',height:'100%'}} src={imagem2TOK4}/>), // Sub-itens podem abrir componentes complexos.
        defaultSize: { width: 950, height: 605 },
      },
      {
        id: 'imagem2TOK5',
        name: 'frontEnd5.png',
        icon: 'imagem2TOK5.png',
        component: (<img style={{width:'100%',height:'100%'}} src={imagem2TOK5}/>), // Sub-itens podem abrir componentes complexos.
        defaultSize: { width: 800, height: 700 },
      }
    ],
  },
    {
    id: 'CurriculOS',
    name: 'Projeto 03 - CurriculOS.txt',
    icon: 'txt.avif',
    component: <Text paragrafos={["Meu terceiro projeto é algo mais pessoal, ele se trata do meu portifólio. Desafiei a mim mesmo a construir uma página web que simulasse um sistema operacional","A primeira dificuldade foi pensar em qual sistema operacional eu iria tentar simular: Windows, Linux ou MacOS","A conclusão, como podem ver, foi simular o MacOS, ele foi o escolhido por causa do seu Design visualmente agradável e moderna e também pela sua UX.","Finalizei o meu portifólio em pouco mais de um dia. E Fun Fact: O nome 'CurrículOS' é um trocadilho com as palavras 'Currículo' e 'OS'."]} />,
    resizable: true,
    defaultSize: { width: 550, height: 340 },
    defaultPosition: { x: 150, y: 100 },
  },
  {
    id: 'trash',
    name: "Você não vai abrir minha lixeira",
    icon: 'trash.avif',
    resizable: true,
    directory: 2,
  },
];

export default desktopItems;