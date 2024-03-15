'use client'

import { useRouter } from 'next/navigation'
import { useContext, useState, useEffect } from 'react'
import { UserContext, createCurrentUser } from '../../user-context'
import Image from 'next/image'
import Tag from '@/components/Tag'


function EditarPerfil(){
	
	//definir todas las variables necesarias
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordrep, setPasswordrep] = useState("")
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [apellido1, setApellido1] = useState("")
    const [apellido2, setApellido2] = useState("")
	const [genero, setGenero] = useState("")
    const [grado, setGrado] = useState("")
    const [año, setAño] = useState(0)
    const [valido, setValido] = useState("")
    const [rol, setRol] = useState("")
    const [image, setImage] = useState("")
    const [tag, setTag] = useState("")
    const [tagList, setTagList] = useState([])

    useEffect(() => {
        const almacenTags = JSON.parse(localStorage.getItem('tags')) || [];
        setTagList(almacenTags);
      }, []);

    const handleEdit = () => {


        router.push("/profile");
    }

    const getUser = (e) => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log(valido);


            const user = {
                email: email,
                password: password,
                name: name,
                firstSurname: apellido1,
                secondSurname: apellido2,
                gender: genero,
                degree: grado,
                course: año
                //rol: rol
            }

            console.log(user);
            //setRol("user")
            fetch("http://87.221.139.203:443/api/auth/register", {
                method: "PUT",
                headers: {
                
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
            
            router.push("/profile");
            //router.push(`/registered-users/${user.id}`)
    }

    return(
        <div className='text-center'>
            <div>
                <Image src={image ? image : "/imgDefault/defaultPfP.png"} width={160} height={100} className="rounded mt-3" alt="profile picture"/>
            </div>
            <form className="upload">
                <input type="file" name="uploadFile" accept=".png" required /*onChange={(e) => setImage(e.target.value)}*//>
            </form>
            <div className='my-3'>
                <input type='text' placeholder='nombre' onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='d-inline-flex'>
                {tagList.map((tag) => (
                    <Tag id={tag} tag={tag}/>
                ))}
                <Tag id={tag}/>
            </div>
            <div className='my-3'>
                <input type='text' placeholder='Nueva etiqueta' onChange={(e) => setTag(e.target.value)}></input>
            </div>
            <div>
                <textarea placeholder='Biografia' className='border mx-5 border-primary rounded' size="60" cols="40" rows="5" onChange={(e) => setBio(e.target.value)}/>
            </div>
            <button className="text-center mt-3" onClick={handleEdit}>Guardar</button>
        </div>  
    )
}

export default EditarPerfil;