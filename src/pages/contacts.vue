<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="contacts_container">
    <div class="bg_container container">
      <div class="row">
        <div class="col-sm-6 contacts_left_side">
          <div class="request_text">
            Оставьте заявку на создание сайта
            либо задайте интересующий вас вопрос
          </div>
          <div class="request_text">
            Также вы можете написать мне в соцсети
          </div>
          <div class="center">
            <div id="social-contacts">
              <ul class="social">
                <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                <li><i class="fa fa-google" aria-hidden="true"></i></li>
                <li><i class="fa fa-vk" aria-hidden="true"></i></li>
                <li><i class="fa fa-telegram" aria-hidden="true"></i></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 contacts_right_side">
          <form class="contacts_form" action="">
            <label for="name">
              <input id="name" type="text" placeholder="Ваше имя">
            </label>
            <label for="mobile">
              <input id="mobile" type="tel" placeholder="Ваш телефон">
            </label>
            <label for="connect">
              <input id="connect" type="text" placeholder="Предпочитаемый способ связи">
            </label>
            <button class="contacts_button">Отправить</button>
            <div class="confirm_text">
              Нажимая эту кнопку вы соглашаетесь с политикой обработки песональных данных</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-contacts',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
</style>
