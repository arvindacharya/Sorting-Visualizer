async function bubble() {
    const arr = document.querySelectorAll(".bar");
    for(let i = 0; i < arr.length-1; i++){
   
        for(let j = 0; j < arr.length-i-1; j++){
         
            arr[j].style.background = '#fffbc8';
            arr[j+1].style.background = '#fffbc8+';
            if(parseInt(arr[j].style.height) > parseInt(arr[j+1].style.height)){
              
                await waitforme(delay);
                swap(arr[j], arr[j+1]);
            }
            arr[j].style.background = '#7600bc';
            arr[j+1].style.background = '#7600bc';
        }
        arr[arr.length-1-i].style.background = '#da8ee7';
    }
    arr[0].style.background = '#da8ee7';
  }
  const bubSortbtn = document.querySelector(".bubbleSort");
  bubSortbtn.addEventListener('click', async function(){
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await bubble();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
  });