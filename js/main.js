(function(){

  var frame = $('.frame')[0];

  var xCount = frame.offsetWidth / 16;
  var yCount = frame.offsetHeight / 16;

  var grids = [];
  var expired = [];

  for (var i = 0; i < xCount; i++) {
    for (var j = 0; j < yCount; j++) {
      var div = document.createElement('div');
      div.classList.add('grid');
      div.style.opacity = 0.05;
      div.style.transform = `translate(${i * 16}px, ${j * 16}px)`;
      frame.appendChild(div);
      grids.push(div);
    }
  }

  var getNext = function(cells, iter) {
    if (iter == 6) {
      return;
    } else {
      var nextIndex = getRandomInt(0, cells.length - 1);
      var next = cells[nextIndex];
      console.log(next);
      if (next < 0) {
        next = (xCount * yCount) + next;
      }
      if (next > xCount * yCount) {
        next = next - (xCount * yCount);
      }
      if (expired.includes(next)) {
        console.log('duplicate');
        return getNext(cells, iter+=1);
      }
      return next;
    }
  };

  var checkNeighbors = function(cell, runs) {
    var cell1 = cell - yCount - 1;
    var cell2 = cell - yCount;
    var cell3 = cell - yCount + 1;
    var cell4 = cell - 1;
    var cell6 = cell + 1;
    var cell7 = cell + yCount - 1;
    var cell8 = cell + yCount;
    var cell9 = cell + yCount + 1;

    var cells = [cell1, cell2, cell3, cell4, cell6, cell7, cell8, cell9];

    cells.forEach( function(index) {
      if (runs < 1) {
        grids[index].style.opacity = 1;
      }
    });

    var next = getNext(cells, 0);

    if (next) {
      expired.push(next)

      setTimeout(()=>{
        grids[next].style.opacity = 1;
        grids[next].style.borderColor = `#E14E38`;
        checkNeighbors(next, runs+=1);
      }, 100);
    }
  };





  var start = 230;

  grids[start].style.opacity = 1;
  grids[start].style.borderColor = `#E14E38`;
  checkNeighbors(start, 0);



})();


















