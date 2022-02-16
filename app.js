function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
// console.log(random(1000,9999))
document.getElementById('generate-pin').addEventListener('click', (e)=>{
    e.preventDefault();
    const inputLeft = document.getElementById('input-left');
    const pin = random(1000,9999);
    inputLeft.value =pin; 
    document.getElementById('try-left').innerText = 3;
    document.getElementById('input-right').value = '';
    document.getElementById('success').style.display='none'
    document.getElementById('failed').style.display='none'


})

document.getElementById('key-pad').addEventListener('click',(e)=>{
    e.preventDefault()
    const inputRight = document.getElementById('input-right')
    const numberMatch = e.target.innerText
    // inputRight.value += numberMatch;
    if(numberMatch == 'C'){
        inputRight.value = ''
    }else if(numberMatch == '<'){
        inputRight.value = inputRight.value.slice(0, -1)
    }else{
        inputRight.value += numberMatch;
    }
})

document.getElementById('submit-btn').addEventListener('click',(e)=>{
    e.preventDefault()
    const leftInputValue = document.getElementById('input-left').value
    const rightInputValue = document.getElementById('input-right').value
    
    const tryleft = document.getElementById('try-left')
    const tryleftValue = tryleft.innerText
    if(tryleftValue != 0){
        if(leftInputValue== rightInputValue){
            document.getElementById('success').style.display='block'
            document.getElementById('failed').style.display='none'
        }else{
            document.getElementById('success').style.display='none'
            document.getElementById('failed').style.display='block'
            tryleft.innerText -=1;
    
        }
    }else{

    }


})