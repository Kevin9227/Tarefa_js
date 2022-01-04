var titulos = document.getElementById("ttulo"),
msg         = document.getElementById("txt")
var bat    = document.getElementById("btn").addEventListener('click',function(){
    var corpo  = document.getElementsByClassName('lista'),  i=0, 
    dataCria    = new Date(), lis
    lis     =  parseInt(bat.title)+1
    i       =   lis
    console.log(bat)
if(i%2==0){
    return corpo[0].innerHTML +=`<div class='etiq1'>
    <h3>${titulos.value}</h3>
    <div class="btns">
        <button>editar</button>
        <button>apagar</button>
        <button>gravar</button>
    </div>
    <p>${msg.value}</p>
       ${dataCria.getUTCDay()}
   </div>`;
}else{
  return  corpo[0].innerHTML +=`<div class='etiq'>
  <h3>${titulos.value}</h3>
  <div class="btns">
      <button>editar</button>
      <button>apagar</button>
      <button>gravar</button>
  </div>
  <p>${msg.value}</p>
     ${dataCria.getUTCDay()}
 </div>`;
}
})
/* 
function etiqueta(titulo,texto){
 let corpo  = document.getElementsByClassName('lista'),
 dataCria    = new Date(),
 i=0,
 lis =0
 if(titulos.value==='' || msg.value===''){
     alert('O titulo ou a messagem não pode ser vazio...')
     return false
 }else{
     
    
if(i%2==0){
    return corpo[i].innerHTML +=`<div class='etiq1'>
    <h3>${titulos.value}</h3>
    <div class="btns">
        <button>editar</button>
        <button>apagar</button>
        <button>gravar</button>
    </div>
    <p>${msg.value}</p>
       ${dataCria.getUTCDay()}
   </div>`;
}else{
  return  corpo[i].innerHTML +=`<div class='etiq'>
  <h3>${titulos.value}</h3>
  <div class="btns">
      <button>editar</button>
      <button>apagar</button>
      <button>gravar</button>
  </div>
  <p>${msg.value}</p>
     ${dataCria.getUTCDay()}
 </div>`;
}
     }
     
 
} */
/* 
const add =() =>{
    let corpo  = document.getElementsByClassName('lista'),
    dataCria    = new Date(),
    lis =1;
    return(
    corpo[i].innerHTML =`<div class="etiq">
 <h3>${titulos.value}</h3>
 <div class="btns">
     <button>editar</button>
     <button>apagar</button>
     <button>gravar</button>
 </div>
 <p>${msg.value}</p>
    ${dataCria.getUTCDay()}
</div>`
    )
} */