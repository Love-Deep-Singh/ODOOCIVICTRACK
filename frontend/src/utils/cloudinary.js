export const uploadToCloudinary = async (file) => {

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset',"rxfrpais"); 
  

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/dsinnotgj/image/upload`, {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    return data.secure_url; // This is the image URL you store in MongoDB
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
};