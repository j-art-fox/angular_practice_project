import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  userName = '';
  userCreationStatus = 'No users saved';
  allowNewUser = false;
  serverCreated = false;

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test Server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}

  //user methods
  onCreateUser() {
    this.userCreationStatus = 'User was Created! The name is ' + this.userName;
  }

  onUpdateUser(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
    if (this.userName) {
      this.allowNewUser = true;
    }
  }

  onUserReset() {
    this.userName = '';
  }

  // server methods
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was Created! The name is ' + this.serverName;
    this.serverName = '';
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
