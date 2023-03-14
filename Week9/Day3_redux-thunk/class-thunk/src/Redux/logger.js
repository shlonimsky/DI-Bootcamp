import { act } from "react-dom/test-utils"

export const my_logger = (store) => (next) => (action) => {
    // console.log(store)
    // console.log(next)
    // console.log(action)
console.log('prevState',store.getState())
console.log('action => ',action)
next(action)
console.log('nextState',store.getState())
}