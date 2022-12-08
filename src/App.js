import './App.css';
import Aside from './components/views/aside/Aside';
import Form from './components/views/form/Form';

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
