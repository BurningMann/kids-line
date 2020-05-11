import React from 'react';
import PropTypes from 'prop-types';


import './Footer.css';

class Footer extends React.Component {
  render(){
    return (
        <footer>
            <div class="container">
                <div class="footer_box">
                    <div class="footer_contact">
                        <a href="tel:375447271937">+375 (44) 727-19-37</a><br/>
                        <span>Работаем ежедневно с 10 до 19</span>
                    </div>
                    <div class="footer_menu">
                        <div class="footer_menu_element">
                            <a href="">Мальчики</a>
                        </div>
                        <div class="footer_menu_element">
                            <a href="">Новорожденные</a>
                        </div>
                        <div class="footer_menu_element">
                            <a href="">Доставка и оплата</a>
                        </div>
                        <div class="footer_menu_element">
                            <a href="">О нас</a>
                        </div>
                        <div class="footer_menu_element">
                            <a href="">Девочки</a>
                        </div>
                        <div class="footer_menu_element">
                            <a href="">Обувь</a>
                        </div>
                        <div class="footer_menu_element">
                            <a href="">Новости</a>
                        </div>
                        <div class="footer_menu_element">
                            <a href="">Контакты</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">© 2020 Интернет-магазин детской одежды Kidsline. Все права защищены</div>
        </footer>
    )
  }

}
  export default Footer;
