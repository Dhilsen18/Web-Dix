<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useToast } from 'primevue/usetoast';

import { ShareService } from '../../../shared/infrastructure/share.service.js';

/**
 * @summary Card component to display one `Classification` with actions.
 * @author Dilsen (update with your full name)
 */

const props = defineProps({
  /** @type {import('vue').PropType<import('../../domain/model/classification.entity.js').Classification>} */
  classification: { type: Object, required: true },
});

const { t, locale } = useI18n();
const toast = useToast();

const shareService = new ShareService();

const details = computed(() => {
  const c = props.classification;
  return [
    { key: 'labels.commonName', value: c.commonName },
    { key: 'labels.parent', value: c.parent },
    { key: 'labels.speciesCount', value: String(c.speciesCount) },
    { key: 'labels.description', value: c.description },
    { key: 'labels.metaDescription', value: c.metaDescription },
    {
      key: 'labels.createdAt',
      value: c.createdAt ? c.createdAt.toLocaleString(locale.value) : '',
    },
    {
      key: 'labels.updatedAt',
      value: c.updatedAt ? c.updatedAt.toLocaleString(locale.value) : '',
    },
  ].filter((x) => Boolean(x.value));
});

const openMoreInformation = () => {
  window.open(props.classification.getClassificationPageUrl(), '_blank', 'noopener,noreferrer');
};

const shareInformation = async () => {
  const url = props.classification.getClassificationPageUrl();
  const result = await shareService.shareOrCopy({
    title: props.classification.name,
    text: props.classification.commonName,
    url,
  });

  if (result.ok) {
    toast.add({
      severity: 'success',
      summary: props.classification.name,
      detail:
        result.method === 'share'
          ? t('classification.shareSuccess')
          : t('classification.copySuccess'),
      life: 2200,
    });
  } else {
    toast.add({
      severity: 'error',
      summary: props.classification.name,
      detail: t('classification.copyError'),
      life: 2500,
    });
  }
};
</script>

<template>
  <pv-card class="h-full" :aria-label="classification.name">
    <template #title>
      <span class="text-xl">{{ classification.name }}</span>
    </template>
    <template #subtitle>
      <span class="text-color-secondary">{{ classification.commonName }}</span>
    </template>

    <template #content>
      <dl class="m-0">
        <template v-for="row in details" :key="row.key">
          <dt class="font-medium text-sm mt-2">{{ t(`classification.${row.key}`) }}</dt>
          <dd class="m-0 text-sm line-height-3">{{ row.value }}</dd>
        </template>
      </dl>
    </template>

    <template #footer>
      <pv-divider class="my-2" />
      <div class="flex align-items-center justify-content-between gap-2">
        <pv-button
          :label="t('classification.moreInformation')"
          icon="pi pi-external-link"
          text
          size="small"
          @click="openMoreInformation"
          :aria-label="t('classification.moreInformation')"
        />
        <pv-button
          :label="t('classification.shareInformation')"
          icon="pi pi-share-alt"
          text
          size="small"
          @click="shareInformation"
          :aria-label="t('classification.shareInformation')"
        />
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
dl dt:first-child {
  margin-top: 0;
}
</style>

