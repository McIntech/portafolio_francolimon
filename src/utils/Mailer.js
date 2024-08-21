import axiosInstance from '../utils/AxiosConfig';

const MailerService = {
  create(contactData) {
    console.log('Enviando el formulario de contacto con los datos:', contactData);

    return axiosInstance.post('/api/v1/contacts', { contact: contactData })
      .then(response => {
        console.log('Formulario de contacto enviado con éxito:', response.data);
        return response.data;
      })
      .catch(error => {
        console.error('Error al enviar el formulario de contacto:', error.message);

        // Proporciona más detalles si están disponibles
        if (error.response) {
          console.error('Detalles del error:', error.response.data);
        } else {
          console.error('No se pudo conectar con el servidor. Por favor, verifica tu conexión a internet.');
        }

        throw error;
      });
  },
};

export default MailerService;