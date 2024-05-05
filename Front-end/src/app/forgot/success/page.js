import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";
import backArrow from "../../../resources/images/backArrow.png"
import passSuccess from "../../../resources/images/passSuccess.png"

export default function Success() {
  return (
    <main>
        <div className="flex space-x-4 mx-3 mt-2">
            <Image src={backArrow} width={32} height={32} alt="Esto no furula" className="box-content h-8 w-8 self-center"></Image>
            <h1 className="font-extrabold font-Montserrat text-3xl">Recuperación de contraseña</h1>
        </div>
        <div className="flex mx-3 gap-3 mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
            <div className="w-full bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"></div>
        </div>
        <div className="flex justify-center mt-2 mb-3">
            <Image src={passSuccess} width={219} height={256} alt="Esto no furula" className="box-content self-center"></Image>
        </div>
        <div>
            <p className="mx-3 font-Montserrat">¡Tu contraseña se ha cambiado con éxito!</p>
        </div>
        <div className="grid justify-items-center mt-5">
            <button className="bg-blue-600 text-white text-xl font-bold font-Montserrat py-3 px-4 rounded-lg">INICIAR SESIÓN</button>
        </div>
        <div className="flex justify-center mt-1">
            <p className="text-blue-500 underline font-Montserrat">Volver a la página de inicio</p>
        </div>
    </main>
  );
}