import React, {useState} from 'react'; 
import styles from './ConsultationForm.module.scss'; 

const ConsultationForm = () => { 
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData({
      ...formData,[name]: value
    });
  };

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className={styles.consultation__form} >
      <h1 className={styles.consultation__title}>Request for consultation</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['consultation__form-field']}>
          <label className={styles['consultation__form-label']} htmlFor="name">Имя:</label>
          <input className={styles['consultation__form-input']}
            type="text"
            id="name"
            name="name"
            value={formData.name} 
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles['consultation__form-field']}>
          <label className={styles['consultation__form-label']}  htmlFor="surname">Фамилия:</label>
          <input className={styles['consultation__form-input']}
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles['consultation__form-field']}>
          <label className={styles['consultation__form-label']}  htmlFor="phone">Телефон:</label>
          <input className={styles['consultation__form-input']}
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles['consultation__form-field']}>
          <label className={styles['consultation__form-label']}  htmlFor="email">E-mail:</label>
          <input className={styles['consultation__form-input']}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button className={`${styles.consultation__button} button`} type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ConsultationForm

