const App = () => {
    const [btnText, setBtnText] = React.useState('Click me');
    const [classesList, setClassesList] = React.useState('');

    const onBtnClick = () => {
        setBtnText('Hello from React');
        setClassesList('green-btn');
    };

    return (<div className="app">
        <button onClick={onBtnClick} className={classesList}>{btnText}</button>
    </div>);
};

const container = document.querySelector('#app');
const root = ReactDOM.createRoot(container);
root.render(<App/>);