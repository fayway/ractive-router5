import Ractive from 'ractive';
import router from '../router';

export default Ractive.extend({
  template: `
    <li on-click="@this.clickHandler(mail.id)">
      <h4>{{mail.mailTitle}}</h4>
      <p>{{{mail.mailMessage}}}</p>
    </li>
  `,
  clickHandler(id) {
    // const router = this.findParent('RouterProvider').get('router');
    router.navigate('inbox.message', {id});
  },
  oninit() {
    console.log('InboxItem oninit');
  },
  oncomplete() {
    console.log('InboxItem oncomplete');
  }
});
