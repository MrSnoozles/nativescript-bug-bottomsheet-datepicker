<template>
  <Page>
    <ActionBar>
      <Label text="Home"/>
    </ActionBar>

    <GridLayout>
      <Button @tap="openBottomSheet" text="Open BottomSheet"></Button>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import BottomSheetInner from './BottomSheetInner.vue';

  export default Vue.extend({
    methods: {
      openBottomSheet() {
        this.$showBottomSheet(BottomSheetInner, {
          
        });
      }
    }
  });
</script>

<style scoped lang="scss">
  @import '@nativescript/theme/scss/variables/blue';

  // Custom styles
  .fas {
    @include colorize($color: accent);
  }

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style>
