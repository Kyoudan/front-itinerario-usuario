import graphql from "./graphql.mp3";
import doja from "./doja.mp3";
import queencard from "./queencard.mp3";

export const datas = [
  {
    uuid: "109fc3eb-e2f8-4270-bd66-f00476dd1ce2",
    title: "Attention - Doja cat",
    description: "New song from Doja cat",
    details:
      "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit  lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit  lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit  lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit  ",
    audio: doja,
  },
  {
    uuid: "d3f8759c-21fa-4844-adb9-e6bdc203b02d",
    title: "Graphql - Sua importancia",
    description: "Conversando um pouco sobre o graphql",
    details: `A importância do GraphQL no desenvolvimento de aplicativos e sistemas tem crescido significativamente nos últimos anos. GraphQL é uma linguagem de consulta e manipulação de dados, desenvolvida pelo Facebook em 2012, e desde então, tem ganhado popularidade entre desenvolvedores e empresas devido aos seus benefícios e recursos inovadores.
    Uma das principais vantagens do GraphQL é a sua capacidade de fornecer uma camada de abstração entre clientes e servidores. Ao contrário das APIs REST tradicionais, onde os clientes precisam fazer várias chamadas para diferentes endpoints para obter todos os dados necessários, o GraphQL permite que os clientes solicitem exatamente as informações desejadas em uma única requisição. Isso significa que os clientes podem obter respostas mais eficientes e reduzir a quantidade de dados transferidos pela rede, melhorando a performance e a experiência do usuário.
    Outro aspecto importante do GraphQL é a flexibilidade que ele oferece aos clientes. Com o GraphQL, os clientes têm controle total sobre os dados que desejam receber, especificando os campos exatos e suas relações. Isso elimina o problema de sobrecarregar os clientes com dados desnecessários ou subcarregar com dados insuficientes, proporcionando uma maneira mais eficiente de lidar com as necessidades específicas de cada cliente. Além disso, o GraphQL permite que os clientes solicitem dados de diferentes fontes em uma única requisição, facilitando a agregação de informações de diferentes serviços ou microserviços.`,
    audio: graphql,
  },
  {
    uuid: "a07a93d4-9890-474e-a0d0-63863e80e2ed",
    title: "Queencard - (G)-IDLE",
    description: "New song from (G)-IDLE",
    details:
      "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit  lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit  lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit  lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit  ",
    audio: queencard,
  },
];
