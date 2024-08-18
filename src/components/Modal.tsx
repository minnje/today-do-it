import { useState } from "react";
import "./Modal.css";
import Todo from "./Todo";

export default function Modal() {
     const [save, setSave] = useState(false);

     const handleInput = (e: { target: { name: string; value: string } }) => {
          localStorage.setItem(e.target.name, e.target.value);
     };

     const handleSave = () => {
          setSave((pre) => !pre);
     };

     return (
          <form action="">
               {save ? (
                    <Todo />
               ) : (
                    <>
                         <h1>오늘 뭐할래?</h1>
                         <input
                              type="text"
                              onChange={handleInput}
                              name="title"
                              placeholder="오늘 할 일 제목"
                         />
                         <h1>간단히 적어볼까?</h1>
                         <input
                              type="text"
                              name="content"
                              onChange={handleInput}
                              placeholder="오늘 할 일 내용을 입력합니다."
                         />
                         <h1>언제 할거야?</h1>
                         <input
                              name="time"
                              onChange={handleInput}
                              type="time"
                         />
                         <div className="btn-column">
                              <button type="submit" onClick={handleSave}>
                                   저장
                              </button>
                              <button type="button">취소</button>
                         </div>
                    </>
               )}
          </form>
     );
}
