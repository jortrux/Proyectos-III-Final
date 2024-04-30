import { useRouter } from 'next/navigation'
import { endpoint } from '../page';

//Cambiar nombre luego
export const CrearActividad = (e) => {
    const router = useRouter()

    e.preventDefault();

    const activity = {
        title: title,
        objetive: objetivo,
        image: image,
        space: space,
        date: date,
        time: time,
        privacidad: privacidad,
        titulacion: titulacion,
        curos: curso,
        grupo: grupo,
        asistentes: asistentes
    }

    //cambiar enlace esto es de registro
    fetch(`${endpoint}auth/register`, {
                method: "POST",
                headers: {
                
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(activity)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
            
            //router.push(`/registered-users/${user.id}`)

    //A cambiar luego
}

export const PedirActividades = async () => {
    try {
        //Cambiar enlace
        const response = await fetch(`${endpoint}communities/getItems`)
        if (!response.ok) {
          throw new Error('Error Pedir Actividades');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
    }
    //A cambiar luego
}

export const PedirInfo = async () => {
    try {
        //Cambiar enlace
        const response = await fetch(`${endpoint}communities/getItems`)
        if (!response.ok) {
          throw new Error('Error Pedir Info Actividades');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
    }
    //A cambiar luego
}

export const SalirActividad = (e) => {
    const router = useRouter()

    e.preventDefault();

    const activity = {
        title: title,
        objetive: objetivo,
        image: image,
        space: space,
        date: date,
        time: time,
        privacidad: privacidad,
        titulacion: titulacion,
        curos: curso,
        grupo: grupo,
        asistentes: asistentes
    }

    //cambiar enlace esto es de registro
    fetch(`${endpoint}auth/register`, {
                method: "PUT",
                headers: {
                
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(activity)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
            
            //router.push(`/registered-users/${user.id}`)

    //A cambiar luego
}