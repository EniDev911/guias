export function copyClipboard(content) {
    if (typeof content != "string") {
        throw TypeError("El argumento debe ser un String");
    }
    const areaText = document.createElement("textarea");
    areaText.value = content.trim();
    areaText.setAttribute("readonly", "");
    areaText.style.position = "absolute";
    areaText.style.left = "-9999px";
    document.body.appendChild(areaText);
    const selection = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;

    areaText.select();
    document.execCommand("copy");
    document.body.removeChild(areaText);

    if (selection) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selection);
    }
}
