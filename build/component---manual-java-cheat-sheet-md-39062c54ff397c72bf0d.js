(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{yJix:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return o}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Java/Cheat-Sheet.md"}});var l={_frontmatter:c},b=r.a;function o(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(b,i({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"java-cheat-sheet"},"Java Cheat Sheet"),Object(a.b)("h2",{id:"basic-file"},"Basic file"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),'// HellWorld.java\npublic class HelloWorld {\n    private final int a, b;\n\n    public HelloWorld(int a0, int b0) {\n        a = a0;\n        b = b0;\n    }\n\n    public static void Main(String[], args) {\n        System.out.print("Hello, World");\n    }\n}\n')),Object(a.b)("h2",{id:"compilation"},"Compilation"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-shell"}),"javac HelloWorld.java\n")),Object(a.b)("h2",{id:"types"},"Types"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"int")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"double")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"boolean")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"char")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"String")))),Object(a.b)("h2",{id:"declaring"},"Declaring"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"// declare statement\nint a, b;\n// assigning literal\na = 1234;\n// inline initialization\nint c = 1234;\n")),Object(a.b)("h2",{id:"printing"},"Printing"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"void System.out.print(String s); // Print s\nvoid System.out.println(String s); // print s, followed by new line\nvoid System.out.println(); // print a new line\n")),Object(a.b)("h2",{id:"parsing"},"Parsing"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"// Example like so for parseDouble and parseLong too\nint s = Integer.parseInt(String s);\n")),Object(a.b)("h2",{id:"arrays"},"Arrays"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),'String[] wordArr = ["One", "Two", "Three"];\n')),Object(a.b)("h2",{id:"interfaces"},"Interfaces"),Object(a.b)("p",null,"A Java interface is more like an abstract class than a regular class. An interface can only contain method signatures and static final fields. An interface is merely a contract between the interface and classes that implement it. Like with abstract classes, classes that implement an interface must implement its methods’ bodies to provide functionality."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"public interface Character {\n    Random randomGenerator = new Random();\n\n    String getName();\n    double getHealth();\n    long getExperience();\n    int getAttackPower();\n    void setAttackPower(int attackPower);\n\n    void defend();\n    void jump();\n    int heal();\n    void attack(Character opponent);\n    double decreaseHealth(int opponentAttackPower);\n    long gainExperience(long experience);\n}\n")),Object(a.b)("h2",{id:"abstract-classes"},"Abstract classes"),Object(a.b)("p",null,"An abstract class is much like a regular class in that it can have fields and methods. What makes it special is its methods may or may not have bodies. That means an abstract class can have method signatures that are declared as abstract as well as full methods as usual."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"public abstract class Human {\n    protected String name;\n    // ...\n\n    public Human(String name) {\n        // ...\n    }\n\n    public abstract void attack(Human human);\n    public abstract void defend();\n    public abstract void jump();\n    public abstract double heal();\n\n    public String getName() {...}\n    public double getHealth(){...}\n    public long getExperience(){...}\n    public void setAttackPower(int attackPower) {...}\n    public long gainExperience(long experience){...}\n    public double heal(double additionalHealth) {...}\n    public double decreaseHealth(int opponentAttackPower) {...}\n}\n")),Object(a.b)("h2",{id:"interfaces-and-abstract-classes-in-use"},"Interfaces and Abstract classes in use"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),'public abstract class Human implements Character{\n    protected Pet pet;\n    ...\n\n    public Human(String name) {\n        ...\n        numCharacters++;\n    }\n    public void setPet(Pet pet) { this.pet = pet; }\n    public Pet getPet() { return pet; }\n    public abstract void attack(Character opponent);\n    ...\n}\npublic abstract class Pet implements Character{\n    protected Human owner;\n    ...\n    public Pet(String name, Human owner) {\n        this.name = name;\n        this.owner = owner;\n        gainExperience(1);\n        numCharacters++;\n    }\n\n    public Human getOwner() { return owner; }\n    public abstract void attack(Character opponent);\n    ...\n}\npublic class Archer extends Human {\n    private int numArrows = 0;\n\n    public Archer(String name) {\n        super(name);\n        findArrows();\n    }\n\n    private void findArrows() {\n        System.out.println("Looking for arrows");\n    }\n    @Override\n    public void attack(Character opponent) {...}\n    @Override\n    public void defend() {...}\n    @Override\n    public void jump() {...}\n    @Override\n    public int heal() { return 0; }\n}\npublic class Dog extends Pet {\n    public Dog(String name, Human owner) {\n        super(name, owner);\n    }\n\n    public void bark() {\n        System.out.println("Wolf Wolf!");\n    }\n\n    @Override\n    public void attack(Character opponent) {...}\n    @Override\n    public void defend() {...}\n    @Override\n    public void jump() {...}\n    @Override\n    public int heal() { return 0; }\n}\n')))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Java/Cheat-Sheet.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-cheat-sheet-md-39062c54ff397c72bf0d.js.map