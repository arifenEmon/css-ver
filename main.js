let input = document.querySelectorAll('.sub-box input');

function hendleUpdate(){
    let suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}
input.forEach(inputs => inputs.addEventListener('mousemove',hendleUpdate))
input[0].addEventListener('mousemove',()=>{
    let display = document.getElementById('dpl')

})

input[0].addEventListener('mousemove',vl)

function vl(){
        let display = document.getElementById('dpl')
        display.innerHTML = this.value + 'px'
        
        
}