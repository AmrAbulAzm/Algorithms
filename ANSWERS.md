### 1

A. Binary search algorithm: find an element in a sorted array</br>
B. O(log n)</br>
C. O(1)

### 2

These are recursive binary search algorithms and the first function was an iterative 
one. The first recursive function is tail recursion while the second is linear recursion.
In most modern compilers, tail recursion is recognized and executed iteratively. This 
would mean that the first  recursive function has the same space and time complexity
and is as efficient as the iterative one. While the second does not allow the function
stack to be discarded giving it a space complexity of O(log n). A second point of
comparison would be regarding style and readibility. The iterative version is more
explicit in how the function executes. Tthe recursive relies on the knowledge of 
it's two parts, the base case that exits the recursive chain and the recursive case
that keeps dividing the initial input.

### 3

In Classical inheritence classes are a generalized blueprint which allows us to create
objects. These objects are abstractions of real-life entities. There is a parent-child
relationship between objects and their class. Prototypes are also abstractions of
real-life entities. They are generalized objects that can be used as a base for other
objects. Instead of defining the structure through a class you simply create an object.
Prototypes are more flexible than classical inheritence for multiple reasons. Prototypal
inheritence is acheived using two main pillars, delegation and concatenation. A delegate
prototype is an object that serves as a base for new objects that get a reference to
it. That hierarchy could be deep due to prototype chaining. Concatenation is dynamically
copying and adding properties from and to objects without sharing a reference. Using both
methods together allows for flexible code reuse that mimics alot of the main featuers of
classical inheritence. Albeit without the tight coupling and stiffness. That does not 
mean that prototypal inheritence doesn't have it's own caveats. For example, chaining can
lead to undesired side effects when properties are altered without careful consideration.
Also, without clear blueprints things can get pretty messy pretty fast.