import React from 'react';
import PropTypes from 'prop-types';


import './Header.css';
import './Contact.css';

class Contact extends React.Component {
  render(){
    return (
      <main>
        <div class="container">
            <div class="breadcrumbs_box">
              <a href="/" class="first_main"><img src="/img/icon/home-smile.svg"/></a>
              <a href="#" class="bredcumb">Контакты</a>
            </div>
            <div class="contact_info_box">
                <div class="phone"><div class="title">Телефон</div><a href="">+375 (44) 727-19-37</a></div>
                <div class="work_time"><div class="title">Время работы</div><a href="">10 - 19 ежедневно</a></div>
            </div>
            <div id="map">
                <div class="adress">ул. Советская 80 <br/> ("Дом Быта"), г. Речица</div>
                <img src ="/img/map.png"/>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.0426132197879!2d30.394735046937182!3d52.36732919927284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d4318f24120eb9%3A0x7890c7d93d2192ce!2sKids%20Line%20Rechitsa!5e0!3m2!1sru!2sby!4v1588770313396!5m2!1sru!2sby" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
            </div>
        </div>
      </main>
    )
  }

}
  export default Contact;
