var titulos = document.getElementById("ttulo"),
msg         = document.getElementById("txt"),
corpo       = document.getElementsByClassName('lista'),
i           = 0,
tst         =[]

 document.getElementById("btn").addEventListener('click',function(){
   
    if(titulos.value==='' || msg.value===''){
        alert('O titulo ou a messagem não pode ser vazio...')
        return false
    }else{
        var   dataCria   = new Date(),
        lis        = ++i
        i          = lis
tst.push(corpo[0])
console.log(tst)
console.log(i)
if((i%2)==0){
     corpo[0].innerHTML +=`<div class='etiq1' id="i${i}">
    <h3>${titulos.value}</h3>
    <div class="btns">
        <button onclick="editar()">editar</button>
        <button>apagar</button>
        <button>gravar</button>
    </div>
    <p id="txt${i}">${msg.value}</p>
       ${dataCria.getUTCDay()}
   </div> `
  msg.value=""
}else{
   corpo[0].innerHTML +=`<div class='etiq' id="i${i}">
  <h3>${titulos.value}</h3>
  <div class="btns">
      <button onclick="editar()">editar</button>
      <button>apagar</button>
      <button onclik="alterar()">gravar</button>
  </div>
  <p id="txt${i}">${msg.value}</p>
     ${dataCria.getUTCDay()}
 </div>`;
 msg.value=""
}
}
 })
 function editar(){
     if(i<=1){
         alert(true)
     var   nr
      nr = i-1
        console.log(i)
   txt =  tst[nr].children.i1.children[2].textContent
    msg.value = txt
    console.log(txt)
     }else{
         alert(false)
      var txt, nr , t='i'
      nr =i-1
         console.log(nr)
         txt =  tst[nr].children.t+nr.children[2].textContent
        msg.value = txt
        
     }
     
 }
 function alterar(){
    var   nr
    nr = i-1
      console.log(i)
 txt =  tst[nr].children.i1.children[2].textContent
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
    var tst = document.getElementById('ts')
    console.log(tst)
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