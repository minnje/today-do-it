import "./Todo.css";

export default function Todo() {
     const title = localStorage.getItem("title");
     const content = localStorage.getItem("content");
     const time = localStorage.getItem("time");

     return (
          <div className="todo-column">
               <h1>{title}</h1>
               <p>
                    <span>{content}</span>
                    <span>{time}</span>
               </p>
          </div>
     );
}
