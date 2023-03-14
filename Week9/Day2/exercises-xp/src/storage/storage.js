export const toStorage = (key,value) => {
    localStorage.setItem(key, JSON.stringify(value))
}