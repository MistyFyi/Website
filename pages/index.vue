<template>
  <div id="homeRoot">
    <v-row
      class="section-1 background-gradient"
      align="center"
      justify="center"
    >
      <v-col
        xs="8"
        sm="8"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            xs="10"
            sm="10"
            align="center"
            justify="center"
            class="strapline"
          >
            <div class="deep-purple--text text--lighten-5">
              <h1>
                {{ $t('home.about.tagline1') }}
              </h1>
              <div>
                <span>{{ $t('home.about.tagline2') }}</span>
              </div>
              <div>
                <span>{{ $t('home.about.tagline3') }}</span>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            xs="12"
            sm="12"
            align="center"
            justify="center"
          >
            <MockInterface />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row
      id="section-features"
      class="section-2"
      justify="center"
      align="center"
    >
      <v-col cols="12" align="center">
        <v-row justify="center">
          <h2 class="white--text">
            {{ $t('home.features.title') }}
          </h2>
        </v-row>
        <v-row justify="center" class="deep-purple--text text--lighten-5">
          <v-col cols="10" sm="4" class="feature">
            <v-row>
              <v-col>
                <v-icon x-large color="#ff607a">
                  mdi-heart
                </v-icon>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>
                  {{ $t('home.features.feature1.paragraph1') }}
                </p>
                <p>
                  {{ $t('home.features.feature1.paragraph2') }}
                </p>
                <p>
                  {{ $t('home.features.feature1.paragraph3') }}
                </p>
                <p>
                  {{ $t('home.features.feature1.paragraph4') }}
                </p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="10" sm="4" class="feature">
            <v-row>
              <v-col>
                <v-icon x-large color="#8a62ff">
                  mdi-gamepad
                </v-icon>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>
                  {{ $t('home.features.feature2.paragraph1') }}
                </p>
                <p>
                  {{ $t('home.features.feature2.paragraph2') }}
                </p>
                <p>
                  {{ $t('home.features.feature2.paragraph3') }}
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row
      id="section-pricing"
      class="section-3 background-gradient deep-purple--text text--lighten-5"
      align="center"
      justify="center"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" align="center">
          <h2>
            {{ $t('home.pricing.title') }}
          </h2>
        </v-col>
        <v-col cols="8" align="center">
          <p>{{ $t('home.pricing.strapline') }}</p>
          <b><p>{{ $t('home.pricing.notice') }}</p></b>
        </v-col>

        <v-col cols="12" align="center">
          <v-row justify="center">
            <v-col class="tier-free" cols="10" sm="4">
              <h4 class="tier-header">
                <v-icon large color="#8fbc8f">
                  mdi-account
                </v-icon>
                {{ $t('home.pricing.free.title') }}
              </h4>
              <ul>
                <li>{{ $t('home.pricing.free.feature1') }}</li>
                <li>{{ $t('home.pricing.free.feature2') }}</li>
              </ul>
            </v-col>
            <v-col class="tier-donator" cols="10" sm="4">
              <h4 class="tier-header">
                <v-icon large color="#ffcb56">
                  mdi-star-outline
                </v-icon>
                {{ $t('home.pricing.paid.title') }}
              </h4>
              <ul>
                <li>{{ $t('home.pricing.paid.feature1') }}</li>
                <li>{{ $t('home.pricing.paid.feature2') }}</li>
                <li>{{ $t('home.pricing.paid.feature3') }}</li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MockInterface from '@/components/Home/MockInterface.vue'

export default Vue.extend({
  layout: 'index',
  name: 'Home',
  components: {
    MockInterface
  },
  head () {
    return {
      title: 'Home'
    }
  }
})
</script>

<style lang='scss' scoped>
  #homeRoot {
    font-family: "Saira Semi Condensed", sans-serif;
  }
  .section-1, .section-2, .section-3 {
    min-height: 100vh;
  }

  .section-1 {
    margin-top: -64px;

    .strapline {
      margin-top: 64px;
      font-family: "Saira Semi Condensed", sans-serif;
    }
  }

  .section-2 {
    background-color: #333;
  }

  .background-gradient {
    background: linear-gradient(270deg, #424242, #212121);
    background-size: 400% 400%;
    -webkit-animation: AnimationName 30s ease infinite;
    -moz-animation: AnimationName 30s ease infinite;
    animation: AnimationName 30s ease infinite;
    @-webkit-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
  }
</style>
