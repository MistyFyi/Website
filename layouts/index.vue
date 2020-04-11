<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="rgba(0,0,0,0)"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="7">
          <v-toolbar-title>
            <BrandLogo light :click="() => $vuetify.goTo(0, options)" />
            <v-btn
              text
              color="white"
              @click="$vuetify.goTo('#section-features', options)"
            >
              Features
            </v-btn>
            <v-btn
              text
              color="white"
              @click="$vuetify.goTo('#section-pricing', options)"
            >
              Pricing
            </v-btn>
          </v-toolbar-title>
        </v-col>
        <v-col
          cols="3"
          align="right"
          justify="right"
        >
          <!-- -->

          <v-spacer />
          <a id="toolbarOpenAppButton" :href="loginUri">
            <v-btn>
              <span class="text-white">{{ $t('header.links.openApp') }}</span>
            </v-btn>
          </a>
        </v-col>
      </v-row>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <nuxt />
    </v-content>

    <v-footer
      app
      dark
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
        offset: -64,
        easing: 'easeInOutCubic'
      },
      loginUri: `${process.env.NUXT_ENV_WEBAPP_URL}?passthrough=1`
    }
  }
})
</script>
