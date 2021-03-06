(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"./manual/COMP3520-OS/3-Threads.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),r={},l="wrapper";function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)(l,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"week-3---threads"},"Week 3 - Threads"),Object(s.b)("h2",{id:"processes-and-threads"},"Processes and Threads"),Object(s.b)("p",null,"Processes have two characteristics:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Resource Ownership ",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"process includes a virtual address space to hold the process image "),Object(s.b)("li",{parentName:"ul"},"the OS performs a protection function to prevent unwanted interference between processes with respect to resources"))),Object(s.b)("li",{parentName:"ol"},"Scheduling/Execution",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"follows an execution path that may be interleaved with other processes "),Object(s.b)("li",{parentName:"ul"},"a process has an execution state (Running, Ready, etc.) and a dispatching priority and is scheduled and dispatched by the OS")))),Object(s.b)("p",null,"These two characteristics are treated independently by modern operating systems:\n- the unit of dispatching is referred to as a ",Object(s.b)("inlineCode",{parentName:"p"},"thread")," or lightweight process\n- the unit of resource ownership is referred to as a ",Object(s.b)("inlineCode",{parentName:"p"},"process")," or ",Object(s.b)("inlineCode",{parentName:"p"},"task")),Object(s.b)("h2",{id:"multithreading"},"Multithreading"),Object(s.b)("p",null,"The ability of an OS to support multiple, concurrect paths of execution within a single process"),Object(s.b)("h2",{id:"process"},"Process"),Object(s.b)("p",null,"The unit of resource allocation and a unit of protection."),Object(s.b)("p",null,"A process is associated with: "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A virtual address space which holds the process image "),Object(s.b)("li",{parentName:"ul"},"Protected access to\n- Processors\n- Other processes\n- Files\n- I/O resources ")),Object(s.b)("h2",{id:"multiple-threads-in-process"},"Multiple threads in Process"),Object(s.b)("p",null,"Each thread has:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Access to the memory and resources of its process (all threads of a process share this)"),Object(s.b)("li",{parentName:"ul"},"An execution state (running, ready, etc.)"),Object(s.b)("li",{parentName:"ul"},"Saved thread context when not running "),Object(s.b)("li",{parentName:"ul"},"An execution stack "),Object(s.b)("li",{parentName:"ul"},"Some per-thread static storage for local variables")),Object(s.b)("h2",{id:"single-threaded-vs-multi-threaded"},"Single-Threaded vs multi threaded"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Both have ",Object(s.b)("inlineCode",{parentName:"li"},"Process Control Block")),Object(s.b)("li",{parentName:"ul"},"Both have ",Object(s.b)("inlineCode",{parentName:"li"},"User Address Space")),Object(s.b)("li",{parentName:"ul"},"Single thread has a ",Object(s.b)("inlineCode",{parentName:"li"},"User Stack")," and ",Object(s.b)("inlineCode",{parentName:"li"},"Kernel Stack")),Object(s.b)("li",{parentName:"ul"},"Multithread process has a ",Object(s.b)("inlineCode",{parentName:"li"},"User Stack"),", ",Object(s.b)("inlineCode",{parentName:"li"},"Kernel Stack"),", ",Object(s.b)("inlineCode",{parentName:"li"},"Thread Control Block")," within each thread")),Object(s.b)("h2",{id:"threads"},"Threads"),Object(s.b)("p",null,"In OS that supports threads: scheduling and dispatching done on thread basis "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Most of the state info dealing with execution is maintained in thread-level data structures "),Object(s.b)("li",{parentName:"ul"},"Several actions that affect all of the threads in a process and that the OS must manage at the process level\n- Suspending process means all threads of a process\n- Terminates a process terminates all threads within the process "),Object(s.b)("li",{parentName:"ul"},"Similar to processes, threads have execution states and may synchronize with one another.")),Object(s.b)("h2",{id:"thread-execution-states"},"Thread Execution States"),Object(s.b)("p",null,"Three basic states"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Running "),Object(s.b)("li",{parentName:"ol"},"Ready "),Object(s.b)("li",{parentName:"ol"},"Blocked ")),Object(s.b)("p",null,"Operations associated with a change in thread state "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Spawn (another thread)\n- allocate register context and stacks "),Object(s.b)("li",{parentName:"ul"},"Block\n- move to an event queue waiting for the event\n- issue: will blocking a thread block other, or all, threads within the same process?"),Object(s.b)("li",{parentName:"ul"},"Unblock\n- moved the the ",Object(s.b)("inlineCode",{parentName:"li"},"Ready")," queue for execution"),Object(s.b)("li",{parentName:"ul"},"Finish (thread)\n- de-allocate register context and stacks ")),Object(s.b)("h2",{id:"thread-synchronization"},"Thread Synchronization"),Object(s.b)("p",null,"Necessity to sync activities of all threads and prevent interference between each other."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"all threads of a process share the same address space and other resources "),Object(s.b)("li",{parentName:"ul"},"any alteration of a resource by one thread affects the other threads in the same process ")),Object(s.b)("p",null,"In general, the techniques used for thread sync are the same as those for process sync."),Object(s.b)("h2",{id:"types-of-threads"},"Types of Threads"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"User Level Thread (ULT)"),Object(s.b)("li",{parentName:"ol"},"Kernel Level Thread (KLT) ",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"also called kernel-supported threads or lightweight threads")))),Object(s.b)("h2",{id:"user-level-threads"},"User-Level Threads"),Object(s.b)("p",null,"Thread management all done by application."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Multithreading is managed by a runtime threads lib ")),Object(s.b)("p",null,"The kernel is not aware of the existence of threads "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Only schedule the process as a unit and assigns a single execution state to that process ")),Object(s.b)("h2",{id:"disadvantages-of-ult"},"Disadvantages of ULT"),Object(s.b)("p",null,"In a typical OS many system calls are blocking "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"as a result, when a ULT executes a system call, not only is the thread blocked, but all within the process are blocked ")),Object(s.b)("p",null,"In a pure ULT strategy, multithreaded applications cannot take advantage of multiprocessing."),Object(s.b)("h2",{id:"kernel-level-threads"},"Kernel-Level Threads"),Object(s.b)("p",null,"Kernel maintains context information for the process and the threads. "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"No thread management done by application ")),Object(s.b)("p",null,"Scheduling is done on a thread basis."),Object(s.b)("p",null,"Windows is an example of this approach."),Object(s.b)("h2",{id:"advantages-of-klt"},"Advantages of KLT"),Object(s.b)("p",null,"The kernel can simultaneously schedule multiple threads from the same process on multiple processors."),Object(s.b)("p",null,"If one thread is blocked, the kernel schedules another thread of the same process."),Object(s.b)("p",null,"Kernel routines themselves can be multithreaded."),Object(s.b)("h2",{id:"multicore--multithreading"},"Multicore & Multithreading"),Object(s.b)("p",null,"Achieves concurrency without the overhead of using multiple processes."),Object(s.b)("p",null,"Threads within the same process can exchange information through their common address space and have access to the shared resources of the process."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Threads of any process can run on any processor"),Object(s.b)("li",{parentName:"ul"},"Soft affinity:\n- dispatcher tries to assign a ready thread to the same processor it last ran on\n- helps reuse data still in that processor's memory caches from the previous execution of the thread "),Object(s.b)("li",{parentName:"ul"},"Hard affinity:\n- an application restricts thread execution to certain processors")),Object(s.b)("h2",{id:"multicore-challenges"},"Multicore Challenges"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Dividing activities "),Object(s.b)("li",{parentName:"ul"},"Balance "),Object(s.b)("li",{parentName:"ul"},"Data splitting "),Object(s.b)("li",{parentName:"ul"},"Data dependency "),Object(s.b)("li",{parentName:"ul"},"Testing and debugging ")),Object(s.b)("h2",{id:"linux-threads"},"Linux Threads"),Object(s.b)("p",null,"Linux uses the same internal representation for processes and threads; a thread is simply a new process (or task) that happens to share the same address space as its parent."),Object(s.b)("p",null,"A distinction is only made when a new thread is created by the ",Object(s.b)("inlineCode",{parentName:"p"},"clone")," system call\n- ",Object(s.b)("inlineCode",{parentName:"p"},"fork")," creates a new process with its own entirely new process context\n- ",Object(s.b)("inlineCode",{parentName:"p"},"clone")," creates a new process with its own identity, but that is allowed to share the data structures of its parent"),Object(s.b)("p",null,"Using ",Object(s.b)("inlineCode",{parentName:"p"},"clone")," gives the application fine-grained control over exactly what is shared between two threads."),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object.assign({parentName:"tr"},{align:null}),"flag"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:null}),"meaning"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"CLONE_FS")),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"File-system info is shared")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"CLONE_VM")),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"The same mem space is shared")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"CLONE_SIGHAND")),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"Signal handlers are shared")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"CLONE_FILES")),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"The set of open files are shared")))),Object(s.b)("h2",{id:"windows-threads"},"Windows Threads"),Object(s.b)("p",null,"Processes and servies provided by the Windows Kernel are relatively simple and general purpose."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"implemented as objects "),Object(s.b)("li",{parentName:"ul"},"created as new process or a copy of an existing process "),Object(s.b)("li",{parentName:"ul"},"exec proc may contain one or more threads "),Object(s.b)("li",{parentName:"ul"},"both procs and thread objects have built-in sync capabilities")),Object(s.b)("p",null,"Windows makes use of two types of process-related objects:"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Processes"),"\n\u2013 an entity corresponding to a user job or application that owns resources"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Threads"),"\n\u2013 a dispatchable unit of work that executes sequentially and is interruptible"))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/COMP3520-OS/3-Threads.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-com-p3520-os-3-threads.101a1afd2417ec7a4a77.js.map