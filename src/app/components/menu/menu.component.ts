import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // menuDiv: HTMLDivElement;
  menuDiv;
  menuItems = [
    `<div class="menu__item" style="
      display: inline;
      position: absolute;
      cursor: pointer;
      font-size: 2rem;
      padding: 15px;
      border-radius: 50%;
      right: 20px;
      bottom: 20px;
      background-color: #cecece;">
      <i class="far fa-fw fa-clock"></i>
     </div>`,
    `<div style="
     display: inline;
     position: absolute;
     cursor: pointer;
     font-size: 2rem;
     padding: 15px;
     border-radius: 50%;
     right: 0;
     bottom: 0;
     background-color: #cecece;">
     <i class="far fa-fw fa-clock"></i>
    </div>`,
    `<div style="
      display: inline;
      position: absolute;
      cursor: pointer;
      font-size: 2rem;
      padding: 15px;
      border-radius: 50%;
      right: 0;
      bottom: 0;
      background-color: #cecece;">
      <i class="far fa-fw fa-sticky-note"></i>
    </div>`
  ];

  constructor() { }

  ngOnInit() {
    this.menuDiv = $('.menu');
    this.initMenu();
    // this.menuDiv.onmouseenter = function (event) {
    //   console.log(event.target);

    //   // if(event.target ==)
    //   const htmlMenuItems = document.getElementsByClassName('menu__item');
    //   console.log(htmlMenuItems.length);

    //   for (let i = 0; i <= htmlMenuItems.length; i++) {
    //     const selectedElement = <HTMLDivElement>htmlMenuItems[i];
    //     console.log(selectedElement);

    //     // selectedElement.style.display = 'inline';
    //   }
    // };
  }

  initMenu() {
    // this.menuDiv = <HTMLDivElement>document.getElementsByClassName('menu')[0];
    // this.menuItems.forEach((nodeString, index) => {
    //   const div = document.createElement('div');
    //   div.innerHTML = nodeString.trim();
    //   const menuItem = <HTMLDivElement>div.firstChild;
    //   menuItem.style.bottom = 70 + (70 * (index - 1)) + 'px';
    //   menuItem.style.right = 70 - (70 * (index - 1)) + 'px';
    //   this.menuDiv.appendChild(menuItem);
    // });

    console.log('initMenu', this.menuDiv);

    this.menuItems.forEach((nodeString, index) => {
      const node = $(nodeString);
      node.css('bottom', 70 + (70 * (index - 1)) + 'px');
      node.css('right', 70 - (70 * (index - 1)) + 'px');

      this.menuDiv.append(node);
      console.log('done');

    });
  }

}
