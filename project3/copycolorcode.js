window.onload = () =>{
    main()
  }
  function main(){
    let btn = document.getElementById('changeBtn');
    let copyClick = document.getElementById('copyClick');
    let body = document.body
    let output = document.getElementById('output')
    btn.addEventListener('click', function(){
      let bgColor = generateHex();
      body.style.backgroundColor = bgColor;
      output.value = bgColor
    })
    copyClick.addEventListener('click', copyClickText)
  
  }
  function copyClickText(){
      output = output;
      output.select();
      output.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(output.value);
      alert("Copied the text: " + output.value);
  }
  
  function generateHex(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
  }