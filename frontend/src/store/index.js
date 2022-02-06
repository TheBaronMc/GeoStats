import { useCssModule } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return { points: [] }
    },
    mutations: {
        addPoint (state, point) {
            state.points.push(point)
        },
        deletePoint (state, index) {
            state.points = state.points.filter((_, i) => i != index)
        },
        deletePoints (state) {
            state.points = []
        }
    }
})

export default store