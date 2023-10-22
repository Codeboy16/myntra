//search Items from myntra
document.getElementById('btn_search').addEventListener('click',()=>{
    let val = document.getElementById('search_item').value;
    window.open(`https://www.myntra.com/${val}?rawQuery=${val}`,'_parent')
})
document.getElementById('search_item').addEventListener('keydown',(val)=>{
      let search_val = document.getElementById('search_item').value;
     if(val.key=='Enter'){
        window.open(`https://www.myntra.com/${search_val}?rawQuery=${search_val}`,'_parent')
     }
});

document.getElementById('btn_search1').addEventListener('click',()=>{
    let val = document.getElementById('search_item1').value;
    window.open(`https://www.myntra.com/${val}?rawQuery=${val}`,'_parent')
})
document.getElementById('search_item1').addEventListener('keydown',(val)=>{
      let search_val = document.getElementById('search_item1').value;
     if(val.key=='Enter'){
        window.open(`https://www.myntra.com/${search_val}?rawQuery=${search_val}`,'_parent')
     }
});

