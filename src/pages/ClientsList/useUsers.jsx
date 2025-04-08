import { useState, useEffect } from "react";

export const useUsers = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Добавляем состояние для отслеживания загрузки

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const usersFromBack = await response.json();
        const firstFiveUsers = usersFromBack.users.slice(0, 5);
        setClients(firstFiveUsers); // Берем первых пять пользователей
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        throw new error (error);
      } finally {
        setIsLoading(false); // Устанавливаем isLoading в false после завершения загрузки
      }
    };

    fetchClients();
  }, []);

  return {users: clients, isLoading}
}
