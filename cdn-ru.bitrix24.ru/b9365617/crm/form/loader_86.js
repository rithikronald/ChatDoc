;(function () {
;(function () {
(function(){if(!window.b24form){window.b24form=function(e){b24form.forms=b24form.forms||[];b24form.forms.push(e);if(e.ref&&b24form.Loader&&!this.loaded){this.loaded=true;b24form.Loader.loadJs(e.ref,true)}}}if(window.b24form.Loader){return}function e(){this.requested=false;this.queue=[]}e.prototype={run:function(e){e=e||{};var o=e.resources||{};this.queue.push(e.form);if(!this.requested){var t=this.loadApp.bind(this,o.app);this.requested=true;if(o.polyfill&&!this.checkPolyfills()){this.loadJs(o.polyfill,true,t)}else{t()}}this.loadForms()},loadApp:function(e){if(!e){return}window.b24form.App?this.loadForms():this.loadJs(e,true,this.loadForms.bind(this))},loadForms:function(){if(!this.checkPolyfills()){return}if(!window.b24form.App){return}var e=this.queue;this.queue=[];e.forEach(this.loadForm,this)},loadForm:function(e){b24form.App.initFormScript24(e)},checkPolyfills:function(){return window.fetch&&window.Request&&window.Response&&window.Promise&&Object.assign&&Array.prototype.find&&Array.prototype.includes},loadJs:function(e,o,t){var i=document.createElement("SCRIPT");i.setAttribute("type","text/javascript");i.setAttribute("async","");if(o){i.setAttribute("src",e+"?"+(Date.now()/864e5|0));if(t){i.onload=t}this.appendToHead(i)}else{i.appendChild(document.createTextNode(e));this.appendToHead(i)}},appendToHead:function(e){(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(e)}};window.b24form.Loader=new e})();
//# sourceMappingURL=https://ank26.bitrix24.ru/bitrix/js/crm/site/form/embed/unit/script.map.js

window.b24form.Loader.run({"form":{"id":"86","sec":"msw7ih","lang":"en","address":"https:\/\/ank26.bitrix24.ru","views":{"click":{"type":"panel","position":"right","vertical":"bottom"},"auto":{"type":"popup","position":"center","vertical":"bottom","delay":5}},"data":{"language":"en","design":{"style":"classic","border":{"bottom":true,"top":false,"left":false,"right":false},"color":{"primary":"#00aeef","primaryText":"#fff","text":"#000","background":"#ffffff","fieldBorder":"#00000012","fieldBackground":"#0000000d","fieldFocusBackground":"#fff"}},"title":"","desc":"","buttonCaption":"Send","useSign":true,"date":{"dateFormat":"DD.MM.YYYY","dateTimeFormat":"DD.MM.YYYY HH:MI:SS","sundayFirstly":false},"currency":{"code":"RUB","title":"\u0420\u0443\u0431\u043b\u044c","format":"# \u20bd"},"fields":[{"id":"CONTACT_NAME","name":"CONTACT_NAME","label":"First name","visible":true,"required":true,"multiple":false,"type":"name","placeholder":null,"value":"","items":[],"hint":"","hintOnFocus":false,"autocomplete":true,"bigPic":false,"contentTypes":null},{"id":"CONTACT_LAST_NAME","name":"CONTACT_LAST_NAME","label":"Last name","visible":true,"required":true,"multiple":false,"type":"last-name","placeholder":null,"value":"","items":[],"hint":"","hintOnFocus":false,"autocomplete":true,"bigPic":false,"contentTypes":null},{"id":"CONTACT_PHONE","name":"CONTACT_PHONE","label":"Contact phone number","visible":true,"required":true,"multiple":false,"type":"phone","placeholder":null,"value":"","items":[],"hint":"the number at which you can be contacted via Whatsapp!","hintOnFocus":true,"autocomplete":true,"bigPic":false,"contentTypes":null},{"id":"CONTACT_EMAIL","name":"CONTACT_EMAIL","label":"E-mail","visible":true,"required":true,"multiple":false,"type":"email","placeholder":null,"value":"","items":[],"hint":"","hintOnFocus":false,"autocomplete":true,"bigPic":false,"contentTypes":null}],"agreements":[{"id":"AGREEMENT_30","name":"AGREEMENT_30","label":"By clicking on the button, I accept the terms of the agreement.","value":"Y","required":false,"checked":false,"content":{"title":"Personal data - any information related to a certa","url":null,"text":"Personal data - any information related to a certain or determined on the basis of such information to an individual.\r\nBeing a personal data subject and acting in accordance with Federal Law #152-FZ \u201cOn Personal Data\u201d of the Russian Federation dated 27\/07\/2006 and General Data Protection Regulation (EU GDPR) The latest consolidated version of the Regulation with corrections by Corrigendum, OJ L 127, 23.5.2018, p. 2 ((EU) 2016\/679),\r\nI hereby freely, by my own will and in my interest, agree to my personal data being processed by the following Operator(s) , each of which can both provide and receive personal data and process personal data either independently or jointly with other persons:\r\nCHATAPP LLC Address: Russia, Stavropol, Lenina 415D office 601 (hereinafter referred to as the Operator).\r\nThe consent is given to the Operator to perform the following actions with my personal data using automation tools and\/or without using such tools: collection, systematization, accumulation, storage, clarification (updating, modification), use, depersonalization, transfer to third parties for the purposes specified below, as well as the implementation of any other actions provided for by the current legislation of the Russian Federation in both non-automated and automated ways.\r\nThis consent to the processing of personal data is given by me for the purposes of:\r\nExecution of mutual contractual obligations under the agreements\/contracts between the Company and me\r\nGetting an opportunity to use the functionality of the Company\u0027s websites\r\nGetting an opportunity to use the client applications\r\nGetting an opportunity to use the downloadable client Software application developed by the Company and described in the Software documentation\r\nEnablement to interact with me, for example, to answer requests, to contact me directly to discuss any questions related to installation\r\nEnablement to interact with me in various ways, in particular, by sending me e-mails and other ways\r\nThis consent is valid until it is revoked by sending a corresponding notification to the email address \u003CEMAIL \u003E. If I withdraw my consent to the processing of personal data, the Operator has the right to continue processing personal data without my consent if there are grounds specified in paragraphs 2-11 of Part 1 of Article 6, Part 2 of Article 10 and part 2 of Article 11 of Federal Law No. 152-FZ \u0022On Personal Data\u0022 dated 27.07.2006.\r\n"}}],"dependencies":[],"recaptcha":{"use":false}}},"resources":{"app":"https:\/\/cdn-ru.bitrix24.ru\/b9365617\/crm\/form\/app.js","polyfill":"https:\/\/cdn-ru.bitrix24.ru\/b9365617\/crm\/form\/polyfill.js"}});
})();


})();