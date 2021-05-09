// plugins/notifications.ts
import Vue from 'vue'

import { Notifications } from '~/libraries/ui/Notifications'

declare module '@nuxt/types' {
  interface Context {
    $notifications: typeof Notifications
  }
}

Vue.prototype.$notifications = new Notifications()