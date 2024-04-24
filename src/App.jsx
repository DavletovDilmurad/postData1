import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [imgInput, setImgInput] = useState("");

  useEffect(() => {
    fetch("https://9725bae4d188cbeb.mokky.dev/data1")
      .then((response) => response.json())
      .then((result) => setState(result));
  }, []);
  const deleitem = (id) => {
    console.log(id);
    fetch(`https://9725bae4d188cbeb.mokky.dev/data1/${id}`, {
      method: "DELETE",
    });
  };
  const postData = () => {
    fetch("https://9725bae4d188cbeb.mokky.dev/data1", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: titleInput,
        price: priceInput,
        img: imgInput,
      }),
    })
      .then((response) => response.json())
      .then((result) => setState([result, ...state]));
  };
  const addData = () => {
    postData();
  };
  const deleteCard = (id) => {
    deleitem(id);
    const newData = state.filter((item) => item.id !== id);
    setState(newData);
  };
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-5">
        <input
          className="border text-gray  h-[50px]  pl-[10px] text-[20px]"
          type="text"
          onChange={(e) => setTitleInput(e.target.value)}
          placeholder="title"
        />
        <input
          className="border text-gray h-[50px] pl-[10px] text-[20px] "
          type="text"
          onChange={(e) => setPriceInput(e.target.value)}
          placeholder="price"
        />
        <input
          className="border text-gray h-[50px]  pl-[10px] text-[20px]"
          type="text"
          onChange={(e) => setImgInput(e.target.value)}
          placeholder="img"
        />
        <button
          onClick={() => addData()}
          className="bg-green-500 text-white h-[40px]"
        >
          add
        </button>
      </div>
      <div className="grid grid-cols-5  gap-10 mt-10">
        {state.map((val) => {
          return (
            <div key={val.id} className="border w-[300px] p-4">
              <img className=" h-[300px] rounded-lg" src={val.img} alt="" />
              <p>{val.title}</p>
              <p className="text-2xl">{val.price}</p>
              <button
                onClick={() => deleteCard(val.id)}
                className=" w-[100%] bg-red-500 h-10 text-white rounded-xl"
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
