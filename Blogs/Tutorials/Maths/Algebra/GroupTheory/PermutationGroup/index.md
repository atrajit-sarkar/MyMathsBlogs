title: Permutation Groups
content-title: About Permuation Groups


#### Group of Bijections
$\mathbf{\textcolor{red}{\S\text{ } Theorem:}}$
Let $X$ be a set. The set of all bijections from $X$ to $X$ forms a group under composition of functions. This group is called the symmetric group on $X$ and is denoted by $S_X$.

$\mathbf{\textcolor{green}{\text{} Proof:}}$
Let $X$ be a set and let $S_X$ be the set of all bijections from $X$ to $X$. We need to show that $S_X$ is a group under composition of functions. 
1. We need to show that $S_X$ is closed under composition, 
2. has an identity element, 
3. and has inverses.

To, show the 1. point, notice the followingdiagram:

**1.**
diagram:

Now, notice that $f,g \in S_X$, then 
$$
\begin{array}{ll}
    f\circ g(x)= f\circ g(y) \\\\
    \Rightarrow  f(g(x))=f(g(y))\\\\
    \Rightarrow g(x)=g(y)\\\\
    \Rightarrow x=y
\end{array}
$$

Thus $f\circ g$ is a 1-1 fucntion from $X$ to $X$.
Now, take $y\in X$,then we have a $x_1\in X$ such that $f(x_1)=y$ as $f \in S_X$ and $f$ is hence onto function and as $x_1\in X$ hence $\exists x \in X$ such that $g(x)=x_1$ as $g\in S_X$ and $g$ is onto function. Hence, together we get 
$f(g(x))=y$, hence $f\circ g$ is onto meaning, $f\circ g$ is a bijection from $X$ to $X$ and hence $f\circ g \in S_X$.

**2.** There is a function called identity fucntion from $X$ to $X$ which is defined as $e(x)=x$ for all $x\in X$. This function is a bijection from $X$ to $X$ and hence $e\in S_X$.
Now, this identity function  is a canditate to be fit in search of the group's identity element. And here we are so, lucky that actually works. This is a mere luck that it fits to be groups identity and don't be confused that:

$\mathbf{\textcolor{yellow}{Confusion Part:}}$ You may think that as indentity map is the name so, it must be groups identity. But remeber that identity  is its name because it fixes all the elements of the set $X$ and hence it is called identity map. But, it is not necessary that it is the identity of the group. But, here we are lucky that it is the identity of the group. And lets prove our luck haha &#x1F603;.

$\textbf{Proof:}$ 
$$
\begin{array}{ll}
    f\circ e(x)=f(e(x))=f(x)  \\\\
    \text{\& } e\circ f(x)=e(f(x))=f(x) \text{ }\forall x \in X. \\\\
    \Rightarrow f\circ e=e\circ f=f
\end{array}
$$

**3.** Again there is a inverse function which set theoretically is defined as $f^{-1}(y)=x$ if $f(x)=y$. This function is a bijection from $X$ to $X$ and hence $f^{-1}\in S_X$. [This we all know.] And in search of inverve element of $f\in S_X$ we have the candidate $f^{-1}$ and lets prove that it is the inverse of $f$ in group $S_X$.

$\textbf{Proof:}$
$$
\begin{array}{ll}
    f\circ f^{-1}(x)=f(f^{-1}(x))=x=e(x) \\\\
    \text{\& } f^{-1}\circ f(x)=f^{-1}(f(x))=x=e(x) \text{ }\forall x \in X. \\\\
    \Rightarrow f\circ f^{-1}=f^{-1}\circ f=e
\end{array}
$$

And hence we get the closure property, idendity, and inverse eleeemnt in $S_X$ and hence $S_X$ is a group under composition of functions. $\blacksquare$