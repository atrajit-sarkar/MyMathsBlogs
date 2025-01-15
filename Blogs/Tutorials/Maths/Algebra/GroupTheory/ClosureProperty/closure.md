@import "/BlogStyle.css";
#### Closure Property of $(P_n(x),+)$
- **Theorem**: The set of all polynomials of degree less than or equal to $n$ is closed under addition.
**Proof**: Let $f(x)$ and $g(x)$ be two polynomials of degree less than or equal to $n$. Then, let 
$$f(x)=a_kx^k+a_{k-1}x^{k-1} + \cdots+a_0$$
$$g(x)=b_lx^l+b_{l-1}x^{l-1} + \cdots+b_0$$

Now, 
$$f(x)+g(x)=a_kx^k+a_{k-1}x^{k-1} + \cdots+a_0+b_lx^l+b_{l-1}x^{l-1} + \cdots+b_0$$

then sum of two polinomial $f(x)$ and $g(x)$ has the degree $\leq max\{k,l\}$. As, $k,l\leq n$, so $max\{k,l\}\leq n$. Hence, $f(x)+g(x)$ is a polynomial of degree less than or equal to $n$. Therefore, the set of all polynomials of degree less than or equal to $n$ is closed under addition.$\blacksquare$

**Note:** You might think why not degree of $f+g\overset{?}{=}max\{k,l\}$. The answer for this is consider $f(x)=x^2$ and $g(x)=-x^2$. Then, $f(x)+g(x)=0$ which is a polynomial of degree $0$ but $max\{2,2\}=2$. Hence, $f(x)+g(x)$ is a polynomial of degree less than or equal to $n$.
So, leading term might cancel out in the sum of two polynomials. Hence it is safe to say that the sum of two polynomials of degree less than or equal to $n$ is a polynomial of degree less than or equal to maximun of the degree of two polinomials.
