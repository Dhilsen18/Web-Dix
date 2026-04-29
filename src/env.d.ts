/// <reference types="vite/client" />

/**
 * @summary Type declarations for Vue SFCs and JS modules.
 * @author Dilsen (update with your full name)
 */

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>;
  export default component;
}

declare module '*.js';

