# <img width="400" height="100" alt="logoalpha" src="https://github.com/user-attachments/assets/36b22176-a836-4c31-8a5e-9f632eeda7b8" />
# Sistema de Contatos - Frontend

Interface web moderna desenvolvida em Angular para gerenciamento de contatos.

---

## Índice

- Sobre o Projeto
- Tecnologias Utilizadas
- Pré-requisitos
- Instalação
- Executando o Projeto
- Estrutura do Projeto
- Funcionalidades
- Configuração da API

---

## 📄 Sobre o Projeto

Este projeto é a interface frontend do sistema de gerenciamento de contatos. Desenvolvido com Angular, possui um design moderno com tema escuro, responsividade e oferece uma experiência de usuário intuitiva.

### Funcionalidades e Fluxo das páginas

- ✅ Página inicial com nome em Destaque
- ✅ Listagem de contatos em tabela
- ✅ Cadastro de novos contatos
- ✅ Edição de contatos existentes
- ✅ Exclusão de contatos existentes.
- ✅ Design responsivo
- ✅ Tema escuro moderno

---

## 🎥 Demonstração do Projeto

[![Demonstração do sistema](https://img.youtube.com/vi/6hzqJ-X0v8s/0.jpg)](https://youtu.be/6hzqJ-X0v8s)
---

## 🖱️ Tecnologias Utilizadas

- **Angular 17+** - Framework frontend
- **TypeScript** - Linguagem d
- **HTML** - Estrutura das páginas
- **CSS** - Estilização e animações
- **RxJS** - Programação reativa
- **Angular Router** - Navegação entre páginas

---

## ⏸️ Para executar...

Antes de executar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Angular CLI](https://angular.io/cli)

### Verifique a instalação

```bash
node -v
npm -v
ng version
```

### Instale Angular CLI

```bash
npm install -g @angular/cli
```

---

## ▶️ Executando...

### Passo 1: Clonar o repositório

```bash
git clone https://github.com/BekaPrado/FRONT_Alphacode_Contatos
```

### Passo 2: Entrar na pasta do projeto

```bash
cd frontend-contatos
```

### Passo 3: Instalar dependências

```bash
npm install
```
---

### Rodar a aplicação

```bash
ng serve
```

Acesse no navegador: Exemplo: **http://localhost:4200**

## 📁 Estrutura do Projeto

```
frontend/
│
├── public/
│   └── img/
│       └── logo.png              # Logo da empresa
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/             # Página inicial
│   │   │   │   ├── home.ts
│   │   │   │   ├── home.html
│   │   │   │   └── home.css
│   │   │   │
│   │   │   ├── contato-lista/    # Lista de contatos
│   │   │   │   ├── contato-lista.ts
│   │   │   │   ├── contato-lista.html
│   │   │   │   └── contato-lista.css
│   │   │   │
│   │   │   └── contato-form/     # Formulário (criar/editar)
│   │   │       ├── contato-form.ts
│   │   │       ├── contato-form.html
│   │   │       └── contato-form.css
│   │   │
│   │   ├── services/
│   │   │   └── contato.service.ts  # Serviço HTTP
│   │   │
│   │   ├── app.html              # Layout principal
│   │   ├── app.css               # Estilos do layout
│   │   ├── app.ts                # Componente raiz
│   │   └── app.routes.ts         # Configuração de rotas
│   │
│   ├── styles.css                # Estilos globais
│   └── index.html                # Página HTML principal
│
├── angular.json                  # Configuração do Angular
├── package.json                  # Dependências do projeto
└── README.md                     # Este arquivo
```

---

##  ⬆️ Rotas da Aplicação

| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | Home | Página inicial |
| `/contatos` | ContatoLista | Lista de contatos |
| `/contatos/novo` | ContatoForm | Cadastro de Contato|
| `/contatos/editar/:id` | ContatoForm | Edição do Contato|

---

## ⚙️ Configuração da API

Configure a URL no arquivo abaixo de acordo com sua pasta da API.

**`src/app/services/contato.service.ts`**

```typescript
private apiUrl = 'http://localhost/Back%20de%20Contatos/api/contatos.php';
```

### CORS

A API deve permitir requisições do frontend. Isso é configurado no backend com:

```php
header("Access-Control-Allow-Origin: *");
```

---

## 🖥️ Telas

### Página Inicial 

- Apresentação 
- Cards animados 
- Botão de acesso aos contatos

### Lista de Contatos

- Tabela com todos os contatos
- Avatar com inicial do nome
- Botões de editar e excluir

### Cadastro de Contato

- Campos: nome, data de nascimento, email, profissão, telefone, celular
- Checkboxes: WhatsApp, SMS, Email
- Validação de campos obrigatórios
- Modo criar e editar no mesmo componente

---

##  ⭕ Possíveis Problemas ->

### Erro: "Cannot find module"

```bash
npm install
```

### Erro: "Port 4200 is already in use"

```bash
ng serve --port 4201
```

## 👩‍💻

**Rebeka Marcelino**

- GitHub: [BekaPrado](https://github.com/BekaPrado)
- LinkedIn: [Rebeka Marcelino](www.linkedin.com/in/rebekamarcelino)


## 🔗 Links Relacionados

- [Backend da API](https://github.com/BekaPrado/CRUD_Alphacode_Contatos) 
