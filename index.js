function sheepCountDown(noun) {
  if(noun < 0 ) {
    return;
  }
  console.log('Another sheep jumps over the fence: ' + num + ' sheep left.' );
  sheepCountDown(num -1);
}
sheepCountDown(10);
