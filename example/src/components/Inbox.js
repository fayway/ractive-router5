import Ractive from 'ractive';
import { getEmails } from '../api';
import InboxList from './InboxList';
import Message from './Message';

export default Ractive.extend({
  components: {
    InboxList,
    Message
  },
  template: `
    <div class='inbox'>
      <NodeRoute routeNode="inbox"><InboxList emails={{emails}} /></NodeRoute>
      <NodeRoute routeNode="inbox.message"><Message messageId={{ route.params.id }} />
    </div>
  `,
  oninit() {
    console.log('Inbox oninit');
    this.set('emails', getEmails());
  },
  oncomplete() {
    console.log('Inbox oncomplete');
  }
});
