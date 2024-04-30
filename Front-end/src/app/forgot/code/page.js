'use client'

import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react'
import backArrow from "../../../resources/images/backArrow.png"

export default function Code() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      code: code
    }

    console.log(user);
    fetch("http://87.221.139.203:443/api/auth/password/code", {
                method: "POST",
                headers: {
                
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .then(router.push("../forgot/code"))
  }

  const [codes, setCodes] = useState(Array(6).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    setCodes(prevCodes => {
      const newCodes = [...prevCodes];
      newCodes[index] = value;
      return newCodes;
    });
    if (value !== '' && index < codes.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && codes[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <main>
      <div className="flex space-x-4 mx-3 mt-2">
        <Image src={backArrow} width={32} height={32} alt="Esto no furula" className="box-content h-8 w-8 self-center"></Image>
        <h1 className="font-extrabold font-Montserrat text-3xl">Recuperación de contraseña</h1>
      </div>
      <div className="flex mx-3 gap-3 mt-2">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
        <div className="w-full bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"></div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
      </div>
      <div>
        <p className="mx-3 font-extralight font-Montserrat">Introduce el código enviado al correo elisa.rodriguez@live.u-tad.com para recuperar la contraseña</p>
      </div>
      <div className="my-12">
        <div className="flex justify-center">
          <div className="flex space-x-2">
            {codes.map((code, index) => (
              <input
                key={index}
                ref={ref => (inputRefs.current[index] = ref)}
                type="text"
                maxLength="1"
                value={code}
                onChange={e => handleChange(index, e)}
                onKeyDown={e => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-3xl font-Montserrat text-gray-600 font-bold border-2 border-gray-400 rounded focus:outline-none"
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-2">
            <p className="text-blue-500 underline font-Montserrat">Volver a enviar un código</p>
        </div>
      </div>
      <div className="grid justify-items-center">
        <button className=" bg-blue-600 text-white text-xl font-bold font-Montserrat py-3 px-4 rounded-lg">Continuar</button>
      </div>
    </main>
  );
}