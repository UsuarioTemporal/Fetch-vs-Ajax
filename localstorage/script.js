const formularioUI = document.getElementById('formulario')
const listaActividadUI = document.getElementById('lista-actividades')
// const 
let arrayActividades = []

const crearItem = (actividad)=>{
    let item = {
        actividad : actividad,
        estado : false
    }
    arrayActividades.push(item)
    return item
}
const guardarDB = ()=>{
    localStorage.setItem('items',JSON.stringify(arrayActividades))
}

const generarHTML = (container,actividad)=>{
    container.innerHTML+=`
        <div>
            Actividad : <b>${actividad.actividad}</b> , estado : ${actividad.estado}
            <span id="aprobar">Aprobar</span> : 
            <span id="borrar">Borrar</span>
        </div>
    `
    return container.innerHTML
}

const pintar = ()=>{
    listaActividadUI.innerHTML=``
    arrayActividades=JSON.parse(localStorage.getItem('items'))
    if(arrayActividades===null){
        arrayActividades=[]
    }else{
        arrayActividades.forEach(element => {
            console.log(element)
            listaActividadUI.innerHTML=generarHTML(listaActividadUI,element)
        });
    }
}

const eliminarDB = (actividad)=>{
    let indexArray ;
    arrayActividades.forEach((element,index) => {
        if(actividad.firstElementChild.innerHTML.trim()===element.actividad){
            
            indexArray=index
        }
    });
    arrayActividades.splice(indexArray,1)
    guardarDB()
    pintar()
}
const containerEvent = container=>{
    container.addEventListener('submit',e=>{
        e.preventDefault()
        let texto = container.querySelector('#actividad')
        if(texto.value!==''){
            let actividad = crearItem(texto.value)
            guardarDB()
            formularioUI.reset()
            listaActividadUI.innerHTML=generarHTML(listaActividadUI,actividad)
        }
    })
    listaActividadUI.addEventListener('click',e=>{
        e.preventDefault()
        let i = e.target
        if(i.id==='aprobar'){
            let l= e.path[1].firstElementChild.innerHTML.trim()
            console.log(l)
        }else if(i.id==='borrar'){
            let l= e.path[1]
            console.log(l)
            eliminarDB(l)
        }
        
    })
}
document.addEventListener('DOMContentLoaded',e=>{
    listaActividadUI.innerHTML=``
    pintar()

})
containerEvent(document.getElementById('container'))
