# ts-poo

# Class

It is a mold that you will use to create objects (Instances)

- Create Objects = Instantiate
- Object = Instance

An Object is confirmed by attributes and methods

- attributes = characteristics
- methods = actions

# Methods

It Describe the behavior of the class

# Access types

Access types apply in Attributes and Methods

- Public access: Default access -> **public year: number = 0;**
- Readonly: Just reade inside and outside Class: **readonly year: number = 0;**
- Private access: From outside Class we can't Print nether Mutated it -> **private day: number = 0;**
- Protected access: Is a Private access that we can inherit.

# Constructor

The Constructor is the method that allows us to build the instances and where we set the initial values

# Getter

- Is a controlled way to access private variables/attributes.
- When we put **get** before a method, we will use like a prop. It's mean: we cn call it like this: **myDate.isLeapYear** without **()**
- Inside Class, a get run the method and outsite class we read like a props.
- Always getter have to return value.

# Setter

- A **setter** is the opposite of a **getter**
- The exclusive use of a setter is to modify a value and your rules

# Inheritance

# Protected by Inheritance

- Is a way to inherit methods and props
- Protected is a Private with inheritance. It's means Protected allow us use props or methods only on internal uses and we can inherit it.

# Static props & methods

- With the reserved word Static I can access properties and methods without the need to do an instance
  - console.log(Math.PI); // 3.14...
  - console.log(Math.max(1,2,3,4)); // 4

# Interface

- Normally we use interfaces to hard typing on Objects
- A interface work like a contract
- We use Interface with data we want share it. Public props or Methods

# Abstract classes

- Is a way to restrict object creation from father classes
- If we have a Animal Class that extend Dog, Beer, Eagle animals classes...so, we can't create a instance by Animal class. Only we can create a instance from Dog, beer o eagle class.

# Singleton Pattern: Private constructor

- It ensures that we create only one instance of a class:
  - To avoid memory locks
  - Guarantee a single access point to that class.

# Promises
