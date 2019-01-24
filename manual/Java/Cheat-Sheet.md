---
name: Java Cheat Sheet
menu: Java
---

# Java Cheat Sheet

## Basic file

```java
// HellWorld.java
public class HelloWorld {
    private final int a, b;

    public HelloWorld(int a0, int b0) {
        a = a0;
        b = b0;
    }

    public static void Main(String[], args) {
        System.out.print("Hello, World");
    }
}
```

## Compilation

```shell
javac HelloWorld.java
```

## Types

| Type    |
| ------- |
| int     |
| double  |
| boolean |
| char    |
| String  |

## Declaring

```java
// declare statement
int a, b;
// assigning literal
a = 1234;
// inline initialization
int c = 1234;
```

## Printing

```java
void System.out.print(String s); // Print s
void System.out.println(String s); // print s, followed by new line
void System.out.println(); // print a new line
```

## Parsing

```java
// Example like so for parseDouble and parseLong too
int s = Integer.parseInt(String s);
```

## Arrays

```java
String[] wordArr = ["One", "Two", "Three"];
```

## Interfaces

A Java interface is more like an abstract class than a regular class. An interface can only contain method signatures and static final fields. An interface is merely a contract between the interface and classes that implement it. Like with abstract classes, classes that implement an interface must implement its methods’ bodies to provide functionality.

```java
// HellWorld.java
public class HelloWorld implements Interface<Item> {
    private final int a, b;

    public HelloWorld(int a0, int b0) {
        a = a0;
        b = b0;
    }

    public static void Main(String[], args) {
        System.out.print("Hello, World");
    }
}
```

## Abstract classes

An abstract class is much like a regular class in that it can have fields and methods. What makes it special is its methods may or may not have bodies. That means an abstract class can have method signatures that are declared as abstract as well as full methods as usual.

```java
public abstract class Human {
    protected String name;
    // ...

    public Human(String name) {
        // ...
    }

    public abstract void attack(Human human);
    public abstract void defend();
    public abstract void jump();
    public abstract double heal();

    public String getName() {...}
    public double getHealth(){...}
    public long getExperience(){...}
    public void setAttackPower(int attackPower) {...}
    public long gainExperience(long experience){...}
    public double heal(double additionalHealth) {...}
    public double decreaseHealth(int opponentAttackPower) {...}
}
```
