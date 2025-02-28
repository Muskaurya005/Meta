let html ='<h1> This is new  JavaScript file.</h1>';
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[2]);
console.log(html.indexOf('J'));
console.log(html.charAt(8));
console.log(html.endsWith('s'));
console.log(html.includes('new'));
console.log(html.substring(1,8));
console.log(html.slice(0,6));
console.log(html.split('new'));
console.log(html.replace('new','old'));

let item1='Android';
let item2='ios';
let html2=`<h2>Hi I use ${item1} and my friend uses ${item2}</h2>
<h3>I love web development</h3>`;
console.log(html2);

document.body.innerHTML=html2;
