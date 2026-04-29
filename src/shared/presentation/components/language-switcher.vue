<script setup>
/**
 * @summary PrimeVue select button for switching the UI language.
 * @author Dilsen (update with your full name)
 */
</script>

<template>
  <pv-select-button
    v-model="$i18n.locale"
    :options="$i18n.availableLocales"
    aria-label="Language"
  >
    <template #option="slotProps">
      <span>{{ String(slotProps.option).toUpperCase() }}</span>
    </template>
  </pv-select-button>
</template>

