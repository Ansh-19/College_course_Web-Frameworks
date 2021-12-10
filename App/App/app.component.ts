import { Component } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { books } from './books';

var i:number = 10000;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MyFirstPrj';
  b = books;
  i=2000;
  msg  = "";
  fn = "";
  br = "";
  hh=120;
  ww=120;
  bt:boolean=true;
  btP:boolean=true;
  myc:boolean = true;
  imgUrl = "assets/images/taj_mahal1.jpg";
  imgUrl1 = "assets/images/taj_mahal2.jpg";
  imgUrl2 = "https://hddesktopwallpapers.in/wp-content/uploads/2015/11/cyclamen-flower.jpg";
  justCheck(){
    console.log("This is just to check Event Binding...");
  }
  checkwithEvenObject(event){
    console.log(event);
  }
  
  divClick(){
    this.msg = "This is div clicked...";
  }
  twoWay(FullName, Branch){
    this.fn = FullName;
    this.br = Branch;
  }
  myStyle(){
    let hw={
      'background-color':'red', 'color':'blue', 'height':this.hh+'px', 'width':this.ww+'px'
    };
    return hw;
  }
  myStyle1(){
    let hw={
      'background-color':'#afffff', 'color':'blue', 'height':'120px', 'width':'120px'
    };
    return hw;
  }
  increaseSize(){
    this.hh = this.hh + 1;
    this.ww = this.ww + 1;
  }
  applyClasses(){
    let myclasses = {
      btn:this.bt,
      'btn-primary':this.btP,
      myclass1:this.myc
    };
    return myclasses;
  }
  AddRemoveClass(){
    this.bt==true ? this.bt=false : this.bt=true;
    this.btP==true ? this.btP=false : this.btP=true;
    this.myc==true ? this.myc=false : this.myc = true;
  }
}