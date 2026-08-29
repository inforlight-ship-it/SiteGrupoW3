# Grupo W3 — Analytics, Search Console e Consentimento

## Estado do código

O site possui uma camada de rastreamento que fica inativa quando nenhum ID é configurado. Ela não envia nome, email, telefone ou conteúdo digitado no formulário.

Eventos instrumentados:

- `page_view`
- `whatsapp_click`
- `phone_click`
- `email_click`
- `diagnostic_cta_click`
- `case_open`
- `contact_form_submit`

## Google Analytics 4

Preferência: usar Google Tag Manager (GTM), pois o site já utiliza a AdOpt como CMP e o GTM facilita a configuração do Google Consent Mode.

Na Hostinger, configure somente uma opção:

- `VITE_GTM_ID=GTM-XXXXXXX` — recomendado; ou
- `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX` — ligação direta ao GA4.

Não configure os dois ao mesmo tempo para evitar dupla medição.

Depois de alterar a variável de ambiente, gere um novo build/deploy.

### Consentimento

O código define, por padrão, `analytics_storage`, `ad_storage`, `ad_user_data` e `ad_personalization` como `denied`. No painel da AdOpt, habilite e valide o Google Consent Mode v2 para que as escolhas do visitante atualizem esses sinais.

No GTM, a tag do GA4 deve respeitar os sinais de consentimento. Faça o teste em janela anônima: antes do consentimento não deve haver cookies analíticos; após o aceite, confirme o disparo da tag e os eventos no DebugView/Tempo real do GA4.

## Google Search Console

Recomendação: criar uma propriedade do tipo **Domínio** para `grupow3.com` e verificar via registro DNS. Essa verificação não depende do código do site e cobre HTTP/HTTPS e todos os subdomínios.

Após a verificação, envie o sitemap:

`https://grupow3.com/sitemap.xml`

Depois valide:

1. Página inicial indexável.
2. Cases indexáveis.
3. Páginas de serviços indexáveis.
4. Páginas orientadas a problemas indexáveis.
5. Nenhum erro de cobertura causado por rotas SPA.

## Privacidade

Nunca adicionar PII aos eventos. Não enviar nome, email, telefone, mensagem, IP manualmente, CPF, CNPJ ou qualquer outro identificador pessoal ao GA4/GTM.
