'use client'

import { useRouter } from 'next/navigation'
import { useContext, useState, useEffect } from 'react'
//import { UserContext, createCurrentUser } from '../../user-context'
import Image from 'next/image'
import Tag from '@/components/Tag'
import ProfileTemp from '../../../resources/images/profileTemp.png';


function EditarPerfil(){
	
	//definir todas las variables necesarias
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordrep, setPasswordrep] = useState("")
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [apellido1, setApellido1] = useState("")
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
                surname: setApellido1,
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.substr(0, 5) === 'image') {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImageSrc('../../../resources/images/profileTemp.png');
        }
    };

    function ToggleSwitch({ enabled, setEnabled }) {
        return (
            <div className="flex items-center justify-start w-full py-2">
            <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
              <div className="relative">
                <input
                  id="toggle"
                  type="checkbox"
                  className="sr-only"
                  checked={enabled}
                  onChange={() => setEnabled(!enabled)}
                />
                {/* Este es el fondo del toggle switch */}
                <div className="block bg-gray-200 w-10 h-6 rounded-full"></div>
                {/* Este es el círculo del toggle switch que se mueve */}
                <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                  enabled ? 'transform translate-x-4' : ''
                }`}></div>
              </div>
              {/* Este es el texto al lado del toggle switch */}
              <span className="ml-3 text-gray-700 text-sm">
                Mostrar en tu perfil público las actividades a las que has asistido
              </span>
            </label>
          </div>
        );
      }


    return (
        <div className='text-center'>
            <div className="flex justify-center items-center h-screen">
                <div className='mb-4'>
                <h2>Editar perfil</h2>
                    <Image 
                        src= {ProfileTemp} 
                        width={160} 
                        height={160} 
                        className="rounded-full" 
                        alt="profile picture"
                    />
                    </div>
                    <div>
                    <input 
                        type="file" 
                        name="profileImage" 
                        accept="image/*" 
                        className="mt-2" 
                        onChange={handleImageChange}
                    />
                </div>
               
                    <input 
                        type='text' 
                        placeholder='Nombre' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <input 
                        type='text' 
                        placeholder='Apellido/s' 
                        value={apellido1}
                        onChange={(e) => setApellido1(e.target.value)}
                        className="p-2 border rounded"
                    />
                    </div>
                    <div>
                    <h2>Biografia</h2>
                    <textarea 
                        placeholder='Biografía' 
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className='p-2 border rounded' 
                        rows="5"
                        cols="50" 
                    />
                        <div className="p-6">
                            <ToggleSwitch enabled={valido} setEnabled={setValido} />
                        </div>  
                    </div>
                    <div>
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Guardar
                    </button>
                
            </div>
        </div>
    );
}

export default EditarPerfil;