import { copyClipboard } from "./utilities.js";

const ASSETS = import.meta.url.substring(0, import.meta.url.lastIndexOf("/") + 1).concat("icons/");
const template = document.createElement("template");
template.innerHTML = /*html*/`
<style>
button {
    position: absolute;
    right: 10px;
    height: 22px;
    width: 22px;
    border: none;
    cursor: pointer;
    z-index: 2;
    transition: right .2s ease;
}

@keyframes pulse {
    from { transform: scale(1); }
    to { transform: scale(1.09); }
}

@media(max-width: 768px){
    button {
        display: none;
    }
}
</style>
<button>
</button>
`

export class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    btn = this.getAttribute("data-btn");
    connectedCallback() {
        this.codeBlock = this.nextElementSibling;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.button = this.shadowRoot.querySelector("button");
        if (this.btn === "codepen") {
            this.button.style.background = "url(".concat(ASSETS, "codepen.svg", ")")
            this.button.style.top = "10px"
            this.button.style.right = "55px"
            this.button.title = "Ver en Codepen"
        } else if (this.btn === "compiler") {
            this.button.style.background = "url(".concat(ASSETS, "compiler.svg", ")")
            this.button.style.top = "10px"
            this.button.style.right = "55px"
            this.button.title = "Ejecutar"
        } else if (this.btn === "top"){
            this.button.style.position = 'fixed'
            this.button.style.background = "url(".concat(ASSETS, "top.svg", ")")
            this.button.style.backgroundColor = "#d24";
            this.button.style.bottom = "40px";
            this.button.style.right = "-140px";
            this.button.style.backgroundRepeat = "no-repeat";
            this.button.style.backgroundPosition = "center"
            this.button.style.padding = "25px";
            this.button.style.borderRadius = "30px";
            this.button.style.animation = "pulse .9s ease infinite alternate"
            // handleOnScroll
            window.addEventListener('scroll', () => {
                if(window.scrollY > 500){
                  this.button.style.right = 40 + "px";
              } else {
                  this.button.style.right = "-140px";
              }
          })
        } else if (this.btn == "download") {
            this.button.style.top = "40px"
            this.button.style.background = "url(".concat(ASSETS, "download.svg", ")")
            this.button.style.backgroundRepeat = 'no-repeat';
        }
        else {
            this.button.style.top = "10px"
            this.button.style.background = "url(".concat(ASSETS, "clone-regular.svg", "), #191919")
            this.button.title = "Copiar"
        }
        // handleOnclick
        this.button.addEventListener("click", () => {
            if (this.btn === "codepen") {
                const lang = this.parentNode.parentNode.classList[0].split("-");
                this.createPen(lang[1], this.parentNode.firstElementChild.textContent);
            } else if (this.btn === "compiler") {
              if (this.getAttribute("data-content")) {
                  this.openCompiler(this.getAttribute("data-content"), this.getAttribute("data-lang"), this.getAttribute("data-ext"))
              } else {
                  this.openCompiler(this.parentNode.firstElementChild.textContent, this.getAttribute("data-lang"), this.getAttribute("data-ext"))
              }
          } else if(this.btn === "top") {
            window.scrollTo({top: 0, behavior: 'smooth'})
        } else if (this.btn === "download") {
            console.log("Downloading...");
        }
        else {
            // Get the snackbar DIV
            var x = document.getElementById("snackbar");
            // Add the "show" class to DIV
            x.className = "show";

            // After 3 seconds, remove the show class from DIV
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            this.button.style.background = "url(".concat(ASSETS, "clone-solid.svg", "), #191919")
            this.copyClipboard(this.parentNode.firstElementChild.textContent);
            setTimeout(() => {
                this.button.style.background = "url(".concat(ASSETS, "clone-regular.svg", "), #191919")
            }, 1000)
        }
    })

    }
    createPen(lang, content) {
        const form = document.createElement("form");
        form.action = "https://codepen.io/pen/define",
        form.method = "POST",
        form.target = "_blank",
        form.style.position = "absolute",
        form.style.left = "-9999px";
        const input = document.createElement("input");
        input.type = "hidden",
        input.name = "data",
        input.value = JSON.stringify({ title: document.title, [lang]: content.trim() }),
        form.insertAdjacentElement("afterbegin", input),
        this.shadowRoot.appendChild(form);
        form.submit();
        this.shadowRoot.removeChild(form);
    }
    copyClipboard(content) {
        if (typeof content != "string") {
            throw TypeError("El argumento debe ser un String");
        }
        const areaText = document.createElement("textarea");
        areaText.value = content.trim();
        areaText.setAttribute("readonly", "");
        areaText.style.position = "absolute";
        areaText.style.left = "-9999px";
        this.shadowRoot.appendChild(areaText);
        const selection = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;

        areaText.select();
        document.execCommand("copy");
        this.shadowRoot.removeChild(areaText);

        if (selection) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selection);
        }
    }

    downloadAsFile(filename, content) {
       var element = document.createElement('a');

       element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content.trim()));
       element.setAttribute('download', filename);

       element.style.display = 'none';
       document.body.appendChild(element);
       element.click();

       document.body.removeChild(element);
   }

   openCompiler(content, lang = "nodejs", ext = "js") {

    const ifr = document.createElement("iframe");
    ifr.src = 'https://onecompiler.com/embed/?hideNewFileOption=true&hideNew=true&hideLanguageSelection=true&theme=dark&hideStdin=true&hideTitle=true&listenToEvents=true&codeChangeEvent=true';
    ifr.width = "100%";
    ifr.frameBorder = "0"
    ifr.style.height = "100vh";
    ifr.allowFullscreen = "true";
    const childWindow = window.open("", "_blank");
    childWindow.document.body.style.boxSizing = "border-box"
    childWindow.document.body.style.padding = "0"
    childWindow.document.body.style.margin = "0"
    childWindow.document.body.appendChild(ifr);
    const eliminarCookies = () => {
        childWindow.document.cookie.split(";").forEach(function (c) {
            childWindow.document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
    }
    ifr.onload = () => {
        ifr.contentWindow.postMessage({
            eventType: 'populateCode',
            language: lang,
            files: [
            {
                "name": "911." + ext,
                "content": content.trim()
            }
            ]
        }, "*");

        ifr.contentWindow.postMessage({
            eventType: 'triggerRun'
        }, '*')
    }
    childWindow.document.onreadystatechange = () => {
        if (childWindow.document.readyState === "interactive") {
            eliminarCookies()
        }
        if (childWindow.document.readyState === "complete") {
            childWindow.console.log(childWindow.document.cookie)
        }
    }
}
}

customElements.define('enidev-button', CustomButton);

// const codeBlocks = document.querySelectorAll(".clipboard pre>code");

// codeBlocks.forEach(el => {
//     el.parentElement.appendChild(document.createElement("enidev-button"));
// })

// const codeBlocksCompiler = document.querySelectorAll(".compiler.python pre>code");

// codeBlocksCompiler.forEach(el => {
//     console.log(el.classList)
//     el.parentElement.innerHTML += `<enidev-button data-btn="compiler" data-lang="python" data-ext="py"></enidev-button>`
// })

// const codeBlocksDownloads = document.querySelectorAll(".download pre>code");

document.querySelectorAll('.code-header')
.forEach( function(element, index) {
    // console.log(element.classList[0].split('-')[1])
    const code = element.nextElementSibling;
    const span = document.createElement('span');
    span.textContent = element.nextElementSibling.classList[0].split('-')[1];
    document.querySelectorAll('.code-header__center')[index].append(span);
    const copyButton =  element.querySelector('.copy-code-button');
    copyButton.onclick = () =>  {
        copyButton.setAttribute('data-tooltip', 'Copiado!')
        copyClipboard(code.textContent);
        setTimeout(() => {
            copyButton.setAttribute('data-tooltip', 'Copiar')
        }, 1500)
    }
});