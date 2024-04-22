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
                <Image src={ProfileTemp} className="rounded mt-3" alt="profile picture"/>
                <h2>Bienvenido {name ? name : "Usuario"}</h2>
            </div>
            <div className='d-inline-flex'>
                <Tag id={tag}/>
            </div>
            <div>
                <textarea placeholder='Biografia' value = {bio ? bio : ""} className='border border-primary rounded' size="60" cols="40" rows="5"/>
            </div>
        </div>
        
    )
}