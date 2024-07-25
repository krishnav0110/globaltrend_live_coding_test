const knapsackUtil = (weights, values, capacity, n, matrix) => {
    if(n === 0 || capacity === 0) {
        return 0;
    }
    if(matrix[n][capacity] != -1) {
        return matrix[n][capacity];
    }

    if(weights[n - 1] > capacity) {
        matrix[n][capacity] = knapsackUtil(weights, values, capacity, n - 1, matrix);
        return matrix[n][capacity];
    }
    else {
        matrix[n][capacity] = Math.max(
            values[n - 1] + knapsackUtil(weights, values, capacity - weights[n - 1], n - 1, matrix),
            knapsackUtil(weights, values, capacity, n - 1, matrix)
        );
        return matrix[n][capacity];
    }
}

const knapsack = (weights, values, capacity) => {
    const n = weights.length;
    const matrix = new Array(n + 1).fill().map(() => new Array(capacity + 1).fill(-1));
    return knapsackUtil(weights, values, capacity, n, matrix);
};



// Driver
const weights = [1, 2, 3];
const values = [10, 15, 40];
const capacity = 5;

console.log("weights: " + weights);
console.log("values: " + values);
console.log("capacity: " + capacity);
console.log("Max: " + knapsack(weights, values, capacity));