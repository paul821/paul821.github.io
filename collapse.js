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
    var sign = self.querySelector("::before");
    sign.attr({style: "content:url("api.iconify.design/akar-icons/chevron-down.svg")" });

    
  } else {
    var cont = document.querySelectorAll('.con');
    var i = 0;
    while (i < cont.length){
      cont[i].style.display='none';
      i++;
    }
    var sign = self.querySelector("::before");
    sign.attr({style: "content:url("api.iconify.design/akar-icons/chevron-right.svg")" });
  }
}
