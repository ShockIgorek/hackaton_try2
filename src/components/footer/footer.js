import '../footer/footer.css'

function Footer() {
    return (
    
    <footer id="feedback" className="footer">
        <div className="foot__container">
        <a href="https://vk.com/krasfmba24" className="vk link">vk</a>
        <a href="https://t.me/krasfmba" className="telegream link">телега</a>
        <a href="https://ok.ru/group/61095992492189"className='odnoklasniki link'>пенсия</a>
        <div>
            <p className="mail__title">почта:</p>
            <p className="mail">skc@skc-fmba.ru</p>
        </div>
        </div>
        <div>
            <p className="down__text">
                2003 - 2023 © Федеральное государственное 
                бюджетное учреждение
                ФГБУ ФСНКЦ ФМБА России
            </p>
            <a className="down__link" href="https://www.skc-fmba.ru/media/uploads/policyofinformationsecurity.pdf" target="_blank">
                Политика информационной безопасности персональных данных
            </a>
        </div>
    </footer>
    )};

export default Footer;