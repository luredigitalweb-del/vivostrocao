# Vivos Trocão — Landing Page de Conversão

Landing page de alta conversão para a **Vivos Trocão** (oficina mecânica / centro
automotivo em Cabo de Santo Agostinho/PE). Objetivo único: levar o visitante a
iniciar uma conversa no **WhatsApp**. Destino de campanhas de tráfego pago (Meta/Google).

## Stack

- React + TypeScript + Vite
- Tailwind CSS (tokens de marca centralizados)
- Framer Motion (scroll reveal sutil)
- lucide-react (ícones)

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (gera /dist)
npm run preview  # pré-visualiza o build
```

## Deploy

Projeto pronto para **Vercel** (importar repo → framework Vite, build `npm run build`,
output `dist`) ou **Hostinger** (subir o conteúdo da pasta `dist/`).

## Onde ajustar as coisas

| O quê | Arquivo |
| --- | --- |
| Cores / fontes da marca | [tailwind.config.js](tailwind.config.js) |
| WhatsApp, endereço, horário, serviços, copy de dados | [src/data/business.ts](src/data/business.ts) |
| Logo (trocar pelo oficial) | [src/components/ui/Logo.tsx](src/components/ui/Logo.tsx) |
| Foto do hero | adicionar `public/hero.jpg` e descomentar o bloco em [src/components/sections/Hero.tsx](src/components/sections/Hero.tsx) |
| SEO / Open Graph | [index.html](index.html) |

### Identidade visual

A paleta atual usa o **fallback automotivo** (base escura + vermelho de marca),
pois o Instagram **@vivostrocao** não pôde ser acessado na geração. Após conferir
a marca no Instagram, ajuste os HEX em `tailwind.config.js` (objeto `colors.brand`)
e troque o logo — todo o site se atualiza automaticamente.

### Imagens recomendadas (opcionais)

- `public/hero.jpg` — foto da oficina equipada / mecânico trabalhando (≥ 1600px largura)
- `public/og-image.jpg` — imagem de compartilhamento 1200×630 para redes sociais

## CTA / WhatsApp

Número único de conversão: **(81) 99662-8238**
(`https://wa.me/5581996628238`). Todos os botões enviam mensagem pré-preenchida.
