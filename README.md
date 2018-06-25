# vue-tel-input
International Telephone Input with Vue.

Checkout Demo at [Codesandbox](https://ry3wlvlxkn.codesandbox.io/).

<p align="center">
<img width="600px" alt="In-action GIF" src="https://thumbs.gfycat.com/EducatedPoliteBluefintuna-size_restricted.gif"/>
</p>

## Installation
- **yarn**:
  ```bash
    yarn add vue-tel-input
  ```
- **npm**:
  ```bash
    npm i --save vue-tel-input
  ```

## Usage
- Import default `CSS` to your project:
    ```js
    import 'vue-tel-input/dist/vue-tel-input.css';
    ```

- Install as a global component:
    ```javascript
    import Vue from 'vue'
    import VueTelInput from 'vue-tel-input'

    Vue.use(VueTelInput)
    ```

- In your component:
     ```js
     <template>
     ...
        <vue-tel-input v-model="phone"
                       @onInput="onInput"
                       <!-- optional -->
                       :preferredCountries="['us', 'gb', 'ua']">
        </vue-tel-input>
     ...
     <template>
     <script>
     export default {
       data() {
         return {
           phone: '',
         };
       },
       methods: {
         /**
          * @param {string} number
          * the phone number inputted by user, will be formatted along with country code
          * // Ex: inputted: (AU) 0432 432 432
          * // number = '+61432421546'
          *
          * @param {Boolean} isValid
          * @param {string} country
          */
          onInput({ number, isValid, country }) {
            console.log(number, isValid, country);
          },
       },
     }
     </script>
     ```

## Highlights & Credits
- Vue app created by [vue-cli](https://github.com/vuejs/vue-cli).
- Telephone Number parsing, validation by [libphonenumber-js](https://catamphetamine.github.io/libphonenumber-js/).
- Country Codes data from [intl-tel-input](https://github.com/jackocnr/intl-tel-input/blob/master/src/js/data.js).
- Country Flags by [behdad/region-flags](https://github.com/behdad/region-flags).
- [Boostrap-Vue](https://bootstrap-vue.js.org/docs/).
- User's Location by [get-json](https://www.npmjs.com/package/get-json) and [ipifo.io](https://ipinfo.io/json)

## Demo Usage

```bash

# install dependencies
$ yarn/npm install

# compile demo for development
$ yarn/npm dev

# open Browser and start serve in demo
$ yarn/npm demo:open

# compile dist demo
$ yarn/npm dist:demo

# compile dist
$ yarn/npm dist

```

made with &#x2764; by [Steven](https://github.com/iamstevendao).
