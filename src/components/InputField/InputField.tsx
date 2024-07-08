import React from "react";
import './InputField.css'
interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleInputFieldSumbission: (e: React.FormEvent) => void;

}

const InputField:React.FC<Props> = ({todo,setTodo,handleInputFieldSumbission}) => {
    return (
    <section >
      <form onSubmit={handleInputFieldSumbission}>
        <div className="input-field-container">
          <input type="text" className="input-field-input" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
          <button type="submit" className="input-field-submit">
            Go
          </button>
        </div>
      </form>
    </section>
  );
};

export default InputField;
