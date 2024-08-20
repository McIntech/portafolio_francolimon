import axiosInstance from '../utils/AxiosConfig';

const MailerService = {
  create(contactData) {
    console.log('Intentando enviar el formulario de contacto con los siguientes datos:', contactData);
    return axiosInstance.post('/api/v1/contacts', { contact: contactData })  // Cambiado 'post_acceptance' a 'contact'
      .then(response => {
        console.log('Formulario de contacto enviado con éxito:', response.data);
        return response.data;
      })
      .catch(error => {
        console.error('Error al enviar el formulario de contacto:', error.message);
        console.error('Detalles del error:', error.response?.data || 'No additional details available');
        throw error;
      });
  },
};

export default MailerService;