import { endpoint } from '../page';

export const PedirDatos = async () => {
    try {
        //Cambiar enlace
        const response = await fetch(`${endpoint}communities/getItems`)
        if (!response.ok) {
          throw new Error('Error Pedir Datos');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
    }
    //A cambiar luego
}