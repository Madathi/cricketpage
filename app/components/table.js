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
    @tracked playerindex1;
    @tracked playerindex2;
    @tracked player1;
    @tracked player2;
    @tracked manofthematch=0;
    @tracked totalballs=120;
    @tracked comments="";
    @tracked player1run=0;
    @tracked player2run=0;
    @tracked player="";
    @action
          add(){
            if (null == $('#score').val() || $('#score').val() == '') {
                        alert("enter score");
                        return false;
                        } 
            
            if(this.totalballs==120)
            {
               this.playerindex1=Math.floor(Math.random() * players.length);
               this.player1=players[this.playerindex1];
               console.log(this.player1);
               players.splice(this.playerindex1,1);
               this.playerindex2=Math.floor(Math.random() * players.length);
               this.player2=players[this.playerindex2];
               players.splice(this.playerindex2,1);
               console.log(this.player2);

            }
            var score=document.getElementById("score").value;
            document.getElementById("ball"+overid).innerHTML=score;
            ballno=ballno+1;
            if(currentplayer==0)
            {
              if(score=="out")
              {
                this.playersrun=this.player1run;
                document.getElementById(this.player1+"out").innerHTML="out";
                document.getElementById(this.player1+"out").style.color="red";
                this.player=this.player1;
                console.log(this.playerindex1);
              }
              else
              {
              this.player1run=parseInt(this.player1run)+parseInt(score);
              document.getElementById(this.player1).innerHTML=this.player1run;
              }
            }
            else if(currentplayer==1)
            {
              if(score=="out")
              {
                this.playersrun=this.player2run;
                document.getElementById(this.player2+"out").innerHTML="out";
                document.getElementById(this.player2+"out").style.color="red";
                this.player=this.player2;
              
              }
              else
              {
                this.player2run=parseInt(this.player2run)+parseInt(score);
                document.getElementById(this.player2).innerHTML=this.player2run;
              }
            }
            if(score=="1"||score=="3")
               currentplayer=(currentplayer==1)?0:1;
            if(score=="4")
            {
              alert("HURRAY IT'S A FOUR!!");
              this.fourcount+=1;
            }
            else if(score=="out")
            {
              alert("OUT!! NEXT BATSMAN COMES IN");
              if(this.maxrun<playersrun)
              {
                   this.maxrun=playersrun;
                   this.manofthematch=this.player;
              }
              this.out+=1;
              score=0;
              if(this.out==11)
            {
              document.getElementById("winstatus").style.display = "none";
              this.comments="GAME OVER,CSK LOST THE GAME. Man of the match goes to "+this.player;
            }
            }
            else if(score=="6")
            {
                  alert("HURRAY IT'S A SIX");
                  this.sixcount+=1;
            }
            this.run=parseInt(this.run)+parseInt(score);
            document.getElementById("run"+over).innerHTML=this.run;
            this.totalballs--;
            if(this.run<154 && this.totalballs==0)
            {
              document.getElementById("winstatus").style.display = "none";
              this.comments="GAME OVER,CSK LOST THE GAME .Man of the match goes to "+this.player;
            }
            if(this.run>=154)
            {
              document.getElementById("winstatus").style.display = "none";
              this.comments="GAME OVER,CSK WON THE GAME.Man of the match goes to "+this.player;
            }
           if(overid%6==0)
         {
            i=overid+1;
            ballno=0;
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
         var bowlingscore= $('#score').val();
         var overrun=this.run;
         var ball=ballno;
         var cricketplayer1=this.player1;
         var cricketplayer2=this.player2;
         var cricketplayer1score=this.player1run;
         var cricketplayer2score=this.player2run;
         var currentplayerstatus=currentplayer;
                        $.ajax({
                        type : "POST",
                        url : "/lib/cricket",
                        data : 
                        {
                          bowlingscore : bowlingscore,
                          overrun : overrun,
                          ball:ball,
                          cricketplayer1:cricketplayer1,
                          cricketplayer2:cricketplayer2,
                          cricketplayer1score:cricketplayer1score,
                          cricketplayer2score:cricketplayer2score,
                          currentplayerstatus:currentplayerstatus

                        },
                        dataType : "text",
                        success : function(data) {
                              console.log("success data :"+data);
                            },
                        //If we get any error from the server
                        error : function(jqXHR, textStatus, errorThrown) {
                        console.log("Something really bad happened "
                        + textStatus + ";" + errorThrown);
                        }
                        });
                        if(currentplayer==0 && score==0)
                        {
                          this.playerindex1=Math.floor(Math.random() * players.length);
                          this.player1=players[this.playerindex1];
                          players.splice(this.playerindex1,1);
                          this.player1run=0;
                        }
                        else if(currentplayer==1 && score==0)
                        {
                          this.player2run=0;
                          this.playerindex2=Math.floor(Math.random() * players.length);
                          this.player2=players[this.playerindex1];
                          players.splice(this.playerindex2,1);
                        }
                       socket.onopen = function() {
                  
                          // Web Socket is connected, send data using send()
                          socket.send(score);
                          alert("Message is sent...");
                       };
          }   
          @service('cricket') cricketscore;
          get runs()
          {
            return (this.cricketscore.totalrun())-this.run;
          }
}

