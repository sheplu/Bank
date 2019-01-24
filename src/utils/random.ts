export function digitsAsString() {
    return `${Math.floor(Math.random() * 10 )}`;
};

export function digitsFour() {
    return `${digitsAsString()}${digitsAsString()}${digitsAsString()}${digitsAsString()}`;
}

export function digitsCard() {
    return `${digitsFour()}${digitsFour()}${digitsFour()}${digitsFour()}`;
}

export function ccv() {
    return `${digitsAsString()}${digitsAsString()}${digitsAsString()}`;
}