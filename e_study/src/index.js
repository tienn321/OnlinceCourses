//system import
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from './_core/Redux';

//import from template css
import "./Templates/course-master/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css";
import "./Templates/course-master/plugins/OwlCarousel2-2.2.1/owl.carousel.css";
import "./Templates/course-master/plugins/OwlCarousel2-2.2.1/owl.theme.default.css";
import "./Templates/course-master/plugins/OwlCarousel2-2.2.1/animate.css";
import "./Templates/course-master/styles/main_styles.css";
import "./Templates/course-master/styles/responsive.css";

//Bootstrap, jquery, popper.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from "jquery";
import jQuery from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;
const bootstrap = require("bootstrap");

//js file
// import "./Templates/course-master/js/jquery-3.2.1.min.js"
// import "./Templates/course-master/plugins/greensock/TweenMax.min.js"
// import "./Templates/course-master/plugins/greensock/TimelineMax.min.js"
// import "./Templates/course-master/plugins/scrollmagic/ScrollMagic.min.js"
// import "./Templates/course-master/plugins/greensock/animation.gsap.min.js"
// import "./Templates/course-master/plugins/greensock/ScrollToPlugin.min.js"
// import "./Templates/course-master/plugins/OwlCarousel2-2.2.1/owl.carousel.js"
// import "./Templates/course-master/plugins/scrollTo/jquery.scrollTo.min.js"
// import "./Templates/course-master/plugins/easing/easing.js"
// import "./Templates/course-master/js/custom.js";



const store = createStore(rootReducer,
  // compose(
  //   applyMiddleware(thunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
   compose(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
