import React from 'react';
import PropTypes from 'prop-types';


import './Modals.css';

class Modals extends React.Component {
  render(){
    return (
      <div>
        <div class="modal_bg">
          <div class="thx_for_sub_box">
            <div class="close_button"><i class="fas fa-times"></i></div>
              <div class="modal_content">
                  <img src="/img/icon/paper-plane.svg" alt=""/>
                  <span class="name">Спасибо! <br/> На вашу почту выслано письмо!</span>
                  <p class="text">Для подтверждения подписки перейдите <br/> по ссылке из письма</p>
              </div>
          </div>
          <div class="review_form_box">
            <div class="close_button"><i class="fas fa-times"></i></div>
              <div class="modal_content">
                    <span class="title">Оставить отзыв</span>
                    <p class="text">Заполните форму ниже, чтобы оставить отзыв на данный продукт. Все поля обязательные для заполнения</p>
                    <form action="\">
                        <label ><span class="line_title">Ваше имя</span><input type="text" class="required"/></label>
                        <label ><span class="line_title">Текст отзыва</span><textarea name="" id="" class="required"></textarea></label>
                        <div class="star_box">
                            <span class="line_title">Дайте оценку товару</span>
                            <label ><input type="radio" name="rate" value="1" checked/><span class="full_star"></span></label>
                            <label ><input type="radio" name="rate" value="2" /><span class="without_star"></span></label>
                            <label ><input type="radio" name="rate" value="3"/><span class="without_star"></span></label>
                            <label ><input type="radio" name="rate" value="4"/><span class="without_star"></span></label>
                            <label ><input type="radio" name="rate" value="5"/><span class="without_star"></span></label>
                        </div>
                        <input type="submit" value="Оставить отзыв"/>
                    </form>
              </div>
          </div>
        </div>
      </div>
    )
  }

}
  export default Modals;
