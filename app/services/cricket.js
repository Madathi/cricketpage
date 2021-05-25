import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CricketService extends Service {
    @tracked run=154;
    @tracked ball=120;
    @action
     totalrun()
     {
         return (this.run);
     }
     totalballs()
     {
         return (this.ball);
     }
}
