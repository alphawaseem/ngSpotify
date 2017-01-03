import {Component} from '@angular/core';

class NavItem{
    constructor(public name:string,public url:string){}
}

@Component({
    moduleId : module.id,
    selector : 'navbar',
    templateUrl : 'navbar.component.html'
})
export class NavBarComponent {
    projectName : string;
    items : NavItem[] = [];
    selectedItem : NavItem;
    constructor(){
        this.projectName = "ngSpotify";
        this.items.push(new NavItem('Search','/home'));
        this.items.push(new NavItem('About','/about'));
        this.selectedItem=this.items[0];
    }

    selectItem(item:NavItem):boolean{
        this.selectedItem = item;
        return false;
    }

}