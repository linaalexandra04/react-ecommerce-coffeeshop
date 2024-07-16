import { storage } from '../firebase'; 


export const getImageUrl = async (imageName) => {
  try {
    const imageRef = storage.ref(`products/${imageName}`); 
    const url = await imageRef.getDownloadURL();
    return url;
  } catch (error) {
    console.error('Error al obtener la URL de la imagen:', error);
    return null;
  }
};


