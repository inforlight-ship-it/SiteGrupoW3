# Guia de Configuração - Grupo W3 Website

Este guia ajudará você a configurar o ambiente de desenvolvimento do website do Grupo W3.

## 🎯 Requisitos do Sistema

- **Node.js**: Versão 18 ou superior
- **npm** ou **pnpm**: Gerenciador de pacotes
- **Git**: Para controle de versão
- **Editor de código**: VS Code (recomendado)

## 📥 Instalação

### 1. Verificar Versões

Primeiro, verifique se você tem as versões corretas instaladas:

```bash
node --version  # Deve ser v18.0.0 ou superior
npm --version   # Deve ser v9.0.0 ou superior
```

### 2. Instalar Node.js (se necessário)

Se você não tem o Node.js instalado, baixe em [nodejs.org](https://nodejs.org/)

### 3. Clonar o Repositório

```bash
git clone <url-do-repositorio>
cd grupo-w3-website
```

### 4. Instalar Dependências

Com npm:
```bash
npm install
```

Com pnpm (mais rápido):
```bash
npm install -g pnpm  # Se ainda não tiver pnpm
pnpm install
```

### 5. Executar em Desenvolvimento

```bash
npm run dev
```

O site estará disponível em: `http://localhost:5173`

## 🔧 Scripts Disponíveis

```json
{
  "dev": "vite",              // Inicia servidor de desenvolvimento
  "build": "vite build",      // Gera build de produção
  "preview": "vite preview"   // Visualiza build de produção localmente
}
```

## 🛠️ Extensões VS Code Recomendadas

Instale estas extensões para melhor experiência de desenvolvimento:

1. **ES7+ React/Redux/React-Native snippets** (dsznajder.es7-react-js-snippets)
2. **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)
3. **ESLint** (dbaeumer.vscode-eslint)
4. **Prettier** (esbenp.prettier-vscode)
5. **TypeScript Importer** (pmneo.tsimporter)
6. **Auto Rename Tag** (formulahendry.auto-rename-tag)

## 📁 Estrutura de Pastas Detalhada

```
grupo-w3-website/
│
├── public/                    # Arquivos públicos estáticos
│   └── favicon.svg           # Ícone do site
│
├── src/
│   ├── app/                  # Código da aplicação
│   │   ├── components/       # Componentes React
│   │   │   ├── ui/          # Componentes UI reutilizáveis (Radix UI)
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   └── ... (outros)
│   │   │   │
│   │   │   ├── About.tsx         # Seção Sobre
│   │   │   ├── Contact.tsx       # Formulário de Contato
│   │   │   ├── Footer.tsx        # Rodapé
│   │   │   ├── Hero.tsx          # Seção Hero (topo)
│   │   │   ├── Logo.tsx          # Componente Logo
│   │   │   ├── Navbar.tsx        # Barra de navegação
│   │   │   ├── ScrollToTop.tsx   # Scroll automático ao trocar página
│   │   │   ├── ServiceDetailPage.tsx  # Template página de serviço
│   │   │   └── Services.tsx      # Grid de serviços
│   │   │
│   │   ├── pages/            # Páginas da aplicação
│   │   │   ├── services/     # Páginas individuais dos serviços
│   │   │   │   ├── AccessControlPage.tsx
│   │   │   │   ├── BackupServicePage.tsx
│   │   │   │   ├── CCTVPage.tsx
│   │   │   │   ├── CIOServicePage.tsx
│   │   │   │   ├── DatacenterPage.tsx
│   │   │   │   ├── DPOServicePage.tsx
│   │   │   │   ├── EDRPage.tsx
│   │   │   │   ├── EmailProtectionPage.tsx
│   │   │   │   ├── FirewallPage.tsx
│   │   │   │   ├── NOCPage.tsx
│   │   │   │   ├── RMMPage.tsx
│   │   │   │   ├── SOCPage.tsx
│   │   │   │   └── index.ts       # Exports centralizados
│   │   │   └── HomePage.tsx       # Página inicial
│   │   │
│   │   ├── App.tsx           # Componente raiz com rotas
│   │   └── main.tsx          # Entry point da aplicação
│   │
│   ├── assets/               # Assets estáticos (imagens, logos)
│   │   ├── logo.svg         # Logo SVG
│   │   └── logo.png         # Logo PNG (fallback)
│   │
│   └── styles/              # Estilos CSS
│       ├── fonts.css        # Importações de fontes
│       ├── index.css        # Estilos globais
│       ├── tailwind.css     # Diretivas Tailwind
│       └── theme.css        # Tokens de tema/design system
│
├── .gitignore               # Arquivos ignorados pelo Git
├── DEPLOYMENT.md            # Guia de deploy
├── index.html               # HTML principal
├── package.json             # Dependências e scripts
├── postcss.config.mjs       # Configuração PostCSS
├── README.md                # Documentação principal
├── SETUP.md                 # Este arquivo
├── tsconfig.json            # Configuração TypeScript
├── tsconfig.node.json       # Config TypeScript para Vite
└── vite.config.ts           # Configuração Vite
```

