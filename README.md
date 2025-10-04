# API de Gerenciamento de Contatos

Esta é uma API RESTful simples, criada com Node.js, Express e MySQL, para realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em uma lista de contatos.

## Tecnologias Utilizadas

-   **Node.js**
-   **Express.js**
-   **MySQL2**
-   **Dotenv** 
-   **CORS** 


## Como Configurar e Rodar o Projeto

### 1. Pré-requisitos

-   Node.js (versão 14 ou superior)
-   Servidor MySQL

### 2. Instalação

Clone o repositório para sua máquina local

Entre na pasta do projeto e instale as dependências:
`cd api-contatos`
`npm install`

### 3. Banco de Dados

Execute o seguinte script SQL no seu cliente MySQL para criar o banco e a tabela:

```sql
CREATE DATABASE IF NOT EXISTS lista_contatos;
USE lista_contatos;
CREATE TABLE IF NOT EXISTS contatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);
