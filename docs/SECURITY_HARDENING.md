# Grupo W3 — Hardening do site

## Objetivo

Este projeto é um site estático React/Vite publicado em HTTPS. A camada de segurança evita exposição desnecessária sem interferir no funcionamento do site, da AdOpt, do Google Tag Manager/GA4 ou dos links de contato.

## Headers configurados no Apache

O arquivo `public/.htaccess` aplica, quando `mod_headers` está disponível:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` bloqueando câmera, microfone, geolocalização, pagamentos, USB, acelerômetro e giroscópio
- `Strict-Transport-Security: max-age=31536000`
- remoção de `X-Powered-By`
- Content Security Policy (CSP)

A CSP permite somente as origens necessárias ao site e às integrações atuais. O uso de `'unsafe-inline'` foi mantido temporariamente para compatibilidade com o código inline existente e com a CMP AdOpt. Uma futura evolução pode migrar scripts inline para nonce/hash e tornar a política mais restritiva.

## Dependências

O CI executa `npm audit --audit-level=high`. Um pull request não deve ser considerado pronto se houver vulnerabilidade alta ou crítica conhecida na árvore instalada.

Não usar `npm audit fix --force` automaticamente. Correções de dependências devem ser avaliadas e validadas com TypeScript, build, orçamento de performance e navegação antes de publicação.

## Vite

O servidor de desenvolvimento Vite não é parte da infraestrutura de produção e não deve ser exposto publicamente. A Hostinger deve servir somente o conteúdo gerado em `dist/`.

## Validação após deploy

Após publicar, confirmar no domínio:

1. HTTPS válido.
2. Rotas diretas continuam funcionando.
3. AdOpt continua abrindo e registrando preferências.
4. WhatsApp, telefone e e-mail continuam abrindo normalmente.
5. Headers de segurança são retornados pelo servidor.
6. Console do navegador não apresenta violações de CSP inesperadas.

Se a hospedagem ignorar diretivas `Header` do `.htaccess`, os mesmos headers devem ser aplicados pela camada de servidor/CDN da Hostinger.
