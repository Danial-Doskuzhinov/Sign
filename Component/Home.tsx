import React from 'react'
import '../Css/Header.css'
import Santa from './Santa.png'
const Home = () => {
  return (
    <>
<header className='navBar'>
<nav className="menu">
  <ul className='menu-items'>
    <li ><a  className='menu-item' href="#">Мои Игры</a></li>
    <li ><a  className='menu-item' href="#">Уведомления</a></li>
    <li ><a  className='menu-item' href="#">Мой аккаунт</a></li>
    <li ><a  className='menu-item' href="#">|</a></li>
    <li ><a  className='menu-item' href="#">RU</a></li>
  </ul>
</nav>
</header>

<main className='main'>
    <img className='imgSanta' src={Santa.src} alt="SecretSanta" />
    <section className='content'>
  <h1 className='content-h1'>Тайный Санта</h1>
  <p className='content-p'>Организуй тайный обмен подарками между друзьями или коллегами</p>
</section>
</main>
    </>
  )
}

export default Home