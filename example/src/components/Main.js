import Ractive from 'ractive';
import Inbox from './Inbox';
import Compose from './Compose';
import Contacts from './Contacts';
import NotFound from './NotFound';

export default Ractive.extend({
  components: {
    Inbox,
    Compose,
    Contacts,
    NotFound
  },
  template: `
    <Inbox routeNode="inbox"></Inbox>
    <Compose routeNode="compose"></Compose>
    <Contacts routeNode="contacts"></Contacts>
    <NotFound routeNode="notfound"></NotFound>
  `,
});
