webpackJsonp([0],{94:function(t,e,n){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function A(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=n.n(s),l=n(95),c=(n.n(l),n(97)),p=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=function(t){function e(){var t,n,A,s;r(this,e);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=A=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),A.state={title:"",content:"",author:"",submitted:!1,posts:[]},A.postDataHandler=function(){var t=[].concat(o(A.state.posts));t.push({title:A.state.title,content:A.state.content,author:A.state.author}),A.setState({title:"",content:"",author:"",submitted:!0,posts:t})},s=n,a(A,s)}return A(e,t),p(e,[{key:"render",value:function(){var t=this,e=null;return this.state.submitted&&(e=this.state.posts.map(function(t,e){return i.a.createElement(c.a,{title:t.title,content:t.content,author:t.author,key:e})})),i.a.createElement("div",null,i.a.createElement("div",{className:"NewPostContainer"},i.a.createElement("div",{className:"NewPost"},i.a.createElement("h1",null,"Add a Post"),i.a.createElement("label",null,"Title"),i.a.createElement("input",{type:"text",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),i.a.createElement("label",null,"Content"),i.a.createElement("textarea",{rows:"4",value:this.state.content,onChange:function(e){return t.setState({content:e.target.value})}}),i.a.createElement("label",null,"Author"),i.a.createElement("input",{type:"text",value:this.state.author,onChange:function(e){return t.setState({author:e.target.value})}}),i.a.createElement("button",{onClick:this.postDataHandler},"Add Post"))),i.a.createElement("div",{className:"UserPosts"},e))}}]),e}(s.Component);e.default=u},95:function(t,e,n){var o=n(96);"string"===typeof o&&(o=[[t.i,o,""]]);var r={};r.transform=void 0;n(93)(o,r);o.locals&&(t.exports=o.locals)},96:function(t,e,n){e=t.exports=n(92)(!0),e.push([t.i,".NewPostContainer{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.NewPost{width:24rem;margin:20px auto;padding:16px;border:none;border-radius:5px;text-align:center;color:#264653}.NewPost label{display:block;margin:10px auto;text-align:center;font-weight:700}.NewPost input,.NewPost select,.NewPost textarea{display:block;width:80%;-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid #264653;border-radius:5px;background-color:#e8e8e4;color:#264653;padding:5px;outline:none;font:inherit;margin:auto}.NewPost button{margin-top:25px;border:none;border-radius:5px;background-color:#264653;padding:10px 24px;color:#f4a261;cursor:pointer}.NewPost button:active,.NewPost button:hover{color:#fff;background-color:#f4a261}.UserPosts{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:80%;margin:0 auto 5rem}","",{version:3,sources:["C:/Users/kyleb/OneDrive/Desktop/Projects/2020 Portfolio projects/routing--01-start/src/containers/Blog/NewPost/NewPost.css"],names:[],mappings:"AAAA,kBACC,WAAY,AACZ,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,sBAAwB,CAC5B,AAED,SACC,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,YAAa,AACb,kBAAmB,AACnB,kBAAmB,AACnB,aAAe,CACf,AAED,eACC,cAAe,AACf,iBAAkB,AAClB,kBAAmB,AACnB,eAAkB,CAClB,AAED,iDAGC,cAAe,AACf,UAAW,AACX,8BAA+B,AACvB,sBAAuB,AAC/B,yBAA0B,AAC1B,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,YAAa,AACb,aAAc,AACd,aAAc,AACd,WAAa,CACb,AAED,gBACC,gBAAiB,AACjB,YAAa,AACb,kBAAmB,AACnB,yBAA0B,AAC1B,kBAAmB,AACnB,cAAe,AACf,cAAgB,CAChB,AAED,6CAEC,WAAa,AACb,wBAA0B,CAC1B,AAED,WACC,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,mBAAoB,AACxB,2BAA4B,AACxB,6BAA8B,AAClC,UAAW,AACX,kBAAoB,CACpB",file:"NewPost.css",sourcesContent:[".NewPostContainer {\n\twidth: 100%;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-pack: center;\n\t    justify-content: center;\n}\n\n.NewPost {\n\twidth: 24rem;\n\tmargin: 20px auto;\n\tpadding: 16px;\n\tborder: none;\n\tborder-radius: 5px;\n\ttext-align: center;\n\tcolor: #264653;\n}\n\n.NewPost label {\n\tdisplay: block;\n\tmargin: 10px auto;\n\ttext-align: center;\n\tfont-weight: bold;\n}\n\n.NewPost input,\n.NewPost textarea,\n.NewPost select {\n\tdisplay: block;\n\twidth: 80%;\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\tborder: 2px solid #264653;\n\tborder-radius: 5px;\n\tbackground-color: #e8e8e4;\n\tcolor: #264653;\n\tpadding: 5px;\n\toutline: none;\n\tfont: inherit;\n\tmargin: auto;\n}\n\n.NewPost button {\n\tmargin-top: 25px;\n\tborder: none;\n\tborder-radius: 5px;\n\tbackground-color: #264653;\n\tpadding: 10px 24px;\n\tcolor: #f4a261;\n\tcursor: pointer;\n}\n\n.NewPost button:hover,\n.NewPost button:active {\n\tcolor: white;\n\tbackground-color: #f4a261;\n}\n\n.UserPosts {\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-flow: row wrap;\n\t    flex-flow: row wrap;\n\t-ms-flex-pack: space-evenly;\n\t    justify-content: space-evenly;\n\twidth: 80%;\n\tmargin: 0 auto 5rem;\n}\n"],sourceRoot:""}])},97:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var A=n(1),s=n.n(A),i=n(98),l=(n.n(i),function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()),c=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),l(e,[{key:"render",value:function(){return s.a.createElement("article",{className:"MyPost"},s.a.createElement("h1",null,this.props.title),s.a.createElement("div",{className:"Body"},this.props.content),s.a.createElement("p",null,this.props.author))}}]),e}(A.Component);e.a=c},98:function(t,e,n){var o=n(99);"string"===typeof o&&(o=[[t.i,o,""]]);var r={};r.transform=void 0;n(93)(o,r);o.locals&&(t.exports=o.locals)},99:function(t,e,n){e=t.exports=n(92)(!0),e.push([t.i,".MyPost{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:1 1;flex:1 1;max-width:30rem;min-width:20rem;padding:0 10px;background-color:#e9c46a;border-radius:5px;margin:5px;color:#264653}.Body{padding-bottom:25px}.MyPost p{margin-top:10px;color:#264653;padding-top:12px;border-top:1px solid #264653}","",{version:3,sources:["C:/Users/kyleb/OneDrive/Desktop/Projects/2020 Portfolio projects/routing--01-start/src/containers/Blog/MyPost/MyPost.css"],names:[],mappings:"AAAA,QACE,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,sBAAuB,AACnB,8BAA+B,AACnC,aAAc,AACV,SAAU,AACd,gBAAiB,AACjB,gBAAiB,AACjB,eAAgB,AAChB,yBAA0B,AAC1B,kBAAmB,AACnB,WAAY,AACZ,aAAc,CACf,AAED,MACE,mBAAqB,CACtB,AAED,UACE,gBAAiB,AACjB,cAAe,AACf,iBAAkB,AAClB,4BAA8B,CAC/B",file:"MyPost.css",sourcesContent:[".MyPost {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  -ms-flex: 1 1;\r\n      flex: 1 1;\r\n  max-width: 30rem;\r\n  min-width: 20rem;\r\n  padding: 0 10px;\r\n  background-color: #e9c46a;\r\n  border-radius: 5px;\r\n  margin: 5px;\r\n  color: #264653\r\n}\r\n\r\n.Body {\r\n  padding-bottom: 25px;\r\n}\r\n\r\n.MyPost p {\r\n  margin-top: 10px;\r\n  color: #264653;\r\n  padding-top: 12px;\r\n  border-top: 1px solid #264653;\r\n}"],sourceRoot:""}])}});
//# sourceMappingURL=0.2209cc34.chunk.js.map