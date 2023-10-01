import '../app-header/app-header.css';

function AppHeader() {
    const mq = window.matchMedia('(max-width: 1024px)')
    if (!mq.matches) {
    return (
        <div className = "App-header">
            <a href="#" className="logo"></a>
            <a href="#" className="App-header_part">о команде</a>
            <a href="#" className="App-header_part">о нас</a>
            <a href="#job" className="App-header_part">блок вакансий</a>
            <a href="#" className="App-header_part">что мы предлогаем</a>
            <a href="#feedback" className="App-header_part">обратная связь</a>
        </div>
    )}
    else {return(
        <div className="burger"></div>
    )}
}

export default AppHeader;