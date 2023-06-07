---
layout: default
title: Deploy en gh-pages
---



 <script>
    
 function resize(obj){
     // console.log(obj.contentWindow.document.querySelector(".emgithub-file"));
     const file = obj.contentWindow.document.querySelector(".emgithub-file .code-area pre code.hljs");
     file.style.height = '100%';
     console.log(file.style.clientHeight)
     // obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
     obj.style.height = file.style.height;
  }
 </script>

<iframe frameborder=0 
        style="width: 100%;" 
        scrolling="no"
        onload="{resize(this)}"
        srcdoc='<html><body><style type="text/css">.emgithub-file .code-area td.hljs-ln-line { font-size: 16px !important; height:100%}</style><script src="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fmach-911%2Freact-rick-and-morty%2Fblob%2Fmain%2Fsrc%2FApp.jsx&style=night-owl&type=code&showLineNumbers=on&showFullPath=on"></script></body></html>'
        ></iframe>

hola