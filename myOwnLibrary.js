
function bounceOff(Object1,Object2){
    if (Object1.x - Object2.x < Object2.width/2 +Object1.width/2 && Object2.x-Object1.x < Object2.width/2 +Object1.width/2){
        Object1.velocityX = Object1.velocityX * (-1);
      Object2.velocityX = Object2.velocityX * (-1);
     }
    if( Object1.y - Object2.y < Object2.width/2 +Object1.width/2 && Object2.y-Object1.y< Object2.width/2 +Object1.width/2){
      Object1.velocityY = Object1.velocityY * (-1);
      Object2.velocityY = Object2.velocityY * (-1);
    }
  }
  function isTouching(Object1,Object2){
  
    if (Object1.x - Object2.x < Object2.width/2 +Object1.width/2 && Object2.x-Object1.x < Object2.width/2 +Object1.width/2
      && Object1.y - Object2.y < Object2.width/2 +Object1.width/2 && Object2.y-Object1.y< Object2.width/2 +Object1.width/2){
     
     return true;
    }
    else
    {
     
     return false;
    }
  }