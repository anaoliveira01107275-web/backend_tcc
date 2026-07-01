O que foi usado.

Backend

*Node.js*

O Node.js foi utilizado como ambiente de execução do servidor backend da aplicação. Sua arquitetura baseada em eventos e operações assíncronas permite o processamento eficiente de múltiplas requisições simultâneas, proporcionando maior desempenho e escalabilidade para o sistema.

**Express**
O Express é um framework para Node.js utilizado na criação da API REST do sistema. Ele facilita o desenvolvimento das rotas, o tratamento de requisições HTTP e a organização do código da aplicação, tornando o desenvolvimento mais rápido e estruturado.

*Prisma ORM*
O Prisma foi utilizado como ferramenta de mapeamento objeto-relacional (ORM), responsável por realizar a comunicação entre a aplicação e o banco de dados. Com ele, é possível executar operações de consulta, inserção, atualização e exclusão de dados de forma simplificada e segura, reduzindo a complexidade das consultas SQL.

**JWT (JSON Web Token)**
O JWT foi utilizado para implementar a autenticação e autorização dos usuários. Após o login, um token é gerado e enviado ao usuário, permitindo que suas credenciais sejam verificadas em futuras requisições sem a necessidade de realizar autenticação repetidamente. Isso aumenta a segurança e melhora a experiência de uso do sistema.

Banco de Dados

*PostgreSQL*
O PostgreSQL foi escolhido como sistema gerenciador de banco de dados relacional devido à sua confiabilidade, segurança e alto desempenho. Ele é responsável pelo armazenamento das informações do sistema, garantindo integridade dos dados e suporte a operações complexas de consulta.

Ferramentas de Desenvolvimento

**Visual Studio Code (VS Code)**
O Visual Studio Code foi utilizado como editor de código durante o desenvolvimento do projeto. A ferramenta oferece recursos como destaque de sintaxe, depuração, integração com Git e extensões que auxiliam na produtividade da equipe de desenvolvimento.

*Postman*
O Postman foi utilizado para realizar testes das rotas da API durante o desenvolvimento. A ferramenta permite enviar requisições HTTP, validar respostas e verificar o correto funcionamento dos endpoints antes da integração com o frontend.

**GitHub**
O GitHub foi utilizado para o versionamento e armazenamento do código-fonte do projeto. A plataforma possibilita o controle de versões, o acompanhamento das alterações realizadas e a colaboração entre os membros da equipe, garantindo maior organização e segurança no desenvolvimento.


Método	Rota	Descrição
POST	/register	Cadastra um novo usuário
POST	/login	Realiza o login do usuário
GET	/me	Retorna os dados do usuário logado
POST	/produtos	Cadastra um novo produto
GET	/produtos	Lista todos os produtos
GET	/produtos/:id	Busca um produto pelo ID
PUT	/produtos/:id	Atualiza um produto
DELETE	/produtos/:id	Remove um produto
GET	/meus-produtos	Lista apenas os produtos do usuário logado
POST	/upload	Faz o upload da imagem de um produto
