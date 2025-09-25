/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_APP_NAME?: string;
    // ajoute d’autres variables VITE_ ici si nécessaire
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  