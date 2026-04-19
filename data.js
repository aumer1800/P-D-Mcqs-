const data = {
    pd: [
  {
    question: "Serial computing executes instructions:",
    options: ["Simultaneously","Sequentially","Randomly","In parallel"],
    correct: 1,
    explanation: "Serial computing executes one instruction at a time."
  },
  {
    question: "Parallel computing improves performance by:",
    options: ["Increasing latency","Dividing tasks","Reducing memory","Avoiding CPU"],
    correct: 1,
    explanation: "Tasks are divided and executed simultaneously."
  },
  {
    question: "A key limitation of serial computing is:",
    options: ["High cost","Slow execution","Complex design","Large memory"],
    correct: 1,
    explanation: "Serial execution is slower due to lack of parallelism."
  },
  {
    question: "Parallel computing requires:",
    options: ["Single processor","Multiple processors","No memory","Only GPU"],
    correct: 1,
    explanation: "Parallel systems use multiple processors/cores."
  },
  {
    question: "Speedup in parallel computing means:",
    options: ["Slower execution","Performance gain","Memory increase","Cost reduction"],
    correct: 1,
    explanation: "Speedup refers to performance improvement."
  },

  {
    question: "Distributed systems consist of:",
    options: ["Single machine","Multiple connected systems","Only servers","Only CPUs"],
    correct: 1,
    explanation: "They are collections of networked computers."
  },
  {
    question: "A major limitation of distributed systems is:",
    options: ["No communication","Network latency","No computation","No storage"],
    correct: 1,
    explanation: "Network delays affect performance."
  },
  {
    question: "Distributed computing provides:",
    options: ["Isolation","Resource sharing","No scalability","No communication"],
    correct: 1,
    explanation: "Resources are shared across systems."
  },
  {
    question: "Fault tolerance refers to:",
    options: ["System failure","System recovery ability","Slow speed","High cost"],
    correct: 1,
    explanation: "System continues working even after failures."
  },
  {
    question: "Transparency in distributed systems means:",
    options: ["Visible processes","Hidden complexity","No communication","No network"],
    correct: 1,
    explanation: "User does not see system complexity."
  },

  {
    question: "Job parallelism means:",
    options: ["Same task repeated","Different jobs run simultaneously","No processing","Single job"],
    correct: 1,
    explanation: "Multiple jobs execute at the same time."
  },
  {
    question: "Data parallelism involves:",
    options: ["Different data processed simultaneously","One data only","No data","Sequential processing"],
    correct: 0,
    explanation: "Same operation on different data sets."
  },
  {
    question: "Pipeline parallelism is:",
    options: ["Tasks in stages","Single step","No stages","Random tasks"],
    correct: 0,
    explanation: "Execution happens in stages like a pipeline."
  },
  {
    question: "Task parallelism refers to:",
    options: ["Same task","Different tasks concurrently","No task","Sequential task"],
    correct: 1,
    explanation: "Different tasks run simultaneously."
  },

  {
    question: "CPU stands for:",
    options: ["Central Processing Unit","Computer Process Unit","Control Processing Unit","Core Processing Unit"],
    correct: 0,
    explanation: "CPU is the brain of the computer."
  },
  {
    question: "RISC architecture uses:",
    options: ["Complex instructions","Simple instructions","No instructions","Large memory"],
    correct: 1,
    explanation: "RISC uses simple and fast instructions."
  },
  {
    question: "CISC architecture uses:",
    options: ["Simple instructions","Complex instructions","No operations","Small registers"],
    correct: 1,
    explanation: "CISC uses complex instructions."
  },
  {
    question: "RISC is faster due to:",
    options: ["Complex design","Simple instructions","Large code","Memory usage"],
    correct: 1,
    explanation: "Simple instructions execute faster."
  },
  {
    question: "CISC reduces:",
    options: ["Code size","Speed","Registers","Memory"],
    correct: 0,
    explanation: "Complex instructions reduce program size."
  },

  {
    question: "First generation computers used:",
    options: ["Transistors","Vacuum tubes","ICs","Microprocessors"],
    correct: 1,
    explanation: "Vacuum tubes were used in first generation."
  },
  {
    question: "Second generation used:",
    options: ["Vacuum tubes","Transistors","ICs","Chips"],
    correct: 1,
    explanation: "Transistors replaced vacuum tubes."
  },
  {
    question: "OS manages:",
    options: ["Hardware","Software","Both","None"],
    correct: 2,
    explanation: "OS manages both hardware and software."
  },
  {
    question: "Early OS were:",
    options: ["Multi-user","Batch systems","Real-time","Distributed"],
    correct: 1,
    explanation: "Early systems used batch processing."
  },

  {
    question: "Domain decomposition divides:",
    options: ["Tasks","Data","Memory","CPU"],
    correct: 1,
    explanation: "Data is divided among processors."
  },
  {
    question: "Function decomposition divides:",
    options: ["Data","Functions","Memory","Threads"],
    correct: 1,
    explanation: "Different functions are assigned to processors."
  },

  {
    question: "Shared memory model:",
    options: ["Private memory","Common memory","No memory","Disk memory"],
    correct: 1,
    explanation: "All processors share the same memory."
  },
  {
    question: "Distributed memory model:",
    options: ["Shared memory","Independent memory","No communication","Single memory"],
    correct: 1,
    explanation: "Each processor has its own memory."
  },
  {
    question: "Hybrid model combines:",
    options: ["Serial & parallel","Shared & distributed","CPU & GPU","Hardware only"],
    correct: 1,
    explanation: "Hybrid uses both shared and distributed memory."
  },

  {
    question: "Multicore processors contain:",
    options: ["One core","Multiple cores","No core","GPU only"],
    correct: 1,
    explanation: "Multiple cores allow parallel processing."
  },
  {
    question: "Clock speed is measured in:",
    options: ["Bytes","Hertz","Watts","Volts"],
    correct: 1,
    explanation: "Clock speed is measured in Hz."
  },

  {
    question: "SISD stands for:",
    options: ["Single Instruction Single Data","Multiple Instruction Single Data","Single Instruction Multiple Data","Multiple Instruction Multiple Data"],
    correct: 0,
    explanation: "Single instruction on single data."
  },
  {
    question: "SIMD is used in:",
    options: ["GPUs","CPUs only","Disk","RAM"],
    correct: 0,
    explanation: "SIMD is common in GPUs."
  },

  {
    question: "Race condition occurs when:",
    options: ["Tasks are independent","Multiple threads access shared data","No threads","Sequential execution"],
    correct: 1,
    explanation: "Concurrent access leads to unpredictable results."
  },
  {
    question: "Mutex is:",
    options: ["Lock","Thread","Process","Memory"],
    correct: 0,
    explanation: "Mutex ensures mutual exclusion."
  },
  {
    question: "Deadlock occurs when:",
    options: ["No process","Circular waiting","Fast execution","No memory"],
    correct: 1,
    explanation: "Processes wait forever in a cycle."
  },

  {
    question: "Semaphore is used for:",
    options: ["Memory","Synchronization","CPU","Disk"],
    correct: 1,
    explanation: "Semaphores control access to resources."
  },
  {
    question: "Binary semaphore values:",
    options: ["0 and 1","1 and 2","0 only","2 only"],
    correct: 0,
    explanation: "Binary semaphores have two states."
  },

  {
    question: "IPC stands for:",
    options: ["Inter Process Communication","Internal Process Control","Input Process Control","None"],
    correct: 0,
    explanation: "Processes communicate via IPC."
  },

  {
    question: "Amdahl’s Law defines:",
    options: ["Speedup limit","Memory","CPU","Disk"],
    correct: 0,
    explanation: "Speedup is limited by serial portion."
  },
  {
    question: "Gustafson’s Law focuses on:",
    options: ["Fixed problem size","Scalable problem size","Memory","Disk"],
    correct: 1,
    explanation: "It considers scalable workloads."
  },

  {
    question: "Memory bandwidth is:",
    options: ["Data transfer rate","CPU speed","Disk size","Cache"],
    correct: 0,
    explanation: "It is the rate of data transfer."
  },
  {
    question: "Cache is:",
    options: ["Slow memory","Fast memory","Disk","CPU"],
    correct: 1,
    explanation: "Cache is high-speed memory."
  },

  {
    question: "False sharing happens when:",
    options: ["Threads share variables","Threads share cache lines","No sharing","Independent memory"],
    correct: 1,
    explanation: "Threads use same cache line causing inefficiency."
  },

  {
    question: "Load balancing ensures:",
    options: ["Uneven work","Equal work distribution","No work","Single task"],
    correct: 1,
    explanation: "Work is evenly distributed."
  },
  {
    question: "Scalability means:",
    options: ["Fixed size","Ability to grow","Decrease size","No growth"],
    correct: 1,
    explanation: "System can expand efficiently."
  },

  {
    question: "Latency is:",
    options: ["Delay","Speed","Memory","CPU"],
    correct: 0,
    explanation: "Latency is delay in response."
  },
  {
    question: "Throughput is:",
    options: ["Tasks per time","Delay","Memory","Disk"],
    correct: 0,
    explanation: "Amount of work done per time."
  }
    ],
    ai: [],
    embedded: [],
    web: []
};