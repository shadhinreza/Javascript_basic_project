window.onload = () =>{
    main()
  }
  function main(){
    let btn = document.getElementById('changeBtn');
    let body = document.body
    let output = document.getElementById('output')
    btn.addEventListener('click', function(){
      let bgColor = generateHex();
      body.style.backgroundColor = bgColor;
      output.value = bgColor
    })
  
  }
  
  function generateHex(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
  }