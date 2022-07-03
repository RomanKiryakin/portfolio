<template>
    <button class="menu_button"
            @click.prevent="remakeClass()">
      Меню
    </button>
  <transition name="bounce">
        <div v-show="showMenu"
             :style="{ backgroundImage: `url(${brl})` }"
             class=" menu_background fix_for_menu ">
          <!--class for hide menu--><!--:class="{'remake': showMenu === false}"-->
            <ul class="menu_list">
                  <li >
                    <router-link
                      @click.prevent="remakeClass()" @mousemove.prevent="switch_image(1)"
                                 class="menu_item" :to="{name: 'home-page'}" >
                      Главная
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      @click.prevent="remakeClass()" @mousemove.prevent="switch_image(2)"
                                 class="menu_item" :to="{name: 'about-me'}" >
                      Обо мне
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      @click.prevent="remakeClass()" @mousemove.prevent="switch_image(3)"
                                 class="menu_item" :to="{name: 'my-portfolio'}" >
                      Портфолио
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      @click.prevent="remakeClass()" @mousemove.prevent="switch_image(4)"
                                 class="menu_item" :to="{name: 'my-contacts'}" >
                      Контакты
                    </router-link>
                  </li>
                </ul>
            </div>
  </transition>
        <router-view></router-view>
</template>

<script>

import backgroundUrl1 from './assets/images/homebackground.jpg';
import backgroundUrl2 from './assets/images/aboutbackground.jpg';
import backgroundUrl3 from './assets/images/portfolio_background2.jpeg';
import backgroundUrl4 from './assets/images/contactground.jpg';

export default {
  data() {
    return {
      showMenu: false,
      brl: backgroundUrl1,
    };
  },
  methods: {
    remakeClass() {
      this.showMenu = !this.showMenu;
    },
    switch_image(el) {
      if (el === 1) {
        this.brl = backgroundUrl1;
      }
      if (el === 2) {
        this.brl = backgroundUrl2;
      }
      if (el === 3) {
        this.brl = backgroundUrl3;
      }
      if (el === 4) {
        this.brl = backgroundUrl4;
      }
    },
  },
};
</script>

<style>

</style>
