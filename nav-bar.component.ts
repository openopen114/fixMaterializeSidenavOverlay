import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {MaterializeAction} from 'angular2-materialize';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private _router: Router) {
       

   }

  ngOnInit() {
      this.setNavColor();
  }

    nav_color  = "rgba(0,0,0,0)"; // depend on routh path
 

    sidenavActions = new EventEmitter<any>();
    sidenavParams = [];

    isActived = false;//for fix multiple init ;sidenav-overlay opacity 

    public showSidenav(): void {
        this.sidenavParams = ['show'];

        if (this.isActived == false){   
            //for avoid multiple initialization
            this.sidenavActions.emit('sideNav');
            this.isActived = true; 
        } 
    }


    setNavColor(){ 
        this._router.events
        .subscribe(
            (url:any) => {
                let _ruta = "";
                url.url.split("/").forEach(element => {
                    if(element!=="" && _ruta==="")
                        _ruta="/"+element;  
                });
                // console.log("route: "+_ruta); //<<<---- Root path
                // console.log("to URL:"+url.url); //<<<---- Destination URL                    
                // console.log("from URL:"+this._router.url);//<<<---- Current URL

               
                //  set nav background color
                switch(url.url) {
                    case "/":
                        this.nav_color = "rgba(0,0,0,0)";;
                        break;
                    case "/project":
                        this.nav_color = "#34495E";
                        break;
                    case "/contact":
                       this.nav_color = "#76C7C2";
                        break;
                    case "/sales":
                       this.nav_color = "#0288D1";
                        break;    
                         
                    default:
                        this.nav_color = "rgba(0,0,0,0)";;
                }
            }); 
    }

}
