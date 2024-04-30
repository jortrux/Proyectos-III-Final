import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" text-center p-5">
        <div className="rounded-3 bg-dark-subtle p-3">
          <h4>Introduce la nueva contraseña</h4>
          <input type="password" placeholder="********"></input>
          <h4>Repite la nueva contraseña</h4>
          <input type="password" placeholder="********"></input>

          <div className=" p-2">
              <Link type="button" className="btn btn-primary" href="../">Send</Link>
          </div>
        </div>
      </div>
    </main>
  );
}