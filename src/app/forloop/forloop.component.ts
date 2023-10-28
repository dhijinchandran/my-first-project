import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent {
  showSecret = false;
  log:any = [];
  onToggleDetails(){
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length+2);
    this.log.push(new Date());
    
  }
  remove(i:any ){
    console.log(i);
    const position = i+1;
    this.log.splice(position,i);
    // this.log.slice(1);
    // this.log.splice(this.log.indexOf(i), 1);
       
  }

}
