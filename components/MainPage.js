import React from 'react';
import PropTypes from 'prop-types';


import './MainPage.css';
import './Catalog.css';
import './News.css';
import './ProductPage.css';

class MainPage extends React.Component {
  render(){
    return (
      <main>
      <div class="main_slider"><img alt="" src="/img/banner.png"/> <img alt="" src="/img/banner.png"/> <img alt="" src="/img/banner.png"/></div>
      <div class="container">
        <div class="main_catalog">
          <div class="left_section">
            <div class="slide_section">
              <div class="title popular">
                Популярное
              </div>
              <div class="catalog">
                <div class="card popular">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock in">В наличии</span> <span class="price">60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
                <div class="card popular">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock out">В наличии</span> <span class="price">60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
                <div class="card popular">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock in">В наличии</span> <span class="price">60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
                <div class="card popular">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock in">В наличии</span> <span class="price">60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
              </div>
              <div class="title new">
                Новинки
              </div>
              <div class="catalog">
                <div class="card new">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock in">В наличии</span> <span class="price">60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
                <div class="card new">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock out">В наличии</span> <span class="price">60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
                <div class="card new">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock in">В наличии</span> <span class="price">60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
              </div>
              <div class="title discount">
                Cкидки
              </div>
              <div class="catalog">
                <div class="card discount">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock in">В наличии</span> <span class="price"><span class="old_price">12.40 BYN</span>60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
                <div class="card discount">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock out">В наличии</span> <span class="price"><span class="old_price">12.40 BYN</span>60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
                <div class="card discount">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock in">В наличии</span> <span class="price"><span class="old_price">12.40 BYN</span>60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
              </div>
            </div>
          </div>
          <div class="right_section">
            <div class="right_section_element"><img alt="" src="/img/sidebar-1.png"/></div>
            <div class="right_section_element"><img alt="" src="/img/sidebar-2.png"/></div>
            <div class="right_section_element"><img alt="" src="/img/sidebar-3.png"/></div>
          </div>
        </div>
        <div class="title latest_news">
          Последние новости
        </div>
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
        </div>
      </div>
      <div class="main_baner"><img src="/img/main_baner.png"/></div>
      <div class="container">
        <div class="main_about_section">
          <div class="pic"><img alt="" src="/img/about_main.png"/></div>
          <div class="text">
            <img alt="" src="/img/icon/news_ico.svg"/><span>Детская одежда и обувь kidsline_by</span>
            <p>Чем занятся детям в холодную пору года, когда не хочется постоянно торчать дома? Можно записать ихна танцы! Ну а вы знали, что помимо одежды, обуви и аксессуаров, у нас спрятаны танцевальные балетки.</p><br/>
            <p>Занятся детям в холодную пору года, когда не хочется совсем и постоянно торчать дома? А вы знали, что помимо одежды, обуви и аксессуаров, у нас спрятаны танцевальные балетки?</p><br/>
            <p>Детям чем занятся в холодную пору года, когда нет-нет да и не хочется постоянно торчать дома? Можно записать их, например, на танцы! Помимо одежды, обуви и аксессуаров, у нас спрятаны танцевальные балетки, а также многое другое!</p>
          </div>
        </div>
      </div>
    </main>
    )
  }

}
  export default MainPage;
