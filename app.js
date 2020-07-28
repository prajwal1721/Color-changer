console.log('Hello World');
var panel=document.querySelector(`.color`);
var body=document.body;
var blue=255, red=255, green=255;

document.addEventListener('mousemove',random);
document.addEventListener('mousemove',()=>{
    change()
});
function change(){
    document.querySelector('h1').textContent=`Red=${red} Green=${green} Blue=${blue}`;
    document.body.style.backgroundColor=`rgb(${red},${green},${blue})`;
    console.log(`rgb(${red},${green},${blue})`);
}
function random(e){
    green=~~((e.offsetX+e.offsetY)/255*100);
    red=~~((e.offsetX)/255*100);
    blue=~~((e.offsetY)/255*100);
    change();
}