import Sidebar from 'pages/Sidebar/Sidebar'
import Feed from 'pages/Feed/Feed'
import Widgets from'pages/Widgets/Widgets'
import 'App.scss';

function App() {
  return (
    <div className="app">
      <Sidebar /> 
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
