

export const pd= [
  {
    "question": "Serial computing is characterized by which of the following constraints?",
    "options": ["Multiple instructions per clock cycle", "Execution of one instruction at a time", "Concurrent data processing", "Distributed memory access"],
    "correct": 1,
    "explanation": "In serial computing, a single processor executes a stream of instructions one after another. Only one instruction can be active at any given moment."
  },
  {
    "question": "Which of the following was a primary driver for the shift from single-core to multicore processors around 2005?",
    "options": ["Decrease in RAM costs", "The 'Power Wall' and heat dissipation limits", "The invention of the internet", "Reduced need for parallel processing"],
    "correct": 1,
    "explanation": "Increasing clock speeds further caused exponential increases in power consumption and heat. Manufacturers pivoted to adding more cores at lower clock speeds to stay within thermal limits."
  },
  {
    "question": "In Flynn's Taxonomy, which category describes a traditional uniprocessor system?",
    "options": ["SIMD", "MIMD", "SISD", "MISD"],
    "correct": 2,
    "explanation": "SISD (Single Instruction, Single Data) refers to a system where a single stream of instructions acts on a single stream of data, typical of older single-core PCs."
  },
  {
    "question": "RISC (Reduced Instruction Set Computer) architecture primarily aims to:",
    "options": ["Minimize the number of instructions per program", "Maximize the complexity of each instruction", "Increase instructions per cycle via pipelining", "Reduce the amount of registers available"],
    "correct": 2,
    "explanation": "RISC focuses on simple instructions that can be executed in a single clock cycle, which makes it easier to implement efficient hardware pipelining."
  },
  {
    "question": "Which architecture is known for having variable-length instructions and complex addressing modes?",
    "options": ["RISC", "CISC", "SIMD", "MISD"],
    "correct": 1,
    "explanation": "CISC (Complex Instruction Set Computer), like the x86 architecture, uses instructions that can perform multiple operations (like loading from memory and adding) in one go."
  },
  {
    "question": "A system where each processor executes different instructions on different data sets simultaneously is categorized as:",
    "options": ["SISD", "SIMD", "MISD", "MIMD"],
    "correct": 3,
    "explanation": "MIMD (Multiple Instruction, Multiple Data) is the most flexible and common architecture for modern parallel computers and distributed clusters."
  },
  {
    "question": "What is the main advantage of 'Data Parallelism'?",
    "options": ["It reduces the number of threads needed", "It allows the same operation to be applied to different subsets of data", "It eliminates the need for synchronization", "It prevents deadlocks entirely"],
    "correct": 1,
    "explanation": "Data parallelism focuses on distributing data across different nodes so they can all perform the same task on their respective chunks simultaneously."
  },
  {
    "question": "In the history of operating systems, which development allowed multiple users to use a single computer at the same time?",
    "options": ["Batch Processing", "Time-Sharing Systems", "Single-User Systems", "Real-Time Systems"],
    "correct": 1,
    "explanation": "Time-sharing used rapid context switching to give multiple users the illusion that they had exclusive access to the central computer."
  },
  {
    "question": "Which of these is a significant limitation of Distributed Computing compared to Parallel Computing?",
    "options": ["Lower scalability", "Higher latency in communication", "Less memory availability", "Lack of independent CPUs"],
    "correct": 1,
    "explanation": "Distributed systems communicate over networks (like Ethernet), which have significantly higher latency compared to the internal buses used in parallel shared-memory systems."
  },
  {
    "question": "What does 'Clock Speed' measure in a processor?",
    "options": ["The amount of data stored in cache", "The number of cycles a CPU executes per second", "The physical size of the chip", "The speed of the cooling fan"],
    "correct": 1,
    "explanation": "Clock speed (measured in GHz) indicates how many instruction cycles the CPU can perform in one second."
  },
  {
    "question": "In Domain Decomposition, how is the problem divided?",
    "options": ["By the type of calculations being done", "By the physical or data space associated with the problem", "By the time taken to execute", "By the number of users"],
    "correct": 1,
    "explanation": "The 'Domain' (like a 3D model or a geographical map) is split into sub-domains, and each processor is responsible for one specific area."
  },
  {
    "question": "Which instruction-level parallelism involves multiple functional units executing different stages of different instructions?",
    "options": ["Pipelining", "Caching", "Looping", "Branching"],
    "correct": 0,
    "explanation": "Pipelining breaks instruction execution into stages (Fetch, Decode, Execute, etc.). While one instruction is being decoded, another is being fetched."
  },
  {
    "question": "What is a 'Multicore Chip'?",
    "options": ["A chip with multiple cooling fans", "A single integrated circuit with two or more separate processing units", "A computer with multiple monitors", "A system using multiple hard drives"],
    "correct": 1,
    "explanation": "A multicore processor puts multiple 'cores' (CPUs) on a single physical chip to increase performance without drastically raising clock speeds."
  },
  {
    "question": "Which of the following is considered a 'High-Level' API for parallel programming in C/C++?",
    "options": ["Pthreads", "OpenMP", "WinAPI", "Assembly"],
    "correct": 1,
    "explanation": "OpenMP uses compiler directives to simplify parallelization, making it 'higher level' and easier to use than the manual thread management of Pthreads."
  },
  {
    "question": "Which generation of computers introduced integrated circuits (ICs)?",
    "options": ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"],
    "correct": 2,
    "explanation": "Third-generation computers replaced transistors with integrated circuits, leading to smaller, faster, and more efficient machines."
  },
  {
    "question": "In a distributed system, if one node fails and the rest continue to work, the system is said to have:",
    "options": ["High latency", "Partial failure resilience", "Serial bottleneck", "Zero bandwidth"],
    "correct": 1,
    "explanation": "Partial failure is a core concept in distributed systems; the system must be designed to remain functional even when some components fail."
  },
  {
    "question": "Which architecture is most likely to be used in a highly specialized digital signal processor (DSP)?",
    "options": ["CISC", "RISC", "MIMD", "SISD"],
    "correct": 1,
    "explanation": "RISC is favored in DSPs and mobile chips because its simplicity allows for high efficiency and low power consumption."
  },
  {
    "question": "What is 'Task Parallelism' (Functional Decomposition)?",
    "options": ["Running the same code on different data", "Running different code/functions on the same or different data", "Running instructions sequentially", "Limiting a task to a single core"],
    "correct": 1,
    "explanation": "Task parallelism focuses on distributing different functions or tasks across cores, rather than just splitting up the data."
  },
  {
    "question": "Which of the following best describes the 'Von Neumann Bottleneck'?",
    "options": ["The CPU is too slow for the RAM", "The shared bus between the CPU and memory limits data transfer speed", "The monitor cannot refresh fast enough", "The hard drive has too little space"],
    "correct": 1,
    "explanation": "No matter how fast a CPU is, it is often limited by how quickly it can fetch instructions and data from memory over the system bus."
  },
  {
    "question": "A cluster of independent computers connected via a local area network (LAN) is an example of:",
    "options": ["Shared Memory Parallelism", "Distributed Memory System", "Multicore Processor", "SIMD Architecture"],
    "correct": 1,
    "explanation": "Clusters consist of separate machines, each with its own memory, making it a distributed memory system."
  },
  {
    "question": "Which of these is NOT a limitation of Distributed Systems?",
    "options": ["Network Reliability", "Scalability", "Concurrency", "Security"],
    "correct": 1,
    "explanation": "Scalability is actually an *advantage* of distributed systems; you can add more nodes to increase capacity. The others are challenges/limitations."
  },
  {
    "question": "The 'Massively Parallel Processing' (MPP) architecture is typically:",
    "options": ["Shared memory", "Distributed memory", "Single-core", "Manual-only"],
    "correct": 1,
    "explanation": "MPP systems consist of hundreds or thousands of processors, each with its own memory, usually found in supercomputers."
  },
  {
    "question": "Which era follows the 'Multicore Era' in the evolution of computing?",
    "options": ["Vacuum Tube Era", "Transistor Era", "Many-core/Heterogeneous Era", "Mechanical Era"],
    "correct": 2,
    "explanation": "We are currently in an era of many-core processors and heterogeneous computing (using CPUs, GPUs, and AI accelerators together)."
  },
  {
    "question": "Which of the following is a characteristic of RISC?",
    "options": ["Large number of registers", "Complex addressing modes", "Multiple cycles per instruction", "High power consumption"],
    "correct": 0,
    "explanation": "Because RISC uses simple instructions, it relies on having many registers to keep data close to the CPU and reduce memory access."
  },
  {
    "question": "In Flynn's taxonomy, the 'MISD' architecture is primarily theoretical because:",
    "options": ["It is too expensive", "Few problems require multiple instructions on the same data", "It is slower than SISD", "It requires too much memory"],
    "correct": 1,
    "explanation": "Most computing tasks involve one instruction on one data (SISD) or one instruction on many data (SIMD). Applying different operations to the same data (MISD) has very niche uses."
  },
  {
    "question": "Scenario: You are designing a system to process millions of identical weather sensor readings simultaneously. Which parallelism is best?",
    "options": ["Functional Parallelism", "Data Parallelism", "Serial Computing", "MISD"],
    "correct": 1,
    "explanation": "Data parallelism is ideal here because the 'task' is the same for every sensor reading; you just need to apply it to many data points."
  },
  {
    "question": "What does 'Symmetric Multiprocessing' (SMP) imply?",
    "options": ["Processors have different roles", "All processors share the same memory and OS", "Each processor has its own OS", "Only one processor can access I/O"],
    "correct": 1,
    "explanation": "In SMP, multiple identical processors connect to a single, shared main memory and are controlled by a single operating system instance."
  },
  {
    "question": "Which history milestone involved the move from vacuum tubes to transistors?",
    "options": ["1st to 2nd Generation", "2nd to 3rd Generation", "3rd to 4th Generation", "4th to 5th Generation"],
    "correct": 0,
    "explanation": "The second generation of computers (approx. 1956-1963) replaced bulky, hot vacuum tubes with smaller, more reliable transistors."
  },
  {
    "question": "An 'Instruction Set Architecture' (ISA) serves as the interface between:",
    "options": ["The user and the OS", "The hardware and the software", "The monitor and the GPU", "The RAM and the Hard Drive"],
    "correct": 1,
    "explanation": "The ISA defines the set of basic operations (like add, move, jump) that the hardware can understand and the software can use."
  },
  {
    "question": "Why is 'Function Decomposition' harder to scale than 'Domain Decomposition'?",
    "options": ["Functions are always slow", "The number of functions in a program is usually limited", "It uses more memory", "It requires specialized hardware"],
    "correct": 1,
    "explanation": "A program may only have 5 or 6 distinct stages (functions), meaning you can't easily scale it to 1,000 cores. You can, however, split data (domain) into 1,000 pieces easily."
  },
  {
    "question": "What is 'Distributed Computing'?",
    "options": ["One computer with many CPUs", "Multiple autonomous computers communicating over a network", "A CPU with multiple caches", "A computer with multiple users"],
    "correct": 1,
    "explanation": "Distributed computing involves separate machines (nodes) that work together to solve a single problem by passing messages."
  },
  {
    "question": "Which of these is a 'SIMD' instruction set used in modern x86 CPUs?",
    "options": ["SSE / AVX", "HTML", "POSIX", "TCP/IP"],
    "correct": 0,
    "explanation": "SSE (Streaming SIMD Extensions) and AVX (Advanced Vector Extensions) are sets of instructions that allow one command to process multiple data points at once."
  },
  {
    "question": "What is the primary goal of Parallel Computing?",
    "options": ["To make computers smaller", "To reduce power consumption", "To increase computational speed and throughput", "To simplify programming"],
    "correct": 2,
    "explanation": "Parallel computing aims to solve large problems faster by performing multiple calculations simultaneously."
  },
  {
    "question": "In the context of multicore era, 'Heterogeneous Computing' refers to:",
    "options": ["Systems using different types of cores (e.g., CPU + GPU)", "Systems using only identical cores", "Systems using only serial processing", "Systems without any memory"],
    "correct": 0,
    "explanation": "Heterogeneous systems use specialized hardware (like GPUs for math and CPUs for logic) to achieve better performance and efficiency."
  },
  {
    "question": "A 'Job' in a parallel system refers to:",
    "options": ["A single CPU instruction", "A complete program or unit of work submitted to the system", "The physical hardware", "The operating system's kernel"],
    "correct": 1,
    "explanation": "A job is the top-level unit of work. It can be broken down into tasks, which are then parallelized."
  },
  {
    "question": "Which of the following is an example of an 'Interconnect' in distributed computing?",
    "options": ["Ethernet", "A mouse cable", "Power supply", "The BIOS"],
    "correct": 0,
    "explanation": "An interconnect is the networking fabric (like Ethernet or InfiniBand) that allows distributed nodes to talk to each other."
  },
  {
    "question": "Which of the following is true for CISC architectures?",
    "options": ["They emphasize software over hardware", "They use a single clock cycle per instruction", "They aim to reduce the number of instructions per program", "They have very few registers"],
    "correct": 2,
    "explanation": "CISC allows for powerful instructions that do a lot of work, reducing the total number of lines of assembly code needed for a program."
  },
  {
    "question": "In a distributed system, 'Middleware' is used to:",
    "options": ["Cool the processors", "Hide the complexity of the network from the application", "Replace the operating system", "Store data permanently"],
    "correct": 1,
    "explanation": "Middleware (like MPI or RPC) provides a layer that makes the distributed collection of computers look like a single system to the user."
  },
  {
    "question": "What is 'Scalability'?",
    "options": ["The ability of a system to handle more work by adding resources", "The physical weight of the computer", "The number of pixels on the screen", "The speed of light"],
    "correct": 0,
    "explanation": "Scalability is a measure of how much the performance increases as you add more processors or nodes."
  },
  {
    "question": "A 'Multi-socket' motherboard is used to:",
    "options": ["Connect more monitors", "House multiple separate CPU chips", "Increase internet speed", "Add more USB ports"],
    "correct": 1,
    "explanation": "Multi-socket systems allow for more than one physical processor chip to be installed, further increasing the total number of available cores."
  },
  {
    "question": "The First Generation of computers (e.g., ENIAC) used:",
    "options": ["Transistors", "Integrated Circuits", "Vacuum Tubes", "Microprocessors"],
    "correct": 2,
    "explanation": "Vacuum tubes were used for switching and memory in the earliest computers, which were massive and prone to frequent failure."
  },
  {
    "question": "Which parallel programming model requires the programmer to explicitly use 'send' and 'receive' calls?",
    "options": ["Shared Memory", "Message Passing", "Dataflow", "Automatic Parallelization"],
    "correct": 1,
    "explanation": "In distributed memory systems, data must be moved manually between processors using message-passing APIs like MPI."
  },
  {
    "question": "What is the primary purpose of a 'Cache' in a multicore processor?",
    "options": ["To store large files permanently", "To reduce the time to access data from main memory", "To connect to the internet", "To manage the power supply"],
    "correct": 1,
    "explanation": "Cache is a small, fast memory located close to the core that stores copies of frequently used data to speed up processing."
  },
  {
    "question": "Which of these is a typical example of 'SIMD' in action?",
    "options": ["A web browser loading three different pages", "A video editor applying a brightness filter to all pixels in an image", "A database handling two different user queries", "A word processor checking spelling while typing"],
    "correct": 1,
    "explanation": "Applying a filter involves the same calculation on many different data points (pixels), which is the definition of SIMD."
  },
  {
    "question": "What does 'Transparency' mean in a distributed system?",
    "options": ["The computer case is see-through", "The user is unaware that the system consists of multiple machines", "The code is open-source", "The network cables are invisible"],
    "correct": 1,
    "explanation": "Transparency means the system hides the distribution of resources, making it appear as a single unified machine to the user."
  },
  {
    "question": "Which of the following is a drawback of the RISC approach?",
    "options": ["Instructions are too slow", "Programs require more memory (more lines of code)", "Hardware is too complex", "It generates more heat than CISC"],
    "correct": 1,
    "explanation": "Since RISC instructions are simple, you often need more of them to accomplish a task that a single CISC instruction could handle."
  },
  {
    "question": "In the history of computing, the 'Microprocessor' (CPU on a single chip) appeared in which generation?",
    "options": ["Second", "Third", "Fourth", "Fifth"],
    "correct": 2,
    "explanation": "The fourth generation (1971-present) is defined by the microprocessor, which allowed for the creation of personal computers."
  },
  {
    "question": "What is 'Instruction Pipelining'?",
    "options": ["A way to cool the CPU with liquid", "An overlap in the execution of multiple instructions", "The path data takes to the hard drive", "A method for serializing data"],
    "correct": 1,
    "explanation": "Pipelining improves throughput by keeping all parts of the CPU busy with different stages of different instructions simultaneously."
  },
  {
    "question": "Which of the following is a distributed computing limitation regarding 'Clocks'?",
    "options": ["Computers don't have clocks", "Global clock synchronization is difficult across many nodes", "Clocks are too fast for the CPU", "Clocks use too much power"],
    "correct": 1,
    "explanation": "In a distributed system, each node has its own clock. Keeping them perfectly synchronized across a network is a major technical challenge."
  },
  {
    "question": "A 'Shared Memory' system allows all processors to:",
    "options": ["Share the same keyboard", "Access a single global address space", "Use the same hard drive only", "Run only one thread at a time"],
    "correct": 1,
    "explanation": "In shared memory systems, any processor can read or write to any location in the system's main memory."
  },
  {
    "question": "Which of these represents a 'Functional Decomposition' scenario?",
    "options": ["Splitting a matrix for multiplication", "Assigning one core to GUI, one to Audio, and one to Physics in a game", "Processing 1000 images on 1000 cores", "Sorting a list by dividing it in half"],
    "correct": 1,
    "explanation": "Assigning specific, different duties (GUI, Audio, Physics) to different cores is the definition of functional/task decomposition."
  },
  {
    "question": "What is 'Throughput'?",
    "options": ["The time it takes for one instruction to finish", "The total amount of work completed in a given time", "The physical size of the data bus", "The distance between nodes"],
    "correct": 1,
    "explanation": "Parallel systems aim to increase throughput—doing more total work per second—even if individual tasks don't get much faster."
  },
  {
    "question": "The 'Moore's Law' observation suggested that:",
    "options": ["Clock speeds double every year", "The number of transistors on a chip doubles roughly every two years", "Software gets twice as fast every year", "Parallel systems are always better than serial"],
    "correct": 1,
    "explanation": "Moore's Law is about transistor density, which has historically allowed for more complex and powerful processors over time."
  },
  {
    "question": "Which of the following is an example of 'Coarse-Grained' parallelism?",
    "options": ["Parallelizing a single for-loop", "Running separate applications on different machines", "Performing arithmetic on sub-vectors", "Executing instructions in a pipeline"],
    "correct": 1,
    "explanation": "Coarse-grained parallelism involves large tasks that require infrequent communication, such as running different programs on different nodes."
  },
  {
    "question": "What is the primary challenge of the 'Multicore Era' for software developers?",
    "options": ["CPUs are becoming too slow", "Programs must be explicitly written to be parallel to see performance gains", "Computers have too much RAM", "Hardware is too cheap"],
    "correct": 1,
    "explanation": "Unlike the past, where old software got faster on new CPUs automatically, in the multicore era, software must be 'threaded' to use more than one core."
  },
  {
    "question": "In a MIMD system, processors are:",
    "options": ["Tightly coupled or loosely coupled", "Only serial", "Only single-purpose", "Always in the same chip"],
    "correct": 0,
    "explanation": "MIMD systems can be tightly coupled (shared memory, like a multicore PC) or loosely coupled (distributed memory, like a cluster)."
  },
  {
    "question": "Which of these is a risk in 'Data Decomposition'?",
    "options": ["Lack of data", "Load imbalance (one core gets more work than others)", "The compiler won't understand it", "Too many functions"],
    "correct": 1,
    "explanation": "If data is split unevenly, one core might finish its work quickly while another is still busy, leading to wasted idle time for the faster core."
  },
  {
    "question": "What is 'Latency' in the context of parallel systems?",
    "options": ["The total amount of data transferred", "The delay before a transfer of data begins", "The width of the data bus", "The power consumed by the network"],
    "correct": 1,
    "explanation": "Latency is the time it takes to send a message or access memory. High latency is a major hurdle in distributed computing."
  },
  {
    "question": "Which of the following describes 'Instruction Level Parallelism' (ILP)?",
    "options": ["Running multiple programs at once", "Executing multiple instructions from a single stream simultaneously", "Connecting two computers together", "Using a GPU for graphics"],
    "correct": 1,
    "explanation": "ILP techniques like superscalar execution and pipelining allow a single CPU to handle multiple instructions from one program at the same time."
  },
  {
    "question": "In a distributed system, 'Consistency' refers to:",
    "options": ["The speed of the network", "All nodes seeing the same data at the same time", "The physical size of the machines", "The type of OS used"],
    "correct": 1,
    "explanation": "Consistency is a major challenge; if data is updated on one node, the system must ensure other nodes see the update."
  },
  {
    "question": "What is the primary role of the 'Control Unit' in a SISD architecture?",
    "options": ["To perform math", "To fetch and decode instructions", "To store data permanently", "To display graphics"],
    "correct": 1,
    "explanation": "The Control Unit acts as the brain, determining what the CPU should do by interpreting instructions from memory."
  },
  {
    "question": "Which of the following is true about 'Distributed Memory'?",
    "options": ["It is easier to program than shared memory", "It requires explicit message passing to share data", "All processors share a single RAM stick", "It cannot scale to many nodes"],
    "correct": 1,
    "explanation": "Because each processor has its own private memory, any data needed by another processor must be sent as a message."
  },
  {
    "question": "A 'Processor' is composed of which two main parts?",
    "options": ["RAM and ROM", "ALU and Control Unit", "Monitor and Keyboard", "Hard Drive and SSD"],
    "correct": 1,
    "explanation": "The Arithmetic Logic Unit (ALU) does the math/logic, and the Control Unit manages the execution of instructions."
  },
  {
    "question": "Which of these is a benefit of CISC over RISC?",
    "options": ["Lower power usage", "Simpler hardware design", "Smaller binary file sizes", "Faster clock speeds"],
    "correct": 2,
    "explanation": "Since CISC instructions are more 'dense' (doing more in one instruction), the resulting machine code is often shorter than RISC code."
  },
  {
    "question": "In Flynn's Taxonomy, why is 'SIMD' efficient for graphics and scientific math?",
    "options": ["It uses less power", "It performs the same operation on large vectors of data in one go", "It doesn't require a clock", "It uses serial execution"],
    "correct": 1,
    "explanation": "SIMD allows a single 'Add' command to add two arrays of 8 numbers simultaneously, which is much faster for vector-heavy tasks."
  },
  {
    "question": "What does 'Loose Coupling' in distributed systems imply?",
    "options": ["The computers are falling apart", "Nodes have their own memory and OS and are connected by a network", "The wires are not plugged in correctly", "The system is very fast"],
    "correct": 1,
    "explanation": "Loosely coupled systems (like the internet or a cluster) consist of independent nodes that operate semi-autonomously."
  },
  {
    "question": "What is a 'Thread'?",
    "options": ["A physical wire in the CPU", "The smallest unit of execution within a process", "A complete computer system", "A type of memory storage"],
    "correct": 1,
    "explanation": "A thread is a 'lightweight process.' Multiple threads within the same process share memory but can execute on different cores."
  },
  {
    "question": "In the history of OS, what was the primary goal of a 'Batch System'?",
    "options": ["Interactive gaming", "To maximize CPU utilization by grouping similar jobs together", "To browse the web", "To allow real-time video editing"],
    "correct": 1,
    "explanation": "Early batch systems collected jobs on tape and ran them one after another to ensure the expensive CPU wasn't sitting idle between users."
  },
  {
    "question": "Which of the following is a disadvantage of 'Shared Memory' systems?",
    "options": ["Difficult to program", "High communication latency", "Limited scalability due to bus/memory contention", "Cannot use threads"],
    "correct": 2,
    "explanation": "As you add more processors, the single path to memory (the bus) becomes a bottleneck, making it hard to scale SMP systems to thousands of cores."
  },
  {
    "question": "Scenario: You need to build a supercomputer with 10,000 processors. Which model should you choose?",
    "options": ["Shared Memory (SMP)", "Distributed Memory (Cluster/MPP)", "Single-core SISD", "CISC only"],
    "correct": 1,
    "explanation": "Distributed memory is the only model that can scale to thousands of nodes because it doesn't rely on a single shared bus."
  },
  {
    "question": "What is 'Speedup'?",
    "options": ["The weight of the computer", "The ratio of serial execution time to parallel execution time", "The clock speed of the RAM", "The time it takes to boot the OS"],
    "correct": 1,
    "explanation": "Speedup ($S$) is defined as $T_{serial} / T_{parallel}$. If a task took 10 seconds serially and 2 seconds in parallel, the speedup is 5."
  },
  {
    "question": "Which of these is a real-world use case for SIMD?",
    "options": ["Managing a database", "Audio signal processing", "Running a web server", "Compiling a C program"],
    "correct": 1,
    "explanation": "Audio signals are streams of data that often need the same volume or filter adjustment applied—perfect for SIMD."
  },
  {
    "question": "What happens when a processor encounters a 'Branch' instruction in a pipeline?",
    "options": ["It speeds up", "It might have to flush the pipeline if the guess was wrong", "It shuts down", "It ignores the instruction"],
    "correct": 1,
    "explanation": "Branching makes it hard to know which instruction is next. If the 'Branch Predictor' guesses wrong, the work already in the pipeline must be thrown away (stalled)."
  },
  {
    "question": "Which of the following is part of a processor's 'State'?",
    "options": ["The color of the case", "The current values in its registers", "The amount of free disk space", "The monitor's resolution"],
    "correct": 1,
    "explanation": "The state includes the Program Counter, stack pointer, and all general-purpose registers that define exactly what the CPU is doing at a moment in time."
  },
  {
    "question": "What is 'Fine-Grained' parallelism?",
    "options": ["Breaking a task into very small pieces with frequent synchronization", "Running one program per month", "Connecting two continents via fiber optics", "Using only one core"],
    "correct": 0,
    "explanation": "Fine-grained parallelism involves frequent communication between threads, such as parallelizing individual loops."
  },
  {
    "question": "In a multicore system, 'Arbitration' is needed for:",
    "options": ["Choosing a wallpaper", "Deciding which core gets to access the shared bus/memory", "Naming the computer", "Updating the time"],
    "correct": 1,
    "explanation": "Since only one core can use the memory bus at a time, an 'Arbiter' must decide which core gets access to prevent collisions."
  },
  {
    "question": "The concept of 'Abstraction Layers' in computers allows:",
    "options": ["Hardware to run without power", "Software to be written without knowing the exact hardware details", "Users to see the electrons moving", "The CPU to store data permanently"],
    "correct": 1,
    "explanation": "Abstraction (like the OS or a programming language) lets developers write code that runs on many different types of CPUs."
  },
  {
    "question": "Which history era saw the birth of the 'Personal Computer' (PC)?",
    "options": ["1940s", "1950s", "1970s/80s", "2010s"],
    "correct": 2,
    "explanation": "The introduction of microprocessors in the 1970s led to affordable computers like the Altair, Apple II, and IBM PC."
  },
  {
    "question": "In Distributed Systems, what is 'Message Passing'?",
    "options": ["Handing a note to someone", "A mechanism for processes to communicate and synchronize by sending data packets", "Saving a file to a USB drive", "Printing a document"],
    "correct": 1,
    "explanation": "Message passing is the primary way nodes in a distributed system exchange information, using protocols like TCP/IP."
  },
  {
    "question": "What is 'Concurrency'?",
    "options": ["Two tasks running at the exact same nanosecond", "The management of multiple tasks that start, run, and complete in overlapping time periods", "Running a task twice", "Ending a task early"],
    "correct": 1,
    "explanation": "Concurrency is about *dealing* with multiple things at once (could be via context switching), while Parallelism is about *doing* multiple things at once."
  },
  {
    "question": "Which of these is a typical parallel programming challenge?",
    "options": ["The code is too short", "Race conditions", "The monitor is too bright", "Keyboard latency"],
    "correct": 1,
    "explanation": "Race conditions occur when two threads access shared data at the same time, leading to unpredictable results."
  },
  {
    "question": "What is 'System Throughput'?",
    "options": ["The speed of one thread", "The total number of jobs completed by the system per unit of time", "The time a job spends in the queue", "The size of the hard drive"],
    "correct": 1,
    "explanation": "Parallelism's biggest win is often in throughput—being able to process 1,000 user requests per second instead of just 10."
  },
  {
    "question": "The 'Fetch-Execute' cycle is the fundamental operation of:",
    "options": ["A hard drive", "A CPU", "A monitor", "A network switch"],
    "correct": 1,
    "explanation": "The CPU repeatedly fetches an instruction from memory, decodes it, and executes it in a continuous cycle."
  },
  {
    "question": "Which of the following is an example of 'Functional Parallelism'?",
    "options": ["A search engine searching 1000 different pages", "A car assembly line where different robots do different tasks simultaneously", "Adding two 100-element vectors", "Splitting an image into four quadrants"],
    "correct": 1,
    "explanation": "Functional parallelism is like an assembly line; different units perform different operations concurrently on the 'stream' of work."
  },
  {
    "question": "Which architecture uses 'Large/Variable' instructions?",
    "options": ["RISC", "CISC", "SIMD", "SISD"],
    "correct": 1,
    "explanation": "CISC instructions can be as small as 1 byte or as large as 15 bytes, depending on the complexity of the operation."
  },
  {
    "question": "In a multicore CPU, 'L1 Cache' is usually:",
    "options": ["Shared among all cores", "Private to each individual core", "Located on the motherboard", "Used for long-term storage"],
    "correct": 1,
    "explanation": "L1 (Level 1) cache is the fastest and smallest cache, and it is almost always built directly into each individual core."
  },
  {
    "question": "What is 'Distributed Computing its Limitations'—one major issue is:",
    "options": ["Lack of power", "The 'CAP' theorem (Consistency, Availability, Partition tolerance)", "Too much speed", "Only one user"],
    "correct": 1,
    "explanation": "The CAP theorem states that a distributed system can only provide two out of three: Consistency, Availability, and Partition tolerance."
  },
  {
    "question": "Which generation of computers used 'Transistors'?",
    "options": ["1st", "2nd", "3rd", "4th"],
    "correct": 1,
    "explanation": "Transistors replaced vacuum tubes in the 2nd generation, making computers much more reliable and energy-efficient."
  },
  {
    "question": "What is 'Load Balancing'?",
    "options": ["Making the computer lighter", "Ensuring all processors have an equal amount of work", "Checking the battery level", "Measuring the CPU temperature"],
    "correct": 1,
    "explanation": "Good load balancing is critical in parallel systems to ensure no core is sitting idle while others are overloaded."
  },
  {
    "question": "The 'Instruction Register' (IR) holds:",
    "options": ["The address of the next instruction", "The instruction currently being executed", "The result of the last math operation", "The user's password"],
    "correct": 1,
    "explanation": "Once an instruction is fetched from memory, it is placed in the IR so the Control Unit can decode it."
  },
  {
    "question": "In a distributed system, a 'Remote Procedure Call' (RPC) allows:",
    "options": ["A program to call a function on a different computer", "A user to turn off a computer remotely", "A computer to run without a CPU", "The keyboard to be wireless"],
    "correct": 0,
    "explanation": "RPC is a protocol that makes calling a function on a remote server look like calling a local function in the code."
  },
  {
    "question": "Which of these is a benefit of Parallel Computing for scientific research?",
    "options": ["Smaller spreadsheets", "Ability to run complex simulations (e.g., climate, molecular) in a reasonable time", "Less need for math", "Cheaper monitors"],
    "correct": 1,
    "explanation": "Some simulations would take years to run on a single CPU. Parallel supercomputers can finish them in days or hours."
  },
  {
    "question": "What is 'Data Exchange' in parallel systems?",
    "options": ["Trading hardware with a friend", "The process of moving data between different processors or nodes", "Changing the system's language", "Formatting a hard drive"],
    "correct": 1,
    "explanation": "Whether through shared memory or message passing, processors must 'exchange' data to work together on a single problem."
  },
  {
    "question": "In Flynn's Taxonomy, which is used for 'Redundant' fault-tolerant computing?",
    "options": ["SISD", "SIMD", "MISD", "MIMD"],
    "correct": 2,
    "explanation": "MISD (Multiple Instruction, Single Data) is used in mission-critical systems where multiple different programs process the same data to cross-check results."
  },
  {
    "question": "Which of these is a key characteristic of 'Distributed Computing'?",
    "options": ["Shared clock", "Lack of shared memory", "Single OS control", "Wired connection only"],
    "correct": 1,
    "explanation": "Distributed systems are defined by the fact that nodes do *not* share memory; they communicate solely through the network."
  },
  {
    "question": "What is 'Instruction Fetch'?",
    "options": ["Executing a command", "Reading a command from memory into the CPU", "Saving data to disk", "Printing a page"],
    "correct": 1,
    "explanation": "The first step of the CPU cycle is to 'fetch' the next bit of code from the RAM."
  },
  {
    "question": "A 'Heterogeneous' multicore chip might contain:",
    "options": ["Only identical cores", "Both high-performance and high-efficiency cores (e.g., ARM big.LITTLE)", "No cache", "Only one register"],
    "correct": 1,
    "explanation": "Heterogeneous chips mix different core types to balance performance and battery life, common in modern smartphones."
  },
  {
    "question": "In the history of computers, the 'ENIAC' was:",
    "options": ["The first microprocessor", "A massive first-generation computer using vacuum tubes", "The first Apple computer", "A type of transistor"],
    "correct": 1,
    "explanation": "The ENIAC (Electronic Numerical Integrator and Computer) was one of the earliest general-purpose electronic digital computers."
  },
  {
    "question": "Which type of parallelism involves executing different parts of the same program on different CPUs?",
    "options": ["Control Parallelism", "Data Parallelism", "Input Parallelism", "Memory Parallelism"],
    "correct": 0,
    "explanation": "Control parallelism (or task parallelism) focuses on the flow of control, running different code sections concurrently."
  },
  {
    "question": "What is 'Cache Contention' in a multicore system?",
    "options": ["The cache is too large", "Multiple cores fighting to access or update the same cache line", "The cache is too slow", "The cache is empty"],
    "correct": 1,
    "explanation": "When cores frequently access/modify the same memory, they compete for the cache, which can slow down the entire system."
  },
  {
    "question": "A 'Race Condition' occurs when:",
    "options": ["Two threads run on different CPUs", "The output depends on the sequence or timing of uncontrollable events", "The CPU clock speed is too high", "A process finishes faster than expected"],
    "correct": 1,
    "explanation": "A race condition happens when multiple threads access and manipulate shared data concurrently, and the final outcome depends on the specific order in which the access takes place."
  },
  {
    "question": "Which of the following is a requirement for a solution to the 'Critical Section' problem?",
    "options": ["Mutual Exclusion", "Progress", "Bounded Waiting", "All of the above"],
    "correct": 3,
    "explanation": "A valid solution must ensure only one process is in the section (Mutual Exclusion), processes not in the section don't block others (Progress), and no process waits forever (Bounded Waiting)."
  },
  {
    "question": "A 'Binary Semaphore' is functionally most similar to a:",
    "options": ["Barrier", "Spinlock", "Mutex", "Pipe"],
    "correct": 2,
    "explanation": "A binary semaphore has a value of either 0 or 1, much like a Mutex, and is used to provide mutual exclusion for a single resource."
  },
  {
    "question": "In a 'Deadlock' situation, which condition refers to a process holding at least one resource and waiting to acquire additional resources held by others?",
    "options": ["Mutual Exclusion", "Hold and Wait", "No Preemption", "Circular Wait"],
    "correct": 1,
    "explanation": "This is one of Coffman's four conditions; a process must already possess a resource while requesting another that is currently unavailable."
  },
  {
    "question": "What is the primary difference between a 'Spinlock' and a 'Mutex'?",
    "options": ["Spinlocks use more memory", "Spinlocks keep the CPU busy-waiting, while Mutexes put the thread to sleep", "Mutexes are only for single-core systems", "Spinlocks cannot prevent race conditions"],
    "correct": 1,
    "explanation": "A spinlock 'spins' in a loop checking for the lock, which avoids the overhead of a context switch but wastes CPU cycles if the wait is long."
  },
  {
    "question": "Numerical: A program takes 100 seconds to run on a single processor. If 80% of the program can be parallelized, what is the speedup on 4 processors according to Amdahl's Law?",
    "options": ["1.5x", "2.5x", "3.2x", "4.0x"],
    "correct": 1,
    "explanation": "Speedup = $1 / (S + (P/N))$. Here $S=0.2$ (serial), $P=0.8$ (parallel), $N=4$. Speedup = $1 / (0.2 + 0.8/4) = 1 / (0.2 + 0.2) = 1 / 0.4 = 2.5$."
  },
  {
    "question": "What does the 'Dining Philosophers' problem illustrate?",
    "options": ["Memory fragmentation", "Resource allocation and potential for deadlock", "Network latency", "Processor scheduling"],
    "correct": 1,
    "explanation": "It shows the challenges of avoiding deadlock and starvation when multiple processes compete for a limited set of shared resources."
  },
  {
    "question": "The 'Bakery Algorithm' is used to solve the critical section problem for:",
    "options": ["Only 2 processes", "N processes", "Distributed systems only", "Single-core systems only"],
    "correct": 1,
    "explanation": "Lamport's Bakery Algorithm is a classic synchronization method that handles the critical section problem for any number of processes (N)."
  },
  {
    "question": "Which term describes a situation where a process is ready to run but is consistently passed over by the scheduler?",
    "options": ["Deadlock", "Livelock", "Starvation", "Race Condition"],
    "correct": 2,
    "explanation": "Starvation occurs when a process is perpetually denied the resources (like CPU time) it needs to make progress."
  },
  {
    "question": "In 'Message Passing', if the sender is blocked until the message is received, the communication is:",
    "options": ["Asynchronous", "Synchronous", "Buffered", "Direct"],
    "correct": 1,
    "explanation": "Synchronous communication (or blocking) requires both the sender and receiver to 'meet' at the transfer point before either can continue."
  },
  {
    "question": "What is 'False Sharing'?",
    "options": ["Using someone else's login", "Cores updating different variables that happen to be on the same cache line", "Copying data without permission", "Threads sharing a single stack"],
    "correct": 1,
    "explanation": "Even if variables are independent, if they share a cache line, an update by one core forces the other core to refresh its cache, hurting performance."
  },
  {
    "question": "Numerical: According to Gustafson's Law, if the serial part of a program is 10% and we use 10 processors, what is the scaled speedup?",
    "options": ["1.9x", "5.5x", "9.1x", "10.0x"],
    "correct": 2,
    "explanation": "Scaled Speedup = $N + (1-N) \times S$. Here $N=10$, $S=0.1$. Speedup = $10 + (1-10) \times 0.1 = 10 + (-0.9) = 9.1$."
  },
  {
    "question": "Which synchronization primitive maintains an integer counter to control access to a pool of resources?",
    "options": ["Mutex", "Counting Semaphore", "Condition Variable", "Barrier"],
    "correct": 1,
    "explanation": "A counting semaphore can represent multiple units of a resource (e.g., 5 printers), decrementing when a unit is taken and incrementing when released."
  },
  {
    "question": "A 'Monitor' in synchronization is:",
    "options": ["A hardware screen", "A high-level abstraction that bundles data and synchronization methods together", "A person who watches the servers", "A type of network cable"],
    "correct": 1,
    "explanation": "Monitors are programming language constructs that automatically handle locks, ensuring only one thread can execute a monitor's procedure at a time."
  },
  {
    "question": "What is the primary cause of 'Deadlock' in a system?",
    "options": ["Lack of RAM", "Circular dependencies for non-preemptible resources", "CPU overheating", "Network disconnects"],
    "correct": 1,
    "explanation": "Deadlocks happen when processes form a cycle where each holds a resource the next one needs."
  },
  {
    "question": "Which of these is a way to 'Prevent' deadlock by attacking the 'No Preemption' condition?",
    "options": ["Forcing a process to release its resources if it cannot acquire new ones", "Requesting all resources at once", "Ordering resources numerically", "Using more processors"],
    "correct": 0,
    "explanation": "By allowing the system to take away (preempt) resources from a waiting process, you break the deadlock cycle."
  },
  {
    "question": "In OpenMP, the 'Critical' directive ensures:",
    "options": ["The code runs as fast as possible", "Only one thread executes the enclosed block at a time", "The code is checked for errors", "All threads stop immediately"],
    "correct": 1,
    "explanation": "The `#pragma omp critical` directive acts like a global lock for that specific block of code."
  },
  {
    "question": "What is 'Memory Bandwidth'?",
    "options": ["The total storage size of the RAM", "The rate at which data can be read from or written to memory", "The distance between the CPU and RAM", "The cost of the memory modules"],
    "correct": 1,
    "explanation": "Memory bandwidth (GB/s) is a common bottleneck in parallel systems when many cores try to pull data from main memory at once."
  },
  {
    "question": "Numerical: A system has 10 processors. A task has a serial fraction of 50%. What is the maximum speedup possible according to Amdahl's Law?",
    "options": ["2.0x", "1.81x", "5.0x", "10.0x"],
    "correct": 1,
    "explanation": "Speedup = $1 / (0.5 + 0.5/10) = 1 / (0.5 + 0.05) = 1 / 0.55 \approx 1.81$."
  },
  {
    "question": "What does a 'Barrier' synchronization do?",
    "options": ["It prevents any thread from starting", "It forces all threads to wait until everyone reaches that point", "It blocks network traffic", "It speeds up the CPU clock"],
    "correct": 1,
    "explanation": "Barriers are used to ensure phase-based parallel algorithms finish one step (like a calculation) before any thread moves to the next step."
  },
  {
    "question": "In 'Message Passing Interface' (MPI), what is a 'Communicator'?",
    "options": ["A hardware router", "A group of processes that can send messages to each other", "A phone line", "A special type of thread"],
    "correct": 1,
    "explanation": "In MPI, `MPI_COMM_WORLD` is the default communicator representing all processes in the job."
  },
  {
    "question": "Which of the following describes 'Livelock'?",
    "options": ["A system that is completely frozen", "Processes change their state in response to each other but make no real progress", "A process that finishes early", "A high-priority process taking all resources"],
    "correct": 1,
    "explanation": "Livelock is like two people in a hallway trying to pass each other but both stepping to the same side repeatedly; they are active, but 'stuck'."
  },
  {
    "question": "A 'Atomic' operation is one that:",
    "options": ["Uses nuclear energy", "Is guaranteed to execute as a single, uninterruptible unit", "Is very fast", "Can be split into many small parts"],
    "correct": 1,
    "explanation": "Atomic operations (like 'compare-and-swap') are crucial for building lock-free data structures because they cannot be interrupted mid-way by another thread."
  },
  {
    "question": "The 'Test-and-Set' instruction is used at the hardware level to implement:",
    "options": ["Virtual memory", "Locks and Semaphores", "File systems", "Display drivers"],
    "correct": 1,
    "explanation": "Hardware-level atomic instructions like Test-and-Set allow software to build higher-level synchronization primitives efficiently."
  },
  {
    "question": "Scenario: Multiple threads are incrementing a shared counter 'i++'. After 1000 increments each by 2 threads, the total is 1450 instead of 2000. Why?",
    "options": ["The CPU is broken", "A race condition occurred during the read-modify-write cycle", "The RAM is too slow", "Deadlock occurred"],
    "correct": 1,
    "explanation": "'i++' is not atomic. If both threads read 'i=10', both increment to 11, and both write 11 back, one increment is 'lost'."
  },
  {
    "question": "What is the primary benefit of Gustafson's Law over Amdahl's Law?",
    "options": ["It is older", "It accounts for the fact that we solve larger problems when given more processors", "It is easier to calculate", "It only applies to single-core systems"],
    "correct": 1,
    "explanation": "Gustafson's Law (Scaled Speedup) provides a more optimistic and realistic view for modern high-performance computing where problem sizes are not fixed."
  },
  {
    "question": "Which technique ensures that a process will eventually enter its critical section by keeping track of its 'waiting' status?",
    "options": ["Aging", "Bounded Waiting", "Paging", "Pipelining"],
    "correct": 1,
    "explanation": "Bounded waiting is a formal requirement that prevents a process from being 'starved' by other processes repeatedly entering the critical section."
  },
  {
    "question": "What is 'Cache Incoherence'?",
    "options": ["The cache is too hot", "Different cores have different versions of the same data in their private caches", "The cache is disconnected", "The cache has no data"],
    "correct": 1,
    "explanation": "In multicore systems, if Core A modifies a variable, Core B might still have the old value in its own cache. Cache coherence protocols (like MESI) solve this."
  },
  {
    "question": "Numerical: If you have 100 processors and 5% of the code is serial, what is the maximum speedup according to Amdahl?",
    "options": ["5x", "16.7x", "20x", "95x"],
    "correct": 1,
    "explanation": "Speedup = $1 / (0.05 + 0.95/100) = 1 / (0.05 + 0.0095) = 1 / 0.0595 \approx 16.8$."
  },
  {
    "question": "A 'Non-blocking' algorithm is one where:",
    "options": ["It never uses the network", "Failure of one thread does not stop others from making progress", "The code is very long", "It only runs on one core"],
    "correct": 1,
    "explanation": "Non-blocking (or lock-free) algorithms use atomic operations instead of traditional locks to avoid issues like priority inversion and deadlock."
  },
  {
    "question": "What does 'IPC' stand for in parallel and distributed systems?",
    "options": ["Internal Process Control", "Inter-Process Communication", "Instruction Per Clock", "Integrated Power Circuit"],
    "correct": 1,
    "explanation": "IPC refers to the mechanisms provided by the OS (like pipes, signals, shared memory) that allow processes to talk to each other."
  },
  {
    "question": "Which of these is a limitation of the 'Amdahl's Law' model?",
    "options": ["It assumes perfect load balancing and zero communication overhead", "It is too complex", "It only works for 2 cores", "It assumes RAM is infinite"],
    "correct": 0,
    "explanation": "Amdahl's Law is a 'best-case' theoretical limit. In reality, speedup is often lower due to the time spent communicating between cores."
  },
  {
    "question": "In synchronization, what is a 'Lost Wakeup' problem?",
    "options": ["The computer won't boot", "A signal is sent to a thread before it has started waiting for it", "The CPU enters sleep mode", "The user forgets their password"],
    "correct": 1,
    "explanation": "If a thread isn't 'listening' when a semaphore signal or condition variable broadcast is sent, it might wait forever, even though the event it's waiting for already happened."
  },
  {
    "question": "What is the purpose of 'Spin-then-block' locks?",
    "options": ["To waste time", "To get the performance of a spinlock for short waits and the efficiency of a mutex for long waits", "To confuse the compiler", "To increase heat"],
    "correct": 1,
    "explanation": "These hybrid locks spin for a few microseconds, and if the lock isn't free, they put the thread to sleep, combining the best of both worlds."
  },
  {
    "question": "Numerical: If the parallel execution time on 10 processors is 20 seconds, and the serial time is 100 seconds, what is the efficiency?",
    "options": ["0.2", "0.5", "0.8", "1.0"],
    "correct": 1,
    "explanation": "Speedup = $100 / 20 = 5$. Efficiency = $Speedup / N = 5 / 10 = 0.5$ (50%)."
  },
  {
    "question": "Which of the following is true about 'Deadlock Avoidance' (e.g., Banker's Algorithm)?",
    "options": ["It detects deadlocks after they happen", "It requires the system to know advance information about resource needs", "It restarts the computer", "It only works on Windows"],
    "correct": 1,
    "explanation": "Avoidance algorithms examine every resource request and only grant it if the system will remain in a 'safe state' where a deadlock is impossible."
  },
  {
    "question": "In Distributed Systems, what is 'Global State'?",
    "options": ["The state of the world", "The union of the states of all individual processes and communication channels", "The operating system version", "The time on the server"],
    "correct": 1,
    "explanation": "Determining the global state is difficult because there is no global clock and messages take time to travel."
  },
  {
    "question": "Which 'Numerical' metric measures the amount of work done per processor?",
    "options": ["Speedup", "Efficiency", "Latency", "Bandwidth"],
    "correct": 1,
    "explanation": "Efficiency measures how effectively the hardware is being used. 1.0 means each processor is contributing fully to the speedup."
  },
  {
    "question": "What is 'Priority Inversion'?",
    "options": ["Making a process faster", "A high-priority process being blocked by a low-priority process holding a lock", "Reversing the order of instructions", "Turning off the CPU"],
    "correct": 1,
    "explanation": "This happens when a low-priority thread holds a lock needed by a high-priority thread, while a medium-priority thread keeps the low-priority one from running."
  },
  {
    "question": "Which of these is a 'Trick' question: Does Amdahl's Law apply to Distributed systems?",
    "options": ["No, only multicore", "Yes, it applies to any system with a serial bottleneck", "Only if the network is fiber optic", "Only for 64-bit systems"],
    "correct": 1,
    "explanation": "Amdahl's law is a universal mathematical limit. Whether the parallelism is inside one chip or across a 1,000-node cluster, the serial part limits speedup."
  },
  {
    "question": "In the context of 'Parallel I/O', what is the main bottleneck?",
    "options": ["The keyboard", "The sequential nature of traditional file systems and disk hardware", "The monitor", "The power cable"],
    "correct": 1,
    "explanation": "While we can have many CPUs, they often fight to access a single slow hard drive, making I/O a major serial bottleneck."
  },
  {
    "question": "What is 'Work-stealing' in a task-parallel scheduler?",
    "options": ["A security breach", "An idle processor taking tasks from the queue of a busy processor", "Deleting code", "One core shutting down another"],
    "correct": 1,
    "explanation": "Work-stealing is a highly efficient way to balance load dynamically across cores."
  },
  {
    "question": "Which primitive allows a thread to wait until a specific logical condition becomes true?",
    "options": ["Mutex", "Condition Variable", "Semaphore", "Spinlock"],
    "correct": 1,
    "explanation": "Condition variables are used in conjunction with a mutex to allow threads to sleep until a specific state (like 'queue is not empty') is reached."
  },
  {
    "question": "Numerical: A serial algorithm takes 60 mins. On 6 cores, it takes 15 mins. What is the Speedup?",
    "options": ["2x", "4x", "6x", "10x"],
    "correct": 1,
    "explanation": "Speedup = $Serial Time / Parallel Time = 60 / 15 = 4$."
  },
  {
    "question": "What is 'Granularity' in parallel computing?",
    "options": ["The size of the computer", "The ratio of computation to communication", "The number of bits in a word", "The clock speed"],
    "correct": 1,
    "explanation": "Fine-grained means small tasks with lots of talking; coarse-grained means large tasks with very little talking."
  },
  {
    "question": "The 'Peterson's Solution' is used for:",
    "options": ["Distributed databases", "Mutual exclusion between two processes", "Sorting numbers", "Graphics rendering"],
    "correct": 1,
    "explanation": "Peterson's is a software-based solution for mutual exclusion between two processes, using shared variables."
  },
  {
    "question": "In 'Distributed Computing', the term 'Scalability' specifically refers to:",
    "options": ["Making the font larger", "The ability to handle growing amounts of work by adding nodes", "The height of the server rack", "The thickness of the wires"],
    "correct": 1,
    "explanation": "A truly scalable distributed system can maintain performance as you add more machines and more data."
  },
  {
    "question": "What is the 'Strict Alternation' approach in synchronization?",
    "options": ["Running two programs at once", "Forcing two processes to take turns exactly, even if one doesn't need the resource", "Changing the OS every day", "Alternating between CPU and GPU"],
    "correct": 1,
    "explanation": "Strict alternation is a poor solution because if one process is much slower, it forces the faster one to wait even when the resource is free."
  },
  {
    "question": "Numerical: If Efficiency is 0.8 and you have 10 processors, what is the Speedup?",
    "options": ["0.08", "8.0", "12.5", "80.0"],
    "correct": 1,
    "explanation": "$Efficiency = Speedup / N \rightarrow Speedup = Efficiency \times N = 0.8 \times 10 = 8$."
  },
  {
    "question": "What is the function of an 'Interrupt' in a processor?",
    "options": ["To shut down the computer", "To signal the CPU that an event needs immediate attention", "To increase the clock speed", "To delete a file"],
    "correct": 1,
    "explanation": "Interrupts allow hardware (like a keyboard or network card) to get the CPU's attention without the CPU having to check (poll) constantly."
  },
  {
    "question": "Which concept describes a variable that can be accessed by all threads in a process?",
    "options": ["Local variable", "Shared variable", "Static variable", "Stack variable"],
    "correct": 1,
    "explanation": "Shared variables are the primary way threads communicate in a shared-memory system, but they must be protected by locks."
  },
  {
    "question": "In 'Deadlock Detection', what happens once a deadlock is found?",
    "options": ["The system explodes", "The system must recover by terminating a process or preempting resources", "The user is asked for a password", "Nothing happens"],
    "correct": 1,
    "explanation": "Detection algorithms identify the cycle; recovery algorithms break it, often by killing the youngest process in the cycle."
  },
  {
    "question": "What is 'Throughput' vs 'Latency'?",
    "options": ["They are the same", "Throughput is total work per second; Latency is time for a single task", "Throughput is speed; Latency is weight", "Throughput is memory; Latency is CPU"],
    "correct": 1,
    "explanation": "Parallelism increases throughput (processing more total data) but often increases latency (the time it takes for one specific byte to travel)."
  },
  {
    "question": "Which of the following is a 'Hardware' synchronization primitive?",
    "options": ["Semaphores", "Mutexes", "Compare-and-Swap (CAS)", "Monitors"],
    "correct": 2,
    "explanation": "CAS is an atomic instruction provided directly by the CPU hardware to support high-level software locks."
  },
  {
    "question": "In 'Gustafson's Law', the time of the serial part is considered:",
    "options": ["Increasing with processors", "Decreasing with processors", "Constant relative to the total time on one processor", "Non-existent"],
    "correct": 2,
    "explanation": "Gustafson's Law assumes the serial part is a fixed amount of time, no matter how much the parallel part grows."
  },
  {
    "question": "A 'Spinlock' is most harmful in which environment?",
    "options": ["Multicore with short waits", "Single-core systems", "Supercomputers", "GPU clusters"],
    "correct": 1,
    "explanation": "On a single-core system, if a thread is 'spinning' for a lock held by another thread, the thread holding the lock can't even run to release it!"
  },
  {
    "question": "Which IPC method involves a dedicated region of memory accessible by multiple processes?",
    "options": ["Pipes", "Shared Memory", "Sockets", "Signals"],
    "correct": 1,
    "explanation": "Shared memory is the fastest IPC because the OS stays out of the way once the memory is mapped to both processes."
  },
  {
    "question": "What is 'Busy Waiting'?",
    "options": ["Waiting for the bus", "A thread repeatedly checking a condition in a loop, consuming CPU", "The computer is processing a heavy task", "A process is in the background"],
    "correct": 1,
    "explanation": "Busy waiting is inefficient for long waits because it keeps a CPU core at 100% usage just to check a variable."
  },
  {
    "question": "Which of these is a 'Trick' Statement: A system with zero serial code has a speedup of N on N processors.",
    "options": ["Always true", "False, because overhead like communication still exists", "True only on CISC", "True only on RISC"],
    "correct": 1,
    "explanation": "In theory (Amdahl), it is true. In reality, the time it takes to send data between cores (overhead) makes the speedup less than N."
  },
  {
    "question": "The 'Wait' operation on a semaphore:",
    "options": ["Increments the value", "Decrements the value and blocks if it's less than zero", "Sets the value to 100", "Deletes the semaphore"],
    "correct": 1,
    "explanation": "Wait (often called P or down) 'takes' a resource. If no resources are left, the thread must wait."
  },
  {
    "question": "What is 'Load Imbalance'?",
    "options": ["The laptop is tilted", "One core is doing 90% of the work while others are idle", "The RAM is full", "The network is slow"],
    "correct": 1,
    "explanation": "Load imbalance ruins efficiency because the total parallel time is limited by the slowest, most-overworked core."
  },
  {
    "question": "A 'Semaphore' with a value of 5 means:",
    "options": ["5 threads are deadlocked", "5 units of a resource are available", "The system has 5 CPUs", "The code is 5 lines long"],
    "correct": 1,
    "explanation": "A counting semaphore starts at the number of available resource units and drops toward zero as they are consumed."
  },
  {
    "question": "In 'Deadlock Recovery', terminating all deadlocked processes is:",
    "options": ["The most efficient way", "Expensive but simple", "Impossible", "The only way"],
    "correct": 1,
    "explanation": "While it definitely breaks the deadlock, you lose all the work done by those processes up to that point."
  },
  {
    "question": "Which concept involves splitting data across different memory modules to increase bandwidth?",
    "options": ["Caching", "Interleaving", "Paging", "Swapping"],
    "correct": 1,
    "explanation": "Memory interleaving spreads data across multiple banks so that the CPU can read from one while another is preparing for the next request."
  },
  {
    "question": "What is 'Amdahl's Law' primarily used for?",
    "options": ["Predicting hardware costs", "Estimating the maximum speedup of a task with a fixed size", "Calculating network speed", "Designing more cores"],
    "correct": 1,
    "explanation": "It tells you that no matter how many cores you have, your speed is fundamentally capped by the parts of the code you can't parallelize."
  },
  {
    "question": "In a multicore era, 'Clock Speed' has plateaued because:",
    "options": ["We don't need more speed", "High clock speeds cause excessive power density and heat", "RAM can't keep up", "Software is too slow"],
    "correct": 1,
    "explanation": "Power scales roughly with the cube of the frequency. Increasing clock speed slightly requires a massive increase in power and cooling."
  },
  {
    "question": "Which of these is a 'Synchronization' overhead?",
    "options": ["The time spent calculating a sum", "The time threads spend waiting at a barrier", "The time spent reading from a local disk", "The time spent booting the OS"],
    "correct": 1,
    "explanation": "Any time a CPU core is waiting for another core or for a lock, that is 'overhead' that reduces the efficiency of the parallel system."
  },
  {
    "question": "Numerical: On 10 processors, a task takes 12 seconds. On 1 processor, it took 100 seconds. What is the efficiency?",
    "options": ["0.12", "0.83", "1.2", "8.3"],
    "correct": 1,
    "explanation": "Speedup = $100 / 12 = 8.33$. Efficiency = $8.33 / 10 = 0.833$ (83.3%)."
  },
  {
    "question": "What is 'Producer-Consumer' problem?",
    "options": ["A problem with buying computers", "Synchronization between one process creating data and another using it via a shared buffer", "A deadlock between two users", "A network error"],
    "correct": 1,
    "explanation": "It is a classic concurrency problem where the producer must not add data to a full buffer and the consumer must not remove data from an empty one."
  },
  {
    "question": "In 'Mutual Exclusion', what does the 'Mutual' part mean?",
    "options": ["Both can enter at once", "They agree to never enter", "Exclusion applies to both (only one at a time)", "The code is shared"],
    "correct": 2,
    "explanation": "Mutual exclusion means the threads 'mutually exclude' each other from the critical section."
  },
  {
    "question": "Which system call is used in C to create a new thread using the POSIX library?",
    "options": ["fork()", "pthread_create()", "thread_new()", "spawn()"],
    "correct": 1,
    "explanation": "`pthread_create` is the standard way to launch a new thread within an existing process in Linux/Unix."
  },
  {
    "question": "What is a 'Safe State' in the Banker's Algorithm?",
    "options": ["The computer is turned off", "A state where the system can allocate resources to each process in some order and still avoid deadlock", "The RAM is empty", "The user is logged out"],
    "correct": 1,
    "explanation": "A safe state means there is at least one sequence of process completions that won't result in a circular wait."
  },
  {
    "question": "Which 'Numerical' metric is calculated as $T_1 / (n \times T_n)$?",
    "options": ["Speedup", "Efficiency", "Overhead", "Redundancy"],
    "correct": 1,
    "explanation": "This is the formula for Efficiency, where $T_1$ is serial time and $T_n$ is parallel time on $n$ processors."
  },
  {
    "question": "What is 'Pipelining' in a processor?",
    "options": ["Water cooling", "Executing multiple instructions in different stages concurrently", "Using multiple CPUs", "A way to increase memory size"],
    "correct": 1,
    "explanation": "Pipelining is a form of instruction-level parallelism where the CPU works on different stages (Fetch, Decode, etc.) of different instructions at once."
  },
  {
    "question": "A 'Spinlock' is often called a 'Busy-wait lock' because:",
    "options": ["It is very busy", "It keeps the CPU running a loop while waiting", "It only works during business hours", "It makes the user wait"],
    "correct": 1,
    "explanation": "Since it doesn't yield the CPU, it keeps the core 'busy' doing nothing but checking the lock's status."
  },
  {
    "question": "In 'Distributed Computing', what is a 'Communication Limitation'?",
    "options": ["No one is talking", "The speed of light (latency) and network congestion", "The color of the cables", "The price of the router"],
    "correct": 1,
    "explanation": "Data cannot travel faster than the speed of light. In a worldwide distributed system, this physical latency is a fundamental limit."
  },
  {
    "question": "What is 'Data Contention'?",
    "options": ["Liking the data", "Multiple processors trying to access/modify the same data at the same time", "Deleting data", "The data is too large"],
    "correct": 1,
    "explanation": "Contention occurs when threads 'fight' over a piece of data, leading to serialized access and slowing down the parallel performance."
  },
  {
    "question": "Numerical: A task has 25% serial part. What is the maximum speedup on 4 processors?",
    "options": ["1x", "2.28x", "4x", "16x"],
    "correct": 1,
    "explanation": "Speedup = $1 / (0.25 + 0.75/4) = 1 / (0.25 + 0.1875) = 1 / 0.4375 \approx 2.28$."
  },
  {
    "question": "Which generation of OS introduced 'Multiprogramming'?",
    "options": ["1st", "2nd", "3rd", "4th"],
    "correct": 2,
    "explanation": "Third-generation OS (like OS/360) used multiprogramming to keep the CPU busy by switching between several jobs in memory."
  },
  {
    "question": "What is 'Atomic Swapping'?",
    "options": ["Trading atoms", "An uninterruptible exchange of two values in memory", "A fast way to delete a file", "Changing the CPU"],
    "correct": 1,
    "explanation": "Atomic swaps are used to implement lock-free queues and stacks."
  },
  {
    "question": "In 'Deadlock Prevention', ordering all resources (e.g., must acquire Lock A before Lock B) breaks which condition?",
    "options": ["Mutual Exclusion", "No Preemption", "Circular Wait", "Hold and Wait"],
    "correct": 2,
    "explanation": "If every thread follows the same order, you can never form a cycle, thus preventing circular wait."
  },
  {
    "question": "Which of these is a typical 'Massively Parallel' system?",
    "options": ["A laptop", "A GPU with thousands of small cores", "A router", "A smartphone"],
    "correct": 1,
    "explanation": "GPUs are the most common example of massively parallel architectures, designed to handle thousands of threads at once."
  },
  {
    "question": "What is 'Message Passing' latency?",
    "options": ["The size of the message", "The time from when a send is initiated to when the data is received", "The number of messages per second", "The cost of the network"],
    "correct": 1,
    "explanation": "Latency is the 'start-up cost' of sending a message. In many systems, sending many small messages is much slower than sending one large one due to this latency."
  },
  {
    "question": "In 'OpenMP', what does the 'private' clause do?",
    "options": ["Makes the code secret", "Gives each thread its own separate copy of a variable", "Blocks other users from the system", "Deletes the variable after use"],
    "correct": 1,
    "explanation": "By default, variables are shared. Use `private` to ensure threads don't overwrite each other's data (e.g., loop counters)."
  },
  {
    "question": "Numerical: Gustafson's Law. If a program runs for 100 seconds on 64 processors, and 5 seconds of that is serial, what is the scaled speedup?",
    "options": ["5x", "60.8x", "64x", "100x"],
    "correct": 1,
    "explanation": "Using the formula $S_{scaled} = N + (1-N) \times s$, where $s$ is the serial fraction *of the parallel execution*. $s = 5/100 = 0.05$. Speedup = $64 + (1-64) \times 0.05 = 64 - 3.15 = 60.85$."
  },
  {
    "question": "Which component of a 'Multicore Chip' is shared by all cores to maintain data consistency?",
    "options": ["L1 Cache", "Registers", "Last Level Cache (L3)", "Program Counter"],
    "correct": 2,
    "explanation": "The L3 cache is typically shared across all cores, acting as a bridge between the private L1/L2 caches and the main memory."
  },
  {
    "question": "What is a 'Livelock' scenario in network routing?",
    "options": ["A router breaks", "Two packets keep being redirected back and forth between two routers", "The network is too fast", "The cable is unplugged"],
    "correct": 1,
    "explanation": "The packets are 'active' and moving, but they are stuck in a loop and will never reach their destination."
  },
  {
    "question": "In the 'Critical Section', a process is allowed to:",
    "options": ["Access shared resources exclusively", "Turn off the OS", "Read-only access", "Sleep for hours"],
    "correct": 0,
    "explanation": "The critical section is the 'protected' zone where a thread has exclusive right to change shared data."
  },
  {
    "question": "Which of these is NOT a characteristic of 'Distributed Memory' systems?",
    "options": ["High scalability", "Explicit message passing", "Global address space for all CPUs", "Each node has its own OS"],
    "correct": 2,
    "explanation": "Global address space is a feature of Shared Memory systems; in distributed systems, memory is private to each node."
  },
  {
    "question": "What is the 'Aging' technique used for in process scheduling?",
    "options": ["To retire old hardware", "To prevent starvation by increasing priority over time", "To make the UI look old", "To slow down fast processes"],
    "correct": 1,
    "explanation": "Aging ensures that even a low-priority task will eventually become high-priority enough to be executed."
  },
  {
    "question": "In 'Amhal's Law', if the number of processors $N$ goes to infinity, what happens to the speedup?",
    "options": ["It goes to infinity", "It is limited by $1 / SerialFraction$", "It becomes zero", "It stays at $N$"],
    "correct": 1,
    "explanation": "This is the 'law of diminishing returns'. If 10% is serial, you can never get more than a 10x speedup, even with a billion cores."
  },
  {
    "question": "What is 'Communication-to-Computation Ratio'?",
    "options": ["The price of the PC", "The amount of time spent moving data vs. processing it", "The number of CPUs vs. GPUs", "The monitor resolution"],
    "correct": 1,
    "explanation": "If a parallel program spends more time 'talking' than 'doing', it will have very low efficiency."
  },
  {
    "question": "Which synchronization problem involves a database where many can read but only one can write?",
    "options": ["Dining Philosophers", "Readers-Writers Problem", "Sleeping Barber", "Producer-Consumer"],
    "correct": 1,
    "explanation": "The goal is to allow multiple concurrent readers (since they don't change data) but ensure a writer has exclusive access."
  },
  {
    "question": "A 'Spinlock' should be used only when:",
    "options": ["You have 1000 threads", "The critical section is very short (fewer cycles than a context switch)", "The computer is idle", "You are using a hard drive"],
    "correct": 1,
    "explanation": "If the wait is very short, it's faster to just 'spin' than to go through the heavy process of putting a thread to sleep and waking it up."
  },
  {
    "question": "In a distributed system, 'Partial Failure' means:",
    "options": ["The whole system crashes", "Some components fail while others continue to function", "The monitor is half-broken", "The data is half-deleted"],
    "correct": 1,
    "explanation": "This is a key challenge; the system must be robust enough to handle the loss of a few nodes without stopping the whole job."
  },
  {
    "question": "What is 'Memory Consistency'?",
    "options": ["The RAM is always the same size", "The rules that define the order in which memory updates become visible to other cores", "Deleting the cache", "Using the same brand of RAM"],
    "correct": 1,
    "explanation": "Consistency models (like Sequential Consistency) determine what value a core sees when it reads a shared variable that another core just wrote."
  },
  {
    "question": "Which of these is an example of 'Task Parallelism'?",
    "options": ["One thread handles user input, another handles graphics, and a third handles networking", "10 threads each calculating 1/10th of an array", "Running a single-threaded program twice", "Storing data on two different disks"],
    "correct": 0,
    "explanation": "Task parallelism is when different threads perform different types of work (tasks) at the same time."
  },
  {
    "question": "Numerical: A program has a speedup of 4 on 8 processors. What is the efficiency?",
    "options": ["0.25", "0.5", "1.0", "2.0"],
    "correct": 1,
    "explanation": "Efficiency = $4 / 8 = 0.5$."
  },
  {
    "question": "What is 'Barrier synchronization' typically used for?",
    "options": ["To stop a virus", "To ensure all processors have finished a loop before starting the next part of an algorithm", "To block a user", "To protect the kernel"],
    "correct": 1,
    "explanation": "Many parallel algorithms are 'iterative'. They need every core to finish 'Step 1' before anyone is allowed to touch data for 'Step 2'."
  },
  {
    "question": "In 'Flynn’s Taxonomy', which category represents modern clusters and multicore PCs?",
    "options": ["SISD", "SIMD", "MISD", "MIMD"],
    "correct": 3,
    "explanation": "MIMD (Multiple Instruction, Multiple Data) is the standard for most general-purpose parallel computers."
  },
  {
    "question": "Which OpenMP clause is used to prevent multiple threads from updating a shared variable simultaneously without the overhead of a full critical section?",
    "options": ["#pragma omp atomic", "#pragma omp private", "#pragma omp master", "#pragma omp barrier"],
    "correct": 0,
    "explanation": "The 'atomic' directive ensures that a specific memory location is updated atomically. It is more efficient than 'critical' because it maps directly to hardware instructions."
  },
  {
    "question": "In a distributed system, what is the 'Byzantine Generals Problem' related to?",
    "options": ["Memory allocation", "Consensus in the presence of faulty or malicious nodes", "CPU clock speed", "Database indexing"],
    "correct": 1,
    "explanation": "This is a classic problem in distributed computing where nodes must reach an agreement even if some nodes are sending conflicting or false information."
  },
  {
    "question": "What is the primary difference between a 'Pipe' and a 'FIFO' (Named Pipe) in Linux?",
    "options": ["Pipes are faster", "FIFOs exist in the file system and can be used by unrelated processes", "Pipes are bidirectional, FIFOs are not", "FIFOs are used only for memory"],
    "correct": 1,
    "explanation": "Standard pipes are anonymous and require a parent-child process relationship. FIFOs (Named Pipes) have a filename and allow any two processes to communicate."
  },
  {
    "question": "In the memory layout of a process, which segment is used for dynamic memory allocation (e.g., using malloc or new)?",
    "options": ["Stack", "Text", "Heap", "BSS Segment"],
    "correct": 2,
    "explanation": "The heap is a region of memory used for dynamic allocation where the programmer manages the lifetime of the data."
  },
  {
    "question": "Which MPI function is used to send data from one process to all other processes in a communicator?",
    "options": ["MPI_Send", "MPI_Gather", "MPI_Bcast", "MPI_Reduce"],
    "correct": 2,
    "explanation": "MPI_Bcast (Broadcast) takes data from a 'root' process and distributes it to every other process in the group."
  },
  {
    "question": "What is 'Collective Communication' in MPI?",
    "options": ["Talking to the user", "Communication that involves all processes in a communicator group", "Sending an email", "Using a shared hard drive"],
    "correct": 1,
    "explanation": "Collective calls like Broadcast, Scatter, and Reduce require all processes in the group to participate simultaneously."
  },
  {
    "question": "In an OpenMP 'for' loop, what does the 'schedule(static)' clause do?",
    "options": ["It randomly assigns work", "It divides iterations into equal-sized chunks and assigns them at compile time", "It puts the threads to sleep", "It prevents the loop from running"],
    "correct": 1,
    "explanation": "Static scheduling is efficient when work is predictable, as it maps iterations to threads before the loop even starts."
  },
  {
    "question": "What is the 'Master-Worker' parallel pattern?",
    "options": ["All threads do the same thing", "One thread assigns tasks and others execute them", "The computer runs without an OS", "A distributed system with no network"],
    "correct": 1,
    "explanation": "This pattern is great for load balancing; the Master manages a queue of tasks and hands them to Workers as they become idle."
  },
  {
    "question": "Which of the following is a 'Parallel Input/Output' technique?",
    "options": ["Reading one byte at a time", "MPI-IO (Independent and Collective I/O)", "Using a single serial port", "Turning off the monitor"],
    "correct": 1,
    "explanation": "MPI-IO allows multiple processes to access parts of a shared file concurrently, significantly improving performance for large data sets."
  },
  {
    "question": "A 'Spinlock' is implemented using which atomic operation?",
    "options": ["Addition", "Subtraction", "Test-and-Set or Compare-and-Swap", "Division"],
    "correct": 2,
    "explanation": "These atomic operations allow a thread to check a lock and set it in one uninterruptible step, which is the basis of a spinlock."
  },
  {
    "question": "In a multicore processor, what is 'L2 Cache'?",
    "options": ["Slowest memory", "Memory that is usually private to a core but larger than L1", "A type of hard drive", "Used for storing images only"],
    "correct": 1,
    "explanation": "L2 cache sits between L1 and L3. It is larger but slightly slower than L1, providing a middle ground for data storage."
  },
  {
    "question": "Which MPI function combines values from all processes (e.g., finding a global sum) and returns the result to one process?",
    "options": ["MPI_Bcast", "MPI_Reduce", "MPI_Scatter", "MPI_Send"],
    "correct": 1,
    "explanation": "MPI_Reduce takes local data from each process and applies an operation (Sum, Max, Min) to produce a single result."
  },
  {
    "question": "What is the purpose of the 'Stack' in the memory layout?",
    "options": ["To store global variables", "To store local variables and function call return addresses", "To store the program code", "To store large arrays dynamically"],
    "correct": 1,
    "explanation": "The stack grows and shrinks automatically as functions are called and return, managing local scope variables."
  },
  {
    "question": "In 'Data-Parallel' algorithms, the workload is distributed by:",
    "options": ["Functionality", "Partitioning the input data across processors", "Priority", "Time slices"],
    "correct": 1,
    "explanation": "Data parallelism divides the data (like chunks of a matrix) and gives each processor a piece to work on."
  },
  {
    "question": "What is 'Speedup' in the context of parallel algorithms?",
    "options": ["Clock speed increase", "Serial Time / Parallel Time", "The weight of the machine", "The number of cores"],
    "correct": 1,
    "explanation": "Speedup measures how much faster a task runs when using multiple processors compared to just one."
  },
  {
    "question": "Scenario: A parallel program spends 90% of its time communicating and 10% calculating. This system is:",
    "options": ["Highly efficient", "Communication-bound", "Computation-bound", "Deadlocked"],
    "correct": 1,
    "explanation": "When communication overhead dominates, the parallel system is inefficient because the processors are mostly waiting for data instead of processing it."
  },
  {
    "question": "Which of the following is true about 'Parallel Algorithms'?",
    "options": ["They are always simpler than serial ones", "They must handle synchronization and data dependencies", "They don't need memory", "They only run on Windows"],
    "correct": 1,
    "explanation": "Parallel algorithms are more complex because they must manage how threads interact and ensure data consistency."
  },
  {
    "question": "What does 'MPI_Scatter' do?",
    "options": ["Sends the same data to everyone", "Takes a large array and sends different chunks to different processes", "Collects data from everyone", "Deletes data"],
    "correct": 1,
    "explanation": "Scatter 'slices' an array and distributes the pieces across the processes in a communicator."
  },
  {
    "question": "The 'BSS Segment' in memory layout contains:",
    "options": ["Initialized global variables", "Uninitialized global and static variables", "The code (binary)", "Local variables"],
    "correct": 1,
    "explanation": "BSS (Block Started by Symbol) stores variables that are declared globally but not assigned a value in the source code."
  },
  {
    "question": "Which OpenMP directive allows a specific block of code to be executed by only one thread (any thread) in a team?",
    "options": ["#pragma omp single", "#pragma omp master", "#pragma omp critical", "#pragma omp atomic"],
    "correct": 0,
    "explanation": "'single' ensures one thread runs the code. 'master' specifically requires the master thread to run it."
  },
  {
    "question": "What is 'Parallelism' vs 'Pipelining'?",
    "options": ["They are the same", "Parallelism is multiple units doing work; Pipelining is one unit doing different stages of work", "Pipelining is faster", "Parallelism is only for GPUs"],
    "correct": 1,
    "explanation": "Parallelism is like having 4 chefs; Pipelining is like one chef working on 4 different orders at different stages (chopping, frying, plating)."
  },
  {
    "question": "A 'Non-uniform Memory Access' (NUMA) architecture means:",
    "options": ["All memory is equal", "Memory access time depends on the memory location relative to the processor", "Memory is not used", "The OS is not using RAM"],
    "correct": 1,
    "explanation": "In NUMA systems (common in multi-socket servers), a core can access its 'local' RAM faster than RAM attached to a different CPU socket."
  },
  {
    "question": "In 'Message Passing', a 'Deadlock' can occur if:",
    "options": ["Two processes are both waiting for a 'Receive' from each other before they 'Send'", "The network is too fast", "The CPU is idle", "There is too much RAM"],
    "correct": 0,
    "explanation": "If Process A and B both wait for each other to send data before they continue, they will wait forever."
  },
  {
    "question": "What is 'Ghost Cells' or 'Halo Exchange' in domain decomposition?",
    "options": ["Deleted data", "Buffer areas where neighboring processors exchange boundary data", "A virus", "A type of memory"],
    "correct": 1,
    "explanation": "In spatial simulations, processors need to know what is happening at the 'edges' of their neighbor's territory to perform accurate calculations."
  },
  {
    "question": "Which of the following is a 'Numerical' challenge in parallel systems?",
    "options": ["Floating point errors accumulating differently due to order of operations", "Changing the case of the PC", "The cost of electricity", "The monitor resolution"],
    "correct": 0,
    "explanation": "In parallel math, $(A+B)+C$ might yield a slightly different result than $A+(B+C)$ due to how floating point numbers are rounded, leading to non-deterministic results."
  },
  {
    "question": "The 'Wait' system call in Linux IPC is used by a parent to:",
    "options": ["Wait for a network packet", "Wait for a child process to terminate", "Wait for a user to type", "Wait for the hard drive to spin up"],
    "correct": 1,
    "explanation": "Using `wait()` allows a parent process to collect the exit status of its child and prevents the child from becoming a 'Zombie' process."
  },
  {
    "question": "In 'OpenMP', the 'reduction' clause is used to:",
    "options": ["Reduce the number of threads", "Safely combine results from multiple threads into a single shared variable", "Delete variables", "Make the code smaller"],
    "correct": 1,
    "explanation": "It creates private copies of a variable for each thread and then combines them (e.g., adds them all up) at the end of the parallel region."
  },
  {
    "question": "What is 'Distributed Shared Memory' (DSM)?",
    "options": ["A lie", "An abstraction that makes distributed memory look like a single shared address space to the programmer", "A hardware-only solution", "A type of cache"],
    "correct": 1,
    "explanation": "DSM uses software or hardware to allow a cluster of machines to act as if they all share the same RAM, simplifying programming."
  },
  {
    "question": "Which IPC mechanism is typically the fastest?",
    "options": ["Message Queues", "Pipes", "Shared Memory", "Sockets"],
    "correct": 2,
    "explanation": "Shared memory is fastest because data does not need to be copied between the user space and kernel space; the processes directly access the same RAM."
  },
  {
    "question": "What is 'Embarrassingly Parallel'?",
    "options": ["A program that fails", "A task that requires no communication or synchronization between parallel parts", "A very slow program", "A program with many bugs"],
    "correct": 1,
    "explanation": "Tasks like rendering individual frames of a movie or brute-forcing a password are 'embarrassingly parallel' because they are easy to split up with zero overhead."
  },
  {
    "question": "In MPI, 'Rank' refers to:",
    "options": ["The speed of a processor", "A unique integer ID assigned to each process in a communicator", "The priority of the task", "The amount of memory used"],
    "correct": 1,
    "explanation": "Processes use their 'Rank' to decide which part of the data they should work on (e.g., 'If my rank is 0, do the first half')."
  },
  {
    "question": "What is 'Instruction Set Architecture' (ISA)?",
    "options": ["A building design", "The abstract model of a computer that defines the instructions it can execute", "A type of software", "The speed of the network"],
    "correct": 1,
    "explanation": "The ISA (like x86 or ARM) defines what the hardware can do and how the software talks to it."
  },
  {
    "question": "Which 'Numerical' metric describes the ratio of speedup to the number of processors?",
    "options": ["Latency", "Efficiency", "Bandwidth", "Scalability"],
    "correct": 1,
    "explanation": "Efficiency = $Speedup / N$. It tells you how much of each processor's power is actually being used for useful work."
  },
  {
    "question": "What is 'False Sharing' prevention?",
    "options": ["Deleting the cache", "Padding data so that variables used by different cores are on different cache lines", "Turning off a core", "Sharing more data"],
    "correct": 1,
    "explanation": "By adding 'padding' (extra unused bytes) between variables, you ensure they don't land on the same cache line, preventing unnecessary invalidations."
  },
  {
    "question": "In 'OpenMP', which directive creates a team of threads?",
    "options": ["#pragma omp parallel", "#pragma omp team", "#pragma omp start", "#pragma omp threads"],
    "correct": 0,
    "explanation": "The 'parallel' directive is the entry point for creating multiple threads in OpenMP."
  },
  {
    "question": "What is 'Task Dependency'?",
    "options": ["When a task needs the output of a previous task to start", "When a task is bored", "When a task uses a lot of RAM", "When a task is written in C++"],
    "correct": 0,
    "explanation": "Dependencies are the 'enemy' of parallelism; if Task B needs Task A's result, they cannot run at the same time."
  },
  {
    "question": "What is 'Amdahl’s Numerical' example: If a program takes 20 hours and 1 hour is serial, what is the max speedup?",
    "options": ["5x", "10x", "20x", "Infinite"],
    "correct": 2,
    "explanation": "Since 1/20 (5%) is serial, the max speedup is $1/0.05 = 20$. You can never finish in less than the 1 hour of serial work."
  },
  {
    "question": "In a 'Distributed System', 'Middleware' sits between:",
    "options": ["The monitor and the desk", "The OS and the Application", "The CPU and the RAM", "The user and the keyboard"],
    "correct": 1,
    "explanation": "Middleware handles the 'plumbing' of distributed systems, managing communication and resource sharing so the app doesn't have to."
  },
  {
    "question": "What is 'Memory Layout' BSS stand for?",
    "options": ["Binary System Storage", "Block Started by Symbol", "Basic Software System", "Buffer Size Segment"],
    "correct": 1,
    "explanation": "It is a historical term for the memory segment containing uninitialized global variables."
  },
  {
    "question": "Which 'IPC' method is used for communication between different computers on a network?",
    "options": ["Pipes", "Sockets", "Shared Memory", "Signals"],
    "correct": 1,
    "explanation": "Sockets provide the interface for network-based communication, supporting protocols like TCP and UDP."
  },
  {
    "question": "What is 'Massively Parallel Processing' (MPP)?",
    "options": ["A small laptop", "A supercomputer with thousands of processors and distributed memory", "A single-core CPU", "A printer"],
    "correct": 1,
    "explanation": "MPP systems are designed for extreme scalability in scientific and weather research."
  },
  {
    "question": "In 'OpenMP', what does 'nowait' do?",
    "options": ["Starts the program immediately", "Removes the implicit barrier at the end of a work-sharing construct", "Deletes threads", "Speeds up the clock"],
    "correct": 1,
    "explanation": "Usually, threads wait for everyone to finish a loop. 'nowait' lets them move to the next code block immediately."
  },
  {
    "question": "What is 'Communication Latency'?",
    "options": ["The speed of the CPU", "The overhead/time required to start a data transfer", "The price of the internet", "The size of the hard drive"],
    "correct": 1,
    "explanation": "Latency is the 'lag' or delay. In distributed systems, it's often the biggest performance killer."
  },
  {
    "question": "Scenario: A server handles 1000 requests per second with one core. With 4 cores, it handles 3800. What is the efficiency?",
    "options": ["0.75", "0.85", "0.95", "1.0"],
    "correct": 2,
    "explanation": "Speedup = $3800 / 1000 = 3.8$. Efficiency = $3.8 / 4 = 0.95$ (95%)."
  },
  {
    "question": "What is 'Processor Affinity'?",
    "options": ["Liking a processor", "Binding a thread to a specific CPU core to improve cache performance", "The speed of the CPU", "The number of cores"],
    "correct": 1,
    "explanation": "Keeping a thread on the same core prevents 'cache misses' that happen when a thread moves to a core with an empty cache."
  },
  {
    "question": "In 'Parallel Algorithms', a 'Prefix Sum' (Scan) is used for:",
    "options": ["Adding two numbers", "Calculating running totals in parallel", "Sorting names", "Deleting files"],
    "correct": 1,
    "explanation": "Parallel Prefix Sum is a fundamental algorithm used in sorting, stream compaction, and many other parallel tasks."
  },
  {
    "question": "What is 'Synchronization' cost?",
    "options": ["The price of a clock", "The time lost when threads wait for each other at locks or barriers", "The cost of the CPU", "The size of the code"],
    "correct": 1,
    "explanation": "Every time you use a Mutex or a Barrier, you lose some time; this is the 'cost' of ensuring correctness."
  },
  {
    "question": "Which MPI function is used to gracefully close the MPI environment?",
    "options": ["MPI_End", "MPI_Close", "MPI_Finalize", "MPI_Exit"],
    "correct": 2,
    "explanation": "`MPI_Finalize()` must be called by every MPI process before it exits to ensure resources are cleaned up."
  },
  {
    "question": "What is 'Distributed Computing's scalability' limitation?",
    "options": ["Too many computers", "Network bandwidth and synchronization overhead increasing faster than computation", "The price of electricity", "The size of the monitor"],
    "correct": 1,
    "explanation": "As you add more nodes, the time spent 'talking' between them can eventually exceed the time spent 'working', causing performance to drop."
  },
  {
    "question": "In 'Memory Layout', where are 'local variables' stored?",
    "options": ["Heap", "Stack", "Data Segment", "Text Segment"],
    "correct": 1,
    "explanation": "Local variables exist only during the function's execution and are placed on the stack."
  },
  {
    "question": "Which of these is a 'SIMD' scenario?",
    "options": ["A processor adding two numbers", "A GPU calculating the color of 1,000,000 pixels using the same formula", "A user typing a letter", "A hard drive saving a file"],
    "correct": 1,
    "explanation": "GPUs are massive SIMD machines; they perform the same math on many data points (pixels) at once."
  },
  {
    "question": "What is 'Amdahl's Law' vs 'Gustafson's Law'?",
    "options": ["Amdahl is for fixed data size; Gustafson is for scaled data size", "Amdahl is for GPUs; Gustafson is for CPUs", "They are the same", "Gustafson is for serial computing"],
    "correct": 0,
    "explanation": "Amdahl assumes you want to solve the same problem faster; Gustafson assumes you want to solve a bigger problem in the same time."
  },
  {
    "question": "What is a 'Spinlock' vs 'Semaphore'?",
    "options": ["Spinlock is for disks; Semaphore is for CPUs", "Spinlock wastes CPU cycles; Semaphore puts the thread to sleep", "They are identical", "Spinlock is slower"],
    "correct": 1,
    "explanation": "Spinlocks are 'active' (waste power), while Semaphores/Mutexes are 'passive' (yield the CPU to other work)."
  },
  {
    "question": "Which of these is an 'Inter-Process Communication' (IPC) mechanism?",
    "options": ["Pipes", "RAM", "CPU", "Keyboard"],
    "correct": 0,
    "explanation": "Pipes allow the output of one process to become the input of another."
  },
  {
    "question": "In 'OpenMP', how do you find the ID of the current thread?",
    "options": ["omp_get_thread_num()", "omp_id()", "get_my_rank()", "thread_whoami()"],
    "correct": 0,
    "explanation": "`omp_get_thread_num()` returns the 0-indexed ID of the thread within the current parallel team."
  },
  {
    "question": "What is 'Distributed Computing'?",
    "options": ["One big computer", "Multiple computers connected by a network working on one task", "A computer with two monitors", "A laptop"],
    "correct": 1,
    "explanation": "Distributed computing uses a 'cluster' of separate machines to solve problems."
  },
  {
    "question": "What is 'Data Dependency'?",
    "options": ["The data is addicted to the CPU", "When one piece of data must be calculated before another", "Using a lot of data", "Deleting data"],
    "correct": 1,
    "explanation": "Dependencies prevent parallelism because they force a specific order of operations."
  },
  {
    "question": "Which 'Numerical' metric is $1 / (S + (1-S)/N)$?",
    "options": ["Amdahl's Speedup", "Gustafson's Speedup", "Efficiency", "Latency"],
    "correct": 0,
    "explanation": "This is the classic formula for Amdahl's Law where $S$ is the serial fraction."
  },
  {
    "question": "In a 'Shared Memory' system, what is 'Race Condition'?",
    "options": ["A fast computer", "Two threads modifying the same variable at once leading to errors", "Deleting memory", "The monitor is too fast"],
    "correct": 1,
    "explanation": "If two threads 'race' to update a value, the result is unpredictable."
  },
  {
    "question": "What is 'System API'?",
    "options": ["A website", "The set of functions the OS provides to programs (like fork or join)", "A computer hardware", "A type of screen"],
    "correct": 1,
    "explanation": "System APIs (Application Programming Interfaces) are how programmers request services from the operating system."
  },
  {
    "question": "In 'MPI', what does 'Reduce' do?",
    "options": ["Makes the data smaller", "Collects data from all nodes and performs an operation like SUM or MAX", "Deletes processes", "Speeds up the network"],
    "correct": 1,
    "explanation": "MPI_Reduce is used to get a single 'answer' (like a total sum) from all the distributed processes."
  },
  {
    "question": "What is 'Parallel Algorithm' complexity?",
    "options": ["It is always $O(1)$", "It is measured by both work (total ops) and span (time on infinite processors)", "It is measured by weight", "It is only for math"],
    "correct": 1,
    "explanation": "Parallel complexity involves how many steps the algorithm takes when split across many processors."
  },
  {
    "question": "What is 'Domain Decomposition' in weather forecasting?",
    "options": ["Breaking the weather", "Dividing the earth's atmosphere into a grid and giving each grid to a processor", "Checking the temperature", "Using a single CPU"],
    "correct": 1,
    "explanation": "Weather models are huge; they are split into 'tiles' or domains so thousands of cores can calculate the wind/rain for each tile."
  },
  {
    "question": "Which of these is a 'History of OS' milestone?",
    "options": ["The invention of the mouse", "The shift from Batch processing to Time-sharing", "The price of RAM", "The color of Windows"],
    "correct": 1,
    "explanation": "Time-sharing was a major leap because it allowed multiple people to use a computer interactively at once."
  },
  {
    "question": "What is 'Bus Contention'?",
    "options": ["The bus is late", "Multiple cores fighting to use the same memory bus at once", "A broken CPU", "Low RAM"],
    "correct": 1,
    "explanation": "The bus is the 'highway' between CPU and RAM; if too many cores use it, they slow each other down."
  },
  {
    "question": "In 'Memory Layout', the 'Text Segment' contains:",
    "options": ["Word documents", "The actual machine code (instructions)", "Global variables", "The heap"],
    "correct": 1,
    "explanation": "The text segment is the 'read-only' part of memory where the program code lives."
  },
  {
    "question": "Which 'Numerical' law is 'Optimistic' about parallelism?",
    "options": ["Amdahl", "Gustafson", "Moore", "Newton"],
    "correct": 1,
    "explanation": "Gustafson's law is optimistic because it assumes we can increase problem size to take advantage of more cores."
  },
  {
    "question": "What is 'Critical Section'?",
    "options": ["The most important part of the code", "The part of code that touches shared resources and must be protected", "The error log", "The main function"],
    "correct": 1,
    "explanation": "Critical sections must be accessed by only one thread at a time to prevent data corruption."
  },
  {
    "question": "In 'Distributed Computing', what is 'Transparency'?",
    "options": ["See-through monitors", "The user doesn't know the system is distributed; it feels like one PC", "Open source code", "Fast network"],
    "correct": 1,
    "explanation": "Transparency is a design goal where the complexity of the network is hidden from the user."
  },
  {
    "question": "Which of these is a 'Synchronization' primitive?",
    "options": ["Mutex", "RAM", "Hard drive", "CPU"],
    "correct": 0,
    "explanation": "A Mutex (Mutual Exclusion) is a lock used to protect a critical section."
  },
  {
    "question": "What is 'Multicore Era'?",
    "options": ["When CPUs had one core", "The current era where performance is increased by adding more cores, not clock speed", "The era of mechanical computers", "The future of quantum computing"],
    "correct": 1,
    "explanation": "Since 2005, we have moved from 'faster' cores to 'more' cores."
  },
  {
    "question": "In 'Parallel Algorithms', 'Load Balancing' means:",
    "options": ["Weighting the computer", "Giving every core an equal amount of work", "Checking the RAM", "Buying more cores"],
    "correct": 1,
    "explanation": "If one core has more work than others, the whole program slows down to wait for that one core."
  },
  {
    "question": "What is 'Message Passing Interface' (MPI)?",
    "options": ["A chat app", "A standard for communication between processes in a distributed system", "A type of hard drive", "A graphics card"],
    "correct": 1,
    "explanation": "MPI is the 'gold standard' for writing software that runs on clusters and supercomputers."
  },
  {
    "question": "What is 'Barrier' in OpenMP?",
    "options": ["A wall in the office", "A synchronization point where all threads must wait before continuing", "A type of lock", "A way to stop the program"],
    "correct": 1,
    "explanation": "Barriers ensure that everyone is 'on the same page' before moving to the next part of the code."
  },
  {
    "question": "In 'Memory Layout', the 'Heap' grows:",
    "options": ["Downwards", "Upwards towards the stack", "It doesn't grow", "Only on Sundays"],
    "correct": 1,
    "explanation": "In most memory models, the heap grows 'up' while the stack grows 'down' to maximize the use of available memory."
  },
  {
    "question": "Which of these is a 'History of Computer' generation?",
    "options": ["Vacuum tubes", "Transistors", "Integrated Circuits", "All of the above"],
    "correct": 3,
    "explanation": "These represent the 1st, 2nd, and 3rd generations of computing hardware."
  },
  {
    "question": "What is 'Data Exchange' in distributed systems?",
    "options": ["Trading hard drives", "Sending data across the network from one node to another", "Deleting files", "Changing the OS"],
    "correct": 1,
    "explanation": "Data exchange is how nodes coordinate their work by sharing intermediate results."
  },
  {
    "question": "What is 'Amdahl's' Speedup if 50% of the code is serial?",
    "options": ["2x", "5x", "10x", "Infinite"],
    "correct": 0,
    "explanation": "Max speedup is $1 / 0.5 = 2$. No matter how many cores you have, you can't go faster than 2x."
  },
  {
    "question": "What is 'Multicore Chips' benefit?",
    "options": ["They are bigger", "They provide more processing power without the heat of high clock speeds", "They are cheaper", "They use no power"],
    "correct": 1,
    "explanation": "Multiple cores allow for 'parallel' work which is more energy-efficient than pushing a single core to extreme speeds."
  },
  {
    "question": "In 'OpenMP', what does '#pragma omp for' do?",
    "options": ["Loops forever", "Automatically splits the iterations of a for-loop among threads", "Deletes the loop", "Speeds up the loop"],
    "correct": 1,
    "explanation": "This is the most common way to parallelize code in OpenMP."
  },
  {
    "question": "What is 'False Sharing' in multicore?",
    "options": ["Sharing a sandwich", "Performance loss when unrelated variables are on the same cache line", "Using someone else's PC", "A virus"],
    "correct": 1,
    "explanation": "It is a 'hidden' performance killer where the hardware thinks data is shared when it isn't."
  },
  {
    "question": "What is 'Shared Memory' vs 'Distributed Memory'?",
    "options": ["Shared is for clusters; Distributed is for PCs", "Shared uses a single RAM; Distributed uses many separate RAMs", "They are the same", "Shared is slower"],
    "correct": 1,
    "explanation": "Shared memory is like a shared whiteboard; Distributed memory is like writing letters to each other."
  },
  {
    "question": "In 'Memory Layout', initialized global variables go to:",
    "options": ["BSS", "Data Segment", "Stack", "Text Segment"],
    "correct": 1,
    "explanation": "The Data segment is for global/static variables that have been given a specific value."
  },
  {
    "question": "What is 'Pipeline' parallelism?",
    "options": ["Water pipes", "Breaking a task into sequential stages that run concurrently", "Running the same code twice", "Using multiple GPUs"],
    "correct": 1,
    "explanation": "Like an assembly line, each 'stage' works on a different piece of data at the same time."
  },
  {
    "question": "What is 'Distributed Computing limitation'—Network Latency?",
    "options": ["The network is too fast", "The delay in sending data between computers", "The color of the cable", "The weight of the router"],
    "correct": 1,
    "explanation": "Latency makes distributed systems slower for tasks that require a lot of back-and-forth communication."
  },
  {
    "question": "What is 'Amdahl's Law' primarily about?",
    "options": ["The future of AI", "The limits of speedup due to serial bottlenecks", "How to build a PC", "The cost of software"],
    "correct": 1,
    "explanation": "It's a reality check for parallel programming."
  },
  {
    "question": "In 'Parallel Computing', what is 'Scalability'?",
    "options": ["Changing the size of a window", "How well a system increases performance as more cores are added", "The resolution of the screen", "The price of the system"],
    "correct": 1,
    "explanation": "Scalable software can take advantage of 100 cores just as well as 4 cores."
  },
  {
    "question": "What is 'CISC'?",
    "options": ["Simple instructions", "Complex Instruction Set Computer (e.g., Intel x86)", "A type of memory", "A graphics card"],
    "correct": 1,
    "explanation": "CISC processors have powerful instructions that can do many things at once."
  },
  {
    "question": "What is 'RISC'?",
    "options": ["Reduced Instruction Set Computer (e.g., ARM)", "Complex instructions", "A type of hard drive", "A monitor"],
    "correct": 0,
    "explanation": "RISC focuses on simple, fast instructions."
  },
  {
    "question": "In 'OpenMP', 'Master' directive means:",
    "options": ["The code is the boss", "Only the master thread (thread 0) runs the code", "Everyone runs the code", "The code is deleted"],
    "correct": 1,
    "explanation": "Used for tasks that should only be done once, like printing a final result."
  },
  {
    "question": "What is 'Clock Speed' measured in?",
    "options": ["Watts", "Hertz (GHz)", "Pixels", "Bits"],
    "correct": 1,
    "explanation": "GigaHertz (GHz) tells you billions of cycles per second."
  },
  {
    "question": "What is 'Synchronization' in parallel systems?",
    "options": ["Making clocks the same", "Coordinating threads to ensure they don't interfere with each other", "Deleting threads", "Buying more RAM"],
    "correct": 1,
    "explanation": "Synchronization is the 'traffic light' of parallel programming."
  },
  {
    "question": "In 'Memory Layout', where are 'static variables' stored?",
    "options": ["Stack", "Data/BSS Segment", "Heap", "Text"],
    "correct": 1,
    "explanation": "Static variables live for the life of the program and are stored in the data segments."
  },
  {
    "question": "What is 'Communication Bandwidth'?",
    "options": ["The delay of a message", "The amount of data that can be sent per second", "The number of nodes", "The price of the internet"],
    "correct": 1,
    "explanation": "Bandwidth is the 'width' of the pipe; how much data fits through at once."
  },
  {
    "question": "What is 'Task Decomposition'?",
    "options": ["Deleting a task", "Breaking a program into different functions to run in parallel", "Sorting data", "Using one CPU"],
    "correct": 1,
    "explanation": "Also called functional decomposition."
  },
  {
    "question": "What is 'SIMD'?",
    "options": ["Single Instruction, Multiple Data", "Slow Instruction, Many Deletions", "Simple Internet Media Device", "A type of RAM"],
    "correct": 0,
    "explanation": "One command processes a whole vector of data at once."
  },
  {
    "question": "What is 'MIMD'?",
    "options": ["Multiple Instruction, Multiple Data", "Many Internet Media Devices", "Massive Integrated Memory Disk", "A type of monitor"],
    "correct": 0,
    "explanation": "The most common parallel architecture today."
  },
  {
    "question": "In 'Distributed Systems', what is 'Partial Failure'?",
    "options": ["The whole system dies", "One computer fails but the rest keep working", "The data is half-deleted", "The monitor is broken"],
    "correct": 1,
    "explanation": "A key advantage of distributed systems is resilience."
  },
  {
    "question": "What is 'Amdahl's' Speedup if 0% is serial?",
    "options": ["1x", "10x", "N (number of processors)", "Infinite"],
    "correct": 2,
    "explanation": "In a perfect world with no serial code and no overhead, speedup equals the number of processors."
  },
  {
    "question": "What is 'Gustafson's' Law main idea?",
    "options": ["Parallelism is bad", "Parallelism is better than Amdahl thought because we increase problem size", "Computers are fast", "RAM is important"],
    "correct": 1,
    "explanation": "It's the 'Scaled Speedup' law."
  },
  {
    "question": "What is 'Critical Section' requirement 'Mutual Exclusion'?",
    "options": ["Both can enter", "Only one can enter at a time", "Neither can enter", "The code is shared"],
    "correct": 1,
    "explanation": "The most basic rule of synchronization."
  }
]

