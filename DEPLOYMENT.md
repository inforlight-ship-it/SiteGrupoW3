# Guia de Implantação - Grupo W3 Website

Este guia fornece instruções para implantar o website do Grupo W3 em diferentes plataformas.

## 📦 Build de Produção

Antes de implantar, gere os arquivos de produção:

```bash
npm install
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

## 🌐 Opções de Hospedagem

### 1. Vercel (Recomendado)

**Vantagens**: Deploy automático, CDN global, SSL grátis, domínio customizado

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

Ou conecte seu repositório Git no dashboard da Vercel para deploys automáticos.

### 2. Netlify

**Vantagens**: Interface simples, formulários integrados, SSL grátis

1. Instale o Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
netlify deploy

# Para produção
netlify deploy --prod
```

Ou arraste a pasta `dist/` no dashboard do Netlify.

**Configurações do Netlify** (_redirects):
```
/*    /index.html   200
```

### 3. GitHub Pages

1. Instale o gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Adicione ao package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://seu-usuario.github.io/seu-repositorio"
}
```

3. Deploy:
```bash
npm run deploy
```

### 4. Firebase Hosting

1. Instale Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Faça login:
```bash
firebase login
```

3. Inicialize:
```bash
firebase init hosting
```

4. Configure firebase.json:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

5. Deploy:
```bash
npm run build
firebase deploy
```

### 5. AWS S3 + CloudFront

1. Faça build:
```bash
npm run build
```

2. Configure um bucket S3 para hospedagem de sites estáticos

3. Faça upload da pasta `dist/`

4. Configure CloudFront para CDN (opcional mas recomendado)

5. Configure Route 53 para seu domínio customizado

### 6. Servidor VPS/Dedicado (Apache/Nginx)

#### Nginx

1. Faça build e copie arquivos:
```bash
npm run build
scp -r dist/* usuario@seu-servidor:/var/www/grupow3.com
```

2. Configure Nginx (`/etc/nginx/sites-available/grupow3.com`):
```nginx
server {
    listen 80;
    server_name grupow3.com www.grupow3.com;
    
    root /var/www/grupow3.com;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache estático
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

3. Ative o site:
```bash
sudo ln -s /etc/nginx/sites-available/grupow3.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

4. Configure SSL com Let's Encrypt:
```bash
sudo certbot --nginx -d grupow3.com -d www.grupow3.com
```

#### Apache

1. Configure VirtualHost (`/etc/apache2/sites-available/grupow3.com.conf`):
```apache
<VirtualHost *:80>
    ServerName grupow3.com
    ServerAlias www.grupow3.com
    DocumentRoot /var/www/grupow3.com
    
    <Directory /var/www/grupow3.com>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # React Router
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
    
    # Cache
    <FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico|svg)$">
        Header set Cache-Control "max-age=31536000, public"
    </FilesMatch>
</VirtualHost>
```

2. Ative módulos e site:
```bash
sudo a2enmod rewrite
sudo a2enmod headers
sudo a2ensite grupow3.com.conf
sudo systemctl reload apache2
```

## 🔒 SSL/HTTPS

Todas as plataformas listadas oferecem SSL grátis via Let's Encrypt ou certificados próprios.

## 🚀 Otimizações Pós-Deploy

1. **Configure CDN**: Cloudflare, CloudFront, ou o CDN da sua hospedagem
2. **Comprima imagens**: Use ferramentas como ImageOptim ou TinyPNG
3. **Ative compressão gzip/brotli** no servidor
4. **Configure cache headers** para assets estáticos
5. **Monitore performance**: Google PageSpeed Insights, Lighthouse

## 📊 Monitoramento

Configure ferramentas de monitoramento:
- **Google Analytics**: Para métricas de visitantes
- **Google Search Console**: Para SEO
- **Uptime monitoring**: UptimeRobot, Pingdom
- **Error tracking**: Sentry (opcional)

## 🔄 CI/CD (Integração Contínua)

Configure deploys automáticos no seu `git push`:

### GitHub Actions

Crie `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## 🔐 Variáveis de Ambiente

Se precisar de variáveis de ambiente em produção, adicione um arquivo `.env.production`:

```env
VITE_API_URL=https://api.grupow3.com
VITE_WHATSAPP_NUMBER=5515988189999
```

E acesse no código com `import.meta.env.VITE_API_URL`

## 📝 Checklist de Deploy

- [ ] Testar build localmente (`npm run build` e `npm run preview`)
- [ ] Verificar todas as rotas funcionam
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Verificar formulário de contato
- [ ] Testar botões WhatsApp
- [ ] Verificar meta tags e SEO
- [ ] Testar velocidade de carregamento
- [ ] Configurar domínio customizado
- [ ] Configurar SSL/HTTPS
- [ ] Testar em diferentes navegadores
- [ ] Configurar monitoramento
- [ ] Fazer backup dos arquivos

## 🆘 Suporte

Para dúvidas sobre deploy, consulte a documentação da plataforma escolhida ou entre em contato com o desenvolvedor.
