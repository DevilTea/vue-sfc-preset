# <%- options.packageName %>

<%- options.description %>

<p align="center">
  <a href="https://npmjs.org/package/<%- options.packageName %>">
    <img src="https://img.shields.io/npm/v/<%- options.packageName %>.svg?style=flat" alt="Packagist" />
  </a>
  <a href="https://npmjs.org/package/<%- options.packageName %>">
    <img src="https://img.shields.io/npm/l/<%- options.packageName %>.svg?style=flat" alt="Software License" />
  </a>
  <a href="https://npmjs.org/package/<%- options.packageName %>">
    <img src="https://img.shields.io/npm/dt/<%- options.packageName %>.svg?style=flat" alt="Latest Version" />
  </a>
</p>

---

## Quick Start

### Installation

#### Browser globals

> The **dist** folder contains <%- options.packageName %>.min.js with the component exported in the window.<%- options.packageName %> object.

```html
<body>
  <<%- options.packageName %>></<%- options.packageName %>>
</body>
<script src="path/to/vue.js"></script>
<script src="path/to/<%- options.packageName %>.js"></script>
<script>
  Vue.use(<%- options.componentName %>)
  var vm = new Vue({
    el: 'body'
  })
</script>
```

#### NPM

```shell
$ npm install --save <%- options.packageName %>
```

#### Yarn

```shell
$ yarn add <%- options.packageName %>
```

#### CommonJS

```js
var <%- options.componentName %> = require('<%- options.packageName %>')

new Vue({
  components: {
    '<%- options.packageName %>': <%- options.componentName %>
  }
})
```

#### ES6 (Vue-CLI users)

```js
import <%- options.componentName %> from '<%- options.packageName %>'

new Vue({
  components: {
    <%- options.componentName %>
  }
})
```

### Usage

---

## Security

If you discover any security related issues, please email <%- options.authorEmail %> instead of using the issue tracker.

---

## Credits

- [<%- options.authorName %>][link-author]

---

## License

Copyright (c) 2018 [<%- options.authorName %>][link-author] by [MIT](https://opensource.org/licenses/MIT)

---

[link-author]: https://github.com/<%- options.authorName %>
