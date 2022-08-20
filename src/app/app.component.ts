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
      nome: 'X - Monstro',
      img: 'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_960_720.jpg',
      ingredientes: 'Hambúrguer artesanal de 130 gramas, 2 ovos separados por finas fatias de linguiça calabresa defumada, envolvido por queijo muçarela derretido na chapa, alface e tomate.',
      preco: '22.20'
    }, {
      nome: 'X - Monstro',
      img: 'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_960_720.jpg',
      ingredientes: 'Hambúrguer artesanal de 130 gramas, 2 ovos separados por finas fatias de linguiça calabresa defumada, envolvido por queijo muçarela derretido na chapa, alface e tomate.',
      preco: '22.00'
    }, {
      nome: 'X - Monstro',
      img: 'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_960_720.jpg',
      ingredientes: 'Hambúrguer artesanal de 130 gramas, 2 ovos separados por finas fatias de linguiça calabresa defumada, envolvido por queijo muçarela derretido na chapa, alface e tomate.',
      preco: '22.14'
    }, {
      nome: 'X - Monstro',
      img: 'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_960_720.jpg',
      ingredientes: 'Hambúrguer artesanal de 130 gramas, 2 ovos separados por finas fatias de linguiça calabresa defumada, envolvido por queijo muçarela derretido na chapa, alface e tomate.',
      preco: '22.17'
    }, {
      nome: 'X - Monstro',
      img: 'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_960_720.jpg',
      ingredientes: 'Hambúrguer artesanal de 130 gramas, 2 ovos separados por finas fatias de linguiça calabresa defumada, envolvido por queijo muçarela derretido na chapa, alface e tomate.',
      preco: '22.80'
    }, {
      nome: 'X - Monstro',
      img: 'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_960_720.jpg',
      ingredientes: 'Hambúrguer artesanal de 130 gramas, 2 ovos separados por finas fatias de linguiça calabresa defumada, envolvido por queijo muçarela derretido na chapa, alface e tomate.',
      preco: '22.99'
    },
  ]
}
