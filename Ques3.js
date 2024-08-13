const Calculator = {
    // Initial value
    value: 0,

    // Add method
    add: function(num) {
        this.value += num;
        return this; 
    },

    // Subtract method
    subtract: function(num) {
        this.value -= num;
        return this; 
    },

    // Multiply method
    multiply: function(num) {
        this.value *= num;
        return this; 
    },

    // Divide method
    divide: function(num) {
        if (num !== 0) {
            this.value /= num;
        } else {
            console.log("Error: Division by zero");
        }
        return this; 
    },

    // Method to get the current value
    getValue: function() {
        return this.value;
    },

    // Method to reset the value
    reset: function() {
        this.value = 0;
        return this; 
    }
};

// Example
const result = Calculator.add(10).subtract(5).multiply(3).divide(2).getValue();
console.log(result); 

// Example with reset and another calculation
const newResult = Calculator.reset().add(20).multiply(4).subtract(10).divide(5).getValue();
console.log(newResult); 
