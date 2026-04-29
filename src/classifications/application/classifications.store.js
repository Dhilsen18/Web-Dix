import { reactive } from 'vue';
import { ClassificationApi } from '../infrastructure/classification-api.js';
import { ClassificationAssembler } from '../infrastructure/classification.assembler.js';

/**
 * @summary Application-layer store for the Classification Registry use case.
 * @author Dilsen (update with your full name)
 */

/**
 * @typedef {Object} ClassificationsStore
 * @property {import('../domain/model/classification.entity.js').Classification[]} items
 * @property {boolean} loading
 * @property {Array<unknown>} errors
 * @property {() => Promise<void>} load
 */

const classificationApi = new ClassificationApi();

export const classificationsStore = reactive({
  items: [],
  loading: false,
  errors: [],
  /**
   * Loads classifications from DinoFYI and maps them to domain entities.
   *
   * @returns {Promise<void>}
   */
  async load() {
    this.loading = true;
    this.errors = [];
    try {
      const response = await classificationApi.getClassifications();
      this.items = ClassificationAssembler.toEntitiesFromResponse(response);
    } catch (error) {
      this.errors.push(error);
      this.items = [];
    } finally {
      this.loading = false;
    }
  },
});

