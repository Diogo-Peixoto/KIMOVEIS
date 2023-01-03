# KImóveis - TypeORM com Relacionamentos

#### Nesse projetos desenvolvi um serviço de back-end responsável por gerenciar uma imobiliária utilizando TypeORM e relacionamentos com base no diagrama abaixo:

![DER-Entrega5](https://user-images.githubusercontent.com/71359547/209883659-8d54d3e7-dabe-44bb-b4ca-3334568cfac9.png)

Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

````
yarn install
````
<br>

**Configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local


Com isso feito, para rodar sua aplicação, basta utilizar o comando
````
yarn dev
````

<br>

## 🚀 Tecnologias Usadas
<div>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
    
</div><br>

## 📚 Outras bibliotecas 
<p>Yup</p>
<p>Bcryptjs</p>
<p>Typeorm</p>
<p>Jsonwebtoken<p>

<br>

## Endpoints do serviço:

### POST - /users
<ul>
  <li>Rota para criação de usuário com os seguintes dados:</li>
  <li>name: string </li>
  <li>email: string </li>
  <li>password: Deverá receber uma string mas armazenar uma hash gerada com o bcrypt</li>
</ul>

### GET - /users
<ul>
  <li>A rota retorna todos os dados dos usuários, com exceção da hash de senha.</li>
  <li>A rota pode ser acessada apenas por administradores.</li>
</ul>

### PATCH - /users/<id>
<ul>
  <li>A rota deve atualizar os dados do usuário.</li>
  <li>Não é possível atualizar os campos id, isAdm e isActive.</li>
  <li>Apenas administradores podem atualizar qualquer usuário, usuários não-administradores podem apenas atualizar seu próprio usuário.</li>
</ul>
  
  ### POST - /login
<ul>
  <li>Rota de login recebendo email e password</li>
  <li>O login valida se o usuário existe e se a senha está correta.</li>
</ul>
  
  ### POST - /categories
<ul>
  <li>Rota para criação de categorias com os seguintes dados:</li>
  <li>name: string</li>
  <li>Não é possível ser cadastrada duas categorias com o mesmo nome.</li>
  <li>A rota pode ser acessada apenas por administradores.</li>
  </ul>
  
### GET - /categories
<ul>
  <li>A rota lista todas as categorias.</li>
  <li>A rota não precisa de autenticação para ser acessada.</li>
</ul> 
  
### GET - /categories/id/properties
<ul>
  <li>A rota lista todos os imóveis que pertencem a uma categoria.</li>
  <li>A rota não precisa de autenticação para ser acessada.</li>
</ul> 
  
### POST - /properties
<ul>
  <li>Rota para criação de um imóvel com os seguintes dados:</li>
  <li>value: number</li>
  <li>size: number</li>
  <li>address: um objeto com os seguintes dados:</li>
  <li>district: string</li>
  <li>zipCode: string</li>
  <li>number: string</li>
  <li>city: string</li>
  <li>state: string</li>
  <li>categoryId: string</li>
  <li>Não podem ser cadastrados dois imóveis com o mesmo endereço.</li>
  <li>A rota pode ser acessada apenas por administradores.</li>
  <li>Não podem ser cadastrados imóveis com o campo state maior que 2 dígitos.</li>
  <li>Não podem ser cadastrados imóveis com o campo zipCode maior que 8 dígitos.</li>
</ul> 
 
  ### GET - /properties
<ul>
  <li>A rota lista todos os imóveis.</li>
  <li>A rota não precisa de autenticação para ser acessada.</li>
</ul> 
  
   ### POST - /schedules
<ul>
  <li>Rota responsável pelo agendamento de uma visita a um imóvel com os seguintes dados:</li>
  <li>date: deve ser enviado como uma string .</li>
  <li>hour: deve ser enviado como uma string.</li>
  <li>propertieId: deve ser enviado como uma string.</li>
  <li>Não  é  possível agendar uma visita a um imóvel com a mesma data e hora.</li>
  <li>Não é possível um usuário agendar uma visita a 2 imóveis diferentes com a mesma data e hora.</li>
  <li>Só é possível agendar uma visita durante horário comercial (08:00 às 18:00).</li>
  <li>Só é possível agendar uma visita durante em dias úteis (segunda à sexta).</li>
</ul> 
  
  ### GET - /schedules/properties/id
<ul>
  <li>A rota lista todos os agendamentos de um imóvel.</li>
  <li>A rota pode ser acessada apenas por administradores.</li>
</ul> 

# **Rodando os testes** 

Para rodar os testes é necessário que no seu terminal, você esteja dentro do diretório do projeto.

Estando no terminal e dentro do caminho correto, você poderá utilizar os comandos a seguir:

### Rodar todos os testes
````
yarn test
````
#
### Rodar todos os testes e ter um log ainda mais completo
````
yarn test --all
````

<div>
  <a href="mailto:diogosoarespeixoto41@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/diogo-soares-peixoto/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">   </a>
</div>
