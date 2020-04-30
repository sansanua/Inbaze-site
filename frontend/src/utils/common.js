export function toggleArrayItem(arr = [], item) {
    return arr.includes(item)
        ? arr.filter((i) => i !== item) // remove item
        : [...arr, item]; // add item
}
