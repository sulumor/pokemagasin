<template>
  <div id="app">
    <loading v-show="this.$store.state.pokemons.length !== 151"></loading>
    <nav-top v-show="this.$store.state.pokemons.length == 151"></nav-top>
    <router-view v-show="this.$store.state.pokemons.length == 151"></router-view>
  </div>
</template>

<script>
import store from './store/index.js'
import Nav from './components/Nav'
import Loading from './components/Loading'

export default {
  name: 'App',
  store:store,
  components: {
    'nav-top': Nav,
    loading : Loading
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap");

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  text-decoration: none;
  color: #000;
  font-family: "Chakra Petch", sans-serif;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  background-image: linear-gradient(
      292deg,
      rgba(150, 150, 150, 0.03) 0%,
      rgba(150, 150, 150, 0.03) 20%,
      rgba(151, 151, 151, 0.03) 20%,
      rgba(151, 151, 151, 0.03) 40%,
      rgba(215, 215, 215, 0.03) 40%,
      rgba(215, 215, 215, 0.03) 60%,
      rgba(254, 254, 254, 0.03) 60%,
      rgba(254, 254, 254, 0.03) 80%,
      rgba(112, 112, 112, 0.03) 80%,
      rgba(112, 112, 112, 0.03) 100%
    ),
    linear-gradient(
      62deg,
      rgba(34, 34, 34, 0.03) 0%,
      rgba(34, 34, 34, 0.03) 20%,
      rgba(171, 171, 171, 0.03) 20%,
      rgba(171, 171, 171, 0.03) 40%,
      rgba(206, 206, 206, 0.03) 40%,
      rgba(206, 206, 206, 0.03) 60%,
      rgba(210, 210, 210, 0.03) 60%,
      rgba(210, 210, 210, 0.03) 80%,
      rgba(69, 69, 69, 0.03) 80%,
      rgba(69, 69, 69, 0.03) 100%
    ),
    linear-gradient(
      314deg,
      rgba(235, 235, 235, 0.03) 0%,
      rgba(235, 235, 235, 0.03) 20%,
      rgba(254, 254, 254, 0.03) 20%,
      rgba(254, 254, 254, 0.03) 40%,
      rgba(178, 178, 178, 0.03) 40%,
      rgba(178, 178, 178, 0.03) 60%,
      rgba(211, 211, 211, 0.03) 60%,
      rgba(211, 211, 211, 0.03) 80%,
      rgba(73, 73, 73, 0.03) 80%,
      rgba(73, 73, 73, 0.03) 100%
    ),
    linear-gradient(
      32deg,
      rgba(182, 182, 182, 0.01) 0%,
      rgba(182, 182, 182, 0.01) 12.5%,
      rgba(208, 208, 208, 0.01) 12.5%,
      rgba(208, 208, 208, 0.01) 25%,
      rgba(178, 178, 178, 0.01) 25%,
      rgba(178, 178, 178, 0.01) 37.5%,
      rgba(143, 143, 143, 0.01) 37.5%,
      rgba(143, 143, 143, 0.01) 50%,
      rgba(211, 211, 211, 0.01) 50%,
      rgba(211, 211, 211, 0.01) 62.5%,
      rgba(92, 92, 92, 0.01) 62.5%,
      rgba(92, 92, 92, 0.01) 75%,
      rgba(56, 56, 56, 0.01) 75%,
      rgba(56, 56, 56, 0.01) 87.5%,
      rgba(253, 253, 253, 0.01) 87.5%,
      rgba(253, 253, 253, 0.01) 100%
    ),
    linear-gradient(
      247deg,
      rgba(103, 103, 103, 0.02) 0%,
      rgba(103, 103, 103, 0.02) 12.5%,
      rgba(240, 240, 240, 0.02) 12.5%,
      rgba(240, 240, 240, 0.02) 25%,
      rgba(18, 18, 18, 0.02) 25%,
      rgba(18, 18, 18, 0.02) 37.5%,
      rgba(38, 38, 38, 0.02) 37.5%,
      rgba(38, 38, 38, 0.02) 50%,
      rgba(246, 246, 246, 0.02) 50%,
      rgba(246, 246, 246, 0.02) 62.5%,
      rgba(9, 9, 9, 0.02) 62.5%,
      rgba(9, 9, 9, 0.02) 75%,
      rgba(167, 167, 167, 0.02) 75%,
      rgba(167, 167, 167, 0.02) 87.5%,
      rgba(86, 86, 86, 0.02) 87.5%,
      rgba(86, 86, 86, 0.02) 100%
    ),
	linear-gradient(90deg, hsl(194, 0%, 10%), hsl(194, 0%, 10%));
	scroll-behavior: smooth;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
