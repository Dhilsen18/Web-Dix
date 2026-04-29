/**
 * @summary Cross-browser share and clipboard utilities.
 * @author Dilsen (update with your full name)
 */
export class ShareService {
  /**
   * Attempts to share a URL using the Web Share API; falls back to clipboard.
   *
   * @param {{title?: string, text?: string, url: string}} payload
   * @returns {Promise<{method: 'share'|'clipboard', ok: boolean}>}
   */
  async shareOrCopy(payload) {
    if (navigator.share) {
      try {
        await navigator.share(payload);
        return { method: 'share', ok: true };
      } catch {
        // User may cancel; fall back to clipboard for resilience.
      }
    }
    const ok = await this.copyToClipboard(payload.url);
    return { method: 'clipboard', ok };
  }

  /**
   * Copies a string to clipboard (secure context required in some browsers).
   *
   * @param {string} text
   * @returns {Promise<boolean>}
   */
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }
}

