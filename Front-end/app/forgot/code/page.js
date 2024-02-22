'use client'

import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";
import { useState } from 'react'

export default function Home() {
  const [code, setCode] = useState(0)

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

  return (
    <main>
      <div className=" text-center p-5">
        <div className="rounded-3 bg-dark-subtle p-3">
          <form onSubmit={handleSubmit} className="rounded-3 bg-dark-subtle p-3">
            <h3>Introduce el código enviado a tu mail</h3>
            <input onChange={(e) => setCode(parseInt(e.target.value))} placeholder="000000"></input>
            <div className=" p-2">
              <button type="submit" id="registrar" className="col">Send</button>
              <Link type="button" className="btn btn-primary" href="../forgot/newPass">Send</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}