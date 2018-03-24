<<<<<<< HEAD
var elements = document.getElementsByTagName('script');

Array.prototype.forEach.call(elements, function (element) {
    if (element.type.indexOf('math/tex') !== -1) {
=======
var elements = document.getElementsByTagName('script')

Array.prototype.forEach.call(elements, function (element) {
    if (element.type.indexOf('math/tex') != -1) {
>>>>>>> 9277491a936429c0484d5e97976824b58cd9933b
        // Extract math markdown
        var textToRender = element.innerText || element.textContent;

        // Kramdown and KaTeX workaround
        // https://github.com/rohanchandra/type-theme/issues/47
        textToRender = textToRender.replace(/%.*/g, '');

        // Create span for KaTeX
        var katexElement = document.createElement('span');

        // Support inline and display math
<<<<<<< HEAD
        if (element.type.indexOf('mode=display') !== -1) {
=======
        if (element.type.indexOf('mode=display') != -1) {
>>>>>>> 9277491a936429c0484d5e97976824b58cd9933b
            katexElement.className += "math-display";
            textToRender = '\\displaystyle {' + textToRender + '}';
        } else {
            katexElement.className += "math-inline";
        }

        katex.render(textToRender, katexElement);
        element.parentNode.insertBefore(katexElement, element);
    }
});
