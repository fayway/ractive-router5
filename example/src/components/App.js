import Ractive from 'ractive';
import Nav from './Nav';
import Main from './Main';

export default Ractive.extend({
  components: {
    Nav,
    Main
  },
  template: `
    <div class='mail-client'>
      <aside>
        <Nav />
      </aside>
      <main>
        <Main />
      </main>
    </div>
  `,
});
