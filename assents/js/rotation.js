 let rotation = 0;

document.addEventListener('click',(e)=>{
const el = e.target;
if(el.tagName === 'SUMMARY'){
    const icon = el.querySelector('.fa-circle-arrow-down');
    if(icon){
        rotation += 180;
        icon.style.transform = `rotate(${rotation}deg)`;
        if(rotation === 180){
            rotation = -180;
        }
    }
}
});


// if(el.id === 'summary1'){
//     rotation += 180;
//     $("#arrow1").css("transform", `rotate(${rotation}deg)`);
//     if (rotation === 180) {
//       rotation = -180;
//     }
//   }