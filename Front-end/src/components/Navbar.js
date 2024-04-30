"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/BurgerMenu.module.css';
import './Navbar.css'

import Link from 'next/link'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
/*Imagenes a usar*/
import hamburgerImage from '../resources/images/menu.png'
import closeImage from '../resources/images/close.png'
import lupeImage from '../resources/images/find.png'
import profileImage from '../resources/images/profile.png'
import logoImage from '../resources/images/logo.png'
import sunImage from '../resources/images/sun.png'
import moonImage from '../resources/images/moon.png'


//Después de CSS
import './Navbar.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const Router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const home = () => {
        Router.push('/')//Aqui va la ruta de la pagina principal
    }
    const search = () => {
        Router.push('./search/')//Aqui va la ruta de la pagina de busqueda
    }
    const profile = () => {
        Router.push('./profile/') //Aqui va la ruta de la pagina de perfil
    }
    return (
        <main>
            <div className="navbar">
                <button className="btn" onClick={toggleMenu}><Image src={hamburgerImage} alt="Close Image" whidth={25} height={25}></Image> </button>
                <ul className="d-flex align-items-center mb-0 me-2">
                    <li>
                        <button className="btn" onClick={search}><Image src={lupeImage} alt="Lupe Image" whidth={25} height={25}></Image></button>
                    </li>
                    <li>
                        <button className="btn" onClick={profile}><Image src={profileImage} alt="Profile Image" whidth={25} height={25}></Image></button>
                    </li>
                    {<li>
                        <button className="btn" onClick={home}><Image src={logoImage} alt="Logo Image" whidth={25} height={25}></Image></button>
                    </li>}
                </ul>
            </div>
            <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                <button className="btn mt-2 ms-1" whidth={25} height={25} onClick={toggleMenu}><Image src={closeImage} alt="Close Image" whidth={25} height={25}></Image> </button>
                <ul className="d-flex flex-column align-items-center list-unstyled">
                    <li>
                        <Link href="/register">Actividades(No tiene link todavia)</Link>
                    </li>
                    <li>
                        <Link href="/login">Comuidades(No tiene link todavia)</Link>
                    </li>
                    <li>
                        <Link href="/forgot">Notificaciones(No tiene link todavia)</Link>
                    </li>
                    <li>
                        <Link href="/comunities">Normas(No tiene link todavia)</Link>
                    </li>
                    <li>
                        <Link href="/comunities">Politica de privacidad(No tiene link todavia)</Link>
                    </li>
                </ul>
                <div className="align-self-end d-flex">
                    <button className="btn ms-1 me-auto p-2"><Image src={sunImage} alt="Light/Dark mode Image" whidth={25} height={25}></Image></button>
                    <button className="btn me-2 ms-auto p-2"> EN (Español)</button>
                </div>
            </div>
        </main>
    );
}
