let mix = require('laravel-mix');

mix
    .js('src/main.js', 'js')
    .sass('src/style.sass', 'css')
    .setPublicPath('dist');