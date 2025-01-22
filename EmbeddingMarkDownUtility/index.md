title: About Collatz Conjecture
content-title: Collatz Conjecture

# Exploring the Collatz Conjecture: A Mathematical Puzzle with Code Implementation

The **Collatz Conjecture**, also known as the **3x + 1 problem**, is a fascinating yet unsolved problem in mathematics. Despite its simplicity, it has intrigued mathematicians and enthusiasts for decades. Let's explore this intriguing problem and implement its solution in C programming.

---

## What Is the Collatz Conjecture?

The conjecture states that for any positive integer $ n $:
1. If $ n $ is **even**, divide it by 2:  
   $ n = n / 2 $
2. If $ n $ is **odd**, multiply it by 3 and add 1:  
   $ n = 3 \times n + 1 $

Repeat this process iteratively. According to the conjecture, no matter the starting value of $ n $, the sequence will always eventually reach 1.

### Example Walkthrough
Suppose $ n = 6 $:
- $ 6 $ is even, so $ n = 6 / 2 = 3 $
- $ 3 $ is odd, so $ n = 3 \times 3 + 1 = 10 $
- $ 10 $ is even, so $ n = 10 / 2 = 5 $
- $ 5 $ is odd, so $ n = 3 \times 5 + 1 = 16 $
- $ 16 $ is even, so $ n = 16 / 2 = 8 $
- $ 8 $ is even, so $ n = 8 / 2 = 4 $
- $ 4 $ is even, so $ n = 4 / 2 = 2 $
- $ 2 $ is even, so $ n = 2 / 2 = 1 $

Thus, the sequence for $ n = 6 $ is:  
$$6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1.$$

---

## C Code Implementation

Here's how you can implement the Collatz Conjecture in C:

```c
#include <stdio.h>

void collatzSequence(int n) {
    printf("Collatz sequence starting with %d: ", n);
    while (n != 1) {
        printf("%d ", n);
        if (n % 2 == 0) {
            n = n / 2; // Even case
        } else {
            n = 3 * n + 1; // Odd case
        }
    }
    printf("1\n");
}

int main() {
    int num;
    printf("Enter a positive integer: ");
    scanf("%d", &num);

    if (num <= 0) {
        printf("Please enter a positive integer.\n");
        return 1;
    }

    collatzSequence(num);
    return 0;
}
```

---

### Explanation of the Code
1. **Input Handling**:
   - The program prompts the user to input a positive integer.
   - It checks if the input is valid (greater than 0).

2. **Collatz Function**:
   - The function `collatzSequence` repeatedly applies the rules of the conjecture until $ n = 1 $.
   - For each iteration:
     - If $ n $ is even, it's halved.
     - If $ n $ is odd, it's multiplied by 3 and incremented by 1.

3. **Output**:
   - The sequence is printed step-by-step until it reaches 1.

---

## Sample Output
```bash
Enter a positive integer: 6
Collatz sequence starting with 6: 6 3 10 5 16 8 4 2 1
```

---

## Why Is the Collatz Conjecture Unsolved?

Despite its simplicity, the conjecture is unsolved because:
- Mathematicians have not found a proof that every starting number eventually reaches 1.
- The conjecture has been verified for billions of integers but lacks a general proof.

---

## Conclusion

The **Collatz Conjecture** is a perfect blend of simplicity and mystery, making it an exciting topic for mathematicians and programmers alike. Implementing the conjecture in code is not only a great way to practice programming but also an opportunity to appreciate the beauty of mathematical puzzles.

Try running the program with different numbers and see the fascinating sequences for yourself!
