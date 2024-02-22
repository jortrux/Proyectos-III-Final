import Link from 'next/link'
//Después de CSS
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar py-5">
            <a href="/" className="text-3xl font-bold link-underline link-underline-opacity-0"><h1>U-Tad</h1></a>
            <ul>
                <li>
                    <a href="../login" className="link-underline link-underline-opacity-0">Login</a>
                </li>
                <li>
                    <a href="../register" className="link-underline link-underline-opacity-0">Register</a>
                </li>
                {/* <li>
                    <a href="../forgot/mail" className="link-underline link-underline-opacity-0">Password</a>
                </li> */}
            </ul>
        </nav>
    )
}