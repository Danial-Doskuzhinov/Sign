'use client'
import { useState } from 'react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Отправка данных на сервер или обработка локально
        console.log('Отправленные данные:', formData);
    };

    return (
        <div>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Имя:
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </label>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default RegisterPage;
