var mem = {
  
  hWrap : null, 
  hCards : null, 

  sets : 6, 
  hint : 1000, 
  url : "", 
  
  loaded : 0, 
  moves : 0, 
  last : null, 
  grid : null, 
  matches : null, 
  locked : null, 

 
 preload : function () {
    
    mem.hWrap = document.getElementById("mem-game");

    
    for (let i=0; i<=mem.sets; i++) {
      let img = document.createElement("img");
      img.onload = function(){
        mem.loaded++;
        if (mem.loaded == mem.sets+1) { mem.init(); }
      };
      img.src = mem.url+"./img/smiley-"+i+".png";
      console.log()
    }
  },
  
 
  init : function () {
    
  if (mem.locked != null) { 
      clearTimeout(mem.locked);
      mem.locked = null;
    }
    mem.hCards = [];
    mem.grid = [];
    mem.matches = [],
    mem.moves = 0;
    mem.last = null;
    mem.locked = null;
    mem.hWrap.innerHTML = "";

    
    let current = mem.sets * 2, temp, random;
    for (var i=1; i<=mem.sets; i++) {
      mem.grid.push(i);
      mem.grid.push(i);
    }
    while (0 !== current) {
      random = Math.floor(Math.random() * current);
      current -= 1;
      temp = mem.grid[current];
      mem.grid[current] = mem.grid[random];
      mem.grid[random] = temp;
    }
    
    
    for (let i=0; i<mem.sets * 2; i++) {
      let card = document.createElement("div");
      card.className = "mem-card";
      card.innerHTML = `<img src='${mem.url}./img/smiley-0.png'/>`;
      console.log(card.innerHTML)
      card.dataset.idx = i;
      card.onclick = mem.open;
      mem.hWrap.appendChild(card);
      mem.hCards.push(card);
    }
  },
  
  
  open : function () { if (mem.locked == null) { 
    
    mem.moves++;
    let idx = this.dataset.idx;
    this.innerHTML = `<img src='${mem.url}./img/smiley-${mem.grid[idx]}.png'/>`;
    this.onclick = "";
    this.classList.add("open");
    
    
    if (mem.last == null) { mem.last = idx; }
    
    else {
      
      if (mem.grid[idx] == mem.grid[mem.last]) {
        mem.matches.push(mem.last);
        mem.matches.push(idx);
        mem.hCards[mem.last].classList.remove("open");
        mem.hCards[idx].classList.remove("open");
        mem.hCards[mem.last].classList.add("right");
        mem.hCards[idx].classList.add("right");
        mem.last = null;
        if (mem.matches.length == mem.sets * 2) {
          alert("Sən qalib gəldin! GEDİŞ SAYI " + mem.moves);
          mem.init();
        }
      }

      
      else {
        mem.hCards[mem.last].classList.add("wrong");
        mem.hCards[idx].classList.add("wrong");
        mem.locked = setTimeout(function(){
          mem.close(idx, mem.last);
        }, mem.hint);
      }
    }
  }},

  
  close : function (aa, bb) {
    aa = mem.hCards[aa];
    bb = mem.hCards[bb];
    aa.classList.remove("wrong");
    bb.classList.remove("wrong");
    aa.classList.remove("open");
    bb.classList.remove("open");
    aa.innerHTML = `<img src='${mem.url}./img/smiley-0.png'/>`;
    bb.innerHTML = `<img src='${mem.url}./img/smiley-0.png'/>`;
    aa.onclick = mem.open;
    bb.onclick = mem.open;
    mem.locked = null;
    mem.last = null;
  }
};

// (F) INIT GAM
window.addEventListener("DOMContentLoaded", mem.preload);