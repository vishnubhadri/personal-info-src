import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            themeCache: {
                get: key => localStorage.getItem(key),
                set: (key, value) => localStorage.setItem(key, value),
            },
        },
        themes: {
            light: {
                college: "#1d4277",
                company: "#ffa500",
            },
            dark: {
                college: "#b794f6",
                company: "#ecf239",
            }
        }
    }
});
