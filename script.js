// function
function addList(UserInput){
    const ul = document.querySelector(".container ul");
    const newLi = document.createElement('li')
    const nomor = document.createElement('span')
    const task = document.createElement('div')
    const hapus = document.createElement('span')
    const icon = document.createElement('i')
    // create textNode
    const valueTask = document.createTextNode(UserInput)
    task.appendChild(valueTask)
    hapus.appendChild(icon)
    // add class
    nomor.classList.add('nomor')
    task.classList.add('task')
    hapus.classList.add('hapus')
    icon.setAttribute('class','fa-solid fa-trash')
    newLi.setAttribute('class','bSelesai')
    nomor.classList.add('beforeNumb')   
    // add to li
    newLi.appendChild(nomor)
    newLi.appendChild(task)
    newLi.appendChild(hapus)
    ul.appendChild(newLi)
    countingNumb('plus',1)
}
function valueNomor(nomornya){
    const list = document.querySelectorAll('.container ul li')
    const listBefore = document.querySelectorAll('.container ul li.bSelesai')
    const listAfter = document.querySelectorAll('.container ul li.sSelesai')
    const numberr = document.querySelectorAll('.container ul li .nomor')
    const numberrAfter =document.querySelectorAll('ul li .afterNumb')
    const numberrbefore =document.querySelectorAll('ul li .beforeNumb')
    const countLeft = document.querySelector('.list h5 span')
    let nomorr = 1;
    switch(nomornya){
        case 'daBeres':
            for(let i = 0;i < listAfter.length;i++){
                numberrAfter[i].innerText = nomorr;
                nomorr++;
        }          
            break;
        case 'lomBeres':
            for(let i = 0;i < listBefore.length;i++){
                numberrbefore[i].innerText = nomorr;
                nomorr++;
        }
            break;
        default:
            for(let i = 0;i < list.length;i++){
                numberr[i].innerText = nomorr;
                nomorr++;
        }    
            break;                      
    }  
}
function taskDone(){
    const tasks = document.querySelectorAll('.task')
    tasks.forEach((task) =>{
        task.addEventListener('click',(e)=>{
            e.target.classList.add('taskDone')
            e.target.previousSibling.style.backgroundColor = '#91BBF2'
            e.target.parentElement.setAttribute('class','sSelesai')
            e.target.previousSibling.classList.remove('beforeNumb')
            e.target.previousSibling.classList.add('afterNumb')
            countingNumb('',1)
        })
    })
}
function optionTask(){
    const selector = document.querySelector('.container .list select')
    const allLi = document.querySelectorAll('.list ul li')
    selector.addEventListener("click", () => {
          selector.addEventListener("change", () => {             
            switch (selector.value) {
              case "semua":
                allLi.forEach((li)=>{
                    li.style.display = 'flex';
                })
                valueNomor('adsdad')
                tombolHapus('chooseTask')
                b2Disable()
                break;  
              case "selesai":                
              allLi.forEach((li)=>{
                li.style.display = 'flex';
                if(!li.classList.contains('sSelesai')){
                    li.style.display = 'none'
                }
            })
            valueNomor('daBeres')
            tombolHapus('daBeres')
            button2()
                break; 
              case 'belum':
                allLi.forEach((li)=>{
                    li.style.display = 'flex';
                    if(!li.classList.contains('bSelesai')){
                        li.style.display = 'none'
                    }
                })
                valueNomor('lomBeres')
                tombolHapus('lomBeres')
                button2()
                break;
            }
          });
        });
}
function tombolHapus(chooseTask){
    const tombolapus = document.querySelectorAll('.hapus');
tombolapus.forEach((item) =>{
    item.addEventListener('click',(e)=>{       
        if(e.target.classList.contains("hapus")){
            e.target.parentElement.remove();
            if(e.target.parentElement.classList.contains("bSelesai")){
                countingNumb('',1) 
            }              
            
        }else{
            e.target.parentElement.parentElement.remove();
            if(e.target.parentElement.parentElement.classList.contains("bSelesai")){
                countingNumb('',1) 
            }           
                       
        }
        valueNomor(chooseTask);
    })
})
}
// function countLeftPlus(angka){
//     const countLeft = document.querySelector('.list h5 span')
//     const jablay =   document.querySelectorAll('.list ul .bSelesai')
//     countLeft.innerText = (jablay.length - 1) + angka;
// }
function countingNumb(aritmatika,angka){
    const countLeft = document.querySelector('.list h5 span')
    const li =   document.querySelectorAll('.list ul .bSelesai')
    switch(aritmatika){
        case 'plus':
            countLeft.innerText = (li.length - 1) + angka;
            break;
        default:
            countLeft.innerText = li.length - angka + 1;
    } 
}
function button2(){
    const button1 = document.getElementById('button1')
    const button2 = document.getElementById('button2')
    button2.style.display = 'inline'
    button1.style.display = 'none'
    button2.onclick = function(){
        window.prompt('pilih opsi semua terlebih dahulu untuk menambahkan list')
    }
}
function b2Disable(){
    const button1 = document.getElementById('button1')
    const button2 = document.getElementById('button2')
    button2.style.display = 'none'
    button1.style.display = 'inline'
}
function bTambahkan(){
    const bTambahkann = document.getElementById("button1")
            bTambahkann.addEventListener('click',function(){   
                const inputUser = document.querySelector(".inputan input");
                if(inputUser.value == ''){
                    window.prompt('isi list tambahan terlebih dahulu !')
                }else{
                    addList(inputUser.value)
                    tombolHapus('');
                    taskDone();
                    optionTask();
                    valueNomor('dsadasd');
                }
            })
}
// event button tambahkan
bTambahkan()
// option
optionTask();
valueNomor()
// event tombol hapus
tombolHapus('')
// bila task sudah selesai
taskDone()



