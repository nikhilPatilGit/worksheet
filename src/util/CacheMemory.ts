export const GetProperty = (key: string) => {
    localStorage.getItem(key);
}
export const StoreProperty = (key: string, value: string) => {
    localStorage.setItem(key, value);
}