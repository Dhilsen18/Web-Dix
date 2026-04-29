<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { appConfig } from '../../application/app-config.js';

/**
 * @summary Application footer with copyright and author info.
 * @author Dilsen (update with your full name)
 */

const { t } = useI18n();
const developerLine = computed(
  () => `${appConfig.developer.code} - ${appConfig.developer.fullName}`,
);
</script>

<template>
  <footer class="surface-0 border-top-1 border-200 mt-4" aria-label="Footer">
    <div class="p-3 text-center text-sm">
      <div>{{ t('footer.copyright') }}</div>
      <div class="mt-2">
        <span class="font-medium">{{ t('footer.developedBy') }}</span>
        <span class="ml-2">{{ developerLine }}</span>
      </div>
    </div>
  </footer>
</template>

