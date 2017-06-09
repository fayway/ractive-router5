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
    <NodeRoute>
      <div class='inbox'>
          <InboxList routeNode="inbox" emails={{emails}} />
          <Message routeNode="inbox.message" messageId={{ route.params.id }} />
      </div>
    </NodeRoute>
  `,
  oninit() {
    this.set('emails', getEmails());
  }
});
