import Ractive from 'ractive';
import Inbox from './Inbox';
import Compose from './Compose';
import NotFound from './NotFound';

export default Ractive.extend({
  components: {
    Inbox,
    Compose,
    NotFound
  },
  template: `
    <div class='mail-client'>
      <aside>
        <nav>
          <BaseLink routeName="inbox">Inbox</BaseLink>
          <BaseLink routeName="compose">Compose</BaseLink>
          <a href="/#contacts">Contacts</a>
        </nav>
      </aside>
      <main>
        <NodeRoute routeNode="inbox"><Inbox /></NodeRoute>
        <NodeRoute routeNode="compose"><Compose /></NodeRoute>
        <NodeRoute routeNode="notfound"><NotFound /></NodeRoute>
      </main>
    </div>
  `,
});
