import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Oruga from '@oruga-ui/oruga-next'

import App from './App.vue'
import router from './router'
import {QordialPlugin} from 'qordial'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Oruga)
app.use(QordialPlugin)

app.mount('#app')
