import Ractive from 'ractive';
import {getEmail} from '../api';

export default Ractive.extend({
  template: `
    <section class='mail'>
      <h4>{{mailTitle}}</h4>
      <p>{{mailMessage}}</p>
    </section>
  `,
  oninit() {
    console.log('Message oninit');

    this.findContainer('NodeRoute').observe('route', (route) => {
      if (route) {
        const id = route.params.id;
        const { mailTitle, mailMessage } = getEmail(id);
        this.set({
          mailTitle,
          mailMessage
        });
      }
    })


  },
  oncomplete() {
    console.log('Message oncomplete');
  }
});
