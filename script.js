const inputBox = document.getElementById('input-box')
const listCont = document.getElementById('list-container')
function addTask(){
    if(inputBox.value === ''){
        alert('You have not written anything')
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listCont.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = ''
    memory()
}

listCont.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        memory()
    }
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        memory()
    }
})

//function to save data when we refresh
function memory(){
    localStorage.setItem('data', listCont.innerHTML)
}

//to display task after we have refreshed
function showData(){
    listCont.innerHTML = localStorage.getItem('data')
}
showData()