<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<script>
export default {

    data() {
        return {
            darkMode: false,
        }
    },

    mounted() {
        // nb. for some reason the current route does not load automatically
        // in the context of a published q-app, so we do that explicitly
        this.$router.push(window._qdnPath)

        // set dark mode if applicable
        if (window._qdnTheme == 'dark') {
            this.setDarkMode(true)
        }
    },

    methods: {

        setDarkMode(dark) {
            this.darkMode = dark
            const body = document.querySelector('body')
            body.className = dark ? 'dark' : ''
        },
    },
}
</script>

<template>

  <header>

    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">

      <div class="dark-toggle"
           style="margin-bottom: 15rem;">
        <a v-if="!darkMode"
           href="#" @click.prevent="setDarkMode(true)">
          <o-icon icon="moon" size="large" />
        </a>
        <a v-if="darkMode"
           href="#" @click.prevent="setDarkMode(false)">
          <o-icon icon="sun" size="large" />
        </a>
      </div>


      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.dark-toggle {
    margin-bottom: 15rem;
}

.dark-toggle a:hover {
    background-color: white;
}
body.dark .dark-toggle a:hover {
    background-color: $dark;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
