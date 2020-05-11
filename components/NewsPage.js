import React from 'react';
import PropTypes from 'prop-types';


import './Header.css';
import './News.css';

class NewsPage extends React.Component {
  render(){
    return (
      <main>
        <div class="container">
          <div class="breadcrumbs_box">
            <a href="/" class="first_main"><img src="/img/icon/home-smile.svg"/></a>
            <a href="#" class="bredcumb">Новости</a>
            <a href="#" class="bredcumb">Давайте танцевать вместе с Kids Line!</a>
          </div>
          <h1>Новости</h1>
          <div class="news_section">
            <a href="#" class="news_element">
                <img alt="" src="/img/icon/news_ico.svg"/><span class="name">Давайте танцевать вместе с Kids Line!</span>
                <p class="text">Чем занятся детям в холодную пору года, когда не хочется постоянно торчать дома? Можно записать их, например, на танцы! А вы знали, что помимо одежды, обуви и аксессуаров, у нас спрятаны танцевальные балетки?</p>
                <div class="bottom_content">
                  <span>16 ноября 2020</span><span class="more">Подробнее</span>
                </div>
            </a>
            <a href="#" class="news_element">
              <img alt="" src="/img/icon/news_ico.svg"/><span class="name">Привет, осень!</span>
              <p class="text">Уже завтра! У нас поступление шапок, шарфов, снудов и перчаток! Заходите и подберите комплект на эту осень для вашего любимого осеннего солнышка!</p>
              <div class="bottom_content">
                <span>30 августа 2020</span><span class="more">Подробнее</span>
              </div>
            </a>
            <a href="#" class="news_element">
              <img alt="" src="/img/icon/news_ico.svg"/><span class="name">Ликвидация прошлых коллекций обуви -70%!</span>
              <p class="text">Дождались! В Кидс Лайн с 1 августа стартует самая масштабная расспродажа! Ликвидация прошлых коллекций обуви! Скидки на абсолютно весь ассортимент до 70%! Ждём Вас! Количество товара ограничено!</p>
              <div class="bottom_content">
                <span>28 сентября 2020</span><span class="more">Подробнее</span>
              </div>
            </a>
            <a href="#" class="news_element">
              <img alt="" src="/img/icon/news_ico.svg"/><span class="name">Ликвидация прошлых коллекций обуви -70%!</span>
              <p class="text">Дождались! В Кидс Лайн с 1 августа стартует самая масштабная расспродажа! Ликвидация прошлых коллекций обуви! Скидки на абсолютно весь ассортимент до 70%! Ждём Вас! Количество товара ограничено!</p>
              <div class="bottom_content">
                <span>28 сентября 2020</span><span class="more">Подробнее</span>
              </div>
            </a>
            <a href="#" class="news_element">
              <img alt="" src="/img/icon/news_ico.svg"/><span class="name">Ликвидация прошлых коллекций обуви -70%!</span>
              <p class="text">Дождались! В Кидс Лайн с 1 августа стартует самая масштабная расспродажа! Ликвидация прошлых коллекций обуви! Скидки на абсолютно весь ассортимент до 70%! Ждём Вас! Количество товара ограничено!</p>
              <div class="bottom_content">
                <span>28 сентября 2020</span><span class="more">Подробнее</span>
              </div>
            </a>
            <a href="#" class="news_element">
              <img alt="" src="/img/icon/news_ico.svg"/><span class="name">Ликвидация прошлых коллекций обуви -70%!</span>
              <p class="text">Дождались! В Кидс Лайн с 1 августа стартует самая масштабная расспродажа! Ликвидация прошлых коллекций обуви! Скидки на абсолютно весь ассортимент до 70%! Ждём Вас! Количество товара ограничено!</p>
              <div class="bottom_content">
                <span>28 сентября 2020</span><span class="more">Подробнее</span>
              </div>
            </a>
            <a href="#" class="news_element">
              <img alt="" src="/img/icon/news_ico.svg"/><span class="name">Ликвидация прошлых коллекций обуви -70%!</span>
              <p class="text">Дождались! В Кидс Лайн с 1 августа стартует самая масштабная расспродажа! Ликвидация прошлых коллекций обуви! Скидки на абсолютно весь ассортимент до 70%! Ждём Вас! Количество товара ограничено!</p>
              <div class="bottom_content">
                <span>28 сентября 2020</span><span class="more">Подробнее</span>
              </div>
            </a>
            <a href="#" class="news_element">
              <img alt="" src="/img/icon/news_ico.svg"/><span class="name">Ликвидация прошлых коллекций обуви -70%!</span>
              <p class="text">Дождались! В Кидс Лайн с 1 августа стартует самая масштабная расспродажа! Ликвидация прошлых коллекций обуви! Скидки на абсолютно весь ассортимент до 70%! Ждём Вас! Количество товара ограничено!</p>
              <div class="bottom_content">
                <span>28 сентября 2020</span><span class="more">Подробнее</span>
              </div>
            </a>
            <a href="#" class="news_element">
              <img alt="" src="/img/icon/news_ico.svg"/><span class="name">Ликвидация прошлых коллекций обуви -70%!</span>
              <p class="text">Дождались! В Кидс Лайн с 1 августа стартует самая масштабная расспродажа! Ликвидация прошлых коллекций обуви! Скидки на абсолютно весь ассортимент до 70%! Ждём Вас! Количество товара ограничено!</p>
              <div class="bottom_content">
                <span>28 сентября 2020</span><span class="more">Подробнее</span>
              </div>
            </a>
          </div>
          <div class="pagination_box">
              <a href="#" class="pagination"><i class="fas fa-caret-left"></i></a>
              <a href="#" class="pagination active">1</a>
              <a href="#" class="pagination">2</a>
              <a href="#" class="pagination">3</a>
              <a href="#" class="pagination">4</a>
              <a href="#" class="pagination">...</a>
              <a href="#" class="pagination">19</a>
              <a href="#" class="pagination"><i class="fas fa-caret-right"></i></a>
          </div>
        </div>
        <div class="subscribe_box">
            <img src="/img/subscribe.png" alt=""/>
            <div class="mobile">
              <img src="/img/flugratten.png"/>
            </div>
            <form class="subscribe_form" action=""><input type="email" placeholder="Ваш email"/><button type="submith">Подписаться</button></form>
        </div>
      </main>
    )
  }

}
  export default NewsPage;
