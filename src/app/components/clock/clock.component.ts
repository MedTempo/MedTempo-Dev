import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  public currentTime: string = '';

  @Input() nextmed!: Date;
  @Input() nextnome!: string;
  @Input() nextdosagem!: string;

  notify!:boolean
  first_time = true

  is_delayed = false

  trigger_warn = new Audio("../../../assets/audio/clock-alarm.mp3")

  ngOnInit() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1);

    if (Notification.permission === "granted") {
      this.notify = true
    }
    else if (Notification.permission === "denied" || Notification.permission == "default"){
      Notification.requestPermission((permission: NotificationPermission)=>{
        if(Notification.permission === "granted"){
          this.notify = true
        }
      })
    }

  }

  updateTime() {
    const now = new Date();
    let diff = this.nextmed?.getTime() - new Date().getTime()
  
    const date = new Date(Date.now() + diff)

   //console.log(diff)

   if (diff < 0) {
      diff = Math.abs(diff)
      this.is_delayed = true
   }

    let hours = Math.floor(diff / (1000 * 60 * 60 ));
    let minutes = Math.floor(diff % (1000 * 60 * 60 * 24)) / (1000 * 60);
    let seconds = Math.floor(diff % (1000 * 60)) / 1000;
    //const miliseconds = String(date.getMilliseconds()).padStart(2, '0');
  
   //console.log(`h:${hours} m:${minutes} s:${seconds}`)
/*
    if(seconds < 0 && minutes < 0) {
      hours = Math.abs(hours)
      minutes = Math.abs(minutes)
      seconds = Math.abs(seconds)

      this.is_delayed = true
    }
*/
    const str_time = {
      h: String(hours).padStart(2, '0'),
      m:  String(minutes).slice(0,1).padStart(2, '0'),
      s: String(seconds).padStart(2, '0').slice(0,2),
    }

    this.currentTime = `${str_time.h}:${str_time.m}:${str_time.s}`;

    if(seconds < 30  && this.notify == true && this.first_time == true){
      new Notification(`É hora do remédio ${this.nextnome} :)`, {
        body: `A dosagem é ${this.nextdosagem}`,
        tag: "medicamentos",
        icon: "../../../assets/image/logo.png",
        silent: false
      })

      this.trigger_warn.play()

      this.first_time = false
    }

   // console.log(this.currentTime)
  }
}
