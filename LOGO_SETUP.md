# Configuração do Logo - Grupo W3

## 📋 Instruções para Adicionar o Logo

### Passo 1: Obter o Arquivo do Logo

O arquivo `Ícone.jpg` está disponível no repositório GitHub da empresa.

### Passo 2: Adicionar ao Projeto

1. Baixe o arquivo `Ícone.jpg` do repositório GitHub
2. Renomeie para `icone.jpg` (letras minúsculas)
3. Coloque o arquivo na pasta `/public/` do projeto

```
projeto/
├── public/
│   ├── icone.jpg     ← Adicione o arquivo aqui
│   └── favicon.svg
```

### Passo 3: Verificar a Implementação

O componente `Logo.tsx` já está configurado para usar a imagem:

```tsx
// /src/app/components/Logo.tsx
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

### Como Funciona

- **Desenvolvimento**: O logo estará acessível via `http://localhost:5173/icone.jpg`
- **Produção**: Após o build, o arquivo será copiado para a pasta `dist/` e acessível via `/icone.jpg`
- **Sem dependências Figma**: O projeto usa apenas caminhos públicos padrão do Vite

### Onde o Logo é Usado

O componente `<Logo />` é utilizado em:

1. **Navbar** (`/src/app/components/Navbar.tsx`)
   - Header principal do site
   - Versão mobile e desktop

2. **Footer** (`/src/app/components/Footer.tsx`)
   - Rodapé do site

3. **Outras páginas** que importam o componente

### Personalização

Para ajustar o tamanho do logo, modifique a propriedade `className` ao usar o componente:

```tsx
// Logo pequeno
<Logo className="h-8 w-auto" />

// Logo médio (padrão)
<Logo className="h-12 w-auto" />

// Logo grande
<Logo className="h-16 w-auto" />
```

### Formatos Suportados

O logo pode ser nos formatos:
- `.jpg` / `.jpeg`
- `.png`
- `.svg`
- `.webp`

**Nota**: Se mudar o formato, atualize o caminho em `/src/app/components/Logo.tsx`:

```tsx
src="/icone.jpg"  // Para JPG
src="/icone.png"  // Para PNG
src="/icone.svg"  // Para SVG
```

## ✅ Checklist de Verificação

- [ ] Arquivo `Ícone.jpg` baixado do repositório GitHub
- [ ] Arquivo renomeado para `icone.jpg` (minúsculas)
- [ ] Arquivo colocado em `/public/icone.jpg`
- [ ] Servidor de desenvolvimento reiniciado (`npm run dev`)
- [ ] Logo aparece corretamente no navbar
- [ ] Logo aparece corretamente no footer
- [ ] Build de produção testado (`npm run build`)

## 🔧 Troubleshooting

### Logo não aparece

1. Verifique se o arquivo está em `/public/icone.jpg`
2. Confirme que o nome está em minúsculas
3. Reinicie o servidor de desenvolvimento
4. Limpe o cache do navegador (Ctrl + Shift + R)

### Logo está distorcido

Ajuste as propriedades de estilo no componente:

```tsx
style={{ height: '60px', width: 'auto' }}  // Mantém proporção
style={{ maxHeight: '60px', maxWidth: '200px' }}  // Limita dimensões
```

### Logo não aparece no build de produção

1. Verifique se o arquivo está em `/public/`
2. Reconstrua o projeto: `npm run build`
3. Verifique se o arquivo foi copiado para `/dist/`

## 📝 Observações Importantes

- ✅ **SEM dependências do Figma Make**
- ✅ **SEM importações `figma:asset`**
- ✅ **100% compatível com React + Vite padrão**
- ✅ **Funciona em localhost e produção**
- ✅ **Fácil de atualizar ou substituir**
