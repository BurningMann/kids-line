import React from 'react';
import PropTypes from 'prop-types';


import './ProductPage.css';

class Catalog extends React.Component {
  render(){
    return (
        <main>
        <div class="container">
          <div class="breadcrumbs_box">
            <a class="first_main" href="/"><img src="/img/icon/home-smile.svg"/></a> 
            <a class="bredcumb" href="#">Каталог</a>
            <a class="bredcumb" href="#">Одежда для девочек</a>
            <a class="bredcumb" href="#">Платья</a>
            <a class="bredcumb" href="#">Праздничное платье “Принцесса”</a>
          </div>
          
          <div class="card_header_section">
              <div class="card_slider_section">
                  <div class="vertical_slider_section">
                      <div class="slider_element"><img src="/img/12.png" alt=""/></div>
                      <div class="slider_element"><img src="/img/13.png" alt=""/></div>
                      <div class="slider_element"><img src="/img/14.png" alt=""/></div>
                      <div class="slider_element"><img src="/img/15.png" alt=""/></div>
                      <div class="slider_element"><img src="/img/16.png" alt=""/></div>
                      <div class="slider_element"><img src="/img/16.png" alt=""/></div>
                  </div>
                  <div class="main_slider_section">
                      <div class="slider_element"><img src="/img/13.png" alt=""/></div>
                      <div class="slider_element"><img src="/img/14.png" alt=""/></div>
                      <div class="slider_element"><img src="/img/15.png" alt=""/></div>
                      <div class="slider_element"><img src="/img/16.png" alt=""/></div>
                      <div class="slider_element"><img src="/img/17.png" alt=""/></div>
                      <div class="slider_element"><img src="/img/17.png" alt=""/></div>
                  </div>
              </div>
              <div class="card_details_section">
                <h1>Праздничное платье “Принцесса”</h1>
                <div class="box"><span class="stock in">В наличии</span> {/* <span class="stock out">Нет в наличии</span> */}</div>
                <div class="size_box box">
                  <span class="box_title">Выберите размер</span>
                  <label ><input type="radio" name="size" value="62"/><span class="size">62</span></label>
                  <label ><input type="radio" name="size" value="68"/><span class="size">68</span></label>
                  <label ><input type="radio" name="size" value="74"/><span class="size">74</span></label>
                  <label ><input type="radio" name="size" value="80"/><span class="size">80</span></label>
                  <label ><input type="radio" name="size" value="86"/><span class="size">86</span></label>
                </div>
                <div class="color_box box">
                  <span class="box_title">Выберите цвет</span>
                  <label ><input type="radio" name="color" value="red"/><span class="color_wrap" /* style="border-color:Сюда цвет;" */><span class="color" /* style="color:Сюда цвет;" */ ></span></span></label>
                  <label ><input type="radio" name="color" value="red"/><span class="color_wrap" /* style="border-color:Сюда цвет;" */><span class="color" /* style="color:Сюда цвет;" */></span></span></label>
                  <label ><input type="radio" name="color" value="red"/><span class="color_wrap" /* style="border-color:Сюда цвет;" */><span class="color" /* style="color:Сюда цвет;" */></span></span></label>
                  <label ><input type="radio" name="color" value="red"/><span class="color_wrap" /* style="border-color:Сюда цвет;" */><span class="color" /* style="color:Сюда цвет;" */></span></span></label>
                  <label ><input type="radio" name="color" value="red"/><span class="color_wrap" /* style="border-color:Сюда цвет;" */><span class="color" /* style="color:Сюда цвет;" */></span></span></label>
                </div>
                <div class="feature_box box">
                  <p class="feature"><span>Артикул:</span> 3247824</p>
                  <p class="feature"><span>Сезон:</span> Весна</p>
                  <p class="feature"><span>Состав:</span> Хлопок - 80%, полиэстер - 20%</p>
                </div>
                <div class="cart_box box">
                <span class="add">Добавить в корзину</span>
                <span class="price">60.50 BYN</span>
                </div>
              </div>
          </div>
          <div class="description_section">
            <div class="title">Описание</div>
            <p>Описание платья, его характеристики, чем занятся детям в холодную пору года, когда не хочется вечно торчать дома? Ну ведь можно записать их на танцы! Вы знали, что помимо одежды, обуви и ещё кое-каких аксессуаров, у нас спрятаны танцевальные балетки.</p>
            <p>Сейчас занятся детям в холодную пору года, когда не хочется совсем и постоянно торчать дома? А вы знали, что помимо одежды, обуви и аксессуаров, у нас спрятаны танцевальные балетки. Детям чем занятся в холодную пору года, когда нет-нет да и не хочется постоянно торчать дома? Можно записать их, например, на танцы! Помимо одежды, обуви и аксессуаров, у нас спрятаны танцевальные балетки, а также многое другое! Описание платья, его характеристики, чем занятся детям в холодную пору года, когда не хочется вечно торчать дома? Ну ведь можно записать их на танцы! Вы знали, что помимо одежды, обуви и ещё кое-каких аксессуаров, у нас спрятаны танцевальные балетки.</p>
            <p>Сейчас занятся детям в холодную пору года, когда не хочется совсем и постоянно торчать дома? А вы знали, что помимо одежды, обуви и аксессуаров, у нас спрятаны танцевальные балетки. Детям чем занятся в холодную пору года, когда нет-нет да и не хочется постоянно торчать дома? Можно записать их, например, на танцы! Помимо одежды, обуви и аксессуаров, у нас спрятаны танцевальные балетки, а также многое другое!</p>
          </div>
          <div class="slide_section related">
              <div class="title">
              Похожие товары
              </div>
              <div class="catalog">
                <div class="card ">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock in">В наличии</span> <span class="price">60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
                <div class="card ">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock out">В наличии</span> <span class="price">60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
                <div class="card ">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock in">В наличии</span> <span class="price">60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
                <div class="card ">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock in">В наличии</span> <span class="price">60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
                <div class="card ">
                  <img alt="" src="/img/Untitled.png"/>
                  <p class="name">Комбинезон Розовая пантера для детей до года</p><span class="stock in">В наличии</span> <span class="price">60.50 BYN</span> <a class="card_link" href="#"><span>Подробнее</span></a>
                </div>
              </div>
          </div>
          <div class="review_section">
              <div class="top">
                  <div class="title">Отзывы</div>
                  <div class="review_button form_button" data-to="review_form_box">Оставить отзыв</div>
              </div>
              <div class="main_review_section">
                  <div class="review_wrap">
                    <div class="review_body">
                        <div class="review_wrap_top_box"><span class="name">Катерина</span><span class="date">28 сентября 2020</span></div>
                        <div class="star_box">
                            <span class="full_star"></span>
                            <span class="full_star"></span>
                            <span class="full_star"></span>
                            <span class="full_star"></span>
                            <span class="without_star"></span>
                        </div>
                        <div class="review_text">Очень крутое платье, дочь просто в восторге. В школе все подруги все сразу захотели такое же. По качеству тоже очень понравилось, носим уже второй год и выглядит так же, как и в момент покупки</div>
                    </div>
                  </div>
                  <div class="review_wrap">
                    <div class="review_body">
                        <div class="review_wrap_top_box"><span class="name">Катерина</span><span class="date">28 сентября 2020</span></div>
                        <div class="star_box">
                            <span class="full_star"></span>
                            <span class="full_star"></span>
                            <span class="full_star"></span>
                            <span class="full_star"></span>
                            <span class="without_star"></span>
                        </div>
                        <div class="review_text">Очень крутое платье, дочь просто в восторге. В школе все подруги все сразу захотели такое же. По качеству тоже очень понравилось, носим уже второй год и выглядит так же, как и в момент покупки</div>
                    </div>
                  </div>
                  <div class="review_wrap">
                    <div class="review_body">
                        <div class="review_wrap_top_box"><span class="name">Катерина</span><span class="date">28 сентября 2020</span></div>
                        <div class="star_box">
                            <span class="full_star"></span>
                            <span class="full_star"></span>
                            <span class="full_star"></span>
                            <span class="full_star"></span>
                            <span class="without_star"></span>
                        </div>
                        <div class="review_text">Очень крутое платье, дочь просто в восторге. В школе все подруги все сразу захотели такое же. По качеству тоже очень понравилось, носим уже второй год и выглядит так же, как и в момент покупки</div>
                    </div>
                  </div>
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
          
        </div>
      </main>
    )
  }

}
  export default Catalog;
