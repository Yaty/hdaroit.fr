<template>
  <main id="app" class="hero is-fullheight">
    <div class="hero-head">
      <div class="control has-icons-left is-pulled-right">
        <div class="select is-small">
          <select title="Language Selector" v-model="language">
            <option v-for="lang in languages" :value="lang.toLowerCase()" :key="lang">{{ lang }}</option>
          </select>
        </div>
        <span class="icon is-left">
          <i class="fa fa-globe"></i>
        </span>
      </div>
    </div>

    <div class="hero-body">
      <div class="columns is-multiline has-text-centered">
        <div class="column is-full">
          <h1 class="title is-1">Hugo Da Roit</h1>
        </div>

        <div class="column is-full">
          <h2 class="subtitle is-3">{{ $t('description') }}</h2>
        </div>

        <div class="column is-full">
          <div class="columns is-gapless" id="images">
            <div class="column img-container is-clickable" v-for="([imgPath, i18nKey, href]) in [['/img/climbing.jpg', 'climbing', 'https://escalade.hdaroit.fr'], ['/img/dev.jpg', 'dev', 'https://dev.hdaroit.fr'], ['/img/photo.jpg', 'photo', 'https://photographie.hdaroit.fr']]" :key="i18nKey">
              <a :href="href">
                <img :alt="i18nKey" :src="imgPath">
                <figcaption v-if="i18nKey === 'climbing'"><a target="_blank" href="https://www.janvirt.com/">Jan Virt Photography</a></figcaption>
                <p class="has-text-white is-uppercase is-size-1">{{ $t(i18nKey) }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-foot">
      <div class="container has-text-centered">
        <p v-html="$t('footer')"></p>
        <p>
          <a target="_blank" aria-label="GitHub" class="is-success" rel="noopener" href="https://github.com/Yaty">
        <span class="icon is-large">
          <i class="fab fa-2x fa-github"></i>
        </span>
          </a>
          <a target="_blank" aria-label="LinkedIn" class="is-success" rel="noopener" href="https://www.linkedin.com/in/hugo-d-71b8a8104/">
        <span class="icon is-large">
          <i class="fab fa-2x fa-linkedin"></i>
        </span>
          </a>
          <a rel="noopener" aria-label="contact@hdaroit.fr" class="is-danger" href="mailto:contact@hdaroit.fr">
        <span class="icon is-large">
          <i class="fa fa-2x fa-envelope"></i>
        </span>
          </a>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        language: this.$i18n.locale,
        languages: ['EN', 'FR'],
      }
    },
    watch: {
      language () {
        this.$i18n.locale = this.language
      }
    },
  }
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/_all";

  $danger: #B30024;
  $danger-invert: findColorInvert($danger);

  $button-static-color: $grey-dark;

  $primary: $danger;
  $primary-invert: findColorInvert($primary);

  $link: $danger;
  $link-invert: $danger-invert;

  $colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert)
  );

  $hero-body-padding: 0;
  $section-padding: 0;

  @import "~bulma/bulma.sass";

  @font-face {
    font-family: "Bebas Regular";
    src: url("/fonts/Bebas-Regular.otf") format("otf");
  }

  h1, h2, p {
    font-family: "Bebas Regular", monospace;
  }

  h2 {
    overflow: hidden;
    border-right: .15em solid black;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .05em;
    animation:
      typing 2s steps(44, end) 0.5s 1 normal both,
      blinkTextCursor 600ms steps(44) infinite normal;
  }

  @keyframes typing {
    from { width: 0 }
    to { width: 19.5em }
  }

  @keyframes blinkTextCursor {
    from, to { border-color: transparent }
    50% { border-color: black; }
  }

  html {
    overflow-y: auto;
  }

  .hero-head {
    margin: 10px;
  }

  .img-container {
    position: relative;
    transition: all .1s ease-in-out;
    opacity: 1;
  }

  .img-container:hover {
    opacity: 0.9;
    transform: scale(0.975);
  }

  .img-container p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: black 0.05em 0.05em 0.1em;
  }
</style>
