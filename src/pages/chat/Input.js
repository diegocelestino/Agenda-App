import React, { useState } from "react";
import InputMask from "react-input-mask";

export default function Input() {
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [error, setError] = useState("");

  const handleClick = (e) => {
    console.log(phone);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 11) {
      setPhone(value);
      setIsPhoneValid(value.length === 11);
    }
  };

  return (
    <div className="justify-self-end flex px-4 py-2 lg:p-4 gap-4 max-w-[80%] lg:max-w-[60%] rounded-md bg-white">

      <input
        className="border-b-2 focus:outline-none w-[70%]"
        type="text"
        placeholder="## ##### ####"
        value={phone}
        onChange={handleChange}
      ></input>

      {isPhoneValid && (
        <button className="bg-teal-600 rounded-xl active:scale-90 shadow-md shadow-gray-700" onClick={handleClick}>
          <p className="text-white py-1 px-2">Enviar</p>
        </button>
      )}

      {!isPhoneValid && (
        <button
          disabled
          className="bg-gray-300 rounded-xl"
          onClick={handleClick}
        >
          <p className="text-white py-1 px-2">Enviar</p>
        </button>
      )}
    </div>
  );
}
