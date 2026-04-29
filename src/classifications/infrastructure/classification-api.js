import { dinofyiHttp } from './dinofyi-api.js';

/**
 * @summary Infrastructure adapter for DinoFYI classifications HTTP endpoint.
 * @author Dilsen (update with your full name)
 */
export class ClassificationApi {
  /**
   * @returns {Promise<import('axios').AxiosResponse<import('./classification.resource.js').ClassificationListResponse>>}
   */
  getClassifications() {
    const endpointPath = import.meta.env.VITE_CLASSIFICATIONS_ENDPOINT_PATH ?? '/classifications/';
    return dinofyiHttp.get(endpointPath);
  }
}

