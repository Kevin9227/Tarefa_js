var titulos = document.getElementById("ttulo"),
msg         = document.getElementById("txt"),
corpo       = document.getElementsByClassName('lista'),
i           = 0,
lista_divs        =[],
dataCria   = new Date(),
dataFormatada=((dataCria.getDate() )) + "/" + ((dataCria.getMonth() + 1)) + "/" + dataCria.getFullYear()


 document.getElementById("btn").addEventListener('click',function(){
   
    if(titulos.value==='' || msg.value===''){
        
        alert('O titulo ou a messagem não pode ser vazio...')
        return false
    }else{
        console.log(titulos)
       if(titulos.length>=30){
           return alert('O titulo não pode conter mais de 30 Caracter...')
       }else{
             var   lis        = ++i;
         i          = lis
lista_divs.push(corpo[0])
console.log(lista_divs)
console.log(i)
console.log(msg)
if((i%2)==0){
     corpo[0].innerHTML +=`<div class='etiq1' id="i${i}">
   <div class="titulo"> <h3>${titulos.value}</h3>
   <div class="btns">
   <i class="bi bi-pencil-square" title="Editar" ></i>   
   <i class="bi bi-x-square" title="Apagar"></i>
   <i class="bi bi-save2" title="Guardar"></i>
    </div>
   </div>
    
    <p id="txt${i}">${msg.value}</p>
    <div class="dt">Data: ${dataFormatada}</div> 
   </div> `
  msg.value=""
  console.log(msg.length)
}else{
   corpo[0].innerHTML +=`<div class='etiq' id="i${i}">
   <div class="titulo1"> <h3>${titulos.value}</h3>
   <div class="btns">
    <i class="bi bi-pencil-square" title="Editar" ></i>   
    <i class="bi bi-x-square" title="Apagar"></i>
    <i class="bi bi-save2" title="Guardar"></i>
  </div>
   </div>
  
  <p id="txt${i}">${msg.value}</p>
  <div class="dt">Data: ${dataFormatada}</div> 
 </div>`;
  
  msg.value=""

}
       }
     
}
 })
 function editar(){
     if(i<=1){
         alert(true)
     var   nr
      nr = i-1
        console.log(i)
   txt =  lista_divs[nr].children.i1.children[2].textContent
    msg.value = txt
    console.log(txt)
     }else{
         alert(false)
      var txt, nr , t='i'
      nr =i-1
         console.log(nr)
         txt =  lista_divs[nr].children.t+nr.children[2].textContent
        msg.value = txt
        
     }
     
 }
 function alterar(){
    var   nr
    nr = i-1
      console.log(i)
 txt =  lista_divs[nr].children.i1.children[2].textContent
 msg.value 
 }
document.getElementById("ck").addEventListener('',function(){
    if(this.value=='0'){
        this.value='1'
       var rr = document.getElementById("txt"+i)
       console.log(rr.innerText)

    }else{
        this.value='0'
        document.querySelector("ul").style.display='none';
    }
    var lista_divs = document.getElementById('ts')
    console.log(lista_divs)
})
document.getElementById("edit").addEventListener("click",function(){
    var rep = document.getElementById("txt1")
    rep.replace(`<textarea name="" id="txt" cols="3" rows="5" placeholder="Descrição da Tarefa...">${msg.value}</textarea><br>`)
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