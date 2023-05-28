import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import image1 from "./1.png";

const App = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const [value, setValue] = useState(5);
  const [color, setColor] = useState("black");


  //change font size
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  //change color
  const colorChange = (e) => {
    setColor(e.target.value);
  };

  //settoDraw
  const setToDraw=()=>{
    contextRef.current.globalCompositeOperation='source-over';
  }

  //settoErase
  const setToErase=()=>{
    contextRef.current.globalCompositeOperation='destination-out';
  }

  //saveimage
  const saveImage=(event)=>{
    let link=event.currentTarget;
 
    link.setAttribute('download','canvas.png')
   
    let image = canvasRef.current.toDataURL('image/png')
    console.log(image);
    link.setAttribute('href',image);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 900;
    canvas.height = 600;
    // canvas.style.width = `${window.innerWidth}px`;
    // canvas.style.height = `${window.innerHeight}px`;
    canvas.style.border = "2px solid black";

    //Draw
    const context = canvas.getContext("2d");
    // context.scale(2, 2);
    context.LineCap = "round";

    contextRef.current = context;
  }, []);

  useEffect(()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = color;
    context.lineWidth = value;
  },[value,color])

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  console.log(value);
  return (
    <>
      <div className="container grid">
        <div>
          <h1>Answer this question</h1>
          <img src={image1} alt="" style={{ width: "100%" }} />
          <div className="tool">
            <div>
              <label htmlFor="">Font Size</label>
              <select value={value} onChange={handleChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="18">18</option>
                <option value="24">24</option>
                <option value="32">32</option>
                <option value="48">48</option>
                <option value="64">64</option>
                <option value="72">72</option>
                <option value="108">108</option>
              </select>
            </div>

            <div>
              <label htmlFor="">Color</label>
              <select value={color} onChange={colorChange}>
                <option value="black">black</option>
                <option value="blue">blue</option>
                <option value="red">red</option>
              </select>
            </div>

          <div>
          <button onClick={setToDraw}>
              Draw
            </button>
          <button onClick={setToErase}>
              Erase
            </button>

          </div>
            <a id="download " href="download_link" onClick={saveImage}>Download Image</a>
          </div>
        </div>

        <canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        />
      </div>
    </>
  );
};

export default App;
