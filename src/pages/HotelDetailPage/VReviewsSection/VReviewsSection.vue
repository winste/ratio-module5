<template>
  <section class="reviews">
    <h4 class="reviews__title">
      <span class="reviews__title-text">Reviews</span>
      <AppIcon :name="reviewsIcon" class="reviews__title-icon" />
      <span class="reviews__title-rating" v-text="averageRating"></span>
    </h4>

    <VRating :ratings="ratingList" class="reviews__rating" />

    <div class="reviews__list">
      <VReview
        v-for="(review, id) in reviewsListFormatted"
        :key="id"
        :avatar="review.author.avatar"
        :name="review.author.name"
        :date="review.date"
        :text="review.content"
        class="reviews__item"
      />
    </div>

    <AppButtonShowMore :count="reviewsListCount" name="Reviews" @showAll="changeDisplayedValue" />
  </section>
</template>

<script>
import AppIcon from '@/components/AppIcon.vue'
import Star from '@/assets/images/icons/Star.svg'
import AppButtonShowMore from '@/components/AppButtonShowMore.vue'
import VRating from './VRating.vue'
import VReview from './VReview.vue'

export default {
  components: {
    AppIcon,
    VRating,
    VReview,
    AppButtonShowMore,
  },
  props: {
    reviewsList: { type: Array, required: true },
    reviewsDisplayedCount: { type: Number, default: 4 },
  },
  data() {
    return {
      ratingList: [
        { name: 'Amenities', rating: 5 },
        { name: 'Hygiene', rating: 5 },
        { name: 'Communication', rating: 5 },
        { name: 'Location of Property', rating: 5 },
        { name: 'Value for Money', rating: 5 },
      ],
      reviewsIcon: Star,
      showAllReviews: null,
    }
  },

  computed: {
    averageRating() {
      return (
        this.ratingList.reduce((initial, obj) => initial + obj.rating, 0) / this.ratingList.length
      ).toFixed(1)
    },
    reviewsListCount() {
      return this.reviewsList.length
    },
    reviewsListFormatted() {
      return this.showAllReviews
        ? this.reviewsList
        : this.reviewsList.slice(0, this.reviewsDisplayedCount)
    },
  },
  methods: {
    changeDisplayedValue(data) {
      this.showAllReviews = data
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/flexbox-general';
.reviews {
  &__title {
    @include flexbox-general($gap: 10px);
    align-items: center;
    margin-bottom: 27px;
    &-text {
      letter-spacing: -0.1px;
      margin-right: 7px;
    }
    &-icon {
      margin-bottom: 1px;
    }
    &-rating {
      margin-left: 5px;
    }
  }
  &__list {
    @include flexbox-general($gap: 31px 0px);
    justify-content: space-between;
  }
  &__rating {
    @include flexbox-general($gap: 16.5px 47.5px);
    margin-bottom: 50px;
    margin-left: 2px;
  }
  &__list {
    margin-bottom: 40px;
  }
  &__item {
    max-width: 382px;
    padding-left: 2px;
  }
}
</style>










