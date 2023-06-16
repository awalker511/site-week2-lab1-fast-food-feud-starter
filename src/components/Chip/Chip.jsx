import { useState } from "react";
import "./Chip.css";

export function Chip({ label = "", isActive = true, handleclick }) {
  const [buttonClass, setButtonClass] = useState(true);

  return (
    <button onClick={handleclick} className={isActive ? "chip active" : "chip"}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  );
}

export default Chip;
