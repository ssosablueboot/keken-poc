import axios from 'axios';

const ServicioCodigoPostal = {
  async getCodigo(COD_TIENDA) {
    const url = "./api_management_dbkuo/CODIGO_TIENDA"; // Reemplaza con la URL de tu API en Api-management Service.
    
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });

      // Aquí puedes manejar la respuesta de la API según tus necesidades.
      console.log(response.data);
      return {
        data: response.data,
        status: true
        };
    } catch (error) {
      // Aquí puedes manejar el error en caso de que la solicitud falle.
      console.error(error);
      return {
        data: {},
        status: false
        };
    }
  }
};

export default ServicioCodigoPostal;