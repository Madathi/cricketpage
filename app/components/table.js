import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TableComponent extends Component {
    @tracked run=0;
    @tracked out=0;
    @tracked fourcount=0;
    @tracked sixcount=0;
    @tracked player="";
    @action
          add(val){
            if(val=="4")
            {
              alert("HURRAY IT'S A FOUR!!");
              this.fourcount+=1;
            }
            else if(val=="out")
            {
              alert("OUT");
              this.out+=1;
              val=0;
            }
            else if(val=="6")
            {
                  alert("HURRAY IT'S A SIX!!");
                  this.sixcount+=1;
            }
              this.run=parseInt(this.run)+parseInt(val);   
               
          }
    

}
