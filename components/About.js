import React from 'react';
import PropTypes from 'prop-types';


import './Header.css';
import './About.css';

class About extends React.Component {
  render(){
    return (
      <main>
        <div class="container">
            <div class="breadcrumbs_box">
              <a href="/" class="first_main"><img src="/img/icon/home-smile.svg"/></a>
              <a href="#" class="bredcumb">О нас</a>
            </div>
            <div class="about_section">
              <div class="text">
                <h1>Немного о нашем магазине</h1>
                <p>Наш магазин работает уже более 10 лет. Чем занятся детям в холодную пору года, когда не хочется вечно торчать дома? Ну ведь можно записать их на танцы! Вы знали, что помимо одежды, обуви и ещё кое-каких аксессуаров, у нас спрятаны танцевальные балетки. Сейчас занятся детям в холодную пору года, когда не хочется совсем и постоянно торчать дома? А вы знали, что помимо одежды, обуви и аксессуаров, у нас спрятаны танцевальные балетки? Детям чем занятся в холодную пору года, когда нет-нет да и не хочется постоянно торчать дома? Можно записать их, например, на танцы! Помимо одежды, обуви и аксессуаров, у нас спрятаны танцевальные балетки, а также многое другое!</p><br/>
                <p>Помимо одежды, обуви и аксессуаров, у нас спрятаны танцевальные балетки, а также многое другое! Помимо одежды, обуви и аксессуаров, у нас спрятаны танцевальные балетки, а также многое другое. Детям чем занятся в холодную пору года, когда нет-нет да и не хочется постоянно торчать дома? Можно записать их, например, на танцы.К тому же не хочется постоянно торчать дома. Можно записать их на танцы.</p><br/>
                <p>Помимо одежды, обуви и аксессуаров, у нас спрятаны танцевальные балетки, а также многое другое.</p>
              </div>
              <div class="pic"><img alt="" src="/img/eqBs9g2htOw.png"/></div>
            </div>
        </div>
      </main>
    )
  }

}
  export default About;
