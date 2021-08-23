function collapse(self) {
  //self is heading
  if (self.opacity = "0.5"){
    //collapsed already. need to uncollapse
    var cont = document.querySelectorAll('.con');
    var i = 0;
    while (i < cont.length){
      cont[i].style.display='block';
      i++;
    }
    self.opacity="1";
    $(self).attr('\f125','\f123');

    
  } else {
    var cont = document.querySelectorAll('.con');
    var i = 0;
    while (i < cont.length){
      cont[i].style.display='none';
      i++;
    }
    self.opacity="0.5";
    $(self).attr('\f123','\f125');
  }
}
