import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  // selector: '[app-server]',
  //  selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent  implements  OnInit{
  ngOnInit() {
    // ...
  }
  serverId:  number=10;
  serverStatus : string ='offline';
  allowNewserver=false;
  serverCreateStatus="server created status ";
  serverName='red';
  serverCreated=true;


  constructor(){
    setTimeout(() => {
      this.allowNewserver=true;
    }, 2000);
  }
  

  getserverStatus(){
      return this.serverStatus;
  }
  function1(){
    this.serverCreateStatus="server created working ";
    this.serverCreated=true;
    this.getcolor();

  }
  onupdateName(event:any){
    this.getcolor();
      // console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }
  getcolor(){
    return this.serverName  === 'green'? 'green':'red';
    console.log(this.serverName);
  }

}
