import Vue from 'vue';

// 引入指令
import showHide from './show-hide';

// 将所有指令集合成对象
const directiveObj = {
    'show-hide': showHide
};

// 全局注册指令
Object.keys(directiveObj).forEach(key => Vue.directive(key, directiveObj[key]));
