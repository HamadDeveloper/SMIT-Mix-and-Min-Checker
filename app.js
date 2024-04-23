document.getElementById("findMinMaxButton").addEventListener("click", function() {
    // Get the input string of numbers
    var numbersInput = document.getElementById("numbersInput").value;

    // Split the input string into an array of numbers
    var numbersArray = numbersInput.split(",").map(Number);

    // Find the minimum and maximum numbers
    var result = findMinMax(numbersArray);

    // Display the result
    document.getElementById("result").textContent = "Minimum: " + result.min + ", Maximum: " + result.max;
});

function findMinMax(numbers) {
    // Initialize variables to store minimum and maximum values
    let min = numbers[0];
    let max = numbers[0];

    // Loop through the array to find minimum and maximum values
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    // Return an object containing minimum and maximum values
    return {
        min: min,
        max: max
    };
}
