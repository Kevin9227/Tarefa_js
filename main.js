var titulos = document.getElementById("ttulo"),
msg         = document.getElementById("txt")


function etiqueta(titulo,texto){
 let corpo  = document.getElementsByClassName('lista'),
 dataCria    = new Date(),
 lis =1

 if(titulos.value==='' || msg.value===''){
     alert('O titulo ou a messagem não pode ser vazio...')
     return false
 }else{
for(i=0; i<10;++i ){
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
     }
   
 }
 console.log(i)
}