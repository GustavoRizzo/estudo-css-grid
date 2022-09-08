import reactLogo from '../assets/react.svg'

export default function Home() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Home</h2>
        <div className="App">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
        </div>
      </main>
    );
  }