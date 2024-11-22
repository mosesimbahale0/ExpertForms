# ExpertForms

<details>
  <summary><a id=" Table of Contents"></a> Table of Contents</summary>

- [Introduction](#introduction)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
- [Running the Showcase Application](#running-the-showcase-application)
- [Contribution](#contribution)
  - [How You Can Help](#how-you-can-help)
  - [Contribution Process](#contribution-process)
- [Licence](#licence)

</details>

---

<details>
  <summary><a id="introduction"></a>Introduction</summary>
  
  **ExpertForms** is a content moderation system that implements a proactive content moderation, inspired by expert systems. By leveraging **Web AI** and rule-based decision-making, it identifies and addresses inappropriate or harmful content in real time. This project aims to reduce reliance on manual moderation while ensuring ethical, scalable, and efficient solutions.
  
  - We address moderation at the source: forms.
  
  This system combines customizable rules and Web AI to tackle real-world challenges in content moderation across various platforms.
  
  Read more in the [White Paper](https://1drv.ms/w/c/cc19bae930a8cf43/EVcmwWpJUPpLth40f5enth8BCkXSC6kpnpWmWDdHvZ3VWQ).
</details>


---

<details>
  <summary> <a id="usage"></a>  Usage</summary>

The ExpertForms package can be integrated into your application as follows:

Import the package as a dependency in your project.

`npm i expertforms`

Define your moderation rules and logic.
Use the API to evaluate and handle user-generated content dynamically.

</details>

---

<details>
  <summary> <a id="features"></a>  Features</summary>

- **Rule-Based Decision Making**: Employs dynamic logic to evaluate content efficiently.
- **Customizable Rules**: Provides flexibility for defining moderation criteria based on unique needs.
- **Scalable Architecture**: Designed for seamless integration into diverse web platforms.
- **Proactive Moderation**: Detects and addresses harmful content in real-time.

</details>

---

<details>
  <summary> <a id="folder-structure"></a>  Folder Structure</summary>

```plaintext
expertforms/
├── package/     # Core NPM package for the content moderation system
├── web/         # Showcase application demonstrating the implementation of Expert Forms on web platform
```

</details>

---

<details>
  <summary>  <a id="installation"></a>Showcase App Installation</summary>

## Prerequisites

Ensure Node.js , npm and git are installed on your system.

- Clone the Repository
- Clone the repository to your local machine

- `git clone https://github.com/mosesimbahale0/ExpertForms.git `

- Navigate to the package Directory
- Move into the core package folder and install its dependencies:

```
cd expertforms/package
npm install
```

</details>

---

<details>
  <summary> <a id="running-the-showcase-application"></a> Running the Showcase Application</summary>
The web folder contains a demonstration of the system in a practical web environment:

Navigate to the web directory:

`cd expertforms/web`

`npm run dev`

</details>

---

<details>
  <summary> <a id="contribution"></a> Contribution</summary>

We welcome contributions to improve and expand **ExpertForms**. Here are some ways you can contribute:

### How You Can Help

- **Code**: Fix bugs, add new features, or optimize performance.
- **Documentation**: Enhance clarity, expand explanations, and improve readability.
- **Testing**: Write and improve test cases to ensure system reliability.
- **Tools**: Create additional utilities to extend the system's functionality.
- **Examples**: Share real-world use cases and implementation examples.
- **Design**: Refine the user interface or suggest architectural improvements. Link to Design -[figma](<[https://github.com/mosesimbahale0/ExpertForms/discussions](https://www.figma.com/design/xoLuBDoiVpvwwQbLbe9iv2/ExpertForms?node-id=0-1&t=csHT4KwM4e2JvjS8-1)>)

### Contribution Process

1. **Fork the Repository**: Create your own copy of the repository.
2. **Make Your Changes**: Implement the desired modifications.
3. **Submit a Pull Request**: Provide a clear description of your changes and their purpose.

For significant changes, please open an issue first to discuss your proposal with the maintainers.

</details>

---

<details>
  <summary> <a id="licence"></a> MIT License</summary>

MIT License

Copyright (c) 2023 Moses Imbahale

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</details>
