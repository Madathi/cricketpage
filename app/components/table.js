import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
  

export default class TableComponent extends Component {
    @tracked run=0;
    @tracked out=0;
    @tracked fourcount=0;
    @tracked sixcount=0;
    @tracked count=0;
    @tracked playersrun=0;
    @tracked max=0;
    @tracked playerindex=0;
    @tracked manofthematch=0;
    @tracked totalballs=120;
    players=['MS DHONI', 'Suresh Raina', 'Ravi Jadeja','Dwayne Bravo',' Sam Curran','Mitchell Santner','Shardul Thakur','Deepak Chahar','Lungi Ngidi','Imran Tahir','Ruturaj Gaikwad'];
    @action
          add(val){
            this.overscount+=1;
            if(val=="4")
            {
              alert("HURRAY IT'S A FOUR!!");
              this.fourcount+=1;
            }
            else if(val=="out")
            {
              alert("OUT");
              if(this.max<this.playersrun)
              {
                   this.max=this.playersrun;
                   this.playersrun=0; 
                   this.manofthematch=this.playerindex;
              }
              this.playerindex++;
              this.out+=1;
              val=0;
            }
            else if(val=="6")
            {
                  alert("HURRAY IT'S A SIX!!");
                  this.sixcount+=1;
            }
            this.run=parseInt(this.run)+parseInt(val); 
            this.playersrun=parseInt(this.playersrun)+parseInt(val);
            this.totalballs--;
            if((this.overscount>=20 && this.run<=154 ) || (this.overscount<=20 && this.run>=154))
            {
                      alert("GAME OVER, CSK WON THE GAME");
                      alert("Man of the match goes to "+players[this.manofthematch]);
            }
            if(this.out==11)
            {
              alert("GAME OVER,CSK LOST THE GAME");
              alert("Man of the match goes to "+players[this.manofthematch]);
            }
          }   
          @service('cricket') cricketscore;
          get runs()
          {
            return (this.cricketscore.totalrun())-this.run;
          } 
  

          

}
