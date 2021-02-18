## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is simple Lorem ipsum dolor generator.
	
## Technologies
Project is created with:
* Nest Framework: 5.4.0
* Mongodb version: 7.2.2
* 
	
## Setup
Para rodar esse projeto, use localmente npm:

```
$ git clone https://github.com/carolineccorrea/Desafio-Node.js.git
$ cd Desafio-node.js
$ npm install
$ npm run dev:server
```
## O servidor inciará na porta:3000 - acesse <http://localhost:3000> 

## Exemplos de uso
http://localhost:3000/v1/customers

* para adicionar um usuário 
* use Content-Type - application/json

```
{
	"name": "Fulano",
	"document": "123456789",
	"email": "fulano@email.com",
	"password": "010101"
}

```
