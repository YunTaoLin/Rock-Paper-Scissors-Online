import { createStore } from "vuex";

export default createStore({
  state: {
    linkedRoom:'',
    role:''
  },
  mutations: {
      setLinkedRoom(state,data){
        state.linkedRoom = data
      },
      setRole(state,data){
        state.role = data
      }
  },
  actions: {},
});