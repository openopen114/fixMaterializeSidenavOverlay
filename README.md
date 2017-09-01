 
 
### Fix

I use Materialize framwork in my Angular 2 / 4 project.

Sidenav component has some issue like sidenav does not working

or the sidenav overlay does not remove as sidenav hind / swipeleft

so....

you need 

 
| avoid multiple initialization sidenav
just initialize sidenav one time

| remove "second" #sidenav-overlay div
i use event listener to remove the second/ multiple #sidenav-overlay div
 

```sh

    sidenavActions = new EventEmitter<any>();
    sidenavParams = [];

    isSidenavActived = false;//for fix multiple init ;sidenav-overlay opacity 

  


    removeSidenavOverlay(){
        // console.log("#sidenav-overlay remove"); 
        $("#sidenav-overlay").remove();
    }

    public showSidenav(){
        this.sidenavParams = ['show'];

        if (this.isSidenavActived == false){   
            //for avoid multiple initialization
            this.sidenavActions.emit('sideNav');
            this.isSidenavActived = true; 
             

            //add listender
            document.body.addEventListener('mouseup',this.removeSidenavOverlay);
        }else{
            //remove listender after sidenav active
            document.body.removeEventListener('mouseup',this.removeSidenavOverlay);
        }
    };

```
