@import "/BlogStyle.css";
## IsomorphismAnomaly

In this blog, we will discuss the anomaly occurs during the isomorphism of infinite-dimensional vector spaces.
1. In finite dimensions, two vector spaces are isomorphic if and only if they have the same dimension.
2. Same hapens also for infinite-dimensional vector spaces, but there is an anomaly.
3. In finite dimesnion as the basis set is finite two different vector spaces with different numbers of baisis elements can not be isomorphic.
4. But in infite dimension, two vector spaces with different number of basis elements can be isomorphic. As, number there can't be detremined as in case of finite sets. 
5. As we know that two sets are of same cardinality if there is a bijection between them. So, two vector spaces are isomorphic iff there is a bijection between their basis set.
6. Now, this bijection can occur between a set and its subset also hence it is completely rises a distncton between finite and infinite dimensions. As, in case of finite dimesnions a vector space and its subspace can't be isomorphic, but in infinite dimensions they can be isomorphic.
7. Before we give examples lets verify the statement 5.

#### Proof of Statement 5: 
Let V and W be two vector spaces. Let B be the basis of V and C be the basis of W. Let $f: B \rightarrow C$ be a bijection. Then, f can be extended to a linear transformation $F: V \rightarrow W$. Let v be an element of V. Then, v can be written as a finite linear combination of basis elements of V. Let $v = a_1b_1 + a_2b_2 + ... + a_nb_n$, where $a_1, a_2, ..., a_n$ are scalars and $b_1, b_2, ..., b_n$ are basis elements of V. Then, $F(v) = a_1f(b_1) + a_2f(b_2) + ... + a_nf(b_n)$. Hence, F is a linear transformation. Also, F is bijective as f is bijective. Hence, V and W are isomorphic.
So, the statement 5 is proved.
Now, look the case suppose we B and C basis sets which have same cardinality but let $B\subsetneqq C \implies V \subsetneqq W$. But by the above statement, V and W are isomorphic. Hence, the anomaly occurs in infinite dimensions.

#### Example 1: 
Let's take $W=C^{00}$ and $V=\mathcal{L}\{e_2,e_3,\cdots\}$ Definitely we know that, $C^{00}=\mathcal{L}\{e_1,e_2,e_3,\cdots\}$ So, $V\subsetneqq W$.But we have a bijection between $\{e_1,e_2,e_3,\cdots\}$ and $\{e_2,e_3,\cdots\}$ given by $f(e_i)=e_{i+1}$. So, $V$ and $W$ are isomorphic.