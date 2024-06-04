import { useRef, useState } from 'react';
import './DoubleHandleRangeInput.css'

// interface DoubleHandleRangeInputProps {
// }

const DoubleHandleRangeInput = () => {
  const rangeRef = useRef<HTMLDivElement>(null);
  const [leftInput, setLeftInput] = useState(0)
  const [rightInput, setRightInput] = useState(100)
  const [leftThumbValue, setLeftThumbValue] = useState("")
  const [rightThumbValue, setRightThumbValue] = useState("")

  const onInput = (e, type: "left" | "right", oppositeInputValue: number) => {
    const { value, min: _min, max: _max } = e.target
    const val = Number(value)
    const min = Number(_min)
    const max = Number(_max)

    const newVal = Math[type === "left" ? "min" : "max"](val, oppositeInputValue)

    const precent = ((newVal - min) / (max - min)) * 100;

    const typePrecent = (type === "right" ? 100 - precent : precent) + "%";

    switch (type) {
      case "left":
        setLeftThumbValue(typePrecent)
        setLeftInput(precent)
        break;
      case "right":
        setRightThumbValue(typePrecent)
        setRightInput(precent)
        break;
      default:
        console.log("failed")
    }

    if (rangeRef.current)
      rangeRef.current.style[type] = typePrecent
  }

  return (
    <div className="doubleHandleRangeInput" >
      <input type="range" title='input-left' id="input-left" min={0} max={rightInput - 1} onInput={(e) => onInput(e, "left", rightInput)} />
      <input type="range" title='input-right' id="input-right" min={leftInput + 1} max={100} onInput={(e) => onInput(e, "right", leftInput)} />

      <div className='slider'>
        <div className="track"></div>
        <div ref={rangeRef} className="range"></div>
        <div className="thumb left" style={{ left: leftThumbValue }}></div>
        <div className="thumb right" style={{ right: rightThumbValue }}></div>
      </div>

      <div className="display-price-range">
        <label>0</label>
        <label>9999</label>
      </div>
    </div>
  )
};

export default DoubleHandleRangeInput;