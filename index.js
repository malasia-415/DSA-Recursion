function sheepCountDown(noun) {
  if(noun < 0 ) {
    return;
  }
  console.log('Another sheep jumps over the fence: ' + num + ' sheep left.' );
  sheepCountDown(num -1);
}
sheepCountDown(10);


1) Input of the program is the Integer of the number of sheep. (Number)
2) Output of the program Console log of a message stating "Another sheep jumps over the fence" and the current sheep number
3) The number of sheep decremented 1.
4) Will print out the number of sheep as one less than before, until no sheep are left.
