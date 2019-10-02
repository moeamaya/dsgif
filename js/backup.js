(function(){

  var frame = $('.frame')[0];

  var xCount = frame.offsetWidth / 16;
  var yCount = frame.offsetHeight / 16;

  var grids = [];
  var expired = [];
  var start = 124;

  var renderStart = function() {
    for (var i = 0; i < xCount; i++) {
      for (var j = 0; j < yCount; j++) {
        var div = document.createElement('div');
        div.classList.add('grid');
        div.style.opacity = 0;
        div.style.transform = `translate(${i * 16}px, ${j * 16}px)`;
        frame.appendChild(div);
        grids.push(div);
      }
    }
  };

  var renderPixel = function() {
    grids[start].id = "start";
    grids[start].style.opacity = 1;
    grids[start].style.background = "#F3B8AF";

    // grids[start].style.transition = `none`;
    // grids[start].style.transform += ` scale(1.2)`;
    // animate({
    //   el: grids[start],
    //   opacity: [0, 1],
    //   scaleX: [0, 1]
    // })

  }


  var renderGrid = function() {
    grids.forEach((div, i)=> {
      animate({
        el: div,
        opacity: [0, 0.3],
        easing: 'easeOutQuad',
        delay: 5 * i
      });
    });


    grids[start].id = "start";
    grids[start].style.opacity = 1;
    grids[start].style.background = "#F3B8AF";
  }

  var renderUI = function() {
    grids[start].style.opacity = 0.4;
    grids[start].style.borderColor = `#F3B8AF`;
    grids[start].style.background = "#fff";

    var uis = $('.ui');
    uis.forEach((ui, i)=> {
      setTimeout(()=>{
        ui.style.clipPath = `inset(0% 0% 0% 0%)`;
      }, i * 250);
    });
  }

  var render = function() {
    renderStart();
    setTimeout(renderPixel, 200);
    setTimeout(renderGrid, 1000);
    setTimeout(renderUI, 2000);
  }


  render();

})();


















