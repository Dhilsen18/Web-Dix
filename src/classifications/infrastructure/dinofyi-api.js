import axios from 'axios';

/**
 * @summary Axios HTTP client preconfigured for DinoFYI API.
 * @author Dilsen (update with your full name)
 */

const baseURL = import.meta.env.VITE_DINOFYI_API_URL ?? 'https://dinofyi.com/api/v1';

export const dinofyiHttp = axios.create({
  baseURL,
  timeout: 15000,
});

