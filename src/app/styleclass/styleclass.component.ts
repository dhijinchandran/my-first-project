import { Component } from '@angular/core';

@Component({
  selector: 'app-styleclass',
  templateUrl: './styleclass.component.html',
  styleUrls: ['./styleclass.component.css']
})
export class StyleclassComponent {
  serverStatus='offline';
  users:any[]=["name","sdgdf"];
  
  
  function1(){
    console.log(this.users);
    this.serverStatus='online';
    this.users.push(this.serverStatus)
    // this.serverStatus='ofline';
    
  }

}
