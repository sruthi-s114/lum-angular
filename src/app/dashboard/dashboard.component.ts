import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dAccno="";
  dPswd="";
  dAmount="";

  wAccno="";
  wPswd="";
  wAmount="";

  constructor( private dataService:DataService) { }

  ngOnInit(): void {
  }

  deposit(){
    var accno=this.dAccno;
    var pswd=this.dPswd;
    var amount=this.dAmount;

    const result=this.dataService.deposit(accno,pswd,amount)

    if(result){
      alert("Your account has been credited with "+amount+" and new balance is "+result)
    }
  }

  withdraw(){
    var accno=this.wAccno;
    var pswd=this.wPswd;
    var amount=this.wAmount;

    const result=this.dataService.withdraw(accno,pswd,amount)

    if(result){
      alert(+amount+" has been debited from your account and new balance is "+result)
    }
  }
}
