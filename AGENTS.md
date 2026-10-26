# Faraday: site de vendas do Fisiquei

Site institucional e de vendas do Fisiquei (https://fisiquei.com.br), curso de Física para ENEM e vestibulares do Prof. Thales Quirino. A plataforma de alunos é outro projeto (https://app.fisiquei.com.br); aqui só ficam páginas públicas.

## Stack e restrições

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.
- `output: "export"` com `trailingSlash: true`: o build gera HTML estático em `out/`, servido por Apache em hospedagem compartilhada. Nada de API routes, server actions, middleware, `cookies()`/`headers()`, ISR ou `next/image` com otimização. Tudo que for dinâmico roda no cliente.
- Redirects e a página de 404 (`ErrorDocument`) ficam em `public/.htaccess` (sintaxe Apache), não no `next.config.ts`.
- SVGs passam pelo `@svgr/webpack`, configurado como regra do Turbopack em `next.config.ts`.
- Analytics em `src/app/layout.tsx`: o GTM só é carregado quando `NEXT_PUBLIC_GTM_ID` está definido (`.env.local`); o tracking do Mautic é sempre carregado.

## Comandos

- `npm run dev`: servidor local em http://localhost:3000
- `npm run lint`: eslint (configs `core-web-vitals` e `typescript` do Next, com `no-explicit-any` desligado). O aviso `@next/next/no-img-element` é esperado, o site usa `<img>` de propósito.
- `npx tsc --noEmit`: typecheck
- `npm run build`: build estático em `out/`. Rode sempre antes de entregar.
- Não há suíte de testes.
- Não rode `npm run deploy` nem `deploy.sh`: o deploy é feito manualmente pelo Caio. Para referência, o script roda via WSL, faz o build, envia `out/` por SSH e troca o `public_html` do servidor, mantendo um backup em `public_html_backup`.

## Estrutura

- `src/app/(main)/`: páginas com header, rodapé e botão flutuante de suporte (layout em `(main)/layout.tsx`). Página nova de conteúdo ou campanha vai aqui, em `src/app/(main)/<rota>/page.tsx`.
- `src/app/<rota>/`: páginas sem header e rodapé (ex.: `extensivo-inscricao-concluida`).
- `src/app/_components/`: header, footer, termos e privacidade.
- `src/components/home/`: seções da home. Antes de criar algo, veja se já existe aqui (`Spotlight`, `TopBanner`, `PlanCard`, etc.). A home (`src/app/(main)/page.tsx`) é só uma pilha dessas seções.
- `src/components/base/`: inputs e labels de formulário.
- `src/data/`: conteúdo em dados (FAQ, features), com valores em JSX.
- `src/@types/`: tipos compartilhados (ex.: `Plan` em `plans.types.ts`).
- Alias de import: `@/*` aponta para `src/*`.
- `src/assets/icons/`: SVGs importados como componentes React via svgr. Para um ícone novo, adicione o `.svg` e exporte em `index.ts`. Ícones genéricos vêm de `lucide-react`.
- `public/images/`: imagens estáticas.

## Estilo visual

- Tokens em `src/globals.css` (`@theme`): use as classes `bg-background`, `text-primary`, `bg-primary-lighter`, `text-muted`, `text-accent` etc. em vez de cores soltas.
- Amarelo `primary` (#ffc107) é a cor da marca. Fundo escuro `background` (#090e17), com seções claras em `primary-lighter`.
- Fontes: Inter (`font-sans`, corpo) e Poppins (`font-display`, títulos).
- Breakpoints extras: `sms` (540px) e `mdx` (940px), além dos padrões do Tailwind.
- Botões principais: `bg-primary text-primary-foreground font-bold rounded-lg`. Botão de WhatsApp usa o verde `#25D366`.
- Combine classes com `cn()` de `src/utils/styles.ts` (clsx + tailwind-merge).
- Primitivos de UI: Radix UI (accordion, dialog, popover, collapsible) e Embla para carrosséis.
- Animações com `motion/react`, com moderação. Componentes com estado ou animação precisam de `"use client"`.
- Prettier: sem ponto e vírgula, aspas duplas, trailing comma `es5`. Sem comentários no código, salvo algo realmente não óbvio.

## Conteúdo e textos

- Tudo em português do Brasil.
- Quando o texto fala em primeira pessoa, é a voz do Thales falando com o aluno: direto, próximo, sem formalidade. Ele assina como "Prof. Thales Quirino", nunca como "professor do Fisiquei".
- Não use travessão (—) nos textos do site. Prefira vírgula, ponto ou dois-pontos.
- Datas no formato `09/11`, horários como `19h45`.
- Valores monetários em centavos inteiros, com sufixo `Int` (`cashPriceInt: 990_00`), formatados por `formatMoneyInCents` em `src/utils/formatters.ts`.
- Links de checkout: `https://app.fisiquei.com.br/ofertas/<internalName>/checkout?coupon=<CUPOM>`. Os planos e cupons da home ficam hardcoded em `src/components/home/pricing-section.tsx`. O `PlanCard` monta essa URL e só adiciona `?coupon=` quando `couponData` está preenchido; o plano gratuito aponta para `https://app.fisiquei.com.br/cadastro`.
- Campanhas temporárias (Black Fisiquei, Promo SiSU) costumam usar o `TopBanner` no topo da home e `couponData` nos planos. Ao encerrar, comente o bloco em vez de apagar, como já é feito no código.

## Antes de entregar uma mudança visual

1. `npm run build` sem erros.
2. Sirva `out/` (ex.: `npx serve out` ou `python3 -m http.server -d out`) e confira a página no navegador, no desktop (~1280px) e no celular (~390px). Se tiver Playwright disponível, tire prints de página inteira nas duas larguras e revise antes de entregar.
3. Sem rolagem horizontal no celular e textos legíveis no fundo escuro.

## Git

- Mensagens de commit curtas, em português e em minúsculas, descrevendo a mudança (ex.: `atualiza cupom sisu`).
