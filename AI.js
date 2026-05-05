export const ai=[
  {
    "question": "A smart hospital bed adjusts the pressure in different zones to prevent bedsores by monitoring a patient's movement. In the PEAS framework, the 'Pressure Zones' are:",
    "options": ["Sensors", "Actuators", "Environment", "Performance Measure"],
    correct: 1,
    "explanation": "Actuators are the components that an agent uses to act upon the environment; in this case, the pressure zones change the physical state of the bed."
  },
  {
    "question": "Which era of AI is known for the 'Lighthill Report' which led to a significant decrease in government support for AI research in the UK?",
    "options": ["The Birth (1956)", "The first AI Winter (1974-1980)", "The Expert Systems Boom", "The Deep Learning Revolution"],
    correct: 1,
    "explanation": "The Lighthill Report (1973) criticized the lack of progress in AI, triggering the first major 'AI Winter'."
  },
  {
    "question": "A search algorithm is considered 'Complete' if:",
    "options": ["It finds the optimal solution.", "It is guaranteed to find a solution if one exists.", "It uses minimal memory.", "It explores only the relevant nodes."],
    correct: 1,
    "explanation": "Completeness refers to the algorithm's ability to always find a goal node if the state space contains one."
  },
  {
    "question": "Scenario: You are navigating a maze where every step has a cost of 1. You want to find the exit using the least amount of memory while ensuring you find the shortest path. Which algorithm is best?",
    "options": ["Breadth-First Search", "Depth-First Search", "Iterative Deepening Search", "Uniform Cost Search"],
    correct: 2,
    "explanation": "IDS combines the completeness and optimality of BFS (since costs are equal) with the linear space complexity of DFS."
  },
  {
    "question": "In A* Search, if the heuristic function h(n) is consistently 0, the algorithm behaves exactly like:",
    "options": ["Greedy Best-First Search", "Uniform Cost Search", "Depth-First Search", "Depth-Limited Search"],
    correct: 1,
    "explanation": "When h(n)=0, the evaluation function f(n) = g(n) + h(n) simplifies to f(n) = g(n), which is Uniform Cost Search."
  },
  {
    "question": "A medical diagnosis agent looks at current symptoms (fever, cough) and maps them to a disease (Flu) without looking at the patient's previous history. This is a:",
    "options": ["Simple Reflex Agent", "Model-based Reflex Agent", "Goal-based Agent", "Utility-based Agent"],
    correct: 0,
    "explanation": "Simple reflex agents act only on the current percept, ignoring history."
  },
  {
    "question": "Which search algorithm expands the node that is 'closest' to the goal based solely on an estimated heuristic, ignoring the path cost already traveled?",
    "options": ["A*", "Uniform Cost Search", "Greedy Best-First Search", "AO*"],
    correct: 2,
    "explanation": "Greedy Best-First Search uses only h(n) to make decisions, which makes it fast but not always optimal."
  },
  {
    "question": "In a state space with a branching factor 'b' and depth of the shallowest solution 'd', what is the space complexity of BFS?",
    "options": ["O(bd)", "O(b^d)", "O(d^b)", "O(log b)"],
    correct: 1,
    "explanation": "BFS must store all generated nodes in memory, leading to exponential space complexity O(b^d)."
  },
  {
    "question": "Which of the following is a problem specifically for Hill Climbing where every neighbor is at the same elevation as the current state?",
    "options": ["Local Maxima", "Ridges", "Plateaus", "Global Minimum"],
    correct: 2,
    "explanation": "A plateau is a flat area of the state space landscape where the evaluation function is constant."
  },
  {
    "question": "Scenario: You are playing a game of Chess. The AI evaluates moves based on the probability of winning the game. This is best described as a:",
    "options": ["Simple Reflex Agent", "Goal-based Agent", "Utility-based Agent", "Learning Agent"],
    correct: 2,
    "explanation": "Utility agents use a performance measure (utility function) to choose between different paths to a goal based on 'how happy' they are with the outcome."
  },
  {
    "question": "Uniform Cost Search (UCS) is equivalent to BFS when:",
    "options": ["The heuristic is admissible.", "All step costs are equal.", "The branching factor is 1.", "The goal is at depth 0."],
    correct: 1,
    "explanation": "If all costs are equal, UCS expands nodes in the same order as BFS (level by level)."
  },
  {
    "question": "The AO* algorithm is used to search what type of structure?",
    "options": ["Binary Trees", "AND-OR Graphs", "Linked Lists", "Standard State-Space Graphs"],
    correct: 1,
    "explanation": "AO* is designed for problems that can be decomposed into sub-problems (AND nodes) or alternative choices (OR nodes)."
  },
  {
    "question": "What is the primary disadvantage of Bidirectional Search?",
    "options": ["It is never optimal.", "It is slower than BFS.", "It requires a goal state that is known and reversible.", "It cannot be used with heuristics."],
    correct: 2,
    "explanation": "Bidirectional search requires that we know the goal state and can generate 'predecessors' to search backward."
  },
  {
    "question": "A 'Rational Agent' is one that:",
    "options": ["Always makes the correct decision.", "Acts to maximize its expected performance measure.", "Is designed to mimic human brain structures.", "Has the ability to feel emotions."],
    correct: 1,
    "explanation": "Rationality is about performance (doing the right thing based on what is known), not omniscience or human-likeness."
  },
  {
    "question": "In the PEAS framework for a 'Robot Soccer Player', the 'Field' and 'Other Players' are part of the:",
    "options": ["Performance Measure", "Environment", "Actuators", "Sensors"],
    correct: 1,
    "explanation": "The environment is the external context in which the agent operates."
  },
  {
    "question": "Which search algorithm uses a 'limit' on the depth and increases it only after a full search of the current depth fails?",
    "options": ["DFS", "Bidirectional Search", "Iterative Deepening Search", "Greedy Search"],
    correct: 2,
    "explanation": "IDS repeatedly applies Depth-Limited Search with increasing limits."
  },
  {
    "question": "In A* Search, a heuristic is 'Admissible' if:",
    "options": ["It is always positive.", "It never overestimates the actual cost to the goal.", "It is always greater than g(n).", "It is calculated using the Manhattan distance."],
    correct: 1,
    "explanation": "Admissibility ensures that the heuristic is 'optimistic', which is required for A* to guarantee an optimal solution."
  },
  {
    "question": "What is the time complexity of BFS?",
    "options": ["O(b^d)", "O(bd)", "O(d^b)", "O(b+d)"],
    correct: 0,
    "explanation": "Like the space complexity, BFS time complexity is exponential because it visits all nodes up to depth d."
  },
  {
    "question": "Scenario: You have a search problem where the state space is infinite, but you know a solution exists at a shallow depth. Which algorithm should you AVOID?",
    "options": ["BFS", "IDS", "DFS", "UCS"],
    correct: 2,
    "explanation": "DFS may get lost down an infinite branch and never return to find a solution at a shallower level."
  },
  {
    "question": "The 'History of AI' started formally with a workshop at which university in 1956?",
    "options": ["Harvard", "Stanford", "Dartmouth", "MIT"],
    correct: 2,
    "explanation": "The Dartmouth Workshop of 1956 is widely considered the founding event of Artificial Intelligence as a field."
  }
,
  {
    "question": "In a Genetic Algorithm, what is the 'Elitism' operator responsible for?",
    "options": ["Increasing the mutation rate of the best individuals.", "Carrying over the best individuals to the next generation without modification.", "Removing the weakest individuals from the population.", "Randomizing the population at each step."],
    correct: 1,
    "explanation": "Elitism ensures that the highest-quality solutions found so far are not lost during the stochastic processes of crossover and mutation."
  },
  {
    "question": "Scenario: You are using Hill Climbing to optimize a function. You reach a point where every neighbor has exactly the same value as your current state, but you aren't at the goal. This is called a:",
    "options": ["Local Maximum", "Ridge", "Plateau", "Shoulder"],
    correct: 2,
    "explanation": "A plateau is a flat region of the state-space landscape where all neighboring states have the same value, leaving the algorithm with no 'upward' direction."
  },
  {
    "question": "Which Genetic Algorithm operator is primarily responsible for maintaining diversity and preventing the population from converging too quickly on a sub-optimal solution?",
    "options": ["Crossover", "Selection", "Mutation", "Inversion"],
    correct: 2,
    "explanation": "Mutation introduces random changes to individuals, which helps explore new areas of the search space and prevents premature convergence."
  },
  {
    "question": "In Simulated Annealing, what happens to the probability of accepting a 'worse' move as the 'Temperature' (T) decreases?",
    "options": ["It increases.", "It decreases.", "It stays the same.", "It becomes zero immediately."],
    correct: 1,
    "explanation": "As the system 'cools' (T decreases), the algorithm becomes more 'greedy' and less likely to accept moves that decrease the fitness."
  },
  {
    "question": "A 'Biased Roulette Wheel' selection method in GAs means that:",
    "options": ["Every individual has an equal 1/N chance of selection.", "Selection is based on the age of the chromosome.", "Individuals with higher fitness scores occupy a larger portion of the wheel.", "Only the top 10% of individuals can be selected."],
    correct: 2,
    "explanation": "Roulette wheel selection (fitness-proportionate selection) assigns a probability of selection to each individual based on its fitness relative to the population."
  },
  {
    "question": "Which of the following is a limitation of Propositional Logic?",
    "options": ["It cannot handle true or false values.", "It is too complex for computers to process.", "It cannot easily represent relations between objects or express 'all' and 'some'.", "It does not support logical operators like AND/OR."],
    correct: 2,
    "explanation": "Propositional logic is limited because it treats facts as atomic; it lacks quantifiers (like 'For All') found in First-Order Logic."
  },
  {
    "question": "In a 'K-point crossover' where K=2, how many sections of the parent chromosomes are swapped?",
    "options": ["1", "2", "3", "K+1"],
    correct: 1,
    "explanation": "In K-point crossover, you select K points. For K=2, you swap the middle segment between the two points between parents."
  },
  {
    "question": "Which search algorithm mimics the physical process of heating a material and then slowly lowering the temperature to reach a minimum energy state?",
    "options": ["Genetic Algorithm", "Simulated Annealing", "A* Search", "Hill Climbing"],
    correct: 1,
    "explanation": "Simulated Annealing is inspired by metallurgy, where slow cooling (annealing) results in a more stable crystalline structure."
  },
  {
    "question": "What is the result of the logical expression (P ∧ ¬P) in Propositional Logic?",
    "options": ["Always True (Tautology)", "Always False (Contradiction)", "Depends on the value of P", "Satisfiable but not valid"],
    correct: 1,
    "explanation": "A proposition cannot be both true and false at the same time; therefore, P AND NOT P is a contradiction."
  },
  {
    "question": "In the context of Genetic Algorithms, what does 'Inversion' do?",
    "options": ["Flips a 0 to a 1 in the bitstring.", "Reverses the order of a specific segment of the chromosome.", "Switches the fitness scores of two individuals.", "Deletes the chromosome from the population."],
    correct: 1,
    "explanation": "Inversion selects two points on a chromosome and reverses the order of the genes between them, which can help in finding better gene orderings."
  },
  {
    "question": "Scenario: An AI agent is tasked with finding the global maximum in a very 'bumpy' landscape with many local peaks. Which algorithm is most likely to succeed?",
    "options": ["Simple Hill Climbing", "Breadth-First Search", "Simulated Annealing", "Depth-First Search"],
    correct: 2,
    "explanation": "Simulated Annealing is specifically designed to escape local maxima by allowing occasional 'downward' moves early in the process."
  },
  {
    "question": "What is the 'Diversity Measure' used for in Genetic Algorithms?",
    "options": ["To calculate the speed of the algorithm.", "To ensure the population remains varied and doesn't become identical too soon.", "To determine the number of generations required.", "To measure the memory usage."],
    correct: 1,
    "explanation": "Diversity measures track how different individuals are; low diversity often indicates the algorithm is stuck in a local optimum."
  },
  {
    "question": "Which of these is considered a 'Local Search' algorithm?",
    "options": ["A*", "Uniform Cost Search", "Hill Climbing", "BFS"],
    correct: 2,
    "explanation": "Local search algorithms (like Hill Climbing) operate using only the current node and its neighbors, rather than keeping track of the whole path from the start."
  },
  {
    "question": "In Propositional Logic, if P is True and Q is False, what is the value of P → Q (P implies Q)?",
    "options": ["True", "False", "Indeterminate", "Both True and False"],
    correct: 1,
    "explanation": "In an implication, the only case where the result is False is when the premise (P) is True and the conclusion (Q) is False."
  },
  {
    "question": "What is a 'Classifier System' in the context of Genetic Algorithms?",
    "options": ["A way to sort images into categories.", "A rule-based system that uses GAs to evolve its rules over time.", "A hardware component that speeds up selection.", "A method for calculating the branching factor."],
    correct: 1,
    "explanation": "Learning Classifier Systems (LCS) use genetic algorithms to evolve a set of IF-THEN rules to solve complex reinforcement learning tasks."
  },
  {
    "question": "Which search is a memory-bounded version of A* that uses a priority queue to keep only the 'k' most promising nodes?",
    "options": ["Bidirectional Search", "Beam Search", "Uniform Cost Search", "DFS"],
    correct: 1,
    "explanation": "Beam Search reduces memory requirements by limiting the 'beam width' (k), though it is no longer guaranteed to be optimal."
  },
  {
    "question": "In Genetic Algorithms, 'Reproduction' usually refers to:",
    "options": ["The mutation of a single gene.", "The process of selecting individuals to pass their genes to the next generation.", "The final output of the AI.", "The hardware used to run the simulation."],
    correct: 1,
    "explanation": "Reproduction is the phase where individuals are selected (often based on fitness) to create offspring for the next generation."
  },
  {
    "question": "Scenario: You are designing a recommendation system for social media. Which AI component is primarily used to predict what a user will like based on past behavior?",
    "options": ["Computer Vision", "Natural Language Processing", "Machine Learning", "Genetic Programming"],
    correct: 2,
    "explanation": "Machine Learning (specifically Collaborative Filtering) is the core technology behind recommendation engines."
  },
  {
    "question": "What is the primary drawback of using the Hill Climbing algorithm?",
    "options": ["It requires too much memory.", "It is too slow for small problems.", "It easily gets stuck in local maxima, ridges, or plateaus.", "It cannot be used for optimization problems."],
    correct: 2,
    "explanation": "Because Hill Climbing only moves 'upward', it has no mechanism to move 'down' to eventually find a higher peak elsewhere."
  },
  {
    "question": "Which of the following is an example of an AI application in daily life mentioned in your topics?",
    "options": ["GPS navigation with real-time traffic updates", "Calculating long division on paper", "Driving a manual car", "Reading a physical book"],
    correct: 0,
    "explanation": "GPS systems use search algorithms (like A*) and data analysis to provide real-time routing, a classic AI application."
  }
,
  {
    "question": "In A* Search, if the heuristic function h(n) 'overestimates' the cost to the goal, the algorithm:",
    "options": ["Becomes more efficient", "Is no longer guaranteed to find the optimal path", "Becomes Breadth-First Search", "Uses less memory"],
    correct: 1,
    "explanation": "To guarantee optimality, the heuristic must be admissible (never overestimate the true cost)."
  },
  {
    "question": "Scenario: An AI is playing a complex game where it only keeps track of the 'top 5' best possible moves at each level to save memory. Which search strategy is it using?",
    "options": ["A*", "Beam Search", "Depth-First Search", "Uniform Cost Search"],
    correct: 1,
    "explanation": "Beam Search is a memory-bounded search that limits the number of explored nodes (the beam width) at each level."
  },
  {
    "question": "Which algorithm uses a 'cost-limit' instead of a 'depth-limit' and increases it iteratively, similar to how IDS works with depth?",
    "options": ["RBFS", "IDA*", "Greedy Search", "AO*"],
    correct: 1,
    "explanation": "Iterative Deepening A* (IDA*) uses the f-cost (g+h) as a limit to perform a series of depth-first searches."
  },
  {
    "question": "In Genetic Algorithms, a 'common operator' that mimics the biological process of offspring inheriting traits from two parents is:",
    "options": ["Mutation", "Crossover", "Inversion", "Elitism"],
    correct: 1,
    "explanation": "Crossover (recombination) combines parts of two parent chromosomes to create new offspring."
  },
  {
    "question": "Which of these is a significant disadvantage of 'Simple Hill Climbing'?",
    "options": ["It requires exponential memory.", "It is a complete algorithm.", "It can get stuck in a 'Local Maximum' where no neighbor is better.", "It only works on binary trees."],
    correct: 2,
    "explanation": "Simple Hill Climbing is 'greedy' and local; it stops the moment it sees no immediate upward move, even if a higher peak exists elsewhere."
  },
  {
    "question": "In Propositional Logic, which operator represents 'if and only if'?",
    "options": ["Conjunction (∧)", "Disjunction (∨)", "Biconditional (↔)", "Implication (→)"],
    correct: 2,
    "explanation": "The biconditional operator (↔) is true only when both propositions have the same truth value."
  },
  {
    "question": "Local Beam Search (LBS) differs from standard Hill Climbing because:",
    "options": ["It uses more memory.", "It tracks 'k' states simultaneously rather than just one.", "It is always optimal.", "It doesn't use a heuristic."],
    correct: 1,
    "explanation": "Local Beam Search keeps 'k' states in memory, allowing it to explore multiple areas of the search space at once."
  },
  {
    "question": "Scenario: You are designing a Genetic Algorithm to solve the 'Graph Coloring' problem. You want to visualize the population changes. Which tool/method is used for graph animation in GAs?",
    "options": ["GAs for graph animation", "A* search visualization", "Decision Trees", "Backtracking"],
    correct: 0,
    "explanation": "Specific Genetic Algorithm visualizations are used to show how populations evolve and converge on a graph layout or coloring."
  },
  {
    "question": "A 'Tautology' in Propositional Logic is a statement that is:",
    "options": ["Always false", "Sometimes true", "Always true regardless of the truth values of its components", "Mathematically impossible"],
    correct: 2,
    "explanation": "A tautology (like P ∨ ¬P) is true under every possible interpretation/truth assignment."
  },
  {
    "question": "What is the primary role of 'Selection' in a Genetic Algorithm?",
    "options": ["To create new mutations.", "To decide which individuals get to stay in the population and reproduce.", "To calculate the heuristic cost.", "To visualize the search space."],
    correct: 1,
    "explanation": "Selection identifies the 'fitter' individuals to ensure their genes are passed on to the next generation."
  },
  {
    "question": "Which search algorithm is 'Informed' but specifically designed to handle 'AND' nodes where multiple sub-problems must all be solved?",
    "options": ["A*", "AO*", "BFS", "Simulated Annealing"],
    correct: 1,
    "explanation": "AO* is designed for AND-OR graphs, which represent problems that can be decomposed into mandatory sub-tasks."
  },
  {
    "question": "In the context of GAs, what is 'Mutation'?",
    "options": ["Combining two parents.", "Randomly altering one or more gene values in a chromosome.", "Choosing the best individual.", "Increasing the population size."],
    correct: 1,
    "explanation": "Mutation introduces random variation, which is essential for exploring parts of the search space crossover might miss."
  },
  {
    "question": "Scenario: An AI agent needs to find a path in a graph. It uses a heuristic that is 'consistent'. This means:",
    "options": ["The algorithm is now DFS.", "The heuristic value never decreases along any path to the goal.", "The algorithm will be very slow.", "The agent is a simple reflex agent."],
    correct: 1,
    "explanation": "Consistency (or monotonicity) is a stronger property than admissibility; it ensures that the f-value along any path is non-decreasing."
  },
  {
    "question": "Which of these logic systems uses 'Quantifiers' like Universal (∀) and Existential (∃)?",
    "options": ["Propositional Logic", "First-Order Logic (FOL)", "Boolean Algebra", "Binary Logic"],
    correct: 1,
    "explanation": "First-Order Logic adds quantifiers and predicates to allow for more complex expressions than Propositional Logic."
  },
  {
    "question": "What is the complexity of a 'Biased Roulette Wheel' selection in terms of the number of individuals (N)?",
    "options": ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
    correct: 2,
    "explanation": "In a standard implementation, you must sum the fitness of all N individuals to determine the proportions of the wheel."
  },
  {
    "question": "If an algorithm is 'Optimizing', its goal is to:",
    "options": ["Find any solution.", "Find the best possible solution according to a performance measure.", "Run as fast as possible regardless of the result.", "Use the most memory possible."],
    correct: 1,
    "explanation": "Optimization is the process of finding the most efficient or highest-quality solution among all feasible ones."
  },
  {
    "question": "Which problem occurs in Hill Climbing when the search reaches a narrow peak that is higher than its neighbors, but the 'crest' of the peak is not aligned with the allowed moves?",
    "options": ["Plateau", "Local Maximum", "Ridge", "Basin"],
    correct: 2,
    "explanation": "Ridges result in a sequence of local maxima that are very difficult for simple hill-climbing to navigate."
  },
  {
    "question": "In FOL, the 'Universal Quantifier' (∀x) means:",
    "options": ["There exists at least one x.", "For every x in the domain.", "No x satisfies the condition.", "Only some x satisfy the condition."],
    correct: 1,
    "explanation": "The symbol ∀ stands for 'For All', indicating the property holds for every element in the discourse."
  },
  {
    "question": "Scenario: You are building a system to detect spam in social media. The system learns from thousands of examples of 'spam' and 'not spam'. This is:",
    "options": ["Search-based AI", "Machine Learning", "Propositional Logic", "Genetic Algorithm"],
    correct: 1,
    "explanation": "Learning from data to make predictions is the definition of Machine Learning."
  },
  {
    "question": "What is 'Completeness' in a search algorithm?",
    "options": ["The algorithm finds the shortest path.", "The algorithm is guaranteed to find a solution if one exists.", "The algorithm finishes in less than one second.", "The algorithm uses all available memory."],
    correct: 1,
    "explanation": "Completeness is the guarantee that the algorithm will not fail to find a solution that is present in the state space."
  },
  {
    "question": "Which search algorithm is technically a 'Best-First Search' that uses f(n) = g(n) + h(n)?",
    "options": ["BFS", "DFS", "A*", "UCS"],
    correct: 2,
    "explanation": "A* is a specific type of Best-First Search that balances path cost (g) and heuristic (h)."
  },
  {
    "question": "In GAs, 'Diversity Measure' is important because low diversity leads to:",
    "options": ["Faster search.", "Premature Convergence (getting stuck in local optima).", "Higher fitness scores.", "Better mutation rates."],
    correct: 1,
    "explanation": "If the population becomes too similar (low diversity), crossover stops producing new variations, and the GA gets stuck."
  },
  {
    "question": "What is the main limitation of First-Order Logic (FOL)?",
    "options": ["It cannot represent objects.", "It is undecidable (we cannot always prove if a statement is false).", "It doesn't support 'OR'.", "It is slower than a calculator."],
    correct: 1,
    "explanation": "While FOL is powerful, it is semi-decidable, meaning while we can prove true statements, we might never prove some false statements are false."
  },
  {
    "question": "A 'Heuristic' is best described as:",
    "options": ["A mathematical certainty.", "A 'rule of thumb' or educated guess to guide search.", "A computer virus.", "A type of sensor."],
    correct: 1,
    "explanation": "Heuristics provide a way to solve problems faster by focusing on the most promising paths, though they aren't always perfect."
  },
  {
    "question": "In Simulated Annealing, the 'Schedule' determines:",
    "options": ["The mutation rate.", "How the Temperature (T) is lowered over time.", "The order of nodes in the fringe.", "The number of parents."],
    correct: 1,
    "explanation": "The cooling schedule is critical; if it cools too fast, the system gets stuck in local minima; if too slow, it takes too long."
  },
  {
    "question": "Which logic gate corresponds to the 'Conjunction' (∧) operator?",
    "options": ["OR", "NOT", "AND", "XOR"],
    correct: 2,
    "explanation": "Conjunction (P ∧ Q) is only true if both P AND Q are true."
  },
  {
    "question": "Scenario: An AI must find its way through a graph where every edge has a different cost. It uses a priority queue based on the cost from the start node. This is:",
    "options": ["BFS", "Uniform Cost Search (UCS)", "DFS", "Hill Climbing"],
    correct: 1,
    "explanation": "UCS is the uninformed search equivalent of Dijkstra’s algorithm, focusing on the cumulative path cost."
  },
  {
    "question": "In GAs, the 'Chromosome' usually represents:",
    "options": ["The fitness score.", "A potential solution to the problem.", "The mutation rate.", "The computer's memory."],
    correct: 1,
    "explanation": "Each chromosome in the population is a coded representation of a candidate solution."
  },
  {
    "question": "What is 'RBFS' (Recursive Best-First Search)?",
    "options": ["A search that only goes deep.", "A memory-efficient version of Best-First Search that uses linear space.", "A search that uses no heuristics.", "A search used only in social media."],
    correct: 1,
    "explanation": "RBFS mimics Best-First Search but uses recursion to keep memory usage proportional to the depth of the tree."
  },
  {
    "question": "The 'Existential Quantifier' (∃x) in FOL is true if:",
    "options": ["The property holds for all x.", "The property holds for at least one x.", "The property holds for no x.", "The property is a tautology."],
    correct: 1,
    "explanation": "The symbol ∃ stands for 'There Exists', meaning at least one member of the domain satisfies the formula."
  },
  {
    "question": "Which of these is NOT a component of AI mentioned in your list?",
    "options": ["Machine Learning (ML)", "Natural Language Processing (NLP)", "Quantum Teleportation", "Computer Vision (CV)"],
    correct: 2,
    "explanation": "ML, NLP, and CV are core components/sub-fields of AI. Quantum teleportation is a physics concept."
  },
  {
    "question": "The 'Rationality' of an AI agent is measured by:",
    "options": ["Its internal reasoning process.", "Its success in achieving the maximum performance measure.", "How closely it mimics a human.", "The speed of its CPU."],
    correct: 1,
    "explanation": "Rationality is about the outcome—taking the action that is expected to maximize success based on available information."
  },
  {
    "question": "Which search algorithm is optimal if the heuristic is admissible?",
    "options": ["Greedy Best-First Search", "A*", "DFS", "Hill Climbing"],
    correct: 1,
    "explanation": "A* is guaranteed to be optimal as long as the heuristic never overestimates the cost to the goal."
  },
  {
    "question": "In Propositional Logic, if P is false, then (P → Q) is:",
    "options": ["True", "False", "Depends on Q", "Invalid"],
    correct: 0,
    "explanation": "In an implication, if the premise is false, the whole statement is automatically true (vacuously true)."
  },
  {
    "question": "Scenario: You are designing an AI for a social media site to detect fake news. One disadvantage of such systems is:",
    "options": ["They are too fast.", "They may accidentally censor legitimate content (False Positives).", "They don't use data.", "They are only used by doctors."],
    correct: 1,
    "explanation": "AI bias and errors (misidentifying truth as fake) are major ethical and functional disadvantages."
  },
  {
    "question": "What does 'BFS' stand for in search algorithms?",
    "options": ["Binary First Search", "Breadth-First Search", "Best-First Search", "Basic Finder System"],
    correct: 1,
    "explanation": "BFS explores all nodes at the present depth before moving on to nodes at the next depth level."
  },
  {
    "question": "In GAs, what does 'Reproduction' (Selection) aim to achieve?",
    "options": ["Introduce new genes.", "Survival of the fittest.", "Randomly shuffle the population.", "Increase the chromosome length."],
    correct: 1,
    "explanation": "Selection ensures that individuals with higher fitness have a higher probability of passing their genes to the next generation."
  },
  {
    "question": "A search algorithm that uses the evaluation function f(n) = h(n) is:",
    "options": ["A*", "Uniform Cost Search", "Greedy Best-First Search", "Iterative Deepening"],
    correct: 2,
    "explanation": "Greedy search only cares about the estimated cost to the goal, ignoring the cost to get to the current node."
  },
  {
    "question": "Which AI fundamental concept describes an agent's 'sensors, actuators, and environment'?",
    "options": ["PEAS", "A*", "CNN", "NLP"],
    correct: 0,
    "explanation": "PEAS stands for Performance, Environment, Actuators, and Sensors."
  },
  {
    "question": "What is 'Iterative Improvement' in the context of algorithms?",
    "options": ["Starting with a complete solution and modifying it to make it better.", "Building a solution piece by piece from scratch.", "A search that never ends.", "An algorithm used only for sorting."],
    correct: 0,
    "explanation": "Iterative improvement algorithms (like Hill Climbing or GA) start with a full state and try to improve its quality."
  },
  {
    "question": "In a Genetic Algorithm, if the 'Mutation Rate' is set to 100%, what happens?",
    "options": ["The algorithm finds the goal instantly.", "The search becomes a random walk, losing the benefits of selection.", "No crossover can occur.", "The population becomes identical."],
    correct: 1,
    "explanation": "High mutation rates destroy the 'memory' of good solutions found by selection, making the search random."
  },
  {
    "question": "Which of these is an 'Uninformed Search'?",
    "options": ["A*", "Greedy Search", "Uniform Cost Search", "Beam Search"],
    correct: 2,
    "explanation": "Uninformed (or blind) searches like BFS, DFS, and UCS have no knowledge of the goal's location."
  },
  {
    "question": "First-Order Logic is more powerful than Propositional Logic because it can:",
    "options": ["Represent objects and their relationships.", "Use the AND operator.", "Be written in binary.", "Be solved by a reflex agent."],
    correct: 0,
    "explanation": "FOL allows us to talk about individuals (like 'Socrates') and their properties (like 'is mortal') and relationships."
  },
  {
    "question": "Scenario: You are trying to solve a puzzle. You can see the whole board, and nothing changes unless you move. This environment is:",
    "options": ["Stochastic", "Partially Observable", "Static and Fully Observable", "Dynamic"],
    correct: 2,
    "explanation": "Static means the world doesn't change while you think; Fully Observable means you see everything relevant."
  },
  {
    "question": "In a search tree, the 'Branching Factor' refers to:",
    "options": ["The total depth of the tree.", "The average number of children per node.", "The time it takes to find the goal.", "The number of goals in the tree."],
    correct: 1,
    "explanation": "The branching factor (b) determines how quickly the search space grows."
  },
  {
    "question": "What is 'Simulated Annealing' used for?",
    "options": ["Finding the shortest path in a small graph.", "Optimization problems where you want to avoid local maxima.", "Translating languages.", "Recognizing faces in images."],
    correct: 1,
    "explanation": "It is a global optimization technique that can escape local optima by occasionally accepting worse solutions."
  },
  {
    "question": "Which logic quantifier is represented by the inverted 'A' symbol (∀)?",
    "options": ["Existential", "Universal", "Conditional", "Negation"],
    correct: 1,
    "explanation": "∀ is the Universal Quantifier, meaning 'for all' or 'for every'."
  },
  {
    "question": "A 'Classifier System' in AI is often associated with which learning paradigm?",
    "options": ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning using Genetic Algorithms", "Heuristic Search"],
    correct: 2,
    "explanation": "Learning Classifier Systems (LCS) are a class of rule-based machine learning algorithms that use GAs and reinforcement learning."
  },
  {
    "question": "Which of the following is a disadvantage of AI in social media?",
    "options": ["Improved user experience", "Efficient content moderation", "Echo chambers and algorithmic bias", "Faster news delivery"],
    correct: 2,
    "explanation": "AI can reinforce existing beliefs (echo chambers) and introduce bias based on the data it was trained on."
  },
  {
    "question": "In FOL, what is the 'Domain'?",
    "options": ["The set of all possible truth values.", "The set of all objects we are talking about.", "The website where the AI is hosted.", "The list of all search algorithms."],
    correct: 1,
    "explanation": "The domain (or universe of discourse) is the collection of individuals the quantifiers range over."
  },
  {
    "question": "If you have a memory limit of 10MB and the search tree is 1GB, which search is safest to use?",
    "options": ["BFS", "DFS", "A*", "UCS"],
    correct: 1,
    "explanation": "DFS has linear space complexity O(bm), making it much more memory-efficient than BFS or A*."
  },
  {
    "question": "Which search algorithm expands all nodes at depth 'd' before any nodes at depth 'd+1'?",
    "options": ["DFS", "BFS", "Hill Climbing", "Greedy Search"],
    correct: 1,
    "explanation": "This is the level-by-level exploration characteristic of Breadth-First Search."
  },
  {
    "question": "What does the 'g(n)' term represent in A* Search?",
    "options": ["The estimated cost to the goal.", "The actual cost from the start node to the current node n.", "The total estimated cost.", "The depth of the goal."],
    correct: 1,
    "explanation": "g(n) is the path cost already incurred to reach the current state."
  },
  {
    "question": "In Genetic Algorithms, a 'fitness-proportionate selection' is also known as:",
    "options": ["Tournament Selection", "Roulette Wheel Selection", "Rank Selection", "Elitism"],
    correct: 1,
    "explanation": "In Roulette Wheel selection, the probability of selecting an individual is proportional to its fitness."
  },
  {
    "question": "Which search algorithm is technically an 'Uninformed Search' but can find the shortest path in a weighted graph?",
    "options": ["BFS", "DFS", "Uniform Cost Search", "IDS"],
    correct: 2,
    "explanation": "UCS expands the node with the lowest path cost, making it optimal for weighted graphs with non-negative costs."
  },
  {
    "question": "The 'Inversion' operator in GAs changes the:",
    "options": ["Value of the bits.", "Order of genes in a chromosome.", "Fitness function.", "Number of parents."],
    correct: 1,
    "explanation": "Inversion reverses the order of a segment, which can help preserve 'building blocks' of good gene combinations."
  },
  {
    "question": "A logical statement that is false under all possible interpretations is called a:",
    "options": ["Tautology", "Contradiction", "Predicate", "Valid statement"],
    correct: 1,
    "explanation": "A contradiction is a statement that is always false, such as (P ∧ ¬P)."
  },
  {
    "question": "In a 'Scenario-based' question: An AI is driving a car. It sees a stop sign. This 'Stop Sign' is processed by which part of the agent?",
    "options": ["Actuator", "Sensor", "Performance Measure", "Heuristic"],
    correct: 1,
    "explanation": "Sensors (like cameras) are the input devices that perceive the environment."
  },
  {
    "question": "Which search algorithm is described as 'optimal and complete' even in infinite state spaces, provided a solution exists and step costs are equal?",
    "options": ["DFS", "BFS", "Hill Climbing", "Greedy Search"],
    correct: 1,
    "explanation": "BFS is complete and optimal (for unit costs) even if the tree is infinitely deep, as long as the goal is at a finite depth."
  },
  {
    "question": "In FOL, which quantifier is used for the statement 'There is a student who is smart'?",
    "options": ["Universal (∀)", "Existential (∃)", "Negation (¬)", "Implication (→)"],
    correct: 1,
    "explanation": "Since it refers to 'at least one' student, the existential quantifier (∃) is appropriate."
  }
,
  {
    "question": "Which sub-field of AI is primarily concerned with giving machines the ability to interpret and understand the visual world using digital images and videos?",
    "options": ["Natural Language Processing", "Computer Vision", "Genetic Programming", "Propositional Logic"],
    correct: 1,
    "explanation": "Computer Vision (CV) involves extracting, analyzing, and understanding useful information from a single image or a sequence of images."
  },
  {
    "question": "Scenario: A social media platform uses an algorithm to show you posts based on what you have liked in the past. This is a classic example of a:",
    "options": ["Expert System", "Recommendation System", "Reflex Agent", "Genetic Algorithm"],
    correct: 1,
    "explanation": "Recommendation systems use Machine Learning to predict user preferences and suggest relevant content."
  },
  {
    "question": "In Machine Learning, what is the 'Training Set' used for?",
    "options": ["To test the final accuracy of the model.", "To teach the model by providing examples with known outcomes.", "To visualize the neural network layers.", "To store the user's personal data."],
    correct: 1,
    "explanation": "The training set is the initial data used to fit the model and help it learn patterns."
  },
  {
    "question": "Which of the following is a primary difference between Deep Learning (DL) and traditional Machine Learning (ML)?",
    "options": ["DL requires less data than ML.", "DL uses Artificial Neural Networks with many layers, whereas ML often uses simpler algorithms.", "ML is used for images, while DL is only for text.", "There is no difference; they are the same thing."],
    correct: 1,
    "explanation": "Deep Learning is a subset of ML characterized by deep neural networks that can automatically learn features from raw data."
  },
  {
    "question": "A personal assistant like Siri or Alexa uses which AI technology to understand spoken commands?",
    "options": ["Computer Vision", "Natural Language Processing (NLP)", "Genetic Algorithms", "A* Search"],
    correct: 1,
    "explanation": "NLP is the field of AI that focuses on the interaction between computers and human language."
  },
  {
    "question": "What is 'Supervised Learning'?",
    "options": ["The AI learns by trial and error.", "The AI learns from data that is already labeled with the correct corrects.", "The AI organizes data into clusters without help.", "The AI is supervised by a human in real-time."],
    correct: 1,
    "explanation": "In supervised learning, the model is trained on a labeled dataset, meaning the target output is known."
  },
  {
    "question": "Which search algorithm is often used in GPS systems to find the fastest route to a destination by using real-time traffic data as a heuristic?",
    "options": ["DFS", "A* Search", "Hill Climbing", "Bidirectional BFS"],
    correct: 1,
    "explanation": "A* is the industry standard for pathfinding because it combines actual distance traveled (g) with a heuristic estimate (h) like time or distance."
  },
  {
    "question": "Scenario: A bank uses AI to detect fraudulent credit card transactions. If the AI flags a legitimate purchase as fraud, this is called a:",
    "options": ["True Positive", "False Positive", "True Negative", "False Negative"],
    correct: 1,
    "explanation": "A False Positive occurs when the system incorrectly identifies a non-target event as the target (e.g., flagging a safe transaction as fraud)."
  },
  {
    "question": "In the context of 'AI in Daily Life', what is a major 'Disadvantage' of automated facial recognition in public spaces?",
    "options": ["It is too slow to be useful.", "Privacy concerns and potential for mass surveillance.", "It requires expensive sensors.", "It only works in daylight."],
    correct: 1,
    "explanation": "Privacy and ethical implications are the most cited disadvantages of widespread public facial recognition."
  },
  {
    "question": "What does the 'Deep' in Deep Learning refer to?",
    "options": ["The depth of the data used.", "The number of hidden layers in the neural network.", "The complexity of the mathematical formulas.", "The deep intelligence of the creator."],
    correct: 1,
    "explanation": "'Deep' refers to the multiple layers (hidden layers) through which data is transformed in a neural network."
  },
  {
    "question": "Which logic quantifier would you use to translate: 'Every person has a name'?",
    "options": ["∃ (Existential)", "∀ (Universal)", "¬ (Negation)", "∧ (Conjunction)"],
    correct: 1,
    "explanation": "'Every' implies all members of the category, which requires the Universal Quantifier (∀)."
  },
  {
    "question": "In Machine Learning, 'Overfitting' occurs when:",
    "options": ["The model is too simple to learn the data.", "The model learns the training data too well, including the noise, and fails on new data.", "The model takes too long to train.", "The model uses too much memory."],
    correct: 1,
    "explanation": "Overfitting happens when a model is so customized to the training set that it cannot generalize to unseen data."
  },
  {
    "question": "Which component of AI is responsible for identifying objects within a digital photo?",
    "options": ["NLP", "Object Detection (Computer Vision)", "Expert Systems", "Logic Programming"],
    correct: 1,
    "explanation": "Object detection is a specific CV task that involves locating and identifying objects in images."
  },
  {
    "question": "Scenario: A social media AI creates an 'Echo Chamber' for a user. What does this mean?",
    "options": ["The user's microphone is echoing.", "The AI only shows the user content that reinforces their existing beliefs.", "The AI suggests friends that the user already knows.", "The user is banned from the platform."],
    correct: 1,
    "explanation": "Echo chambers occur when algorithms prioritize engagement by showing users content they agree with, limiting exposure to diverse views."
  },
  {
    "question": "What is 'Unsupervised Learning' typically used for?",
    "options": ["Predicting stock prices.", "Clustering similar data points together without pre-defined labels.", "Classifying images into 'Cat' or 'Dog'.", "Solving logic puzzles."],
    correct: 1,
    "explanation": "Unsupervised learning finds hidden patterns or structures in input data without the use of labeled targets."
  },
  {
    "question": "In First-Order Logic, what is the 'Universal' speed/efficiency concern compared to Propositional Logic?",
    "options": ["FOL is always faster.", "FOL is more complex and usually slower to process (inference is harder).", "There is no difference in speed.", "FOL doesn't require a processor."],
    correct: 1,
    "explanation": "Because FOL is more expressive and allows for infinite domains, reasoning (inference) is much more computationally expensive."
  },
  {
    "question": "Which of the following is an example of 'AI Fundamentals' applied to a vacuum robot's 'Sensors'?",
    "options": ["The motor that turns the brushes.", "The infrared 'cliff sensor' that prevents it from falling down stairs.", "The dust bin.", "The charging dock."],
    correct: 1,
    "explanation": "A sensor is an input device; the cliff sensor provides data about the environment to the agent."
  },
  {
    "question": "What is the primary goal of 'Reinforcement Learning'?",
    "options": ["To map inputs to labels.", "To find clusters in data.", "To learn a policy of actions that maximizes a cumulative reward.", "To translate text from one language to another."],
    correct: 2,
    "explanation": "Reinforcement Learning is based on an agent taking actions in an environment to maximize a numerical reward signal."
  },
  {
    "question": "Scenario: An AI system is used to filter job resumes. If the training data only contains resumes from one demographic, the AI might develop:",
    "options": ["Higher speed", "Algorithmic Bias", "Better memory", "Universal Quantifiers"],
    correct: 1,
    "explanation": "Algorithmic bias occurs when the data used to train the AI reflects existing human prejudices."
  },
  {
    "question": "In Computer Vision, what is 'Image Segmentation'?",
    "options": ["Changing the color of an image.", "Dividing an image into multiple segments (pixels) to simplify or change its representation into something more meaningful.", "Compressing an image to a smaller size.", "Sending an image over the internet."],
    correct: 1,
    "explanation": "Segmentation involves partitioning an image so that objects or boundaries are easier to analyze."
  },
  {
    "question": "Which AI topic relates to 'Sentiment Analysis' in social media?",
    "options": ["Computer Vision", "Natural Language Processing (NLP)", "Genetic Algorithms", "A* Search"],
    correct: 1,
    "explanation": "Sentiment analysis uses NLP to determine whether a piece of text is positive, negative, or neutral."
  },
  {
    "question": "In First-Order Logic (FOL), how do 'Quantifiers' differ from Propositional Logic?",
    "options": ["They don't; they are the same.", "Quantifiers allow us to talk about groups of objects, which Propositional Logic cannot do.", "Quantifiers make the logic simpler.", "Quantifiers are only used for numbers."],
    correct: 1,
    "explanation": "Quantifiers (∀, ∃) allow FOL to express generalities across a domain of objects."
  },
  {
    "question": "What is a 'Neural Network'?",
    "options": ["A physical network of wires.", "A computational model inspired by the structure and functional aspects of biological neural networks.", "A social media platform for scientists.", "A type of search algorithm like BFS."],
    correct: 1,
    "explanation": "Neural networks are the backbone of Deep Learning, consisting of interconnected 'neurons' that process information."
  },
  {
    "question": "Scenario: A navigation app suggests a route that is longer in distance but shorter in time due to traffic. This optimization uses:",
    "options": ["BFS", "Utility-based decision making", "Simple Reflex actions", "Depth-First Search"],
    correct: 1,
    "explanation": "Utility-based agents (or functions) consider multiple factors to find the 'best' outcome according to a performance measure."
  },
  {
    "question": "What is a 'Chatbot' primarily an application of?",
    "options": ["Computer Vision", "NLP", "Robotics", "Genetic Algorithms"],
    correct: 1,
    "explanation": "Chatbots rely on NLP to interpret user text and generate appropriate human-like responses."
  },
  {
    "question": "In AI history, the 'Turing Test' was proposed to determine:",
    "options": ["If a machine can calculate faster than a human.", "If a machine can exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.", "The speed of a computer processor.", "The storage capacity of a hard drive."],
    correct: 1,
    "explanation": "The Turing Test focuses on a machine's ability to converse convincingly like a human."
  },
  {
    "question": "Which of the following is a 'Numerical Base' problem often encountered in logic-related AI questions?",
    "options": ["Converting Boolean expressions to truth tables.", "Solving A* with weights.", "Analyzing the mutation rate in GAs.", "Determining the complexity of BFS."],
    correct: 0,
    "explanation": "Logical operations often involve mapping to base-2 (binary) truth values (0 for False, 1 for True)."
  },
  {
    "question": "What is 'Feature Extraction' in Machine Learning?",
    "options": ["Adding more data to the model.", "The process of selecting or transforming raw data into a set of characteristics that are useful for the model to learn.", "Deleting data that is too complex.", "Translating data into another language."],
    correct: 1,
    "explanation": "Feature extraction simplifies the data while retaining the most important information for the algorithm."
  },
  {
    "question": "Scenario: You are using an AI to automatically generate captions for a video. This requires a combination of:",
    "options": ["NLP and Computer Vision", "Genetic Algorithms and Logic", "BFS and DFS", "A* and Hill Climbing"],
    correct: 0,
    "explanation": "CV is needed to understand the video frames, and NLP is needed to generate the textual caption."
  },
  {
    "question": "In the context of AI, what does 'Rationality' imply for an agent?",
    "options": ["The agent is always right.", "The agent does the 'right thing' to maximize its success given its percepts.", "The agent has human emotions.", "The agent never makes mistakes."],
    correct: 1,
    "explanation": "Rationality is relative to the agent's performance measure and the information it has received."
  },
  {
    "question": "Which search algorithm is 'Informed' and uses both the cost to reach a node and the estimated cost to the goal?",
    "options": ["Uniform Cost Search", "Greedy Best-First Search", "A* Search", "Breadth-First Search"],
    correct: 2,
    "explanation": "A* uses $f(n) = g(n) + h(n)$, whereas Greedy only uses $h(n)$ and UCS only uses $g(n)$."
  },
  {
    "question": "What is the main advantage of 'Simulated Annealing' over 'Hill Climbing'?",
    "options": ["It is faster.", "It uses less memory.", "It has a better chance of escaping local maxima to find the global maximum.", "It is easier to program."],
    correct: 2,
    "explanation": "By allowing 'worse' moves with a certain probability, it avoids getting stuck on small local peaks."
  },
  {
    "question": "In Social Media AI, 'Detections' often refer to identifying:",
    "options": ["The user's password.", "Hate speech, spam, or inappropriate images.", "The weather at the user's location.", "The battery level of the device."],
    correct: 1,
    "explanation": "AI is heavily used for content moderation to detect and remove harmful content automatically."
  },
  {
    "question": "Which of these is a 'Structural' component of an Artificial Neural Network?",
    "options": ["Genes and Chromosomes", "Input, Hidden, and Output layers", "Heuristic functions", "Logical quantifiers"],
    correct: 1,
    "explanation": "Neural networks are organized into layers of processing units called neurons."
  },
  {
    "question": "What is the 'Existential Quantifier' symbol?",
    "options": ["∀", "∃", "¬", "⇒"],
    correct: 1,
    "explanation": "∃ represents 'There Exists'."
  },
  {
    "question": "Scenario: An AI is trained to distinguish between images of 'Apples' and 'Oranges'. After training, it is shown a 'Banana' and it labels it 'Apple'. This is an example of a failure in:",
    "options": ["Memory", "Generalization", "Mutation", "Logical Quantifiers"],
    correct: 1,
    "explanation": "Generalization is the model's ability to handle new, unseen types of data correctly."
  },
  {
    "question": "In Genetic Algorithms, 'Reproduction' involves selecting parents. Which method gives every individual a chance to be picked, but fitter ones a higher chance?",
    "options": ["Elitism", "Tournament Selection", "Roulette Wheel Selection", "Random Search"],
    correct: 2,
    "explanation": "In Roulette Wheel selection, fitness determines the probability (the 'slice' of the wheel) of being chosen."
  },
  {
    "question": "What is 'NLP's' role in social media?",
    "options": ["Compressing images.", "Translating posts into different languages for global users.", "Tracking the user's location via GPS.", "Optimizing the server speed."],
    correct: 1,
    "explanation": "Machine translation is a core application of NLP used to make social media global."
  },
  {
    "question": "Which of these is a limitation of 'Propositional Logic'?",
    "options": ["It is too fast.", "It cannot easily represent objects and their properties.", "It doesn't use truth tables.", "It is only for binary computers."],
    correct: 1,
    "explanation": "Propositional logic is too granular; it lacks the expressive power to describe relationships among objects efficiently."
  },
  {
    "question": "What is 'Computer Vision' used for in autonomous vehicles?",
    "options": ["Calculating the fuel efficiency.", "Detecting lane markings, pedestrians, and traffic lights.", "Playing music for the passengers.", "Connecting to the internet."],
    correct: 1,
    "explanation": "CV is essential for the vehicle to 'see' and interpret its surroundings for safe navigation."
  },
  {
    "question": "In a Genetic Algorithm, if you want to swap segments between two chromosomes at two different points, you use:",
    "options": ["Single-point crossover", "Two-point crossover", "Mutation", "Inversion"],
    correct: 1,
    "explanation": "Two-point crossover selects two points on the parent strings and swaps the segment between them."
  },
  {
    "question": "Scenario: An AI agent is tasked with finding a needle in a haystack. It has no idea where the needle is. Which search is most 'honest' to use first?",
    "options": ["A*", "Greedy Search", "Uninformed Search (like BFS/DFS)", "Heuristic Search"],
    correct: 2,
    "explanation": "If there is no information (heuristic) about the goal's location, you must use an uninformed search."
  },
  {
    "question": "In ML, what is a 'Label'?",
    "options": ["The name of the algorithm.", "The output or result we want the AI to predict (e.g., 'Spam' or 'Not Spam').", "The speed of the training.", "The brand of the computer."],
    correct: 1,
    "explanation": "A label is the 'ground truth' or correct associated with a data point in supervised learning."
  },
  {
    "question": "What is the 'Universal' quantifier symbol?",
    "options": ["∃", "∀", "∧", "∨"],
    correct: 1,
    "explanation": "∀ stands for 'All'."
  },
  {
    "question": "In social media, AI-driven 'Friend Recommendations' are usually based on:",
    "options": ["Alphabetical order of names.", "Random selection.", "Graph theory and common connections (Machine Learning).", "The user's height."],
    correct: 2,
    "explanation": "Social graphs are analyzed to find 'friends of friends' or similar interests."
  },
  {
    "question": "Which search algorithm is optimal and complete when all step costs are equal?",
    "options": ["DFS", "BFS", "Hill Climbing", "Greedy Search"],
    correct: 1,
    "explanation": "BFS is guaranteed to find the shallowest goal node, which is the optimal one if costs are equal."
  },
  {
    "question": "What is 'Mutation' in a Genetic Algorithm?",
    "options": ["A way to combine two solutions.", "A small random change in an individual's chromosome.", "Choosing the best individual to survive.", "Increasing the number of generations."],
    correct: 1,
    "explanation": "Mutation ensures the GA doesn't just shuffle existing genes but also explores new genetic material."
  },
  {
    "question": "In FOL, 'x' in P(x) is typically a:",
    "options": ["Quantifier", "Variable representing an object", "Truth value", "Logical operator"],
    correct: 1,
    "explanation": "Variables in FOL represent individuals or objects in the domain."
  },
  {
    "question": "Scenario: A search algorithm is used where the search moves both forward from the start and backward from the goal. This is:",
    "options": ["BFS", "DFS", "Bidirectional Search", "A*"],
    correct: 2,
    "explanation": "Bidirectional search can significantly reduce the number of nodes explored by meeting in the middle."
  },
  {
    "question": "Which of these is a 'Deep Learning' architecture commonly used for image recognition?",
    "options": ["Recurrent Neural Network (RNN)", "Convolutional Neural Network (CNN)", "Linear Regression", "Propositional Logic"],
    correct: 1,
    "explanation": "CNNs are specifically designed to process pixel data and are the gold standard for CV tasks."
  },
  {
    "question": "What does 'NLP' stand for?",
    "options": ["Natural Logic Processing", "Natural Language Processing", "Neural Language Programming", "Network Layer Protocol"],
    correct: 1,
    "explanation": "NLP is the field focused on computer-human language interaction."
  },
  {
    "question": "In the context of 'AI Fundamentals', what does the 'E' in PEAS stand for?",
    "options": ["Efficiency", "Environment", "Effectors", "Evolution"],
    correct: 1,
    "explanation": "Environment is the space where the agent operates."
  },
  {
    "question": "Which algorithm is used when we have an AND-OR graph?",
    "options": ["A*", "AO*", "BFS", "DFS"],
    correct: 1,
    "explanation": "AO* is the specialized version of A* for AND-OR structures."
  },
  {
    "question": "Scenario: An AI must find the highest point on a map. It always moves to the highest neighbor. It stops when all neighbors are lower. This is:",
    "options": ["A*", "Hill Climbing", "BFS", "Genetic Algorithm"],
    correct: 1,
    "explanation": "Hill Climbing is a greedy local search that only moves toward better neighbors."
  },
  {
    "question": "What is 'Sentiment Analysis'?",
    "options": ["The study of AI emotions.", "Using NLP to identify the mood or opinion expressed in text.", "Predicting the weather using AI.", "Translating math into logic."],
    correct: 1,
    "explanation": "It helps businesses and social media platforms understand how people feel about topics."
  },
  {
    "question": "In Propositional Logic, what is the 'Biconditional' operator?",
    "options": ["P → Q", "P ↔ Q", "P ∧ Q", "P ∨ Q"],
    correct: 1,
    "explanation": "The ↔ symbol represents 'if and only if'."
  },
  {
    "question": "Which of these is a potential 'Impact of AI on Daily Life'?",
    "options": ["Automated medical diagnosis", "Manual data entry", "Using a paper map", "Writing with a quill"],
    correct: 0,
    "explanation": "AI is increasingly used to assist doctors in analyzing medical images and symptoms."
  },
  {
    "question": "What is 'Elitism' in GAs?",
    "options": ["Removing the best individuals.", "Ensuring the best individual survives to the next generation unchanged.", "Giving everyone equal fitness.", "Mutating the strongest individual."],
    correct: 1,
    "explanation": "It prevents the loss of the current best solution during the crossover/mutation phase."
  },
  {
    "question": "In FOL, the 'Universal Quantifier' is false if:",
    "options": ["All objects satisfy the property.", "At least one object does NOT satisfy the property.", "Only one object satisfies the property.", "The domain is empty."],
    correct: 1,
    "explanation": "For a 'For All' statement to be false, you only need one counter-example."
  },
  {
    "question": "Scenario: A search algorithm has a branching factor of 10 and the goal is at depth 5. How many nodes would BFS roughly explore in the worst case?",
    "options": ["50", "100", "100,000", "1,000,000"],
    correct: 2,
    "explanation": "The complexity is $O(b^d)$, so $10^5 = 100,000$."
  },
  {
    "question": "Which search algorithm is 'Memory-less' (or uses very little memory)?",
    "options": ["BFS", "A*", "Hill Climbing", "Bidirectional Search"],
    correct: 2,
    "explanation": "Hill climbing only keeps the current state in memory, ignoring the path taken."
  },
  {
    "question": "What is 'Simulated Annealing's' probability of move based on?",
    "options": ["The time of day.", "The difference in fitness and the current 'Temperature'.", "The number of nodes in the tree.", "The user's preference."],
    correct: 1,
    "explanation": "The probability $P = e^{\Delta E / T}$ depends on how much worse the move is and how high the temperature is."
  },
  {
    "question": "In Machine Learning, 'Classification' is a type of:",
    "options": ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Heuristic Search"],
    correct: 1,
    "explanation": "Classification involves predicting a discrete label for an input."
  },
  {
    "question": "What is 'Computer Vision' used for in 'Detections' on Social Media?",
    "options": ["Identifying faces for tagging.", "Translating text.", "Predicting the stock market.", "Calculating the user's age based on their posts."],
    correct: 0,
    "explanation": "Facial recognition and object tagging are core CV applications on social platforms."
  },
  {
    "question": "In a Genetic Algorithm, the 'Crossover Rate' determines:",
    "options": ["How often mutation occurs.", "How many offspring are created via recombination vs. copying.", "The length of the chromosome.", "The fitness of the population."],
    correct: 1,
    "explanation": "A high crossover rate means more individuals will exchange genetic material."
  },
  {
    "question": "What is 'First-Order Logic' (FOL) also known as?",
    "options": ["Binary Logic", "Predicate Logic", "Sentential Logic", "Heuristic Logic"],
    correct: 1,
    "explanation": "It is called Predicate Logic because it uses predicates to describe properties of objects."
  },
  {
    "question": "Scenario: An AI agent needs to find the shortest path. All costs are equal. It has plenty of memory but wants the absolute fastest time. Which should it use?",
    "options": ["DFS", "BFS", "Hill Climbing", "Genetic Algorithm"],
    correct: 1,
    "explanation": "BFS is optimal for unit costs and finds the shortest path level-by-level."
  },
  {
    "question": "In the 'History of AI', what was the 'Logic Theorist'?",
    "options": ["A human philosopher.", "The first AI program designed to mimic human problem-solving, created in 1955.", "A modern neural network.", "A type of robot."],
    correct: 1,
    "explanation": "Created by Newell, Shaw, and Simon, it is considered the first AI program."
  },
  {
    "question": "What is 'Machine Learning' essentially?",
    "options": ["A way to build robots.", "A field of study that gives computers the ability to learn without being explicitly programmed for every task.", "A type of logic gate.", "A search algorithm like A*."],
    correct: 1,
    "explanation": "Arthur Samuel defined ML as the field where computers learn from data and experience."
  },
  {
    "question": "Which of these is a 'Social Media' impact of AI?",
    "options": ["Manual post approval.", "Algorithmic feed ranking.", "Physical mail delivery.", "Using a rotary phone."],
    correct: 1,
    "explanation": "AI determines the order of posts in your feed to maximize your engagement."
  },
  {
    "question": "In a Genetic Algorithm, 'Diversity' is lost when:",
    "options": ["All individuals in the population become very similar.", "The population size increases.", "Mutation is turned on.", "A* search is used."],
    correct: 0,
    "explanation": "Loss of diversity lead to stagnation where the GA can't find better solutions."
  },
  {
    "question": "What is 'Backpropagation'?",
    "options": ["A way to move backward in a graph.", "An algorithm used in neural networks to update weights based on the error of the output.", "A type of crossover.", "A logic quantifier."],
    correct: 1,
    "explanation": "Backpropagation is the fundamental method for training deep neural networks."
  },
  {
    "question": "Scenario: You are converting the logical statement 'It is not the case that P is true' into a symbol. You use:",
    "options": ["P ∧ Q", "¬P", "P ∨ Q", "P → Q"],
    correct: 1,
    "explanation": "The '¬' (tilde or hook) symbol represents negation (NOT)."
  },
  {
    "question": "What is the primary advantage of 'Iterative Deepening Search' (IDS)?",
    "options": ["It is faster than BFS.", "It is faster than DFS.", "It combines the memory efficiency of DFS with the optimality of BFS.", "It uses heuristics."],
    correct: 2,
    "explanation": "IDS uses $O(bd)$ space like DFS but finds the shallowest goal like BFS."
  },
  {
    "question": "In Deep Learning, what is a 'Hidden Layer'?",
    "options": ["A layer that the programmer cannot see.", "A layer of neurons between the input and output layers that performs feature transformation.", "A layer used for storing passwords.", "The backup layer of the network."],
    correct: 1,
    "explanation": "Hidden layers are where the 'deep' learning happens, extracting increasingly abstract features."
  },
  {
    "question": "Which AI component is used to convert an image of handwritten text into digital text?",
    "options": ["NLP", "Optical Character Recognition (OCR - a subset of Computer Vision)", "Genetic Algorithms", "Propositional Logic"],
    correct: 1,
    "explanation": "OCR involves recognizing characters within images."
  },
  {
    "question": "In a Genetic Algorithm, 'K-point crossover' is a generalization of:",
    "options": ["Mutation", "Single-point crossover", "Selection", "Elitism"],
    correct: 1,
    "explanation": "Single-point crossover is simply K-point crossover where $K=1$."
  },
  {
    "question": "What is 'Big Data's' relationship with AI?",
    "options": ["They are the same thing.", "Big Data provides the large amounts of information needed for modern AI models to learn effectively.", "AI is used to delete Big Data.", "There is no relationship."],
    correct: 1,
    "explanation": "Data is the 'fuel' for AI, especially for Deep Learning models."
  },
  {
    "question": "Scenario: An AI agent is playing Tic-Tac-Toe. It explores all possible moves to ensure it never loses. This environment is:",
    "options": ["Stochastic", "Discrete, Deterministic, and Fully Observable", "Infinite", "Partially Observable"],
    correct: 1,
    "explanation": "The board is clear (Fully Observable), the rules are fixed (Deterministic), and the moves are distinct (Discrete)."
  },
  {
    "question": "In FOL, '∀x (Person(x) → Mortal(x))' means:",
    "options": ["Some people are mortal.", "All people are mortal.", "Only Socrates is mortal.", "Nobody is mortal."],
    correct: 1,
    "explanation": "The universal quantifier and implication translate to 'For all x, if x is a person, then x is mortal'."
  },
  {
    "question": "What is a 'Local Optimum' in optimization?",
    "options": ["The best solution in the world.", "A solution that is better than all its neighbors but not necessarily the best overall.", "The starting point.", "A solution with 0 fitness."],
    correct: 1,
    "explanation": "Local optima are 'trap' solutions that algorithms like Hill Climbing get stuck in."
  },
  {
    "question": "Which search algorithm uses the evaluation function $f(n) = g(n)$?",
    "options": ["A*", "Greedy Search", "Uniform Cost Search", "BFS"],
    correct: 2,
    "explanation": "UCS expands nodes based on the cost from the start node ($g$)."
  },
  {
    "question": "What is 'NLP's' role in 'Virtual Assistants'?",
    "options": ["Calculating the battery life.", "Parsing the user's intent from their speech or text.", "Designing the hardware of the speaker.", "Updating the firmware."],
    correct: 1,
    "explanation": "Intent recognition is a key NLP task for assistants."
  },
  {
    "question": "In a Genetic Algorithm, 'Inversion' affects the:",
    "options": ["Fitness function.", "Relative order of genes on the chromosome.", "Population size.", "Mutation rate."],
    correct: 1,
    "explanation": "It reverses a segment of the chromosome, changing the gene positions."
  },
  {
    "question": "Which of the following is a 'Search' based AI application?",
    "options": ["Image classification", "Solving a Rubik's Cube", "Spam detection", "Language translation"],
    correct: 1,
    "explanation": "Solving a puzzle like a Rubik's cube is typically framed as searching for a path from a scrambled state to the goal state."
  },
  {
    "question": "In FOL, the 'Universal' quantifier is represented by which symbol?",
    "options": ["U", "∀", "E", "∃"],
    correct: 1,
    "explanation": "∀ stands for 'Universal'."
  },
  {
    "question": "Scenario: You are designing an AI for a drone. You need it to react 'instantly' to a gust of wind to stay level. This is best handled by a:",
    "options": ["Goal-based Agent", "Simple Reflex Agent", "Utility-based Agent", "Learning Agent"],
    correct: 1,
    "explanation": "Reflex agents are best for immediate condition-action responses (If gust, Then adjust)."
  },
  {
    "question": "What is 'Deep Learning' particularly good at?",
    "options": ["Handling small, clean datasets.", "Learning features automatically from unstructured data like images and audio.", "Solving simple logic puzzles.", "Calculating high-precision math."],
    correct: 1,
    "explanation": "DL excels at finding complex patterns in raw, unstructured data."
  },
  {
    "question": "Which of these is a disadvantage of AI in daily life?",
    "options": ["24/7 availability of services", "Loss of human jobs due to automation", "Increased safety in transportation", "Personalized medicine"],
    correct: 1,
    "explanation": "Job displacement is a significant socio-economic challenge posed by AI."
  },
  {
    "question": "What is 'A*' search's main 'Complexity' issue?",
    "options": ["It is too fast.", "It can use a lot of memory because it stores all generated nodes.", "It is never optimal.", "It only works on small graphs."],
    correct: 1,
    "explanation": "Memory is often the bottleneck for A* in large search spaces."
  },
  {
    "question": "In Propositional Logic, what does the '¬' symbol mean?",
    "options": ["AND", "OR", "NOT", "IMPLIES"],
    correct: 2,
    "explanation": "¬ is the negation operator."
  },
  {
    "question": "Which algorithm is technically a 'Stochastic' Hill Climbing variant?",
    "options": ["A*", "Simulated Annealing", "BFS", "DFS"],
    correct: 1,
    "explanation": "Simulated Annealing is stochastic because it uses randomness to decide whether to accept moves."
  },
  {
    "question": "What is 'NLP's' role in 'Machine Translation'?",
    "options": ["Taking pictures of text.", "Analyzing the syntax and semantics of one language to produce the equivalent in another.", "Storing the dictionary in memory.", "Speeding up the internet connection."],
    correct: 1,
    "explanation": "Semantics (meaning) and syntax (structure) are core NLP concerns."
  },
  {
    "question": "In a Genetic Algorithm, 'Roulette Wheel' selection is 'Biased' towards:",
    "options": ["Older individuals.", "Fitter individuals.", "Newer individuals.", "Smaller individuals."],
    correct: 1,
    "explanation": "The 'bias' is the fitness-proportionate chance of being selected."
  },
  {
    "question": "Scenario: An AI identifies a person in a photo. This is an application of:",
    "options": ["NLP", "Computer Vision", "Logic Programming", "Expert Systems"],
    correct: 1,
    "explanation": "Face detection/recognition is a Computer Vision task."
  },
  {
    "question": "In FOL, 'Universal' quantifiers often use which logical operator to connect properties?",
    "options": ["∧ (Conjunction)", "→ (Implication)", "∨ (Disjunction)", "¬ (Negation)"],
    correct: 1,
    "explanation": "Universal statements usually take the form 'For all x, if P(x) then Q(x)'."
  },
  {
    "question": "What is 'Strong AI'?",
    "options": ["AI that can lift heavy weights.", "AI with consciousness and general intelligence equal to a human.", "AI that is very fast at math.", "AI used in social media."],
    correct: 1,
    "explanation": "Strong AI (or AGI) is a theoretical AI that can solve any intellectual task a human can."
  },
  {
    "question": "In search, what is the 'Depth' of a node?",
    "options": ["The number of children it has.", "The number of edges from the root to that node.", "The total number of nodes in the tree.", "The value of its heuristic."],
    correct: 1,
    "explanation": "Depth measures how far down the tree the node is located."
  },
  {
    "question": "Which search algorithm is used when memory is very limited but the tree is very deep?",
    "options": ["BFS", "DFS", "A*", "Bidirectional Search"],
    correct: 1,
    "explanation": "DFS only needs to store the current path, making it extremely memory-efficient."
  },
  {
    "question": "What is 'ML''s primary use in Social Media 'Recommendation Systems'?",
    "options": ["To delete the user's account.", "To predict which content will keep the user engaged the longest.", "To format the text of the posts.", "To monitor the user's hardware."],
    correct: 1,
    "explanation": "Engagement prediction is the core goal of most feed algorithms."
  }
,
  {
    "question": "In Propositional Logic, how many rows are required in a truth table for a statement containing 'n' unique propositional variables?",
    "options": ["n^2", "2n", "2^n", "n!"],
    correct: 2,
    "explanation": "Each variable has 2 possible truth values (T/F). For 'n' variables, there are 2 * 2 * ... * 2 (n times) combinations, which is 2^n."
  },
  {
    "question": "Scenario: You are designing a search agent for a game with a branching factor of 4 and a depth limit of 10. You need to ensure the agent finds a solution without exceeding 50 KB of memory. Which search should you use?",
    "options": ["Breadth-First Search (BFS)", "Uniform Cost Search (UCS)", "Depth-First Search (DFS)", "A* Search"],
    correct: 2,
    "explanation": "DFS has linear space complexity O(bm), making it the only viable option for strict memory constraints in deep trees."
  },
  {
    "question": "Which of the following is a fundamental limitation of First-Order Logic (FOL) compared to Higher-Order Logic?",
    "options": ["It cannot use the 'AND' operator.", "It cannot quantify over predicates or functions (e.g., you can't say 'For all properties P').", "It cannot represent human names.", "It is only compatible with binary numbers."],
    correct: 1,
    "explanation": "FOL allows quantification over objects but not over the relations (predicates) themselves. That requires Second-Order or Higher-Order logic."
  },
  {
    "question": "What is the truth value of the FOL statement '∃x (x > 10 ∧ x < 5)' where the domain is the set of Integers?",
    "options": ["True", "False", "Indeterminate", "Satisfiable but not valid"],
    correct: 1,
    "explanation": "There is no integer that is simultaneously greater than 10 and less than 5; therefore, the existential claim is false."
  },
  {
    "question": "In the context of 'AI Fundamentals', what is a 'Dynamic' environment?",
    "options": ["One that is always moving.", "One that changes while the agent is deliberating.", "One that has only one agent.", "One where all outcomes are random."],
    correct: 1,
    "explanation": "A dynamic environment (like taxi driving) means the world doesn't wait for the agent to finish its calculations."
  },
  {
    "question": "Which logical operator is 'Commutative', meaning (P ∧ Q) is the same as (Q ∧ P)?",
    "options": ["Conjunction (∧)", "Implication (→)", "Subtraction", "None of the above"],
    correct: 0,
    "explanation": "Both Conjunction (AND) and Disjunction (OR) are commutative. Implication is NOT (P → Q is not the same as Q → P)."
  },
  {
    "question": "What is the primary difference between 'Simple Hill Climbing' and 'Stochastic Hill Climbing'?",
    "options": ["Simple HC uses memory; Stochastic does not.", "Simple HC picks the first better neighbor; Stochastic picks at random from all upward moves.", "Simple HC is faster.", "Stochastic HC is always optimal."],
    correct: 1,
    "explanation": "Stochastic Hill Climbing introduces randomness by picking among the available uphill moves rather than just the first one it finds."
  },
  {
    "question": "Scenario: An AI must solve a problem where it needs to reach a goal state, but it also needs to ensure the path taken is the 'cheapest'. Heuristics are unavailable. Which algorithm is best?",
    "options": ["DFS", "Uniform Cost Search (UCS)", "Greedy Best-First Search", "Bidirectional BFS"],
    correct: 1,
    "explanation": "UCS is optimal for path cost and does not require a heuristic (uninformed)."
  },
  {
    "question": "In Propositional Logic, the statement ¬(P ∨ Q) is logically equivalent to which of the following (De Morgan's Law)?",
    "options": ["¬P ∨ ¬Q", "¬P ∧ ¬Q", "P ∧ Q", "¬P → ¬Q"],
    correct: 1,
    "explanation": "De Morgan's Law states that the negation of a disjunction is the conjunction of the negations."
  },
  {
    "question": "What does the term 'Completeness' mean in the context of First-Order Logic?",
    "options": ["The logic can represent any sentence.", "If a sentence is logically valid, there exists a finite proof for it.", "The logic is very fast to compute.", "The logic only uses 0 and 1."],
    correct: 1,
    "explanation": "Completeness (Godel's Completeness Theorem) ensures that all valid formulas in FOL are provable."
  },
  {
    "question": "Which search algorithm is typically used in 'AO*' search scenarios?",
    "options": ["Route finding between cities", "Problem decomposition (e.g., breaking a large task into sub-tasks)", "Image classification", "Social media feed ranking"],
    correct: 1,
    "explanation": "AO* is used for AND-OR graphs, which are ideal for problems that can be split into mandatory parts."
  },
  {
    "question": "In a Genetic Algorithm, if we use a 'Diversity Measure' and find it is near zero, what is the most likely outcome?",
    "options": ["The algorithm will find the global optimum soon.", "The population has converged, likely at a local optimum.", "Mutation is working perfectly.", "The fitness function is too complex."],
    correct: 1,
    "explanation": "Zero diversity means all individuals are identical; the population can no longer evolve through crossover."
  },
  {
    "question": "Which quantifier is implied in the statement 'Birds fly' if translated to FOL as 'All birds fly'?",
    "options": ["Existential (∃)", "Universal (∀)", "Negation (¬)", "Conjunction (∧)"],
    correct: 1,
    "explanation": "General statements about a category usually imply 'all' members of that category."
  },
  {
    "question": "In Propositional Logic numerical questions, what is the truth value of (1 ∨ 0) ∧ (0 ∨ 0)?",
    "options": ["1 (True)", "0 (False)", "2", "Indeterminate"],
    correct: 1,
    "explanation": "(1 ∨ 0) is 1. (0 ∨ 0) is 0. 1 ∧ 0 results in 0."
  },
  {
    "question": "What is 'Semi-decidability' in First-Order Logic?",
    "options": ["The algorithm only works half the time.", "If a statement is true, a proof will be found; if false, the algorithm might never stop.", "The logic is only for semi-conductors.", "The logic uses only 1.5 bits."],
    correct: 1,
    "explanation": "FOL is semi-decidable because there is no general algorithm to determine if any given formula is false (unstatisfiable) in all cases."
  },
  {
    "question": "Scenario: You are trying to find the best configuration for a circuit. You have a 'fitness' function but no path. You want an algorithm that can 'restart' if it gets stuck. Which is best?",
    "options": ["A*", "Random-Restart Hill Climbing", "Breadth-First Search", "Uniform Cost Search"],
    correct: 1,
    "explanation": "Random-restart hill climbing is a series of hill climbs from random starting points, which is effective for complex landscapes."
  },
  {
    "question": "In the 'Numerical Base' of logic, what is the 'XOR' result of 1010 and 1100?",
    "options": ["1110", "0110", "1000", "0010"],
    correct: 1,
    "explanation": "XOR (Exclusive OR) is 1 if the bits are different. (1^1=0, 0^1=1, 1^0=1, 0^0=0). Result: 0110."
  },
  {
    "question": "Which of the following is a limitation of 'Simple Reflex Agents'?",
    "options": ["They are too slow.", "They cannot handle partially observable environments because they don't have memory.", "They use too much memory.", "They are only used in deep learning."],
    correct: 1,
    "explanation": "Without a 'model' or 'history', reflex agents only know what the sensors see at this exact moment."
  },
  {
    "question": "What is the 'Completeness' status of A* search when the branching factor is infinite?",
    "options": ["Complete", "Incomplete", "Optimal", "None of the above"],
    correct: 1,
    "explanation": "A* is only complete if the branching factor is finite and every step cost is greater than a small positive constant."
  },
  {
    "question": "In FOL, the statement '¬∃x P(x)' is equivalent to:",
    "options": ["∃x ¬P(x)", "∀x ¬P(x)", "∀x P(x)", "¬∀x P(x)"],
    correct: 1,
    "explanation": "'It is not the case that there exists an x such that P(x)' is logically the same as 'For all x, P(x) is false'."
  },
  {
    "question": "Which search algorithm uses a 'heuristic' but is NOT guaranteed to find the optimal path?",
    "options": ["A*", "Greedy Best-First Search", "Uniform Cost Search", "BFS"],
    correct: 1,
    "explanation": "Greedy search only looks at the estimated remaining cost, which can lead it down a sub-optimal path."
  },
  {
    "question": "What is the 'PEAS' sensor for a 'Spam Filter' agent?",
    "options": ["The user's delete button.", "The arrival of an email/digital text.", "Moving the email to a folder.", "The SMTP server."],
    correct: 1,
    "explanation": "The 'percept' for a spam filter is the content and metadata of the incoming email."
  },
  {
    "question": "In GAs, what is the 'Inversion' operator specifically meant to preserve or find?",
    "options": ["New gene values.", "Better 'building blocks' or gene orderings.", "Larger populations.", "The fitness function."],
    correct: 1,
    "explanation": "Inversion changes the linkage between genes, which can help evolution find more robust combinations."
  },
  {
    "question": "Scenario: You need an algorithm for a real-time system that must give an correct within 5 seconds. If it can't find the best, it should return the best it found so far. This is an:",
    "options": ["Optimal algorithm", "Anytime algorithm", "Informed algorithm", "Reflex algorithm"],
    correct: 1,
    "explanation": "Anytime algorithms (like some versions of Beam Search or IDA*) are designed to provide a result whose quality improves with more time."
  },
  {
    "question": "In Propositional Logic, the operator 'P → Q' is False only when:",
    "options": ["P is False, Q is True", "P is True, Q is False", "Both are False", "Both are True"],
    correct: 1,
    "explanation": "An implication is only 'broken' (false) if the promise (P) is kept but the result (Q) is not delivered."
  },
  {
    "question": "Which search algorithm is technically a DFS that performs better in terms of optimality by reusing nodes from a previous search limit?",
    "options": ["BFS", "Uniform Cost Search", "Iterative Deepening Search", "Greedy Search"],
    correct: 2,
    "explanation": "IDS is a hybrid that provides the benefits of BFS using the mechanism of DFS."
  },
  {
    "question": "What is a 'Well-Formed Formula' (WFF) in logic?",
    "options": ["A formula that is true.", "A string of symbols that follows the syntax rules of the logic system.", "A formula used in deep learning.", "A mathematical equation with an equal sign."],
    correct: 1,
    "explanation": "WFF refers to the 'grammar' of the logic; it doesn't have to be true, it just has to be 'legally' written."
  },
  {
    "question": "Scenario: An AI must find its way out of a dark room. It can only feel the walls directly around it. This environment is:",
    "options": ["Fully Observable", "Partially Observable", "Discrete", "Deterministic"],
    correct: 1,
    "explanation": "Because the agent cannot 'see' the whole room at once, only its immediate surroundings, it is partially observable."
  },
  {
    "question": "In Genetic Algorithms, 'Elitism' is a diversity-reducing operator. Why is it used?",
    "options": ["To speed up the random walk.", "To ensure the best-performing solution is never lost during crossover/mutation.", "To make the chromosomes longer.", "To delete old data."],
    correct: 1,
    "explanation": "Without elitism, the single 'best' solution in a generation might be destroyed by mutation and never found again."
  },
  {
    "question": "In FOL, 'Universal instantiation' allows you to:",
    "options": ["Create a new variable.", "Replace a universal quantifier with a specific object from the domain.", "Delete a quantifier.", "Convert FOL to Propositional Logic."],
    correct: 1,
    "explanation": "If 'All humans are mortal' (∀x), you can instantiate it to say 'Socrates is mortal'."
  },
  {
    "question": "Which search algorithm is optimal if step costs are non-negative?",
    "options": ["DFS", "Uniform Cost Search", "Greedy Search", "Simulated Annealing"],
    correct: 1,
    "explanation": "UCS is guaranteed to find the cheapest path if costs are zero or positive."
  },
  {
    "question": "What is the 'Heuristic' for the A* algorithm in a 2D grid where moves are only up/down/left/right?",
    "options": ["Euclidean Distance", "Manhattan Distance", "Constant 1", "Depth of the node"],
    correct: 1,
    "explanation": "Manhattan distance is the standard admissible heuristic for a 4-neighbor grid."
  },
  {
    "question": "In Propositional Logic, what is the 'Dual' of the expression (P ∧ Q)?",
    "options": ["(¬P ∧ ¬Q)", "(P ∨ Q)", "(¬P ∨ ¬Q)", "(Q ∧ P)"],
    correct: 1,
    "explanation": "The dual of a logical expression is found by swapping ∧ with ∨ and T with F."
  },
  {
    "question": "Which of these is a disadvantage of First-Order Logic?",
    "options": ["It is too simple.", "It cannot handle variables.", "It is computationally expensive and potentially undecidable for complex proofs.", "It doesn't support quantifiers."],
    correct: 2,
    "explanation": "The expressive power of FOL comes at the cost of high computational complexity."
  },
  {
    "question": "In GAs, 'Roulette Wheel' selection is often replaced by 'Tournament Selection' because:",
    "options": ["Tournament selection is random.", "Tournament selection handles negative fitness and is more robust against 'Super-individuals' dominating.", "Tournament selection doesn't use fitness.", "Tournament selection is slower."],
    correct: 1,
    "explanation": "Roulette wheel can fail if one individual is much fitter than the rest, causing the GA to get stuck in that local area (premature convergence)."
  },
  {
    "question": "Scenario: An AI bot is learning to play a video game. Every time it gets a 'Game Over', it analyzes the actions leading to it. This is a:",
    "options": ["Reflex Agent", "Learning Agent", "Goal-based Agent", "Logic Agent"],
    correct: 1,
    "explanation": "Learning agents have a 'critic' component that provides feedback on performance to help the agent improve over time."
  },
  {
    "question": "What is the result of the 'Implication' P → Q if P is 0 and Q is 0?",
    "options": ["0", "1", "Indeterminate", "-1"],
    correct: 1,
    "explanation": "In logic, False implying False is considered a True statement (vacuous truth)."
  },
  {
    "question": "Which search algorithm uses the evaluation function f(n) = g(n) + h(n)?",
    "options": ["Greedy Best-First Search", "A*", "UCS", "Beam Search"],
    correct: 1,
    "explanation": "A* is the classic informed search that balances cost already paid and estimated cost to come."
  },
  {
    "question": "In the 'History of AI', the 'Expert Systems' boom in the 1980s was primarily focused on:",
    "options": ["Artificial Neural Networks", "Knowledge-based systems using 'IF-THEN' rules", "Social media algorithms", "Robotics and hardware"],
    correct: 1,
    "explanation": "Expert systems like MYCIN were designed to store human expertise in specific domains through hundreds of logical rules."
  },
  {
    "question": "A 'Rational Agent' behaves optimally based on which four factors?",
    "options": ["Percepts, Actions, Goals, Memory", "Performance measure, Prior knowledge, Environment percepts, Available actions", "Speed, Accuracy, Memory, CPU", "Sensors, Actuators, Logic, Search"],
    correct: 1,
    "explanation": "Rationality is tied to what the agent has seen (percepts), what it knows (prior knowledge), what it can do (actions), and how it is judged (performance measure)."
  },
  {
    "question": "What is the 'numerical' base of a truth table with 3 variables?",
    "options": ["Base 2 (Binary)", "Base 3 (Ternary)", "Base 8 (Octal)", "Base 10 (Decimal)"],
    correct: 0,
    "explanation": "Truth tables represent binary states (T/F or 1/0)."
  },
  {
    "question": "In a Genetic Algorithm, the process of 'Reproduction' ensures that:",
    "options": ["The population size doubles.", "Good traits are likely to be passed to the next generation.", "Every individual becomes identical.", "Mutation never occurs."],
    correct: 1,
    "explanation": "Selection and reproduction allow the 'survival of the fittest' principle to work."
  },
  {
    "question": "What is a 'Tautology'?",
    "options": ["A statement that is always false.", "A statement that is true in every possible interpretation of its variables.", "A statement used only in FOL.", "A way to calculate the depth of a tree."],
    correct: 1,
    "explanation": "An example is (P ∨ ¬P), which is true whether P is true or false."
  },
  {
    "question": "Scenario: You are solving the 'N-Queens' problem. You place all queens on the board and move them to minimize the number of conflicts. This is an example of:",
    "options": ["Path search", "Local Search / Iterative Improvement", "Uninformed Search", "Propositional Logic"],
    correct: 1,
    "explanation": "Local search starts with a 'complete' state (all queens on board) and iteratively improves it."
  },
  {
    "question": "Which search algorithm is optimal and complete if step costs are equal and the branching factor is finite?",
    "options": ["DFS", "BFS", "Greedy Search", "Hill Climbing"],
    correct: 1,
    "explanation": "BFS is the standard for finding shallowest goals in unit-cost trees."
  },
  {
    "question": "What is 'Unification' in First-Order Logic?",
    "options": ["Combining two different logic systems.", "An algorithm for finding substitutions that make two different logical expressions identical.", "Deleting quantifiers.", "Solving truth tables."],
    correct: 1,
    "explanation": "Unification is a key step in FOL inference (like Resolution) to align variables."
  },
  {
    "question": "Which component of AI allows a computer to understand the sentiment of a movie review?",
    "options": ["Computer Vision", "Natural Language Processing (NLP)", "Genetic Algorithms", "Propositional Logic"],
    correct: 1,
    "explanation": "NLP analyzes text data to extract meaning and tone."
  },
  {
    "question": "In GAs, 'Mutation' prevents the algorithm from:",
    "options": ["Being too fast.", "Getting stuck in a local optimum by introducing new genetic material.", "Finding the goal.", "Using too much memory."],
    correct: 1,
    "explanation": "Mutation explores the search space beyond what the current population can provide through crossover alone."
  },
  {
    "question": "What is the 'Completeness' of Depth-First Search in an infinite state space?",
    "options": ["Complete", "Incomplete", "Optimal", "None of the above"],
    correct: 1,
    "explanation": "DFS may follow an infinite path and never backtrack to find a solution that exists on a different branch."
  },
  {
    "question": "Scenario: A social media AI 'detects' an image containing violence and hides it. This detection is an application of:",
    "options": ["NLP", "Computer Vision", "First-Order Logic", "Simulated Annealing"],
    correct: 1,
    "explanation": "Identifying content within images/videos is a Computer Vision task."
  },
  {
    "question": "In Propositional Logic, (P ∧ (P → Q)) → Q is an example of which valid rule of inference?",
    "options": ["Modus Ponens", "Modus Tollens", "Syllogism", "Negation"],
    correct: 0,
    "explanation": "Modus Ponens says if P is true and P implies Q, then Q must be true."
  },
  {
    "question": "Which search algorithm is technically a variant of Best-First Search that uses a limited amount of memory?",
    "options": ["UCS", "Beam Search", "BFS", "DFS"],
    correct: 1,
    "explanation": "Beam Search keeps only 'k' best nodes, making it memory-efficient but potentially sub-optimal."
  },
  {
    "question": "What is the 'numerical' result of (¬P) when P = 1?",
    "options": ["0", "1", "-1", "null"],
    correct: 0,
    "explanation": "Negation flips the bit value; NOT 1 is 0."
  },
  {
    "question": "In First-Order Logic, '∃x' is called the:",
    "options": ["Universal Quantifier", "Existential Quantifier", "Negation", "Implication"],
    correct: 1,
    "explanation": "∃ represents the existence of at least one individual satisfying the property."
  },
  {
    "question": "What is 'Hill Climbing's' primary weakness when the landscape has a flat top?",
    "options": ["Ridges", "Plateau", "Local Minimum", "High Temperature"],
    correct: 1,
    "explanation": "On a plateau, every move has the same value, so the algorithm has no 'direction' and wanders aimlessly."
  },
  {
    "question": "Scenario: An AI agent needs to choose between two actions. Action A has a 100% chance of a $10 reward. Action B has a 50% chance of a $50 reward. A 'Utility-based' agent will pick:",
    "options": ["Action A", "Action B", "Neither", "Both"],
    correct: 1,
    "explanation": "Utility of A = $10. Utility of B = 0.5 * $50 = $25. A rational agent maximizes expected utility."
  },
  {
    "question": "In GAs, 'K-point crossover' with a very large K (approaching the length of the string) is similar to:",
    "options": ["Selection", "Uniform Crossover", "Mutation", "Elitism"],
    correct: 1,
    "explanation": "Uniform crossover treats every gene as a potential crossover point."
  },
  {
    "question": "Which logical system is 'decidable' (meaning a proof or counter-proof can always be found in finite time)?",
    "options": ["Propositional Logic", "First-Order Logic", "Second-Order Logic", "None"],
    correct: 0,
    "explanation": "Propositional logic is decidable because truth tables provide a guaranteed finite proof method."
  },
  {
    "question": "What is the 'Effectiveness' of 'Bidirectional Search' in terms of time complexity?",
    "options": ["O(b^d)", "O(b^(d/2))", "O(2b^d)", "O(d^b)"],
    correct: 1,
    "explanation": "By searching from both ends, you only need to go half the distance from each side."
  },
  {
    "question": "Which search algorithm mimics the 'Natural Selection' process of biology?",
    "options": ["A*", "Genetic Algorithm", "Simulated Annealing", "Hill Climbing"],
    correct: 1,
    "explanation": "GAs evolve a population of solutions over generations."
  },
  {
    "question": "In the context of 'AI Fundamentals', what does 'Fully Observable' mean?",
    "options": ["The agent can see everything in the universe.", "The agent's sensors give it access to the complete state of the environment at each point in time.", "The environment is recorded on video.", "The agent has a clear camera."],
    correct: 1,
    "explanation": "If an agent doesn't need to 'guess' about the hidden state of the world, it is fully observable."
  },
  {
    "question": "What is the result of 'P ∨ ¬P'?",
    "options": ["0", "1 (Tautology)", "Depends on P", "Indeterminate"],
    correct: 1,
    "explanation": "This statement ('P or not P') is always true, covering all possibilities."
  },
  {
    "question": "Scenario: An AI agent is playing a game of 'Hide and Seek'. The hider is behind a curtain. This is a:",
    "options": ["Fully Observable Environment", "Partially Observable Environment", "Static Environment", "Discrete Environment"],
    correct: 1,
    "explanation": "Because the seeker cannot see through the curtain, the state is partially hidden."
  },
  {
    "question": "In GAs, 'Elitism' ensures that:",
    "options": ["Diversity is maximized.", "The best solution in generation N is at least as good as the best in N-1.", "Mutation is 100%.", "All chromosomes are inverted."],
    correct: 1,
    "explanation": "It guarantees that progress is monotonic; you never 'lose' the best solution you've found."
  },
  {
    "question": "Which search algorithm is best for a weighted graph with a good heuristic but very little memory?",
    "options": ["A*", "Uniform Cost Search", "IDA*", "BFS"],
    correct: 2,
    "explanation": "IDA* (Iterative Deepening A*) provides the optimality of A* while using the memory-saving approach of DFS."
  },
  {
    "question": "What is the 'Universal' quantifier symbol used in FOL?",
    "options": ["∀", "∃", "!", "?"],
    correct: 0,
    "explanation": "The symbol ∀ is the Universal Quantifier."
  },
  {
    "question": "In Propositional Logic, (P ∧ Q) is True only if:",
    "options": ["At least one is True", "Both are True", "Both are False", "P is True and Q is False"],
    correct: 1,
    "explanation": "Conjunction (AND) requires both components to be true."
  },
  {
    "question": "Which algorithm uses a 'Temperature' parameter?",
    "options": ["Genetic Algorithm", "Simulated Annealing", "A*", "Hill Climbing"],
    correct: 1,
    "explanation": "The temperature controls the likelihood of accepting worse moves in Simulated Annealing."
  },
  {
    "question": "Scenario: An AI is moderating a social media comment section for hate speech. This task primarily uses:",
    "options": ["Computer Vision", "Natural Language Processing (NLP)", "Genetic Algorithms", "A* Search"],
    correct: 1,
    "explanation": "Text analysis is the domain of NLP."
  },
  {
    "question": "What is the 'Inversion' operator's effect on a binary string '10110' if the inversion happens between the 2nd and 4th bits?",
    "options": ["11100", "11100", "11010", "01101"],
    correct: 2,
    "explanation": "Original: 1 [0 1 1] 0. Inverted segment: [1 1 0]. New: 1 1 1 0 0."
  },
  {
    "question": "In FOL, '∀x ∃y (Loves(x, y))' means:",
    "options": ["Everyone loves themselves.", "Everyone loves someone.", "Someone is loved by everyone.", "Nobody loves anyone."],
    correct: 1,
    "explanation": "For every x, there is at least one y that x loves."
  },
  {
    "question": "Which search algorithm expands the node with the minimum $f(n) = g(n) + h(n)$?",
    "options": ["A*", "Greedy Search", "Uniform Cost Search", "Breadth-First Search"],
    correct: 0,
    "explanation": "A* is defined by this evaluation function."
  },
  {
    "question": "In the context of 'AI Social Media', what is a 'Disadvantage' of recommendation algorithms?",
    "options": ["They help users find content.", "They can lead to the spread of misinformation through 'engagement loops'.", "They are too expensive.", "They only work on mobile phones."],
    correct: 1,
    "explanation": "By prioritizing content that gets 'clicks', algorithms can inadvertently promote sensational but false information."
  },
  {
    "question": "What is the 'History of AI' significance of the 'Dartmouth Conference'?",
    "options": ["It was where the first robot was built.", "It was the event where the term 'Artificial Intelligence' was coined.", "It was where A* search was invented.", "It was the end of the AI winter."],
    correct: 1,
    "explanation": "The 1956 workshop at Dartmouth is considered the official birth of the field."
  },
  {
    "question": "In Propositional Logic, if P is 1 and Q is 1, what is P XOR Q?",
    "options": ["1", "0", "2", "Indeterminate"],
    correct: 1,
    "explanation": "XOR (Exclusive OR) is true only if *exactly one* input is true. If both are true, it is false (0)."
  },
  {
    "question": "What is 'Rationality' focused on?",
    "options": ["Thinking like a human.", "Acting so as to achieve the best outcome.", "Using neural networks.", "The ability to speak."],
    correct: 1,
    "explanation": "In AI, a rational agent is defined by its 'right' actions, not its 'thoughts'."
  },
  {
    "question": "Scenario: You are designing a search for a map where you have a heuristic that *always* underestimates the actual distance. Your search will be:",
    "options": ["Incomplete", "Optimal (if using A*)", "Slow", "Random"],
    correct: 1,
    "explanation": "An underestimating heuristic is 'admissible', which guarantees A* will find the shortest path."
  },
  {
    "question": "Which Genetic Algorithm operator mimics the biological 'survival of the fittest'?",
    "options": ["Crossover", "Selection", "Mutation", "Inversion"],
    correct: 1,
    "explanation": "Selection ensures that higher-performing individuals have more offspring."
  },
  {
    "question": "In FOL, the statement '∀x P(x) ∨ ¬∀x P(x)' is:",
    "options": ["A contradiction", "A tautology", "Satisfiable but not valid", "False"],
    correct: 1,
    "explanation": "Like its propositional counterpart (P ∨ ¬P), this statement is always true."
  },
  {
    "question": "Which search algorithm is a 'Local Search' that maintains 'k' states rather than just one?",
    "options": ["Hill Climbing", "Local Beam Search", "A*", "BFS"],
    correct: 1,
    "explanation": "Local Beam Search is a multi-state version of Hill Climbing."
  },
  {
    "question": "What is 'Natural Language Processing' (NLP) primarily used for?",
    "options": ["Analyzing photos.", "Processing and understanding human language.", "Controlling a robot's legs.", "Calculating math problems."],
    correct: 1,
    "explanation": "NLP deals with speech and text."
  },
  {
    "question": "In Propositional Logic, the 'Disjunction' (P ∨ Q) is False only when:",
    "options": ["P is True, Q is False", "Both are True", "Both are False", "P is False, Q is True"],
    correct: 2,
    "explanation": "OR is true if at least one part is true; it is only false if everything is false."
  },
  {
    "question": "Which AI component is used for 'Self-Driving Cars' to identify traffic lights?",
    "options": ["NLP", "Computer Vision", "Propositional Logic", "Genetic Algorithms"],
    correct: 1,
    "explanation": "Recognizing visual cues like traffic lights is a CV task."
  },
  {
    "question": "What is 'Simulated Annealing' designed to help with in Hill Climbing?",
    "options": ["To speed up the climb.", "To escape local maxima by allowing occasional downward moves.", "To use less memory.", "To find more than one goal."],
    correct: 1,
    "explanation": "The randomness allows it to jump out of sub-optimal 'peaks'."
  },
  {
    "question": "In GAs, what does 'K' in 'K-point crossover' refer to?",
    "options": ["The number of chromosomes.", "The number of cut points used to swap genetic material.", "The number of generations.", "The constant for fitness."],
    correct: 1,
    "explanation": "It defines how many times we 'cut' the parent strings to swap segments."
  },
  {
    "question": "Scenario: You have a search tree with a goal at depth 3. BFS finds it, but DFS finds a different goal at depth 10. Which algorithm is optimal here?",
    "options": ["BFS", "DFS", "Both", "Neither"],
    correct: 0,
    "explanation": "Optimal search finds the shallowest/cheapest goal. BFS is optimal for unit costs; DFS is not."
  },
  {
    "question": "In FOL, 'Existential instantiation' allows you to:",
    "options": ["Say everyone is Socrates.", "Replace an existential quantifier with a new constant symbol (Skolem constant).", "Convert ∃ to ∀.", "Make the formula false."],
    correct: 1,
    "explanation": "If 'Someone is a spy', we can call them 'Agent X' to continue the proof."
  },
  {
    "question": "Which logic operator is represented by '¬'?",
    "options": ["AND", "OR", "NOT", "XOR"],
    correct: 2,
    "explanation": "The ¬ symbol is the negation operator."
  },
  {
    "question": "In AI, 'PEAS' is an acronym for:",
    "options": ["People, Environment, Actuators, Sensors", "Performance, Environment, Actuators, Sensors", "Path, Energy, Actions, Systems", "Programming, Engineering, AI, Science"],
    correct: 1,
    "explanation": "PEAS is used to specify the environment and requirements of an agent."
  },
  {
    "question": "Which of these is a 'Disadvantage' of First-Order Logic?",
    "options": ["It is too expressive.", "It is only for math.", "It can lead to infinite loops in automated reasoning if the proof doesn't exist.", "It cannot handle 'True' and 'False'."],
    correct: 2,
    "explanation": "Because FOL is semi-decidable, an automated prover might never stop if you ask it to prove something that isn't true."
  },
  {
    "question": "What is 'Mutation's' primary operator role?",
    "options": ["To combine parents.", "To introduce random changes to individuals to maintain population diversity.", "To select the best individuals.", "To calculate the final correct."],
    correct: 1,
    "explanation": "Mutation prevents all individuals from becoming identical too quickly."
  },
  {
    "question": "What is 'A*' search's evaluation function?",
    "options": ["f(n) = h(n)", "f(n) = g(n) + h(n)", "f(n) = g(n)", "f(n) = g(n) - h(n)"],
    correct: 1,
    "explanation": "It balances the past cost (g) and future estimate (h)."
  },
  {
    "question": "In Propositional Logic, (P → Q) ∧ (Q → R) implies:",
    "options": ["P ∧ R", "P → R", "P ∨ R", "¬P"],
    correct: 1,
    "explanation": "This is the rule of Hypothetical Syllogism (Chain Rule)."
  },
  {
    "question": "Scenario: You are playing 'Snake' on a phone. The AI controller only sees the area directly in front of the snake's head. This is:",
    "options": ["Fully Observable", "Partially Observable", "Continuous", "Stochastic"],
    correct: 1,
    "explanation": "The agent lacks information about the whole board (tail position, food location far away)."
  },
  {
    "question": "In GAs, what is a 'Chromosome'?",
    "options": ["A piece of hardware.", "The encoded representation of a candidate solution.", "The user's input.", "A logic gate."],
    correct: 1,
    "explanation": "Solutions are typically encoded as strings (chromosomes) of bits or numbers."
  },
  {
    "question": "What is the 'Time Complexity' of BFS?",
    "options": ["O(b^d)", "O(bd)", "O(d^b)", "O(log d)"],
    correct: 0,
    "explanation": "BFS explores all nodes layer by layer, leading to exponential time complexity."
  },
  {
    "question": "Which search algorithm is optimal and complete if step costs are equal?",
    "options": ["DFS", "BFS", "Hill Climbing", "Greedy Search"],
    correct: 1,
    "explanation": "BFS finds the shallowest goal, making it optimal when all steps cost the same."
  },
  {
    "question": "In FOL, 'Universal' statements are often linked by which operator?",
    "options": ["∧", "→", "∨", "¬"],
    correct: 1,
    "explanation": "Universal properties usually follow the 'If it is an X, then it is a Y' pattern."
  },
  {
    "question": "What is 'Machine Learning'?",
    "options": ["Building physical machines.", "Algorithms that allow computers to learn from data without explicit programming.", "A type of logic quantifier.", "A search algorithm."],
    correct: 1,
    "explanation": "ML focuses on data-driven learning and pattern recognition."
  }
,
  {
    "question": "An e-commerce website like Amazon or eBay analyzes millions of user interactions, including clicks, past purchases, and search history, to display a 'Recommended for You' section. The system must predict which item a user is most likely to buy next to maximize engagement. Which AI approach is primarily responsible for this?",
    "options": ["Uninformed Search (BFS)", "Propositional Logic", "Machine Learning (Collaborative Filtering)", "First-Order Logic"],
    correct: 2,
    "explanation": "Recommendation systems use Machine Learning models to find patterns in large datasets to predict user preferences."
  },
  {
    "question": "A logistics company needs to find the shortest delivery route for a truck across a city with 5,000 intersections. They have a GPS map that provides the exact coordinates of every intersection, allowing them to estimate the 'straight-line' distance to the destination at any time. Which algorithm should they use to find the optimal path with the fewest explored nodes?",
    "options": ["Depth-First Search", "A* Search using the Straight-Line Heuristic", "Greedy Best-First Search", "Uniform Cost Search"],
    correct: 1,
    "explanation": "A* is optimal and efficient when an admissible heuristic (like straight-line distance) is available to guide the search."
  },
  {
    "question": "You are developing an AI for a robotic vacuum cleaner. The robot has very limited RAM (only a few kilobytes). The house is vast, but the robot only needs to reach a charging dock located at an unknown depth. The robot doesn't care about the 'shortest' path, only about finding the dock without crashing its memory. Which search is most appropriate?",
    "options": ["Breadth-First Search", "Depth-First Search", "Bidirectional Search", "A* Search"],
    correct: 1,
    "explanation": "DFS is highly memory-efficient ($O(bm)$) compared to BFS, making it suitable for low-memory hardware."
  },
  {
    "question": "A social media platform's security AI is tasked with identifying and removing 'deepfake' videos. The AI must look for subtle pixel-level inconsistencies in facial movements that are too fast for human moderators to see. This high-dimensional visual processing task is best handled by:",
    "options": ["Natural Language Processing", "Convolutional Neural Networks (Deep Learning)", "Propositional Logic", "Simulated Annealing"],
    correct: 1,
    "explanation": "CNNs are the industry standard for processing visual data and identifying patterns within images and videos."
  },
  {
    "question": "An automated stock trading agent operates in a market where prices change every millisecond. The agent must make a 'buy' or 'sell' decision immediately based on the current price it sees on its screen, without waiting to analyze historical trends or future possibilities. What type of agent is this?",
    "options": ["Goal-based Agent", "Simple Reflex Agent", "Model-based Reflex Agent", "Learning Agent"],
    correct: 1,
    "explanation": "Simple reflex agents act based solely on the current percept (the current price), following a fixed condition-action rule."
  },
  {
    "question": "A university is using a Genetic Algorithm to create a clash-free exam timetable. After 100 generations, the algorithm finds that every 'offspring' timetable is identical to its parents, and the fitness score has stopped improving, even though there are still several clashes. What is the most likely problem and solution?",
    "options": ["The population has converged; increase the Mutation Rate.", "The population is too diverse; use Elitism.", "The crossover is too fast; use Propositional Logic.", "The fitness function is too simple; use BFS."],
    correct: 0,
    "explanation": "Stagnation (premature convergence) is solved by increasing mutation to introduce new genetic variations."
  },
  {
    "question": "You are designing a 'Smart Thermostat' that learns your temperature preferences. If you set the temperature to 22°C every morning at 7:00 AM for a week, the AI eventually starts doing it for you. This 'learning from feedback' and adjusting behavior over time classifies it as a:",
    "options": ["Simple Reflex Agent", "Learning Agent", "Utility-based Agent", "Informed Search Agent"],
    correct: 1,
    "explanation": "Learning agents improve their performance over time by monitoring their environment and user feedback."
  },
  {
    "question": "A puzzle-solving AI is attempting to solve a 15-puzzle. It uses a heuristic that counts the 'number of misplaced tiles'. It always picks the move that looks best right now, ignoring how much it cost to get to the current state. This strategy is known as:",
    "options": ["A*", "Uniform Cost Search", "Greedy Best-First Search", "Hill Climbing"],
    correct: 2,
    "explanation": "Greedy Best-First Search expands nodes solely based on the heuristic $h(n)$, which can be fast but is not always optimal."
  },
  {
    "question": "A social media company wants to prevent 'Echo Chambers'. They decide to modify their algorithm so that 10% of the posts in a user's feed are randomly selected from topics the user has never interacted with before. In Genetic Algorithm terms, this 'random injection' of new content is most similar to:",
    "options": ["Crossover", "Mutation", "Selection", "Elitism"],
    correct: 1,
    "explanation": "Mutation introduces random, unexpected changes to maintain diversity and prevent the 'population' of content from becoming too narrow."
  },
  {
    "question": "A search agent is exploring a cave system. It can only see the walls directly touching its sensors. It must build an internal map of where it has already been so it doesn't go in circles. This environment is:",
    "options": ["Fully Observable", "Partially Observable", "Static", "Deterministic"],
    correct: 1,
    "explanation": "Since the agent cannot see the entire cave at once and must maintain an internal state, it is partially observable."
  },
  {
    "question": "In a competitive chess-playing AI, the computer must evaluate millions of possible future board states. However, it only has 3 minutes to make a move. It uses a search that explores deeper and deeper levels, but saves the best move found at each complete depth in case the timer runs out. This is:",
    "options": ["Iterative Deepening Search", "Breadth-First Search", "Simulated Annealing", "Propositional Logic"],
    correct: 0,
    "explanation": "IDS is an 'anytime' algorithm that can return the best result found so far if interrupted."
  },
  {
    "question": "A pharmaceutical company uses AI to discover new drug formulas. The search space is 'bumpy' with many nearly-good formulas (local peaks) but only one perfect one. The algorithm starts by making very large, random changes to formulas and gradually makes smaller, more refined changes as time goes on. This mimics:",
    "options": ["A* Search", "Simulated Annealing", "Breadth-First Search", "Uniform Cost Search"],
    correct: 1,
    "explanation": "Simulated Annealing uses a 'Temperature' schedule to allow big changes early (high T) and refined changes later (low T)."
  },
  {
    "question": "An AI is written to prove the statement: 'If it is raining and I don't have an umbrella, then I will get wet.' The AI uses variables like R (Rain), U (Umbrella), and W (Wet). This represents which logic system?",
    "options": ["First-Order Logic", "Propositional Logic", "Fuzzy Logic", "Binary Search"],
    correct: 1,
    "explanation": "Propositional logic uses atomic statements (propositions) and connects them with logical operators."
  },
  {
    "question": "You are building a navigation app for a desert where there are no roads, only open sand. The agent can move in any direction (360 degrees). The state space in this scenario is:",
    "options": ["Discrete", "Continuous", "Fully Observable", "Finite"],
    correct: 1,
    "explanation": "In a continuous state space, the possible positions and directions are infinite and not broken into distinct 'steps' or 'tiles'."
  },
  {
    "question": "A content moderation AI on a social media site uses Natural Language Processing to detect 'Sarcasm' in user comments. Why is this considered one of the hardest tasks for NLP?",
    "options": ["Because sarcarsm uses too many words.", "Because sarcasm depends heavily on context and hidden intent, not just the literal meaning of words.", "Because sarcasm is only used in images.", "Because sarcarsm is a tautology."],
    correct: 1,
    "explanation": "Sarcasm involves a gap between literal and intended meaning, which requires advanced semantic understanding."
  },
  {
    "question": "An AI is playing a game where it must find a treasure. Every move costs 1 energy point. The AI wants to find the treasure using the least amount of energy. If the AI has no information about where the treasure is, which search is guaranteed to find the 'cheapest' path first?",
    "options": ["Depth-First Search", "Breadth-First Search", "Greedy Search", "Hill Climbing"],
    correct: 1,
    "explanation": "BFS is optimal for unit-cost problems (where every step costs the same)."
  },
  {
    "question": "A social media platform uses an AI to 'auto-tag' your friends in photos. The AI first locates all the boxes where a face might be, and then compares those boxes to a database of known faces. This two-step process is a standard pipeline in:",
    "options": ["NLP", "Computer Vision", "Genetic Algorithms", "A* Search"],
    correct: 1,
    "explanation": "Face detection and recognition are fundamental tasks in Computer Vision."
  },
  {
    "question": "A Genetic Algorithm is used to design a bridge. The 'Fitness Function' measures how much weight the bridge can hold before breaking. If a bridge design 'A' holds 500 tons and design 'B' holds 100 tons, a 'Roulette Wheel' selection would:",
    "options": ["Only pick A.", "Pick A five times more often than B.", "Pick A and B with equal probability.", "Delete B immediately."],
    correct: 1,
    "explanation": "Roulette Wheel selection is fitness-proportionate; higher fitness leads to a proportionally higher chance of selection."
  },
  {
    "question": "In a First-Order Logic system, you have the facts: 'All dogs are loyal' and 'Buddy is a dog'. The AI concludes 'Buddy is loyal'. What is the name of this logical process?",
    "options": ["Crossover", "Inference", "Mutation", "Heuristic Evaluation"],
    correct: 1,
    "explanation": "Inference is the process of deriving new logical conclusions from existing premises."
  },
  {
    "question": "A taxi-driving AI has to deal with traffic lights, pedestrians, and other cars. Because the actions of other drivers are unpredictable and the AI cannot know for sure what will happen next, the environment is:",
    "options": ["Deterministic", "Stochastic", "Static", "Discrete"],
    correct: 1,
    "explanation": "Stochastic environments involve uncertainty and randomness in the outcomes of actions."
  },
  {
    "question": "An AI is designed to solve a 20x20 maze. It uses a heuristic that calculates the 'Manhattan Distance' to the exit. However, the maze has many long, winding dead-ends. The AI keeps getting stuck in a dead-end that is physically close to the exit but has no way through. This is an example of a:",
    "options": ["Global Maximum", "Local Maximum / Trap", "Tautology", "Plateau"],
    correct: 1,
    "explanation": "In search, a local maximum (or local optimum) is a state that looks better than its neighbors according to the heuristic but is not the goal."
  },
  {
    "question": "A credit card company uses AI to detect 'Anomalies' (unusual behavior). The AI looks at 1,000 'normal' transactions and notices that a new transaction is completely different from anything seen before. This is usually handled by:",
    "options": ["Supervised Learning", "Unsupervised Learning (Clustering)", "Propositional Logic", "Breadth-First Search"],
    correct: 1,
    "explanation": "Unsupervised learning is used for anomaly detection because it finds outliers that don't fit into established clusters."
  },
  {
    "question": "Scenario: You are designing a 'Simulated Annealing' algorithm. If you set the 'Initial Temperature' to be extremely low (near zero) from the very start, the algorithm will behave exactly like:",
    "options": ["A* Search", "Simple Hill Climbing", "Breadth-First Search", "Genetic Algorithm"],
    correct: 1,
    "explanation": "At zero temperature, Simulated Annealing never accepts 'worse' moves, making it identical to greedy Hill Climbing."
  },
  {
    "question": "A legal AI is reading through thousands of contracts to find 'hidden risks'. It uses a system that understands that 'Party A' is a 'Company' and 'Company' is a 'Legal Entity'. This ability to represent categories and relationships is a feature of:",
    "options": ["Propositional Logic", "First-Order Logic", "Hill Climbing", "Mutation"],
    correct: 1,
    "explanation": "FOL uses predicates and objects to define relationships and categories, which Propositional Logic cannot do easily."
  },
  {
    "question": "You are playing a game of 'Minesweeper'. You know the numbers on the tiles and must deduce where the bombs are. Since the bombs are fixed and the rules are clear, but you can only see a few tiles at a time, this is a:",
    "options": ["Partially Observable, Deterministic Environment", "Fully Observable, Stochastic Environment", "Partially Observable, Stochastic Environment", "Fully Observable, Deterministic Environment"],
    correct: 0,
    "explanation": "It is deterministic (bomb locations don't change), but partially observable (bombs are hidden until clicked or deduced)."
  },
  {
    "question": "A Genetic Algorithm is evolving a bit-string '11001'. The algorithm applies a 'Mutation' and the string becomes '11101'. Which bit was mutated?",
    "options": ["The 1st bit", "The 3rd bit", "The 5th bit", "None"],
    correct: 1,
    "explanation": "The 3rd bit changed from 0 to 1."
  },
  {
    "question": "A social media AI is accused of 'Bias' because it mostly shows high-paying job ads to male users and low-paying ones to female users. This bias most likely came from:",
    "options": ["A bug in the A* search code.", "The historical training data reflecting past societal inequalities.", "The use of First-Order Logic.", "A high mutation rate in the algorithm."],
    correct: 1,
    "explanation": "AI bias is typically 'learned' from historical data that contains human prejudices."
  },
  {
    "question": "An AI agent must navigate a grid. It uses A* search. It discovers that its heuristic $h(n)$ is always equal to 0. In this specific case, A* search becomes identical to:",
    "options": ["Greedy Best-First Search", "Uniform Cost Search (Dijkstra's)", "Depth-First Search", "Simple Hill Climbing"],
    correct: 1,
    "explanation": "If $h(n)=0$, $f(n) = g(n) + 0$, which is exactly how Uniform Cost Search chooses nodes."
  },
  {
    "question": "A 'Self-Driving Car' must decide whether to stop at a yellow light. It calculates the probability of a crash and the 'value' of arriving on time. This decision-making process is characteristic of a:",
    "options": ["Simple Reflex Agent", "Utility-based Agent", "Model-based Reflex Agent", "Goal-based Agent"],
    correct: 1,
    "explanation": "Utility-based agents weigh different outcomes (utilities) to make the best decision under uncertainty."
  },
  {
    "question": "A search algorithm is looking for a goal in a tree. It finds a solution at depth 4. However, the algorithm doesn't stop and keeps looking until it proves there is no solution at depth 1, 2, or 3. This algorithm is:",
    "options": ["Optimal", "Incomplete", "Stochastic", "Greedy"],
    correct: 0,
    "explanation": "An optimal algorithm ensures it finds the best (shallowest/cheapest) solution."
  },
  {
    "question": "In the 'Numerical Base' of logic, if we treat 'True' as 1 and 'False' as 0, which of the following represents the 'Implication' $1 \rightarrow 0$?",
    "options": ["1", "0", "10", "Undefined"],
    correct: 1,
    "explanation": "An implication is only false (0) when the premise is true (1) and the conclusion is false (0)."
  },
  {
    "question": "A social media app uses AI to automatically generate 'Alternative Text' for images to help blind users. The AI sees a photo of a dog in a park and generates the text: 'A golden retriever playing with a ball on green grass.' This is an application of:",
    "options": ["NLP only", "Computer Vision and Natural Language Generation", "Logic Programming", "A* Search"],
    correct: 1,
    "explanation": "The AI must 'see' (CV) and then 'describe' in human language (NLP/NLG)."
  },
  {
    "question": "An AI is trying to optimize the fuel consumption of a rocket. It uses a Genetic Algorithm with a population of 100 designs. To ensure the 'perfect' design found in Generation 5 isn't lost in Generation 6, the programmer should use:",
    "options": ["High Mutation", "Elitism", "Low Crossover", "Simulated Annealing"],
    correct: 1,
    "explanation": "Elitism preserves the best solutions from one generation to the next."
  },
  {
    "question": "A search algorithm is performing a 'Hill Climbing' search on a landscape that looks like a flat desert with one tiny hole in the middle. The algorithm will likely fail because of a:",
    "options": ["Ridge", "Local Maximum", "Plateau", "Heuristic Overestimation"],
    correct: 2,
    "explanation": "On a flat plateau, Hill Climbing has no gradient to follow and will wander randomly."
  },
  {
    "question": "You are designing a chatbot for a hospital. The chatbot must follow the rule: 'If a patient has a fever AND a cough, then suggest a COVID test.' This rule is an example of:",
    "options": ["A Heuristic", "A Condition-Action Rule", "A Mutation", "A Tautology"],
    correct: 1,
    "explanation": "Condition-action rules are the core of reflex-based and rule-based AI systems."
  },
  {
    "question": "A researcher is comparing Propositional Logic and First-Order Logic for a project. They find that Propositional Logic is 'Decidable'. This means:",
    "options": ["It can make its own decisions.", "There is an algorithm that can always determine if a statement is true or false in finite time.", "It is faster than a human.", "It only works on computers."],
    correct: 1,
    "explanation": "Decidability refers to the existence of a guaranteed computational path to an correct."
  },
  {
    "question": "An AI agent is playing a 'Hidden Information' card game like Poker. The agent must guess the opponent's cards based on their betting patterns. This environment is:",
    "options": ["Fully Observable", "Partially Observable", "Static", "Deterministic"],
    correct: 1,
    "explanation": "Poker is partially observable because you cannot see the other players' cards."
  },
  {
    "question": "A 'Beam Search' with a 'Beam Width' of 1 is equivalent to which algorithm?",
    "options": ["Breadth-First Search", "Greedy Best-First Search", "A* Search", "Depth-First Search"],
    correct: 1,
    "explanation": "If the beam width is 1, the search only keeps the single best neighbor at each step, making it a greedy search."
  },
  {
    "question": "In a Genetic Algorithm, two parents '101010' and '010101' undergo a single-point crossover at the middle. What are the two possible offspring?",
    "options": ["101101 and 010010", "111000 and 000111", "101101 and 010101", "101010 and 010101"],
    correct: 0,
    "explanation": "Split at 3rd bit: [101][010] and [010][101]. Swapping the second halves gives 101101 and 010010."
  },
  {
    "question": "A search algorithm is described as 'Optimal and Complete' even if the search space is infinite, provided the goal is at a finite depth and all step costs are equal. This algorithm is:",
    "options": ["Depth-First Search", "Breadth-First Search", "Hill Climbing", "Simulated Annealing"],
    correct: 1,
    "explanation": "BFS is the standard for completeness and optimality under unit-cost conditions."
  }
,
  {
    question: "A streaming service uses an algorithm to suggest movies based on the similarity between the items themselves (e.g., 'If you liked Toy Story, you might like Finding Nemo'). This is an example of:",
    options: ["Content-Based Filtering", "Collaborative Filtering", "Breadth-First Search", "First-Order Logic"],
    correct: 0,
    explanation: "Content-based filtering recommends items based on features of the items rather than user-to-user similarity."
  },
  {
    question: "An AI playing Tic-Tac-Toe evaluates a move by assuming the opponent will play perfectly to prevent the AI from winning. Which algorithm is it using?",
    options: ["Minimax Search", "A* Search", "Hill Climbing", "Genetic Algorithm"],
    correct: 0,
    explanation: "Minimax is used in zero-sum games to maximize the AI's advantage while assuming the opponent minimizes it."
  },
  {
    question: "You are assigning professors to time slots, ensuring no professor has two classes at once. This is a:",
    options: ["Constraint Satisfaction Problem (CSP)", "Uninformed Search Problem", "Simple Reflex Task", "Natural Language Task"],
    correct: 0,
    explanation: "CSPs involve variables that must satisfy specific rules or constraints to find a valid solution."
  },
  {
    question: "A weather AI uses a model where the probability of rain tomorrow depends only on the weather today. This is the:",
    options: ["Markov Property", "Heuristic Property", "Tautology", "Completeness"],
    correct: 0,
    explanation: "The Markov property states that future states depend only on the current state, not the history."
  },
  {
    question: "A drone's sensor occasionally misidentifies objects due to fog. This environment is:",
    options: ["Deterministic", "Stochastic", "Discrete", "Static"],
    correct: 1,
    explanation: "Stochastic environments involve uncertainty and random outcomes."
  },
  {
    question: "In a neural network for digit recognition, 'Weights' represent:",
    options: ["Connection strength/importance", "Number of hidden neurons", "Processing speed", "Logic gate types"],
    correct: 0,
    explanation: "Weights determine how much influence one neuron has on another during the learning process."
  },
  {
    question: "Which architecture is best for translating a live speech from Japanese to English?",
    options: ["CNN", "RNN or Transformer", "A* Search", "Simple Reflex Agent"],
    correct: 1,
    explanation: "RNNs and Transformers are designed to process sequential data where context and order matter."
  },
  {
    question: "Using 'Backtracking Search' implies the AI is likely solving:",
    options: ["A Constraint Satisfaction Problem", "A Neural Network", "A Genetic Algorithm", "A Reflex action"],
    correct: 0,
    explanation: "Backtracking is the primary algorithm for solving CSPs by exploring and undoing assignments."
  },
  {
    question: "A 'Utility Function' in a game like Chess is used to:",
    options: ["Value a terminal state", "Determine reflex rules", "Calculate Manhattan distance", "Negate logic statements"],
    correct: 0,
    explanation: "Utility functions provide a score for final game states (win, loss, or draw)."
  },
  {
    question: "What is a risk of 'Overfitting' in Machine Learning?",
    options: ["Poor generalization to new data", "Model becomes too simple", "High memory usage", "Logic syntax errors"],
    correct: 0,
    explanation: "Overfitting occurs when a model learns training noise rather than the general pattern."
  },
  {
    question: "Calculating the probability of a disease given a positive test result is an application of:",
    options: ["Bayes' Theorem", "The Turing Test", "A* Search", "De Morgan's Laws"],
    correct: 0,
    explanation: "Bayes' Theorem is the foundation for updating probabilities based on new evidence."
  },
  {
    question: "In First-Order Logic, why is 'Skolemization' used?",
    options: ["To remove existential quantifiers", "To add variables", "To speed up math", "To process images"],
    correct: 0,
    explanation: "Skolemization removes existential quantifiers (exists) to prepare logic for clausal form resolution."
  },
  {
    question: "A recruitment tool favors male candidates due to historical training data. This is a failure in:",
    options: ["Efficiency", "Data Bias / Fairness", "Optimality", "Logic syntax"],
    correct: 1,
    explanation: "Bias occurs when the training data reflects existing human prejudices or inequalities."
  },
  {
    question: "In a CSP, picking the variable with the 'fewest remaining legal values' is the:",
    options: ["MRV Heuristic", "Least Constraining Value", "Degree Heuristic", "Alpha-Beta Pruning"],
    correct: 0,
    explanation: "The Minimum Remaining Values (MRV) heuristic helps find failures early to prune the search."
  },
  {
    question: "In training a Neural Network, 'Gradient Descent' aims to:",
    options: ["Guess weights", "Minimize the loss function", "Increase neurons", "Convert data to logic"],
    correct: 1,
    explanation: "Gradient Descent is an optimization algorithm used to minimize error by adjusting weights."
  },
  {
    question: "A 'Knowledge-Based Agent' adds new info to its Knowledge Base using:",
    options: ["TELL", "ASK", "MOVE", "DELETE"],
    correct: 0,
    explanation: "The TELL operation is used to provide the agent with new information about the world."
  },
  {
    question: "Which search algorithm is likely to fail in a search space with infinite deep paths?",
    options: ["BFS", "DFS", "A*", "UCS"],
    correct: 1,
    explanation: "DFS is not complete in infinite spaces because it may follow a path forever without backtracking."
  },
  {
    question: "What is the primary risk of 'Local Search' (like Hill Climbing)?",
    options: ["Global minima", "Local Optima", "Disk space", "Too much logic"],
    correct: 1,
    explanation: "Local search can get stuck on 'peaks' that are better than neighbors but not the global best."
  },
  {
    question: "What is the disadvantage of a very high 'Learning Rate'?",
    options: ["Slow training", "Failure to converge", "Simplicity", "Binary data limit"],
    correct: 1,
    explanation: "Too high a learning rate can cause the model to 'overshoot' the optimal weight values."
  },
  {
    question: "In the PEAS description for a 'Spam Filter', the 'Actuators' are:",
    options: ["Incoming email", "Mark as Spam / Move to Folder", "The user screen", "The sender's IP"],
    correct: 1,
    explanation: "Actuators are the mechanisms the agent uses to change the state of the environment."
  },
  {
    question: "The 'Attention' mechanism in Transformers allows the model to:",
    options: ["Focus on relevant words in a sequence", "Hear voice volume", "Search the web", "Calculate math"],
    correct: 0,
    explanation: "Attention allows models to weigh the importance of different parts of the input context."
  },
  {
    question: "A 'Simulated Annealing' algorithm at a 'High Temperature' will:",
    options: ["Reject bad moves", "Accept worse moves for exploration", "Stop searching", "Use A*"],
    correct: 1,
    explanation: "High temperature allows the algorithm to jump out of local optima by accepting worse moves."
  },
  {
    question: "In FOL, 'Some students are smart' is translated as:",
    options: ["∀x (Student(x) → Smart(x))", "∃x (Student(x) ∧ Smart(x))", "Student(Smart)", "∃x (Student(x) → Smart(x))"],
    correct: 1,
    explanation: "Existential quantifiers (some) use the AND (∧) operator to connect properties."
  },
  {
    question: "A vacuum robot always moving to the nearest visible dirt is an example of:",
    options: ["Optimal Search", "Heuristic-driven Local Search", "Constraint Satisfaction", "Reinforcement Learning"],
    correct: 1,
    explanation: "It uses a simple proximity heuristic to make immediate local decisions."
  },
  {
    question: "A Reinforcement Learning agent learns through:",
    options: ["Reading", "Rewards and Penalties", "Looking at images", "Logic puzzles"],
    correct: 1,
    explanation: "RL is based on learning optimal behaviors by interacting with an environment to maximize rewards."
  },
  {
    question: "Alpha-Beta pruning improves Minimax by:",
    options: ["Removing unnecessary branches", "Adding more branches", "Randomizing moves", "Improving the heuristic"],
    correct: 0,
    explanation: "Pruning cuts off branches that cannot affect the final decision, improving search speed."
  },
  {
    question: "A 'Heuristic' is 'Admissible' if it:",
    options: ["Never overestimates cost", "Is fast to calculate", "Uses a CNN", "Is always a whole number"],
    correct: 0,
    explanation: "Admissibility ensures that A* search will always find the optimal (cheapest) solution."
  },
  {
    question: "Social media 'Filter Bubbles' are a risk because they:",
    options: ["Speed up the site", "Confirm existing biases", "Delete data", "Require passwords"],
    correct: 1,
    explanation: "Filter bubbles isolate users from diverse perspectives, reinforcing their own beliefs."
  },
  {
    question: "The time complexity of Minimax (branching b, depth m) is:",
    options: ["O(b*m)", "O(b^m)", "O(m^b)", "O(log b)"],
    correct: 1,
    explanation: "Minimax explores every possible sequence of moves down to the depth limit."
  },
  {
    question: "In a CSP, 'Backjumping' is efficient because it:",
    options: ["Jumps randomly", "Returns to the source of conflict", "Uses more RAM", "Skips logic"],
    correct: 1,
    explanation: "Backjumping skips irrelevant variables during backtracking to return directly to the conflict."
  },
  {
    question: "Hidden Markov Models are commonly used for:",
    options: ["Fixed images", "Speech recognition", "Logical contradictions", "Static maps"],
    correct: 1,
    explanation: "HMMs model sequences of observations (like audio) generated by hidden states (words)."
  },
  {
    question: "In a Genetic Algorithm, 'Crossover' is used to:",
    options: ["Delete weak solutions", "Combine traits of two parents", "Randomly flip a bit", "Calculate fitness"],
    correct: 1,
    explanation: "Crossover mimics biological reproduction to pass favorable traits to offspring."
  },
  {
    question: "A self-driving car environment is 'Dynamic' because:",
    options: ["It is moving", "The world changes during deliberation", "It has an engine", "It uses GPS"],
    correct: 1,
    explanation: "Dynamic environments continue to change while the agent is deciding its next move."
  },
  {
    question: "In Logic, the statement (P ∧ ¬P) is a:",
    options: ["Tautology", "Contradiction", "WFF", "Valid statement"],
    correct: 1,
    explanation: "A contradiction is a statement that is false in all possible interpretations."
  },
  {
    question: "A robot with a camera has a 'Fully Observable' environment if:",
    options: ["The camera is 4K", "It can see the entire state at once", "It uses NLP", "It moves fast"],
    correct: 1,
    explanation: "Full observability means the sensors provide all the information needed to make an optimal choice."
  },
  {
    question: "The 'Turing Test' was designed to measure an AI's:",
    options: ["Processing speed", "Ability to exhibit human-like intelligence", "Memory capacity", "Logical accuracy"],
    correct: 1,
    explanation: "Alan Turing proposed the test to see if a machine could pass as a human in conversation."
  },
  {
    question: "Which search algorithm expands the node with the lowest $f(n) = g(n) + h(n)$?",
    options: ["BFS", "DFS", "A*", "UCS"],
    correct: 2,
    explanation: "A* combines path cost (g) and heuristic (h) to prioritize nodes."
  },
  {
    question: "A 'Knowledge Base' contains:",
    options: ["A set of sentences/facts", "A list of images", "A CPU", "A heuristic function"],
    correct: 0,
    explanation: "The KB stores everything the agent 'knows' about its world in a logical format."
  },
  {
    question: "In Propositional Logic, (P → Q) is logically equivalent to:",
    options: ["(¬P ∨ Q)", "(P ∧ ¬Q)", "(¬P ∧ Q)", "(P ∨ Q)"],
    correct: 0,
    explanation: "Material implication 'P implies Q' is true unless P is true and Q is false."
  },
  {
    question: "Which of these is an example of an 'Unsupervised' learning task?",
    options: ["Spam detection", "Digit recognition", "Clustering customers by behavior", "Predicting house prices"],
    correct: 2,
    explanation: "Clustering is unsupervised because the data does not have pre-assigned labels."
  },
  {
    question: "In a Genetic Algorithm, what happens if the 'Mutation Rate' is too high?",
    options: ["It becomes a random walk", "It converges too fast", "It stops moving", "Fitness becomes zero"],
    correct: 0,
    explanation: "Too much mutation destroys good solutions before they can be refined, leading to random searching."
  },
  {
    question: "Which game type describes Poker?",
    options: ["Perfect Information", "Imperfect Information", "Deterministic", "Static"],
    correct: 1,
    explanation: "Poker has imperfect information because you cannot see the other players' cards."
  },
  {
    question: "In A* search, if $h(n)$ is always 0, the algorithm becomes:",
    options: ["Greedy Search", "Uniform Cost Search", "DFS", "Hill Climbing"],
    correct: 1,
    explanation: "Without the heuristic, A* only considers path cost, making it identical to UCS."
  },
  {
    question: "Which layer in a CNN is used to reduce the spatial size of the representation?",
    options: ["Convolutional Layer", "Pooling Layer", "Fully Connected Layer", "Input Layer"],
    correct: 1,
    explanation: "Pooling (like Max Pooling) reduces the dimensions of the data to save computation."
  },
  {
    question: "A logical agent that 'infers' new facts is using:",
    options: ["Search", "Reasoning", "Mutation", "Perception"],
    correct: 1,
    explanation: "Reasoning involves applying logical rules to the KB to discover information not explicitly stated."
  },
  {
    question: "In Game Theory, a 'Nash Equilibrium' is a state where:",
    options: ["No player can benefit by changing their strategy alone", "One player wins everything", "Both players lose", "The AI finds the shortest path"],
    correct: 0,
    explanation: "In a Nash Equilibrium, every player's strategy is optimal given the other players' strategies."
  },
  {
    question: "Which of these is a 'Discreet' environment?",
    options: ["Chess", "Taxi driving", "Flying a drone", "Robot arm movement"],
    correct: 0,
    explanation: "Chess has a fixed, countable number of possible moves and board states."
  },
  {
    question: "The 'Exploration vs. Exploitation' trade-off is central to:",
    options: ["Logic Programming", "Reinforcement Learning", "A* Search", "Expert Systems"],
    correct: 1,
    explanation: "RL agents must balance trying new things (exploration) with using known good actions (exploitation)."
  },
  {
    question: "In FOL, the symbol '∀' represents:",
    options: ["Existence", "For all", "Negation", "Implication"],
    correct: 1,
    explanation: "The universal quantifier ∀ means the property holds for every object in the domain."
  },
  {
    question: "A 'Breadth-First Search' finds the goal at depth $d$. Its space complexity is:",
    options: ["O(d)", "O(b^d)", "O(1)", "O(log d)"],
    correct: 1,
    explanation: "BFS stores all nodes in the frontier, leading to exponential space complexity."
  },
  {
    question: "Which activation function is most common in the hidden layers of modern deep networks?",
    options: ["Sigmoid", "ReLU", "Step", "Linear"],
    correct: 1,
    explanation: "Rectified Linear Unit (ReLU) is preferred because it helps avoid the vanishing gradient problem."
  },
  {
    question: "The process of making an AI's goals match human values is called:",
    options: ["Tuning", "Alignment", "Pruning", "Inference"],
    correct: 1,
    explanation: "AI Alignment focuses on ensuring AI systems act in accordance with human intent and ethics."
  },
  {
    question: "Which search algorithm is optimal but uses the most memory?",
    options: ["DFS", "BFS", "Hill Climbing", "Greedy Search"],
    correct: 1,
    explanation: "BFS is optimal for unit-cost paths but has exponential space complexity."
  },
  {
    question: "A 'Heuristic' function $h(n)$ estimates:",
    options: ["Cost from start to $n$", "Cost from $n$ to goal", "Total path cost", "Number of nodes"],
    correct: 1,
    explanation: "The heuristic is a 'guess' of the remaining distance to the goal state."
  },
  {
    question: "In CSPs, 'Constraint Propagation' helps by:",
    options: ["Adding variables", "Reducing the size of variable domains", "Increasing search depth", "Finding the goal directly"],
    correct: 1,
    explanation: "By enforcing rules (like Arc Consistency), the AI removes impossible values before searching."
  },
  {
    question: "Which of these is a 'Generative' AI task?",
    options: ["Filtering spam", "Predicting stock prices", "Creating a new digital painting", "Labeling images"],
    correct: 2,
    explanation: "Generative AI focuses on creating new content rather than just classifying existing data."
  },
  {
    question: "In a decision tree, the node that splits based on the most important feature is the:",
    options: ["Leaf node", "Root node", "Child node", "Branch node"],
    correct: 1,
    explanation: "The root node is chosen based on which feature provides the most information gain."
  },
  {
    question: "An AI system that mimics human expertise in a narrow field (like medicine) using rules is an:",
    options: ["Expert System", "Neural Network", "Genetic Algorithm", "Reflex Agent"],
    correct: 0,
    explanation: "Expert systems use hard-coded knowledge and rules to simulate a human specialist."
  },
  {
    question: "In Reinforcement Learning, the 'Discount Factor' ($\gamma$) determines:",
    options: ["Speed of the agent", "The importance of future rewards", "The cost of an action", "The size of the state space"],
    correct: 1,
    explanation: "The discount factor determines how much the agent cares about immediate vs. long-term rewards."
  },
  {
    question: "An AI evaluating 'Sentiment' in a tweet (positive/negative) is performing:",
    options: ["Computer Vision", "Natural Language Processing", "Search", "Robotics"],
    correct: 1,
    explanation: "Sentiment analysis is a sub-field of NLP focused on extracting emotional tone from text."
  }
,
  // --- WEB & APP RECOMMENDATION SYSTEMS ---
  {
    question: "A high-traffic e-commerce platform implements a 'Real-Time Personalization' engine. To avoid the 'Cold Start' problem for new users who haven't made a purchase yet, the system combines user demographic data with popular item trends rather than relying on purchase history. This hybrid approach is technically known as:",
    options: ["Pure Collaborative Filtering", "Knowledge-Based Hybrid Recommendation", "Deep Q-Learning", "Uninformed BFS"],
    correct: 1,
    explanation: "Knowledge-based systems use specific attributes (demographics/preferences) to make suggestions when historical interaction data is missing."
  },
  {
    question: "A video streaming app uses a 'Two-Tower' Neural Network architecture to serve content. The 'Query Tower' processes user context, and the 'Candidate Tower' processes video metadata. The final layer calculates a 'Dot Product' to find the best match. This is used for which production stage?",
    options: ["Data Labeling", "Candidate Retrieval / Ranking", "Image Compression", "Regression Testing"],
    correct: 1,
    explanation: "Two-tower models are industry standards for efficient retrieval in large-scale recommendation systems."
  },
  {
    question: "An app like TikTok uses an algorithm that balances 'Exploitation' (showing what you like) and 'Exploration' (showing new categories). If the algorithm focuses 100% on Exploitation, what is the most likely technical failure?",
    options: ["Vanishing Gradient", "Filter Bubble / Feedback Loop", "Deadlock", "Memory Leak"],
    correct: 1,
    explanation: "Exploitation-only models lead to echo chambers where the user is never exposed to new content, reducing long-term retention."
  },

  // --- AUTOMATION & CLOUD INFRASTRUCTURE ---
  {
    question: "A cloud-based auto-scaling system monitors CPU usage. It uses a 'PID Controller' (Proportional-Integral-Derivative) to decide when to spin up new servers. If the system over-reacts to a tiny spike and starts 100 unnecessary servers, which parameter is likely tuned too high?",
    options: ["The Proportional Gain", "The Heuristic Cost", "The Mutation Rate", "The Alpha-Beta Pruning Depth"],
    correct: 0,
    explanation: "The Proportional component in control algorithms determines the reaction intensity to the current error/spike."
  },
  {
    question: "An automated CI/CD pipeline uses an AI to detect 'Flaky Tests' (tests that pass and fail inconsistently). The AI identifies that these tests fail more often when the database latency is above 50ms. Which technique is most effective for classifying these failures?",
    options: ["Decision Tree Induction", "Breadth-First Search", "Hill Climbing", "A* Search"],
    correct: 0,
    explanation: "Decision trees are excellent for identifying specific 'if-then' conditions (like latency thresholds) that lead to a categorical outcome (Pass/Fail)."
  },
  {
    question: "A Kubernetes 'Horizontal Pod Autoscaler' uses a 'Moving Average' to smooth out noise in traffic data before scaling. This is a real-world application of which concept?",
    options: ["Stochastic Hill Climbing", "Data Smoothing / Pre-processing", "Logical Inference", "Genetic Crossover"],
    correct: 1,
    explanation: "Smoothing is essential in automation to prevent jitter and unnecessary scaling actions caused by transient data noise."
  },

  // --- SEARCH & NAVIGATION IN PRODUCTION ---
  {
    question: "A food delivery app needs to calculate the 'Estimated Time of Arrival' (ETA). It uses a search algorithm on a live map with millions of nodes. To ensure the calculation takes less than 100ms, it uses a 'Bidirectional A*' search. Why is this preferred over standard A*?",
    options: ["It uses less memory than DFS", "It significantly reduces the number of explored nodes by meeting in the middle", "It ignores traffic data", "It is a non-heuristic search"],
    correct: 1,
    explanation: "Bidirectional search reduces the search space complexity from O(b^d) to O(b^(d/2)), which is vital for real-time web services."
  },
  {
    question: "A logistics automation software uses 'Tabu Search' to solve the Vehicle Routing Problem. The algorithm maintains a 'Tabu List' of recently visited solutions that it is forbidden to return to. What is the technical purpose of this list?",
    options: ["To save memory", "To prevent the search from getting stuck in a local optimum cycle", "To store the final correct", "To provide a heuristic for A*"],
    correct: 1,
    explanation: "Tabu lists prevent the algorithm from immediately cycling back to a previous state, forcing it to explore new areas of the solution space."
  },

  // --- NLP & CHATBOTS (PRODUCTION LEVEL) ---
  {
    question: "A customer support chatbot uses 'Semantic Search' to find corrects in a PDF manual. Instead of searching for exact keywords, it converts the user's question into a 'Vector Embedding'. This technical process relies on:",
    options: ["Propositional Logic", "Cosine Similarity between high-dimensional vectors", "Depth-First Search", "Genetic Mutation"],
    correct: 1,
    explanation: "Modern NLP uses vector math (embeddings) to find meaning-based matches rather than literal text matches."
  },
  {
    question: "In a production Large Language Model (LLM) deployment, 'Top-P Sampling' (Nucleus Sampling) is used during text generation. If Top-P is set to 0.1, the AI will:",
    options: ["Be very creative and random", "Only choose from a small set of the most likely words", "Stop generating text", "Use First-Order Logic to verify facts"],
    correct: 1,
    explanation: "Lower Top-P values restrict the 'nucleus' of candidate words, making the output more deterministic and focused."
  },

  // --- CONTINUING THROUGH 70 TOPICS (SAMPLING) ---
  {
    question: "A fintech app uses a 'Random Forest' model to detect credit card fraud in milliseconds. Why is a 'Forest' of trees used instead of a single 'Decision Tree'?",
    options: ["To increase training speed", "To reduce 'Variance' and prevent overfitting to a single user's habits", "To use less RAM", "To make the model easier to explain to lawyers"],
    correct: 1,
    explanation: "Ensemble methods like Random Forests average out the errors of individual trees, leading to more robust production performance."
  },
  {
    question: "A smart-home automation system uses 'Fuzzy Logic' to control an AC unit. Instead of just 'ON' or 'OFF', it uses labels like 'Slightly Warm' or 'Very Cold'. This is technically advantageous because:",
    options: ["It simplifies the binary code", "It handles the 'imprecision' of real-world human comfort levels", "It makes the AC run faster", "It doesn't require electricity"],
    correct: 1,
    explanation: "Fuzzy logic allows for 'degrees of truth,' which is better for analog human experiences like temperature or speed."
  },
  {
    question: "An AI for a video game 'Boss' uses a 'Finite State Machine' (FSM) combined with a 'Behavior Tree'. If the Boss is 'Idle' and sees the player, it transitions to 'Attack'. This is a real-world implementation of:",
    options: ["A Simple Reflex Agent with state", "An Uninformed Search", "A Genetic Algorithm", "Bayesian Inference"],
    correct: 0,
    explanation: "FSMs are the production standard for defining states and transitions in reflex-based agents."
  },
  {
    question: "A data-center cooling AI uses 'Deep Reinforcement Learning'. It receives a 'Positive Reward' for every 1% reduction in power usage and a 'Negative Reward' if the server temperature exceeds 80°C. This setup is known as:",
    options: ["Supervised Learning", "The Reward Signal/Function", "Constraint Propagation", "Backtracking"],
    correct: 1,
    explanation: "The reward function defines the goal for an RL agent, balancing efficiency with safety constraints."
  },
  {
    question: "A photo-sharing app uses 'K-Means Clustering' to group photos by location automatically. If the algorithm is running too slowly on millions of photos, a developer might use 'Mini-Batch K-Means'. This variation works by:",
    options: ["Searching only half the photos", "Using a random subset of data for each update to save computation", "Switching to A* search", "Using FOL to group images"],
    correct: 1,
    explanation: "Mini-batching is a standard production optimization to make algorithms scale to 'Big Data' sizes."
  },
  {
    question: "A high-frequency trading bot uses 'Sentiment Analysis' on Twitter feeds. It finds that 'Bullish' tweets correlate with price rises. To avoid reacting to 'Bot' accounts, it uses a 'Weighting' system based on account verification. This is a form of:",
    options: ["Feature Engineering", "Heuristic Search", "Crossover", "Alpha-Beta Pruning"],
    correct: 0,
    explanation: "Feature engineering involves refining the input data (adding 'verification status' as a signal) to improve model accuracy."
  },
  {
    question: "In a web-crawler (like Googlebot), the algorithm must decide which links to follow first. It uses a priority queue based on 'PageRank'. This makes the search:",
    options: ["Uninformed DFS", "Informed Best-First Search", "Stochastic Hill Climbing", "Genetic selection"],
    correct: 1,
    explanation: "Using a metric (PageRank) to prioritize which node to visit next is the definition of an Informed Search."
  },
  {
    question: "An AI in a mobile banking app uses 'Biometric Authentication'. To ensure it works even if the user grows a beard, the model must have high 'Robustness'. This is usually achieved by:",
    options: ["Data Augmentation (adding modified images to training)", "Deleting the user's data", "Using Propositional Logic", "Slowing down the CPU"],
    correct: 0,
    explanation: "Augmentation helps models generalize to variations they might see in real life."
  },
  {
    question: "A 'Load Balancer' for a web app uses a 'Weighted Round Robin' algorithm. If Server A has a weight of 5 and Server B has a weight of 1, Server A gets 5x more traffic. This is a production version of:",
    options: ["Roulette Wheel Selection", "Minimax", "DFS", "Backtracking"],
    correct: 0,
    explanation: "Roulette wheel selection (fitness-proportionate) is logically identical to weighted distribution in traffic management."
  },
  {
    question: "A SaaS company uses 'Churn Prediction' to find customers likely to cancel their subscription. The model outputs a 'Probability Score'. If the company only wants to call customers who are 90% likely to leave, they are setting a:",
    options: ["Classification Threshold", "Heuristic Cost", "Branching Factor", "Learning Rate"],
    correct: 0,
    explanation: "The threshold determines at what point a probability becomes a 'Yes' or 'No' decision in production."
  },

  // ... (Repeating structure to reach 70 - adding condensed technical scenarios)

  {
    question: "A social media app detects 'Spam' using a 'Naive Bayes' classifier. It is called 'Naive' because it assumes:",
    options: ["The user is not a bot", "All features (words) are independent of each other", "The math is simple", "The data is always true"],
    correct: 1,
    explanation: "Naive Bayes assumes feature independence, which simplifies calculation for high-speed web production."
  },
  {
    question: "An autonomous warehouse robot uses 'SLAM' (Simultaneous Localization and Mapping). It uses a 'Kalman Filter' to estimate its position. The Kalman filter is essential because:",
    options: ["It handles sensor noise and uncertainty over time", "It uses FOL rules", "It is a type of Genetic Algorithm", "It calculates the shortest path"],
    correct: 0,
    explanation: "Kalman filters are production-standard for tracking state in noisy, stochastic environments."
  },
  {
    question: "A 'Recommendation' system for a music app uses 'Matrix Factorization'. It breaks a large 'User-Song' matrix into two smaller ones. This technique is primarily used to discover:",
    options: ["Exact duplicates", "Latent (hidden) features/tastes", "Song lyrics", "The user's age"],
    correct: 1,
    explanation: "Matrix factorization finds hidden patterns (e.g., 'users who like 80s synth' even if not explicitly stated)."
  },
  {
    question: "In a production 'A/B Test', an AI determines if 'Layout A' or 'Layout B' leads to more clicks. To minimize lost revenue during the test, it uses a 'Multi-Armed Bandit' algorithm. This is better than a standard test because:",
    options: ["It is faster to code", "It dynamically shifts traffic to the winning layout during the test", "It uses DFS", "It is deterministic"],
    correct: 1,
    explanation: "Multi-armed bandits balance exploration (testing) and exploitation (using the winner) in real-time."
  },
  {
    question: "An app's 'Autofill' feature uses a 'N-gram' model to predict the next word. If N=3 (Tri-gram), the prediction is based on:",
    options: ["The entire history of the user", "The previous 2 words", "The user's location", "The length of the word"],
    correct: 1,
    explanation: "An N-gram looks at a window of N-1 previous items to predict the Nth."
  },
  {
    question: "A 'Cybersecurity' AI uses 'Deep Packet Inspection'. It flags a connection as a 'DDoS attack' if the rate of requests follows a specific mathematical pattern. This 'Pattern Matching' is most effectively done by:",
    options: ["RNN (Recurrent Neural Network)", "A* Search", "Minimax", "Simulated Annealing"],
    correct: 0,
    explanation: "RNNs are built for time-series and sequence data, making them ideal for traffic pattern analysis."
  },
  {
    question: "A 'Video Game AI' uses 'Influence Maps' to decide where to position archers on a battlefield. Areas with high 'Line of Sight' have higher values. This is a form of:",
    options: ["Heuristic Grid Evaluation", "Backtracking", "Crossover", "NLP"],
    correct: 0,
    explanation: "Influence maps convert spatial data into a grid of values that act as a heuristic for decision making."
  },
  {
    question: "In an automated 'Stock Trading' system, 'Backtesting' is the process of:",
    options: ["Testing the algorithm on historical data to see if it would have made a profit", "Retraining the model on new data", "Using DFS to find goals", "Deleting old logs"],
    correct: 0,
    explanation: "Backtesting is a mandatory production step to validate financial algorithms."
  },
  {
    question: "An 'Image Compression' algorithm in a web browser uses AI to remove pixels that the human eye won't notice. This is known as:",
    options: ["Lossless compression", "Perceptual encoding", "A* search", "Constraint satisfaction"],
    correct: 1,
    explanation: "Perceptual encoding uses models of human biology to optimize data storage."
  },
  {
    question: "A 'Self-Healing' server infrastructure uses an AI to detect 'Zombie Processes' and kill them. This is an example of an agent with which goal?",
    options: ["Maximizing utility (system health)", "Learning new languages", "Simulating games", "Searching maps"],
    correct: 0,
    explanation: "Utility-based agents act to maintain an optimal state for a defined metric (uptime/health)."
  },
  {
    question: "A 'Smart Grid' uses AI to predict electricity demand. If the prediction is too high, energy is wasted. If it is too low, blackouts occur. This 'Cost of Error' is represented in the AI's:",
    options: ["Loss Function", "Learning Rate", "Branching Factor", "Mutation Type"],
    correct: 0,
    explanation: "The loss function quantifies the 'penalty' for being wrong, guiding the model's training."
  },
  {
    question: "A mobile app uses 'Federated Learning' to train its autocorrect model. This means:",
    options: ["All data is sent to a central server", "The model is trained on the user's phone to protect privacy, and only 'updates' are shared", "The AI is a Genetic Algorithm", "The app uses BFS"],
    correct: 1,
    explanation: "Federated learning is a production privacy technique where data stays on the device."
  },
  {
    question: "An AI 'Moderator' for a forum uses 'Zero-Shot Classification'. This allows it to:",
    options: ["Only detect words it has seen before", "Classify a comment into a category (like 'Hate Speech') without being specifically trained on that exact category", "Run with zero electricity", "Use A* search"],
    correct: 1,
    explanation: "Zero-shot learning allows models to generalize to new labels based on semantic understanding."
  },
  {
    question: "A 'Delivery Drone' uses 'Optical Flow' to avoid hitting moving objects. This technique calculates:",
    options: ["The distance to the goal", "The relative motion of pixels between frames", "The weight of the package", "The logic of the path"],
    correct: 1,
    explanation: "Optical flow is a computer vision technique for motion detection in real-time."
  },
  {
    question: "In 'Big Data' pipelines, 'MapReduce' is often used. The 'Map' step is similar to which AI concept?",
    options: ["Decomposing a problem into sub-problems (like AO* search)", "Crossover", "Mutation", "Alpha-Beta Pruning"],
    correct: 0,
    explanation: "Mapping breaks tasks into independent parts, similar to problem decomposition in search."
  },
  {
    question: "A 'Search Engine' uses 'Inverted Indexes'. Instead of searching every document for a word, it looks up the word to find a list of documents. This is technically:",
    options: ["A Hash Map look-up for O(1) or O(log n) access", "A DFS search", "A Genetic Algorithm", "An Implication in FOL"],
    correct: 0,
    explanation: "Indexing is a production optimization to avoid linear O(n) search times."
  },
  {
    question: "An AI-powered 'Firewall' uses 'Signature-based detection'. It only blocks attacks that match a specific code pattern. This is a:",
    options: ["Simple Reflex Agent", "Learning Agent", "Goal-based Agent", "Stochastic Agent"],
    correct: 0,
    explanation: "Signature matching is a hard-coded condition-action rule (If pattern, then block)."
  },
  {
    question: "A 'Music AI' creates a playlist by finding the 'Shortest Hamiltonian Path' through a set of songs (visiting each song once with minimal 'mood change'). This is a version of:",
    options: ["The Traveling Salesperson Problem", "BFS", "Minimax", "Propositional Logic"],
    correct: 0,
    explanation: "Finding a path through nodes with minimal total cost is the TSP, often solved with heuristics in production."
  },
  {
    question: "A 'Ride-Sharing' app uses AI to 'Batch' multiple riders into one car. To find the best groups, it uses 'Cluster Analysis'. This is:",
    options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Expert System"],
    correct: 1,
    explanation: "Grouping items based on proximity or similarity without pre-labeled categories is Unsupervised Learning."
  },
  {
    question: "A 'Weather' app provides a '7-day forecast'. As each day passes, the AI 'assimilates' the actual weather into its model. This is called:",
    options: ["Data Assimilation / Online Learning", "Genetic Mutation", "A* Search", "Skolemization"],
    correct: 0,
    explanation: "Online learning updates the model continuously as new data arrives."
  },
  {
    question: "A 'Translation' app works 'Offline' by downloading a smaller model. This process of shrinking a large AI into a small one is called:",
    options: ["Model Distillation / Compression", "Backtracking", "Crossover", "Inference"],
    correct: 0,
    explanation: "Distillation trains a small 'student' model to mimic a large 'teacher' model for mobile use."
  },
  {
    question: "An 'Auto-Complete' feature in an IDE (like VS Code) uses a 'Trie' data structure. A Trie is specifically optimized for:",
    options: ["Searching images", "Prefix matching in strings", "Solving math", "Generating random numbers"],
    correct: 1,
    explanation: "Tries (prefix trees) allow for very fast lookups of words starting with specific characters."
  },
  {
    question: "An AI 'Antivirus' detects a virus not by its code, but by its 'Behavior' (e.g., trying to encrypt files). This is:",
    options: ["Heuristic-based detection", "Signature-based detection", "BFS", "DFS"],
    correct: 0,
    explanation: "Heuristic detection looks for patterns and characteristics rather than exact matches."
  },
  {
    question: "A 'Cloud' provider uses AI to 'Predictive Maintenance' of hard drives. It replaces a drive *before* it fails. This minimizes:",
    options: ["Downtime (Utility loss)", "Search depth", "Logic complexity", "Branching factor"],
    correct: 0,
    explanation: "Predictive maintenance is a utility-maximization strategy in infrastructure."
  },
  {
    question: "In a 'Neural Network', 'Dropout' is a technique where random neurons are turned off during training. This is done to:",
    options: ["Save electricity", "Prevent Overfitting", "Make the AI faster", "Increase memory"],
    correct: 1,
    explanation: "Dropout forces the network to learn redundant representations, making it more robust."
  },
  {
    question: "A 'Customer Support' AI uses 'Topic Modeling' (LDA) to group incoming tickets. LDA stands for:",
    options: ["Latent Dirichlet Allocation", "Logical Data Analysis", "Linear Discriminant Alpha", "Long Data Array"],
    correct: 0,
    explanation: "LDA is a standard statistical model for discovering abstract 'topics' in text collections."
  },
  {
    question: "An 'Ad-Tech' AI decides which banner to show. It uses 'Real-Time Bidding' (RTB). The AI must decide in <50ms. This requires:",
    options: ["High-speed Inference", "Deep search", "Manual verification", "Genetic evolution"],
    correct: 0,
    explanation: "Inference is the 'running' phase of an AI; in production, it must meet strict latency SLAs."
  },
  {
    question: "A 'Voice Assistant' uses 'Wake Word Detection' (e.g., 'Hey Siri'). This is a small, low-power model that always runs. It is technically a:",
    options: ["Binary Classifier", "A* Searcher", "Genetic Optimizer", "FOL Prover"],
    correct: 0,
    explanation: "It only has two classes: 'Wake word detected' or 'Not detected'."
  },
  {
    question: "A 'Recommendation' algorithm uses 'Frequency-Inverse Document Frequency' (TF-IDF). This helps the AI ignore words like:",
    options: ["The, is, at (Stop words)", "Specific names", "Action verbs", "New words"],
    correct: 0,
    explanation: "TF-IDF penalizes words that appear too frequently across all documents, as they carry little unique meaning."
  },
  {
    question: "A 'Smart Camera' uses 'Background Subtraction' to detect motion. It compares the current frame to a reference frame. This is a form of:",
    options: ["Computer Vision pre-processing", "Deep Learning", "Genetic Algorithm", "Search"],
    correct: 0,
    explanation: "Preprocessing simplifies the data before passing it to more complex AI models."
  },
  {
    question: "A 'Chatbot' uses 'Prompt Engineering' to improve results. This involves:",
    options: ["Rewriting the AI's code", "Carefully crafting the input text to guide the AI's response", "Adding more RAM", "Using a BFS"],
    correct: 1,
    explanation: "Prompting is the 'software engineering' of the LLM era."
  },
  {
    question: "In 'Computer Vision', 'OCR' stands for:",
    options: ["Optical Character Recognition", "Optimal Code Research", "Output Circle Range", "Object Color Ratio"],
    correct: 0,
    explanation: "OCR is the tech used to convert images of text into machine-readable text."
  },
  {
    question: "A 'Recommendation' engine uses 'Cold Start' mitigation. For a new *item*, it uses:",
    options: ["Metadata-based filtering", "Collaborative filtering", "User history", "Random selection"],
    correct: 0,
    explanation: "If no one has bought the item yet, the AI must rely on the item's description (metadata)."
  },
  {
    question: "A 'Self-Driving' car uses 'Lidar' to build a 'Point Cloud'. A point cloud is:",
    options: ["A set of 3D data points in space", "A type of logic", "A weather forecast", "A neural layer"],
    correct: 0,
    explanation: "Lidar sensors return thousands of distance points to map the 3D environment."
  },
  {
    question: "An AI 'Art' tool uses 'Diffusion Models'. These work by:",
    options: ["Searching a database of photos", "Learning to remove noise from an image to reveal a pattern", "Using FOL rules", "Combining two photos"],
    correct: 1,
    explanation: "Diffusion models generate content by 'denoising' a random starting point into a coherent image."
  },
  {
    question: "A 'Banking' AI uses 'Explainable AI' (XAI). This is important so the bank can:",
    options: ["Tell the user *why* their loan was denied", "Make the AI faster", "Save money", "Use less data"],
    correct: 0,
    explanation: "XAI is a legal and ethical requirement in production for high-stakes decisions."
  },
  {
    question: "In 'Natural Language Processing', 'Tokenization' is the process of:",
    options: ["Breaking a sentence into individual words or sub-words", "Translating text", "Encrypting text", "Deleting text"],
    correct: 0,
    explanation: "Tokens are the 'atoms' that an AI processes."
  },
  {
    question: "A 'Search' algorithm that uses 'Caching' saves time by:",
    options: ["Storing previous results so they don't have to be recalculated", "Searching deeper", "Using a heuristic", "Mutation"],
    correct: 0,
    explanation: "Caching is a standard performance optimization in all production software."
  },
  {
    question: "An 'Email' client uses AI to 'Smart Reply'. It suggests three short responses. This is a:",
    options: ["Sequence-to-Sequence task", "Search task", "Logic task", "Genetic task"],
    correct: 0,
    explanation: "Mapping an input sequence (email) to an output sequence (reply) is a Seq2Seq task."
  },
  {
    question: "A 'Video Game' AI uses 'Navmesh' (Navigation Mesh) to move characters. A Navmesh is:",
    options: ["A simplified geometry of the walkable areas in a level", "A list of player names", "A type of logic gate", "A neural network"],
    correct: 0,
    explanation: "Navmeshes act as the 'map' for search algorithms like A* in 3D games."
  },
  {
    question: "A 'Deep Learning' model is 'Pruned' before being put on a mobile app. Pruning involves:",
    options: ["Removing unnecessary weights/connections to make the model smaller", "Adding more layers", "Increasing the input size", "Changing the language"],
    correct: 0,
    explanation: "Pruning is a production step to make models efficient for edge devices."
  },
  {
    question: "An AI for 'Traffic Management' uses 'Simulated Annealing' to optimize light timings. The 'Energy' in this simulation represents:",
    options: ["Total traffic delay", "The speed of light", "The number of cars", "The length of the road"],
    correct: 0,
    explanation: "In optimization, 'energy' is the cost function you want to minimize."
  },
  {
    question: "A 'Face Unlock' system uses a 'Confidence Score'. If the score is 0.85 and the threshold is 0.90, the phone will:",
    options: ["Stay locked", "Unlock anyway", "Delete the photo", "Call the police"],
    correct: 0,
    explanation: "If the score is below the security threshold, the action is denied."
  },
  {
    question: "A 'Recommendation' system uses 'Diversity' as a metric. This ensures:",
    options: ["The user isn't just shown the same type of thing repeatedly", "The AI is fast", "The data is secure", "The code is clean"],
    correct: 0,
    explanation: "Diversity prevents user boredom and expands the 'long tail' of content."
  },
  {
    question: "An AI 'Stock' bot uses 'Stop-Loss' logic. This is an example of:",
    options: ["A hard-coded safety constraint", "A learning rule", "A heuristic", "A mutation"],
    correct: 0,
    explanation: "Safety constraints are non-negotiable rules added to AI systems in production."
  },
  {
    question: "In 'Deep Learning', 'Batch Normalization' is used to:",
    options: ["Make the training more stable and faster", "Slow down the model", "Delete data", "Change the loss function"],
    correct: 0,
    explanation: "Normalization keeps the inputs to each layer in a healthy range, preventing training crashes."
  },
  {
    question: "A 'Smart' thermostat uses 'Predictive Modeling' to start heating the house *before* you get home. It uses your GPS data as a:",
    options: ["Feature/Input", "Heuristic", "Reward", "Logic gate"],
    correct: 0,
    explanation: "GPS coordinates are the raw input features used to trigger the prediction."
  },
  {
    question: "An AI 'Translator' uses 'BLEU Score' to measure its quality. BLEU stands for:",
    options: ["Bilingual Evaluation Understudy", "Binary Logic Engine Unit", "Basic Language Efficient Utterance", "Best Linguistic Evaluation Unit"],
    correct: 0,
    explanation: "BLEU is the industry-standard metric for comparing machine translation to human translation."
  },
  {
    question: "A 'Content Moderator' uses 'Hate Speech Detection'. To prevent 'False Positives' (blocking innocent people), the team focuses on:",
    options: ["Precision", "Recall", "Speed", "Memory"],
    correct: 0,
    explanation: "Precision measures how many 'flagged' items were actually bad; high precision means fewer innocent people are blocked."
  },
  {
    question: "A 'Music' AI uses 'Beat Tracking'. This is a:",
    options: ["Temporal (Time-based) analysis task", "Spatial analysis task", "Logical task", "Search task"],
    correct: 0,
    explanation: "Music is a time-series signal, requiring temporal processing."
  }
];