import Vuetify from 'vuetify/dist/vuetify.min';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

export default (Vue): typeof Vuetify => {
    Vue.use(Vuetify);
    return new Vuetify({
        theme: {
            dark: true,
        },
    });
};
