const generateButton = document.querySelector(".btn");

const colorGenerator = () => {
  const header = document.querySelector("header");
  const colorCode = document.querySelector(".ccode");

  let colorValue = Math.random().toString(16).slice(2, 8);

  colorCode.innerText = `#${colorValue}`;
  header.style.background = `#${colorValue}`;
};

document.addEventListener("DOMContentLoaded", colorGenerator);
generateButton.addEventListener("click", colorGenerator);

// Display on touch
document.getElementById('this').onclick = function(){
    document.getElementById('target').style.display = 'block';
    setTimeout(function(){
      document.getElementById('target').style.display = 'none';
    }, 1000);
};

// Copy colorCode
function copy(that){
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
}