/* add click event to all buttons when the page is loading*/
window.onload = function(){
  var res= [];
  var btn_operators = document.getElementsByClassName("key");
  var display_num = document.getElementsByClassName("display")[0];
  var num = document.getElementsByClassName("method");
  
  /*操作符运算操作*/
  for (var i=0; i<btn_operators.length;i++){
    btn_operators[i].onclick = function(){
      if (this.value == "AC"){
        res = [];
        display_num.value = "0";
      }
      else if(this.value == "C"){
        if (display_num.value.length == 1){
          display_num.value = "0";
        }
        else{
        display_num.value = display_num.value.substr(0, display_num.value.length-1);}
        console.log(res);
        res[res.length-1] = display_num.value;
      }
    }
  }

  for (var i=0; i<num.length; i++){
    num[i].onclick = function(){
      if (display_num.value== "0"){ /*显示器上是0的情况 */
        console.log(res);
        if (this.value == "."){
          display_num.value += this.value;
        }
        else if (!isNaN(this.value)){
          display_num.value = "";
          display_num.value += this.value;
          res[res.length] = display_num.value;}
        else if (this.value == "="){
          display_num.value = "0";
        }
        else if (this.value == "×"){
          res[1] = "*";     
        }
        else if (this.value == "÷"){
          res[1] = "/";    
        }
        else{
          res[1] = this.value;
        }
      }
      else{  /*显示器上不是0的情况*/
        /*The indexOf() method returns the position of the first occurrence of a specified value in a string.This method returns -1 if the value to search for never occurs.*/
        if (this.value == "." || !isNaN(this.value)){ /*输入的值是点或者数字*/
          if (res[res.length-2] != "+" && res[res.length-2] != "-" &&res[res.length-2] != "*" && res[res.length-2] != "/"){
            console.log(res);
            if (display_num.value.indexOf(".") != -1){
              if (this.value != "."){
                display_num.value += this.value;
                res[res.length-1] = display_num.value;
              }
            }
            else{
              display_num.value += this.value;
              res[res.length-1] = display_num.value;
            }
          }
          else{
            if (res[res.length-1] =="" ){
              console.log("pass");
              display_num.value = "";
              if (this.value == "."){
                display_num.value = "0" + this.value;
                res[res.length-1] =display_num.value;
              }
              else{              
                display_num.value += this.value;
                res[res.length-1] =display_num.value;}
                console.log(res);
            }
            else{
              if (display_num.value.indexOf(".") != -1){
                if (this.value != "."){
                  display_num.value += this.value;
                  res[res.length-1] =display_num.value;
                }
              }
              else{
                display_num.value += this.value;
                res[res.length-1] =display_num.value;
              }
            }
          }
        }
        else{
          if (this.value != "="){ /*输入加减乘除*/
            if (res[res.length-1] != ""){
              if (this.value == "+"||this.value=="-"){
                res[res.length] = this.value;
                res[res.length] = "";
                console.log(res);
              }
              else if(this.value == "×"){
                res[res.length] = "*";
                res[res.length] = "";
                console.log(this.value);
              }
              else{
                res[res.length] = "/";
                res[res.length] = "";
                console.log(this.value);
                console.log(res);
              }
            }
            else{
              res[res.length-2] = this.value;
              console.log(res);
            }
          }
          else{ /*输入等号*/
            console.log(res);
            display_num.value = eval(res.join(""));
            res = [display_num.value];
            console.log(res);
          }
        }
      }
    }
  }
}
