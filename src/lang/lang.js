/**
 * Created by hna on 18/5/15.
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhHKLocale from 'element-ui/lib/locale/lang/zh-TW'
import Cookies from 'js-cookie'

Vue.use(VueI18n)

const messages = {
  'zh-CN': Object.assign(require('./zh-CN'), zhLocale),
  'en-US': Object.assign(require('./en-US'), enLocale),
  'zh-HK': Object.assign(require('./zh-HK'), zhHKLocale)
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'zh-CN',
  messages
})

export default i18n
