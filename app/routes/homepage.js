import Route from '@ember/routing/route';

export default class HomepageRoute extends Route {
    model() {
        return ['MS DHONI', 'Suresh Raina', 'Ravi Jadeja','Dwayne Bravo',' Sam Curran','Mitchell Santner','Shardul Thakur','Deepak Chahar','Lungi Ngidi','Imran Tahir','Ruturaj Gaikwad'];
      }
}
