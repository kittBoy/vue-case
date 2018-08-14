import * as Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    language: Cookies.get('language') || 'en'
  },
  mutations: {
    TOGGLE_SIDEBAR: (state: any) => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', '1')
      } else {
        Cookies.set('sidebarStatus', '0')
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state: any, withoutAnimation: any) => {
      Cookies.set('sidebarStatus', '1')
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state: any, device: any) => {
      state.device = device
    },
    SET_LANGUAGE: (state: any, language: any) => {
      state.language = language
      Cookies.set('language', language)
    }
  },
  actions: {
    toggleSideBar({ commit }: any) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }: any, { withoutAnimation }: any) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({ commit }: any, device: any) {
      commit('TOGGLE_DEVICE', device)
    },
    setLanguage({ commit }: any, language: any) {
      commit('SET_LANGUAGE', language)
    }
  }
}

export default app
