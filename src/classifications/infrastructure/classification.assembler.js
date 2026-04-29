import { Classification } from '../domain/model/classification.entity.js';

/**
 * @summary Maps DinoFYI API resources into `Classification` domain entities.
 * @author Dilsen (update with your full name)
 */
export class ClassificationAssembler {
  /**
   * @param {import('axios').AxiosResponse<import('./classification.resource.js').ClassificationListResponse>} response
   * @returns {Classification[]}
   */
  static toEntitiesFromResponse(response) {
    const list = response?.data?.results ?? [];
    return list.map((resource) => this.toEntityFromResource(resource));
  }

  /**
   * @param {import('./classification.resource.js').ClassificationApiResource} resource
   * @returns {Classification}
   */
  static toEntityFromResource(resource) {
    return new Classification({
      name: resource?.name ?? '',
      slug: resource?.slug ?? '',
      commonName: resource?.common_name ?? '',
      description: resource?.description ?? '',
      parent: resource?.parent ?? null,
      speciesCount: Number(resource?.species_count ?? 0),
      metaDescription: resource?.meta_description ?? '',
      createdAt: resource?.created_at ?? '',
      updatedAt: resource?.updated_at ?? '',
    });
  }
}

