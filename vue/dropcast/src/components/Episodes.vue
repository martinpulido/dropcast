<template>
  <section class="episodes">
    <article class="episode">
      <h2 class="episode__number">01</h2>
      <div class="episode__media">
        <a href="detail.html" class="episode__image__container">
          <img src="../assets/images/photos/1_original.png" alt="Linda Watkins" class="episode__image" />
        </a>
      </div>
      <div class="episode__detail">
        <a href="detail.html" class="episode__title"><h4>Linda Watkins</h4></a>
        <p class="episode__description">Linda talks about how machine learning models can be used as effective substitutes for classic data structures.</p>
      </div>
    </article>
    <article class="episode">
      <h2 class="episode__number">02</h2>
      <div class="episode__media">
        <a href="detail.html" class="episode__image__container">
          <img src="../assets/images/photos/2_original.png" alt="Dylan Perry" class="episode__image" />
        </a>
      </div>
      <div class="episode__detail">
        <a href="detail.html" class="episode__title"><h4>Dylan Perry</h4></a>
        <p class="episode__description">Dylan talks to us about how he started programming, challenges he has faced and what keeps him hooked till this day.</p>
      </div>
    </article>
    <article class="episode">
      <h2 class="episode__number">03</h2>
      <div class="episode__media">
        <a href="detail.html" class="episode__image__container">
          <img src="../assets/images/photos/3_original.png" alt="Olivia Valdez" class="episode__image" />
        </a>
      </div>
      <div class="episode__detail">
        <a href="detail.html" class="episode__title"><h4>Olivia Valdez</h4></a>
        <p class="episode__description">Olivia talks about how machine learning models can be used as effective substitutes for classic data structures.</p>
      </div>
    </article>
    <article class="episode">
      <h2 class="episode__number">04</h2>
      <div class="episode__media">
        <a href="detail.html" class="episode__image__container">
          <img src="../assets/images/photos/4_original.png" alt="Samuel Chavezy" class="episode__image" />
        </a>
      </div>
      <div class="episode__detail">
        <a href="detail.html" class="episode__title"><h4>Samuel Chavezy</h4></a>
        <p class="episode__description">Sam talks to us about how he started programming and what keeps him hooked till this day.</p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  // Import variable.scss (TODO: Import file globally)
  @import "src/assets/scss/variable.scss";

  // Now can add component styles or import SCSS file
  @import "src/assets/scss/episode.scss";

  // Add navigation mediaqueries from 'mediaqueries.scss' original file
  // TODO: Move this mq styles into 'nav.scss'
  // Or leave this styles here. (Nice example to import styles and write styles)
  
  /* Small Devices, Tablets */
  @media only screen and (min-width : 1000px) {
    /* episodes */
    .episodes {
      display: flex;
      flex-wrap: wrap;
      margin: 160px 0 0 50px;
      max-width: 800px;
    }
    .episode {
      flex-direction: column;
      max-width: 220px;
      margin-right: 2rem;
      margin-bottom: 3rem;
      &:hover {
        .episode__detail:before {
          display: none;
        }
      }
    }
    .episode__number {
      display: block;
    }
    .episode__media {
      width: 100%;
      height: 294px;
      max-width: 200px;
    }
    .episode__detail {
      width: 100%;
    }
    .episode__description {
      font-size: 1rem;
      font-weight: 300;
    }
  }
</style>
