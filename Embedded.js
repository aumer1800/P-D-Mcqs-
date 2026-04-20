export const embedded=[
  {
    "question": "What is the primary defining characteristic of an embedded system compared to a general-purpose computer?",
    "options": [
      "It must have a high-speed internet connection.",
      "It is designed to perform a specific, dedicated function.",
      "It always uses a graphical user interface (GUI).",
      "It lacks a central processing unit."
    ],
    "correct": 1,
    "explanation": "Unlike general-purpose computers (like PCs) that can run any application, embedded systems are 'embedded' within a larger device to perform a specific task (e.g., controlling a microwave)."
  },
  {
    "question": "Which component is often referred to as the 'heart' of an embedded system?",
    "options": [
      "Power Supply",
      "Memory Unit",
      "Microcontroller or Microprocessor",
      "Output Actuator"
    ],
    "correct": 2,
    "explanation": "The processor (MCU/MPU) executes the program instructions and controls all other hardware components in the system."
  },
  {
    "question": "In the context of 'Ubiquitous Computing,' where are embedded systems found?",
    "options": [
      "Only in industrial factories",
      "Exclusively in desktop computers",
      "Everywhere in daily objects like cars, appliances, and wearables",
      "Only in space exploration equipment"
    ],
    "correct": 2,
    "explanation": "Ubiquitous computing refers to the presence of computing power in almost every aspect of daily life, which is made possible by embedded systems."
  },
  {
    "question": "A Microcontroller (MCU) typically differs from a Microprocessor (MPU) because the MCU contains:",
    "options": [
      "Only the CPU",
      "CPU, RAM, ROM, and I/O ports on a single chip",
      "External memory only",
      "High-level operating systems only"
    ],
    "correct": 1,
    "explanation": "A microcontroller is a 'computer on a chip' containing the processor core, memory, and programmable input/output peripherals."
  },
  {
    "question": "Which architecture uses separate buses and memory spaces for instructions and data?",
    "options": [
      "Von Neumann Architecture",
      "Harvard Architecture",
      "CISC Architecture",
      "Single Bus Architecture"
    ],
    "correct": 1,
    "explanation": "Harvard architecture allows the CPU to fetch instructions and read/write data simultaneously, increasing performance in embedded applications."
  },
  {
    "question": "In a memory hierarchy, which type of memory is the fastest but also the most expensive per bit?",
    "options": [
      "Flash Memory",
      "DRAM",
      "Internal Registers",
      "Hard Disk Drive"
    ],
    "correct": 2,
    "explanation": "Registers located inside the CPU are the fastest level of the hierarchy, used for immediate data manipulation."
  },
  {
    "question": "What is the main purpose of the Program Counter (PC) register?",
    "options": [
      "To store the results of arithmetic operations",
      "To hold the address of the next instruction to be fetched",
      "To count the number of lines of code",
      "To manage the power consumption of the chip"
    ],
    "correct": 1,
    "explanation": "The PC keeps track of where the processor is in the program sequence by pointing to the memory address of the next instruction."
  },
  {
    "question": "Which of the following is a 'Real-Time' constraint in an embedded system?",
    "options": [
      "The system must have at least 1GB of RAM.",
      "The system must produce a response within a guaranteed time limit.",
      "The system must be programmed in Python.",
      "The system must use a touch screen."
    ],
    "correct": 1,
    "explanation": "Real-time systems are defined by their temporal correctness; a late result is often as bad as a wrong result."
  },
  {
    "question": "Scenario: You are designing a battery-powered smart lock. Which feature is MOST critical for the microcontroller selection?",
    "options": [
      "High clock speed (3.0 GHz+)",
      "Low power consumption in sleep modes",
      "Ability to play 4K video",
      "Support for large external hard drives"
    ],
    "correct": 1,
    "explanation": "For battery-operated devices, the 'Energy Efficiency' characteristic is vital to ensure the device lasts for months or years."
  },
  {
    "question": "Which register is typically used to store the status of the last ALU operation (e.g., zero flag, carry flag)?",
    "options": [
      "Stack Pointer",
      "Instruction Register",
      "Status Register (or Flag Register)",
      "Accumulator"
    ],
    "correct": 2,
    "explanation": "The Status Register holds conditional flags that tell the processor if the last result was zero, negative, or caused an overflow."
  }
,
  {
    "question": "Which of the following is an example of an 'Actuator' in an embedded system?",
    "options": ["Temperature Sensor", "Push Button", "Electric Motor", "Photodiode"],
    "correct": 2,
    "explanation": "Actuators are output components that perform a physical action, such as rotating a motor, based on the controller's signals."
  },
  {
    "question": "What does ISA stand for in the context of processor design?",
    "options": ["Internal System Access", "Instruction Set Architecture", "Integrated Software Array", "Input Signal Analysis"],
    "correct": 1,
    "explanation": "ISA is the abstract model of a computer that defines the supported data types, registers, and the set of instructions that the processor can execute."
  },
  {
    "question": "A system where the execution time is deterministic is known as:",
    "options": ["A High-Performance System", "A Soft Operating System", "A Real-Time System", "A Cloud-Based System"],
    "correct": 2,
    "explanation": "In real-time embedded systems, 'deterministic' means the system will always respond to an event within a specific, predictable time frame."
  },
  {
    "question": "In the Fetch-Decode-Execute cycle, what happens during the 'Decode' stage?",
    "options": ["The instruction is moved from the hard drive to RAM.", "The CPU interprets the binary opcode to determine which action to take.", "The mathematical result is written to the memory.", "The next address is loaded into the Program Counter."],
    "correct": 1,
    "explanation": "During decoding, the Control Unit breaks down the binary instruction to identify the operation (opcode) and the required data (operands)."
  },
  {
    "question": "Which memory type is typically used for 'Firmware' storage because it is non-volatile and electrically erasable?",
    "options": ["SRAM", "DRAM", "Flash Memory", "L1 Cache"],
    "correct": 2,
    "explanation": "Flash memory is the standard for storing the permanent program (firmware) in microcontrollers as it retains data without power."
  },
  {
    "question": "What is the primary advantage of using a RISC (Reduced Instruction Set Computer) architecture in embedded systems?",
    "options": ["It has very complex instructions that take many clock cycles.", "Instructions are simple and usually execute in a single cycle, improving efficiency.", "It requires more transistors and higher power.", "It eliminates the need for registers."],
    "correct": 1,
    "explanation": "RISC architectures (like ARM) focus on simple instructions that can be heavily pipelined, leading to lower power consumption and faster execution."
  },
  {
    "question": "Which register holds the actual data or instruction currently being processed by the CPU?",
    "options": ["Stack Pointer", "Instruction Register (IR)", "Program Counter", "Index Register"],
    "correct": 1,
    "explanation": "The Instruction Register holds the binary code of the instruction that was just fetched from memory while it is being decoded and executed."
  },
  {
    "question": "Why is 'Memory Hierarchy' used in embedded designs?",
    "options": ["To make the system as slow as possible.", "To balance the trade-off between high speed, high cost, and large capacity.", "To ensure the system only uses one type of memory.", "To increase the physical size of the circuit board."],
    "correct": 1,
    "explanation": "Since fast memory (SRAM) is expensive and small, and slow memory (Flash) is cheap and large, a hierarchy ensures the processor has quick access to frequent data while storing the rest cheaply."
  },
  {
    "question": "What is 'Machine Code'?",
    "options": ["A high-level language like C++.", "The lowest-level hexadecimal representation of a program.", "The actual binary (0s and 1s) that the CPU hardware understands.", "A script used to debug hardware."],
    "correct": 2,
    "explanation": "Machine code is the final output of the compilation process; it consists of the raw bits that directly trigger the logic gates of the processor."
  },
  {
    "question": "Scenario: An embedded engineer needs to store temporary variables that change frequently during calculation. Which memory should they use?",
    "options": ["ROM", "EEPROM", "RAM (SRAM/DRAM)", "Optical Disk"],
    "correct": 2,
    "explanation": "RAM is volatile but allows for fast read/write operations, making it ideal for temporary data storage during program execution."
  },
  {
    "question": "The 'Opcode' part of an instruction defines:",
    "options": ["The location of the data.", "The specific operation to be performed (e.g., ADD, SUB).", "The speed of the processor.", "The name of the programmer."],
    "correct": 1,
    "explanation": "The Opcode (Operation Code) is the specific bit pattern that tells the ALU which mathematical or logical function to execute."
  },
  {
    "question": "Which of these is a disadvantage of Embedded Systems?",
    "options": ["High efficiency", "Small size", "Difficulty in upgrading hardware after deployment", "Low power consumption"],
    "correct": 2,
    "explanation": "Once an embedded system is deployed (like an ECU in a car), it is physically difficult and expensive to change or upgrade the hardware components."
  },
  {
    "question": "What is the function of the 'Stack Pointer' (SP) register?",
    "options": ["It points to the next instruction in the flash memory.", "It tracks the top address of the 'Stack' memory used for function calls and local variables.", "It counts how many tasks are running.", "It manages the connection to the internet."],
    "correct": 1,
    "explanation": "The SP is crucial for managing function calls; it saves the return address and local data so the CPU can return to its previous state after a function ends."
  },
  {
    "question": "In a 32-bit architecture, what does '32-bit' typically refer to?",
    "options": ["The number of pins on the chip.", "The width of the data registers and the data bus.", "The maximum amount of storage in Megabytes.", "The length of the power cable."],
    "correct": 1,
    "explanation": "A 32-bit system means the CPU can process data in 32-bit chunks and usually has 32-bit wide internal registers."
  },
  {
    "question": "Which addressing mode involves specifying the actual data value directly within the instruction?",
    "options": ["Direct Addressing", "Indirect Addressing", "Immediate Addressing", "Register Addressing"],
    "correct": 2,
    "explanation": "In Immediate Addressing, the operand is a constant value (e.g., MOV R1, #10), meaning the data '10' is part of the instruction itself."
  },
  {
    "question": "What is the role of a 'Device Driver' in an embedded OS?",
    "options": ["To charge the battery of the device.", "To act as a software interface between the OS kernel and the hardware peripherals.", "To compile the source code into machine code.", "To physically move the robot's arms."],
    "correct": 1,
    "explanation": "Device drivers translate high-level OS commands into the specific low-level register writes needed to control hardware like a UART or a Timer."
  },
  {
    "question": "What characterizes a 'Harvard Architecture'?",
    "options": ["Shared memory for both data and instructions.", "Physically separate memories and buses for instructions and data.", "Lack of any internal registers.", "The use of vacuum tubes instead of transistors."],
    "correct": 1,
    "explanation": "Separating data and instructions prevents the 'Von Neumann bottleneck,' allowing the CPU to fetch a new instruction while simultaneously reading data."
  },
  {
    "question": "Which of the following describes 'Direct Execution'?",
    "options": ["Running code through an interpreter like Python.", "The CPU running machine code instructions directly from memory without a translation layer.", "Executing code on a remote server.", "Running code only when a button is pressed."],
    "correct": 1,
    "explanation": "Direct execution occurs when the hardware fetches the binary opcodes and processes them immediately via logic circuits."
  },
  {
    "question": "The 'Memory Hierarchy' characteristic 'Locality of Reference' suggests that:",
    "options": ["Data is stored randomly across all memory types.", "A processor is likely to access the same memory locations repeatedly or nearby locations.", "Memory should be placed far away from the CPU.", "All memory should be volatile."],
    "correct": 1,
    "explanation": "Locality of reference is the reason Caches work; CPUs tend to use the same data frequently (temporal locality) or data stored close together (spatial locality)."
  },
  {
    "question": "Which type of register is the 'Accumulator'?",
    "options": ["A register that stores the address of the next instruction.", "A general-purpose register used to store the results of arithmetic and logic operations.", "A register used exclusively for wireless communication.", "A register that stores the user's password."],
    "correct": 1,
    "explanation": "Historically, the Accumulator is the primary register where the ALU deposits the result of its calculations."
  },
  {
    "question": "What is the primary purpose of 'L1 Cache' in a microprocessor?",
    "options": ["To provide a large storage space for photos.", "To provide the CPU with extremely fast access to the most frequently used instructions and data.", "To connect the CPU to the RAM.", "To serve as a backup if the main memory fails."],
    "correct": 1,
    "explanation": "L1 Cache is built into the CPU core to reduce the time spent waiting for data from the slower main RAM."
  },
  {
    "question": "Which of the following is a real-life application of an embedded system with a 'Small Footprint'?",
    "options": ["A Supercomputer", "A Pacemaker", "A Gaming Laptop", "A Web Server"],
    "correct": 1,
    "explanation": "A pacemaker requires a tiny physical size and ultra-low power (small footprint) to be implanted inside a human body."
  },
  {
    "question": "What happens during the 'Write Back' stage of the instruction cycle?",
    "options": ["The instruction is deleted from memory.", "The result of the execution is stored back into a register or memory location.", "The user is asked for input.", "The CPU is reset."],
    "correct": 1,
    "explanation": "Write back is the final stage where the output of the computation is committed to the intended destination (register or RAM)."
  },
  {
    "question": "In 'Little Endian' byte ordering, how is a multi-byte value stored?",
    "options": ["The most significant byte is stored at the lowest address.", "The least significant byte is stored at the lowest address.", "Bytes are stored in random order.", "Only the first byte is stored."],
    "correct": 1,
    "explanation": "Little Endian stores the 'little end' (LSB) first. For example, 0x1234 would be stored as 34 12 in memory."
  },
  {
    "question": "Which of the following is a characteristic of 'High-Level Languages' (HLL) in embedded systems?",
    "options": ["They are written in binary.", "They are portable and easier for humans to read but require a compiler.", "They provide the fastest possible execution speed compared to Assembly.", "They do not require any memory."],
    "correct": 1,
    "explanation": "HLLs like C or C++ allow developers to write code that can run on different processors with minimal changes, though they rely on a compiler to translate them to machine code."
  },
  {
    "question": "Scenario: You are designing a system for a 'Smart Microwave.' What is the most likely input component?",
    "options": ["A GPU", "A 1TB Hard Drive", "A Keypad/Touch Membrane", "A Mouse"],
    "correct": 2,
    "explanation": "Embedded systems in appliances use simple, cost-effective inputs like keypads to allow user interaction."
  },
  {
    "question": "What is the function of the 'Linker' in the compilation process?",
    "options": ["It translates C code to Assembly.", "It combines multiple object files into a single executable binary file.", "It checks the code for spelling mistakes.", "It downloads the code from the internet."],
    "correct": 1,
    "explanation": "The linker resolves references between different code files and libraries to create a complete program that the hardware can run."
  },
  {
    "question": "Which of these is a typical 'Register-to-Register' instruction?",
    "options": ["ADD R1, R2", "LOAD R1, [0x2000]", "STORE [0x3000], R1", "JUMP 0x1000"],
    "correct": 0,
    "explanation": "ADD R1, R2 takes values from two registers and stores the result in a register, without involving the slower main memory."
  },
  {
    "question": "What does the term 'Binary Format' refer to in embedded programming?",
    "options": ["A document written in two languages.", "A file containing only '0' and '1' characters as text.", "The raw machine code instructions that can be directly executed by the CPU.", "A way to compress images."],
    "correct": 2,
    "explanation": "Binary format (often .bin or .hex files) contains the exact bit patterns that will be flashed onto the microcontroller's memory."
  },
  {
    "question": "What is the advantage of using 'Indirect Addressing'?",
    "options": ["It is the fastest addressing mode.", "It allows for flexible data access, such as iterating through an array using a pointer.", "It doesn't use any registers.", "It makes the code impossible to hack."],
    "correct": 1,
    "explanation": "Indirect addressing uses a register to hold the *address* of the data, allowing the program to change which data it is looking at by simply changing the value in the register (essential for loops and arrays)."
  },
  {
    "question": "Which component manages the 'Memory Hierarchy' automatically in high-performance embedded processors?",
    "options": ["The User", "The Compiler", "The Memory Management Unit (MMU) / Cache Controller", "The Power Supply"],
    "correct": 2,
    "explanation": "The MMU and Cache Controller handle the movement of data between different levels of the hierarchy (Cache to RAM) without the programmer needing to write manual code for it."
  },
  {
    "question": "In the context of embedded systems, what is 'Firmware'?",
    "options": ["Software that is easy to change every day.", "A specific class of computer software that provides the low-level control for a device's specific hardware.", "The physical casing of the device.", "The user manual."],
    "correct": 1,
    "explanation": "Firmware is 'firm' because it is programmed into non-volatile memory and isn't intended to be changed frequently like an app on a PC."
  },
  {
    "question": "Which of the following is NOT a common application of embedded systems?",
    "options": ["Automotive Braking Systems (ABS)", "Digital Cameras", "General Purpose Video Editing Workstations", "Smart Watches"],
    "correct": 2,
    "explanation": "A video editing workstation is a general-purpose computer designed for many different tasks, whereas the others are dedicated to specific functions."
  },
  {
    "question": "What is the 'Instruction Cycle'?",
    "options": ["The time it takes to recharge the battery.", "The sequence of stages (Fetch, Decode, Execute) required to process a single instruction.", "The warranty period of the processor.", "The time it takes to boot the OS."],
    "correct": 1,
    "explanation": "The instruction cycle is the fundamental rhythm of a CPU, repeating millions of times per second to run code."
  },
  {
    "question": "Which type of ISA usually has a fixed instruction length (e.g., always 32 bits)?",
    "options": ["CISC", "RISC", "X86", "Python"],
    "correct": 1,
    "explanation": "RISC architectures use fixed-length instructions to make the 'Fetch' and 'Decode' stages faster and more predictable."
  },
  {
    "question": "What is 'Latent Heat' in the context of embedded hardware (specifically thermal management)?",
    "options": ["Heat generated by the processor that must be dissipated to prevent failure.", "A type of battery.", "A programming language.", "The speed of the fan."],
    "correct": 0,
    "explanation": "Embedded systems, especially high-performance ones, must manage heat (thermal characteristics) to ensure the hardware doesn't throttle or melt."
  },
  {
    "question": "The 'Von Neumann Bottleneck' is caused by:",
    "options": ["Having too many registers.", "Sharing a single bus for both instruction fetches and data transfers.", "Using too much power.", "The processor being too small."],
    "correct": 1,
    "explanation": "Because the CPU cannot do two things at once on a single bus, it must wait for an instruction to finish fetching before it can fetch data, which limits speed."
  },
  {
    "question": "What is an 'Operand' in a machine instruction?",
    "options": ["The name of the CPU.", "The data or the location of data that the instruction will act upon.", "The speed of the instruction.", "The person who wrote the code."],
    "correct": 1,
    "explanation": "In 'ADD R1, R2', the registers R1 and R2 are the operands—the 'objects' being added."
  },
  {
    "question": "Which register is used to point to the memory location of a function return address during a 'Call' instruction?",
    "options": ["Link Register (LR)", "Program Counter", "Status Register", "Accumulator"],
    "correct": 0,
    "explanation": "In many architectures like ARM, the Link Register (LR) stores the return address so the CPU knows where to go back to after a subroutine finishes."
  },
  {
    "question": "Which level of memory is typically the largest but slowest?",
    "options": ["L2 Cache", "Registers", "Secondary Storage (Flash/SD Card)", "SRAM"],
    "correct": 2,
    "explanation": "Secondary storage offers the highest capacity (GBs/TBs) but is significantly slower than internal CPU memory or RAM."
  },
  {
    "question": "What does 'Low-Level Language' usually refer to?",
    "options": ["Languages that are easy for kids to learn.", "Languages like Assembly that are very close to the hardware architecture.", "Languages used for website design.", "Languages that only use lowercase letters."],
    "correct": 1,
    "explanation": "Low-level languages provide little abstraction from the hardware, giving the programmer direct control over registers and memory."
  },
  {
    "question": "Scenario: A system needs to keep track of the time even when the main power is turned off. What component is needed?",
    "options": ["A faster CPU", "A Real-Time Clock (RTC) with a backup battery", "More RAM", "An Ethernet port"],
    "correct": 1,
    "explanation": "An RTC is a specialized embedded component that maintains the current time and date independently of the main processor's activity."
  },
  {
    "question": "What is the main advantage of 'CISC' (Complex Instruction Set Computer) architectures?",
    "options": ["They use very little power.", "A single instruction can perform complex tasks (like loading from memory, adding, and storing).", "They are very simple to design.", "They only have 10 instructions."],
    "correct": 1,
    "explanation": "CISC (like x86) focuses on reducing the number of instructions per program by making each instruction more powerful/complex."
  },
  {
    "question": "Which characteristic of an embedded system refers to its ability to work without human intervention for long periods?",
    "options": ["Reliability/Autonomy", "Graphics Performance", "Keyboard speed", "Color depth"],
    "correct": 0,
    "explanation": "Embedded systems (like those in a satellite or a remote weather station) must be highly reliable and autonomous."
  },
  {
    "question": "In the Fetch stage, from where is the instruction typically fetched?",
    "options": ["From the ALU", "From the Program Memory (Flash/ROM)", "From the user's keyboard", "From the Status Register"],
    "correct": 1,
    "explanation": "Program code is stored in non-volatile program memory, which the CPU accesses during the Fetch stage."
  },
  {
    "question": "What is 'SRAM' typically used for in small microcontrollers?",
    "options": ["Permanent program storage", "Data memory (stack and heap)", "The physical pins", "The power regulator"],
    "correct": 1,
    "explanation": "Static RAM (SRAM) is used for data memory because it is fast and doesn't need refreshing, making it perfect for the stack and variables."
  },
  {
    "question": "Which of these represents a 'System on Chip' (SoC)?",
    "options": ["A motherboard with many separate chips.", "An integrated circuit that integrates all components of a computer or other electronic system into a single chip.", "A single resistor.", "A cloud server."],
    "correct": 1,
    "explanation": "An SoC (like the ones in smartphones) combines the CPU, GPU, Memory, and Wireless radios all onto one piece of silicon."
  },
  {
    "question": "What is the 'Address Bus' used for?",
    "options": ["To carry the actual data between components.", "To specify which memory location or I/O device the CPU wants to communicate with.", "To provide power to the memory.", "To connect to the internet."],
    "correct": 1,
    "explanation": "The Address Bus is a 'one-way' street from the CPU to memory/peripherals that indicates the 'where' of an operation."
  },
  {
    "question": "What is the primary function of a 'Compiler'?",
    "options": ["To run the code line by line.", "To translate high-level source code (C/C++) into object code/machine code.", "To fix hardware errors.", "To clean the processor."],
    "correct": 1,
    "explanation": "Compilers take human-readable code and transform it into the binary instructions that the hardware actually executes."
  },
  {
    "question": "Which feature of a microcontroller allows it to respond to external events (like a button press) immediately?",
    "options": ["Polling", "Interrupts", "Loops", "Recursion"],
    "correct": 1,
    "explanation": "Interrupts 'interrupt' the current flow of the program to handle an urgent event, ensuring a fast and efficient response."
  },
  {
    "question": "Which component in the CPU performs 'Logical AND/OR' operations?",
    "options": ["Control Unit", "Arithmetic Logic Unit (ALU)", "Program Counter", "Memory Interface"],
    "correct": 1,
    "explanation": "The ALU is responsible for all mathematical (Add/Sub) and logical (And/Or/Not) computations."
  },
  {
    "question": "What is the effect of 'Instruction Pipelining'?",
    "options": ["It makes each individual instruction finish faster.", "It increases the overall throughput by overlapping the stages of multiple instructions.", "It reduces the amount of memory needed.", "It prevents the CPU from getting hot."],
    "correct": 1,
    "explanation": "Pipelining works like an assembly line; while one instruction is being executed, the next is being decoded, and the one after that is being fetched."
  },
  {
    "question": "Scenario: You are designing a 'Smart Irrigation System' that checks soil moisture every hour. What type of system is this?",
    "options": ["High-Performance Computing", "Event-Driven/Periodic Embedded System", "A general-purpose server", "A supercomputer"],
    "correct": 1,
    "explanation": "This is a classic embedded application that monitors sensors and acts periodically to conserve water."
  },
  {
    "question": "What is 'EEPROM' primarily used for in embedded systems?",
    "options": ["Storing large video files.", "Storing small amounts of data that must be kept when power is off (like user settings/calibration).", "Replacing the CPU.", "Speeding up the internet."],
    "correct": 1,
    "explanation": "EEPROM (Electrically Erasable Programmable ROM) is great for 'non-volatile' storage of small settings that might need to be updated occasionally."
  },
  {
    "question": "What does 'Fetch' mean in the CPU cycle?",
    "options": ["Calculating the result.", "Retrieving an instruction from memory.", "Sending data to a printer.", "Deleting a file."],
    "correct": 1,
    "explanation": "Fetch is the act of reading the binary instruction from the address pointed to by the Program Counter."
  },
  {
    "question": "Which of the following is a 'Control Signal'?",
    "options": ["The number 5.", "Read/Write (R/W) signal.", "The letter 'A'.", "An image file."],
    "correct": 1,
    "explanation": "Control signals are sent by the Control Unit to tell memory or I/O devices whether the CPU wants to 'read' or 'write' data."
  },
  {
    "question": "What is the 'Word Size' of a processor?",
    "options": ["How many words it can store in a text file.", "The natural size of data the CPU can handle in one go (e.g., 8-bit, 16-bit, 32-bit).", "The physical size of the chip.", "The speed of the cooling fan."],
    "correct": 1,
    "explanation": "Word size defines the internal architecture's width, affecting how much data can be moved and calculated at once."
  },
  {
    "question": "In the context of 'Instruction Sets,' what is a 'Literal'?",
    "options": ["A type of register.", "A constant value encoded directly into the instruction.", "A hardware error.", "A user's name."],
    "correct": 1,
    "explanation": "A literal is another name for a fixed numerical value used in immediate addressing (e.g., in 'ADD R1, #5', the #5 is a literal)."
  },
  {
    "question": "What is the primary benefit of 'Memory-Mapped I/O'?",
    "options": ["It makes I/O devices faster than CPU registers.", "It allows the CPU to use the same instructions for both memory and I/O access.", "It uses less power than other methods.", "It requires no wires."],
    "correct": 1,
    "explanation": "Memory-mapped I/O treats hardware peripherals like memory addresses, simplifying the instruction set since 'MOVE' can send data to RAM or to a Serial Port."
  },
  {
    "question": "Which part of the memory hierarchy is volatile?",
    "options": ["ROM", "Flash", "RAM", "EEPROM"],
    "correct": 2,
    "explanation": "Volatile memory (RAM) loses its contents as soon as the power is turned off."
  },
  {
    "question": "What is the 'Execution Unit' in a CPU?",
    "options": ["The part that fetches code.", "The part that actually carries out the instruction using the ALU.", "The power cable.", "The software compiler."],
    "correct": 1,
    "explanation": "The Execution Unit is the hardware core where the actual processing (math, logic, data movement) takes place."
  },
  {
    "question": "What does a 'Cross-Compiler' do?",
    "options": ["Compiles code for the same machine it is running on.", "Runs on one architecture (e.g., x86 PC) but generates code for a different architecture (e.g., ARM Microcontroller).", "Translates English to Spanish.", "Combines two different programs."],
    "correct": 1,
    "explanation": "Since microcontrollers are too small to run a full compiler, we use cross-compilers on powerful PCs to create the code for the embedded device."
  },
  {
    "question": "Which of the following is a 'High-Performance' embedded system application?",
    "options": ["A basic digital watch", "A simple calculator", "An autonomous vehicle's vision processing system", "A light switch"],
    "correct": 2,
    "explanation": "Self-driving cars require massive computational power (High-Performance) to process camera data in real-time, unlike a simple watch."
  },
  {
    "question": "What is the 'Opcode Fetch' cycle?",
    "options": ["Fetching the data for an instruction.", "The specific part of the fetch cycle that retrieves the operation code from memory.", "The time it takes to print a document.", "The process of turning off the CPU."],
    "correct": 1,
    "explanation": "The CPU must first fetch the Opcode to know what the instruction is before it knows if it needs to fetch additional data (operands)."
  },
  {
    "question": "What defines a '3-Stage Pipeline'?",
    "options": ["Having 3 different CPUs.", "Breaking the instruction cycle into Fetch, Decode, and Execute stages that run in parallel for different instructions.", "Using 3 types of memory.", "The program having only 3 lines of code."],
    "correct": 1,
    "explanation": "A 3-stage pipeline allows the processor to work on three different instructions at various stages of completion simultaneously."
  },
  {
    "question": "What is 'Endianness'?",
    "options": ["The speed of the CPU.", "The order in which bytes are stored in memory for multi-byte data types.", "The type of plastic used for the chip.", "The programming language version."],
    "correct": 1,
    "explanation": "Endianness (Big or Little) determines if the most or least significant byte is stored at the starting memory address."
  },
  {
    "question": "Which of these is a 'Non-Preemptive' characteristic?",
    "options": ["A task can be interrupted at any time.", "A task runs until it either completes or voluntarily gives up the CPU.", "The OS decides who runs every 1ms.", "The CPU is turned off."],
    "correct": 1,
    "explanation": "In non-preemptive systems, the running task has full control and cannot be 'kicked off' the CPU by the OS or other tasks."
  },
  {
    "question": "What is a 'Register File'?",
    "options": ["A document on the hard drive.", "An array of processor registers in a CPU.", "A list of users.", "A type of folder in Windows."],
    "correct": 1,
    "explanation": "The Register File is the high-speed internal storage area where all the general-purpose registers (like R0-R15) are located."
  },
  {
    "question": "What is 'Branching' in an instruction set?",
    "options": ["Adding two numbers.", "Changing the flow of execution to a different part of the program (e.g., If/Else, Loops).", "Turning the power off.", "Connecting to a printer."],
    "correct": 1,
    "explanation": "Branch instructions (like JUMP or BRANCH) change the value in the Program Counter, causing the CPU to 'jump' to a different block of code."
  },
  {
    "question": "What is the main purpose of 'Watchdog Timers' in embedded systems?",
    "options": ["To tell the time of day.", "To automatically reset the system if the software hangs or crashes.", "To speed up the CPU.", "To play music."],
    "correct": 1,
    "explanation": "A Watchdog Timer is a safety mechanism; the software must 'pet the dog' (reset the timer) regularly. If the software freezes, the timer expires and resets the CPU."
  },
  {
    "question": "Which of the following is 'Volatile Memory'?",
    "options": ["Flash", "SRAM", "ROM", "EEPROM"],
    "correct": 1,
    "explanation": "Static Random Access Memory (SRAM) is volatile, meaning it requires power to maintain the stored information."
  },
  {
    "question": "What is the 'Instruction Format'?",
    "options": ["The size of the paper the manual is printed on.", "The layout of bits in an instruction (e.g., which bits are opcode, which are registers).", "The font used in the code editor.", "The speed of the instruction execution."],
    "correct": 1,
    "explanation": "The instruction format defines how the CPU hardware interprets the 0s and 1s of a command."
  },
  {
    "question": "In the Fetch-Decode-Execute cycle, where is the result of an 'ALU' operation usually stored first?",
    "options": ["In the Flash memory.", "In a General Purpose Register or Accumulator.", "On the internet.", "In the Instruction Register."],
    "correct": 1,
    "explanation": "Calculated results are kept in fast registers for immediate use or further calculation before being moved to slower RAM."
  },
  {
    "question": "What is 'Thumb Mode' in ARM processors?",
    "options": ["A mode for playing games.", "A state where the processor executes a compressed 16-bit instruction set to save memory.", "A mode that uses less power by slowing down the clock.", "A mode for manual input."],
    "correct": 1,
    "explanation": "Thumb mode uses 16-bit instructions instead of the standard 32-bit ones, allowing for better code density in systems with limited memory."
  },
  {
    "question": "What is 'Pipeline Flush'?",
    "options": ["Cleaning the physical hardware.", "Emptying the pipeline of instructions because a branch/jump changed the program flow.", "Increasing the voltage.", "Deleting the program."],
    "correct": 1,
    "explanation": "When a program jumps to a new location, the instructions already partially processed in the pipeline are no longer valid and must be 'flushed' (cleared)."
  },
  {
    "question": "Which of these is a typical 'Embedded C' extension feature?",
    "options": ["Support for web browsers.", "Direct register access and fixed-point arithmetic.", "Automatic social media posting.", "3D graphics rendering."],
    "correct": 1,
    "explanation": "Embedded C includes features that standard C doesn't focus on, like directly manipulating hardware addresses and managing limited-precision math."
  },
  {
    "question": "What is 'Instruction Throughput'?",
    "options": ["The size of the instruction.", "The number of instructions completed per unit of time.", "The time it takes to fetch one instruction.", "The power used by one instruction."],
    "correct": 1,
    "explanation": "Throughput measures the overall efficiency of the CPU, especially in pipelined architectures where multiple instructions are handled at once."
  },
  {
    "question": "What is the function of the 'Bus Matrix' in a modern SoC?",
    "options": ["To connect the screen to the battery.", "To allow multiple 'masters' (like CPU and DMA) to access different 'slaves' (like RAM and I/O) simultaneously.", "To store data.", "To cool the chip."],
    "correct": 1,
    "explanation": "A bus matrix prevents congestion by providing multiple paths for data to move between different parts of the chip at the same time."
  },
  {
    "question": "In 'Harvard Architecture', can the CPU fetch an instruction and data at the same time?",
    "options": ["No, never.", "Yes, because they have separate buses.", "Only if the CPU is very fast.", "Only on weekends."],
    "correct": 1,
    "explanation": "The dual-bus structure is the defining feature that allows simultaneous access to program and data memory."
  },
  {
    "question": "Which addressing mode is used in 'MOVE R1, R2'?",
    "options": ["Immediate", "Direct", "Register", "Indexed"],
    "correct": 2,
    "explanation": "Register addressing uses the contents of CPU registers as the source and destination for data."
  },
  {
    "question": "What is 'Shadowing' in memory systems?",
    "options": ["Copying code from slow ROM to fast RAM for quicker execution.", "A type of hacking.", "Making the chip dark.", "Deleting old data."],
    "correct": 0,
    "explanation": "Shadowing improves performance by running the firmware from fast RAM instead of the slower Flash/ROM memory."
  },
  {
    "question": "Which component is responsible for 'Clock Generation' in an embedded system?",
    "options": ["The Capacitor", "The Crystal Oscillator", "The Resistor", "The User"],
    "correct": 1,
    "explanation": "A crystal oscillator provides the steady 'heartbeat' (clock signal) that synchronizes all digital logic in the system."
  },
  {
    "question": "What is the primary goal of 'Power Management' in embedded systems?",
    "options": ["To make the device as hot as possible.", "To extend battery life by putting components into sleep modes when not needed.", "To increase the cost of the device.", "To use as much electricity as possible."],
    "correct": 1,
    "explanation": "Power management is critical for portable devices to ensure they can function as long as possible on a single charge."
  },
  {
    "question": "What is 'Direct Memory Access' (DMA)?",
    "options": ["The CPU reading memory directly.", "A feature that allows hardware peripherals to transfer data directly to/from memory without involving the CPU.", "Connecting a hard drive to a PC.", "A type of RAM."],
    "correct": 1,
    "explanation": "DMA offloads data transfer tasks from the CPU, allowing the processor to focus on calculations while data moves in the background."
  },
  {
    "question": "Which type of register is used to manage 'Interrupt Priority'?",
    "options": ["The ALU", "Interrupt Controller Registers", "The Stack Pointer", "The Program Counter"],
    "correct": 1,
    "explanation": "The Nested Vectored Interrupt Controller (NVIC) or similar hardware uses specific registers to decide which interrupt is most important."
  },
  {
    "question": "What is a 'Bare-Metal' embedded system?",
    "options": ["A system made of heavy metal.", "A system where the application code runs directly on the hardware without an Operating System (RTOS).", "A system with no wires.", "A system that is not programmed."],
    "correct": 1,
    "explanation": "Bare-metal programming is common in simple or ultra-fast systems where the overhead of an OS is not needed."
  },
  {
    "question": "What is the purpose of the 'Reset Vector'?",
    "options": ["To turn off the device.", "The memory address where the CPU looks for the first instruction to execute after a reset.", "To delete the program.", "To change the clock speed."],
    "correct": 1,
    "explanation": "The Reset Vector is the 'starting line' for the processor; it tells the CPU exactly where the program begins in memory."
  },
  {
    "question": "Which of the following is a 'Parallel' communication interface?",
    "options": ["UART", "SPI", "External Memory Interface (EMIF)", "I2C"],
    "correct": 2,
    "explanation": "While UART, SPI, and I2C are serial (one bit at a time), memory interfaces are usually parallel (many bits at a time) to maximize speed."
  },
  {
    "question": "What is 'JTAG' used for?",
    "options": ["Playing video games.", "Hardware debugging and programming microcontrollers.", "Connecting to Wi-Fi.", "Powering the device."],
    "correct": 1,
    "explanation": "JTAG is a standard interface used by engineers to look inside the chip, step through code, and check register values during development."
  },
  {
    "question": "Which part of the CPU is considered 'Combinational Logic'?",
    "options": ["The Registers", "The ALU", "The Cache", "The RAM"],
    "correct": 1,
    "explanation": "The ALU is made of combinational logic (gates) that produce an output based solely on the current inputs, whereas registers are sequential logic (they store state)."
  }
,
  {
    "question": "In embedded debugging, what is a 'Breakpoint'?",
    "options": ["A physical crack in the circuit board.", "A specific point in the code where the execution is paused to inspect the system state.", "The moment the battery runs out.", "A hardware signal that increases CPU speed."],
    "correct": 1,
    "explanation": "Breakpoints allow developers to stop the program at a specific line of code to check variables and register values in real-time."
  },
  {
    "question": "Which of the following is a 'Software Trace' debugging technique?",
    "options": ["Using an oscilloscope on the power pins.", "Adding 'Printf' statements to send status messages to a console.", "Replacing the CPU with a faster one.", "Measuring the physical temperature of the chip."],
    "correct": 1,
    "explanation": "Software tracing involves logging data during execution (like Printf debugging) to understand the flow of the program without stopping it."
  },
  {
    "question": "What is the primary role of a 'Kernel' in an Embedded OS?",
    "options": ["To provide a user interface for the consumer.", "To manage hardware resources and schedule tasks.", "To store the user's photos.", "To connect to the local Wi-Fi network."],
    "correct": 1,
    "explanation": "The kernel is the core of the OS that handles the low-level details of CPU scheduling, memory management, and hardware communication."
  },
  {
    "question": "Which debugging tool allows you to observe high-speed digital signals and timing relationships between multiple pins?",
    "options": ["Multimeter", "Logic Analyzer", "Compiler", "Text Editor"],
    "correct": 1,
    "explanation": "A logic analyzer captures and displays multiple digital signals, making it essential for debugging communication protocols like SPI or I2C."
  },
  {
    "question": "What is 'In-Circuit Emulation' (ICE)?",
    "options": ["Running the code on a virtual PC simulator.", "Using hardware that replaces the microcontroller to provide full visibility and control of the internal state.", "Cooling the circuit with ice.", "A type of internet connection."],
    "correct": 1,
    "explanation": "ICE provides the most powerful debugging by letting the developer see exactly what is happening inside the processor's registers and buses."
  },
  {
    "question": "What is the difference between a 'Monolithic Kernel' and a 'Microkernel'?",
    "options": ["Monolithic is smaller than Microkernel.", "Monolithic includes all services in the kernel; Microkernel moves most services to user space.", "Microkernel is only for supercomputers.", "There is no difference."],
    "correct": 1,
    "explanation": "Microkernels are often used in embedded systems for better reliability; if a driver fails in user space, the kernel remains stable."
  },
  {
    "question": "Scenario: Your embedded device crashes only after 10 hours of operation. What is a likely cause to investigate?",
    "options": ["A syntax error in the code.", "A memory leak or stack overflow.", "The CPU is too small.", "The wrong color of wires."],
    "correct": 1,
    "explanation": "Long-term crashes are often caused by memory leaks (slowly using up RAM) or the stack gradually growing until it corrupts other data."
  },
  {
    "question": "What does a 'Device Driver' provide to the application layer?",
    "options": ["The raw binary of the program.", "An abstraction layer to interact with hardware using simple function calls.", "Physical power to the motors.", "A way to download more RAM."],
    "correct": 1,
    "explanation": "Drivers hide the complexity of hardware registers, allowing an app to simply call 'Read_Sensor()' instead of manipulating individual bits."
  },
  {
    "question": "What is 'High-Performance Computing' (HPC) in the context of embedded systems?",
    "options": ["Using a standard calculator.", "The use of parallel processing and optimized hardware to solve complex computational tasks (e.g., AI/ML).", "Increasing the volume of a speaker.", "Connecting many batteries together."],
    "correct": 1,
    "explanation": "Embedded HPC is found in advanced applications like medical imaging, autonomous driving, and real-time signal processing."
  },
  {
    "question": "Which component is responsible for 'Context Switching'?",
    "options": ["The ALU", "The OS Scheduler", "The Flash Memory", "The User"],
    "correct": 1,
    "explanation": "The scheduler performs context switching by saving the state of the current task and loading the state of the next task."
  },
  {
    "question": "What is a 'Heisenbug' in embedded systems?",
    "options": ["A bug that is very easy to find.", "A bug that disappears or changes behavior when you try to study/debug it.", "A bug that only happens in winter.", "A bug caused by the compiler."],
    "correct": 1,
    "explanation": "Heisenbugs often occur in real-time systems where adding a 'printf' for debugging changes the timing enough to make the bug stop happening."
  },
  {
    "question": "What is 'Profiling' in the context of system optimization?",
    "options": ["Creating a user account.", "Measuring the execution time and resource usage of different parts of the code.", "Drawing the circuit board.", "Selecting the type of plastic for the case."],
    "correct": 1,
    "explanation": "Profiling helps engineers identify 'bottlenecks'—parts of the code that are slow or consume too much power."
  },
  {
    "question": "Which of these is a 'Hardware Debugging' best practice?",
    "options": ["Ignoring ground connections.", "Checking power rail voltages with an oscilloscope first.", "Touching the chip with bare hands while powered.", "Guessing which pin is which."],
    "correct": 1,
    "explanation": "Ensuring clean and stable power is the first step in hardware debugging, as unstable power causes unpredictable software behavior."
  },
  {
    "question": "What is the 'Kernel Space'?",
    "options": ["A game about space.", "A privileged area of memory where the OS kernel runs and has full hardware access.", "The empty space on a circuit board.", "The area where user apps like 'Snake' run."],
    "correct": 1,
    "explanation": "Kernel space is protected; user applications cannot enter it directly, which prevents a bug in an app from crashing the entire system."
  },
  {
    "question": "In a 'Fetch-Decode-Execute' cycle, what is 'Machine Code' the output of?",
    "options": ["The Fetcher", "The Compiler/Assembler", "The ALU", "The User Interface"],
    "correct": 1,
    "explanation": "The compiler transforms high-level logic into the machine code (binary) that the hardware follows."
  },
  {
    "question": "What is 'Deterministic Scheduling'?",
    "options": ["Scheduling tasks randomly.", "A system where the time taken to switch tasks and the time a task starts are predictable.", "The OS deciding to turn off at 5 PM.", "A system that never switches tasks."],
    "correct": 1,
    "explanation": "In an RTOS, determinism is vital so that critical tasks (like firing an airbag) always happen at the exact right moment."
  },
  {
    "question": "What is an 'Instruction Set Appendix' typically used for?",
    "options": ["To store user data.", "As a reference for the technical details, opcodes, and cycles of every instruction the CPU supports.", "To connect to the internet.", "To cool the processor."],
    "correct": 1,
    "explanation": "Developers use the instruction set appendix to write efficient assembly code or to understand exactly how the hardware processes a command."
  },
  {
    "question": "What is the main challenge of 'Embedded Debugging' compared to PC debugging?",
    "options": ["Embedded systems have more memory.", "Embedded systems often lack a screen/keyboard and have strict real-time constraints.", "Embedded systems are too large.", "Embedded systems don't use binary."],
    "correct": 1,
    "explanation": "You can't just 'look' at what an embedded system is doing without specialized tools like JTAG or serial logs."
  },
  {
    "question": "What is 'Static Analysis'?",
    "options": ["Testing the code while it is running.", "Examining the source code without executing it to find potential errors or security flaws.", "Measuring static electricity on the chip.", "Checking if the hardware is still."],
    "correct": 1,
    "explanation": "Static analysis tools (like Linters) catch errors like uninitialized variables or potential buffer overflows before the code is even compiled."
  },
  {
    "question": "What is a 'Board Support Package' (BSP)?",
    "options": ["A box the circuit comes in.", "A set of drivers and initialization code that allows an OS to run on a specific hardware board.", "A social group for engineers.", "A type of battery."],
    "correct": 1,
    "explanation": "The BSP is the 'glue' between the hardware board and the operating system."
  },
  {
    "question": "Which of the following is an 'Instruction Cycle' component?",
    "options": ["The battery life.", "The Fetch stage.", "The color of the chip.", "The price of the RAM."],
    "correct": 1,
    "explanation": "The Instruction Cycle consists of Fetch, Decode, Execute, and sometimes Write-back."
  },
  {
    "question": "In HPC embedded systems, what is 'Parallelism'?",
    "options": ["Running only one task at a time.", "The ability to execute multiple calculations or tasks simultaneously using multiple cores or pipelines.", "Drawing two lines that never touch.", "Using only one register."],
    "correct": 1,
    "explanation": "Parallelism (like using a Quad-core ARM processor) allows an embedded system to process data much faster by splitting the workload."
  },
  {
    "question": "What is the purpose of 'Regression Testing' in embedded development?",
    "options": ["To make the code older.", "To ensure that new changes or bug fixes haven't broken existing functionality.", "To test the system at high temperatures.", "To delete the program."],
    "correct": 1,
    "explanation": "Regression testing ensures that when you fix a bug in the 'Lights' module, you haven't accidentally broken the 'Brakes' module."
  },
  {
    "question": "Which type of debugging uses a 'Simulator'?",
    "options": ["Hardware-in-the-loop debugging.", "Software-only debugging where the hardware is modeled on a PC.", "Testing the device in a wind tunnel.", "Using a real-life robot."],
    "correct": 1,
    "explanation": "Simulators allow you to test logic before the physical hardware is even manufactured."
  },
  {
    "question": "What is the 'Instruction Format' field that specifies where to find the data?",
    "options": ["The Opcode", "The Operand field", "The Header", "The Signature"],
    "correct": 1,
    "explanation": "The Operand field in the instruction format indicates whether the data is in a register, a memory address, or a literal value."
  },
  {
    "question": "What is 'Latency' in an embedded OS?",
    "options": ["The total amount of memory.", "The delay between an event occurring (like an interrupt) and the system responding to it.", "The speed of the processor clock.", "The weight of the device."],
    "correct": 1,
    "explanation": "Low latency is a key requirement for real-time systems to ensure immediate responses to critical sensors."
  },
  {
    "question": "Why is 'Hardware-Software Co-design' important?",
    "options": ["To make the engineers argue less.", "To optimize the system by designing hardware and software together for better performance and lower cost.", "To ensure the hardware is made of software.", "To avoid using any memory."],
    "correct": 1,
    "explanation": "By designing both at once, you can decide which functions are best handled by fast hardware circuits and which by flexible software."
  },
  {
    "question": "What is 'Remote Debugging'?",
    "options": ["Debugging using a TV remote.", "Debugging a target device from a host PC connected via a communication link (like Ethernet or USB).", "Debugging while on vacation.", "A system that doesn't need debugging."],
    "correct": 1,
    "explanation": "Remote debugging is the standard way to program and test embedded chips from a laptop."
  },
  {
    "question": "Which of the following is a 'Kernel Service'?",
    "options": ["Playing a movie.", "Inter-Process Communication (IPC).", "Editing a text file.", "Browsing the web."],
    "correct": 1,
    "explanation": "IPC is a service provided by the kernel to allow different tasks/threads to share data safely."
  },
  {
    "question": "What is the 'Machine Code' for 'STOP' or 'HALT' usually used for?",
    "options": ["To speed up the CPU.", "To put the processor into a low-power state or stop execution until an interrupt occurs.", "To reset the internet.", "To increase the volume."],
    "correct": 1,
    "explanation": "The HALT instruction is essential for power saving; it tells the CPU to stop fetching instructions and wait quietly for something to do."
  },
  {
    "question": "In 'Address Decoding,' what is the 'Address Space'?",
    "options": ["The physical size of the RAM chip.", "The total range of unique addresses the CPU can access.", "The space between the CPU and the RAM.", "The name of the memory manufacturer."],
    "correct": 1,
    "explanation": "A 16-bit CPU has an address space of $2^{16}$ (65,536) unique locations."
  },
  {
    "question": "What is 'Throughput' in a high-performance embedded system?",
    "options": ["The time it takes to process one bit.", "The total amount of work/data processed in a given period of time.", "The physical width of the bus.", "The number of buttons on the device."],
    "correct": 1,
    "explanation": "Throughput is often measured in instructions per second (MIPS) or floating-point operations (FLOPS)."
  },
  {
    "question": "What is 'Post-Mortem Debugging'?",
    "options": ["Debugging a system that is currently running.", "Analyzing the state of a system (like a crash dump) after it has failed.", "Debugging a system before it is built.", "Cleaning the circuit board."],
    "correct": 1,
    "explanation": "When a satellite or a car ECU crashes, engineers look at the 'dump' file to see the register values at the exact moment of 'death'."
  },
  {
    "question": "Which component manages the 'Instruction Set Architecture' (ISA) during execution?",
    "options": ["The User", "The Control Unit of the CPU", "The Power Supply", "The External Hard Drive"],
    "correct": 1,
    "explanation": "The Control Unit is the 'brain' that understands the ISA and signals the ALU and registers to perform the correct actions."
  },
  {
    "question": "What is a 'Race Condition' in multitasking?",
    "options": ["A competition to see who can code faster.", "A bug where the system's behavior depends on the unpredictable sequence or timing of events.", "A mode that makes the CPU run at max speed.", "When two CPUs are placed in parallel."],
    "correct": 1,
    "explanation": "Race conditions occur when two threads try to change the same variable at the same time, leading to corrupted data."
  },
  {
    "question": "What is the function of the 'Linker Script'?",
    "options": ["To write the code in C.", "To define where in the physical memory (Flash/RAM) the different parts of the program should be placed.", "To connect the device to the Wi-Fi.", "To list the names of the programmers."],
    "correct": 1,
    "explanation": "The linker script tells the compiler: 'Put the code in Flash at address 0x08000000 and put the variables in RAM at 0x20000000'."
  },
  {
    "question": "In an instruction cycle, what is 'Fetch Latency'?",
    "options": ["The time taken to execute the instruction.", "The time delay between the CPU requesting an instruction and receiving it from memory.", "The size of the instruction.", "The power used to fetch."],
    "correct": 1,
    "explanation": "Fetch latency is a major factor in performance; if the memory is slow, the CPU stays idle waiting for code."
  },
  {
    "question": "What is 'Instruction Level Parallelism' (ILP)?",
    "options": ["Running two different programs at once.", "The ability to execute multiple instructions from a single program simultaneously (e.g., Superscalar).", "Using two keyboards.", "Having a very long program."],
    "correct": 1,
    "explanation": "ILP allows a single CPU core to be more efficient by finding instructions that don't depend on each other and running them at the same time."
  },
  {
    "question": "What is 'Jitter' in a real-time system?",
    "options": ["The physical shaking of the device.", "The variation in the time between scheduled events or responses.", "The speed of the internet.", "A type of software bug that deletes files."],
    "correct": 1,
    "explanation": "Low jitter is important; if a motor controller expects a signal every 10ms, but it arrives at 9ms then 11ms, the motor will run roughly."
  },
  {
    "question": "Scenario: You are debugging a communication issue where data is 'garbled.' Which tool is best to check the timing of the bits?",
    "options": ["A Compiler", "An Oscilloscope or Logic Analyzer", "A Text Editor", "A Database"],
    "correct": 1,
    "explanation": "Visualizing the actual electrical pulses (bits) is the only way to see if the timing (baud rate) is correct."
  },
  {
    "question": "What is the purpose of the 'Stack Overflow' detection?",
    "options": ["To make the system faster.", "To prevent a function from using more memory than allocated, which would overwrite other data.", "To increase the size of the RAM.", "To check the battery level."],
    "correct": 1,
    "explanation": "If the stack 'overflows,' it can corrupt the return addresses, causing the program to jump to a random location and crash."
  },
  {
    "question": "What is 'Code Density'?",
    "options": ["How heavy the code is.", "The amount of functionality packed into a given size of memory.", "The number of comments in the code.", "The speed of the compiler."],
    "correct": 1,
    "explanation": "High code density is vital for embedded systems with very little Flash memory (e.g., using 16-bit instructions instead of 32-bit)."
  },
  {
    "question": "Which of the following is a 'Debug Port'?",
    "options": ["HDMI", "SWD (Serial Wire Debug)", "VGA", "SATA"],
    "correct": 1,
    "explanation": "SWD is a common 2-pin interface used for debugging ARM microcontrollers."
  },
  {
    "question": "What is 'Task Latency'?",
    "options": ["The time it takes to write a task.", "The time from when a task is ready to run until it actually starts executing.", "The time the task takes to finish.", "The size of the task in memory."],
    "correct": 1,
    "explanation": "High task latency can be dangerous in safety systems (like brakes) where a task must start immediately."
  },
  {
    "question": "What is 'Big Endian'?",
    "options": ["A very large processor.", "A system where the most significant byte is stored at the lowest memory address.", "A system with a lot of RAM.", "A mode that uses more power."],
    "correct": 1,
    "explanation": "Big Endian is 'natural' order (like reading a book); the 'big' end of the number comes first."
  },
  {
    "question": "What is a 'Hard Fault' in an ARM processor?",
    "options": ["A physical break in the chip.", "An exception that occurs when the processor cannot execute an instruction due to an error (like accessing invalid memory).", "The battery being empty.", "The screen turning off."],
    "correct": 1,
    "explanation": "A hard fault is like a 'Blue Screen of Death' for microcontrollers; it means something went seriously wrong in the software logic."
  },
  {
    "question": "What is 'Instruction Fusion'?",
    "options": ["Melting the processor.", "Combining two instructions into one to save time and energy.", "Using two compilers.", "Deleting code."],
    "correct": 1,
    "explanation": "Modern high-performance CPUs can 'fuse' a compare and a jump instruction into one internal operation to speed up execution."
  },
  {
    "question": "What is the 'Instruction Fetch Unit'?",
    "options": ["The part of the CPU that gets code from memory.", "A person who writes code.", "A type of memory chip.", "The part that calculates math."],
    "correct": 0,
    "explanation": "The Fetch Unit works ahead of the execution to make sure the CPU always has instructions ready to go."
  },
  {
    "question": "Which is an 'Objective' of embedded debugging?",
    "options": ["To make the code longer.", "To identify and resolve functional, timing, and logical errors.", "To use more power.", "To hide the code from users."],
    "correct": 1,
    "explanation": "The goal is a stable, efficient system that meets all functional and timing requirements."
  },
  {
    "question": "What is 'Memory Leakage'?",
    "options": ["Memory falling out of the chip.", "Failure to release allocated memory, eventually leading to the system running out of RAM.", "The CPU getting too hot.", "Data being sent to the wrong address."],
    "correct": 1,
    "explanation": "Even a tiny leak can crash a system that is supposed to run for years (like a satellite)."
  },
  {
    "question": "What does 'ISA' independence mean?",
    "options": ["The CPU doesn't need an ISA.", "The ability of high-level code to be compiled for different instruction sets (e.g., ARM or x86).", "The ISA changes itself.", "Only one company can use the ISA."],
    "correct": 1,
    "explanation": "High-level languages allow a 'write once, compile anywhere' approach, protecting the software investment."
  },
  {
    "question": "What is 'Zero-copy' in device drivers?",
    "options": ["Copying data zero times.", "A technique where the CPU avoids moving data between buffers to increase performance.", "Deleting all data.", "Having no backup."],
    "correct": 1,
    "explanation": "Zero-copy is essential for HPC and networking; moving data takes time, so it's better to just pass a 'pointer' to where the data already is."
  },
  {
    "question": "What is 'Emulation'?",
    "options": ["The hardware performing a task.", "Using software to imitate the behavior of a different hardware system.", "A type of battery charging.", "Building the chip."],
    "correct": 1,
    "explanation": "You can 'emulate' an old GameBoy on your phone by using software that acts like the GameBoy's processor."
  },
  {
    "question": "What is the 'Execution Time' of a task?",
    "options": ["The time the task spends waiting.", "The actual time the CPU spends processing the task's instructions.", "The time it takes to download the task.", "The time the task was created."],
    "correct": 1,
    "explanation": "Execution time is a key part of the 'Worst Case Execution Time' (WCET) analysis used in safety systems."
  },
  {
    "question": "Which register is usually updated automatically after every 'Fetch'?",
    "options": ["The Accumulator", "The Program Counter (PC)", "The Status Register", "The Stack Pointer"],
    "correct": 1,
    "explanation": "After fetching an instruction, the PC increments to point to the *next* instruction in the sequence."
  },
  {
    "question": "What is 'Watchpoint'?",
    "options": ["A clock on the wall.", "A debug feature that pauses execution when a specific memory location is read or written.", "A person watching the screen.", "A type of sensor."],
    "correct": 1,
    "explanation": "Watchpoints are great for finding out 'who is corrupting this variable' by stopping the CPU the moment that variable is changed."
  },
  {
    "question": "What is 'Deadlock' in multitasking?",
    "options": ["A very fast task.", "A situation where two tasks are stuck forever waiting for each other to release a resource.", "The system turning off.", "The battery being dead."],
    "correct": 1,
    "explanation": "Deadlock is a common bug in complex embedded systems using Semaphores or Mutexes incorrectly."
  },
  {
    "question": "What is a 'Real-Time Kernel'?",
    "options": ["A kernel that knows the current time.", "A kernel specifically designed to provide predictable task execution and low latency.", "A kernel that works in real life.", "A very large kernel."],
    "correct": 1,
    "explanation": "Unlike Windows or macOS, a real-time kernel (RTOS) guarantees that the most important task runs first, immediately."
  },
  {
    "question": "What is 'Hardware Abstraction Layer' (HAL)?",
    "options": ["A physical layer of metal.", "A software layer that allows high-level code to interact with hardware without knowing the specific chip details.", "The casing of the device.", "A type of computer virus."],
    "correct": 1,
    "explanation": "Using a HAL makes it easy to switch from a 'Brand A' microcontroller to a 'Brand B' without rewriting the whole application."
  },
  {
    "question": "Which of the following is an 'Address Mode'?",
    "options": ["Indexed Addressing", "Fast Mode", "User Mode", "Safe Mode"],
    "correct": 0,
    "explanation": "Indexed addressing calculates the data's address by adding an offset to a base register (useful for tables/arrays)."
  },
  {
    "question": "What is 'Unit Testing' in embedded software?",
    "options": ["Testing the whole device at once.", "Testing individual functions or modules in isolation to ensure they work correctly.", "Testing only one unit of power.", "Testing the weight of the device."],
    "correct": 1,
    "explanation": "Unit testing catches logic errors in a single function before it is integrated into the larger, more complex system."
  },
  {
    "question": "What is 'Multithreading'?",
    "options": ["Using many wires.", "The ability of a single process to break into multiple concurrent execution paths (threads).", "A type of sewing.", "Having many CPUs."],
    "correct": 1,
    "explanation": "Multithreading allows an embedded system to handle the UI, the sensors, and the communication all at the same time."
  },
  {
    "question": "In 'Fetch-Decode-Execute,' what is 'Opcodes'?",
    "options": ["Names of the users.", "The part of the machine instruction that tells the CPU what operation to perform.", "The speed of the CPU.", "A type of memory."],
    "correct": 1,
    "explanation": "The opcode is the 'verb' of the instruction (e.g., ADD, JUMP, LOAD)."
  },
  {
    "question": "What is the 'Execution Stage' primary component?",
    "options": ["The Program Counter", "The ALU (Arithmetic Logic Unit)", "The Flash Memory", "The Power Cord"],
    "correct": 1,
    "explanation": "The ALU is where the actual mathematical or logical execution happens."
  },
  {
    "question": "What is 'ISP' (In-System Programming)?",
    "options": ["An Internet Service Provider.", "The ability to program a microcontroller while it is already soldered onto the circuit board.", "A type of programming language.", "A social group for programmers."],
    "correct": 1,
    "explanation": "ISP allows you to update the firmware of a device through a small header without removing the chip."
  },
  {
    "question": "What is 'Instruction Pre-fetching'?",
    "options": ["Executing code before it is written.", "Loading instructions into a buffer before they are actually needed to speed up the CPU.", "Deleting code.", "Fetching data instead of code."],
    "correct": 1,
    "explanation": "Pre-fetching helps keep the CPU pipeline full, especially when memory is slightly slower than the processor."
  },
  {
    "question": "What is 'Context' in multitasking?",
    "options": ["The story of the program.", "The set of register values and state information that defines a running task.", "The physical environment of the device.", "The name of the task."],
    "correct": 1,
    "explanation": "To switch tasks, the OS must save the 'context' so it can pick up exactly where it left off later."
  },
  {
    "question": "What is 'Direct Execution' advantage?",
    "options": ["It is very slow.", "It provides the maximum possible performance because the hardware runs the code directly.", "It is easy to read for humans.", "It uses more power."],
    "correct": 1,
    "explanation": "Running native machine code is always faster than using an interpreter or 'virtual machine' layer."
  },
  {
    "question": "What is 'Debugging Best Practice' regarding code comments?",
    "options": ["Write no comments.", "Write comments that explain 'why' a complex logic is used, helping future debugging.", "Write comments in a secret language.", "Write only the programmer's name."],
    "correct": 1,
    "explanation": "Good comments act as a 'map' when you are trying to find a bug in code you wrote months ago."
  },
  {
    "question": "What is 'ISA' types classification?",
    "options": ["Red and Blue.", "RISC and CISC.", "Fast and Slow.", "Digital and Analog."],
    "correct": 1,
    "explanation": "ISA is generally divided into RISC (simple, fast) and CISC (complex, feature-rich)."
  },
  {
    "question": "What is 'Fetch' destination?",
    "options": ["The RAM.", "The Instruction Register (IR).", "The ALU.", "The Battery."],
    "correct": 1,
    "explanation": "The fetched instruction is placed into the IR so the decoding logic can analyze it."
  },
  {
    "question": "What is 'HPC Embedded' usage in real-life?",
    "options": ["A basic toaster.", "Medical MRI machines for real-time image reconstruction.", "A light switch.", "A pencil."],
    "correct": 1,
    "explanation": "HPC is needed when massive amounts of data must be processed instantly, like in medical or military equipment."
  },
  {
    "question": "What is 'Kernel Panic'?",
    "options": ["The kernel getting scared.", "A safety action taken by an OS when it detects a critical internal error it cannot recover from.", "The system running too fast.", "A type of user interface."],
    "correct": 1,
    "explanation": "A kernel panic usually results in a complete system halt to prevent data corruption."
  },
  {
    "question": "What is 'Instruction Cycle' speed determined by?",
    "options": ["The length of the code.", "The CPU clock frequency.", "The number of users.", "The weight of the device."],
    "correct": 1,
    "explanation": "The clock frequency (MHz/GHz) determines how many 'ticks' occur per second, driving the instruction stages."
  },
  {
    "question": "What is 'Addressing Mode' purpose?",
    "options": ["To find the address of the programmer.", "To define how the CPU determines the effective address of an operand.", "To make the code longer.", "To change the clock speed."],
    "correct": 1,
    "explanation": "Addressing modes provide the flexibility to access data in registers, constants, or memory locations."
  },
  {
    "question": "What is 'ISR' (Interrupt Service Routine)?",
    "options": ["A type of internet connection.", "A special function that runs in response to a hardware interrupt.", "A way to charge the battery.", "A type of processor."],
    "correct": 1,
    "explanation": "When a timer expires or a button is pressed, the ISR runs to handle that specific event immediately."
  },
  {
    "question": "What is 'Machine Code' relation to 'Assembly'?",
    "options": ["They are the same thing.", "Assembly is a human-readable mnemonic version of the binary machine code.", "Assembly is slower than machine code.", "Machine code is written in C."],
    "correct": 1,
    "explanation": "A 'MOV' instruction in Assembly is just a friendly name for a specific binary opcode like '01011010'."
  },
  {
    "question": "What is 'Instruction Format' fixed-length advantage?",
    "options": ["It saves memory.", "It makes the 'Fetch' and 'Decode' hardware simpler and faster.", "It allows for more colors.", "It uses more registers."],
    "correct": 1,
    "explanation": "If every instruction is exactly 32 bits, the CPU always knows exactly where the next one starts."
  },
  {
    "question": "What is 'ISA' purpose in software?",
    "options": ["To make software harder to write.", "To provide a stable interface so software can be written without knowing the internal transistor layout.", "To connect to the internet.", "To cool the chip."],
    "correct": 1,
    "explanation": "The ISA is the 'contract' between the hardware and the software."
  },
  {
    "question": "What is 'Common Challenge' in embedded debugging?",
    "options": ["Too much screen space.", "Limited visibility into the internal state of the chip.", "The device being too cheap.", "Having no instructions."],
    "correct": 1,
    "explanation": "Because microcontrollers are sealed 'black boxes,' engineers need special tools to see what's happening inside."
  },
  {
    "question": "What is 'Execution' goal?",
    "options": ["To delete the instruction.", "To produce the intended result of the instruction (math, logic, or data move).", "To turn off the CPU.", "To wait for the user."],
    "correct": 1,
    "explanation": "Execution is the 'action' phase where the work described by the opcode is actually done."
  },
  {
    "question": "What is 'Types of ISA'?",
    "options": ["Large and Small.", "Load-Store vs Register-Memory architectures.", "Fast and Slow.", "Blue and Green."],
    "correct": 1,
    "explanation": "Load-Store ISAs (like ARM) only allow math on registers, while Register-Memory (like x86) can do math directly on memory data."
  },
  {
    "question": "What is 'Debug Best Practice' regarding logging?",
    "options": ["Log everything constantly.", "Use different log levels (Info, Warning, Error) to avoid overwhelming the debug port.", "Never log anything.", "Log only the programmer's name."],
    "correct": 1,
    "explanation": "Proper log levels help you filter out the noise so you can see the critical errors."
  },
  {
    "question": "What is 'Multitasking'?",
    "options": ["Doing one task very fast.", "The ability of an OS to execute multiple tasks (processes) seemingly at the same time by switching between them.", "Having many CPUs.", "Using many wires."],
    "correct": 1,
    "explanation": "On a single-core CPU, multitasking is an illusion created by switching between tasks thousands of times per second."
  },
  {
    "question": "What is 'ISA' feature?",
    "options": ["The color of the chip.", "The available addressing modes and data types.", "The price of the device.", "The name of the manufacturer."],
    "correct": 1,
    "explanation": "The ISA defines what the hardware *can* do (e.g., 'can it handle 64-bit numbers?')."
  },
  {
    "question": "What is 'Internal Register' purpose?",
    "options": ["To store the user's password.", "To provide the fastest possible storage for data the CPU is currently using.", "To connect to the RAM.", "To store photos."],
    "correct": 1,
    "explanation": "Registers are at the top of the memory hierarchy because they are built directly into the CPU logic."
  },
  {
    "question": "What is 'Memory Hierarchy' advantage?",
    "options": ["It makes the system cheaper and faster overall.", "It uses only one type of memory.", "It makes the code longer.", "It requires no power."],
    "correct": 0,
    "explanation": "By using a mix of fast/expensive and slow/cheap memory, we get the best balance of speed and cost."
  },
  {
    "question": "What is 'Fetch-Decode-Execute' purpose?",
    "options": ["To clean the CPU.", "To process a single machine instruction.", "To connect to the internet.", "To charge the battery."],
    "correct": 1,
    "explanation": "This cycle is the fundamental way every modern digital computer functions."
  },
  {
    "question": "What is 'Device Driver' common challenge?",
    "options": ["It is too easy to write.", "Handling hardware timing and concurrency (interrupts) correctly.", "Finding the power button.", "The driver being too fast."],
    "correct": 1,
    "explanation": "Drivers must be carefully written to handle data from hardware that can arrive at any moment without crashing the system."
  },
  {
    "question": "What is 'Instruction Set' purpose?",
    "options": ["To provide a list of parts.", "To define the full repertoire of commands a processor can execute.", "To describe the casing.", "To list the users."],
    "correct": 1,
    "explanation": "The instruction set is the vocabulary the processor speaks."
  },
  {
    "question": "What is 'HPC Embedded' core component?",
    "options": ["A simple timer.", "Vector processors or GPUs for parallel data handling.", "A light bulb.", "A mouse."],
    "correct": 1,
    "explanation": "HPC relies on hardware that can do 'SIMD' (Single Instruction, Multiple Data) to process whole blocks of data at once."
  },
  {
    "question": "What is 'Debugging Technique' goal?",
    "options": ["To hide bugs.", "To reduce the 'Time-to-Market' by finding and fixing errors quickly.", "To make the system more expensive.", "To use more memory."],
    "correct": 1,
    "explanation": "Fast debugging means the product can be shipped to customers sooner."
  },
  {
    "question": "What is 'Kernel' primary feature?",
    "options": ["It is the first software to load after the bootloader and manages everything else.", "It is a type of application like Word.", "It is a hardware chip.", "It is a user manual."],
    "correct": 0,
    "explanation": "The kernel is the foundation of all software running on the device."
  },
  {
    "question": "What is 'Instruction Format' field for 'Opcode'?",
    "options": ["It is at the end.", "It is the bit pattern that determines the operation type.", "It is the programmer's signature.", "It is the date."],
    "correct": 1,
    "explanation": "The opcode is usually at the start of the instruction so the decoder can immediately identify the command."
  },
  {
    "question": "What is 'Addressing Mode' Register-Indirect?",
    "options": ["The data is in a register.", "The register contains the address where the data is located.", "The data is in the instruction.", "The data is on the internet."],
    "correct": 1,
    "explanation": "This is like saying: 'Look in Box A to find the address of the house you need to visit'."
  },
  {
    "question": "What is 'Context Switch' overhead?",
    "options": ["The price of the OS.", "The CPU time wasted saving and restoring state instead of doing actual work.", "The weight of the registers.", "The length of the code."],
    "correct": 1,
    "explanation": "Frequent context switching (too many tasks) can slow down a system because the CPU spends too much time 'organizing' and not enough 'doing'."
  },
  {
    "question": "What is 'Debugging' objective regarding safety?",
    "options": ["To make the system look good.", "To ensure the system fails safely if an error occurs (Fail-Safe).", "To prevent any debugging.", "To use more batteries."],
    "correct": 1,
    "explanation": "In embedded systems like medical devices, debugging must ensure that a software crash doesn't harm the patient."
  },
  {
    "question": "What is 'Fetch' relation to 'Program Counter'?",
    "options": ["The PC stays the same.", "The PC provides the address for the fetch, then increments.", "The PC is deleted.", "The PC is moved to the ALU."],
    "correct": 1,
    "explanation": "The PC acts as the 'current page' marker for the CPU's book of instructions."
  },
  {
    "question": "What is 'ISA' advantage for compilers?",
    "options": ["It makes compiling impossible.", "It provides a clear target for the compiler to optimize the code.", "It makes the compiler slow.", "It requires no compiler."],
    "correct": 1,
    "explanation": "Compilers are designed to use the specific features of an ISA (like ARM's conditional execution) to make the code faster."
  },
  {
    "question": "What is 'Device Driver' in real life usage?",
    "options": ["A person driving a car.", "The software that allows your phone to use its camera sensor.", "A physical tool like a screwdriver.", "A type of battery."],
    "correct": 1,
    "explanation": "Every time you take a photo, a camera driver is coordinating the hardware pins and the memory buffers."
  }
,
  {
    "question": "What is the primary difference between a 'Process' and a 'Thread'?",
    "options": ["Processes are smaller than threads.", "Threads within the same process share the same memory space, while processes have independent memory.", "Processes can run on hardware, but threads only run in software.", "There is no difference; the terms are interchangeable."],
    "correct": 1,
    "explanation": "Threads are 'lightweight' because they share the parent process's resources (like memory and files), making communication between them much faster."
  },
  {
    "question": "What happens during 'Preemptive Scheduling'?",
    "options": ["A task runs until it finishes or waits for I/O.", "The OS can forcibly interrupt a running task to give the CPU to a higher-priority task.", "Tasks are executed in alphabetical order.", "The user must manually switch between tasks."],
    "correct": 1,
    "explanation": "Preemption is key for real-time systems to ensure that a critical event (like a sensor trigger) is handled immediately, even if another task is busy."
  },
  {
    "question": "In a Multithreaded system, what is a 'Critical Section'?",
    "options": ["The part of the code that uses the most power.", "A segment of code that accesses shared resources and must not be executed by more than one thread at a time.", "The hardware's power button.", "The first line of the main function."],
    "correct": 1,
    "explanation": "To prevent data corruption, only one thread can enter the 'Critical Section' at a time, often managed by Mutexes or Semaphores."
  },
  {
    "question": "Which of the following is a disadvantage of 'Non-Preemptive' scheduling?",
    "options": ["It is very complex to implement.", "A low-priority task can 'hog' the CPU, causing high-priority tasks to wait (starvation).", "It requires a lot of RAM.", "It causes too many context switches."],
    "correct": 1,
    "explanation": "In non-preemptive (cooperative) systems, if a task gets stuck in an infinite loop, the entire system hangs because the OS cannot take back control."
  },
  {
    "question": "What is 'Priority Inversion'?",
    "options": ["When a low-priority task is deleted.", "A scenario where a high-priority task is blocked by a low-priority task holding a required resource.", "When the CPU runs backwards.", "When all tasks have the same priority."],
    "correct": 1,
    "explanation": "This is a classic RTOS bug. A medium-priority task might run while a high-priority task is waiting for a low-priority task to release a lock."
  },
  {
    "question": "Which scheduling algorithm is often called 'Round Robin'?",
    "options": ["Each task is assigned a fixed time slice (quantum) and the CPU rotates through them.", "The shortest task always runs first.", "The task that arrived last runs first.", "Tasks are chosen randomly."],
    "correct": 0,
    "explanation": "Round Robin ensures fairness, giving every task a small 'slice' of CPU time in a circular queue."
  },
  {
    "question": "Scenario: You are designing an 'Anti-lock Braking System' (ABS). Which scheduling type is mandatory?",
    "options": ["Non-Preemptive", "Hard Real-Time Preemptive", "Best-effort Background", "Batch Processing"],
    "correct": 1,
    "explanation": "ABS is safety-critical; the 'Brake' task must preempt anything else to prevent an accident within milliseconds."
  },
  {
    "question": "What is the purpose of a 'Semaphore' in multitasking?",
    "options": ["To speed up the internet.", "A signaling mechanism used to control access to shared resources or synchronize tasks.", "To count the number of instructions.", "To act as a physical light on the board."],
    "correct": 1,
    "explanation": "Semaphores act like 'keys' to a room; a task takes a key to enter and returns it when finished so others can enter."
  },
  {
    "question": "What is 'Task Starvation'?",
    "options": ["The task having no power.", "A situation where a task never gets to run because higher-priority tasks always occupy the CPU.", "The task finishing too quickly.", "Deleting a task from memory."],
    "correct": 1,
    "explanation": "Starvation happens in priority-based systems if the CPU is constantly busy with top-tier tasks, leaving low-tier tasks 'hungry'."
  },
  {
    "question": "Which of these is a benefit of 'Multithreading' in an embedded web server?",
    "options": ["It uses more memory.", "It allows the server to handle multiple client requests simultaneously without waiting for one to finish.", "It makes the device heavier.", "It turns off the CPU."],
    "correct": 1,
    "explanation": "By using threads, the server can send a file to User A while still listening for a connection from User B."
  },
  {
    "question": "What is a 'Context Switch' in the context of scheduling?",
    "options": ["Changing the physical CPU.", "The process of saving the state of a running task and loading the state of the next task.", "Changing the programming language.", "Resetting the device."],
    "correct": 1,
    "explanation": "Context switching allows the OS to resume a task exactly where it was paused, including its register values and program counter."
  },
  {
    "question": "What defines a 'Hard Real-Time' system?",
    "options": ["The hardware is very strong.", "Missing a single deadline results in total system failure (e.g., pacemaker).", "The system runs on a hard drive.", "The system is difficult to program."],
    "correct": 1,
    "explanation": "In hard real-time, 'late' is the same as 'wrong' and can have catastrophic consequences."
  },
  {
    "question": "What is 'Cooperative Multitasking'?",
    "options": ["The OS decides when to switch.", "Tasks voluntarily yield control of the CPU to let other tasks run.", "The CPU runs two tasks at the exact same time.", "The user decides when to switch."],
    "correct": 1,
    "explanation": "Also known as non-preemptive multitasking, it relies on tasks being 'good citizens' and giving up the CPU regularly."
  },
  {
    "question": "In 'Priority-Based Scheduling,' which task runs first?",
    "options": ["The task that is the largest.", "The task with the highest assigned priority level that is in the 'Ready' state.", "The task that has been waiting the shortest time.", "The task with the most code."],
    "correct": 1,
    "explanation": "The scheduler always looks for the most important 'Ready' task to ensure high-priority work is completed first."
  },
  {
    "question": "What is 'Thread Synchronization'?",
    "options": ["Making all threads run at the same speed.", "Ensuring that threads execute in a specific order or access shared data without conflict.", "Deleting threads when they finish.", "Connecting threads to a clock."],
    "correct": 1,
    "explanation": "Synchronization prevents 'race conditions' where two threads might try to modify the same variable at once."
  },
  {
    "question": "Scenario: A 'Smart Watch' updates the time and monitors heart rate. Which multitasking concept is most likely used?",
    "options": ["Batch Processing", "Concurrent Execution (Multitasking)", "Single-tasking", "Manual switching"],
    "correct": 1,
    "explanation": "The watch must appear to do many things at once (UI, Heart rate, Clock) using multitasking."
  },
  {
    "question": "What is the 'Idle Task' in an RTOS?",
    "options": ["A task that uses 100% of the CPU.", "The lowest priority task that runs only when no other tasks are ready.", "A task that is broken.", "A task that resets the computer."],
    "correct": 1,
    "explanation": "The idle task often puts the CPU into a low-power mode to save battery when there is no work to do."
  },
  {
    "question": "What is a 'Mutex'?",
    "options": ["A type of memory.", "A 'Mutual Exclusion' object that ensures only one thread can access a resource at a time.", "A mathematical formula.", "A hardware pin."],
    "correct": 1,
    "explanation": "A Mutex is like a bathroom key; you 'Lock' it when you go in and 'Unlock' it when you leave."
  },
  {
    "question": "What is 'Task Latency'?",
    "options": ["The time taken to write the code.", "The delay between a task becoming ready and it actually getting CPU time.", "The speed of the CPU.", "The time the task takes to exit."],
    "correct": 1,
    "explanation": "Minimizing latency is the goal of an RTOS scheduler to ensure responsiveness."
  },
  {
    "question": "Which scheduling algorithm is 'Fair' but not necessarily 'Real-Time'?",
    "options": ["Round Robin", "Earliest Deadline First", "Rate Monotonic", "Static Priority"],
    "correct": 0,
    "explanation": "Round Robin is fair because everyone gets a turn, but a critical task might have to wait for 10 other tasks to finish their slices."
  },
  {
    "question": "What is 'Jitter' in task scheduling?",
    "options": ["The CPU shaking.", "The variation in the start time of a periodic task.", "The total number of tasks.", "The length of the context switch."],
    "correct": 1,
    "explanation": "If a task is supposed to run every 1ms, but sometimes runs at 1.1ms and sometimes 0.9ms, that variation is 'jitter'."
  },
  {
    "question": "What is 'Time-Slicing'?",
    "options": ["Cutting the physical clock.", "Allocating a specific amount of time to a task before forcing a context switch.", "Measuring the age of the CPU.", "Speeding up the clock."],
    "correct": 1,
    "explanation": "Time-slicing prevents any single task from monopolizing the CPU in systems that use preemptive Round Robin."
  },
  {
    "question": "Which of the following describes a 'Ready' state?",
    "options": ["The task is currently using the CPU.", "The task is waiting for a timer or an event.", "The task has everything it needs to run and is waiting for the scheduler to pick it.", "The task has finished and is deleted."],
    "correct": 2,
    "explanation": "Tasks move from 'Ready' to 'Running' when the scheduler decides it is their turn."
  },
  {
    "question": "What is 'Preemption Latency'?",
    "options": ["The time it takes to delete a task.", "The time from when a high-priority task becomes ready until the current task is actually stopped.", "The speed of the task.", "The number of context switches."],
    "correct": 1,
    "explanation": "A good RTOS has very low preemption latency, meaning it can stop a low-priority task almost instantly."
  },
  {
    "question": "What is 'Rate Monotonic Scheduling' (RMS)?",
    "options": ["Assigning priority based on the task's size.", "Assigning higher priority to tasks with shorter periods (more frequent tasks).", "Running all tasks at the same rate.", "Randomly assigning priority."],
    "correct": 1,
    "explanation": "RMS is a mathematical way to ensure a set of periodic tasks can always meet their deadlines."
  },
  {
    "question": "What is a 'Blocking' call in multitasking?",
    "options": ["A function that deletes code.", "A function that causes a task to enter the 'Waiting' state until an event occurs (like data arriving).", "A hardware error.", "A call that makes the CPU run faster."],
    "correct": 1,
    "explanation": "Blocking is efficient; instead of 'polling' a button 1000 times, a task 'sleeps' (blocks) until the button is pressed."
  },
  {
    "question": "What is 'Inter-Process Communication' (IPC)?",
    "options": ["The CPU talking to the RAM.", "Mechanisms that allow different tasks or threads to share data and synchronize (e.g., Queues, Mailboxes).", "The user talking to the device.", "Connecting two different computers."],
    "correct": 1,
    "explanation": "Since tasks often need to work together (e.g., one reads a sensor, one processes the data), IPC provides a safe way to move data."
  },
  {
    "question": "Which of these is a real-life example of a 'Task' in a car's ECU?",
    "options": ["Calculating fuel injection timing.", "The color of the car.", "The price of the fuel.", "The driver's name."],
    "correct": 0,
    "explanation": "Calculating fuel timing is a recurring computational task that must run accurately to keep the engine running."
  },
  {
    "question": "What is a 'Daemon' thread/task?",
    "options": ["A malicious computer virus.", "A background task that provides services to other tasks (like garbage collection or logging).", "A task that runs only in the dark.", "A task that has no priority."],
    "correct": 1,
    "explanation": "Daemons run 'silently' in the background to handle system maintenance without user interaction."
  },
  {
    "question": "What is the 'Stack' in a multithreaded system?",
    "options": ["A pile of hardware chips.", "Each thread has its own stack to store local variables and function return addresses.", "The main hard drive.", "A list of all users."],
    "correct": 1,
    "explanation": "Individual stacks are essential; if threads shared a stack, they would overwrite each other's function calls and crash."
  },
  {
    "question": "What is 'Throughput' in a multitasking OS?",
    "options": ["The time for one task.", "The total number of tasks completed per unit of time.", "The weight of the OS.", "The number of wires in the CPU."],
    "correct": 1,
    "explanation": "High throughput means the OS is very efficient at managing and finishing many tasks."
  },
  {
    "question": "What is 'Earliest Deadline First' (EDF) scheduling?",
    "options": ["The task with the shortest name runs first.", "A dynamic scheduling algorithm that picks the task whose deadline is closest.", "Running the oldest task first.", "Deleting tasks that miss deadlines."],
    "correct": 1,
    "explanation": "EDF is an optimal scheduling algorithm that can reach 100% CPU utilization while still meeting all deadlines."
  },
  {
    "question": "What is a 'Message Queue'?",
    "options": ["A line of people waiting.", "An IPC mechanism where tasks can send and receive data packets (messages) asynchronously.", "A list of email addresses.", "A type of hardware cable."],
    "correct": 1,
    "explanation": "Queues allow a 'Producer' task to dump data and a 'Consumer' task to pick it up later when it is ready."
  },
  {
    "question": "What is the 'Working Set' of a process?",
    "options": ["The total number of programmers who worked on it.", "The set of memory pages currently in active use by the process.", "The tools used to build the hardware.", "The weight of the system."],
    "correct": 1,
    "explanation": "Understanding the working set helps engineers decide how much RAM is needed to run the system smoothly."
  },
  {
    "question": "What is 'Response Time'?",
    "options": ["The time the task takes to write data.", "The time from an event trigger to the completion of the task handling it.", "The speed of the internet.", "The age of the system."],
    "correct": 1,
    "explanation": "In real-time systems, response time is the most critical metric for performance."
  },
  {
    "question": "What is 'Task Switching Overhead'?",
    "options": ["The cost of the OS software.", "The CPU cycles lost during a context switch that could have been used for tasks.", "The number of tasks in the system.", "The size of the registers."],
    "correct": 1,
    "explanation": "If the overhead is too high (e.g., switching too often), the system becomes slow and inefficient."
  },
  {
    "question": "Which of these is a 'Non-maskable Interrupt' (NMI)?",
    "options": ["A button press.", "A critical hardware failure (like power loss) that the CPU cannot ignore.", "A timer update.", "A network message."],
    "correct": 1,
    "explanation": "NMIs are used for 'emergencies' that must be handled even if the CPU has disabled other interrupts."
  },
  {
    "question": "What is 'Reentrancy' in embedded functions?",
    "options": ["A function that can be safely called by multiple threads simultaneously.", "A function that enters the CPU twice.", "A function that resets the system.", "A function that has no variables."],
    "correct": 0,
    "explanation": "Reentrant functions are 'thread-safe' because they don't rely on global or static data that could be corrupted by another thread."
  },
  {
    "question": "What is 'Paging' in memory management?",
    "options": ["Calling a person on a pager.", "Dividing memory into fixed-size blocks to manage RAM more flexibly.", "Sending an email.", "The weight of the memory."],
    "correct": 1,
    "explanation": "Paging helps prevent memory fragmentation, allowing the OS to use small pieces of RAM as if they were one big block."
  },
  {
    "question": "What is 'Thrashing' in a multitasking system?",
    "options": ["Moving the device rapidly.", "A state where the CPU spends more time swapping memory pages than actually executing tasks.", "The system running perfectly.", "The battery exploding."],
    "correct": 1,
    "explanation": "Thrashing usually happens when you try to run too many heavy tasks on a system with very little RAM."
  },
  {
    "question": "Which of these is a 'Synchronization Primitive'?",
    "options": ["A battery.", "A Mutex.", "A compiler.", "A screen."],
    "correct": 1,
    "explanation": "Primitives are the basic building blocks (like Mutexes and Semaphores) used to build thread-safe software."
  },
  {
    "question": "What is 'Priority Ceiling Protocol'?",
    "options": ["The maximum number of tasks allowed.", "A method to prevent priority inversion by temporarily raising a task's priority.", "The price of the software.", "A way to make the CPU faster."],
    "correct": 1,
    "explanation": "By raising the priority of a task holding a lock, you ensure it finishes quickly and lets the high-priority task proceed."
  },
  {
    "question": "Scenario: You have a task that MUST run every 10ms with zero delay. What is it called?",
    "options": ["A Background Task", "A Periodic Real-Time Task", "A Random Task", "A One-time Task"],
    "correct": 1,
    "explanation": "Periodic tasks are common in control systems (like drone flight stabilization) where timing is everything."
  },
  {
    "question": "What is 'CPU Bound'?",
    "options": ["The CPU is tied with a rope.", "A task that spends most of its time doing calculations and very little time waiting for I/O.", "The CPU is broken.", "A task that uses no power."],
    "correct": 1,
    "explanation": "An encryption task is 'CPU bound' because the processor is constantly working on the math."
  },
  {
    "question": "What is 'I/O Bound'?",
    "options": ["The task is waiting for data from a sensor or network more than it is calculating.", "The input is broken.", "The output is broken.", "The CPU is too fast."],
    "correct": 0,
    "explanation": "A data logger is 'I/O bound' because it spends most of its time waiting for the SD card to write the data."
  },
  {
    "question": "What is the 'Task Control Block' (TCB)?",
    "options": ["A physical block of wood.", "A data structure in the kernel that stores all information about a task (state, priority, registers).", "A list of hardware pins.", "The power supply."],
    "correct": 1,
    "explanation": "The TCB is the 'ID card' of a task; without it, the OS wouldn't know how to run or resume the task."
  },
  {
    "question": "Which of these describes 'Multi-core' multitasking?",
    "options": ["One CPU switching fast.", "Multiple physical CPU cores executing different tasks at the exact same time.", "Using many batteries.", "Having a lot of RAM."],
    "correct": 1,
    "explanation": "Multi-core allows for 'True Parallelism,' whereas single-core only offers 'Concurrency'."
  },
  {
    "question": "What is 'Preemption'?",
    "options": ["Asking for permission.", "The act of taking the CPU away from a task before it is finished.", "Running the code line by line.", "Deleting a program."],
    "correct": 1,
    "explanation": "The scheduler 'preempts' the task when a more important one needs the processor."
  },
  {
    "question": "What is 'Soft Real-Time'?",
    "options": ["The system is made of plastic.", "Missing a deadline is undesirable but not a total failure (e.g., a video player skipping a frame).", "The system is very easy to use.", "The system has no clock."],
    "correct": 1,
    "explanation": "In soft real-time, the goal is to meet as many deadlines as possible, but the system doesn't crash if it's a bit late."
  },
  {
    "question": "What is 'Static Scheduling'?",
    "options": ["The scheduling is decided at compile-time and never changes during execution.", "The tasks move around randomly.", "The scheduling is based on static electricity.", "The system has no scheduler."],
    "correct": 0,
    "explanation": "Static scheduling is simple and highly predictable, often used in safety-critical systems where you want zero surprises."
  },
  {
    "question": "What is 'Dynamic Scheduling'?",
    "options": ["The schedule is decided while the system is running based on current needs.", "The schedule is very fast.", "The schedule is based on the battery level.", "The schedule is decided by the user."],
    "correct": 0,
    "explanation": "Dynamic schedulers (like EDF) are more flexible and can handle varying workloads better than static ones."
  },
  {
    "question": "What is a 'Spinlock'?",
    "options": ["A lock that rotates.", "A synchronization method where a task sits in a loop (spins) waiting for a lock to become free.", "A broken lock.", "A type of motor."],
    "correct": 1,
    "explanation": "Spinlocks are fast for very short waits but waste CPU power if the task has to wait for a long time."
  },
  {
    "question": "What is 'Task Synchronization'?",
    "options": ["Making tasks finish at the same time.", "Ensuring tasks work together in a coordinated way (e.g., Task A finishes before Task B starts).", "Connecting tasks to the internet.", "Deleting tasks."],
    "correct": 1,
    "explanation": "Synchronization is vital for logical flow; you can't 'Process Data' until the 'Read Sensor' task is done."
  },
  {
    "question": "What is a 'Thread Pool'?",
    "options": ["A swimming pool for programmers.", "A set of pre-created threads that sit ready to perform tasks as they arrive.", "A list of broken threads.", "A type of memory storage."],
    "correct": 1,
    "explanation": "Thread pools save time because creating and destroying threads is a 'heavy' operation for the OS."
  },
  {
    "question": "What is 'Atomic Operation'?",
    "options": ["An operation involving nuclear power.", "An instruction or set of instructions that executes completely without the possibility of being interrupted.", "A very small instruction.", "A fast instruction."],
    "correct": 1,
    "explanation": "Atomic operations are 'all or nothing'; they are the foundation of thread-safe code."
  },
  {
    "question": "What is 'Fairness' in scheduling?",
    "options": ["Making sure the programmer is happy.", "Ensuring that every task gets a reasonable amount of CPU time and no task is ignored forever.", "Setting all priorities to zero.", "The system being free of charge."],
    "correct": 1,
    "explanation": "A fair scheduler prevents low-priority tasks from completely stalling (starving)."
  },
  {
    "question": "What is 'Burst Time'?",
    "options": ["The time a battery lasts.", "The amount of time a task needs to spend on the CPU to finish its current work.", "The speed of the data transfer.", "The age of the task."],
    "correct": 1,
    "explanation": "Schedulers use burst time estimates to decide which task to run next in 'Shortest Job First' algorithms."
  },
  {
    "question": "What is a 'Zombie Process'?",
    "options": ["A virus that takes over the system.", "A process that has finished execution but still has an entry in the process table.", "A task that runs only at night.", "A task that has no code."],
    "correct": 1,
    "explanation": "Zombies don't use CPU, but they take up space in the OS's 'bookkeeping' table until their parent process acknowledges them."
  },
  {
    "question": "What is 'Priority'?",
    "options": ["A number representing the importance of a task.", "The speed of the task.", "The size of the task.", "The name of the task."],
    "correct": 0,
    "explanation": "In an RTOS, priority is usually a number; higher numbers often mean higher importance (depending on the OS)."
  },
  {
    "question": "What is 'Quantum' in scheduling?",
    "options": ["A type of physics.", "The fixed time slice given to each task in Round Robin scheduling.", "A very fast CPU.", "The amount of RAM."],
    "correct": 1,
    "explanation": "If the quantum is 10ms, every task gets exactly 10ms before the OS switches to the next one."
  },
  {
    "question": "What is 'Wait State'?",
    "options": ["The CPU is off.", "A state where a task is suspended while waiting for a resource or signal.", "The user waiting for the device.", "The system being in the store."],
    "correct": 1,
    "explanation": "A task in a wait state uses zero CPU power, which is efficient for multitasking."
  },
  {
    "question": "What is 'Signal' in IPC?",
    "options": ["An electrical pulse.", "A simple notification sent to a process to notify it of an event (e.g., Ctrl+C).", "A Wi-Fi connection.", "A sound from the speaker."],
    "correct": 1,
    "explanation": "Signals are the 'tap on the shoulder' for a process, telling it something happened elsewhere."
  },
  {
    "question": "What is 'Mutual Exclusion'?",
    "options": ["Everyone being invited.", "Ensuring that only one task can use a shared resource at a time.", "Two tasks running together.", "Deleting all tasks."],
    "correct": 1,
    "explanation": "Mutual exclusion (Mutex) is the solution to the 'Critical Section' problem."
  },
  {
    "question": "What is 'Preemptive Kernel'?",
    "options": ["A kernel that is very fast.", "A kernel that allows high-priority tasks to interrupt code even when it is inside a kernel function.", "A kernel with no scheduler.", "A kernel made of hardware."],
    "correct": 1,
    "explanation": "Preemptive kernels are more responsive because they can 'pull the plug' on a task even if it's currently doing system work."
  },
  {
    "question": "What is 'Task' real-life use case in a microwave?",
    "options": ["The color of the microwave.", "One task to monitor the timer, one task to control the magnetron, one task to watch the 'Cancel' button.", "The price of the microwave.", "The food inside."],
    "correct": 1,
    "explanation": "The microwave's controller manages these 'concurrent' responsibilities using simple multitasking."
  },
  {
    "question": "What is 'Thread' advantage over 'Process'?",
    "options": ["They are more colorful.", "Lower overhead for creation and context switching because they share memory.", "They don't need a CPU.", "They are written in a different language."],
    "correct": 1,
    "explanation": "Because threads don't need their own 'private' memory space, they are much cheaper for the OS to manage."
  },
  {
    "question": "What is 'Scheduling' objective regarding utilization?",
    "options": ["To keep the CPU as idle as possible.", "To keep the CPU as busy as possible (maximizing utilization).", "To use as much battery as possible.", "To make the system hot."],
    "correct": 1,
    "explanation": "Efficiency means making sure the CPU is always doing useful work if there are tasks ready."
  },
  {
    "question": "What is 'Non-Preemptive' advantage?",
    "options": ["It is very fast.", "Simpler design with no complex context switches or race conditions within a task.", "It is safer for brakes.", "It uses more RAM."],
    "correct": 1,
    "explanation": "In very simple systems, non-preemptive design is easier to debug because you know exactly when a task will stop."
  },
  {
    "question": "What is 'Preemptive' advantage?",
    "options": ["It is simpler.", "Higher responsiveness for critical, high-priority tasks.", "It uses less power.", "It has no bugs."],
    "correct": 1,
    "explanation": "Preemption is what makes modern multitasking feel 'smooth' and 'real-time'."
  },
  {
    "question": "What is 'Thread' disadvantage?",
    "options": ["They are too fast.", "If one thread crashes or corrupts memory, it can affect all other threads in the same process.", "They don't share memory.", "They are only for PCs."],
    "correct": 1,
    "explanation": "Sharing memory is a double-edged sword; it's fast, but it's risky."
  },
  {
    "question": "What is 'Process' advantage?",
    "options": ["It is smaller than a thread.", "Better isolation; if one process crashes, others usually keep running.", "It doesn't need a scheduler.", "It is free."],
    "correct": 1,
    "explanation": "Modern OSs use processes to ensure that a bug in your 'Music Player' doesn't crash your 'GPS' app."
  },
  {
    "question": "What is 'Real-Time' use case in a drone?",
    "options": ["The color of the drone.", "The task that calculates motor speed based on gyroscope data to maintain balance.", "The price of the drone.", "The user's name."],
    "correct": 1,
    "explanation": "Balance is hard real-time; if the calculation is even a few milliseconds late, the drone will flip."
  },
  {
    "question": "What is 'Starvation' solution?",
    "options": ["Deleting the task.", "Aging: Gradually increasing the priority of tasks that have been waiting for a long time.", "Giving the task more power.", "Turning off the CPU."],
    "correct": 1,
    "explanation": "Aging ensures that even a very low-priority task will eventually get to run after it 'grows up'."
  },
  {
    "question": "What is 'Deadlock' prevention?",
    "options": ["Never using locks.", "Requiring tasks to request all needed resources at once, or in a specific order.", "Deleting all tasks.", "Using more RAM."],
    "correct": 1,
    "explanation": "If every task follows the same 'rulebook' for taking locks, they can't get stuck in a circle."
  },
  {
    "question": "What is 'Multitasking' purpose in a Smart Home hub?",
    "options": ["To make it expensive.", "To handle Wi-Fi communication, sensor data from 10 rooms, and the user's voice commands at once.", "To use one task for everything.", "To turn off the hub."],
    "correct": 1,
    "explanation": "Multitasking makes the hub 'smart' by allowing it to react to many things simultaneously."
  },
  {
    "question": "What is 'Priority' inversion real-life example?",
    "options": ["A car going backwards.", "The Mars Pathfinder mission crash, where a low-priority task blocked a critical system task.", "A battery being full.", "A screen being bright."],
    "correct": 1,
    "explanation": "The Mars Pathfinder is the most famous example of why embedded engineers must understand priority inversion."
  },
  {
    "question": "What is 'Scheduling' difference between PC and RTOS?",
    "options": ["PC is for games, RTOS is for work.", "PC prioritizes 'throughput and user experience,' while RTOS prioritizes 'timeliness and predictability'.", "PC is faster.", "RTOS is bigger."],
    "correct": 1,
    "explanation": "Your PC might 'lag' when opening a window, but a car's brake controller (RTOS) can never 'lag'."
  },
  {
    "question": "What is 'Shared Memory'?",
    "options": ["Memory that everyone can buy.", "An IPC method where two or more tasks can access the same physical RAM location.", "A cloud storage service.", "A type of SD card."],
    "correct": 1,
    "explanation": "Shared memory is the fastest IPC because no data is actually 'moved'; both tasks just look at the same spot."
  },
  {
    "question": "What is 'Synchronization' cost?",
    "options": ["The price of the lock.", "Performance overhead and the risk of deadlock.", "The weight of the system.", "The number of users."],
    "correct": 1,
    "explanation": "Using too many Mutexes makes your system slower because tasks are constantly waiting on each other."
  },
  {
    "question": "What is 'Non-Preemptive' use case?",
    "options": ["A smartphone.", "A simple 8-bit calculator or a basic temperature logger.", "A self-driving car.", "A web server."],
    "correct": 1,
    "explanation": "Simple devices don't need the complexity of a preemptive scheduler."
  },
  {
    "question": "What is 'Preemptive' use case?",
    "options": ["A light switch.", "A modern smartphone or an industrial robot controller.", "A pencil.", "A simple timer."],
    "correct": 1,
    "explanation": "Any system that needs to handle multiple 'interrupts' and user inputs at once needs preemption."
  },
  {
    "question": "What is 'Thread' vs 'Task' in RTOS?",
    "options": ["They are completely different.", "In many RTOSs, the terms are used interchangeably to describe a single path of execution.", "Threads are bigger.", "Tasks are smaller."],
    "correct": 1,
    "explanation": "In systems like FreeRTOS, you create 'Tasks,' while in Linux, you create 'Threads'."
  },
  {
    "question": "What is 'Multitasking' goal regarding hardware?",
    "options": ["To buy more hardware.", "To allow a single CPU to handle more responsibilities than it could if it only did one thing at a time.", "To make hardware hot.", "To delete hardware."],
    "correct": 1,
    "explanation": "Multitasking makes the most of the silicon you have."
  },
  {
    "question": "What is 'Priority' levels range?",
    "options": ["Always 0 to 1.", "Varies by OS (e.g., 0-31 or 0-255).", "Only one level is allowed.", "It is unlimited."],
    "correct": 1,
    "explanation": "The number of priority levels tells you how much 'fine-tuning' you can do for your tasks."
  },
  {
    "question": "What is 'Scheduling' during an Interrupt?",
    "options": ["The scheduler stops.", "The ISR runs immediately, and the scheduler runs afterward to decide which task to resume.", "The interrupt is ignored.", "The CPU is reset."],
    "correct": 1,
    "explanation": "Interrupts 'cut in line' ahead of all tasks, even the highest priority one."
  },
  {
    "question": "What is 'Task' state 'Blocked'?",
    "options": ["The task is being deleted.", "The task is waiting for a Semaphore or an event and cannot run until it happens.", "The task is running.", "The task is ready."],
    "correct": 1,
    "explanation": "A blocked task is 'parked' so it doesn't waste CPU time."
  },
  {
    "question": "What is 'Multithreading' in a camera app?",
    "options": ["The camera having many lenses.", "One thread for the UI, one thread for autofocus, and one thread for saving the image file.", "The camera having no power.", "The user taking many photos."],
    "correct": 1,
    "explanation": "Threading ensures the 'Save' process doesn't freeze the 'Viewfinder' screen."
  },
  {
    "question": "What is 'Scheduling' algorithm 'SJF'?",
    "options": ["Super Joyful Function.", "Shortest Job First: The task with the smallest burst time runs first.", "Simple Jump Format.", "Smart Join Feature."],
    "correct": 1,
    "explanation": "SJF is great for finishing small tasks quickly to improve the average wait time."
  },
  {
    "question": "What is 'Priority' inheritance?",
    "options": ["Giving your priority to your children.", "Temporarily giving a low-priority task the priority of a high-priority task that is waiting for it.", "Deleting a task.", "Making all tasks equal."],
    "correct": 1,
    "explanation": "This is a popular fix for Priority Inversion."
  },
  {
    "question": "What is 'Context Switch' frequency impact?",
    "options": ["Higher frequency makes the system feel smoother but increases overhead.", "Higher frequency makes the system slower and hotter.", "Both A and B are correct.", "Higher frequency makes the battery last longer."],
    "correct": 2,
    "explanation": "There is always a trade-off between responsiveness and efficiency."
  },
  {
    "question": "What is 'Task' real-life usage in a washing machine?",
    "options": ["The type of soap.", "One task for the timer, one for the motor/pump, and one for the water level sensor.", "The color of the clothes.", "The weight of the machine."],
    "correct": 1,
    "explanation": "Modern appliances are complex embedded systems with multiple concurrent tasks."
  },
  {
    "question": "What is 'Scheduling' algorithm 'FCFS'?",
    "options": ["Fast Code Fast Speed.", "First-Come, First-Served: The simplest algorithm where tasks run in arrival order.", "Final Clear Final Stop.", "Free Call Free Send."],
    "correct": 1,
    "explanation": "FCFS is fair in terms of arrival but can be very slow if a long task arrives first."
  },
  {
    "question": "What is 'Thread' safety?",
    "options": ["Wearing a helmet while coding.", "Writing code that behaves correctly when accessed by multiple threads.", "Encrypting the threads.", "Deleting the threads."],
    "correct": 1,
    "explanation": "Thread-safe code uses locks or atomic operations to protect its data."
  },
  {
    "question": "What is 'Multitasking' difference from 'Parallelism'?",
    "options": ["They are the same.", "Multitasking is 'appearing' to do many things (single-core), while Parallelism is 'actually' doing them (multi-core).", "Multitasking is faster.", "Parallelism is simpler."],
    "correct": 1,
    "explanation": "Think of multitasking as a chef moving between two pans; parallelism is two chefs with one pan each."
  },
  {
    "question": "What is 'Priority' starvation fix?",
    "options": ["Turning off the device.", "Aging: increasing priority based on wait time.", "Reducing the number of tasks.", "Using a faster CPU."],
    "correct": 1,
    "explanation": "Aging ensures no task is left behind forever."
  },
  {
    "question": "What is 'Real-time' scheduling goal?",
    "options": ["To finish as fast as possible.", "To guarantee all task deadlines are met.", "To use less RAM.", "To have the best graphics."],
    "correct": 1,
    "explanation": "In an RTOS, predictability and meeting deadlines are the most important goals."
  },
  {
    "question": "What is 'Context' storage?",
    "options": ["The hard drive.", "The task's own stack and the Task Control Block (TCB).", "The user's account.", "A cloud server."],
    "correct": 1,
    "explanation": "When a task is 'put to sleep,' the CPU 'saves its spot' in the TCB."
  },
  {
    "question": "What is 'Multithreading' benefit for energy?",
    "options": ["It uses more energy.", "Efficient threading allows the CPU to finish tasks faster and enter low-power sleep modes sooner.", "It generates electricity.", "It doesn't use energy."],
    "correct": 1,
    "explanation": "Finishing work quickly (Race-to-sleep) is a key power-saving strategy in embedded systems."
  },
  {
    "question": "What is 'Task' state 'Running'?",
    "options": ["The task is waiting.", "The task is currently being executed by the CPU.", "The task is deleted.", "The task is ready."],
    "correct": 1,
    "explanation": "Only one task can be in the 'Running' state per CPU core at any given moment."
  }
,
  {
    "question": "What does 'RISC' stand for in processor design?",
    "options": ["Rapid Instruction Set Computer", "Reduced Instruction Set Computer", "Reliable Internal System Code", "Registered Instruction Set Core"],
    "correct": 1,
    "explanation": "RISC focuses on a small, highly optimized set of instructions that can usually execute in a single clock cycle."
  },
  {
    "question": "What is the primary philosophy of 'CISC' (Complex Instruction Set Computer)?",
    "options": ["To make the CPU as small as possible.", "To provide single instructions that can perform multiple low-level operations (like a load, an add, and a store) at once.", "To use only 8 bits for every instruction.", "To eliminate the need for a compiler."],
    "correct": 1,
    "explanation": "CISC designs (like x86) aim to reduce the number of instructions per program by making each instruction more powerful."
  },
  {
    "question": "In a 'Load-Store Architecture' (common in RISC), which instructions can access memory?",
    "options": ["All instructions.", "Only specific LOAD and STORE instructions; math is done only on registers.", "Only the JUMP instructions.", "No instructions access memory."],
    "correct": 1,
    "explanation": "By forcing the CPU to load data into registers before performing math, the hardware design remains simpler and faster."
  },
  {
    "question": "What is a 'Superscalar' processor?",
    "options": ["A processor that is very large.", "A processor that can execute more than one instruction per clock cycle by having multiple execution units.", "A processor that doesn't use a clock.", "A processor with 100 cores."],
    "correct": 1,
    "explanation": "Superscalar CPUs can 'fetch' several instructions at once and hand them off to different ALUs to run in parallel."
  },
  {
    "question": "Which stage of the Instruction Cycle determines what the 'Opcode' actually wants the CPU to do?",
    "options": ["Fetch", "Decode", "Execute", "Write-back"],
    "correct": 1,
    "explanation": "The Decode stage translates the binary opcode into signals that activate the specific hardware paths (like the adder or multiplier)."
  },
  {
    "question": "What is 'Pipelining' in a CPU?",
    "options": ["A cooling system using pipes.", "A technique where the CPU starts fetching the next instruction before the current one has finished executing.", "Connecting the CPU to the internet.", "Splitting the RAM into pieces."],
    "correct": 1,
    "explanation": "Pipelining is like an assembly line; while one instruction is being executed, the next is being decoded, and the one after that is being fetched."
  },
  {
    "question": "What is a 'Pipeline Hazard'?",
    "options": ["A leak in the cooling system.", "A situation that prevents the next instruction from executing in its designated clock cycle (e.g., data dependency).", "A virus in the CPU.", "The CPU running too fast."],
    "correct": 1,
    "explanation": "Hazards occur if Instruction B needs the result of Instruction A before Instruction A is done calculating it."
  },
  {
    "question": "What is 'Machine Code'?",
    "options": ["A secret language for robots.", "The lowest-level representation of a program, consisting entirely of binary 0s and 1s.", "The source code written in C++.", "A type of hardware cable."],
    "correct": 1,
    "explanation": "Machine code is the only language the hardware 'understands' directly."
  },
  {
    "question": "What does the 'Operand' part of a machine instruction represent?",
    "options": ["The 'verb' (the action).", "The 'noun' (the data or the location of the data to be acted upon).", "The speed of the operation.", "The name of the programmer."],
    "correct": 1,
    "explanation": "In 'ADD R1, R2', 'ADD' is the opcode and 'R1, R2' are the operands."
  },
  {
    "question": "What is 'Branch Prediction'?",
    "options": ["Predicting when a tree will grow.", "A CPU feature that guesses which way a conditional jump (like an IF statement) will go to keep the pipeline full.", "Calculating the weather.", "Deciding which CPU core to use."],
    "correct": 1,
    "explanation": "If the guess is right, the CPU saves time. If wrong, it must 'flush' the pipeline and start over."
  },
  {
    "question": "What is 'Microcode'?",
    "options": ["Very small code.", "A layer of low-level instructions that translate complex CISC instructions into simpler steps the hardware can execute.", "Code for a microwave.", "A type of flash memory."],
    "correct": 1,
    "explanation": "Microcode acts as an internal 'translator' inside many modern processors."
  },
  {
    "question": "Which architecture is known for having 'Fixed-Length' instructions (e.g., always 32 bits)?",
    "options": ["CISC", "RISC", "Vacuum Tubes", "Mechanical Computers"],
    "correct": 1,
    "explanation": "Fixed-length instructions make the 'Fetch' unit much simpler because it always knows exactly where the next instruction begins."
  },
  {
    "question": "What is 'Orthogonality' in an Instruction Set?",
    "options": ["Instructions that only work at right angles.", "A design where almost any instruction can use any addressing mode or register.", "An ISA with no math instructions.", "A system with only 1 instruction."],
    "correct": 1,
    "explanation": "An orthogonal ISA is easier for compilers to target because there are fewer 'special rules' or restrictions."
  },
  {
    "question": "What is 'Endianness' referring to?",
    "options": ["The way a program ends.", "The order in which bytes are stored in memory (Big-Endian vs Little-Endian).", "The speed of the CPU.", "The type of battery used."],
    "correct": 1,
    "explanation": "Little-endian stores the least significant byte first, while Big-endian stores the most significant byte first."
  },
  {
    "question": "What is an 'Immediate' operand?",
    "options": ["Data that is needed right now.", "A constant value that is included directly within the instruction itself (e.g., ADD R1, #5).", "A fast memory chip.", "A signal from the user."],
    "correct": 1,
    "explanation": "Immediate values are used for hard-coded numbers like '5' or '100' so the CPU doesn't have to look in RAM for them."
  },
  {
    "question": "What is 'Vector Processing'?",
    "options": ["Processing one bit at a time.", "A type of HPC where a single instruction operates on a whole array (vector) of data at once.", "Drawing lines on the screen.", "A way to charge batteries."],
    "correct": 1,
    "explanation": "Vector processing is essential for modern AI, graphics, and scientific simulations."
  },
  {
    "question": "What is the 'Write-back' stage of the instruction cycle?",
    "options": ["Writing the code on paper.", "Writing the result of the execution back into a register or memory.", "Deleting the instruction.", "Sending the code back to the compiler."],
    "correct": 1,
    "explanation": "This is the final step where the 'answer' is officially saved for future use."
  },
  {
    "question": "What is 'Instruction Set Architecture' (ISA) primarily?",
    "options": ["The physical layout of the transistors.", "The abstract model of a computer that defines the instructions, registers, and memory addressing.", "The brand of the computer.", "The plastic casing."],
    "correct": 1,
    "explanation": "The ISA is the 'logical' blueprint, while the 'Microarchitecture' is the physical implementation."
  },
  {
    "question": "Which of the following is a common RISC architecture?",
    "options": ["Intel x86", "ARM", "IBM System/360", "VAX"],
    "correct": 1,
    "explanation": "ARM is the world's most popular RISC architecture, used in almost every smartphone."
  },
  {
    "question": "What is 'Code Compression' in embedded ISAs (like ARM Thumb)?",
    "options": ["Zipping the file.", "A mode that uses 16-bit instructions instead of 32-bit to save memory.", "Deleting comments.", "Reducing the CPU clock speed."],
    "correct": 1,
    "explanation": "Thumb mode allows for smaller programs, which is critical for microcontrollers with limited Flash memory."
  },
  {
    "question": "What is an 'Arithmetic Shift'?",
    "options": ["Moving the CPU to a new room.", "Moving bits left or right while preserving the sign bit (for signed numbers).", "Adding two numbers.", "Deleting a variable."],
    "correct": 1,
    "explanation": "Arithmetic shifts are used for fast multiplication or division by powers of 2 while keeping negative numbers negative."
  },
  {
    "question": "What is a 'Register File'?",
    "options": ["A folder on the hard drive.", "The collection of high-speed registers located inside the CPU.", "A list of all users.", "The BIOS settings."],
    "correct": 1,
    "explanation": "The Register File is the fastest memory the CPU has access to."
  },
  {
    "question": "What is 'Instruction Throughput'?",
    "options": ["The time for one instruction.", "The number of instructions completed per unit of time.", "The physical width of the instruction.", "The amount of power used."],
    "correct": 1,
    "explanation": "Pipelining and Superscalar design are used to increase throughput."
  },
  {
    "question": "In 'Effective Address' calculation, what is 'Relative Addressing'?",
    "options": ["Addressing your family.", "Calculating an address by adding an offset to the current Program Counter (PC).", "Addressing a random location.", "A fixed address that never changes."],
    "correct": 1,
    "explanation": "Relative addressing allows code to be 'position-independent,' meaning it can run no matter where it is placed in memory."
  },
  {
    "question": "What is a 'Conditional Jump'?",
    "options": ["A jump that always happens.", "An instruction that changes the Program Counter only if a certain condition (like Zero or Carry) is met.", "A physical jump over a wire.", "A jump that deletes code."],
    "correct": 1,
    "explanation": "Conditional jumps are how 'IF' statements and 'LOOPS' are implemented in machine code."
  },
  {
    "question": "What is 'Instruction Level Parallelism' (ILP) limited by?",
    "options": ["The color of the wires.", "Data dependencies and branch logic.", "The size of the battery.", "The user's typing speed."],
    "correct": 1,
    "explanation": "If Instruction B depends on Instruction A, they cannot be run in parallel, no matter how many ALUs the CPU has."
  },
  {
    "question": "Which part of the CPU 'fetches' the instruction?",
    "options": ["The ALU", "The Control Unit / Fetch Unit", "The RAM", "The Screen"],
    "correct": 1,
    "explanation": "The Fetch unit uses the address in the Program Counter to pull the next instruction from memory."
  },
  {
    "question": "What is 'Zero-Overhead Looping' (found in some DSPs)?",
    "options": ["A loop that never runs.", "Hardware that automatically handles loop counters and jumps without using extra 'Compare' and 'Branch' instructions.", "A very fast programmer.", "A loop with no code inside."],
    "correct": 1,
    "explanation": "This allows Digital Signal Processors to process data streams with maximum efficiency."
  },
  {
    "question": "What is the 'Opcode' for a 'No-Operation' (NOP) instruction used for?",
    "options": ["To speed up the CPU.", "To create a small delay or to fill space in the pipeline without changing the system state.", "To turn off the device.", "To reset the RAM."],
    "correct": 1,
    "explanation": "NOPs are useful for timing or for 'aligning' code to specific memory boundaries."
  },
  {
    "question": "What is a 'VLIW' (Very Long Instruction Word) architecture?",
    "options": ["A program that is very long.", "An architecture where a single instruction contains multiple operations to be performed in parallel.", "A type of hard drive.", "A system that uses no instructions."],
    "correct": 1,
    "explanation": "VLIW shifts the work of finding parallelism from the hardware to the compiler."
  },
  {
    "question": "What is 'Address Decoding'?",
    "options": ["Translating a zip code.", "The process of the hardware selecting a specific memory chip or I/O device based on the address sent by the CPU.", "Typing an address on a keyboard.", "Deleting an address."],
    "correct": 1,
    "explanation": "Decoding ensures that when the CPU asks for address 0x100, the correct RAM chip responds."
  },
  {
    "question": "What is an 'Illegal Instruction' fault?",
    "options": ["A crime committed by the computer.", "A fault that occurs when the CPU tries to execute a bit pattern that does not correspond to a valid opcode.", "A virus.", "The battery being low."],
    "correct": 1,
    "explanation": "This usually happens if the program jumps to a memory location that contains data instead of code."
  },
  {
    "question": "What is the 'Word Size' of a processor?",
    "options": ["The number of letters in its name.", "The natural size of data the CPU processes (e.g., 32-bit or 64-bit).", "The size of the user manual.", "The volume of the speaker."],
    "correct": 1,
    "explanation": "The word size usually matches the width of the registers and the data bus."
  },
  {
    "question": "What is 'Instruction Cache'?",
    "options": ["A place to hide instructions.", "A small, very fast memory inside the CPU that stores recently used instructions.", "The main hard drive.", "A type of battery."],
    "correct": 1,
    "explanation": "Instruction cache (I-Cache) prevents the CPU from having to go all the way to slow RAM for every single instruction."
  },
  {
    "question": "What is 'Out-of-Order Execution'?",
    "options": ["The CPU being broken.", "The CPU executing instructions in whatever order they are ready, rather than the order in the program.", "The user skipping pages.", "The compiler being wrong."],
    "correct": 1,
    "explanation": "Modern high-performance CPUs do this to keep the execution units busy while waiting for slow data from memory."
  },
  {
    "question": "What is the 'Instruction Set Appendix'?",
    "options": ["A medical term for the CPU.", "The section of a datasheet that lists every opcode, its timing, and its effect on flags.", "The power supply.", "A list of users."],
    "correct": 1,
    "explanation": "This is the 'bible' for assembly language programmers and compiler writers."
  },
  {
    "question": "What is 'SIMD' (Single Instruction, Multiple Data)?",
    "options": ["Using one instruction for one bit.", "Performing the same operation on multiple data points simultaneously (e.g., adding four pairs of numbers with one command).", "A type of RAM.", "A way to connect to Wi-Fi."],
    "correct": 1,
    "explanation": "SIMD is used to speed up things like video processing and 3D graphics."
  },
  {
    "question": "Which is more 'Energy Efficient' for simple tasks?",
    "options": ["CISC", "RISC", "Vacuum Tubes", "Mainframes"],
    "correct": 1,
    "explanation": "RISC's simplicity often leads to lower power consumption, which is why it dominates the mobile and embedded market."
  },
  {
    "question": "What is 'Machine Language' also known as?",
    "options": ["Native Code", "C++", "Python", "Java"],
    "correct": 0,
    "explanation": "Native code is specific to the hardware it was built for."
  },
  {
    "question": "What is 'Self-Modifying Code'?",
    "options": ["Code that writes itself.", "A program that changes its own machine instructions while it is running.", "A bug in the compiler.", "Code that is deleted after use."],
    "correct": 1,
    "explanation": "This is generally avoided in modern programming because it is very difficult to debug and can be a security risk."
  },
  {
    "question": "What is 'Instruction Fetch' bottleneck?",
    "options": ["The CPU being too small.", "When the CPU is faster than the memory, and has to wait for instructions to arrive.", "The user not pressing buttons.", "The screen being off."],
    "correct": 1,
    "explanation": "This is why fast caches and pre-fetching are so important in modern computer design."
  },
  {
    "question": "What is a 'Privileged Instruction'?",
    "options": ["An instruction that is expensive.", "An instruction that can only be executed when the CPU is in 'Kernel Mode' (e.g., shutting down the system).", "A secret instruction.", "An instruction for games."],
    "correct": 1,
    "explanation": "This prevents regular apps from doing dangerous things like turning off the hardware or accessing other apps' memory."
  },
  {
    "question": "What is the 'Status Register' used for after 'Execute'?",
    "options": ["To store the result.", "To hold 'flags' that indicate if the result was Zero, Negative, or had a Carry.", "To store the user's name.", "To reset the CPU."],
    "correct": 1,
    "explanation": "Flags allow the 'next' instruction to make decisions (e.g., 'Jump if the previous result was Zero')."
  },
  {
    "question": "What is 'Register Renaming'?",
    "options": ["Changing the name of the CPU.", "A technique to avoid dependencies by mapping architectural registers to a larger pool of physical registers.", "Deleting registers.", "Using only one register."],
    "correct": 1,
    "explanation": "This allows the CPU to run multiple instructions that use 'R1' at the same time without them interfering with each other."
  },
  {
    "question": "What is 'MIPS'?",
    "options": ["A type of snack.", "Millions of Instructions Per Second (a measure of CPU performance).", "A programming language.", "A brand of battery."],
    "correct": 1,
    "explanation": "MIPS is a simple way to compare the raw speed of different processors."
  },
  {
    "question": "What is 'GFLOPS'?",
    "options": ["Giga Floating-point Operations Per Second (a measure of math performance).", "A type of digital photo.", "The weight of the processor.", "A network speed."],
    "correct": 0,
    "explanation": "FLOPS are used to measure the performance of HPC systems and GPUs in scientific calculations."
  },
  {
    "question": "What is 'Instruction Set' compatibility?",
    "options": ["The ability of a newer CPU to run code written for an older version of the same ISA.", "The color of the chips matching.", "Using the same power supply.", "Both CPUs having the same speed."],
    "correct": 0,
    "explanation": "Backward compatibility (like an Intel i9 running code from 1995) is a major feature of the x86 ISA."
  },
  {
    "question": "What is 'Binary'?",
    "options": ["A base-10 number system.", "A base-2 number system (0s and 1s) used by all digital computers.", "A type of programming language.", "A social group."],
    "correct": 1,
    "explanation": "Computers use binary because it is easy to represent with 'on' and 'off' electrical states."
  },
  {
    "question": "What is a 'Bit'?",
    "options": ["A large amount of data.", "The smallest unit of information in a computer (a single 0 or 1).", "A part of a drill.", "A small piece of code."],
    "correct": 1,
    "explanation": "Everything in a computer is ultimately made of bits."
  },
  {
    "question": "What is a 'Byte'?",
    "options": ["One bit.", "A group of 8 bits.", "1000 bits.", "A type of computer."],
    "correct": 1,
    "explanation": "Bytes are the standard unit used to measure memory and storage."
  },
  {
    "question": "What is 'Hexadecimal'?",
    "options": ["A base-6 number system.", "A base-16 number system used by programmers as a shorthand for binary.", "A type of computer virus.", "A shape with six sides."],
    "correct": 1,
    "explanation": "One hex digit (e.g., 'F') represents exactly four bits ('1111')."
  },
  {
    "question": "What is 'ASCII'?",
    "options": ["A type of mountain.", "A standard code that assigns a number to every character (letters, numbers, symbols).", "A way to charge batteries.", "A programming language."],
    "correct": 1,
    "explanation": "ASCII allows computers to store and exchange text data."
  },
  {
    "question": "What is 'Logic Gate'?",
    "options": ["A gate in a fence.", "The basic building block of a digital circuit (AND, OR, NOT).", "A software program.", "A type of user interface."],
    "correct": 1,
    "explanation": "Transistors are combined to form logic gates, which are then combined to form CPUs."
  },
  {
    "question": "What is 'Bus'?",
    "options": ["A vehicle for passengers.", "A set of wires used to transfer data between different parts of a computer.", "A type of software.", "A battery connector."],
    "correct": 1,
    "explanation": "The Data Bus and Address Bus are the 'highways' of the system."
  },
  {
    "question": "What is 'Clock Speed'?",
    "options": ["The time on the wall.", "The frequency at which a CPU executes instructions, measured in Hertz (Hz).", "The age of the computer.", "The speed of the fans."],
    "correct": 1,
    "explanation": "A 3GHz CPU has a clock that 'ticks' 3 billion times per second."
  },
  {
    "question": "What is 'Fetch-Decode-Execute'?",
    "options": ["The life cycle of a computer.", "The basic operational cycle of a computer's central processing unit.", "A way to clean the CPU.", "A type of software."],
    "correct": 1,
    "explanation": "This cycle repeats billions of times a second to run your programs."
  },
  {
    "question": "What is 'Accumulator'?",
    "options": ["A person who collects things.", "A special register in the CPU where intermediate arithmetic and logic results are stored.", "A type of battery.", "A cooling fan."],
    "correct": 1,
    "explanation": "In many simple CPUs, almost all math happens through the Accumulator."
  },
  {
    "question": "What is 'ALU'?",
    "options": ["All-purpose Logic Unit.", "Arithmetic Logic Unit: The part of the CPU that does math and comparisons.", "A type of memory.", "The power supply."],
    "correct": 1,
    "explanation": "The ALU is the 'calculator' inside the processor."
  },
  {
    "question": "What is 'Control Unit'?",
    "options": ["A remote control.", "The part of the CPU that directs the flow of data and tells the ALU what to do.", "The user interface.", "The hard drive."],
    "correct": 1,
    "explanation": "The Control Unit is the 'manager' of the CPU."
  },
  {
    "question": "What is 'Program Counter'?",
    "options": ["A person who counts programs.", "A register that holds the memory address of the next instruction to be executed.", "A type of calculator.", "A clock."],
    "correct": 1,
    "explanation": "The PC tells the CPU where it is in the program."
  },
  {
    "question": "What is 'RAM'?",
    "options": ["Random Access Memory: Temporary storage for data the CPU is currently using.", "A type of animal.", "Permanent storage for files.", "The power supply."],
    "correct": 0,
    "explanation": "RAM is 'volatile,' meaning it loses its data when the power is turned off."
  },
  {
    "question": "What is 'ROM'?",
    "options": ["Read-Only Memory: Permanent storage for critical system software (like the BIOS).", "A city in Italy.", "Temporary storage for photos.", "A type of screen."],
    "correct": 0,
    "explanation": "ROM is 'non-volatile,' meaning it keeps its data even without power."
  },
  {
    "question": "What is 'Cache'?",
    "options": ["A type of money.", "A small amount of very fast memory used to speed up access to frequently used data.", "A large hard drive.", "A backup system."],
    "correct": 1,
    "explanation": "Cache is located between the CPU and the RAM to reduce waiting time."
  },
  {
    "question": "What is 'Virtual Memory'?",
    "options": ["Memory that doesn't exist.", "A technique that uses part of the hard drive as if it were RAM.", "A type of VR headset.", "Memory for a video game."],
    "correct": 1,
    "explanation": "Virtual memory allows you to run larger programs than your physical RAM can hold."
  },
  {
    "question": "What is 'Operating System'?",
    "options": ["A person who operates a computer.", "Software that manages computer hardware and provides services for other programs.", "A type of computer hardware.", "The internet."],
    "correct": 1,
    "explanation": "Windows, Linux, and Android are all examples of Operating Systems."
  },
  {
    "question": "What is 'Kernel'?",
    "options": ["A piece of corn.", "The core part of an operating system that has complete control over everything in the system.", "A type of user account.", "The computer's case."],
    "correct": 1,
    "explanation": "The kernel is the most important piece of software in any computer."
  },
  {
    "question": "What is 'Driver'?",
    "options": ["A person who drives a car.", "A small program that tells the operating system how to communicate with a specific piece of hardware.", "A physical tool.", "A type of battery."],
    "correct": 1,
    "explanation": "Without drivers, your computer wouldn't know how to use its printer, mouse, or graphics card."
  },
  {
    "question": "What is 'Interrupt'?",
    "options": ["Being rude.", "A signal from hardware or software that tells the CPU to stop what it's doing and handle an event.", "The computer turning off.", "A virus."],
    "correct": 1,
    "explanation": "Interrupts are how your computer reacts to things like a mouse click or a key press."
  },
  {
    "question": "What is 'Compiler'?",
    "options": ["A person who collects data.", "A program that translates high-level code (like C++) into machine code the CPU can understand.", "A type of text editor.", "A web browser."],
    "correct": 1,
    "explanation": "Compilers turn human-written code into robot-readable instructions."
  },
  {
    "question": "What is 'Assembly Language'?",
    "options": ["A language for building furniture.", "A low-level programming language that uses mnemonics to represent machine code instructions.", "A very difficult puzzle.", "The first language ever spoken."],
    "correct": 1,
    "explanation": "Assembly is one step up from binary; it's easier for humans but still very close to the hardware."
  },
  {
    "question": "What is 'Debugging'?",
    "options": ["Removing insects from a room.", "The process of finding and fixing errors in a computer program.", "Cleaning the computer's fans.", "Installing a new program."],
    "correct": 1,
    "explanation": "Debugging is a critical part of the software development process."
  },
  {
    "question": "What is 'Firmware'?",
    "options": ["Software that is very firm.", "Permanent software programmed into a hardware device.", "A type of clothing.", "A company that makes software."],
    "correct": 1,
    "explanation": "Firmware is what makes your microwave, TV remote, and router 'smart'."
  },
  {
    "question": "What is 'Microcontroller'?",
    "options": ["A very small person who controls things.", "A small computer on a single integrated circuit, used to control specific tasks in devices.", "A type of remote control.", "A small screen."],
    "correct": 1,
    "explanation": "Microcontrollers are the 'brains' of almost every modern electronic appliance."
  },
  {
    "question": "What is 'Embedded System'?",
    "options": ["A system that is buried underground.", "A computer system designed to perform a specific function within a larger mechanical or electrical system.", "A computer that is very fast.", "A type of software."],
    "correct": 1,
    "explanation": "From cars to coffee makers, embedded systems are everywhere."
  },
  {
    "question": "What is 'RTOS'?",
    "options": ["Really Tough Operating System.", "Real-Time Operating System: Designed for systems where timing and predictability are critical.", "A very fast internet connection.", "A type of memory chip."],
    "correct": 1,
    "explanation": "RTOSs are used in things like flight controllers, medical equipment, and industrial robots."
  },
  {
    "question": "What is 'Peripheral'?",
    "options": ["The edge of your vision.", "Any hardware device that is connected to and controlled by a computer (like a sensor or a motor).", "A type of computer program.", "A battery charger."],
    "correct": 1,
    "explanation": "In embedded systems, peripherals are how the computer interacts with the real world."
  },
  {
    "question": "What is 'I/O'?",
    "options": ["Inside/Outside.", "Input/Output: The communication between a computer and the outside world.", "A type of battery.", "A programming language."],
    "correct": 1,
    "explanation": "Input is what goes in (sensors), Output is what comes out (motors, LEDs)."
  },
  {
    "question": "What is 'ADC'?",
    "options": ["Analog-to-Digital Converter: Turns real-world signals (like temperature) into numbers for the computer.", "A type of power cord.", "A programming language.", "A company name."],
    "correct": 0,
    "explanation": "ADCs are essential for computers to 'sense' the physical world."
  },
  {
    "question": "What is 'DAC'?",
    "options": ["Digital-to-Analog Converter: Turns numbers from the computer back into real-world signals (like sound).", "A type of computer screen.", "A backup system.", "A way to save files."],
    "correct": 0,
    "explanation": "DACs are used to drive speakers, motors, and other analog devices."
  },
  {
    "question": "What is 'GPIO'?",
    "options": ["General Purpose Input/Output: Pins on a microcontroller that can be programmed to be either inputs or outputs.", "A type of internet connection.", "A memory chip.", "A cooling fan."],
    "correct": 0,
    "explanation": "GPIO pins are the 'fingers' of a microcontroller."
  },
  {
    "question": "What is 'Serial Communication'?",
    "options": ["Talking about breakfast cereal.", "Sending data one bit at a time over a single wire.", "Sending all data at once over many wires.", "A type of computer virus."],
    "correct": 1,
    "explanation": "Serial is the most common way for embedded devices to talk to each other (e.g., UART, SPI, I2C)."
  },
  {
    "question": "What is 'UART'?",
    "options": ["Universal Asynchronous Receiver/Transmitter: A simple way for devices to talk to each other serially.", "A type of art gallery.", "A programming language.", "A power supply."],
    "correct": 0,
    "explanation": "UART is one of the oldest and simplest forms of serial communication."
  },
  {
    "question": "What is 'SPI'?",
    "options": ["Serial Peripheral Interface: A high-speed serial communication protocol.", "A type of secret agent.", "A memory chip.", "A cooling system."],
    "correct": 0,
    "explanation": "SPI is used for fast communication between microcontrollers and sensors or SD cards."
  },
  {
    "question": "What is 'I2C'?",
    "options": ["Inter-Integrated Circuit: A simple 2-wire serial communication protocol.", "A type of ice cube.", "A computer screen.", "A programming language."],
    "correct": 0,
    "explanation": "I2C is popular because it only uses two pins to connect many different devices."
  },
  {
    "question": "What is 'PWM'?",
    "options": ["Pulse Width Modulation: A way to simulate analog signals by turning a digital pin on and off very fast.", "A type of battery.", "A computer program.", "A cooling fan."],
    "correct": 0,
    "explanation": "PWM is used to control motor speed and the brightness of LEDs."
  },
  {
    "question": "What is 'Watchdog Timer'?",
    "options": ["A timer for a pet dog.", "A safety feature that automatically resets the computer if the software gets stuck in a loop.", "A type of clock.", "A security camera."],
    "correct": 1,
    "explanation": "The Watchdog ensures that a system can recover itself if it crashes or hangs."
  },
  {
    "question": "What is 'Baud Rate'?",
    "options": ["The price of a computer.", "The speed of serial communication, measured in bits per second.", "The weight of a computer.", "The volume of a speaker."],
    "correct": 1,
    "explanation": "Both devices must have the same Baud Rate to understand each other."
  },
  {
    "question": "What is 'Protocol'?",
    "options": ["A type of medicine.", "A set of rules that defines how data is exchanged between devices.", "A computer program.", "A user manual."],
    "correct": 1,
    "explanation": "Protocols like HTTP, SPI, and USB are the 'grammars' of computer communication."
  },
  {
    "question": "What is 'Bit Rate'?",
    "options": ["How often you bite something.", "The amount of data sent per second.", "The size of a file.", "The speed of the CPU."],
    "correct": 1,
    "explanation": "Bit rate is often used to measure the quality of audio or video."
  },
  {
    "question": "What is 'Latency'?",
    "options": ["Being late for work.", "The delay between an action and its result.", "The total amount of memory.", "The weight of the computer."],
    "correct": 1,
    "explanation": "Low latency is critical for games, video calls, and real-time control systems."
  },
  {
    "question": "What is 'Bandwidth'?",
    "options": ["The width of a rubber band.", "The maximum amount of data that can be transferred in a given amount of time.", "The number of instruments in a band.", "The size of the screen."],
    "correct": 1,
    "explanation": "Higher bandwidth means more data can be sent at once."
  },
  {
    "question": "What is 'Checksum'?",
    "options": ["A check for a sum of money.", "A simple way to check if data was corrupted during transfer.", "A mathematical formula.", "A type of battery."],
    "correct": 1,
    "explanation": "By adding up the bytes and checking the total, a computer can tell if a bit was flipped."
  },
  {
    "question": "What is 'Handshaking'?",
    "options": ["Greeting a person.", "The process of two devices establishing a connection and agreeing on communication rules.", "Two computers being connected by a cable.", "A type of computer virus."],
    "correct": 1,
    "explanation": "Handshaking ensures that the 'Receiver' is ready before the 'Sender' starts talking."
  },
  {
    "question": "What is 'Parity Bit'?",
    "options": ["A bit that is very fair.", "An extra bit added to a byte to help detect simple errors in data transfer.", "A type of computer memory.", "A cooling fan."],
    "correct": 1,
    "explanation": "Parity can tell if one bit in a byte was changed accidentally."
  },
  {
    "question": "What is 'Buffer'?",
    "options": ["A person who polishes things.", "A temporary storage area used to hold data while it's being moved from one place to another.", "A type of computer screen.", "A power supply."],
    "correct": 1,
    "explanation": "Buffers prevent data loss when one device is faster than another."
  },
  {
    "question": "What is 'Bottleneck'?",
    "options": ["The top of a bottle.", "The part of a system that is the slowest and limits the overall speed.", "A type of hardware cable.", "A cooling system."],
    "correct": 1,
    "explanation": "Identifying the bottleneck is the first step in making a system faster."
  },
  {
    "question": "What is 'Optimizing'?",
    "options": ["Being positive about something.", "The process of making a system or program as fast, small, or efficient as possible.", "Buying more hardware.", "Writing more code."],
    "correct": 1,
    "explanation": "Embedded engineers spend a lot of time optimizing code for limited hardware."
  },
  {
    "question": "What is 'Scalability'?",
    "options": ["The ability to weigh something.", "The ability of a system to handle more work as it grows or as more resources are added.", "How fast the computer is.", "The size of the computer."],
    "correct": 1,
    "explanation": "A scalable system can grow without needing to be completely redesigned."
  },
  {
    "question": "What is 'Robustness'?",
    "options": ["Being very strong.", "The ability of a system to handle errors and unexpected situations without crashing.", "The speed of the system.", "The weight of the system."],
    "correct": 1,
    "explanation": "A robust system 'fails gracefully' rather than simply breaking."
  },
  {
    "question": "What is the 'Final Question' in this quiz?",
    "options": ["This one.", "There is no final question.", "What is the meaning of life?", "Where is the exit?"],
    "correct": 0,
    "explanation": "Congratulations! You have completed the 400-question series on Computer Architecture and Embedded Systems."
  }
]