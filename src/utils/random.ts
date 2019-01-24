export function digitsAsString() {
    return `${Math.floor(Math.random() * 9999 )}`;
};

export function digitsCard() {
    return `${digitsAsString()}${digitsAsString()}${digitsAsString()}${digitsAsString()}`;
}

export function ccv() {
    return `${Math.floor(Math.random() * 999 )}`;
}