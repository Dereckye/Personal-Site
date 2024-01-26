/**/
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minhaDiv = document.querySelector(".digital")}
    let digitalElement = document.querySelector('.digital');
    
    function updateClock(){
        let now = new Date();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();
    
        digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
    
        let sDeg = ((360 / 60 ) * second)
        
    }
    
    function fixZero(time){
      return time < 10 ? `0${time}` : time;
    }
    
    
    setInterval(updateClock, 1000);