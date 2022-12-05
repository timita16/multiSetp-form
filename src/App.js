import './App.css';
import Aside from './components/aside/Aside';
import Form from './components/form/Form';

function App() {
  return (
    <main>
      <Aside />
      <div className="divForm">
        <Form />
      </div>
    </main>
  );
}

export default App;
