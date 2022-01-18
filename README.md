# vue-test-utils
Vue Test Utils

1* npm init vite@latest

✔ Project name: … 000-jest
✔ Select a framework: › vue
✔ Select a variant: › vue

2° npm install --save-dev jest

3°  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "jest --coverage"
  },
  
04° npm install --save-dev babel-core@7.0.0-bridge.0

05° npm install --save-dev @vue/babel-preset-app

06° babel.config.js

module.exports = {
  presets: [
            '@vue/app'
  ]
}


###############################################

07° npm install --save-dev @vue/test-utils@next

08° npm uninstall jest

09° npm install --save-dev jest@26.6.3

10° npm install --save-dev vue-jest@5.0.0-alpha.10

11° vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }  
})

12° jest.config.js
module.exports = {
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue' ],
  transform: {    
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
}

###############################################

13° npm install --save-dev @testing-library/vue@next
