import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Усі поля повинні бути заповнені!');
    } else {
      setError('');
      console.log('Форма відправлена:', formData);
    }
  };

  return (
    <div className="App">
      <h1>Форма зворотного зв'язку</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ім'я:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Введіть ім'я"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Введіть email"
          />
        </div>
        <div className="form-group">
          <label>Повідомлення:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ваше повідомлення"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
}

export default App;
