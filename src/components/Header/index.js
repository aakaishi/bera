import './Header.css';
import Menu from '../Menu';

const Header = () => {
  return (
    <header className='header'>
      <section className='top'>
        <p>AUSTRALIA $AU</p>
      </section>
      <section className='middle'>
        <Menu />
      </section>
      <section className='bottom'>
      </section>
    </header>
  );
}

export default Header;