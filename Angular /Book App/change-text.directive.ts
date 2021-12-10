import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(ele:ElementRef) {
    console.log(ele);
    ele.nativeElement.innerText="#########";
    ele.nativeElement.color="red";
  }

}
