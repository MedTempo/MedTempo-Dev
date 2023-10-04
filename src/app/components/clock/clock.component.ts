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
    const diff = this.nextmed?.getTime() - new Date().getTime()
  
    const date = new Date(Date.now() + diff)

   // console.log(date)

    const hours = Math.floor(diff / (1000 * 60 * 60 ));
    const minutes = Math.floor(diff % (1000 * 60 * 60 * 24)) / (1000 * 60);
    const seconds = Math.floor(diff % (1000 * 60)) / 1000;
    //const miliseconds = String(date.getMilliseconds()).padStart(2, '0');
  
 //   console.log(`h:${hours} m:${minutes} s:${seconds}`)

    const str_time = {
      h: String(hours).padStart(2, '0'),
      m:  String(minutes).slice(0,1).padStart(2, '0'),
      s: String(seconds).slice(0,2).padStart(2, '0'),
    }

    this.currentTime = `${str_time.h}:${str_time.m}:${str_time.s}`;

    if(seconds < 30  && this.notify == true && this.first_time == true){
      new Notification(`É hora do remédio ${this.nextnome} :)`, {
        body: `A dosagem é ${this.nextdosagem}`,
        tag: "medicamentos",
        image: "",
        silent: false
      })

      this.first_time = false
    }

   // console.log(this.currentTime)
  }
}
