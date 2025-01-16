# Newton-Raphson Method

The Newton-Raphson method is an iterative numerical technique used to find the roots of a real-valued function. It is one of the most efficient methods for solving equations of the form $ f(x) = 0 $.

## Mathematical Formula

The Newton-Raphson iteration formula is given by:

$$ x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} $$

where:
- $ x_n $ is the current approximation,
- $ x_{n+1} $ is the next approximation,
- $ f(x) $ is the function whose root we are trying to find,
- $ f'(x) $ is the derivative of $ f(x) $.

## Steps of the Newton-Raphson Method

1. Choose an initial guess $ x_0 $.
2. Compute the next approximation using the formula $ x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} $.
3. Repeat step 2 until the difference between $ x_{n+1} $ and $ x_n $ is less than a predefined tolerance.

## Example in C

Here is a simple implementation of the Newton-Raphson method in C:

```c
#include <stdio.h>
#include <math.h>

// Function whose root we are trying to find
double f(double x) {
    return x * x - 2; // Example: f(x) = x^2 - 2
}

// Derivative of the function
double f_prime(double x) {
    return 2 * x; // Example: f'(x) = 2x
}

int main() {
    double x0 = 1.0; // Initial guess
    double tolerance = 1e-6;
    double x1;
    int max_iterations = 1000;
    int iteration = 0;

    while (iteration < max_iterations) {
        x1 = x0 - f(x0) / f_prime(x0);
        if (fabs(x1 - x0) < tolerance) {
            break;
        }
        x0 = x1;
        iteration++;
    }

    if (iteration == max_iterations) {
        printf("The method did not converge.\n");
    } else {
        printf("The root is: %f\n", x1);
    }

    return 0;
}
```

In this example, we are trying to find the square root of 2 by solving the equation $ x^2 - 2 = 0 $. The initial guess is set to 1.0, and the process continues until the difference between successive approximations is less than the specified tolerance.

## Conclusion

The Newton-Raphson method is a powerful and efficient technique for finding roots of functions. It requires the function and its derivative, and with a good initial guess, it converges rapidly to the correct solution.
