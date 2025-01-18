import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Card from './Card';
import Student from './Student'; //importing student component

function App() {
  return (
  <body>

    <div>
    <h1>Hello World</h1>
    <p> I am learning to develop a web app using React.</p>
    <Button/>
    </div>

    <div className="container">
      <Card title="Hello React" description="I will master React in 3 months." />
    </div>

    <div>
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name="Partick" age={42} isStudent={false}/>
        <Student />
    </div>

  </body>
  );
}

export default App;
