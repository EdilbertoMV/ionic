import { Component } from '@angular/core';
import { ViewController } from '../../../../../..';

@Component({
  template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>This is a modal</ion-title>
      <ion-buttons left>
        <button ion-button icon-only (click)="dismissModal()" class="e2eCordovaCloseModal">
          <ion-icon name="close"></ion-icon>
        </button>
      </ion-buttons>
      <ion-buttons end>
        <button ion-button icon-only>
          <ion-icon name="funnel"></ion-icon>
        </button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content padding>
    <p>The modal toolbar should have status bar padding.</p>
    <button ion-button block (click)="dismissModal()">Close modal</button>
  </ion-content>
  `
})
export class MyModal {
  constructor(public viewCtrl: ViewController) {}

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}