# Pasta Public - Assets Estáticos

Esta pasta contém arquivos estáticos que são servidos diretamente pelo servidor web.

## 📁 Conteúdo

### ✅ Arquivos Atuais

- `favicon.svg` - Ícone que aparece na aba do navegador

### ⚠️ Arquivos Necessários

- **`icone.jpg`** - Logo da empresa Grupo W3 (FALTANDO!)

## 🔧 Como Adicionar o Logo

### Passo a Passo

1. **Localize o arquivo original**
   - O arquivo `Ícone.jpg` está no repositório GitHub da empresa
   - Faça download do arquivo

2. **Renomeie o arquivo**
   - Nome original: `Ícone.jpg`
   - Nome correto: `icone.jpg` (tudo em minúsculas)

3. **Coloque nesta pasta**
   ```
   /public/icone.jpg
   ```

4. **Verifique a instalação**
   - Durante desenvolvimento: acesse `http://localhost:5173/icone.jpg`
   - O arquivo deve ser exibido no navegador
   - Reinicie o servidor se necessário

### Formato e Especificações

- **Formato**: JPG (recomendado) ou PNG
- **Dimensões**: Qualquer (será redimensionado automaticamente)
- **Tamanho**: Recomendado < 500KB
- **Transparência**: Suportada (se usar PNG)

### Onde o Logo é Usado

O logo é usado pelos seguintes componentes:

1. **Navbar** - Header do site (desktop e mobile)
2. **Footer** - Rodapé do site
3. **Outras páginas** - Conforme necessário

O componente responsável é:
```
/src/app/components/Logo.tsx
```

## 🌐 URLs de Acesso

### Desenvolvimento
```
http://localhost:5173/icone.jpg
```

### Produção
```
https://seu-dominio.com/icone.jpg
```

## 📝 Outros Assets

Você pode adicionar outros arquivos estáticos nesta pasta:

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

### Arquivos
```
/public/politica-privacidade.pdf
/public/termos-uso.pdf
```

### Robots e Manifests
```
/public/robots.txt
/public/manifest.json
```

## ⚡ Como o Vite Processa Estes Arquivos

### Durante Desenvolvimento
- Servidos diretamente de `/public/`
- Acessíveis via `http://localhost:5173/nome-arquivo.ext`
- Hot reload não se aplica (requer refresh)

### Durante Build
- Copiados para `/dist/` sem processamento
- Mantêm os mesmos nomes
- Cache-busting não aplicado

## 🔗 Referenciando no Código

### HTML (index.html)
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

### React/JSX
```tsx
<img src="/icone.jpg" alt="Logo" />
```

### CSS
```css
background-image: url('/hero-background.jpg');
```

## ✅ Checklist

Antes de fazer deploy, verifique:

- [ ] `icone.jpg` está presente em `/public/`
- [ ] Arquivo é acessível via `http://localhost:5173/icone.jpg`
- [ ] Logo aparece corretamente no site
- [ ] Build de produção testado (`npm run build`)
- [ ] Arquivo está no `.gitignore` como exceção (permitido)

## 🆘 Troubleshooting

### Logo não aparece

1. **Verifique se o arquivo existe**
   ```bash
   ls -la public/icone.jpg
   ```

2. **Verifique as permissões**
   ```bash
   chmod 644 public/icone.jpg
   ```

3. **Reinicie o servidor**
   ```bash
   # Pare o servidor (Ctrl+C)
   npm run dev
   ```

4. **Limpe o cache do navegador**
   - Chrome: Ctrl + Shift + R
   - Firefox: Ctrl + Shift + R
   - Safari: Cmd + Option + R

### Erro 404

- Certifique-se de que está usando `/icone.jpg` (com barra no início)
- Não use `./icone.jpg` ou `../icone.jpg`
- O caminho deve ser absoluto a partir de `/public/`

### Imagem distorcida

Verifique o componente `/src/app/components/Logo.tsx`:
```tsx
style={{ height: '60px', width: 'auto' }}
```

Ajuste conforme necessário.

## 📚 Documentação Relacionada

- [LOGO_SETUP.md](../LOGO_SETUP.md) - Instruções detalhadas sobre o logo
- [README.md](../README.md) - Visão geral do projeto
- [SETUP.md](../SETUP.md) - Configuração do ambiente

---

**Importante**: O arquivo `icone.jpg` é essencial para o funcionamento correto do site. Não esqueça de adicioná-lo antes do primeiro deploy!
