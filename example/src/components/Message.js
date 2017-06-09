import Ractive from 'ractive';
import {getEmail} from '../api';

export default Ractive.extend({
  oninit() {
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
    <NodeRoute>
      <section class='mail'>
        <h4>{{mailTitle}}</h4>
        <p>{{mailMessage}}</p>
      </section>
    </NodeRoute>
  `
});
