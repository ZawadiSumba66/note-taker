const noteArea= document.querySelector('#note');
const submitButton= document.querySelector('.submit');
const table_body=document.querySelector('tbody');
const msg=document.querySelector('.msg');
submitButton.addEventListener('click',(e)=>{
    const cell=document.createElement('td');
    cell.appendChild(document.createTextNode(noteArea.value));
    const row=document.createElement('tr');
    row.appendChild(cell);
    table_body.appendChild(row);
    const viewButton=document.createElement('button');
    viewButton.innerHTML="view note"
    viewButton.classList.add('view');
    row.appendChild(viewButton);
    if(noteArea.value===""){
        msg.innerHTML="Enter a valid input"
        msg.style.color="red";
        setTimeout(()=>msg.remove(),3000);
        table_body.removeChild(row);
    }
    viewButton.addEventListener('click',(e)=>{
        const addedItems=document.createElement('div');
        addedItems.classList.add('addims');
        const popUp=document.createElement('div');
        popUp.classList.add('popup');
        const popupcontent=document.createElement('div');
        popupcontent.classList.add('popup-content');
            popupcontent.append(cell);
        cell.appendChild(document.createTextNode(noteArea.value));
        const close=document.createElement('button');
        close.classList.add('close-button');
        close.innerHTML='<button class="close-button">&times</button>'
        close.addEventListener('click',(e)=>{
            e.preventDefault();
          addedItems.style.display="none";      
        })
        addedItems.appendChild(popUp)
        popUp.appendChild(popupcontent);
        popupcontent.appendChild(close);
        row.appendChild( addedItems);
    })
    noteArea.value="";
})
