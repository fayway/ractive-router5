import Ractive from 'ractive';

export default Ractive.extend({
  template: `
    <li on-click="@this.clickHandler(mail.id)">
      <h4>{{mail.mailTitle}}</h4>
      <p>{{{mail.mailMessage}}}</p>
    </li>
  `,
  oninit() {
    console.log('InboxItem oninit');
    this.router = this.findParent('RouterProvider').get('router');
  },
  clickHandler(id) {
    this.router.navigate('inbox.message', {id});
  },
  oncomplete() {
    console.log('InboxItem oncomplete');
  }
});
