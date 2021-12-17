# Create VueApp

- Install Vue CLI, Run ```npm i --g @vue/cli```
- ```vue create your-app-name```

Once done installtion open app folder and run 
- ```npm run serve```


# Add Vue Router to create pages / URL
- ```npm install vue-router@next --save```

- Create ```@/router/router.js```





#### router/router.js
```js
import { createWebHistory, createRouter } from 'vue-router';
import ContactPage from '../views/frontend/pages/ContactPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home_Page',
        component: () => import('@/views/frontend/pages/HomePage.vue')
    },
    {
        path: '/contact',
        name: 'Contact_Page',
        component: ContactPage
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
```








#### App.vue
```html
<template>
  <div>
      <router-link to="/">Home Static Link</router-link>
      <router-link :to="links.home">Home Dynamic Link</router-link>
      <router-link :to="links.contact">Contact Dynamic Link</router-link>
      
      <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
        "links": {
          "home": '/',
          "contact": '/contact'
        }
    }
  },
  components: {
    // not now
  }
}
</script>
```








#### main.js
```js
import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router/router.js'

createApp(App).use(router).mount('#app')
```




