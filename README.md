# Grupo W3 Cibersegurança - Website

Website moderno e responsivo para a empresa Grupo W3, especializada em Cibersegurança e Consultoria em Tecnologia da Informação.

## ✅ Status do Logo

🎉 **Logo configurado e funcionando!** O logo é carregado diretamente do site oficial: `https://grupow3.com/assets/icone.jpg`

Documentação completa:
- [LOGO_SETUP.md](LOGO_SETUP.md) - Guia detalhado
- [VERIFICACAO_LOGO_FINAL.md](VERIFICACAO_LOGO_FINAL.md) - Verificação completa

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultrarrápido
- **Tailwind CSS v4** - Framework CSS utility-first
- **React Router** - Roteamento do lado do cliente
- **Motion (Framer Motion)** - Biblioteca de animações
- **Lucide React** - Ícones modernos
- **Radix UI** - Componentes de UI acessíveis
- **Material UI** - Biblioteca de componentes React

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou pnpm

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd grupo-w3-website
```

2. Instale as dependências:
```bash
npm install
```

ou com pnpm:
```bash
pnpm install
```

## 🏃 Executando o Projeto

### Modo Desenvolvimento
```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build para Produção
```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`

### Visualizar Build de Produção
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
grupo-w3-website/
├── src/
│   ├── app/
│   │   ├── components/       # Componentes React
│   │   │   ├── ui/          # Componentes de UI reutilizáveis
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ServiceDetailPage.tsx
│   │   │   └── Services.tsx
│   │   ├── pages/           # Páginas da aplicação
│   │   │   ├── services/    # Páginas de detalhes dos serviços
│   │   │   └── HomePage.tsx
│   │   ├── App.tsx          # Componente principal
│   │   └── main.tsx         # Entry point
│   ├── assets/              # Imagens, logos e recursos estáticos
│   └── styles/              # Arquivos CSS
│       ├── fonts.css
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
├── index.html               # HTML principal
├── package.json
├── tsconfig.json            # Configuração TypeScript
├── vite.config.ts           # Configuração Vite
└── README.md
```

## 🎨 Características

- **Design Moderno**: Interface limpa com gradientes azuis/ciano
- **Totalmente Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops
- **Animações Suaves**: Usando Motion para transições fluidas
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Performance**: Build otimizado com code splitting
- **Acessibilidade**: Componentes acessíveis do Radix UI
- **12 Serviços**: Páginas individuais para cada serviço oferecido

## 📞 Informações da Empresa

- **Telefone**: +55 15 98818-9999
- **Email**: contato@grupow3.com
- **Localização**: Sorocaba/SP
- **Website**: grupow3.com
- **Instagram**: @grupow3
- **Horário**: Segunda a Sexta, 8h às 17h

## 🛠️ Serviços Oferecidos

1. CIO as a Service
2. DPO as a Service
3. Gerenciamento de Datacenter
4. Backup as a Service
5. RMM (Remote Monitoring and Management)
6. Proteções de EDR
7. Firewall
8. NOC (Network Operations Center)
9. SOC (Security Operations Center)
10. Controle de Acesso (Paravision e IA)
11. Segurança CFTV
12. Proteção de Email (Acronis)

## 🔒 Segurança e Privacidade

O site inclui integração com Adopt para gerenciamento de cookies e conformidade com LGPD/GDPR.

## 📝 Licença

© 2026 Grupo W3 Cibersegurança. Todos os direitos reservados.

## 🤝 Suporte

Para suporte ou dúvidas, entre em contato:
- WhatsApp: +55 15 98818-9999
- Email: contato@grupow3.com