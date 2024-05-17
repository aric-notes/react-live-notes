import reactLogo from './assets/react.svg';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
const code = `
<h3 style={{
  background: 'darkslateblue',
  color: 'white',
  padding: 8,
  borderRadius: 4
}}>
  Hello World! 👋
</h3>
`;

function App() {
  return (
    <div className="mx-auto mt-20 w-1/2 flex-col bg-slate-200 p-10 y-2">
      <div className="text-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <LiveProvider code={code}>
        <div className="grid grid-cols-2 gap-4">
          <LiveEditor className="font-mono" />
          <LivePreview />
        </div>
      </LiveProvider>
    </div>
  );
}

export default App;
