import { ItemId } from "../App";

export function Item({text, handleClick }: { id:ItemId, text: string, 
  handleClick: ()=> void }) {

  return (
    <li>
      {text}
      <button id="rmbtn" onClick={handleClick}>
        {" "}
        Eliminar
      </button>
    </li>
  );

}
