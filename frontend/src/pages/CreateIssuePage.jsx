import { useState } from 'react';
import { createIssue } from '../services/issue'; // adjust path
import axios from 'axios';
import './CreateIssuePage.css'; // adjust path
import { uploadToCloudinary } from '../utils/cloudinary';

export default function Home() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: 'Roads',
    address: '',
    reporterName: '',
    isAnonymous: false,
  });

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Get user location
        let imageUrl = '';
      if (image) {
        imageUrl = await uploadToCloudinary(image).catch((err) => {
            console.error('Image upload failed:', err);
            alert('Image upload failed. Please try again.');
            setLoading(false);
            return;
            })
      }
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;

        // Optional: upload photos to some service and get URLs, here we just assume filenames
        const uploadedPhotos = photos.map((file) => file.name); // simulate upload

        const issueData = {
          ...form,
          location: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
        photos: imageUrl ? [imageUrl] : [],
        };

        const res = await createIssue(issueData);
        alert('Issue created successfully!');
        console.log(res);
        setForm({
          title: '',
          description: '',
          category: 'Roads',
          address: '',
          reporterName: '',
          isAnonymous: false,
        });
        setPhotos([]);
        setImage(null);
        setLoading(false);
      }, (error) => {
        alert('Could not get location: ' + error.message);
        setLoading(false);
      });

    } catch (err) {
      console.error(err);
      alert('Failed to create issue');
      setLoading(false);
    }
  };

  return (
   <div className="create-issue-container">
    <h2>Create Isuue</h2>

<form onSubmit={handleSubmit}>
      <h2>Create an Issue</h2>

      <label>Title</label>
      <input name="title" value={form.title} onChange={handleChange} required />

      <label>Description</label>
      <textarea name="description" value={form.description} onChange={handleChange} required />

      <label>Category</label>
      <select name="category" value={form.category} onChange={handleChange}>
        <option>Roads</option>
        <option>Lighting</option>
        <option>Water Supply</option>
        <option>Cleanliness</option>
        <option>Public Safety</option>
        <option>Obstructions</option>
      </select>

      <label>Address</label>
      <input name="address" value={form.address} onChange={handleChange} required maxLength={150} />

      <label>Reporter Name</label>
      <input
        name="reporterName"
        value={form.reporterName}
        onChange={handleChange}
        required={!form.isAnonymous}
        disabled={form.isAnonymous}
        maxLength={100}
      />

      <label>
        <input
          type="checkbox"
          name="isAnonymous"
          checked={form.isAnonymous}
          onChange={handleChange}
        />
        Report Anonymously
      </label>

      <label>Photos</label>
      <input type="file" multiple onChange={handleFileChange} accept="image/*" />

      <button type="submit" >
        {'Create Issue'}
      </button>
    </form>
    </div>
  );
}
