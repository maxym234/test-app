export const setItemLS = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value))
}

export const getItemLS = (key) => {
    return JSON.parse(localStorage.getItem(key))
}