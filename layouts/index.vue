<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="rgba(0,0,0,0)"
    >
      <v-toolbar-title>
        <nuxt-link :to="{ name: 'index' }">
          <BrandLogo light />
        </nuxt-link>
      </v-toolbar-title>
      <!-- -->

      <v-spacer />
      <v-btn
        text
        @click="$vuetify.goTo('#section-features', options)"
      >
        Features
      </v-btn>
      <v-btn
        text
        @click="$vuetify.goTo('#section-pricing', options)"
      >
        Pricing
      </v-btn>
      <a id="toolbarOpenAppButton" :href="loginUri">
        <v-btn>
          <span class="text-white">{{ $t('header.links.openApp') }}</span>
        </v-btn>
      </a>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <nuxt />
    </v-content>

    <v-footer
      app
      dark
      absolute
    >
      <!-- -->
      <Footer />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import BrandLogo from '@/components/Layout/BrandLogo.vue'
import Footer from '@/components/Layout/Footer.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    BrandLogo,
    Footer
  },
  data () {
    return {
      options: {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      },
      loginUri: `${process.env.NUXT_ENV_WEBAPP_URL}/login?passthrough=1`
    }
  }
})
</script>
