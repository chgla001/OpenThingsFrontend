import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuDiv;
  menuItems = [
    {
      iconClass: 'far fa-fw fa-clock',
      link: 'timetracker'
    },
    {
      iconClass: 'far fa-fw fa-sticky-note',
      link: ''
    }
  ];

  constructor() { }

  ngOnInit() {
    this.menuDiv = $('.menu');
    this.menuDiv.mouseover(() => {
      $('.menu__item').each(function (index) {
        const element = $(this);
        element.css('visibility', 'visible');
        element.css('opacity', '1');
        element.css('bottom', 70 + (70 * (index - 1)) + 'px'); //stimmt
        element.css('right', (70 * $('.menu__item').length) - (70 * (index + 1)) + 'px'); //stimmt
      });
      this.menuDiv.css('width', 70 * this.menuItems.length + 20 + 'px');
      this.menuDiv.css('height', 70 * this.menuItems.length + 20 + 'px');

    });

    this.menuDiv.mouseout(() => {
      $('.menu__item').each(function (index) {
        const element = $(this);
        element.css('visibility', 'hidden');
        element.css('opacity', '0');
        element.css('bottom', '0');
        element.css('right', '0');
      });
      this.menuDiv.css('width', '55px');
      this.menuDiv.css('height', '55px');
    });

  }

}

  // initMenu() {
  //   console.log('initMenu', this.menuDiv);

  //   // this.menuItems.forEach((nodeString, index) => {
  //   //   const node = $(nodeString);
  //   //   node.css('bottom', 70 + (70 * (index - 1)) + 'px');
  //   //   node.css('right', 70 - (70 * (index - 1)) + 'px');

  //   //   this.menuDiv.append(node);
  //   //   console.log('done');

  //   // });
  // }

// }
