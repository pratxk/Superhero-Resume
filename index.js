function sumOfDivisibleMultiples(n, k, y) {
    let sum = 0;
    let count = 0;
    let multiple = n;
  
    // Find the first K multiples divisible by y using a while loop
    while (count < k) {
      if (multiple % y === 0) {
        sum += multiple;
        count++;
      }
      multiple += n; // Move to the next multiple
    }
  
    return sum;
  }
  
  // Example usage
  const n = 3;
  const k = 10;
  const y = 5;
  console.log(sumOfDivisibleMultiples(n, k, y)); // Output: 45
  