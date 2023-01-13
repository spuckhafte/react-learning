import Head from './Components/head';
import Card from './Components/card';
import './style.css';
import data from './db'

function App() {
  return (
    <div className="App">
      <Head />
      <div className='body'>
        {data.map(item => {
          return <Card key={item.id} {...item} />
        })}
      </div>
    </div>
  );
}

export default App;
