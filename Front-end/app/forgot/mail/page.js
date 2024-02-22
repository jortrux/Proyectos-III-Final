'use client'

import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState("")

  const redirigir = (code) => {
    console.log("Code: ", code.message)
    if(code.status==200){
        router.push(window.location.href = `/forgot/code/${code.message.id}`)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email
    }

    console.log(user);
    fetch("http://87.221.139.203:443/api/auth/password/email", {
                method: "POST",
                headers: {
                
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .then((data) => redirigir(data))
                //.then(router.push("../forgot/code"))
  }

  return (
    <main>
      <div className=" text-center p-5">
        <div className="rounded-3 bg-dark-subtle p-3">
          <form onSubmit={handleSubmit} className="rounded-3 bg-dark-subtle p-3">
            <h3>Introduce tu mail</h3>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="**********@**********.com"></input>
            <div className=" p-2">
              <button type="submit" id="registrar" className="col">Send</button>
              <Link type="button" className="btn btn-primary" href="../forgot/code">Send</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
