// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  nitro:{
    plugins:[
      "~/server/index.ts"
    ]
  },
  runtimeConfig: {
    mongodburi : process.env.MONGODB_URL

  }
  


})
