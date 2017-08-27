import Ractive from 'ractive';
import Nav from './Nav';
import Inbox from './Inbox';
import Compose from './Compose';
import NotFound from './NotFound';

export default Ractive.extend({
  components: {
    Inbox,
    Compose,
    NotFound,
    Nav
  },
  template: `
    <div class='mail-client'>
      <Nav></Nav>
      <main>
        <NodeRoute name="inbox"><Inbox /></NodeRoute>
        <NodeRoute name="compose"><Compose /></NodeRoute>
        <NodeRoute name="notfound"><NotFound /></NodeRoute>
      </main>
    </div>
  `,
});
