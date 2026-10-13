# Casto Associados — versão refatorada

Landing page baseada no briefing Baseline, adaptada à Casto. Lenis é carregado opcionalmente por CDN, com fallback para rolagem nativa.

A fonte editável é `src/landing.html`. `npm run assemble` (executado automaticamente por `dev` e `build`) gera duas versões:

- `index.html` — referencia imagens, vídeo e fontes de `public/` por caminho. É a entrada do Vite e a versão publicada.
- `standalone.html` — tudo embutido em base64 (~20 MB), abre direto no navegador sem servidor. Não é versionado.

## Executar

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 4173
```

## Produção

```sh
npm run build
```

A saída está em `dist/client`. O projeto também preserva o empacotamento Sites do template Product Design.

## Funcionalidades

Navegação responsiva, serviços expansíveis, guias em diálogos, perguntas frequentes e formulário de demonstração com revisão e exportação de resumo. Nenhum dado é enviado ou persistido em servidor.

## Para publicar como site do escritório

Adicionar logo oficial e dados comerciais verificados, conectar um destino real de contato e revisar o texto de privacidade conforme a operação final. A fotografia é ilustrativa, gerada por IA, e não representa um escritório verificado.

Evidências da revisão visual e funcional: `design-qa.md`.
