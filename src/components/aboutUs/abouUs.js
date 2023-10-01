import '../aboutUs/aboutUs.css';
import './__vision/aboutUs__vision.css';
import './__mission/aboutUs__mission.css';
import './__value/aboutUs__value.css';

function AboutUs() {
    return (
    <div className="aboutUs">
        <div className="aboutUs__vision">Наше видение
            <p>Федеральное многопрофильное медицинское учреждение, 
                предоставляющее возможность пациентам реализовать своё право на здоровье, 
                соблюдая лучшие профессиональные традиции, достижения науки и практики, 
                используя технологические ресурсы и знания, развиваясь и достигая 
                медицинской, социальной и экономической эффективности
            </p>
        </div>
        <div className="aboutUs__mission">Миссия
            <p>ОКАЗЫВАТЬ ПОМОЩЬ НАИЛУЧШЕГО КАЧЕСТВА ЛЮДЯМ ВО БЛАГО ЗДОРОВЬЯ.</p>
        </div>
        <ul className="aboutUs__value">ЦЕННОСТИ:
            <li>Честность и доверие</li>
            <li>Милосердие и гуманизм</li>
            <li>Качество и безопасность</li>
            <li>Профессионализм и ответственность</li>
            <li>Командная работа и коллегиальность</li>
        </ul>

    </div>
    )};

export default AboutUs;