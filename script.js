class LSInterpreter {
    run(code) {
        // Split the code into lines
        let lines = code.split("\n");

        // Initialize the output variable
        let output = "";

        let lineNumber = 0;

        // Loop through each line of code
        for (let line of lines) {
            lineNumber++;
            // Split the line into words
            let words = line.split(" ");

            // Check the first word to determine the type of code
            switch (words[0]) {
                case "print":
                    // Concatenate the rest of the words into a single string
                    let message = words.slice(1).join(" ");
                    // Add the message to the output
                    output += message + "\n";
                    break;
                case "count":
                    // Get the object to count
                    let object = words[1];
                    // Get the number of times the object is repeated
                    let count = parseInt(words[2]);
                    if (isNaN(count)) {
                        output += "Invalid LS code, count value must be a number\n";
                        break;
                    }
                    let repeatedString = "";
                    // Add the object to the output the number of times specified
                    for (let i = 0; i < count; i++) {
                        repeatedString += object;
                    }
                    output += repeatedString + "\n";
                    break;
                default:
                    output += "Invalid LS code at line: " + lineNumber + "\n";
                    break;
            }
        }
        // Return the final output
        return output;
    }
}

function runCode() {
    // Get the code input by the user
    let code = document.getElementById("code-input").value;

    // Initialize the interpreter
    let interpreter = new LSInterpreter();

    // Run the code and store the output
    let output = interpreter.run(code);

    // Display the output
    document.getElementById("output").innerHTML = output;
    window.scrollTo(0, document.body.scrollHeight);
}

function addLineNumbers() {
    let lines = document.getElementById("code-input").value.split("\n").length;
    let lineNumbers = "";
    for (let i = 1; i <= lines; i++) {
        lineNumbers += i + "<br>";
    }
    document.getElementById("line-numbers").innerHTML = lineNumbers;


    // Call the function when the textarea value changes
    document.getElementById("code-input").addEventListener("input", addLineNumbers);
}

// Call the function when the textarea value changes
document.getElementById("code-input").addEventListener("input", addLineNumbers);