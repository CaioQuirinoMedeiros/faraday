# Faraday: site de vendas do Fisiquei

Site institucional e de vendas do Fisiquei (https://fisiquei.com.br), curso de Física para ENEM e vestibulares do Prof. Thales Quirino. A plataforma de alunos é outro projeto (https://app.fisiquei.com.br); aqui só ficam páginas públicas.

## Stack e restrições

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.
- `output: "export"` com `trailingSlash: true`: o build gera HTML estático em `out/`, servido por Apache em hospedagem compartilhada. Nada de API routes, server actions, middleware, `cookies()`/`headers()`, ISR ou `next/image` com otimização. Tudo que for dinâmico roda no cliente.
- Formulários e dados vão para a API da plataforma (`https://app.fisiquei.com.br/api/...`) via `fetch` no cliente.
- Redirects ficam em `public/.htaccess` (sintaxe Apache), não no `next.config.ts`.

## Comandos

- `npm run dev`: servidor local em http://localhost:3000
- `npm run lint`: eslint (o aviso `@next/next/no-img-element` é esperado, o site usa `<img>` de propósito)
- `npx tsc --noEmit`: typecheck
- `npm run build`: build estático em `out/`. Rode sempre antes de entregar.
- Não rode `npm run deploy` nem `deploy.sh`: o deploy é feito manualmente pelo Caio.

## Estrutura

- `src/app/(main)/`: páginas com header, rodapé e botão flutuante de suporte (layout em `(main)/layout.tsx`). Página nova de conteúdo ou campanha vai aqui, em `src/app/(main)/<rota>/page.tsx`.
- `src/app/<rota>/`: páginas sem header e rodapé (ex.: `extensivo-inscricao-concluida`).
- `src/app/_components/`: header, footer, termos e privacidade.
- `src/components/home/`: seções da home. Antes de criar algo, veja se já existe aqui (`Spotlight`, `TopBanner`, `PlanCard`, etc.).
- `src/components/base/`: inputs e labels de formulário.
- `src/data/`: conteúdo em dados (FAQ, features).
- `src/assets/icons/`: SVGs importados como componentes React via svgr. Para um ícone novo, adicione o `.svg` e exporte em `index.ts`. Ícones genéricos vêm de `lucide-react`.
- `public/images/`: imagens estáticas.

## Estilo visual

- Tokens em `src/globals.css` (`@theme`): use as classes `bg-background`, `text-primary`, `bg-primary-lighter`, `text-muted`, `text-accent` etc. em vez de cores soltas.
- Amarelo `primary` (#ffc107) é a cor da marca. Fundo escuro `background` (#090e17), com seções claras em `primary-lighter`.
- Fontes: Inter (`font-sans`, corpo) e Poppins (`font-display`, títulos).
- Breakpoints extras: `sms` (540px) e `mdx` (940px), além dos padrões do Tailwind.
- Botões principais: `bg-primary text-primary-foreground font-bold rounded-lg`. Botão de WhatsApp usa o verde `#25D366`.
- Animações com `motion/react`, com moderação. Componentes com estado ou animação precisam de `"use client"`.
- Prettier: sem ponto e vírgula, trailing comma `es5`. Sem comentários no código, salvo algo realmente não óbvio.

## Conteúdo e textos

- Tudo em português do Brasil.
- Quando o texto fala em primeira pessoa, é a voz do Thales falando com o aluno: direto, próximo, sem formalidade. Ele assina como "Prof. Thales Quirino", nunca como "professor do Fisiquei".
- Não use travessão (—) nos textos do site. Prefira vírgula, ponto ou dois-pontos.
- Datas no formato `09/11`, horários como `19h45`.
- Valores monetários em centavos inteiros, com sufixo `Int` (`cashPriceInt: 990_00`), formatados por `formatMoneyInCents` em `src/utils/formatters.ts`.
- Links de checkout: `https://app.fisiquei.com.br/api/ofertas/<internalName>/checkout?coupon=<CUPOM>`. Os planos e cupons da home ficam em `src/components/home/pricing-section.tsx`.
- Campanhas temporárias (Black Fisiquei, Promo SiSU) costumam usar o `TopBanner` no topo da home e `couponData` nos planos. Ao encerrar, comente o bloco em vez de apagar, como já é feito no código.

## Antes de entregar uma mudança visual

1. `npm run build` sem erros.
2. Sirva `out/` (ex.: `npx serve out` ou `python3 -m http.server -d out`) e confira a página no navegador, no desktop (~1280px) e no celular (~390px). Se tiver Playwright disponível, tire prints de página inteira nas duas larguras e revise antes de entregar.
3. Sem rolagem horizontal no celular e textos legíveis no fundo escuro.

## Git

- Mensagens de commit curtas, em português e em minúsculas, descrevendo a mudança (ex.: `atualiza cupom sisu`).
