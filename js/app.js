const images=[
    './images/slide-img-1.jpg',
    './images/slide-img-2.jpg',
    './images/slide-img-3.jpg',
    './images/slide-img-4.jpg',
    './images/slide-img-5.jpg',
    './images/slide-img-6.jpg',
];

let imgIndex=0;
const imgElement=document.getElementById('slide-img')

setInterval(()=>{
    if(imgIndex>=images.length){
        imgIndex=0
    }else{

        
        const imgUrl=images[imgIndex]
        imgElement.setAttribute('src',imgUrl)
        imgIndex++
    }
},1000)