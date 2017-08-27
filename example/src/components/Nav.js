import Ractive from 'ractive';

export default Ractive.extend({
  template: `
    <aside>
      <nav>
        <BaseLink routeName="inbox">Inbox</BaseLink>
        <BaseLink routeName="compose">Compose</BaseLink>
        <a href="/#contacts">Contacts</a>
      </nav>
    </aside>
  `,
});
