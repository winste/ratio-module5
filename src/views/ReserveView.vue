<template>
  <main class="reserve">
    <AppMetaTags :meta-info="metaInfo" />
    <VReserveForm class="reserve__form" />
    <VReserveHotel :hotel-data="store.getReserve" class="reserve__preview" />
  </main>
</template>

<script>
import { useReserveStore } from '@/store/reserveStore'
import VReserveForm from '@/pages/ReservePage/VReserveForm/VReserveForm.vue'
import VReserveHotel from '@/pages/ReservePage/VReserveHotel/VReserveHotel.vue'
import AppMetaTags from '@/components/AppMetaTags.vue'
import metaTags from '@/helpers/metaTags'

export default {
  components: {
    VReserveForm,
    VReserveHotel,
    AppMetaTags,
  },
  data() {
    return {
      store: useReserveStore(),

      metaInfo: metaTags(
        'Reserve Hotel',
        'The best service for booking and reserve hotels from all over the world',
        'reserve hotels, fast reserve hotels, fast and comfortable reserve hotels, booking hotels'
      ),
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/flexbox-general';

.reserve {
  @include flexbox-general($gap: 66px);
  justify-content: center;
  padding: 83px 82px 75px 68px;
  margin: 0 auto;
  &__preview {
    flex: 1;
    max-width: max-content;
    min-width: 380px;
    height: min-content;
  }
}

@media (max-width: 820px) {
  .reserve {
    padding: 70px 60px;
  }
}

@media (max-width: 480px) {
  .reserve {
    padding: 70px 15px;
    &__preview {
      padding: 30px;
      min-width: auto;
    }
  }
}
</style>










