
import './App.css';
import Counter from './components/counter';
import { RecoilRoot} from 'recoil';
import ResponsiveAppBar from './components/appbar';
function App() {
  return (
    <div>
      <h1>Simple React Counter App</h1>
      <RecoilRoot>
        <ResponsiveAppBar></ResponsiveAppBar>
      <Counter />
      </RecoilRoot>
    </div>
  );
}

export default App;
