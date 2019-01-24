const defaultRates = {
    USD: {
        GBP: 0.77,
        EUR: 0.88,
    },
    EUR: {
        USD: 1.13,
        GBP: 0.87,
    },
    GBP: {
        USD: 1.31,
        EUR: 1.16,
    },
};

export function rates(from, to, value) {
    console.log(value)
    console.log(from)
    console.log(to)
    return value*defaultRates[from][to];
}