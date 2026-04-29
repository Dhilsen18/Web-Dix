/**
 * @summary Centralized application configuration (UI strings, author, IDs).
 * @author Dilsen (update with your full name)
 */
export const appConfig = Object.freeze({
  /**
   * Used only for footer authoring line.
   * Override through `.env` using `VITE_DEVELOPER_CODE`, `VITE_DEVELOPER_NAME`.
   */
  developer: Object.freeze({
    code: import.meta.env.VITE_DEVELOPER_CODE ?? 'u202319440',
    fullName: import.meta.env.VITE_DEVELOPER_NAME ?? 'Dhilsen Mallqui Vilca',
  }),
  brand: Object.freeze({
    title: 'DinoFYI',
    websiteUrl: 'https://dinofyi.com/',
  }),
});

