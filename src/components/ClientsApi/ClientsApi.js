import React, { useState, useEffect } from 'react';
import './ClientsApi.css'; // Импортируем файл стилей

const ClientsApi = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users');
                const data = await response.json();
                setClients(data.users.slice(0, 5)); // Берем первых пять пользователей
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            }
        };

        fetchClients();
    }, []);

    return (
        <div className="clients-container flex-collum">
            <h1>Our clients</h1>
            <div className="clients-list ">
                {clients.map(client => (
                    <div key={client.id} className="client-card">
                        <h2>{client.firstName} {client.lastName}</h2>
                        <p>Age: {client.age}</p>
                        <p>Email: {client.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ClientsApi;