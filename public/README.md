# Pasta Public - Assets Estáticos

Esta pasta contém arquivos estáticos que são servidos diretamente pelo servidor web.

## 📁 Conteúdo Atual

### ✅ Configuração do Logo

**STATUS**: ✅ O logo está configurado e funcionando!

O logo é carregado **diretamente do site oficial** da empresa:
- **URL**: `https://grupow3.com/assets/icone.jpg`
- **Componente**: `/src/app/components/Logo.tsx`
- **Favicon**: Configurado no `index.html`

**Não é necessário adicionar arquivos nesta pasta** - o logo está hospedado no servidor oficial.

### Arquivos Presentes

- `favicon.svg` - Ícone legado (substituído pelo ícone oficial)
- `ADICIONAR_LOGO_AQUI.txt` - Instruções antigas (mantido para referência)

## 🔧 Como Funciona

O componente Logo carrega a imagem diretamente da URL oficial:

```tsx
// /src/app/components/Logo.tsx
export function Logo({ className = "" }: { className?: string }) {
  return (
    <img 
      src="https://grupow3.com/assets/icone.jpg" 
      alt="Grupo W3 Cibersegurança" 
      className={className}
      style={{ height: '60px', width: 'auto' }}
    />
  );
}
```

## ⚙️ Alternativa: Hospedar Localmente

Se preferir hospedar o logo localmente nesta pasta:

1. **Baixe o arquivo**
   ```
   URL: https://grupow3.com/assets/icone.jpg
   ```

2. **Salve nesta pasta**
   ```
   /public/icone.jpg
   ```

3. **Atualize o componente Logo.tsx**
   ```tsx
   src="https://grupow3.com/assets/icone.jpg"  // Atual
   src="/icone.jpg"  // Para uso local
   ```

4. **Atualize o index.html**
   ```html
   href="https://grupow3.com/assets/icone.jpg"  // Atual
   href="/icone.jpg"  // Para uso local
   ```

## 🌐 URLs de Acesso

### Logo Oficial (Atual)
```
https://grupow3.com/assets/icone.jpg
```

### Se hospedar localmente

**Desenvolvimento**:
```
http://localhost:5173/icone.jpg
```

**Produção**:
```
https://seu-dominio.com/icone.jpg
```

## 📝 Outros Assets Estáticos

Você pode adicionar outros arquivos nesta pasta conforme necessário:

### Imagens
```
/public/logo-white.png
/public/logo-dark.png
/public/hero-background.jpg
```

### Ícones
```
/public/apple-touch-icon.png
/public/android-chrome-192x192.png
```

### Documentos
```
/public/politica-privacidade.pdf
/public/termos-uso.pdf
```

### Configurações
```
/public/robots.txt
/public/manifest.json
```

## ⚡ Como o Vite Processa Estes Arquivos

### Durante Desenvolvimento
- Servidos diretamente de `/public/`
- Acessíveis via `http://localhost:5173/nome-arquivo.ext`
- Hot reload não se aplica (requer refresh manual)

### Durante Build
- Copiados para `/dist/` sem processamento
- Mantêm os mesmos nomes
- Cache-busting não aplicado

## 🔗 Referenciando no Código

### HTML
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

### React/JSX
```tsx
<img src="/arquivo.jpg" alt="Descrição" />
```

### CSS
```css
background-image: url('/hero-background.jpg');
```

## ✅ Vantagens da Configuração Atual

- ✅ Logo sempre atualizado com a versão oficial
- ✅ Não precisa gerenciar arquivo local
- ✅ Menor tamanho do repositório
- ✅ Carregamento direto do CDN da empresa
- ✅ Funciona em desenvolvimento e produção

## 🆘 Troubleshooting

### Logo não aparece

1. **Verifique a conexão com internet**
2. **Confirme que a URL está acessível**
   ```
   https://grupow3.com/assets/icone.jpg
   ```
3. **Limpe o cache do navegador**
   - Chrome: Ctrl + Shift + R
   - Firefox: Ctrl + Shift + R
   - Safari: Cmd + Option + R

### Problemas de CORS

Se houver problemas de Cross-Origin Resource Sharing:
- Use a alternativa de hospedar localmente (veja seção acima)

## 📚 Documentação Relacionada

- [LOGO_SETUP.md](../LOGO_SETUP.md) - Instruções detalhadas sobre o logo
- [COMO_ADICIONAR_LOGO.txt](../COMO_ADICIONAR_LOGO.txt) - Guia rápido
- [README.md](../README.md) - Visão geral do projeto

---

**Status**: ✅ Logo configurado e funcionando diretamente do site oficial!
