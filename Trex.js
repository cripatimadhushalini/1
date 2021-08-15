class Trex{
  play(){
    var index = 0;
    var x;
    var y=0;

   index = index+1;
    x = x+200
     trex[index-1].x=x;
     trex[index-1].y=y;
    if(index===trex.index){
        trex[index-1].shapeColor = "red";
        camera.position.x = displayWidth/2;
        camera.position.y = trex[index-1].y;
      }
    }
  }