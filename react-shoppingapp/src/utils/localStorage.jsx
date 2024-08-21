
export const loadFromLocalStorage = (key) => {
    const serializedData = localStorage.getItem(key);
    if (serializedData) {
        return JSON.parse(serializedData);
    }
    return [];
};

export const saveToLocalStorage = (key, data) => {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
};
