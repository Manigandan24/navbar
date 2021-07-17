import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { SideNavItem } from '../sidenav/nav.item';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector:'app-menu-list',
    templateUrl:'./menu-list-item.component.html',
    styleUrls:['./menu-list-item.component.css'],
    animations: [
        trigger('indicatorRotate', [
          state('collapsed', style({transform: 'rotate(0deg)'})),
          state('expanded', style({transform: 'rotate(180deg)'})),
          transition('expanded <=> collapsed',
            animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
          ),
        ])
      ]
})
export class MenuListItemComponent{
    expanded: boolean
    @Input() item:SideNavItem;
    @Input() depth: number
    @Input() i :number
    selectedItem:number = null;

    classStyler = {
      active0: false,
      active1: false
    }

    constructor(public router:Router){
        if (this.depth === undefined) {
            this.depth = 0;
          }
    }

    onItemSelected(item: SideNavItem, i: number){

      if (!item.children || !item.children.length){
        this.router.navigate([item.route])
        this.selectedItem = i;
        if(i==0){
          this.classStyler.active0=true
          this.classStyler.active1=false;
        }
        if(i==1){
          this.classStyler.active0=false
          this.classStyler.active1=true;
        }
      }
        if(item.children && item.children.length){
            this.expanded=!this.expanded
        }
    }

}