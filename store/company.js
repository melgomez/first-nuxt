export default {
  state: () => ({
    companies: ['c1', 'c2']
  }),
  mutations: {},
  actions: {},
  getters: {
    companies: (state) => {
      return state.companies
    }
  }
}
