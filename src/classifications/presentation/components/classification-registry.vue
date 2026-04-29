<script setup>
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

import { classificationsStore } from '../../application/classifications.store.js';
import ClassificationCard from './classification-card.vue';

/**
 * @summary Main view that renders the Classification Registry cards grid.
 * @author Dilsen (update with your full name)
 */

const { t } = useI18n();

const items = computed(() => classificationsStore.items);
const loading = computed(() => classificationsStore.loading);
const hasError = computed(() => (classificationsStore.errors?.length ?? 0) > 0);

onMounted(() => {
  classificationsStore.load();
});
</script>

<template>
  <section :aria-label="t('registry.title')">
    <div class="flex align-items-center justify-content-between mb-3">
      <h1 class="text-2xl m-0">{{ t('registry.title') }}</h1>
      <pv-tag v-if="loading" severity="info" :value="t('registry.loading')" />
    </div>

    <div v-if="hasError" class="surface-50 border-1 border-200 border-round p-3" role="alert">
      {{ t('registry.error') }}
    </div>

    <div v-else class="grid" role="list" :aria-label="t('registry.title')">
      <div v-if="loading" class="col-12 md:col-6" role="listitem" aria-busy="true">
        <pv-card>
          <template #title>
            <pv-skeleton width="12rem" height="1.2rem" />
          </template>
          <template #subtitle>
            <pv-skeleton width="10rem" height="1rem" />
          </template>
          <template #content>
            <pv-skeleton width="100%" height="5rem" />
          </template>
        </pv-card>
      </div>
      <div v-if="loading" class="col-12 md:col-6" role="listitem" aria-busy="true">
        <pv-card>
          <template #title>
            <pv-skeleton width="12rem" height="1.2rem" />
          </template>
          <template #subtitle>
            <pv-skeleton width="10rem" height="1rem" />
          </template>
          <template #content>
            <pv-skeleton width="100%" height="5rem" />
          </template>
        </pv-card>
      </div>

      <div
        v-for="classification in items"
        :key="classification.slug || classification.name"
        class="col-12 md:col-6"
        role="listitem"
      >
        <classification-card :classification="classification" />
      </div>

      <div v-if="!loading && items.length === 0" class="col-12">
        <div class="surface-50 border-1 border-200 border-round p-3">
          {{ t('registry.empty') }}
        </div>
      </div>
    </div>
  </section>
</template>

