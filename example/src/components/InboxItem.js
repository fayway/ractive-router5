import Ractive from 'ractive';

export default Ractive.extend({
  template: `
    <li on-click="@this.clickHandler(mail.id)">
      <h4>{{mail.mailTitle}}</h4>
      <p>{{mail.mailMessage}}</p>
    </li>
  `,
  clickHandler(id) {
    this.get('router').navigate('inbox.message', {id});
  }
});
