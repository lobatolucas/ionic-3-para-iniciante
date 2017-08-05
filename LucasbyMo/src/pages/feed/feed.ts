import
{
    Component
}
from
'@angular/core';
import
{
    IonicPage, NavController, NavParams
}
from
'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@
IonicPage()
@
Component({
    selector: 'page-feed',
    templateUrl: 'feed.html',
})
export class FeedPage {

    //Crinção de Variaveis
    public nome_usuario:string = 'Lobato Maciel';

    constructor(public navCtrl:NavController, public navParams:NavParams) {
    }

   /// Funçao Recebendo Parametro
    //public somaDoisNumeros(nun1:number , nun2:number ):void{
    //    alert(nun1 + nun2);
    //    alert("se somou  Funcionou!!!!")
    //}

    ionViewDidLoad() {
        ///Chamar a Funçao
       /// this.somaDoisNumeros(10, 99);
    }

}
