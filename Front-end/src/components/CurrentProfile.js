'use client'

import { useContext, useState } from 'react';
//import { UserContext } from '@/app/user-context';
import Image from 'next/image'
import Tag from './Tag';
import ProfileTemp from '../resources/images/ProfileTemp.png';

export default function CurrentProfile() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("")
    const [tag, setTag] = useState("")

    return (   
        <div>
            <div>
                <h2>Tu perfil {name ? name : "Usuario"}</h2>
                <Image src={ProfileTemp} className="rounded mt-3" alt="profile picture"/>
            </div>
            <h5>CORREO ELECTRÓNICO</h5>
            <div className='d-inline-flex'>
            <h5>{email}</h5>
            </div>
            <h5>ROLES</h5>
            <div className='d-inline-flex'>
                <Tag id={tag}/>
            </div>
            <h5>BIOGRAFIA</h5>
            <div>
                <h5>{bio}</h5>
            </div>
            <h5>ACTIVIDADES QUE AS GUARDADO</h5>
        </div>
        
    )
}