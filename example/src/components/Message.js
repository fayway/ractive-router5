import Ractive from 'ractive';
import {getEmail} from '../api';

export default Ractive.extend({
  oninit() {
    console.log('Message oninit');

    this.observe('messageId', (messageId) => {
      if (messageId) {
        const { mailTitle, mailMessage } = getEmail(messageId);
        this.set({
          mailTitle,
          mailMessage
        })
      }
    })
  },
  template: `
    <section class='mail'>
      <h4>{{mailTitle}}</h4>
      <p>{{mailMessage}}</p>
    </section>
  `,
  oncomplete() {
    console.log('Message oncomplete');
  }
});
