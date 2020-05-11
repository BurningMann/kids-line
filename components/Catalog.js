import React from 'react';
import PropTypes from 'prop-types';


import './Catalog.css';

class Catalog extends React.Component {
  render(){
    return (
        <main>
        <div class="container">
          <div class="breadcrumbs_box">
            <a class="first_main" href="/"><img src="/img/icon/home-smile.svg"/></a> <a class="bredcumb" href="#">Каталог</a> <a class="bredcumb" href="#">Одежда для девочек</a>
          </div>
          <h1>Одежда для девочек</h1>
          <div class="catalog_wrapper">
            <div class="left_catalog_bar">
              <div class="catalog_menu">
                <div class="catalog_menu_element_major">
                  <span class="title"><span>Мальчики</span></span>
                  <ul class="catalog_menu_element_minor">
                          <li><a href="#">Все товары</a></li>
                          <li><a href="#">Аксессуары</a></li>
                          <li><a href="#">Блузки</a></li>
                          <li><a href="#">Боди</a></li>
                          <li><a href="#">Брюки, джинсы</a></li>
                          <li><a href="#">Верхняя одежда</a></li>
                          <li><a href="#">Водолазки</a></li>
                          <li><a href="#">Джемперы, кардиганы</a></li>
                          <li><a href="#">Комбинезоны, полукомбинезоны</a></li>
                          <li><a href="#">Комплекты одежды</a></li>
                          <li><a href="#">Нижнее белье, пижамы</a></li>
                          <li><a href="#">Платья</a></li>
                          <li><a href="#">Толстовки</a></li>
                          <li><a href="#">Футболки, майки</a></li>
                          <li><a href="#">Чулочно-носочные изделия</a></li>
                          <li><a href="#">Шапки, шарфы</a></li>
                          <li><a href="#">Шорты</a></li>
                          <li><a href="#">Юбки</a></li>
                      </ul>
                  </div>
                  <div class="catalog_menu_element_major open">
                      <span class="title"><span>Девочки</span></span>
                      <ul class="catalog_menu_element_minor">
                          <li><a href="#">Все товары</a></li>
                          <li><a href="#">Аксессуары</a></li>
                          <li><a href="#">Блузки</a></li>
                          <li><a href="#">Боди</a></li>
                          <li><a href="#">Брюки, джинсы</a></li>
                          <li><a href="#">Верхняя одежда</a></li>
                          <li><a href="#">Водолазки</a></li>
                          <li><a href="#">Джемперы, кардиганы</a></li>
                          <li><a href="#">Комбинезоны, полукомбинезоны</a></li>
                          <li><a href="#">Комплекты одежды</a></li>
                          <li><a href="#">Нижнее белье, пижамы</a></li>
                          <li><a href="#">Платья</a></li>
                          <li><a href="#">Толстовки</a></li>
                          <li><a href="#">Футболки, майки</a></li>
                          <li><a href="#">Чулочно-носочные изделия</a></li>
                          <li><a href="#">Шапки, шарфы</a></li>
                          <li><a href="#">Шорты</a></li>
                          <li><a href="#">Юбки</a></li>
                      </ul>
                  </div>
                  <div class="catalog_menu_element_major">
                      <span class="title"><span>Новорожденные</span></span>
                      <ul class="catalog_menu_element_minor">
                          <li><a href="#">Все товары</a></li>
                          <li><a href="#">Аксессуары</a></li>
                          <li><a href="#">Блузки</a></li>
                          <li><a href="#">Боди</a></li>
                          <li><a href="#">Брюки, джинсы</a></li>
                          <li><a href="#">Верхняя одежда</a></li>
                          <li><a href="#">Водолазки</a></li>
                          <li><a href="#">Джемперы, кардиганы</a></li>
                          <li><a href="#">Комбинезоны, полукомбинезоны</a></li>
                          <li><a href="#">Комплекты одежды</a></li>
                          <li><a href="#">Нижнее белье, пижамы</a></li>
                          <li><a href="#">Платья</a></li>
                          <li><a href="#">Толстовки</a></li>
                          <li><a href="#">Футболки, майки</a></li>
                          <li><a href="#">Чулочно-носочные изделия</a></li>
                          <li><a href="#">Шапки, шарфы</a></li>
                          <li><a href="#">Шорты</a></li>
                          <li><a href="#">Юбки</a></li>
                      </ul>
                  </div>
                  <div class="catalog_menu_element_major">
                      <span class="title"><span>Обувь</span></span>
                      <ul class="catalog_menu_element_minor">
                          <li><a href="#">Все товары</a></li>
                          <li><a href="#">Аксессуары</a></li>
                          <li><a href="#">Блузки</a></li>
                          <li><a href="#">Боди</a></li>
                          <li><a href="#">Брюки, джинсы</a></li>
                          <li><a href="#">Верхняя одежда</a></li>
                          <li><a href="#">Водолазки</a></li>
                          <li><a href="#">Джемперы, кардиганы</a></li>
                          <li><a href="#">Комбинезоны, полукомбинезоны</a></li>
                          <li><a href="#">Комплекты одежды</a></li>
                          <li><a href="#">Нижнее белье, пижамы</a></li>
                          <li><a href="#">Платья</a></li>
                          <li><a href="#">Толстовки</a></li>
                          <li><a href="#">Футболки, майки</a></li>
                          <li><a href="#">Чулочно-носочные изделия</a></li>
                          <li><a href="#">Шапки, шарфы</a></li>
                          <li><a href="#">Шорты</a></li>
                          <li><a href="#">Юбки</a></li>
                      </ul>
                  </div>
              </div>
              <div class="catalog_filter">
                <div class="filter_wrap">
                  <div class="filter_section">
                      <span class="filter_section_title">
                          Цена
                      </span>
                      <div class="price-range-block">

                      <div id="slider-range" class="price-filter-range" name="rangeInput"></div>

                      <div class="prise_box">
                        <span>от <input type="number" min="0" max="9900"  id="min_price" class="price-range-field" /> BYN</span>  
                        <span>до <input type="number" min="0" max="10000"  id="max_price" class="price-range-field" /> BYN</span>
                      </div>


                      </div>
                  </div>
                  <div class="filter_section">
                      <span class="filter_section_title">
                          Материал
                      </span>
                      <div class="check_section">
                          <label ><input type="checkbox" name="material" value=""/><span class="check_mark"></span>Замша</label>
                          <label ><input type="checkbox" name="material" value=""/><span class="check_mark"></span>Натуральная кожа</label>
                          <label ><input type="checkbox" name="material" value=""/><span class="check_mark"></span>Шерсть</label>
                          <label ><input type="checkbox" name="material" value=""/><span class="check_mark"></span>Хлопок</label>
                          <label ><input type="checkbox" name="material" value=""/><span class="check_mark"></span>Велюр</label>
                      </div>
                  </div>
                  <div class="filter_section">
                      <span class="filter_section_title">
                          Сезон
                      </span>
                      <div class="check_section">
                          <label ><input type="checkbox" name="material" value=""/><span class="check_mark"></span>Замша</label>
                          <label ><input type="checkbox" name="material" value=""/><span class="check_mark"></span>Натуральная кожа</label>
                          <label ><input type="checkbox" name="material" value=""/><span class="check_mark"></span>Шерсть</label>
                          <label ><input type="checkbox" name="material" value=""/><span class="check_mark"></span>Хлопок</label>
                          <label ><input type="checkbox" name="material" value=""/><span class="check_mark"></span>Велюр</label>
                      </div>
                  </div>
                  <div class="filter_button_section"><div class="filter_button">Применить</div></div>
                </div>
              </div>
            </div>
            <div class="catalog_section">
              <div class="sort_box">
                <span>Сортировать по</span> 
                <div className="sort_wrapper">
                  <select class="sort">
                  <option disabled>Выбрать</option>
                    <option value="цене (от низкой к высокой)">
                      цене (от низкой к высокой)
                    </option>
                    <option value=" цене (от высокой к низкой)">
                      цене (от высокой к низкой)
                    </option>
                    <option value="популярности">
                      популярности
                    </option>
                  </select>
                </div>

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
              </div>
              <div class="pagination_box">
                <a class="pagination" href="#"><i class="fas fa-caret-left"></i></a> <a class="pagination active" href="#">1</a> <a class="pagination" href="#">2</a> <a class="pagination" href="#">3</a> <a class="pagination" href="#">4</a> <a class="pagination" href="#">...</a> <a class="pagination" href="#">19</a> <a class="pagination" href="#"><i class="fas fa-caret-right"></i></a>
              </div>
            </div>
          </div>
          <div class="main_about_section">
            <div class="pic"><img alt="" src="/img/3050091.png"/></div>
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
  export default Catalog;
