import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faJediOrder,
  faGalacticSenate,
  faEmpire
} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
config.autoAddcss = false;
library.add(faJediOrder, faGalacticSenate, faHeart, faEmpire);
Vue.component('font-awesome-icon', FontAwesomeIcon);