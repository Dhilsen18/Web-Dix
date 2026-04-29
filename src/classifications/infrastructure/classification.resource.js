/**
 * @summary Request/Response resource shapes for DinoFYI classifications endpoint.
 * @author Dilsen (update with your full name)
 */

/**
 * @typedef {Object} ClassificationApiResource
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [common_name]
 * @property {string} [description]
 * @property {string|null} [parent]
 * @property {number} [species_count]
 * @property {string} [meta_description]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} ClassificationListResponse
 * @property {number} [count]
 * @property {string|null} [next]
 * @property {string|null} [previous]
 * @property {ClassificationApiResource[]} [results]
 */

export {};

