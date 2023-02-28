const App = ({ initialBtnText, initialClassesList }) => {
    const [ btnText, setBtnText ] = React.useState(initialBtnText);
    const [ classesList, setClassesList ] = React.useState(initialClassesList);

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
root.render(<App initialBtnText="Click me" initialClassesList=""/>);