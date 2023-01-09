import App from './App'

// #ifdef H5
import lazyPlugin from 'vue3-lazy'
// #endif


import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'

export function createApp() {
  const app = createSSRApp(App)
	app.use(Pinia.createPinia())
	// #ifdef H5
	app.use(lazyPlugin, {
		loading: './static/images/common/placeholder.png',
	})
	// #endif
  return {
    app,
		Pinia
  }
}
