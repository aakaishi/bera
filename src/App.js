import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  const userType = [
    {
      nome: 'Guest',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Reviewer',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Contributor',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Manager',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Moderator',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Approver',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    }
  ]

  return (
    <div className="App">
      <Header />
      <Main userType={userType.map(type => type.nome)} />
      <Footer />
    </div>
  );
}

export default App;
