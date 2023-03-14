export const age_logger = (store) => (next) => (action) => {
next(action)
const age = JSON.stringify(store.getState())
console.log(`In middleWare func was caught: ${age}`)
}