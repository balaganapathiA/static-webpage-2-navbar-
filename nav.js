const menu=document.querySelector('.menu')
const ul=document.querySelector('ul')

menu.addEventListener('click',()=>{
    ul.classList.toggle('show')
})

const container=document.querySelector('.container')
const right=document.querySelector('.right')
const left=document.querySelector('.left')
const colors=['red','yellow','green','blue']

index=0
right.addEventListener('click',()=>{
    index++;
    if(index>colors.length-1){
        index=0
    }
    container.style.background=colors[index]
})
left.addEventListener('click',()=>{
    index--;
    if(index<0){
        index=3
    }
    container.style.background=colors[index]
})
