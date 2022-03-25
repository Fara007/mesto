(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i,a,c,u,s,l,f,p){var d=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_activateLike",(function(){d._like.classList.add("element__like_active")})),t(this,"_disableLike",(function(){d._like.classList.remove("element__like_active")})),this._selector=e,this._name=r,this._link=o,this._alt=i,this._likes=a,this._id=c,this._userId=u,this._owner=s,this._handleCardClick=l,this._handleDeleteClick=f,this._handleLikeClick=p}var r,o;return r=n,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".element").cloneNode(!0)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._element.querySelector(".element__like-count").textContent=this._likes.length,this.isLiked()?this._activateLike():this._disableLike()}},{key:"getView",value:function(){return this._element=this._getTemplate(),this._like=this._element.querySelector(".element__like"),this._cardImage=this._element.querySelector(".element__image"),this._element.querySelector(".element__title").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._alt,this._setEventListeners(),this.setLikes(this._likes),this._userId!==this._owner&&(this._element.querySelector(".element__delete-icon").style.display="none"),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick()})),this._element.querySelector(".element__delete-icon").addEventListener("click",(function(){e._handleDeleteClick(e._id)})),this._like.addEventListener("click",(function(){e._handleLikeClick(e._id)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();const r=n;function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._buttonElement=this._form.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_showError",value:function(e,t){var n=this._form.querySelector("#".concat(e.id,"-error"));n.textContent=t,n.classList.add(this._errorClass),e.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));t.textContent=" ",t.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}},{key:"_hasInvalidInput",value:function(){return Array.from(this._inputList).some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonError",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_checkIfInputValid",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_setInputListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkIfInputValid(t),e._toggleButtonError()}))}))}},{key:"resetValidation",value:function(){this._toggleButtonError()}},{key:"enableValidation",value:function(){this._setInputListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const c=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){var n=e._renderer(t);e.addItem(n)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const s=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.closePopup()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=t}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup__overlay")&&e.closePopup(),t.target.classList.contains("popup__close-icon")&&e.closePopup()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function _(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n._popup.querySelector(".form"),n._handleFormSubmit=t,n._loadingButton=n._popup.querySelector(".form__button"),n._buttonText=n._loadingButton.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this._popup.querySelectorAll(".form__input")),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"closePopup",value:function(){p(y(a.prototype),"closePopup",this).call(this),this._form.reset()}},{key:"changeSubmitHandler",value:function(e){this._handleFormSubmit=e}},{key:"renderLoading",value:function(e){this._loadingButton.textContent=e?"Сохранение...":this._buttonText}},{key:"setEventListeners",value:function(){var e=this;p(y(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=e.querySelector(".figure__image"),t._name=e.querySelector(".figure__subtitle"),t}return t=a,(n=[{key:"openPopup",value:function(e){var t=e.link,n=e.name;this._image.src=t,this._name.textContent=n,this._image.alt=n,k(E(a.prototype),"openPopup",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.profileName,r=t.profileJob,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._job=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._name.textContent=e,this._job.textContent=t,this._avatar.src=n}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=(document.querySelectorAll(".popup"),document.querySelector(".popup_edit")),O=document.querySelector(".popup_add"),I=document.querySelector(".popup_image"),q=document.querySelector(".popup__confirm"),T=document.querySelector(".popup_avatar"),A=(document.querySelector(".figure__image"),document.querySelector(".figure__subtitle"),document.querySelector(".profile__edit-button")),B=document.querySelector(".profile__add-button"),x=document.querySelector(".profile__avatar-edit"),R=document.querySelector(".profile__info-name"),V=document.querySelector(".profile__info-job"),z=document.querySelector(".profile__avatar"),D=document.querySelector(".form_edit"),U=document.querySelector(".form_add"),N=D.querySelector(".form__input_user_name"),J=D.querySelector(".form__input_user_job"),H=document.querySelector(".form__input_place_name"),F=document.querySelector(".form__input_place_link");function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".form__button_add_card");var $,G=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("https://nomoreparties.co/v1/cohort-37/users/me",{headers:{authorization:"84711bd2-b8ee-4cdf-8cf8-8f6af911774d"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"getInitialCards",value:function(){return fetch("https://nomoreparties.co/v1/cohort-37/cards",{headers:{authorization:"84711bd2-b8ee-4cdf-8cf8-8f6af911774d"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"editProfile",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-37/users/me",{method:"PATCH",headers:{authorization:"84711bd2-b8ee-4cdf-8cf8-8f6af911774d","Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"addCard",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-37/cards",{method:"POST",headers:{authorization:"84711bd2-b8ee-4cdf-8cf8-8f6af911774d","Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-37/cards/".concat(e),{method:"DELETE",headers:{authorization:"84711bd2-b8ee-4cdf-8cf8-8f6af911774d"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"addLike",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-37/cards/".concat(e,"/likes"),{method:"PUT",headers:{authorization:"84711bd2-b8ee-4cdf-8cf8-8f6af911774d"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"deleteLike",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-37/cards/".concat(e,"/likes"),{method:"DELETE",headers:{authorization:"84711bd2-b8ee-4cdf-8cf8-8f6af911774d"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"updateAvatar",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-37/users/me/avatar",{method:"PATCH",headers:{authorization:"84711bd2-b8ee-4cdf-8cf8-8f6af911774d","Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.log(e)}))}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-37",headers:{authorization:"84711bd2-b8ee-4cdf-8cf8-8f6af911774d","Content-Type":"application/json"}});function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Promise.all([G.getProfile(),G.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$=o._id,Y.setUserInfo(o.name,o.about,o.avatar),i.forEach((function(e){var t=oe({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:$,ownerId:e.owner._id});W.addItem(t)}))})).catch((function(e){console.log("Ошибка: ".concat(e))}));var Q,W=new c({data:[],renderer:oe},".elements"),X=new m(O,(function(e){X.renderLoading(!0),G.addCard(e[H.name],e[F.name]).then((function(e){var t=oe({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:$,ownerId:e.owner._id});W.addItem(t),X.closePopup()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){X.renderLoading(!1)}))})),Y=new j({profileName:R,profileJob:V,profileAvatar:z}),Z=new m(C,(function(e){Z.renderLoading(!0),G.editProfile(e[N.name],e[J.name]).then((function(t){Y.setUserInfo(e[N.name],e[J.name]),Z.closePopup()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){Z.renderLoading(!1)}))})),ee=new m(q),te=new L(I),ne=new m(T,(function(e){ne.renderLoading(!0),G.updateAvatar(e.avatar).then((function(e){Y.setUserInfo(e.name,e.about,e.avatar),ne.closePopup()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ne.renderLoading(!1)}))})),re={};function oe(e){var t=new r(".template",e.name,e.link,e.name,e.likes,e.id,e.userId,e.ownerId,(function(){te.openPopup(e)}),(function(e){ee.openPopup(),ee.changeSubmitHandler((function(){G.deleteCard(e).then((function(){t.deleteCard(),ee.closePopup()}))}))}),(function(e){t.isLiked()?G.deleteLike(e).then((function(e){t.setLikes(e.likes)})):G.addLike(e).then((function(e){t.setLikes(e.likes)}))}));return t.getView()}Q={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__error_visible"},Array.from(document.querySelectorAll(Q.formSelector)).forEach((function(e){var t=new i(Q,e),n=e.getAttribute("name");re[n]=t,t.enableValidation()})),Z.setEventListeners(),ee.setEventListeners(),te.setEventListeners(),ne.setEventListeners(),A.addEventListener("click",(function(){var e=Y.getUserInfo();N.value=e.name,J.value=e.job,Z.openPopup()})),B.addEventListener("click",(function(){re[U.getAttribute("name")].resetValidation(),X.openPopup()})),x.addEventListener("click",(function(){ne.openPopup()})),X.setEventListeners(),Z.setEventListeners(),ee.setEventListeners(),te.setEventListeners(),ne.setEventListeners(),W.renderItems()})();