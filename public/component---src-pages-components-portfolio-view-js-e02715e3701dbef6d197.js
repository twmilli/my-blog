webpackJsonp([72491852145694],{128:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var a=i(12),s=o(a),r=i(17),l=o(r),d=i(16),c=o(d),u=i(106),p=o(u),f=i(13),m=o(f),h=i(1),g=o(h),b=i(2),y=o(b),v=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},S=function(e){var t=v(e),i=t.sizes?t.sizes.src:t.resolutions.src;return!!w[i]||(w[i]=!0,!1)},E=void 0,L=[],k=function(e,t){n().observe(e),L.push([e,t])},j=null,x=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},I=function(e){var t=e.opacity,i=void 0===t?"":t,o=e.src,n=e.srcSet,a=e.sizes,s=void 0===a?"":a,r=e.title,l=void 0===r?"":r,d=e.alt,c=void 0===d?"":d,u=e.width,p=void 0===u?"":u,f=e.height,m=void 0===f?"":f,h=e.transitionDelay,g=void 0===h?"":h;return"<img width="+p+" height="+m+' src="'+o+'" srcset="'+n+'" alt="'+c+'" title="'+l+'" sizes="'+s+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+g+";opacity:"+i+';width:100%;height:100%;object-fit:cover;objectPosition:center"/>'},_=function(e){var t=e.opacity,i=e.onLoad,o=e.transitionDelay,n=void 0===o?"":o,a=(0,p.default)(e,["opacity","onLoad","transitionDelay"]);return g.default.createElement("img",(0,m.default)({},a,{onLoad:i,style:{position:"absolute",top:0,left:0,transition:"opacity 0.5s",transitionDelay:n,opacity:t,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}))};_.propTypes={opacity:y.default.number,transitionDelay:y.default.string,onLoad:y.default.func};var z=function(e){function t(i){(0,s.default)(this,t);var o=(0,l.default)(this,e.call(this,i)),n=!0,a=!0,r=!1,d=S(i);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,a=!1,r=!0),"undefined"==typeof window&&(n=!1,a=!1),o.state={isVisible:n,imgLoaded:a,IOSupported:r},o.handleRef=o.handleRef.bind(o),o}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&k(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),i=t.title,o=t.alt,n=t.className,a=t.outerWrapperClassName,s=t.style,r=void 0===s?{}:s,l=t.sizes,d=t.resolutions,c=t.backgroundColor,u=void 0;if(u="boolean"==typeof c?"lightgray":c,l){var p=l;return p.srcWebp&&p.srcSetWebp&&x()&&(p.src=p.srcWebp,p.srcSet=p.srcSetWebp),g.default.createElement("div",{className:(a?a:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===r.position?"initial":"relative"}},g.default.createElement("div",{className:(n?n:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden",zIndex:1},r),ref:this.handleRef},g.default.createElement("div",{style:{width:"100%",paddingBottom:100/p.aspectRatio+"%"}}),p.base64&&g.default.createElement(_,{alt:o,title:i,src:p.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),p.tracedSVG&&g.default.createElement(_,{alt:o,title:i,src:p.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),u&&g.default.createElement("div",{title:i,style:{backgroundColor:u,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&g.default.createElement(_,{alt:o,title:i,srcSet:p.srcSet,src:p.src,sizes:p.sizes,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,m.default)({alt:o,title:i},p))}})))}if(d){var f=d,h=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",zIndex:1,width:f.width,height:f.height},r);return"inherit"===r.display&&delete h.display,f.srcWebp&&f.srcSetWebp&&x()&&(f.src=f.srcWebp,f.srcSet=f.srcSetWebp),g.default.createElement("div",{className:(a?a:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===r.position?"initial":"relative"}},g.default.createElement("div",{className:(n?n:"")+" gatsby-image-wrapper",style:h,ref:this.handleRef},f.base64&&g.default.createElement(_,{alt:o,title:i,src:f.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s"}),f.tracedSVG&&g.default.createElement(_,{alt:o,title:i,src:f.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),u&&g.default.createElement("div",{title:i,style:{backgroundColor:u,width:f.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:f.height}}),this.state.isVisible&&g.default.createElement(_,{alt:o,title:i,width:f.width,height:f.height,srcSet:f.srcSet,src:f.src,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,m.default)({alt:o,title:i,width:f.width,height:f.height},f))}})))}return null},t}(g.default.Component);z.defaultProps={fadeIn:!0,alt:""},z.propTypes={responsiveResolution:y.default.object,responsiveSizes:y.default.object,resolutions:y.default.object,sizes:y.default.object,fadeIn:y.default.bool,title:y.default.string,alt:y.default.string,className:y.default.oneOfType([y.default.string,y.default.object]),outerWrapperClassName:y.default.oneOfType([y.default.string,y.default.object]),style:y.default.object,position:y.default.string,backgroundColor:y.default.oneOfType([y.default.string,y.default.bool]),onLoad:y.default.func},t.default=z},157:function(e,t,i){e.exports=i.p+"static/heatmap.93dfad7e.png"},158:function(e,t,i){e.exports=i.p+"static/invest.ecd6460b.png"},159:function(e,t,i){e.exports=i.p+"static/meteorite.14f94862.png"},160:function(e,t,i){e.exports=i.p+"static/openbar.3af9472e.png"},161:function(e,t,i){e.exports=i.p+"static/simon.c6dac3cc.png"},162:function(e,t,i){e.exports=i.p+"static/smitten.70efa390.png"},163:function(e,t,i){e.exports=i.p+"static/voting.88271421.png"},164:function(e,t,i){e.exports=i.p+"static/zombie.46567033.png"},105:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=i(1),l=o(r),d=i(128),c=(o(d),i(162)),u=o(c),p=i(164),f=o(p),m=i(161),h=o(m),g=i(158),b=o(g),y=i(163),v=o(y),w=i(160),S=o(w),E=i(159),L=o(E),k=i(157),j=o(k);i(133);var x=[{name:"Smitten Kitchen",img:u.default,link:"https://github.com/twmilli/smitten-kitchen"},{name:"Zombie Shooter",img:f.default,link:"https://github.com/twmilli/Zombie-Game"},{name:"Simon",img:h.default,link:"http://twmilli.github.io/simon/"},{name:"Invest Tracker",img:b.default,link:"https://investracker.herokuapp.com/"},{name:"Project Vote",img:v.default,link:"http://project-vote.surge.sh/"},{name:"Open Bar",img:S.default,link:"https://open-bar.herokuapp.com/"},{name:"Meteorite Mapping",img:L.default,link:"https://twmilli.github.io/Meteorite_Mapping/"},{name:"Heat Visualization",img:j.default,link:"https://twmilli.github.io/Heat_Map_Vis/"}],I=function(e){function t(i){n(this,t);var o=a(this,e.call(this,i));return o.state={selectedIndex:0},o}return s(t,e),t.prototype.selectProject=function(e){this.setState({selectedIndex:e})},t.prototype.render=function(){var e=this,t=x.map(function(t,i){return l.default.createElement("div",{className:"portfolio-project-link",onClick:function(){return e.selectProject(i)},style:{color:e.state.selectedIndex===i?"#415469":"#92A1B1"},key:i},t.name,l.default.createElement("span",null))});return l.default.createElement("div",{className:"portfolio-component-view-wrapper"},l.default.createElement("div",{className:"portfolio-project-link-container"},l.default.createElement("div",{className:"portfolio-projects"},t)),l.default.createElement("div",{className:"portfolio-component-image"},l.default.createElement("a",{href:x[this.state.selectedIndex].link,target:"_blank"},l.default.createElement("img",{src:x[this.state.selectedIndex].img,alt:"project"}))))},t}(l.default.Component);t.default=I,e.exports=t.default},133:function(e,t){}});
//# sourceMappingURL=component---src-pages-components-portfolio-view-js-e02715e3701dbef6d197.js.map