## 🎨 Tecnologias e Bibliotecas

### Core
- **React 18.3.1**: Biblioteca UI
- **TypeScript 5.7.3**: Superset JavaScript tipado
- **Vite 6.3.5**: Build tool moderna e rápida

### Estilização
- **Tailwind CSS 4.1.12**: Framework CSS utility-first
- **@tailwindcss/vite**: Plugin Tailwind para Vite

### Roteamento
- **react-router 7.13.0**: Roteamento client-side
- **react-router-dom 7.13.1**: Bindings DOM para React Router

### Animações
- **motion 12.23.24**: Biblioteca de animações (Framer Motion)

### UI Components
- **@radix-ui/***: Componentes acessíveis e sem estilo
- **@mui/material**: Material UI components
- **lucide-react**: Ícones modernos

### Formulários
- **react-hook-form 7.55.0**: Gerenciamento de formulários

### Outros
- **sonner**: Toast notifications
- **recharts**: Gráficos (se necessário)
- **clsx + tailwind-merge**: Utilitários para classes CSS

## 🚀 Desenvolvimento

### Hot Reload

Vite oferece Hot Module Replacement (HMR) instantâneo. Qualquer mudança no código será refletida automaticamente no navegador.

### Adicionando Novos Componentes

1. Crie o arquivo em `src/app/components/`:
```tsx
// src/app/components/MeuComponente.tsx
export function MeuComponente() {
  return (
    <div className="...">
      {/* conteúdo */}
    </div>
  );
}
```

2. Importe onde necessário:
```tsx
import { MeuComponente } from './components/MeuComponente';
```

### Adicionando Nova Página

1. Crie o arquivo em `src/app/pages/`:
```tsx
// src/app/pages/MinhaPage.tsx
export function MinhaPage() {
  return (
    <div>
      {/* conteúdo */}
    </div>
  );
}
```

2. Adicione a rota em `App.tsx`:
```tsx
<Route path="/minha-pagina" element={<MinhaPage />} />
```

### Adicionando Dependências

```bash
npm install nome-do-pacote

# Ou para dev dependencies
npm install -D nome-do-pacote
```

## 🐛 Troubleshooting

### Porta 5173 já em uso

```bash
# Vite tentará usar outra porta automaticamente
# Ou force uma porta específica:
npm run dev -- --port 3000
```

### Erro de módulo não encontrado

```bash
# Limpe cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Build falha

```bash
# Verifique erros TypeScript
npx tsc --noEmit

# Limpe cache do Vite
rm -rf node_modules/.vite
npm run dev
```

### Problemas com Tailwind

```bash
# Verifique se o PostCSS está configurado
# Veja postcss.config.mjs
```

## 📝 Boas Práticas

1. **Componentes**: Mantenha componentes pequenos e reutilizáveis
2. **TypeScript**: Use tipagem forte, evite `any`
3. **CSS**: Use Tailwind utilities, crie componentes UI reutilizáveis
4. **Nomeação**: Use PascalCase para componentes, camelCase para funções
5. **Imports**: Organize imports (React, libs, componentes, tipos)
6. **Git**: Commits descritivos e frequentes

## 🔄 Workflow de Desenvolvimento

1. Crie uma branch para sua feature:
```bash
git checkout -b feature/minha-feature
```

2. Faça suas alterações e teste

3. Commit suas mudanças:
```bash
git add .
git commit -m "feat: descrição da feature"
```

4. Push para o repositório:
```bash
git push origin feature/minha-feature
```

5. Crie um Pull Request

## 📚 Recursos Adicionais

- [Documentação React](https://react.dev)
- [Documentação Vite](https://vitejs.dev)
- [Documentação Tailwind CSS](https://tailwindcss.com)
- [Documentação React Router](https://reactrouter.com)
- [Documentação Motion](https://motion.dev)
- [Documentação Radix UI](https://radix-ui.com)

## 🆘 Suporte

Para dúvidas ou problemas:
- Abra uma issue no repositório
- Entre em contato com o desenvolvedor
- Consulte a documentação das bibliotecas

---

✨ **Pronto!** Agora você está preparado para desenvolver no projeto Grupo W3!
