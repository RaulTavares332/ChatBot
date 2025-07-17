<<<<<<< HEAD
# 🍽️ Chatbot para Restaurantes com ChatPress + Firebase

Chatbot profissional para **restaurantes**, desenvolvido com **ChatPress**, **Firebase Functions**, **Firestore** e **React**, com um painel de controle moderno e seguro.  
Inclui funcionalidades como **reserva de mesas**, **pedidos online**, **envio de lembretes para clientes**, **pagamentos integrados** e **detecção de mensagens críticas**.  
Totalmente gratuito e **alinhado à LGPD**, ideal para uso em bares, bistrôs, lanchonetes e restaurantes de todos os tamanhos.

---

## ✅ Funcionalidades
  
- Pedidos online com integração ao cardápio digital  
- Lembretes automáticos via WhatsApp  
- Respostas inteligentes a perguntas frequentes (FAQ) como horário de funcionamento, endereço, formas de pagamento, etc.  
- Geração de link de pagamento via Mercado Pago  
- Detecção de palavras-chave críticas e redirecionamento para atendimento humano  
- Painel administrativo com autenticação via Firebase  
- Histórico de pedidos e interações com o cliente (logs)  

---

## 🛠 Tecnologias Utilizadas

- **ChatPress** – Plataforma de chatbot low-code  
- **Firebase Functions & Firestore** – Backend escalável com banco de dados em tempo real  
- **Google Calendar API** – Integração opcional para eventos especiais ou reservas  
- **Firebase Auth** – Autenticação segura de administradores  
- **React + TailwindCSS** – Painel administrativo moderno e responsivo  
- **Jest** – Testes automatizados para garantir estabilidade  
- **Mercado Pago API** – Processamento de pagamentos de forma integrada  

---

## 🚀 Como Instalar

```bash
# Clone o repositório
git clone https://github.com/RaulTavares332/ChatBot

# Instale as dependências das funções do Firebase
cd functions && npm install

# Instale as dependências do painel administrativo
cd ../public-panel && npm install

# Faça login no Firebase e publique a aplicação
firebase login
firebase deploy
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> a5c2dc7 (Structuring Login screen)
