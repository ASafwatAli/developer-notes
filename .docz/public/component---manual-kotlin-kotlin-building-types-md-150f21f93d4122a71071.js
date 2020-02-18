(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{"0Jvc":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return r}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),s=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kotlin/Kotlin-Building-Types.md"}});var o={_frontmatter:c},l=s.a;function r(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(a.b)(l,i({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"kotlin-building-types"},"Kotlin Building Types"),Object(a.b)("h2",{id:"classes"},"Classes"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),'// this works without the need for a constructor\nclass Person(var firstName: String, var lastName: String) {\n  val fullName\n    get() = "$firstName $lastName"\n}\nval john = Person(firstName = "Johnny", lastName = "Appleseed")\nprintln(john.fullName) // > Johnny Appleseed\n')),Object(a.b)("h2",{id:"data-classes"},"Data Classes"),Object(a.b)("p",null,"Classes with a primary purpose for holding data are very common in programming. They are especially used as model objects in many programming patterns that attempt to model real world objects."),Object(a.b)("p",null,"When using these model classes, comparing instances, printing them and copying them are all very common actions:","."),Object(a.b)("p",null,"Using the == operator with the instances compares the values in the objects using the equals() function, whereas === compares the identity of the references, as was discussed above."),Object(a.b)("p",null,"These actions on instances are so common that Kotlin provides a variation on classes named data classes. By using data classes, you can avoid having to declare all the boilerplate code that was used in our re-definition of Student."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"data class StudentData(var firstName: String, var lastName: String, var id: Int)\n")),Object(a.b)("h2",{id:"destructuring"},"Destructuring"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotin"}),"val (firstName, lastName, id) = marie\nprintln(firstName) // > Marie\nprintln(lastName)  // > Curie\nprintln(id)        // > 1\n")),Object(a.b)("h2",{id:"objects"},"Objects"),Object(a.b)("p",null,"Kotlin uses object to denote a custom type for which only a single instance can be created. The name choice for the object keyword can sometimes lead to confusion with class instances, since they're also called objects."),Object(a.b)("p",null,"You can also use object to create anonymous objects, for which multiple instances are created each time the anonymous object is used, another potential source of confusion."),Object(a.b)("p",null,"The object keyword lets you easily implement a common pattern in software development: The singleton pattern."),Object(a.b)("h2",{id:"decompiled-object"},"Decompiled Object"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"object X {\n  var x = 0\n}\n")),Object(a.b)("p",null,"...can become:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"public final class X {\n   private static int x;\n   public static final X INSTANCE;\n   public final int getX() {\nreturn x; }\n   public final void setX(int var1) {\nx = var1; }\n   static {\n      X var0 = new X();\n      INSTANCE = var0;\n   }\n}\n")),Object(a.b)("h2",{id:"singleton-use-cases"},"Singleton Use Cases"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),'data class Student(val id: Int, val firstName: String, val lastName:\nString) {\n  var fullName = "$lastName, $firstName"\n}\nval marie = Student(1, "Marie", "Curie")\nval albert = Student(2, "Albert", "Einstein")\nval richard = Student(3, "Richard", "Feynman")\n\nobject StudentRegistry {\n  val allStudents = mutableListOf<Student>()\n  fun addStudent(student: Student) {\n    allStudents.add(student)\n  }\n\n  fun removeStudent(student: Student) {\n    allStudents.remove(student)\n  }\n\n  fun listAllStudents() {\n    allStudents.forEach {\n      println(it.fullName)\n    }\n  }\n}\n\nStudentRegistry.addStudent(marie)\nStudentRegistry.addStudent(albert)\nStudentRegistry.addStudent(richard)\nStudentRegistry.listAllStudents()\n// > Curie, Marie\n// > Einstein, Albert\n// > Feynman, Richard\n')),Object(a.b)("p",null,"Another use case is for namepaces for constants:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),'object JsonKeys {\n  const val JSON_KEY_ID = "id"\n  const val JSON_KEY_FIRSTNAME = "first_name"\n  const val JSON_KEY_LASTNAME = "last_name"\n}\n')),Object(a.b)("h2",{id:"companion-objects"},"Companion objects"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),'class Scientist private constructor(\n    val id: Int,\n    val firstName: String,\n    val lastName: String) {\n  companion object {\n    var currentId = 0\n    fun newScientist(firstName: String, lastName: String): Scientist {\n      currentId += 1\n      return Scientist(currentId, firstName, lastName)\n    }\n}\n  var fullName = "$firstName $lastName"\n}\n')),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"Scientist class"),", you've added a companion object that holds a currentId value that you'll use for generating unique ID numbers for each scientist. The currentId value is common to all instances of the class, and it is used by the class to create new ID values when a new scientist instance is created."),Object(a.b)("p",null,"A common use case for static members is to implement the factory pattern for creating new class instances. You're using the factory pattern in Scientist by making the class primary constructor private and adding a factory method newScientist() to the companion object, which creates new scientist instances. By making the constructor private, you enforce that the new scientist instances can only be created using the factory method, ensuring that your currentId value is correctly incremented whenever new scientest objects are instantiated."),Object(a.b)("p",null,"Again, with the repository:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),'object ScientistRepository {\n  val allScientists = mutableListOf<Scientist>()\n  fun addScientist(student: Scientist) {\n    allScientists.add(student)\n  }\n  fun removeScientist(student: Scientist) {\n    allScientists.remove(student)\n  }\n  fun listAllScientists() {\n    allScientists.forEach {\n      println("${it.id}: ${it.fullName}")\n    }\n  }\n}\n\nval emmy = Scientist.newScientist("Emmy", "Noether")\nval isaac = Scientist.newScientist("Isaac", "Newton")\nval nick = Scientist.newScientist("Nikola", "Tesla")\nScientistRepository.addScientist(emmy)\nScientistRepository.addScientist(isaac)\nScientistRepository.addScientist(nick)\nScientistRepository.listAllScientists()\n// 1: Emmy Noether\n// 2: Isaac Newton\n// 3: Nikola Tesla\n')),Object(a.b)("h2",{id:"anonymous-objects"},"Anonymous Objects"),Object(a.b)("p",null,"Anonymous classes are used in Java to override the behavior of existing classes without the need to subclass, and also to implement interfaces without defining a concrete class. In both cases, the compiler creates a single anonymous instance, to which no name need be given."),Object(a.b)("p",null,"You use object to create the Kotlin version of anonymous classes called anonymous objects or object expressions."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"interface Counts {\n  fun studentCount(): Int\n  fun scientistCount(): Int\n}\n\nval counter = object : Counts {\n  override fun studentCount(): Int {\n    return StudentRegistry.allStudents.size\n  }\n  override fun scientistCount(): Int {\n    return ScientistRepository.allScientists.size\n  }\n}\nprintln(counter.studentCount()) // > 3\nprintln(counter.scientistCount()) // > 3\n")),Object(a.b)("p",null,"The equivalent decompiled Java code:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"<undefinedtype> counter = new Counts() {\n  public int studentCount() {\n    return StudentRegistry.INSTANCE.getAllStudents().size();\n  }\n  public int scientistCount() {\n    return ScientistRepository.INSTANCE.getAllScientists().size();\n  }\n};\n")))}r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kotlin/Kotlin-Building-Types.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kotlin-kotlin-building-types-md-150f21f93d4122a71071.js.map