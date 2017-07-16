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
        <NodeRoute routeNode="inbox"><Inbox /></NodeRoute>
        <NodeRoute routeNode="compose"><Compose /></NodeRoute>
        <NodeRoute routeNode="notfound"><NotFound /></NodeRoute>
      </main>
    </div>
  `,
});
