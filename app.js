

document.querySelector('.start-btn').addEventListener('click', () => {
   let inputWidth = Number(document.querySelector('.width-input').value);
   let inputHeight = Number(document.querySelector('.height-input').value);
   let cont = document.querySelector('.cont')
   let flag = true;

   if(!Number.isInteger(+document.querySelector('.width-input').value) && !Number.isInteger(+document.querySelector('.height-input').value) && inputWidth % 2, inputHeight % 2 ) {
       alert ('Только целочисленные и кратные 2 числа.');
       return false;
    } else if (inputWidth % 2, inputHeight % 2) { 
    return true;
    };

    // console.log(typeof inputHeight);
    
     
    for (h = 0; h<inputHeight; h++) {

        for (w = 0; w<inputWidth; w++) {
            if (w == 0) flag = !flag;
            let div = document.createElement('div');
            if (flag) div.className = 'square gray';
            else div.className = 'square';
            cont.appendChild(div);
            flag = !flag;
        };
                let divSpace = document.createElement('div');
                divSpace.classList.add('space');
                cont.append(divSpace);
    };


});