# React tutorial
## Starting the react project:

```npm create vite@latest```<br>
```cd my-react-app```<br>
```npm install```<br>
```npm run dev``` - starts the development server<br>

## Further steps
1. Delete all code inside App function and imports in App.jsx;
2. Delete App.css file;
3. Create file Header.jsx and write exportable function;
4. In App.jsx import Header;
5. In App.jsx, when returning multiple components, enclose them into a "Fragment": ```<> </>```;
6. Inside the element file in html it is possible to insert JS like this ```<p>&copy; {new Date().getFullYear()} Your website name</p>```;
7. Assign classes like this: ```className="card"```;
8. There are 3 types of CSS stylling:
    1. General (when CSS for all components is in index.css file);
    2. Modular (when each component and its styles are located in its own folder) - see Button folder;
    3. Inline (when styles are recorded into an object inside the component jsx file) - see Button2.jsx file;
9. Props and propTypes - see Student.jsx file;
10. Conditional Rendering - see UserGreeting.jsx file;