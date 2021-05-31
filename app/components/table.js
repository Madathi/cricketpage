import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class TableComponent extends Component {
    @tracked run=0;
    @tracked out=0;
    @tracked fourcount=0;
    @tracked sixcount=0;
    @tracked playersrun=0;
    @tracked maxrun=0;
    @tracked playerindex=0;
    @tracked manofthematch=0;
    @tracked totalballs=120;
    @action
          add(val){
            document.getElementById("ball"+overid).innerHTML=val;
            if(val=="4")
            {
              alert("HURRAY IT'S A FOUR!!");
              this.fourcount+=1;
            }
            else if(val=="out")
            {
              alert("OUT");
            document.getElementById("out"+outid).innerHTML="out";
            document.getElementById("out"+outid).style.color="red";
            outid++;
            playerid++;
              if(this.maxrun<this.playersrun)
              {
                   this.maxrun=this.playersrun;
                   this.playersrun=0;
                   this.manofthematch=this.playerindex;
              }
              this.playerindex++;
              this.out+=1;
              val=0;
              if(this.out==11)
            {
              alert("GAME OVER,CSK LOST THE GAME");
              alert("Man of the match goes to "+players[this.manofthematch]);
              window.location.href="failure";
            }
            }
            else if(val=="6")
            {
                  alert("HURRAY IT'S A SIX!!");
                  this.sixcount+=1;
            }
            this.run=parseInt(this.run)+parseInt(val); 
            this.playersrun=parseInt(this.playersrun)+parseInt(val);
            document.getElementById("run"+over).innerHTML=this.run;
            document.getElementById("player"+playerid).innerHTML=this.playersrun;
            this.totalballs--;
            if(this.run<154 && this.totalballs==0)
            {
              alert("GAME OVER,CSK LOST THE GAME");
              alert("Man of the match goes to "+players[this.manofthematch]);
              window.location.href="failure";
            }
            if(this.run>=154)
            {
              alert("GAME OVER,CSK WON THE GAME");
              alert("Man of the match goes to "+players[this.manofthematch]);
              window.location.href="success";
            }
           if(overid%6==0)
         {
            i=overid+1;
            over++;
            markup = '<tr><td><p id="ball'+(i++)+'"></p></td>'+
                     '<td><p id="ball'+(i++)+'"></p></td>'+
                     '<td><p id="ball'+(i++)+'"></p></td>'+
                     '<td><p id="ball'+(i++)+'"></p></td>'+
                     '<td><p id="ball'+(i++)+'"></p></td>'+
                     '<td><p id="ball'+(i++)+'"></p></td>'+
                     '<td>'+over+'</td>'+
                     '<td><p id="run'+over+'"></p></td></tr>';
                tableBody = $("div table tbody");
                tableBody.append(markup);
         }  
            overid=overid+1;

          }   
          @service('cricket') cricketscore;
          get runs()
          {
            return (this.cricketscore.totalrun())-this.run;
          }
}
