import { Component, OnInit } from '@angular/core';
import { ReqServiceService } from '../../Services/Req-Service.Service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private reqService : ReqServiceService) { }

  ngOnInit() {

  	this.reqService.getUserProfile().subscribe(
  		data => console.log(data),
  		error => console.log(error)
  	);
  }

}
