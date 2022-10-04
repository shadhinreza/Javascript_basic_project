window.onload = () =>{
    main()
  }
  function main(){
    let btn = document.getElementById('changeBtn');
    let body = document.body
    btn.addEventListener('click', function(){
      let bgColor = generateRGB();
      body.style.backgroundColor = bgColor;
    })
  
  }
  
  function generateRGB(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`
  }