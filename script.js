const App = (
    <div className="app">
        <button onСlick="">
            Click me
        </button>
    </div>
);

const container = document.querySelector('.app');
const root = ReactDOM.createRoot(container);
root.render(App);