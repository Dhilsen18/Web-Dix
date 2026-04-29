const logoApiUrl = import.meta.env.VITE_LOGO_API_URL ?? 'https://img.logo.dev';
const apiKey = import.meta.env.VITE_LOGO_PUBLISHABLE_API_KEY ?? '';

/**
 * @summary Infrastructure adapter for Logo.dev Logo API.
 * @author Dilsen (update with your full name)
 */
export class LogoDevApi {
  /**
   * Generates a URL to retrieve the logo for a given domain.
   *
   * @param {string} domain - The domain URL for which to get the logo.
   * @returns {string} The full URL to the logo image.
   */
  getUrlToLogo(domain) {
    const host = new URL(domain).host;
    const tokenQuery = apiKey ? `?token=${apiKey}` : '';
    return `${logoApiUrl}/${host}${tokenQuery}`;
  }
}

