export function digits() {
    return Math.floor(Math.random() * 9999 );
}

export function digitsAsString() {
    return `${digits()}`;
}