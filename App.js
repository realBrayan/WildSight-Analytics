import React, { useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter(file => file.type === 'image/jpeg');

    imageFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const newImage = {
          src: reader.result,
          id: Math.random().toString(36).substr(2, 9), // Unique ID for the image
          selected: false
        };
        setImages(prevImages => [...prevImages, newImage]);
      };
      reader.readAsDataURL(file);
    });
  };

  const toggleSelect = (id) => {
    setImages(images.map(img => img.id === id ? { ...img, selected: !img.selected } : img));
  };

  const deleteImage = (id) => {
    setImages(images.filter(img => img.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>Upload Images</h2>
      <input 
        type="file" 
        accept="image/jpeg" 
        multiple 
        onChange={handleFileChange} 
        style={styles.fileInput}
      />
      <div style={styles.previewContainer}>
        {images.map(image => (
          <div key={image.id} style={styles.imageContainer}>
            <img 
              src={image.src} 
              alt="Preview" 
              style={{ 
                ...styles.imagePreview, 
                border: image.selected ? '3px solid #007bff' : '2px solid #ddd' 
              }} 
              onClick={() => toggleSelect(image.id)}
            />
            <button 
              style={styles.deleteButton} 
              onClick={() => deleteImage(image.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '50px',
  },
  previewContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px',
  },
  imageContainer: {
    position: 'relative',
    display: 'inline-block',
    margin: '10px',
    borderRadius: '8px',
  },
  imagePreview: {
    width: '150px',
    height: 'auto',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  deleteButton: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    textAlign: 'center',
    cursor: 'pointer',
  },
  fileInput: {
    padding: '10px',
    marginTop: '10px',
    cursor: 'pointer',
  }
};

export default ImageUpload;

