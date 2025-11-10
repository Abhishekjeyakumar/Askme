import { useState, useEffect } from 'react'
import {Chatbot} from 'supersimpledev'
import { ChatInput } from './components/ChatInput';
import ChatMessages from "./components/ChatMessages"
import './App.css'

function App(){
           const [chatMessages, setChatMessages] = useState([{
           message: 'Hello! How can I help you?',
           sender: 'robot',
          },
      ])
          //const [chatMessages , setChatMessages] = array;
          //const chatMessages = array[0];
          //const setChatMessages = array[1];
          useEffect(()=>{
            Chatbot.addResponses({
              'goodbye': 'Goodbye. Have a great day!',
              'give me a unique id': function(){
                return 'Sure! here`s  a unique ID:${crypto.randomUUID()}';
              }
            })
          })
          useEffect(()=>{
            Chatbot.addResponses({
              'what is python': 'Python is a high-level, interpreted programming language known for its readability and versatility.it was created by Guido van Rossum and first released in 1991. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming. It has a large standard library and a vibrant ecosystem of third-party packages, making it suitable for a wide range of applications such as web development, data analysis, artificial intelligence, scientific computing, and more.',
              'give me a unique id': function(){
                return 'Sure! here`s  a unique ID:${crypto.randomUUID()}';
              }
            })
          })
          useEffect(()=>{
            Chatbot.addResponses({
              'example python program': 'Here is a simple example of a Python program that prints "Hello, World!" to the console:\n```python\ndef main():\n    print("Hello, World!")\n\nif __name__ == "__main__":\n    main()\n```',
              'give me a unique id': function(){
                return 'Sure! here`s  a unique ID:${crypto.randomUUID()}';
              }
            })
          })
          useEffect(()=>{
          Chatbot.addResponses({
            'default': function(input){
            return `Hmm 🤔 I’m not sure about "${input}".
          Try asking me something related to programming, like Python, C++, or web development!`;
    }
  })
})

          useEffect(()=>{
  Chatbot.addResponses({

    // ===== BASIC GREETINGS =====
    'hello': 'Hello there! How can I help you today?',
    'hi': 'Hi! What topic would you like to know about?',
    'hey': 'Hey there! Let’s talk tech!',
    'good morning': 'Good morning! Hope your day is off to a great start!',
    'good afternoon': 'Good afternoon! What can I help you learn today?',
    'good evening': 'Good evening! Ready to explore some programming topics?',
    'how are you': 'I’m doing great and always ready to chat about technology!',
    'what is your name': 'I am AskMe, your tech chatbot!',
    'who created you': 'I was created by abhishek using React and JavaScript!',
    'goodbye': 'Goodbye. Have a great day!',

    // ===== PROGRAMMING BASICS =====
    'what is programming': 'Programming is the process of writing instructions that tell a computer how to perform tasks.',
    'what is coding': 'Coding is the act of writing commands in a programming language to make computers perform actions.',
    'what is algorithm': 'An algorithm is a set of step-by-step instructions to solve a specific problem.',
    'what is compiler': 'A compiler converts high-level code into machine code that the computer can execute.',
    'what is interpreter': 'An interpreter executes code line by line instead of compiling it all at once.',
    'what is syntax': 'Syntax refers to the set of rules that define how code must be written in a language.',
    'what is variable': 'A variable is a container used to store data values in programming.',
    'what is loop': 'A loop allows you to execute a block of code repeatedly until a certain condition is met.',
    'what is function': 'A function is a reusable block of code that performs a specific task.',

    // ===== PYTHON =====
    'what is python': 'Python is a high-level, interpreted programming language known for its simplicity and readability.',
    'who created python': 'Python was created by Guido van Rossum in 1991.',
    'features of python': 'Python is simple, portable, dynamically typed, and supports multiple paradigms.',
    'what are python data types': 'Python has int, float, string, list, tuple, set, and dict data types.',
    'what is list comprehension': 'List comprehension is a concise way to create lists in a single line of code.',
    'what is indentation in python': 'Indentation defines code blocks instead of braces in Python.',
    'python loop types': 'Python supports for and while loops.',
    'what is tuple in python': 'A tuple is an immutable ordered collection of elements.',
    'what is dictionary in python': 'A dictionary stores key-value pairs in Python.',
    'what is module in python': 'A module is a Python file containing code that can be reused in other programs.',
    'what is pip': 'pip is Python’s package installer used to install and manage external libraries.',

    // ===== C LANGUAGE =====
    'what is c language': 'C is a general-purpose programming language developed by Dennis Ritchie in 1972.',
    'features of c': 'C is fast, structured, portable, and provides low-level memory access.',
    'what is array in c': 'An array is a collection of elements of the same data type stored sequentially in memory.',
    'what is pointer in c': 'A pointer is a variable that stores the address of another variable.',
    'what is structure in c': 'A structure groups variables of different data types under a single name.',
    'what is union in c': 'A union allows different data types to be stored in the same memory location.',
    'difference between c and c++': 'C is procedural, while C++ is both procedural and object-oriented.',
    'what is recursion in c': 'Recursion is when a function calls itself to solve a smaller version of the same problem.',

    // ===== C++ =====
    'what is c++': 'C++ is an extension of C language that supports object-oriented programming.',
    'what is class in c++': 'A class is a blueprint for creating objects in C++.',
    'what is object in c++': 'An object is an instance of a class containing data and methods.',
    'what is inheritance': 'Inheritance allows one class to use properties and methods of another class.',
    'what is polymorphism': 'Polymorphism allows functions or objects to behave differently in different contexts.',
    'what is encapsulation': 'Encapsulation is wrapping data and functions into a single unit called class.',
    'what is constructor': 'A constructor initializes an object when it is created.',
    'what is destructor': 'A destructor cleans up resources when an object is destroyed.',

    // ===== JAVA =====
    'what is java': 'Java is an object-oriented programming language developed by Sun Microsystems.',
    'what is jvm': 'JVM stands for Java Virtual Machine, which runs Java bytecode.',
    'difference between jdk jre jvm': 'JDK is for development, JRE is for running Java programs, and JVM executes bytecode.',
    'what is constructor in java': 'A constructor initializes an object in Java.',
    'what is interface in java': 'An interface defines abstract methods that a class must implement.',
    'what is package in java': 'A package organizes classes and interfaces in Java.',
    'what is exception handling in java': 'Exception handling manages runtime errors using try, catch, and finally blocks.',

    // ===== JAVASCRIPT =====
    'what is javascript': 'JavaScript is a scripting language used to make web pages interactive.',
    'difference between var let const': 'var is function-scoped; let and const are block-scoped.',
    'what is react': 'React is a JavaScript library for building user interfaces.',
    'what is node js': 'Node.js is a runtime that lets you run JavaScript outside a browser.',
    'what is event bubbling': 'Event bubbling means an event propagates from the target element up through ancestors.',
    'what is promise in javascript': 'A promise represents a value that will be available in the future (resolved or rejected).',
    'what is async await': 'async/await makes asynchronous code easier to read and write.',
    'what is json': 'JSON stands for JavaScript Object Notation, used to store and exchange data.',

    // ===== HTML =====
    'what is html': 'HTML stands for HyperText Markup Language used to structure web pages.',
    'what are html tags': 'Tags define elements like headings, paragraphs, and links in HTML.',
    'what is semantic html': 'Semantic HTML uses tags that describe meaning, like <header>, <footer>, and <article>.',
    'difference between div and span': 'div is block-level; span is inline.',
    'what is hyperlink': 'A hyperlink connects one page to another using the <a> tag.',
    'what is attribute in html': 'Attributes provide additional information about HTML elements.',

    // ===== CSS =====
    'what is css': 'CSS stands for Cascading Style Sheets and styles web pages.',
    'what is selector in css': 'A selector is used to target elements for styling.',
    'difference between margin and padding': 'Margin is outer spacing; padding is inner spacing.',
    'what is flexbox': 'Flexbox is a CSS layout model for arranging elements flexibly.',
    'what is grid in css': 'CSS Grid is a 2D layout system for designing web layouts.',
    'what is media query': 'Media queries make websites responsive for different screen sizes.',

    // ===== DATABASES =====
    'what is database': 'A database is a structured collection of data stored electronically.',
    'what is sql': 'SQL stands for Structured Query Language used for managing relational databases.',
    'what is primary key': 'A primary key uniquely identifies each record in a table.',
    'what is foreign key': 'A foreign key links two tables together.',
    'difference between sql and nosql': 'SQL uses tables; NoSQL uses document or key-value storage.',
    'what is mongodb': 'MongoDB is a NoSQL database that stores data in JSON-like documents.',

    // ===== AI / MACHINE LEARNING =====
    'what is artificial intelligence': 'AI is the simulation of human intelligence by machines.',
    'what is machine learning': 'Machine learning is a subset of AI that enables systems to learn from data.',
    'what is neural network': 'A neural network is a model inspired by the human brain for pattern recognition.',
    'what is deep learning': 'Deep learning uses multiple neural layers for complex pattern analysis.',
    'what is dataset': 'A dataset is a collection of data used for analysis or training models.',

    // ===== CLOUD & DEVOPS =====
    'what is cloud computing': 'Cloud computing provides on-demand computing services over the internet.',
    'what is aws': 'AWS (Amazon Web Services) is a popular cloud platform.',
    'what is docker': 'Docker is a tool to create, deploy, and run applications in containers.',
    'what is github': 'GitHub is a platform for hosting and collaborating on code using Git.',
    'what is devops': 'DevOps combines software development and IT operations for faster delivery.',

    // ===== OS & NETWORKING =====
    'what is operating system': 'An operating system manages hardware and software resources of a computer.',
    'examples of os': 'Examples include Windows, macOS, Linux, and Android.',
    'what is ip address': 'An IP address identifies a device on a network.',
    'what is dns': 'DNS stands for Domain Name System — it converts domain names into IP addresses.',
    'what is protocol': 'A protocol defines rules for data communication between devices.',

    // ===== BASIC TECH CONCEPTS =====
    'what is hardware': 'Hardware refers to the physical components of a computer system.',
    'what is software': 'Software is a set of programs that tells the hardware what to do.',
    'what is internet': 'The Internet is a global network that connects millions of computers.',
    'what is website': 'A website is a collection of web pages hosted on a server.',
    'what is browser': 'A browser is software used to access and view web pages (like Chrome or Edge).',
    'what is ip': 'IP stands for Internet Protocol, which handles addressing of network devices.',

    // ===== FUN / DYNAMIC RESPONSES =====
    'generate random number': function(){
      return 'Here’s a random number: ' + Math.floor(Math.random() * 100);
    },
    'give me a unique id': function(){
      return 'Sure! here`s  a unique ID:' + crypto.randomUUID();
    },
    'tell me a tech joke': 'Why do programmers prefer dark mode? Because light attracts bugs! 😄',
    'who are you': 'I’m your friendly chatbot assistant, built with React!',
    'thanks': 'You’re welcome! Happy to help 😊'
  }
)
})




            return(
              <div className="app-container">
                  <ChatMessages
                    chatMessages={chatMessages}
                  />
                   <ChatInput
                  chatMessages = {chatMessages}
                  setChatMessages = {setChatMessages}
                  />

              </div>
            );
        }

export default App
