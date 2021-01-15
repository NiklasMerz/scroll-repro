import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fields = [];

  constructor(private loadingCtrl: LoadingController) {
    this.buildList();
  }

  buildList() {
    this.fields = [];
    for (let i = 0; i < 20; i++) {
      this.fields.push('Field ' + i);
    }
  }

  async refresh() {
    for (let i = 0; i < 20; i++) {
      this.fields[i] = 'Field Refreshed' + i;
    }
  }
}
