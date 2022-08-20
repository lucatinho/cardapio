import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cardápio';

  products = [
    {
      nome: 'Pão na Chapa',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ingredientes: 'Hambúrguer artesanal de 130 gramas, 2 ovos separados por finas fatias de linguiça calabresa defumada, envolvido por queijo muçarela derretido na chapa, alface e tomate.',
      preco: '22.20'
    }, {
      nome: 'Pão na Chapa',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ingredientes: 'Hambúrguer artesanal de 130 gramas, 2 ovos separados por finas fatias de linguiça calabresa defumada, envolvido por queijo muçarela derretido na chapa, alface e tomate.',
      preco: '22.00'
    }, {
      nome: 'Pão na Chapa',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ingredientes: 'Hambúrguer artesanal de 130 gramas, 2 ovos separados por finas fatias de linguiça calabresa defumada, envolvido por queijo muçarela derretido na chapa, alface e tomate.',
      preco: '22.14'
    }, {
      nome: 'Pão na Chapa',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ingredientes: 'Hambúrguer artesanal de 130 gramas, 2 ovos separados por finas fatias de linguiça calabresa defumada, envolvido por queijo muçarela derretido na chapa, alface e tomate.',
      preco: '22.17'
    }, {
      nome: 'Pão na Chapa',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ingredientes: 'Hambúrguer artesanal de 130 gramas, 2 ovos separados por finas fatias de linguiça calabresa defumada, envolvido por queijo muçarela derretido na chapa, alface e tomate.',
      preco: '22.80'
    }, {
      nome: 'Pão na Chapa',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ingredientes: 'Hambúrguer artesanal de 130 gramas, 2 ovos separados por finas fatias de linguiça calabresa defumada, envolvido por queijo muçarela derretido na chapa, alface e tomate.',
      preco: '22.99'
    },
  ]
}
