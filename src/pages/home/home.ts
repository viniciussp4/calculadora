import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  valores = {
    num1: '0',
    num2: '0',
    resultado: 0
  }

  constructor(public navCtrl: NavController) {

  }

  soma(){
    this.valores.resultado = parseInt(this.valores.num1) + parseInt(this.valores.num2);
  }

}
