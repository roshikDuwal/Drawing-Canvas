import React, { useEffect, useRef, useState } from "react";
import "./style.css";

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
  const setToDraw = () => {
    contextRef.current.globalCompositeOperation = "source-over";
  };

  //settoErase
  const setToErase = () => {
    contextRef.current.globalCompositeOperation = "destination-out";
  };



  //saveimage
  const saveImage = (event) => {
    let link = event.currentTarget;

    link.setAttribute("download", "canvas.png");

    let image = canvasRef.current.toDataURL("image/png");
    console.log(image);
    link.setAttribute("href", image);
  };

  ///increase decrease size and color
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = color;
    context.lineWidth = value;
  }, [value, color]);


  const [val] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth; 
    canvas.height = 600; 
   

    canvas.style.backgroundColor = "rgb(224, 224, 224)";
    canvas.style.borderRadius = "20px";
    canvas.style.cursor = "crosshair";
    canvas.style.maxWidth = "100%";
    //Draw
    const context = canvas.getContext("2d");
    // context.scale(2, 2);
    context.LineCap = "round";
    contextRef.current = context;

  }, [val]);

  //start Drawing
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  //Finish Drawing
  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  //Drawing
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <>
      <div className=" flex-col w-full items-center justify-center border-2 m-2 p-4">
        <div className="flex flex-wrap gap-3 m-2  p-2 w-full border-2 items-center justify-center">
          <div>
            <label htmlFor="" className="border-2 px-2 py-1">
              Font Size
            </label>
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
            <label htmlFor="" className="border-2 p-2">
              Color
            </label>
            <select value={color} onChange={colorChange}>
              <option value="black">black</option>
              <option value="blue">blue</option>
              <option value="red">red</option>
            </select>
          </div>

          <div className=" flex gap-2">
            <button className="border-2 px-2 py-1" onClick={setToDraw}>
              Draw
            </button>
            <button className="border-2 px-2 py-1" onClick={setToErase}>
              Erase
            </button>
          </div>

          <a id="download " className="border-2 px-2 py-1" href="download_link" onClick={saveImage}>
            Download 
          </a>
        </div>

        <div>
          <canvas
            id="0"
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            ref={canvasRef}
          />

          {val.map((data, index) => {
            return (
              <canvas
                key={index}
                id={index + 1}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
