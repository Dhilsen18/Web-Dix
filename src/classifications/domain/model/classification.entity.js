/**
 * @summary Domain entity representing a DinoFYI Classification.
 * @author Dilsen (update with your full name)
 */

/**
 * @typedef {Object} ClassificationProps
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [commonName]
 * @property {string} [description]
 * @property {string|null} [parent]
 * @property {number} [speciesCount]
 * @property {string} [metaDescription]
 * @property {string|Date} [createdAt]
 * @property {string|Date} [updatedAt]
 */

export class Classification {
  /**
   * @param {ClassificationProps} [props]
   */
  constructor({
    name = '',
    slug = '',
    commonName = '',
    description = '',
    parent = null,
    speciesCount = 0,
    metaDescription = '',
    createdAt = '',
    updatedAt = '',
  } = {}) {
    this.name = name;
    this.slug = slug;
    this.commonName = commonName;
    this.description = description;
    this.parent = parent;
    this.speciesCount = speciesCount;
    this.metaDescription = metaDescription;
    this.createdAt = createdAt ? new Date(createdAt) : null;
    this.updatedAt = updatedAt ? new Date(updatedAt) : null;
  }

  /**
   * @returns {string}
   */
  getClassificationPageUrl() {
    return `https://dinofyi.com/classification/${encodeURIComponent(this.name)}/`;
  }
}

