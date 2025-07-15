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
