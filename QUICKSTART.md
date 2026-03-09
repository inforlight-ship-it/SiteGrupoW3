# 🚀 Quick Start - Grupo W3 Website

Comece a trabalhar no projeto em menos de 5 minutos!

## ⚡ Start Rápido (3 comandos)

```bash
# 1. Instalar dependências
npm install

# 2. Adicionar o logo (IMPORTANTE!)
# Coloque o arquivo Ícone.jpg do GitHub em /public/icone.jpg

# 3. Iniciar servidor de desenvolvimento
npm run dev

# 4. Abrir no navegador
# http://localhost:5173
```

Pronto! O site está rodando. 🎉

> 💡 **Nota**: Se o logo não aparecer, verifique [LOGO_SETUP.md](./LOGO_SETUP.md) para instruções detalhadas.

## 📦 Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev        # Inicia servidor com hot reload

# Produção
npm run build      # Gera build otimizada na pasta dist/
npm run preview    # Testa a build localmente
```

## 🎯 Acesso Rápido

- **Desenvolvimento**: http://localhost:5173
- **Preview Build**: http://localhost:4173 (após `npm run preview`)

## 📝 Edição Rápida

### Mudar conteúdo da Home
```
/src/app/pages/HomePage.tsx
```

### Mudar navbar
```
/src/app/components/Navbar.tsx
```

### Mudar footer
```
/src/app/components/Footer.tsx
```

### Adicionar novo serviço
```
1. Criar arquivo: /src/app/pages/services/NovoServico.tsx
2. Exportar em: /src/app/pages/services/index.ts
3. Adicionar rota em: /src/app/App.tsx
```

## 🎨 Personalizações Rápidas

### Cores do tema
```
/src/styles/theme.css
```

### Estilos globais
```
/src/styles/index.css
```

## 🔧 Troubleshooting Rápido

### Porta já em uso?
```bash
npm run dev -- --port 3000
```

### Erro de cache?
```bash
rm -rf node_modules/.vite
npm run dev
```

### Dependências quebradas?
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Documentação Completa

- [README.md](./README.md) - Visão geral do projeto
- [SETUP.md](./SETUP.md) - Setup detalhado
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Como fazer deploy
- [CHECKLIST.md](./CHECKLIST.md) - Checklist de verificação

## 💡 Dicas

1. **Hot Reload**: Salve o arquivo e veja mudanças instantâneas
2. **Tailwind**: Use classes utilitárias direto no JSX
3. **TypeScript**: O editor mostrará erros de tipo automaticamente
4. **React DevTools**: Instale a extensão do Chrome para debug

## 🆘 Precisa de Ajuda?

```bash
# Verificar versão Node
node --version  # Deve ser 18+

# Verificar instalação
npm list react react-dom

# Ver logs completos
npm run dev --verbose
```

## 📱 Testar Responsividade

1. Abra http://localhost:5173
2. Pressione F12 (DevTools)
3. Clique no ícone de dispositivo móvel
4. Teste em diferentes tamanhos

## ✅ Checklist Rápido

- [ ] Node.js 18+ instalado?
- [ ] Dependências instaladas? (`npm install`)
- [ ] Servidor rodando? (`npm run dev`)
- [ ] Site abre no navegador?
- [ ] Hot reload funcionando?

Tudo certo? Comece a desenvolver! 🚀

---

**Tempo estimado de setup**: 2-5 minutos ⏱️