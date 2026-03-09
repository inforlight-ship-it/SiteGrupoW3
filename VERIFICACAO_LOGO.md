# ✅ Verificação Rápida do Logo

## 🎯 Objetivo

Verificar se o logo está configurado corretamente no projeto.

## ⚡ Checklist Rápido (30 segundos)

Execute estas verificações em ordem:

### 1️⃣ Arquivo Existe?

```bash
ls -la public/icone.jpg
```

**Esperado**: Arquivo existe e tem tamanho > 0 bytes

❌ **Se não existir**: Veja [LOGO_SETUP.md](./LOGO_SETUP.md) para adicionar

---

### 2️⃣ Servidor Rodando?

```bash
npm run dev
```

**Esperado**: Servidor inicia sem erros

---

### 3️⃣ Logo Acessível?

Abra no navegador:
```
http://localhost:5173/icone.jpg
```

**Esperado**: Imagem do logo é exibida

❌ **Se aparecer 404**: 
- Reinicie o servidor
- Verifique se o arquivo está em `/public/` (não em `/src/`)

---

### 4️⃣ Logo no Navbar?

Abra:
```
http://localhost:5173
```

**Esperado**: Logo aparece no canto superior esquerdo

❌ **Se não aparecer**:
- Abra Console (F12)
- Procure por erros
- Verifique [LOGO_SETUP.md#troubleshooting](./LOGO_SETUP.md)

---

### 5️⃣ Logo no Footer?

Role até o final da página:

**Esperado**: Logo aparece no rodapé

---

### 6️⃣ Build Funciona?

```bash
npm run build
```

**Esperado**: 
- Build completa sem erros
- Arquivo `dist/icone.jpg` existe

Verificar:
```bash
ls -la dist/icone.jpg
```

---

## 🚨 Resultado

### ✅ Tudo OK

Se todos os checks passaram:
- ✅ Logo configurado corretamente
- ✅ Pronto para desenvolvimento
- ✅ Pronto para deploy

### ❌ Algum Check Falhou

Consulte a documentação:

1. **Logo não existe**: [LOGO_SETUP.md](./LOGO_SETUP.md)
2. **Erro 404**: [public/README.md](./public/README.md)
3. **Build falha**: [BUILD_TEST.md](./BUILD_TEST.md)
4. **Outros erros**: [LOGO_SETUP.md#troubleshooting](./LOGO_SETUP.md)

---

## 🔍 Verificação Detalhada

### Componente Logo

Abra: `/src/app/components/Logo.tsx`

Deve conter:
```tsx
export function Logo({ className = "" }: { className?: string }) {
  return (
    <img 
      src="/icone.jpg" 
      alt="Grupo W3 Cibersegurança" 
      className={className}
      style={{ height: '60px', width: 'auto' }}
    />
  );
}
```

### Navbar Usa Logo

Abra: `/src/app/components/Navbar.tsx`

Deve ter:
```tsx
import { Logo } from "./Logo";
// ...
<Logo className="h-12 w-auto relative z-10 transition-transform group-hover:scale-105" />
```

### Footer Usa Logo

Abra: `/src/app/components/Footer.tsx`

Deve ter:
```tsx
import { Logo } from "./Logo";
// ...
<Logo className="h-10 w-auto" />
```

---

## 🧪 Testes Automáticos

### Teste 1: Arquivo Existe

```bash
test -f public/icone.jpg && echo "✅ Logo existe" || echo "❌ Logo não encontrado"
```

### Teste 2: Build Inclui Logo

```bash
npm run build && test -f dist/icone.jpg && echo "✅ Logo no build" || echo "❌ Logo não copiado"
```

### Teste 3: Tamanho do Arquivo

```bash
du -h public/icone.jpg
```

**Esperado**: < 1MB (idealmente < 500KB)

---

## 📊 Resumo Visual

```
✅ public/icone.jpg existe
  ↓
✅ http://localhost:5173/icone.jpg acessível
  ↓
✅ Logo aparece no navbar
  ↓
✅ Logo aparece no footer
  ↓
✅ npm run build funciona
  ↓
✅ dist/icone.jpg existe
  ↓
🎉 TUDO OK! Pronto para deploy
```

---

## 🆘 Problemas Comuns

### Logo aparece quebrado/distorcido

**Solução**: Verifique o formato do arquivo
```bash
file public/icone.jpg
```

Deve ser: `JPEG image data` ou `PNG image data`

### Logo muito grande/pequeno

**Solução**: Ajuste em `/src/app/components/Logo.tsx`
```tsx
style={{ height: '80px', width: 'auto' }} // Maior
style={{ height: '40px', width: 'auto' }} // Menor
```

### Logo não aparece em produção

**Checklist**:
1. ✅ Arquivo commitado no Git?
2. ✅ Arquivo em `/public/` (não `/src/`)?
3. ✅ Build refeito após adicionar logo?
4. ✅ Deploy feito com novo build?

---

## 📱 Teste em Diferentes Telas

### Desktop
```
1. Abra http://localhost:5173
2. Logo deve estar no navbar (topo esquerdo)
3. Logo deve estar no footer (rodapé)
```

### Mobile
```
1. Abra DevTools (F12)
2. Ative modo responsivo (Ctrl+Shift+M)
3. Selecione iPhone/Android
4. Logo deve aparecer redimensionado
5. Menu mobile deve mostrar logo
```

### Tablet
```
1. Selecione iPad no DevTools
2. Logo deve estar visível
3. Proporções devem estar corretas
```

---

## 🎯 Métricas de Sucesso

| Check | Status |
|-------|--------|
| Arquivo existe | ⬜ |
| Acessível via URL | ⬜ |
| Aparece no navbar | ⬜ |
| Aparece no footer | ⬜ |
| Build funciona | ⬜ |
| Responsive | ⬜ |
| Performance OK | ⬜ |

**Meta**: 7/7 ✅

---

## 🚀 Próximos Passos

Depois que todos os checks passarem:

1. ✅ Teste em navegadores diferentes (Chrome, Firefox, Safari)
2. ✅ Teste responsividade completa
3. ✅ Faça commit: `git add public/icone.jpg`
4. ✅ Rode testes completos: [BUILD_TEST.md](./BUILD_TEST.md)
5. ✅ Deploy: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Tempo estimado**: 30 segundos - 2 minutos  
**Última atualização**: Março 2026
