import React from 'react';
import PropTypes from 'prop-types';


import './Header.css';

class Header extends React.Component {
  render(){
    return (
        <header>
            <div class="container">
                <div class="hedaer_top_line">
                    <div class="header_logo">
                        <img src="img/logo.svg" alt=""/>
                    </div>
                    <div class="header_search">
                        <form action=""><input type="text" placeholder="Поиск"/><button class="search_button"><i class="fas fa-search"></i></button></form>
                    </div>
                    <div class="header_phone"><a href="tel:+375447271937">+375 (44) 727-19-37</a><br/> <span class="work_time">Работаем ежедневно с 10 до 19</span></div>
                    <div class="header_card"><span>Корзина</span><br/> <span class="cart_price"><span>12</span> BYN</span></div>
                    <div class="header_login"><a href="#" class="key">Войти</a><br/> <a href="#"> Регистрация</a></div>
                </div>
            </div>
                <div class="main_menu_box">
                    <div class="container">
                        <ul class="menu_wrapper">
                            <div class="close">
                                <svg class="ham hamRotate ham1 active" viewBox="0 0 100 100" width="50">
                                <path
                                        class="line top"
                                        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                                <path
                                        class="line middle"
                                        d="m 30,50 h 40" />
                                <path
                                        class="line bottom"
                                        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                                </svg>
                            </div>
                            <li class="menu_element parent"><a href="#">Мальчики</a>
                            <div class="dropdown_menu">
                                <div class="container">
                                    <div class="age">
                                        <span class="title">Возраст</span>
                                        <ul>
                                            <li><a href="#">до 3 лет ( рост 56-98)</a></li>
                                            <li><a href="#">от 3 до 7 лет (рост 104-122)</a></li>
                                            <li><a href="#">до 16 лет ( рост 128-176)</a></li>
                                        </ul>
                                    </div>
                                    <div class="category">
                                        <span class="title">Категории</span>
                                        <ul>
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
                            </div>
                            </li>
                            <li class="menu_element parent"><a href="#">Девочки</a>
                            <div class="dropdown_menu">
                                <div class="container">
                                    <div class="age">
                                        <span class="title">Возраст</span>
                                        <ul>
                                            <li><a href="#">до 3 лет ( рост 56-98)</a></li>
                                            <li><a href="#">от 3 до 7 лет (рост 104-122)</a></li>
                                            <li><a href="#">до 16 лет ( рост 128-176)</a></li>
                                        </ul>
                                    </div>
                                    <div class="category">
                                        <span class="title">Категории</span>
                                        <ul>
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
                            </div>
                            </li>
                            <li class="menu_element parent"><a href="#">Новорожденные</a>
                            <div class="dropdown_menu">
                                <div class="container">
                                    <div class="age">
                                        <span class="title">Возраст</span>
                                        <ul>
                                            <li><a href="#">до 3 лет ( рост 56-98)</a></li>
                                            <li><a href="#">от 3 до 7 лет (рост 104-122)</a></li>
                                            <li><a href="#">до 16 лет ( рост 128-176)</a></li>
                                        </ul>
                                    </div>
                                    <div class="category">
                                        <span class="title">Категории</span>
                                        <ul>
                                            
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
                            </div>
                            </li>
                            <li class="menu_element parent"><a href="#">Обувь</a>
                            <div class="dropdown_menu">
                                <div class="container">
                                    <div class="age">
                                        <span class="title">Возраст</span>
                                        <ul>
                                            <li><a href="#">до 3 лет ( рост 56-98)</a></li>
                                            <li><a href="#">от 3 до 7 лет (рост 104-122)</a></li>
                                            <li><a href="#">до 16 лет ( рост 128-176)</a></li>
                                        </ul>
                                    </div>
                                    <div class="category">
                                        <span class="title">Категории</span>
                                        <ul>
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
                            </div>
                            </li>
                            <li class="menu_element active"><a href="#">Доставка и оплата</a></li>
                            <li class="menu_element"><a href="#">Новости</a></li>
                            <li class="menu_element"><a href="#">О нас</a></li>
                            <li class="menu_element"><a href="#">Контакты</a></li>
                        </ul>
                        <svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="50">
                        <path
                                class="line top"
                                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                        <path
                                class="line middle"
                                d="m 30,50 h 40" />
                        <path
                                class="line bottom"
                                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                        </svg>

                    </div>
                </div>
        </header>
    )
  }

}
  export default Header;
