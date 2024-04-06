'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
type Props ={
  accessToken:string,
  refreshToken:string
}
const signUp = () => {
  const router = useRouter(); 
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://51.107.14.25:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, email, password }),
      });
      const data:Props = await response.json();
      
      console.log('Access:', data.accessToken);
      console.log('Refresh:', data.refreshToken);
  
      if (data.accessToken) {
        // Сохраняем токены в куки и localStorage
        document.cookie = `accessToken=${data.accessToken}; path=/; secure; HttpOnly`;
        localStorage.setItem('refreshToken', data.refreshToken);

        setMessage('Регистрация успешна! ');

        setTimeout(() => {
          router.push('/sign'); 
        }, 2000);
      } else {
        setMessage('Ошибка регистрации.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Произошла ошибка.');
    }
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={handleRegister}>
        <label>
          Логин:
          <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Пароль:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default signUp;
