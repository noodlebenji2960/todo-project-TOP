(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),i=n.n(o),d=n(645),r=n.n(d)()(i());r.push([e.id,":root{\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody{\n    margin: 0px;\n}\n\n#container{\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 50px;\n}\n\nmain{\n    grid-area: 1 / 1 / 2 / 2;\n    display: grid;\n    grid-template-columns: min-content min-content min-content;\n    overflow: hidden;\n}\n\n.title{\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-weight: bolder;\n}\n\n#projectsNav .title img, #todosNav .title img{\n    visibility: visible;\n    cursor: pointer;\n}\n\nmain button{\n    width: 100%;\n}\n\nmain ul{\n    list-style: none;\n    margin: 0px;\n    padding: 0px;\n}\n\nmain li{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 10px 0px;\n    cursor: pointer;\n    user-select: none;\n}\n\nmain li span{\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    height: 30px;\n    width: 100%;\n    user-select: none;\n    margin: 0px;\n    padding: 5px;\n}\n\n#projectsNav{\n    background-color: #DDDDDD;\n    user-select: none;\n    position: relative;\n    padding: 10px;\n    overflow: hidden;\n}\n\n#projectsNav img, #todosNav img{\n    height: 30px;\n    visibility: hidden;\n}\n\n#todosNav{\n    background-color: #EEEEEE;\n    padding: 10px;\n    visibility: hidden;\n    user-select: none;\n    position: relative;\n    width: 0px;\n    overflow: hidden;\n}\n\n#projectsList li:not(.selected):hover, #todosList li:not(.selected):hover{\n    background-color: #CCCCCC;\n    border-radius: 5px;\n}\n\n#todosList li:hover .delete, #projectsList li:hover .delete{\n    visibility: visible;\n}\n\n.selected:not(.delete){\n    background-color: #2196F3;\n    color: #FFFFFF;\n    border-radius: 5px;\n}\n\n#todosContent{\n    visibility: hidden;\n    box-sizing: border-box;\n    width: 0px;\n    padding: 40px 10px 10px 10px;\n}\n\n#todosContent label{\n    user-select: none;\n}\n\n#todosContent textarea, #todosContent input, #todosContent select, #todosContent option{\n    border: 1px solid #DDDDDD;\n    outline-width: 0px;\n    border-radius: 5px;\n    resize: none;\n    width: 100%;\n    padding: 5px 0px;\n    margin-bottom: 10px;\n}\n\nfooter{\n    grid-area: 2 / 1 / 3 / 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding: 5px 20px;\n}\n\nfooter a{\n    color: white;\n}\n\nfooter a:hover{\n    text-decoration: underline;\n}\n\nfooter img{\n    height: 20px;\n    margin-right: 10px;\n}\n\n#overlay{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(255, 255, 255, 0.5);\n    margin: 0px;\n    backdrop-filter: blur(3px);\n    z-index: 1;\n}\n\n.popupWindow{\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    z-index: 1;\n    padding: 20px;\n    margin: 50px;\n}\n\nform input[type=text], form input[type=date], form select{\n    width: 100%;\n    margin: 0px 0px 10px 0px;\n}\n\nform input[type=radio]{\n    margin: 10px;\n}\n\nform fieldset{\n    border: none;\n}\n\nform legend {\n    font-size: 1.5rem;\n    margin-bottom: 10px;\n}\n\nform button{\n    margin: 5px 10px 0px 0px;\n}\n\n.resizer{\n    width: 5px;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    right: 0;\n    cursor: col-resize;\n}\n\n.priority{\n    position: absolute;\n    width: 6px;\n    height: 30px;\n    left: 2px;\n    margin-right: 2px;\n    border-radius: 5px;\n}",""]);const c=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,d){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);o&&r[l[0]]||(void 0!==d&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=d),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var d={},r=[],c=0;c<e.length;c++){var s=e[c],a=o.base?s[0]+o.base:s[0],l=d[a]||0,p="".concat(a," ").concat(l);d[a]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=i(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var d=o(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<d.length;r++){var c=n(d[r]);t[c].references--}for(var s=o(e,i),a=0;a<d.length;a++){var l=n(d[a]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}d=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var d=n.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var d=t[o]={id:o,exports:{}};return e[o](d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),i=n.n(o),d=n(569),r=n.n(d),c=n(565),s=n.n(c),a=n(216),l=n.n(a),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=r().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=n.p+"assets/97d4c0a10ac97607dc65.svg",g=(n.p,n.p+"assets/3cffe9a515498593b872.svg");let y=[{title:"Tic-tac-toe-TOP",description:"Tic-tac-toe project for The Odin Project",notes:"none",todoList:[{title:"Animate",description:"add animations to ",dueDate:"2023-03-05",priority:"high",notes:"",check:!1},{title:"AI",description:"add additional ai opponents with varying difficulties ",dueDate:"2023-01-05",priority:"low",notes:"",check:!1}],check:!1},{title:"Chess",description:"personal chess project - no tutorials",notes:"none",todoList:[{title:"artifical intellegance",description:"",dueDate:"2023-03-05",priority:"medium",notes:"",check:!1},{title:"add colors",description:"add additional ai opponents with varying difficulties ",dueDate:"2023-01-05",priority:"low",notes:"",check:!1}],check:!1}];function v(e,t,n){this.title=e,this.description=t,this.notes=n,this.todoList=[],this.check=!1}function E(){const e=document.getElementById("titleInput"),t=document.getElementById("descriptionInput"),n=document.getElementById("notesInput"),o=new v(e.value,t.value,n.value);y.push(o)}function x(e,t,n,o,i){this.title=e,this.description=t,this.dueDate=o,this.priority=i,this.notes=n,this.check=!1}function b(){const e=document.getElementById("titleInput"),t=document.getElementById("descriptionInput"),n=document.getElementById("notesInput"),o=(document.getElementById("dueDateInput"),new x(e.value,t.value,n.value));y.find((function(e){if(1==e.check)return!0})).todoList.push(o)}const C=document.getElementById("container");function w(){if(document.getElementById("projectsList").textContent="",document.getElementById("todosList").textContent="",document.getElementById("todosDescription").value="",y.length>0){for(let n=0;n<y.length;n++){const o=document.createElement("li");document.getElementById("projectsList").appendChild(o),o.id=y[n].title;const i=document.createElement("span");i.textContent=y[n].title+"("+y[n].todoList.length+")",o.appendChild(i),o.addEventListener("click",(e=>t(e)));const d=document.createElement("img");d.src=f,d.classList.add("delete"),d.addEventListener("click",(t=>e(t))),o.appendChild(d)}function e(e){e.stopPropagation();const t=y.findIndex((function(t){if(t.title==e.target.parentNode.id)return!0}));y.splice(t,1),w()}function t(e){document.getElementById("todosDescription").value="",document.getElementById("projectsNav").style.transition="300ms",document.getElementById("todosNav").style.transition="300ms";for(let e=0;e<y.length;e++)document.getElementById("projectsList").children[e].classList.remove("selected");var t;e.target.parentNode.classList.add("selected"),t=e.target.parentNode.id,y.forEach((function(e){e.check=!1})),y.find((function(e){if(e.title==t)return!0})).check=!0,I()}}else{const r=document.createElement("li");document.getElementById("projectsList").appendChild(r),r.textContent="No Projects"}}function I(){document.getElementById("todosList").textContent="";const e=y.find((function(e){if(1==e.check)return!0}));if(e.todoList.length>0){document.getElementById("todosNav").style.visibility="visible",document.getElementById("projectsNav").style.width=window.innerWidth/2-20+"px",document.getElementById("todosNav").style.width=window.innerWidth/2-20+"px";for(let o=0;o<e.todoList.length;o++){const i=document.createElement("li");document.getElementById("todosList").appendChild(i);const d=document.createElement("span");d.textContent=e.todoList[o].title,i.appendChild(d),i.id=e.todoList[o].title;const r=document.createElement("div");r.classList.add("priority"),"low"==e.todoList[o].priority?r.style.backgroundColor="#47B134":"medium"==e.todoList[o].priority?r.style.backgroundColor="#F3AA21":"high"==e.todoList[o].priority&&(r.style.backgroundColor="#B1343C"),i.appendChild(r),i.addEventListener("click",(e=>n(e)));const c=document.createElement("img");c.src=f,c.classList.add("delete"),c.addEventListener("click",(n=>t(n,e))),i.appendChild(c)}function t(e,t){e.stopPropagation();const n=t.todoList.findIndex((function(t){if(t.title==e.target.parentNode.id)return!0}));t.todoList.splice(n,1),w(),I()}function n(e){const t=e.target.parentNode.id,n=y.find((function(e){if(1==e.check)return!0})),o=n.todoList.find((function(e){if(e.title==t)return!0}));for(let e=0;e<n.todoList.length;e++)document.getElementById("todosList").children[e].classList.remove("selected");e.target.parentNode.classList.add("selected"),function(e){y.forEach((function(e){e.todoList.forEach((function(e){e.check=!1}))})),y.find((function(e){if(1==e.check)return!0})).todoList.find((function(t){if(t.title==e)return!0})).check=!0}(t),document.getElementById("todosDueDate").value=o.dueDate;const i=document.getElementById("todosPriority");"low"==o.priority?(i.style.backgroundColor="#47B134",i.value="low"):"medium"==o.priority?(i.style.backgroundColor="#F3AA21",i.value="medium"):"high"==o.priority&&(i.style.backgroundColor="#B1343C",i.value="high"),i.addEventListener("change",(function(){"low"==i.value?i.style.backgroundColor="#47B134":"medium"==i.value?i.style.backgroundColor="#F3AA21":"high"==i.value&&(i.style.backgroundColor="#B1343C")})),""!==o.description?document.getElementById("todosDescription").value=o.description:(document.getElementById("todosDescription").value="",document.getElementById("todosDescription").setAttribute("placeholder","No content")),""!==o.notes?document.getElementById("todosNotes").value=o.notes:(document.getElementById("todosNotes").value="",document.getElementById("todosNotes").setAttribute("placeholder","No content")),document.getElementById("todosContent").style.visibility="visible",document.getElementById("projectsNav").style.transition="300ms",document.getElementById("todosNav").style.transition="300ms",document.getElementById("projectsNav").style.width="100px",document.getElementById("todosNav").style.width="100px",document.getElementById("todosContent").style.width=window.innerWidth-240+"px"}}else{const s=document.createElement("li");document.getElementById("todosList").appendChild(s),s.textContent="No to-do's"}}function L(e){document.getElementById("overlay").remove()}function B(e,t){!function(){const e=document.createElement("div");e.classList.add("overlay"),e.id="overlay",C.insertBefore(e,C.children[0]),e.addEventListener("click",L)}();const n=document.createElement("div");n.classList.add("popupWindow"),document.getElementById("overlay").appendChild(n),n.addEventListener("click",(e=>{e.stopPropagation()}));const o=document.createElement("form");n.appendChild(o);const i=document.createElement("fieldset");o.appendChild(i);const d=document.createElement("legend");"New Project"==t?d.innerText="New Project":"New to-do"==t&&(d.innerText="New to-do"),i.appendChild(d);const r=document.createElement("label");r.for="titleInput",r.innerText="Title:",i.appendChild(r);const c=document.createElement("input");c.id="titleInput",c.type="text",i.appendChild(c);const s=document.createElement("label");s.for="descriptionInput",s.innerText="Description:",i.appendChild(s);const a=document.createElement("input");a.id="descriptionInput",a.type="text",i.appendChild(a);const l=document.createElement("label");l.for="notesInput",l.innerText="Notes:",i.appendChild(l);const p=document.createElement("input");if(p.id="notesInput",p.type="text",i.appendChild(p),"New to-do"==e.target.innerText){const e=document.createElement("label");e.for="dueDateInput",e.innerText="Due Date:",i.appendChild(e);const t=document.createElement("input");t.id="dueDateInput",t.type="date",i.appendChild(t);const n=document.createElement("label");n.for="priorityInput",n.innerText="Priority:",i.appendChild(n),i.appendChild(document.createElement("br"));const o=["Low","Medium","High"];for(let e=0;e<o.length;e++){const t=document.createElement("label");t.setAttribute("for",o[e]),t.innerText=o[e],i.appendChild(t);const n=document.createElement("input");n.id=o[e],n.type="radio",n.name="priorityInput",i.appendChild(n)}i.appendChild(document.createElement("br"))}const u=document.createElement("button");u.id="submitButton",u.innerText="Submit","New Project"==t?(u.type="button",u.addEventListener("click",E),u.addEventListener("click",L),u.addEventListener("click",w)):"New to-do"==t?(u.type="button",u.addEventListener("click",b),u.addEventListener("click",L),u.addEventListener("click",w),u.addEventListener("click",I)):u.type="submit",i.appendChild(u);const m=document.createElement("button");m.id="clearButton",m.type="button",m.innerText="Clear",m.addEventListener("click",k),i.appendChild(m)}function k(){document.getElementById("titleInput").value="",document.getElementById("descriptionInput").value="",document.getElementById("notesInput").value=""}C.appendChild(function(){const e=document.createElement("main");function t(e){var t=document.createElement("div");function n(t){e.style.width=t.clientX-e.offsetLeft+"px",todosContent.style.width=window.innerWidth-todosContent.offsetLeft+"px"}function o(t){e.style.transition="500ms",window.removeEventListener("mousemove",n,!1),window.removeEventListener("mouseup",o,!1)}return t.classList.add("resizer"),t.addEventListener("mousedown",(function(t){e.style.transition=null,window.addEventListener("mousemove",n,!1),window.addEventListener("mouseup",o,!1)}),!1),t}return e.appendChild(function(){const e=document.createElement("nav");e.id="projectsNav",e.style.width=window.innerWidth-20+"px",e.appendChild(t(e));const n=document.createElement("div");n.classList.add("title"),n.innerText="Projects";const o=document.createElement("img");o.src=g,o.addEventListener("click",(e=>B(e,"New Project"))),n.appendChild(o),e.appendChild(n);const i=document.createElement("ul");return i.id="projectsList",e.appendChild(i),e}()),e.appendChild(function(){const e=document.createElement("nav");e.id="todosNav",e.appendChild(t(e));const n=document.createElement("div");n.classList.add("title"),n.innerText="Tasks";const o=document.createElement("img");o.src=g,o.addEventListener("click",(e=>B(e,"New to-do"))),n.appendChild(o),e.appendChild(n);const i=document.createElement("ul");return i.id="todosList",e.appendChild(i),e}()),e.appendChild(function(){const e=document.createElement("div");e.id="todosContent";const t=document.createElement("label");t.setAttribute("for","todosDescription"),t.textContent="Description",e.appendChild(t);const n=document.createElement("textarea");n.id="todosDescription",n.setAttribute("cols","auto"),n.setAttribute("rows","auto"),n.addEventListener("change",l),e.appendChild(n),n.style.height=window.innerHeight-315+"px";const o=document.createElement("label");o.setAttribute("for","todosPriority"),o.textContent="Priority",e.appendChild(o);const i=document.createElement("select");i.id="todosPriority",i.style.width="100%";const d=["low","medium","high"];for(let e=0;e<d.length;e++){const t=document.createElement("option");t.innerText=d[e],t.style.backgroundColor="#FFFFFF",i.appendChild(t)}i.addEventListener("change",l),e.appendChild(i);const r=document.createElement("label");r.setAttribute("for","todosDueDate"),r.textContent="Due Date",e.appendChild(r);const c=document.createElement("input");c.setAttribute("type","date"),c.id="todosDueDate",c.addEventListener("change",l),e.appendChild(c);const s=document.createElement("label");s.setAttribute("for","todosNotes"),s.textContent="Notes",e.appendChild(s);const a=document.createElement("textarea");function l(){const e=y.find((function(e){if(1==e.check)return!0})).todoList.find((function(e){if(1==e.check)return!0}));e.dueDate=document.getElementById("todosDueDate").value,e.priority=document.getElementById("todosPriority").value,e.description=document.getElementById("todosDescription").value,e.notes=document.getElementById("todosNotes").value,localStorage.removeItem("projectArray"),localStorage.setItem("projectArray",JSON.stringify(y))}return a.id="todosNotes",a.addEventListener("change",l),e.appendChild(a),e}()),e}()),C.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("span"),n=document.createElement("a");return e.appendChild(t),t.textContent="designed by Ben",n.href="https://github.com/noodlebenji2960",t.appendChild(n),e}()),y=JSON.parse(localStorage.getItem("projectArray")),w()})()})();