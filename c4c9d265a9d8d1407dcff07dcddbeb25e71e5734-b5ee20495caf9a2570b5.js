"use strict";(self.webpackChunkgatsby_starter_wordpress_blog=self.webpackChunkgatsby_starter_wordpress_blog||[]).push([[744],{7059:function(e,t,a){a.d(t,{G:function(){return Y},L:function(){return O},M:function(){return B},P:function(){return F},S:function(){return ne},_:function(){return d},a:function(){return l},b:function(){return T},c:function(){return x},d:function(){return I},e:function(){return W},f:function(){return R},g:function(){return _},h:function(){return C},i:function(){return b},j:function(){return y},w:function(){return j}});var r=a(5785),i=a(7294),n=a(2369),o=a.n(n),s=a(5697),u=a.n(s);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function d(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(i[a]=e[a]);return i}var c=[.25,.5,1,2],h=[750,1080,1366,1920],g=[320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096],p=function(e){return console.warn(e)},f=function(e,t){return e-t},m=function(e){return e.map((function(e){return e.src+" "+e.width+"w"})).join(",\n")};function w(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a}}function v(e){var t=e.layout,a=void 0===t?"constrained":t,r=e.width,i=e.height,n=e.sourceMetadata,s=e.breakpoints,u=e.aspectRatio,d=e.formats,c=void 0===d?["auto","webp"]:d;return c=c.map((function(e){return e.toLowerCase()})),a=o()(a),r&&i?l({},e,{formats:c,layout:a,aspectRatio:r/i}):(n.width&&n.height&&!u&&(u=n.width/n.height),"fullWidth"===a?(r=r||n.width||s[s.length-1],i=i||Math.round(r/(u||1.3333333333333333))):(r||(r=i&&u?i*u:n.width?n.width:i?Math.round(i/1.3333333333333333):800),u&&!i?i=Math.round(r/u):u||(u=r/i)),l({},e,{width:r,height:i,aspectRatio:u,layout:a,formats:c}))}function y(e,t){var a;void 0===t&&(t=20);var r=e=v(e),i=r.generateImageSource,n=r.filename,o=r.aspectRatio;return null==(a=i(n,t,Math.round(t/o),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src}function b(e){var t,a=e=v(e),r=a.pluginName,i=a.sourceMetadata,n=a.generateImageSource,o=a.layout,s=a.fit,u=a.options,d=a.width,g=a.height,f=a.filename,y=a.reporter,b=void 0===y?{warn:p}:y,S=a.backgroundColor,L=a.placeholderURL;if(r||b.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof n)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=w(f)):i={width:d,height:g,format:(null==(t=i)?void 0:t.format)||w(f)||"auto"};var C=new Set(e.formats);(0===C.size||C.has("auto")||C.has(""))&&(C.delete("auto"),C.delete(""),C.add(i.format)),C.has("jpg")&&C.has("png")&&(b.warn("["+r+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),C.delete("jpg"===i.format?"png":"jpg"));var x=function(e){var t=e.width,a=e.height,r=e.filename,i=e.layout,n=void 0===i?"constrained":i,o=e.sourceMetadata,s=e.reporter,u=void 0===s?{warn:p}:s,d=e.breakpoints,g=void 0===d?h:d,f=Object.entries({width:t,height:a}).filter((function(e){e[0];var t=e[1];return"number"==typeof t&&t<1}));if(f.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+f.map((function(e){return e.join(": ")})).join(", "));return"fixed"===n?function(e){var t=e.filename,a=e.sourceMetadata,r=e.width,i=e.height,n=e.fit,o=void 0===n?"cover":n,s=e.outputPixelDensities,u=void 0===s?c:s,l=e.reporter,d=void 0===l?{warn:p}:l,h=a.width/a.height,g=E(u);if(r&&i){var f=k(a,{width:r,height:i,fit:o});r=f.width,i=f.height,h=f.aspectRatio}r?i||(i=Math.round(r/h)):r=i?Math.round(i*h):800;var m=r;if(a.width<r||a.height<i){var w=a.width<r?"width":"height";d.warn("\nThe requested "+w+' "'+("width"===w?r:i)+'px" for the image '+t+" was larger than the actual image "+w+" of "+a[w]+"px. If possible, replace the current image with a larger one."),"width"===w?(r=a.width,i=Math.round(r/h)):r=(i=a.height)*h}return{sizes:g.filter((function(e){return e>=1})).map((function(e){return Math.round(e*r)})).filter((function(e){return e<=a.width})),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:r}}(e):"constrained"===n?M(e):"fullWidth"===n?M(l({breakpoints:g},e)):(u.warn("No valid layout was provided for the image at "+r+". Valid image layouts are fixed, fullWidth, and constrained. Found "+n),{sizes:[o.width],presentationWidth:o.width,presentationHeight:o.height,aspectRatio:o.width/o.height,unscaledWidth:o.width})}(l({},e,{sourceMetadata:i})),I={sources:[]},W=e.sizes;W||(W=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return}}(x.presentationWidth,o)),C.forEach((function(e){var t=x.sizes.map((function(t){var a=n(f,t,Math.round(t/x.aspectRatio),e,s,u);if(null!=a&&a.width&&a.height&&a.src&&a.format)return a;b.warn("["+r+"] The resolver for image "+f+" returned an invalid value.")})).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var a=t.find((function(e){return e.width===x.unscaledWidth}))||t[0];a&&(I.fallback={src:a.src,srcSet:m(t),sizes:W})}else{var i;null==(i=I.sources)||i.push({srcSet:m(t),sizes:W,type:"image/"+e})}}));var R={images:I,layout:o,backgroundColor:S};switch(L&&(R.placeholder={fallback:L}),o){case"fixed":R.width=x.presentationWidth,R.height=x.presentationHeight;break;case"fullWidth":R.width=1,R.height=1/x.aspectRatio;break;case"constrained":R.width=e.width||x.presentationWidth||1,R.height=(R.width||1)/x.aspectRatio}return R}var E=function(e){return Array.from(new Set([1].concat((0,r.Z)(e)))).sort(f)};function M(e){var t,a=e.sourceMetadata,r=e.width,i=e.height,n=e.fit,o=void 0===n?"cover":n,s=e.outputPixelDensities,u=void 0===s?c:s,l=e.breakpoints,d=e.layout,h=a.width/a.height,g=E(u);if(r&&i){var p=k(a,{width:r,height:i,fit:o});r=p.width,i=p.height,h=p.aspectRatio}r=r&&Math.min(r,a.width),i=i&&Math.min(i,a.height),r||i||(i=(r=Math.min(800,a.width))/h),r||(r=i*h);var m=r;return(a.width<r||a.height<i)&&(r=a.width,i=a.height),r=Math.round(r),(null==l?void 0:l.length)>0?(t=l.filter((function(e){return e<=a.width})),t.length<l.length&&!t.includes(a.width)&&t.push(a.width)):(t=g.map((function(e){return Math.round(e*r)})),t=t.filter((function(e){return e<=a.width}))),"constrained"!==d||t.includes(r)||t.push(r),{sizes:t=t.sort(f),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:r}}function k(e,t){var a=e.width/e.height,r=t.width,i=t.height;switch(t.fit){case"fill":r=t.width?t.width:e.width,i=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;r=Math.min(n,Math.round(o*a)),i=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,u=t.height?t.height:0;r=Math.max(s,Math.round(u*a)),i=Math.max(u,Math.round(s/a));break;default:t.width&&!t.height&&(r=t.width,i=Math.round(t.width/a)),t.height&&!t.width&&(r=Math.round(t.height*a),i=t.height)}return{width:r,height:i,aspectRatio:r/i}}var S=["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"],L=["images","placeholder"],C=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var x=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData},I=function(e){var t,a,r;return null==(t=x(e))||null==(a=t.images)||null==(r=a.fallback)?void 0:r.src},W=function(e){var t,a,r;return null==(t=x(e))||null==(a=t.images)||null==(r=a.fallback)?void 0:r.srcSet};function R(e){var t,a=e.baseUrl,r=e.urlBuilder,i=e.sourceWidth,n=e.sourceHeight,o=e.pluginName,s=void 0===o?"getImageData":o,u=e.formats,c=void 0===u?["auto"]:u,h=e.breakpoints,p=e.options,f=d(e,S);return null!=(t=h)&&t.length||"fullWidth"!==f.layout&&"FULL_WIDTH"!==f.layout||(h=g),b(l({},f,{pluginName:s,generateImageSource:function(e,t,a,i){return{width:t,height:a,format:i,src:r({baseUrl:e,width:t,height:a,options:p,format:i})}},filename:a,formats:c,breakpoints:h,sourceMetadata:{width:i,height:n,format:"auto"}}))}function T(e,t,a,r,i){return void 0===i&&(i={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},i,{opacity:t?1:0})})}function _(e,t,a,r,i,n,o,s){var u={};n&&(u.backgroundColor=n,"fixed"===a?(u.width=r,u.height=i,u.backgroundColor=n,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),o&&(u.objectFit=o),s&&(u.objectPosition=s);var d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return d}function j(e,t){var a,i,n,o=e.images,s=e.placeholder,u=l({},d(e,L),{images:l({},o,{sources:[]}),placeholder:s&&l({},s,{sources:[]})});return t.forEach((function(t){var a,i=t.media,n=t.image;i&&(n.layout,e.layout,(a=u.images.sources).push.apply(a,(0,r.Z)(n.images.sources.map((function(e){return l({},e,{media:i})}))).concat([{media:i,srcSet:n.images.fallback.srcSet}])),u.placeholder&&u.placeholder.sources.push({media:i,srcSet:n.placeholder.fallback}))})),(a=u.images.sources).push.apply(a,(0,r.Z)(o.sources)),null!=s&&s.sources&&(null==(n=u.placeholder)||(i=n.sources).push.apply(i,(0,r.Z)(s.sources))),u}var N,z=["children"],A=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?i.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?i.createElement("div",{style:{maxWidth:a,display:"block"}},i.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},O=function(e){var t=e.children,a=d(e,z);return i.createElement(i.Fragment,null,i.createElement(A,l({},a)),t,null)},q=["src","srcSet","loading","alt","shouldLoad"],H=["fallback","sources","shouldLoad"],U=function(e){var t=e.src,a=e.srcSet,r=e.loading,n=e.alt,o=void 0===n?"":n,s=e.shouldLoad,u=d(e,q);return i.createElement("img",l({},u,{decoding:"async",loading:r,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:o}))},P=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,n=e.shouldLoad,o=void 0===n||n,s=d(e,H),u=s.sizes||(null==t?void 0:t.sizes),c=i.createElement(U,l({},s,t,{sizes:u,shouldLoad:o}));return r.length?i.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return i.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:u})})),c):c};U.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},P.displayName="Picture",P.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};var D=["fallback"],F=function(e){var t=e.fallback,a=d(e,D);return t?i.createElement(P,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):i.createElement("div",l({},a))};F.displayName="Placeholder",F.propTypes={fallback:s.string,sources:null==(N=P.propTypes)?void 0:N.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var B=function(e){return i.createElement(i.Fragment,null,i.createElement(P,l({},e)),i.createElement("noscript",null,i.createElement(P,l({},e,{shouldLoad:!0}))))};B.displayName="MainImage",B.propTypes=P.propTypes;var Z,G,V=function(e,t,a){for(var r=arguments.length,i=new Array(r>3?r-3:0),n=3;n<r;n++)i[n-3]=arguments[n];return e.alt||""===e.alt?u().string.apply(u(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},X={image:u().object.isRequired,alt:V},$=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],J=["style","className"],K=new Set,Q=function(e){var t=e.as,r=void 0===t?"div":t,n=e.image,o=e.style,s=e.backgroundColor,u=e.className,c=e.class,h=e.onStartLoad,g=e.onLoad,p=e.onError,f=d(e,$),m=n.width,w=n.height,v=n.layout,y=function(e,t,a){var r={},i="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}(m,w,v),b=y.style,E=y.className,M=d(y,J),k=(0,i.useRef)(),S=(0,i.useMemo)((function(){return JSON.stringify(n.images)}),[n.images]);c&&(u=c);var L=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,m,w);return(0,i.useEffect)((function(){Z||(Z=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return G=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=k.current.querySelector("[data-gatsby-image-ssr]");return r&&C()?(r.complete?(null==h||h({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==h||h({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void K.add(S)):G&&K.has(S)?void 0:(Z.then((function(a){var r=a.renderImageToString,i=a.swapPlaceholderImage;k.current&&(k.current.innerHTML=r(l({isLoading:!0,isLoaded:K.has(S),image:n},f)),K.has(S)||(e=requestAnimationFrame((function(){k.current&&(t=i(k.current,S,K,o,h,g,p))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[n]),(0,i.useLayoutEffect)((function(){K.has(S)&&G&&(k.current.innerHTML=G(l({isLoading:K.has(S),isLoaded:K.has(S),image:n},f)),null==h||h({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,i.createElement)(r,l({},M,{style:l({},b,o,{backgroundColor:s}),className:E+(u?" "+u:""),ref:k,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},Y=(0,i.memo)((function(e){return e.image?(0,i.createElement)(Q,e):null}));Y.propTypes=X,Y.displayName="GatsbyImage";var ee,te=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],ae=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?u().number.apply(u(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},re=new Set(["fixed","fullWidth","constrained"]),ie={src:u().string.isRequired,alt:V,width:ae,height:ae,sizes:u().string,layout:function(e){if(void 0!==e.layout&&!re.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},ne=(ee=Y,function(e){var t=e.src,a=e.__imageData,r=e.__error,n=d(e,te);return r&&console.warn(r),a?i.createElement(ee,l({image:a},n)):(console.warn("Image not loaded",t),null)});ne.displayName="StaticImage",ne.propTypes=ie},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,i=0;i<e.length;i++){var n=e[i];t&&/[a-zA-Z]/.test(n)&&n.toUpperCase()===n?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,r=a,a=!0,i++):a&&r&&/[a-zA-Z]/.test(n)&&n.toLowerCase()===n?(e=e.slice(0,i-1)+"-"+e.slice(i-1),r=a,a=!1,t=!0):(t=n.toLowerCase()===n&&n.toUpperCase()!==n,r=a,a=n.toUpperCase()===n&&n.toLowerCase()!==n)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t}}]);
//# sourceMappingURL=c4c9d265a9d8d1407dcff07dcddbeb25e71e5734-b5ee20495caf9a2570b5.js.map