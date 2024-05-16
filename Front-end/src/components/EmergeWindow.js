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
            <h1 className="font-extrabold font-Montserrat text-3xl sm:text-5xl">Editar perfil</h1>
            <p class="text-xs text-gray-600 mt-2 text-center mb-[-18px]">
                ¿Estás seguro/a de que quieres volver sin guardar los cambios realizados? 
            </p>
            <button 
                class="w-full bg-blue-600 text-white py-2 rounded"
                >
                    sí, VOLVER
            </button>
            <button class="w-full bg-white text-blue-600 py-2 rounded border-2 border-blue-600">NO, GUARDAR CAMBIOS</button>
        </div>
    )
}