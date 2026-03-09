# 🧪 Instruções de Teste de Build

Este documento contém instruções passo a passo para testar se o projeto está funcionando corretamente após a refatoração.

## ⚡ Teste Rápido (5 minutos)

```bash
# 1. Limpar cache anterior (se existir)
rm -rf node_modules package-lock.json

# 2. Instalar dependências
npm install

# 3. Verificar TypeScript
npx tsc --noEmit

# 4. Build de produção
npm run build

# 5. Verificar se dist/ foi criada
ls -la dist/

# 6. Testar preview
npm run preview
```

## ✅ Checklist de Verificação

### Fase 1: Instalação
```bash
npm install
```

**Verificar**:
- [ ] Instalação completa sem erros
- [ ] Nenhum erro de peer dependencies
- [ ] Pasta `node_modules/` criada
- [ ] Arquivo `package-lock.json` criado

**Resultado esperado**: 
```
added 1234 packages in 30s
```

### Fase 2: Verificação TypeScript
```bash
npx tsc --noEmit
```

**Verificar**:
- [ ] Nenhum erro de tipo
- [ ] Nenhum warning crítico

**Resultado esperado**: 
```
(nenhuma saída = sucesso)
```

### Fase 3: Build de Desenvolvimento
```bash
npm run dev
```

**Verificar**:
- [ ] Servidor inicia em http://localhost:5173
- [ ] Nenhum erro no terminal
- [ ] Página carrega no navegador
- [ ] Console do browser sem erros

**Resultado esperado**:
```
VITE v6.3.5  ready in 234 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**Teste no navegador**:
1. Abra http://localhost:5173
2. Verifique que o logo aparece
3. Navegue pelo menu
4. Clique em um serviço
5. Teste o botão WhatsApp
6. Verifique responsividade (F12 → device toolbar)

### Fase 4: Build de Produção
```bash
npm run build
```

**Verificar**:
- [ ] Build completa sem erros
- [ ] Pasta `dist/` criada
- [ ] Arquivos HTML, CSS, JS gerados
- [ ] Assets copiados

**Resultado esperado**:
```
vite v6.3.5 building for production...
✓ 1234 modules transformed.
dist/index.html                  1.23 kB │ gzip:  0.45 kB
dist/assets/index-abc123.css    45.67 kB │ gzip: 12.34 kB
dist/assets/index-def456.js    567.89 kB │ gzip: 123.45 kB
✓ built in 2.34s
```

**Verificar conteúdo de dist/**:
```bash
ls -la dist/
```

Deve conter:
- [ ] index.html
- [ ] assets/ (pasta com CSS e JS)
- [ ] favicon.svg

### Fase 5: Preview da Build
```bash
npm run preview
```

**Verificar**:
- [ ] Servidor preview inicia em http://localhost:4173
- [ ] Site carrega corretamente
- [ ] Todas as funcionalidades funcionam
- [ ] Nenhum erro no console

**Resultado esperado**:
```
➜  Local:   http://localhost:4173/
➜  Network: use --host to expose
```

**Teste completo no navegador**:
1. Abra http://localhost:4173
2. Teste TODAS as páginas
3. Teste TODOS os links
4. Teste formulário de contato
5. Teste botões WhatsApp
6. Teste menu mobile
7. Verifique imagens carregam
8. Verifique animações funcionam

## 🔍 Testes Detalhados

### Teste 1: Logo Aparece
**Locais para verificar**:
- [ ] Navbar (topo)
- [ ] Hero (centro da home)
- [ ] Footer (rodapé)

### Teste 2: Navegação
**Itens para testar**:
- [ ] Link "Início" → Scroll para topo
- [ ] Link "Serviços" → Scroll para seção serviços
- [ ] Link "Sobre" → Scroll para seção sobre
- [ ] Link "Contato" → Scroll para formulário

### Teste 3: Páginas de Serviços
**Testar cada uma das 12 páginas**:
- [ ] /servicos/cio-as-a-service
- [ ] /servicos/dpo-as-a-service
- [ ] /servicos/gerenciamento-datacenter
- [ ] /servicos/backup-as-a-service
- [ ] /servicos/rmm
- [ ] /servicos/protecoes-edr
- [ ] /servicos/firewall
- [ ] /servicos/noc
- [ ] /servicos/soc
- [ ] /servicos/controle-acesso
- [ ] /servicos/seguranca-cftv
- [ ] /servicos/protecao-email

**Para cada página verificar**:
- [ ] Carrega sem erro
- [ ] Breadcrumb aparece e funciona
- [ ] Botão "Voltar" funciona
- [ ] Imagem carrega
- [ ] Botão "Falar com Especialista" abre WhatsApp

### Teste 4: WhatsApp Integration
**Botões para testar**:
- [ ] Navbar: "Solicitar Consultoria"
- [ ] Hero: "Entre em Contato"
- [ ] Cada página de serviço: "Falar com Especialista"

**Verificar**:
- Abre em nova aba
- URL contém: `wa.me/5515988189999`
- Mensagem personalizada incluída

### Teste 5: Links Externos
**Links para testar**:
- [ ] Instagram: https://www.instagram.com/grupow3
- [ ] Email: mailto:contato@grupow3.com
- [ ] Telefone: tel:+5515988189999
- [ ] Política de Privacidade: PDF Adopt
- [ ] Termos de Uso: PDF Adopt

### Teste 6: Responsividade
**Testar em**:
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet landscape (1024x768)
- [ ] Tablet portrait (768x1024)
- [ ] Mobile large (414x896)
- [ ] Mobile medium (375x667)
- [ ] Mobile small (320x568)

**Verificar em cada**:
- Layout não quebra
- Menu mobile funciona (se aplicável)
- Textos legíveis
- Botões clicáveis
- Imagens proporcionais

### Teste 7: Animações
**Verificar**:
- [ ] Hero: Orbs animados (glowing)
- [ ] Hero: Logo pulsa
- [ ] Hero: Scroll indicator
- [ ] Services: Cards hover 3D
- [ ] Footer: Scroll reveal
- [ ] Páginas: Transições suaves

### Teste 8: Formulário de Contato
**Testar**:
- [ ] Campos obrigatórios validam
- [ ] Email valida formato
- [ ] Telefone aceita input
- [ ] Textarea expande
- [ ] Botão enviar funciona
- [ ] Loading state aparece (se implementado)
- [ ] Mensagem de sucesso/erro

## 🐛 Troubleshooting

### Erro: "Cannot find module 'react'"
```bash
npm install react react-dom
```

### Erro: "Port 5173 already in use"
```bash
# Matar processo na porta
lsof -ti:5173 | xargs kill -9

