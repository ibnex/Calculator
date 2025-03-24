# Simple Calculator Project

This project is a basic calculator application built with React.js. It allows users to perform simple arithmetic operations such as addition, subtraction, multiplication, division, and modulus.

## Features

* **Basic Arithmetic Operations:** Supports addition (+), subtraction (-), multiplication (\*), division (/), and modulus (%).
* **Decimal Input:** Allows input of decimal numbers.
* **Clear and Backspace:** Provides buttons to clear the display ("AC") and delete the last input ("<-").
* **Display:** Shows the current input and result.

## Technologies Used

* **React.js:** For building the user interface.
* **Tailwind CSS:** For styling.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/ibnex/Calculator.git
    cd CALCULATOR
    ```

2.  **Install Dependencies:**

    ```bash
    npm install vite , tailwind css 
    ```

3.  **Start the Development Server:**

    ```bash
    npm run dev
    ```



## Usage

* **Input Numbers:** Click the number buttons (0-9) to input numbers.
* **Input Operators:** Click the operator buttons (+, -, \*, /, %) to perform arithmetic operations.
* **Decimal Point:** Click the "." button to input a decimal point.
* **Calculate Result:** Click the "=" button to display the result.
* **Clear Display:** Click the "AC" button to clear the display.
* **Backspace:** Click the "<-" button to delete the last input.

## Code Explanation

The `Calculator` component manages the calculator's state and logic.

* **State:**
    * `result`: Stores the current input and result.
    * `wait`: A boolean to manage the input after an operator.
* **Input Handling:**
    * `inputDigit`: Appends digits to the `result` state.
    * `handleOperator`: Appends operators to the `result` state, handling consecutive operator inputs.
    * `inputDecimal`: Appends a decimal point to the `result` state.
* **Calculation:**
    * `calculator`: Parses the `result` string and performs the corresponding arithmetic operation.
* **Utility Functions:**
    * `clear`: Resets the `result` state to 0.
    * `back`: Removes the last character from the `result` state.

## Future Improvements

* **Error Handling:** Implement error handling for invalid inputs (e.g., division by zero).
* **Advanced Operations:** Add support for more advanced operations (e.g., square root, exponents).
* **Memory Functions:** Implement memory functions (e.g., MC, MR, M+, M-).
* **Keyboard Input:** Allow users to input numbers and operators using the keyboard.
* **Better UI:** Improve the user interface with a more modern design.
* **Order of Operations:** Implement order of operations.

## Author

* [Github] - [https://github.com/ibnex],
* [Instagram] - [https://www.instagram.com/ibne__ahad?igsh=MWgzbGs3bDY1M296Yg==]
