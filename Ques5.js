// Polyfill for Array.includes method
if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element, fromIndex = 0) {
        // Handle negative fromIndex values
        if (fromIndex < 0) {
            fromIndex = Math.max(this.length + fromIndex, 0);
        }

        // Iterate through the array starting from fromIndex
        for (let i = fromIndex; i < this.length; i++) {
            // Check for NaN (as NaN !== NaN)
            if (this[i] === element || (Number.isNaN(element) && Number.isNaN(this[i]))) {
                return true;
            }
        }
        return false;
    };
}

// Example 
const array = [1, 2, 3, 4, 5];

console.log(array.customIncludes(3));    
console.log(array.customIncludes(6));    
console.log(array.customIncludes(3, 3)); 
console.log(array.customIncludes(4, -2)); 
console.log(array.customIncludes(NaN));   
 
