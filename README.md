## DinoFYI — Classification Registry (PC1)

Frontend web application built with **Vite + Vue 3.5 (Composition API)**. It consumes the DinoFYI public API and displays the **Classification Registry** as a responsive 2-column cards grid, following a **domain-driven, layered and component-based architecture**.

### Features

- **Material UI** with PrimeVue components (prefixed as `pv-`) and PrimeFlex grid system
- **Internationalization (EN/ES)** using Vue-i18n (English default)
- **Classification cards** with:
  - Name as title and common name as subtitle
  - Human-friendly labels for registry fields
  - “More information” opens DinoFYI classification page in a new tab
  - “Share Information” uses Web Share API or falls back to clipboard copy
- **Toolbar** with Logo.dev logo + “DinoFYI” title and language switcher
- **Footer** with copyright and developer info

### Tech stack / dependencies

- **Vue 3.5** + Composition API
- **Vite**
- **PrimeVue** + **PrimeIcons** + **PrimeFlex** (Material theme preset)
- **axios** (HTTP client)
- **vue-i18n** (i18n)

### Environment variables

Create a `.env.development` (and optionally `.env.production`) in the project root:

```bash
VITE_DINOFYI_API_URL=https://dinofyi.com/api/v1
VITE_CLASSIFICATIONS_ENDPOINT_PATH=/classifications/

VITE_LOGO_API_URL=https://img.logo.dev
VITE_LOGO_PUBLISHABLE_API_KEY=your_logo_dev_token_here

VITE_DEVELOPER_CODE=u202319440
VITE_DEVELOPER_NAME=Dhilsen Mallqui Vilca
```

### Project setup

```bash
npm install
npm run dev
```

### Author

- **Code**: `VITE_DEVELOPER_CODE`
- **Name**: `VITE_DEVELOPER_NAME`
