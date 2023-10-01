import '../job/job.css'
import '../job/card.css'
import '../job/modal.css'
// import Vacancies from '../../api/vacancy.json';

import React from 'react';
// import ReactDOM from 'react-dom';
import InfiniteCarousel from 'react-leaf-carousel';



const Job = () => {
  let cards = Math.round(document.body.clientWidth/350)
  console.log(cards)


  
  return (
    <div className="job">
      <h1 id="job" className="job-title">Наши Вакансии</h1>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
            scrollOnDevice={true}
            pauseOnHover={true}
            autoCycle={true}
            cycleInterval={10000}
            animationDuration={400}
            dots={false}
            arrows={true}
            showSides={false}
            swipe={true}
            sidesOpacity={0.8}
            slidesSpacing={10}//отступ
            sideSize={0.1}
            slidesToScroll={1}
            slidesToShow={cards}
            
        >
          {/* card */}
          <div className="card">
            <p className="Title">
              Медицинская сестра кабинета гинеколога, медсестра функциональной диагностики
            </p>
            <p className="salary">
              30 000-35 000 руб.
            </p>
            <p className="Region">
              Красноярский край
            </p>
            <p className="workplace">
              Красноярский край, г. Красноярск, пр-кт Свободный, 82, стр. 13
            </p>
            <p className="EmploymentType">
              Полная занятость
            </p>
            <p className="WorkSchedule">
              Сменный график
            </p>
            <p className="Responsibilities">
              - Ведение медицинской документации
              - Уход за больными
              - Выполнение медицинских манипуляций
            </p>
            <p className="Requirements">
              - Средне-специальное образование 'Сестринское дело'
              - Умение работать с ПК
              - Знание нормативной базы
              - Опыт работы от 1 года
              - Медицинская книжка
            </p>
            <p className="AdditionalBenefits">
              - Трудоустройство в соответствии с Трудовым Кодексом РФ
              - Своевременная выплата заработной платы 2 раза в месяц
            </p>
            <p className="ContactPersons">
              Горобец Наталья Михайловна, 89504305801
            </p>
            <form className="form">
              <button className="button__response open-btn">
                Откликнуться
              </button>
              <button className="button__details" name="button__details1">
                подробнее
              </button>
            </form>
          </div>
          <div className="card">
            <p className="Title">
              Младшая медицинская сестра по уходу за больными
            </p>
            <p className="salary">
              от 35 000 до 45 000 руб.
            </p>
            <p className="Region">
              Красноярский край
            </p>
            <p className="workplace">
              Современное многопрофильное федеральное медицинское учреждение здравоохранения
            </p>
            <p className="EmploymentType">
              Полная занятость
            </p>
            <p className="Responsibilities">
              - Размещение и перемещение пациента в постели
              - Санитарная обработка и уход за тяжелобольными пациентами
              - Оказание пособия при физиологических отправлениях
              - Кормление пациентов
              - Смена нательного и постельного белья
              - Транспортировка и сопровождение пациентов
              - Помощь медицинской сестре в проведении простых диагностических исследований
              - Наблюдение за состоянием пациентов
              - Доставка биологического материала в лабораторию
              - Оказание первой помощи при угрожающих жизни состояниях и другие обязанности
            </p>
            <p className="Requirements">
              - Среднее общее образование и профессиональное обучение по должности 'Младшая медицинская сестра по уходу за больными'
              - Опыт работы приветствуется
              - Навыки вежливого общения
              - Ответственность, человечность, внимательность, коммуникабельность
            </p>
            <p className="ContactPersons">
              Светлана Николаевна, +7 (391) 2743141, +7-904-891-22-44, nozdrina_sn@skc-fmba.ru
              Марина Владимировна, 8-983-282-17-57
            </p>
            <form className="form">
              <button className="button__response" name="button__response2">
                Откликнуться
              </button>
              <button className="button__details" name="button__details2">
                подробнее
              </button>
            </form>
          </div>          
          <div className="card">
            <p className="Title">
              Палатная медицинская сестра
            </p>
            <p className="salary">
              От 40 000 рублей
            </p>
            <p className="Region">
              Красноярск
            </p>
            <p className="workplace">
              ул. Карла Маркса, 34 б, отделение медицинской реабилитации №3 (стационар круглосуточного пребывания)
            </p>
            <p className="Requirements">
              - Среднее профессиональное образование по специальности 'Сестринское дело'
              - Опыт работы в данном направлении приветствуется
            </p>
            <p className="Responsibilities">
              - Проведение оценки функциональной активности и самостоятельности пациента
              - Контроль приема пациентами лекарственных препаратов
              - Подготовка инструментов и расходных материалов для проведения лечебных и диагностических вмешательств
              - Проведение забора биологического материала пациента
              - Оказание медицинской помощи в неотложной форме
              - Выявление факторов риска и профилактика пролежней
              - Обучение пациентов и лиц, осуществляющих уход
              - Проведение подготовки пациента к медицинским процедурам
              - Проведение мероприятий по профилактике инфекций
            </p>
            <p className="ContactPersons">
              Анастасия Сергеевна Олейникова, Телефон: 8-913-833-3776
            </p>
            <form className="form">
              <button className="button__response" name="button__response4">
                Откликнуться
              </button>
              <button className="button__details" name="button__details4">
                подробнее
              </button>
            </form>
          </div>
          <div className="card">
            <p className="Title">
              Врач-невролог/врач ФРМ
            </p>
            <p className="salary">
              От 65 000 рублей
            </p>
            <p className="Region">
              Красноярск
            </p>
            <p className="workplace">
              ул. Карла Маркса, 34 б, отделение медицинской реабилитации №3 (стационар круглосуточного пребывания)
            </p>
            <p className="Requirements">
              - Высшее образование по специальности 'Лечебное дело' или 'Педиатрия'
              - Подготовка в ординатуре/интернатуре по специальности 'Неврология' или 'Физическая и реабилитационная медицина'
              - Опыт работы в данном направлении приветствуется
            </p>
            <p className="Responsibilities">
              - Проведение неврологического осмотра
              - Оценка функциональных нарушений пациента
              - Назначение лекарственной терапии
              - Ведение медицинской документации
              - Оказание медицинской помощи в экстренной форме
              - Организация деятельности медицинского персонала
            </p>
            <p className="ContactPersons">
              Анастасия Сергеевна Олейникова, Телефон: 8-913-833-3776
            </p>
            <form className="form">
              <button className="button__response" name="button__response5">
                Откликнуться
              </button>
              <button className="button__details" name="button__details5">
                подробнее
              </button>
            </form>
          </div>
          <div className="card">
            <p className="Title">
              Организационный психолог для работы с персоналом учреждения
            </p>
            <p className="salary">
              От 30 000 до 70 000 рублей на руки
            </p>
            <p className="Region">
              Красноярский край
            </p>
            <p className="Requirements">
              - Высшее психологическое образование
              - Уверенный пользователь ПК
              - Опыт работы приветствуется
            </p>
            <p className="Responsibilities">
              - Психологическое обеспечение деятельности медицинского и административного персонала
              - Проведение психодиагностических исследований
              - Психологическая адаптация персонала
              - Проведение групповых психологических тренингов и семинаров
              - Консультирование специалистов
              - Амбулаторное консультирование для специалистов с высшим медицинским образованием
            </p>
            <p className="ContactPersons">
              E-mail: sevostyanovams@yandex.ru, Телефон: 257-93-24
            </p>
            <form className="form">
              <button className="button__response" name="button__response6">
                Откликнуться
              </button>
              <button className="button__details" name="button__details6">
                подробнее
              </button>
            </form>
          </div>
          <div className="card">
            <p className="Title">
              Медицинская сестра палатная
            </p>
            <p className="salary">
              40 000-60 000 рублей
            </p>
            <p className="Region">
              Красноярск
            </p>
            <p className="workplace">
              ул. Карла Маркса, 34 б, отделение медицинской реабилитации №2 (стационар круглосуточного пребывания)
            </p>
            <p className="Requirements">
              - Среднее профессиональное образование по специальности 'Сестринское дело', 'Лечебное дело', 'Акушерское дело'
              - Стаж и опыт работы в данном направлении
            </p>
            <p className="Responsibilities">
              - Уход и наблюдение за больными
              - Исполнение назначений лечащего врача
              - Ведение медицинской документации
              - Соблюдение санитарно-гигиенического режима
              - Контроль выполнения приема лекарств и лечебного питания
              - Подготовка пациентов к медицинским осмотрам и исследованиям
              - Забор биологического материала для исследований
              - Медицинские манипуляции
            </p>
            <p className="ContactPersons">
              Елена Ивановна Ланчинская, Телефон: 89082129370, Почта: beyra@list.ru
            </p>
            <form className="form">
              <button className="button__response" name="button__response7">
                Откликнуться
              </button>
              <button className="button__details" name="button__details7">
                подробнее
              </button>
            </form>
          </div>
          <div className="card">
            <p className="Title">
              Инструктор-методист по ЛФК
            </p>
            <p className="salary">
              50 000-70 000 рублей
            </p>
            <p className="Region">
              Красноярск
            </p>
            <p className="workplace">
              ул. Карла Маркса, 34 б, отделение медицинской реабилитации
            </p>
            <p className="Requirements">
              - Высшее профессиональное образование 'Физическая культура и спорт' или 'Физическая культура для лиц с отклонениями в состоянии здоровья (Адаптивная физическая культура)'
              - Дополнительная подготовка по 'Лечебной физкультуре и спортивной медицине'
            </p>
            <p className="Responsibilities">
              - Проведение лечебной физкультуры
              - Анализ состояния пациентов
              - Обработка реабилитационного оборудования
              - Подготовка к работе и обслуживание оборудования
            </p>
            <p className="ContactPersons">
              Ланчинская Елена Ивановна, Телефон: +79082129370, Почта: beyra@list.ru
            </p>
            <form className="form">
              <button className="button__response" name="button__response8">
                Откликнуться
              </button>
              <button className="button__details" name="button__details8">
                подробнее
              </button>
            </form>
          </div>
          <div className="card">
            <p className="Title">
              Врач-терапевт
            </p>
            <p className="salary">
              От 50 000 рублей
            </p>
            <p className="Region">
              Красноярск
            </p>
            <p className="workplace">
              ул. Карла Маркса, 34 б, отделение медицинской реабилитации
            </p>
            <p className="Requirements">
              - Высшее медицинское образование
              - Действующий сертификат специалиста по специальности 'Терапия'
            </p>
            <p className="EmploymentType">
              Полная занятость, полный день
            </p>
            <p className="Responsibilities">
              - Диагностика и лечение пациентов
              - Контроль состояния пациентов
              - Медицинская документация
              - Профилактика хронических заболеваний
              - Противоэпидемические мероприятия
            </p>
            <p className="ContactPersons">
              Ланчинская Елена Ивановна, Телефон: +79082129370, Почта: beyra@list.ru
            </p>
            <form className="form">
              <button className="button__response" name="button__response9">
                Откликнуться
              </button>
              <button className="button__details" name="button__details9">
                подробнее
              </button>
            </form>
          </div>
          <div className="card">
            <p className="Title">
              Врач-терапевт
            </p>
            <p className="salary">
              60 000-70 000 рублей на руки
            </p>
            <p className="Region">
              Красноярск
            </p>
            <p className="workplace">
              ул. Вавилова, 23б
            </p>
            <p className="Requirements">
              - Высшее профессиональное образование по специальности 'Лечебное дело'; 'Педиатрия' и послевузовское профессиональное образование (интернатура и (или) ординатура) по специальности 'Терапия' или профессиональная переподготовка при наличии послевузовского профессионального образования по специальности 'Общая врачебная практика (семейная медицина)', сертификат специалиста по специальности 'Терапия' или аккредитация по специальности 'Терапия'
            </p>
            <p className="EmploymentType">
              Полная занятость, полный день
            </p>
            <p className="Responsibilities">
              - Диагностика и лечение заболеваний
              - Организация госпитализации
              - Медицинская документация
              - Профилактика и реабилитация
              - Экспертиза нетрудоспособности
            </p>
            <p className="ContactPersons">
              Осипова Татьяна Михайловна, Телефон: +7 (391) 2743132, Красноярск, Телефон: +7 (960)767-71-71, Почта: osipova_tm@skc-fmba.ru
            </p>
            <form className="form">
              <button className="button__response" name="button__response10">
                Откликнуться
              </button>
              <button className="button__details" name="button__details10">
                подробнее
              </button>
            </form>
          </div>
           {/* card */}
        </InfiniteCarousel>
        </div>
)}

const modal = document.querySelectorAll(".button__response")
function closeByOverlay (evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target)
  }
};
//закртие попапа кликом на esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
  }
}
const openPopup = (selector) => {
  selector.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEscape);
  document.addEventListener('mousedown', closeByOverlay);
}
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape)
  document.removeEventListener('mousedown', closeByOverlay);
}

modal.forEach(popup => {
  popup.addEventListener('click', (evt) => closePopup(evt.target.closest('.popup')))
});



export default Job;