# Ou usar outra porta
npm run dev -- --port 3000
```

### Erro: Build falha com TypeScript
```bash
# Verificar erros específicos
npx tsc --noEmit

# Se necessário, limpar e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Logo não aparece
**Verificar**:
1. Arquivo existe: `/src/app/components/Logo.tsx`
2. Componente exportado corretamente
3. Import correto nos arquivos que usam

### Imagens não carregam
**Verificar**:
1. URLs do Unsplash corretas
2. Conexão com internet
3. Console do browser para erros

### Build muito grande
**Normal**: Build React com todas as libs ~600KB
**Se maior**: Verificar se há arquivos grandes incluídos

## 📊 Métricas de Sucesso

### Build Size (Esperado)
```
HTML:     ~2 KB
CSS:      ~50 KB (comprimido)
JS:       ~600 KB (comprimido)
Assets:   ~20 KB (logo, favicon)
Total:    ~672 KB
```

### Performance (Esperado)
- First Paint: < 1s
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: > 90

### Build Time (Esperado)
- Development start: < 5s
- Production build: < 10s
- Hot reload: < 100ms

## ✅ Resultado Final

Após passar por todos os testes acima, você deve ter:

- [x] Instalação funcionando
- [x] Desenvolvimento funcionando
- [x] Build de produção funcionando
- [x] Preview funcionando
- [x] Logo aparecendo em todos os lugares
- [x] Todas as páginas acessíveis
- [x] Navegação fluida
- [x] WhatsApp funcionando
- [x] Links externos funcionando
- [x] Responsivo em todos os tamanhos
- [x] Animações suaves
- [x] Sem erros no console
- [x] Sem warnings TypeScript

## 🎉 Pronto para Deploy!

Se todos os testes passaram, o projeto está pronto para ser enviado para produção!

**Próximo passo**: Consulte `DEPLOYMENT.md` para instruções de deploy.

---

**Última atualização**: Março 2026  
**Status**: ✅ Testes validados
