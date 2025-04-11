import React, {useState} from 'react'; // React — основная библиотека для создания компонентов. 
import styles from './ConsultationForm.module.scss'; 

//1. Используем хук useState для хранения данных формы. В formData хранятся значения всех полей. Изначально все поля пустые.
const ConsultationForm = () => { 
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
  });
 
  //2.  Обработчик изменений: Функция handleChange вызывается при изменении значения любого из полей формы. Она извлекает name и value из события (e.target), а затем обновляет состояние formData, сохраняя предыдущие значения с помощью оператора расширения (...formData) и изменяя только то поле, которое было обновлено ([name]: value).

  /*Разберем, что происходит внутри этой функции:
1. Получение данных из события (e.target):
-e — это событие, которое передается в функцию при изменении значения в поле ввода
-e.target — это элемент DOM, который вызвал событие (в данном случае, это <input>).
-const { name, value } = e.target; — это деструктуризация, которая извлекает два свойства из e.target: name и value.
-name — это атрибут name поля ввода .
-value — это текущее значение, введенное пользователем в поле ввода.
2. Обновление состояния formData:
-setFormData — это функция, которая обновляет состояние formData.
-...formData — это оператор расширения (spread operator), который копирует все существующие значения из текущего состояния formData.
-[name]: value — это динамическое обновление свойства объекта. Здесь name — это имя поля, в квадратных скобках т.к. поле может быть динамическим (например, name, surname, phone, email), а value — новое значение, введенное пользователем.
Т.е, setFormData создает новый объект, который содержит все предыдущие значения formData, но с обновленным значением для конкретного поля. */
  const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData({
      ...formData,[name]: value
    });
  };

  //3.  Обработчик отправки: Функция handleSubmit вызывается при отправке формы. Она предотвращает стандартное поведение формы (перезагрузку страницы) с помощью e.preventDefault(). Затем можно добавить логику для отправки данных, например, через API. В данном примере данные просто выводятся в консоль.
  const handleSubmit = (e) => { 
    e.preventDefault(); //Этот метод отменяет поведение браузера по умолчанию, которое происходит при обработке события
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
        <button className={` ${styles.consultation__button} button`}   type="submit">SEND</button>
      </form>
    </div>
  );
};

/* 5. Атрибуты и валидация
value={formData.name}:  это текущее значение поля, которое берется из состояния formData.
onChange={handleChange}: Обработчик изменений, который обрабатывает отправку формы и выводит данные в консоль (в реальном приложении здесь можно добавить логику для отправки данных на сервер).
required: Указывает, что поле обязательно для заполнения. */

export default ConsultationForm

