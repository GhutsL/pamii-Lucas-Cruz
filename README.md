# pamii-Lucas-Cruz
Aulas de Programação de Aplicativos Mobile II com o Professor João Siles


# Criando API Routes com Next.js e Tela de SignIn

## Dia 15/09/2025 – Aula de Backend com API Routes e Deploy

Nesta aula aprendemos a criar uma API simples em Next.js, enviar e receber dados no backend, construir uma tela de login (SignIn) para consumir essa API e por fim realizar o deploy do backend.

Pré-Requisitos

 - Node.js instalado (versão LTS recomendada)
 - npm (instalado junto com o Node)
 - Editor de código, como VS Code
 - Cliente de requisições HTTP, como Postman ou Insomnia (opcional, mas recomendado)
 - [Documentação oficial Next.js](https://nextjs.org/docs)



## Criando o projeto Next.js

Para iniciar um novo projeto:

Execute o comando para criar um projeto Next.js:

    npx create-next-app@latest meu-app

Entre na pasta criada:

    cd meu-app

Instale a dependência para requisições HTTP:

    npm install axios

Para rodar o servidor de desenvolvimento:

    npm run dev

A aplicação estará disponível em:

    http://localhost:3000

## Habilitando API Routes no Next.js

No Next.js, as API Routes ficam na pasta pages/api.
Cada arquivo dentro dessa pasta corresponde a um endpoint.

**Criando um endpoint de Login**

Crie o arquivo pages/api/login.js com o seguinte conteúdo:

   

     export default function handler(req, res) {
        
        if (req.method === "POST") {
        
        const { email, password } = req.body;
          
        if (email === "admin@teste.com" && password === "123456") {
        
        return res.status(200).json({ message: "Login realizado com sucesso!" });
        
        }
        
	    return res.status(401).json({ error: "Credenciais inválidas" });
    
	    }
    
	    return res.status(405).json({ error: "Método não permitido" });
    
	    }

  
O que o código faz:

 - Recebe requisições HTTP.
 - Se o método for POST, extrai email e password do corpo.
 - Se as credenciais forem válidas, retorna status 200 com mensagem de
   sucesso.
 - Caso contrário, retorna status 401 com mensagem de erro.
 - Para outros métodos, responde com status 405.

**Testando o endpoint**

Você pode usar Postman, Insomnia ou até um fetch no navegador para testar:

Endpoint: POST http://localhost:3000/api/login


    Content-Type: application/json  
    
    {
    
    "email": "admin@teste.com",
    
    "password": "123456"
    
    }
    
    Resposta esperada – Sucesso:
    
    { "message": "Login realizado com sucesso!" }
    
    Resposta esperada – Erro:
    
    { "error": "Credenciais inválidas" }

## Criando a tela de SignIn

Crie um arquivo pages/signin.js:

    import { useState } from "react";
    
    import axios from "axios";
    
    export default function SignIn() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    
    async function handleLogin(e) {
    e.preventDefault();
    try {
    const res = await axios.post("/api/login", { email, password });
    setMsg(res.data.message);
    } catch (err) {
    setMsg(err.response.data.error);
    }
    }
    
    return (
    <div  style={{  padding:  20  }}>
    
    <h1>Login</h1>
    
    <form  onSubmit={handleLogin}>
    
    <input
    
    type="email"
    
    placeholder="Digite seu email"
    
    value={email}
    
    onChange={(e) => setEmail(e.target.value)}
    
    /><br/>
    <input
    
    type="password"
    
    placeholder="Digite sua senha"
    
    value={password}
    
    onChange={(e) => setPassword(e.target.value)}
    
    /><br/>
    
    <button  type="submit">Entrar</button>
    
    </form>
    
    {msg && <p>{msg}</p>}
    
    </div>
    );
    }

Explicação:

 - Usa useState para armazenar email, password e msg (mensagem de
   retorno). 
 - Envia os dados para o endpoint /api/login usando axios.
 - Exibe a mensagem retornada pelo backend (sucesso ou erro).

**Acessando Endpoints no App**
Com o servidor rodando em npm run dev, abra em:
http://localhost:3000/signin

Preencha as credenciais e teste o login:

Email: admin@teste.com
Senha: 123456

Observe a mensagem exibida após clicar em Entrar.

Realizando o Deploy

Para colocar o backend no ar:

 1. Crie uma conta gratuita em Vercel
 2. Instale a Vercel CLI

    npm install -g vercel

 3. Na pasta do projeto, execute:

    vercel

Siga as instruções interativas: 

 1. Faça login.
 2. Escolha o repositório.
 3. Confirme as configurações.
 4. Após o deploy, a Vercel fornecerá um link público para seu projeto.

  

