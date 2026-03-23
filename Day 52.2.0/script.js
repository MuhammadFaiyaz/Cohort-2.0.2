let p = document.querySelector('p');
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let text = p.innerText
p.addEventListener('mouseenter', function() {
    setInterval(() => {
       let str = text.split('').map((char, index)=> {
        return characters[Math.floor(characters.length*Math.random())]
       }).join('')
       p.innerText = str
    
   }, 100);
});