var e=document.querySelector("#thumbs"),t=document.querySelector("#largeImg");e.addEventListener("click",function(r){r.preventDefault();var c=r.target.closest("a");c&&e.contains(c)&&(t.src=c.href,t.alt=c.title)});
//# sourceMappingURL=index.ae390041.js.map
