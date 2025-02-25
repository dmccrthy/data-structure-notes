---
Title: "Data Structures"
Author: "Dan McCarthy"
---

## Primitive Structures:

...

## Linear Structures:

Both Linear and Non-Linear structures are considered non-primitive structures, as they serve as collections of other types. Linear structures are defined by a linear trend, where each element is linked to the previous and next elements.

### Arrays

| ...| Complexity |
|:--:|:--:|
| Insert | |
| Deletion |  |
| Search |O(1) By index **or** O(n) By value |

    - Data structure which contains a collection of homogenous(same type) items stored by index.
    - The size and length of an array is defined before its use (in most cases) which allows it to be stored contiguously.
    - The contiguous storage of each array item means that all indexes can be accessed in constant time [O(1)] as you can find any index, by taking the pointer of the first element along with the size of each element.
    **THIS ONLY WORKS BECAUSE ARRAYS ARE STORED CONTIGUOUSLY.**


### Dynamic Arrays

| ...| Complexity |
|:--:|:--:|
| Insert | |
| Deletion |  |
| Search | |

    -


### Stacks

| ...| Complexity |
|:--:|:--:|
| Insert | |
| Deletion |  |
| Search | |

    - A data structure where elements are stored sequentially with only the newest item is accessible.
    - Based off of a Last in, First out(LIFO) design
    - Has three primary operations, Push, Pop, and Peek*.
    - Stacks are just glorified arrays, but what makes them a stack is the restriction to only these three operations.

### Queues

| ...| Complexity |
|:--:|:--:|
| Insert | |
| Deletion |  |
| Search | |

    - d

### Heaps (Priority Queue)
F

### Hash Table

| ...| Complexity |
|:--:|:--:|
| Insert | |
| Deletion |  |
| Search | |

    - Type of structure that allows for storing key value pairs. 
    -


O(1)
O(n) (Only when collisions occur)
Delete
O(1)
O(n)
Search
O(1)
O(n)




### Linked Lists

Singly Linked
Each node in a singly linked list has a value, and a reference to another node (this would usually be a pointer to the next node).
Linked lists benefit as each node can be stored separately from the linked list, unlike a typical Array which is stored contiguously.
Time Complexity:


Best-Case
Worst-Case
Insert
O(1) (insert at start)
O(n)
Delete
O(1) (Delete at start)
O(n)
Search
O(1) (Node is head)
O(n)


### Doubly Linked List
Similar to a singly linked list but includes a previous value which points to the previous node.
Improves deletion as you only need to have the target node rather than both the target and its previous node.
Allows for bidirectional traversal
Time Complexity: - SAME AS SINGLY LINKED LIST


### Circular Linked List




## Non-Linear Structures:

...

## Trees:

    - In its most basic form, a tree structure is one that ...

### Binary Trees

| ...| Complexity |
|:--:|:--:|
| Insert | |
| Deletion |  |
| Search | |

    - f

### Red-Black Trees

| ...| Complexity |
|:--:|:--:|
| Insert | |
| Deletion |  |
| Search | |

    - ff

### Prefix Tree (Trie)

| ...| Complexity |
|:--:|:--:|
| Insert | |
| Deletion |  |
| Search | |

    - The term Trie comes from the word reTRIEve.
    - 

## Graphs:

    Graphs are a form of data structure consisting of Nodes (sometimes called vertices) and edges. I like to think of them as the logical expansion of a tree structure as graphs remove any restrictions on how nodes can be connected together.  Some important terms when learning about graphs are shown below:
- Degrees of a graph
    - d

Besides that the core types can be found below:

### Directed Graph
    - This type of graph is defined by having directional edges. This is to say, unlike its undirected counterpart, edges between nodes in a directed graph are one-way by default.



### Undirected Graph
    - Ff

### Weighted Graph
    - These are a subset of directed and undirected graphs where 


## Misc:

### Disjoint Sets (Union Find)
    - f

