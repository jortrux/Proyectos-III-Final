'use client'

import { useRouter } from 'next/navigation'
import { useContext, useState, useEffect } from 'react'
//import { UserContext, createCurrentUser } from '../../user-context'
import Image from 'next/image'
import Tag from '@/components/Tag'
import ProfileTemp from '../../../resources/images/profileTemp.png';
import EmergeWindow from '@/components/EmergeWindow'
import BackArrow from '../../../resources/images/backArrow.png';


function EditarPerfil(){
	
    const [colorFondo, setColorFondo] = useState('#FFE802');
    const [error, setError] = useState(false);
	//definir todas las variables necesarias
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordrep, setPasswordrep] = useState("")
    const [name, setName] = useState("Oscar")
    const [bio, setBio] = useState("hola soy estudiante")
    const [apellido1, setApellido1] = useState("Maestre Gonzalez")
	const [genero, setGenero] = useState("")
    const [grado, setGrado] = useState("")
    const [año, setAño] = useState(0)
    const [valido, setValido] = useState("")
    const [rol, setRol] = useState("")
    const [image, setImage] = useState(ProfileTemp)
    const [tag, setTag] = useState("estudiante")
    const [tagList, setTagList] = useState([])

    const [nameBorrador, setNameBorrador] = [name, setName]
    const [apellido1Borrador, setApellido1Borrador] = [apellido1, setApellido1]
    const [bioBorrador, setBioBorrador] = [bio, setBio]
    const [validoBorrador, setValidoBorrador] = [valido, setValido]
    const [imageBorrador, setImageBorrador] = [image, setImage]

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
                setImageBorrador(reader.result);
            };
            reader.readAsDataURL(file);
        } 
    };

    
    function ToggleSwitch({ enabled, setEnabled }) {
        return (
            <label htmlFor="toggle" className="inline-flex items-center cursor-pointer mt-[40px]">
              <div className="relative">
                <input
                  id="toggle"
                  type="checkbox"
                  className="sr-only"
                  checked={enabled}
                  onChange={() => setEnabled(!enabled)}
                />
                {/* Este es el fondo del toggle switch */}
                <div className={`block bg-gray-200 w-10 h-6 rounded-full transition ${
                  enabled ? 'block bg-blue-400 w-10 h-6 rounded-full ' : ''}`}></div>
                {/* Este es el círculo del toggle switch que se mueve */}
                <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                  enabled ? 'transform translate-x-4 ' : ''}`}></div>
            
              </div>
            </label>
        );
      }


      function guardarCambios() {
        // Suponiendo que tienes variables o estados de los que obtendrás los nuevos valores
        setImage(imageBorrador);
        setName(nameBorrador);
        setApellido1(setApellido1Borrador);
        setBio(bioBorrador);
        router.push("profile");
    }

    function irAtras() {
        window.location.href = 'http://localhost:3000/profile';
    }

    const handleErrorMessage = () =>{
        if(error == "1")
            setError("0");
        else
            setError("1");
      }

    return (
        <div class="bg-[#FFFFFF]">
            <div class="absolute left-2 top-20">
                <button class="flex-1 justify-center block font-semibold sm:mt-[30px]">
                    <Image 
                        src= {BackArrow} 
                        width={30} 
                        height={30} 
                        className="rounded-full" 
                        alt="back"
                        onClick={ irAtras}
                        />
                </button>
            </div>
            <div class="text-center max-w-lg max-h-sm mx-auto sm:max-w-xl left-0 top-25  p-1 sm:text-left">
                <div class="container mx-auto p-4 flex rounded-lg justify-center">
                    <h1 className="font-extrabold font-Montserrat text-3xl sm:text-5xl sm:absolute sm:left-20 sm:top-13">Editar perfil</h1>
                </div>
            </div>
            <div class="max-w-lg max-h-sm mx-auto sm:max-w-4xl left-0 top-25 p-1">
                <div class="container mx-auto p-4 flex flex-col rounded-lg ">
                    <div class="sm:flex-row items-center mt-4 ">
                        <div class="sm:flex items-center mt-4 flex-1 ">
                            <div class="max-w-sm max-h-sm mx-auto h-45 sm: left-0 top-25 max-w-7xl flex-1 ">
                                <div class="container mx-auto p-4 flex flex-col rounded-lg ">
                                    <div class="flex justify-center items-baseline">
                                        <div class="relative">
                                            <Image 
                                                src= {image} 
                                                className="rounded-full mt-[-80px] border-4 border-[#FFE802]" 
                                                alt="profile picture"
                                                width={200} 
                                                height={200} 
                                            />
                                            <label class="absolute bottom-0 right-0  rounded-full p-2"
                                            htmlFor = "selector"
                                            >
                                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24Z" fill="#0065EF"/>
                                                <path d="M14 29.8339V34H18.1661L30.4533 21.7128L26.2872 17.5467L14 29.8339ZM33.675 18.491C34.1083 18.0578 34.1083 17.3579 33.675 16.9246L31.0754 14.325C30.6421 13.8917 29.9422 13.8917 29.509 14.325L27.4759 16.358L31.642 20.5241L33.675 18.491Z" fill="white"/>
                                                </svg>

                                            </label>
                                            <input class="absolute bottom-0 right-0 bg-blue-200 rounded-full p-2"
                                                type="file" 
                                                name="profileImage" 
                                                id = "selector"
                                                accept="image/*" 
                                                className="hidden" 
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    </div>
                                    <p class="text-xs text-gray-600 mt-2 text-center mb-[-18px]">
                                        La fotografía deberá subirse en formato jpg o .png.
                                    </p>
                                </div>
                            </div>
                            <div class="max-w-sm max-h-sm mx-auto items-baseline h-100 sm: left-0 top-25 max-w-sm flex-1 mt-[-28px] ">
                                <div class="container mx-auto p-4 flex flex-col rounded-lg ">
                                    <div class="flex items-center mt-4">
                                        <div class="flex-1">
                                            <label class="block text-sm font-semibold text-gray-700">Nombre</label>
                                            <input 
                                                type='text' 
                                                placeholder='Nombre' 
                                                value={nameBorrador}
                                                onChange={(e) => setNameBorrador(e.target.value)}
                                                className="p-1 border rounded w-40 "
                                            />
                                        </div>
                                        <div class="flex-1 ml-2">
                                            <label class="block text-sm font-semibold text-gray-700">Apellido/s</label>
                                            <input 
                                                type='text' 
                                                placeholder='Apellido/s' 
                                                value={apellido1Borrador}
                                                onChange={(e) => setApellido1Borrador(e.target.value)}
                                                className="p-1 border rounded w-40"
                                            />
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <label class="block text-sm font-semibold text-gray-700">BIOGRAFÍA</label>
                                        <textarea 
                                                placeholder='Biografía' 
                                                value={bioBorrador}
                                                onChange={(e) => setBioBorrador(e.target.value)}
                                                className='p-2 border rounded w-full' 
                                                rows="5"
                                                cols="50" 
                                            />
                                        <p class="text-right text-xs text-gray-600">{bio.length}/200 caracteres</p>
                                    </div>
                                    <div class="flex items-center justify-between mt-4 mt-[-28px]">
                                        <label class="text-sm text-gray-700 w-3/4 mt-[40px]" for="public_activities">Mostrar en tu perfil público las actividades a las que has asistido</label>
                                        <ToggleSwitch enabled={validoBorrador} setEnabled={setValidoBorrador} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-sm xl:max-h-sm mx-auto sm: left-0 top-25 max-w-sm sm:ml-[-28px] sm:mt-[-70px] ">
                            <div class="container mx-auto p-4 flex flex-col rounded-lg ">
                                <div class="mt-6 space-y-4 sm:ml-[80px]">
                                    <button 
                                    class="w-full bg-white text-blue-600 py-2 rounded border-2"
                                    onClick={handleErrorMessage}
                                    >CERRAR SESIÓN</button>
                                    <button class="w-full bg-white text-red-500 py-2 rounded border-2 border-red-500">ELIMINAR CUENTA</button>
                                    <button 
                                    class="w-full bg-blue-600 text-white py-2 rounded"
                                    onClick={guardarCambios}>
                                        GUARDAR CAMBIOS
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={error ? "flex justify-center mt-1" : "flex justify-center mt-1 hidden"}>
            <EmergeWindow/>
            </div>
        </div>
    );
}

export default EditarPerfil;