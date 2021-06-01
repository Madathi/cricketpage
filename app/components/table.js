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
    @tracked playerindex;
    @tracked manofthematch=0;
    @tracked totalballs=120;
    @tracked comments="";
    @action
          getscore()
          {
             document.getElementById("score").removeAttribute("disabled");
             document.getElementById("player").setAttribute("disabled","disabled");

          }
    @action
          add(){ 
            playerid=document.getElementById("player").selectedIndex;
            document.getElementById("player").options[playerid].disabled = true;
            var score=document.getElementById("score").value;
            document.getElementById("ball"+overid).innerHTML=score;
            this.playerindex=playerid;
            if(score=="4")
            {
              alert("HURRAY IT'S A FOUR!!");
              this.fourcount+=1;
            }
            else if(score=="out")
            {
              alert("OUT!! NEXT BATSMAN COMES IN");
              this.comments="";
            document.getElementById("score").setAttribute("disabled","disabled");
             document.getElementById("player").removeAttribute("disabled");
            document.getElementById("out"+playerid).innerHTML="out";
            document.getElementById("out"+playerid).style.color="red";
              if(this.maxrun<playersrun)
              {
                   this.maxrun=playersrun;
                   this.manofthematch=this.playerindex;
              }
              this.out+=1;
              score=0;
              if(this.out==11)
            {
              document.getElementById("winstatus").style.display = "none";
              this.comments="GAME OVER,CSK LOST THE GAME. Man of the match goes to "+players[this.manofthematch-1];
              document.getElementById("player").setAttribute("disabled","disabled");
              document.getElementById("score").setAttribute("disabled","disabled");
            }
            }
            else if(score=="6")
            {
                  alert("HURRAY IT'S A SIX");
                  this.sixcount+=1;
            }
            this.run=parseInt(this.run)+parseInt(score); 
            playersrun=parseInt(playersrun)+parseInt(score);
            document.getElementById("run"+over).innerHTML=this.run;
            document.getElementById("player"+playerid).innerHTML=playersrun;
            if(score=='0')
            {
              playersrun=0;
            }
            this.totalballs--;
            if(this.run<154 && this.totalballs==0)
            {
              document.getElementById("winstatus").style.display = "none";
              this.comments="GAME OVER,CSK LOST THE GAME .Man of the match goes to "+players[this.manofthematch-1];
              document.getElementById("player").setAttribute("disabled","disabled");
              document.getElementById("score").setAttribute("disabled","disabled");
            }
            if(this.run>=154)
            {
              document.getElementById("winstatus").style.display = "none";
              this.comments="GAME OVER,CSK WON THE GAME.Man of the match goes to "+players[this.manofthematch-1];
              document.getElementById("player").setAttribute("disabled","disabled");
              document.getElementById("score").setAttribute("disabled","disabled");
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
