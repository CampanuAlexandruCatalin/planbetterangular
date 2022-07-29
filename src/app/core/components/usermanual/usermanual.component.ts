import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-usermanual',
  templateUrl: './usermanual.component.html',
  styleUrls: ['./usermanual.component.scss']
})
export class UsermanualComponent implements OnInit {
  selected: Date | null | undefined;
  dateTime: Date| null | undefined;

  sec:any=0+'0';
  min:any=25;

  secb:any=0+'0';
  minb:any=5;
  mesaj:string|undefined;
  mesajb:string|undefined;

  starttimer:any;
  runing=false;

  starttimerb:any;
  runingb=false;

  constructor(public router: Router) {
  }

  start():void{
    if(!this.runing){
      this.runing=true;
      this.starttimer=setInterval(()=>{
      if(this.min>0)
      {
      if(this.sec==0)
      {
        this.sec=60;
        this.min--;
      }
      this.sec--;
      if(this.min==0)
      {
        clearInterval(this.starttimer);
        this.runing=false;
        this.min=this.sec=0;
        this.mesaj="Time for a break!";
      }}
    },1000);
    }
    else{
      this.stop();
    }
  }

  stop():void{
    clearInterval(this.starttimer);
    this.runing=false;
  }
  reset():void{
    clearInterval(this.starttimer);
    this.runing=false;
    this.min=25;
    this.sec='0'+0;
    this.mesaj='';
  }

  resetb():void{
    clearInterval(this.starttimerb);
    this.runing=false;
    this.minb=5;
    this.secb='0'+0;
    this.mesajb='';
  }

  startb():void{
    if(!this.runingb){
      this.runingb=true;
      this.starttimerb=setInterval(()=>{
      if(this.minb>0)
      {
      if(this.secb==0)
      {
        this.secb=60;
        this.minb--;
      }
      this.secb--;
      if(this.minb==0)
      {
        clearInterval(this.starttimerb);
        this.runingb=false;
        this.minb=this.secb=0;
        this.mesajb="Time to learn!";
      }}
    },1000);
    }
    else{
      this.stop();
    }
  }


  ngOnInit(): void {
    this.dateTime=new Date();
    timer(0,1000).subscribe(()=>{
      this.dateTime=new Date()
    })
  }

}
