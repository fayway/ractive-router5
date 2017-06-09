import Ractive from 'ractive';

export default Ractive.extend({
  template: `
    <nav>
      <BaseLink routeName="inbox" routeOptions="{{ {reload: true} }}">Inbox</BaseLink>
      <BaseLink routeName="compose">Compose</BaseLink>
      <BaseLink routeName="contacts">Contacts</BaseLink>
    </nav>
  `
});
