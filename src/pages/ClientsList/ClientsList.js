import styles from './ClientsList.module.scss'; 
import { useUsers } from './useUsers.jsx';

const ClientsList = () => {
  const {users, isLoading} = useUsers();
// Условный рендеринг: если isLoading равно true, показываем "Loading..."
  return (
    <div className={styles['clients-list__container']} >
      <h1 className={styles['clients-list__title']}>Our clients</h1>
      {isLoading ? ( 
        <div className={styles['clients-list__loading']}>Loading...</div>
      ) : (
        <div className={styles['clients-list__list']} >
          {users.map((client) => (
            <div key={client.id} className={styles['clients-list__card']} >
              <h2>
                {client.firstName} {client.lastName}
              </h2>
              <p>Age: {client.age}</p>
              <p>Email: {client.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientsList;



/* Объяснение :
Состояние isLoading: Мы добавили состояние isLoading, которое изначально установлено в true. Это означает, что загрузка данных началась.

Установка isLoading в false: В блоке finally мы устанавливаем isLoading в false, чтобы указать, что загрузка данных завершена (независимо от того, успешно или с ошибкой).

Условный рендеринг: В компоненте мы используем тернарный оператор для условного рендеринга. Если isLoading равно true, отображается "Loading...". В противном случае отображается список клиентов. */



/*Как это работает try catch finally:

Блок try: В этом блоке находится код, который может вызвать ошибку. Если ошибка возникает, выполнение кода в блоке try немедленно прекращается, и управление передается в блок catch.
Блок catch: Этот блок выполняется только в том случае, если в блоке try произошла ошибка. В параметре error (или любое другое имя, которое вы укажете) передается информация об ошибке. Этот объект содержит свойства, такие как message (сообщение об ошибке) и name (тип ошибки).
Блок finally: Этот блок выполняется всегда, независимо от того, произошла ошибка или нет. Он используется для выполнения кода, который должен быть выполнен в любом случае, например, для освобождения ресурсов или завершения операций.

Важные моменты:
Если в блоке try нет ошибки, блок catch не выполняется, но блок finally выполняется в любом случае.
Если ошибка возникает в блоке catch или finally, она не будет перехвачена текущим блоком catch. Для обработки таких ошибок нужно использовать вложенные конструкции try...catch.
Блок finally выполняется даже если в блоке try или catch используется return, break или continue.
*/