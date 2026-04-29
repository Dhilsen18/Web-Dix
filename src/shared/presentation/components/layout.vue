<script setup>
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useToast } from 'primevue/usetoast';

import LanguageSwitcher from './language-switcher.vue';
import FooterContent from './footer-content.vue';
import ClassificationRegistry from '../../../classifications/presentation/components/classification-registry.vue';
import { LogoDevApi } from '../../infrastructure/logo-dev-api.js';
import { appConfig } from '../../application/app-config.js';

/**
 * @summary Top-level layout (toolbar + main content + footer).
 * @author Dilsen (update with your full name)
 */

const { t } = useI18n();
const toast = useToast();

const logoDevApi = new LogoDevApi();
const logoSrc = computed(() => logoDevApi.getUrlToLogo(appConfig.brand.websiteUrl));
const logoAlt = computed(() => `${appConfig.brand.title} logo`);

const logoFailed = ref(false);
const onLogoError = () => {
  logoFailed.value = true;
  toast.add({
    severity: 'warn',
    summary: appConfig.brand.title,
    detail: t('toolbar.logoError'),
    life: 2500,
  });
};

onMounted(() => {
  document.title = appConfig.brand.title;
});
</script>

<template>
  <div class="min-h-screen flex flex-column">
    <pv-toast />

    <pv-toolbar :aria-label="t('toolbar.aria')" role="banner">
      <template #start>
        <div class="flex align-items-center gap-2">
          <a
            :href="appConfig.brand.websiteUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="no-underline flex align-items-center gap-2"
            :aria-label="appConfig.brand.title"
          >
            <img
              v-if="!logoFailed"
              :src="logoSrc"
              :alt="logoAlt"
              width="28"
              height="28"
              @error="onLogoError"
              style="border-radius: 6px"
            />
            <span class="text-xl font-semibold">{{ appConfig.brand.title }}</span>
          </a>
        </div>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2" :aria-label="t('toolbar.language')">
          <language-switcher />
        </div>
      </template>
    </pv-toolbar>

    <main class="flex-1 p-3 md:p-4" role="main" :aria-label="t('main.aria')">
      <classification-registry />
    </main>

    <footer-content />
  </div>
</template>

