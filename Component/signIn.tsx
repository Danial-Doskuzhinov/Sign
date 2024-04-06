// LoginPage.tsx
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
type Props ={
    accessToken:string,
    refreshToken:string
  }
const LoginPage = () => {
    const router = useRouter(); 
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://51.107.14.25:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data:Props = await response.json();
      if (response.ok) {
        document.cookie = `accessToken=${data.accessToken}; path=/; secure; HttpOnly`;
        localStorage.setItem('refreshToken', data.refreshToken);
        setMessage('Вход успешен!');
        setTimeout(() => {
            router.push('/home'); 
          }, 2000);
      } else {
        setMessage('Неправильный email или пароль.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Произошла ошибка при входе.');
    }
  };

  return (
    <div>
      <h1>Вход</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Пароль:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Войти</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
