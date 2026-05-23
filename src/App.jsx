import React, { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  Layers3,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const navItems = [
  { id: "overview", label: "Общая информация", icon: BookOpen },
  { id: "practice", label: "5 тренингов", icon: Sparkles },
  { id: "support", label: "Сопровождение", icon: ShieldCheck },
];

const methodBase = [
  {
    title: "Пять ритмов Габриэллы Рот",
    text: "Flowing, Staccato, Chaos, Lyrical и Stillness используются как последовательность для проживания состояния через движение: от контакта с телом и импульса к эмоциональной разрядке, игре и внутренней тишине.",
  },
  {
    title: "Аутентичное движение Мэри Уайтхаус",
    text: "Практика строится на движении из внутреннего импульса и наблюдении без оценки. Она помогает участнику доверять телесному выбору, развивать самоценность и осознавать собственные границы.",
  },
  {
    title: "Современная хореография",
    text: "Методы ТДТ внедряются через контракшн и релиз Марты Грэм, импровизацию Gaga Охада Нахарина, импульсы и пространственные задачи Уильяма Форсайта, контактную импровизацию и геометрию тела Стива Пэкстона.",
  },
];

const criteria = [
  "самооценка и самоценность",
  "эмоциональная регуляция",
  "телесное принятие",
  "коммуникативные навыки",
  "творческая индивидуальность",
  "навыки самовыражения",
  "импровизационные способности",
  "эмоциональная выразительность",
];

const trainings = [
  {
    title: "Тренинг 1. Карта пяти ритмов",
    number: "01",
    goalLabel: "Регуляция и выразительность",
    time: "60 мин",
    age: "14-17",
    methods: "Пять ритмов Г. Рот, Gaga О. Нахарина, релиз",
    phases: ["Flowing", "Staccato", "Chaos", "Lyrical", "Stillness"],
    steps:
      "Группа проходит пять качеств движения: текучесть, стаккато, хаос, лирика и тишина. В каждом ритме участники ищут собственную амплитуду, темп, направление и дыхание, затем выбирают ритм, который точнее всего отражает текущее состояние.",
    effect:
      "Влияет на эмоциональную регуляцию, эмоциональную выразительность, навыки самовыражения и импровизационные способности.",
  },
  {
    title: "Тренинг 2. Импульс изнутри",
    number: "02",
    goalLabel: "Самоценность и самовыражение",
    time: "55 мин",
    age: "14-17",
    methods: "Аутентичное движение М. Уайтхаус, техника импульсов У. Форсайта",
    phases: ["Внутренний импульс", "Движущийся", "Свидетель", "Факты движения"],
    steps:
      "Участник с закрытыми или мягко сфокусированными глазами следует за внутренним импульсом: поворотом, сжатием, шагом, жестом. Наблюдатель фиксирует только факты движения: уровень, скорость, паузы, направления, без интерпретации личности.",
    effect:
      "Укрепляет самооценку, телесное принятие, творческую индивидуальность и доверие к собственному пластическому выбору.",
  },
  {
    title: "Тренинг 3. Контракшн-релиз эмоции",
    number: "03",
    goalLabel: "Эмоциональная регуляция",
    time: "50 мин",
    age: "14-17",
    methods: "Марта Грэм: contraction/release, ритмы Staccato и Stillness",
    phases: ["Сжатие", "Выдох", "Релиз", "Пауза", "Фраза"],
    steps:
      'Через сжатие корпуса участники исследуют напряжение, сопротивление и удерживание. Через релиз переводят это состояние в расширение, выдох, шаг и паузу. В конце создают короткую фразу "напряжение - освобождение".',
    effect:
      "Помогает телесно распознавать эмоциональный тонус, снижать напряжение и делать эмоцию выразительной, а не разрушительной.",
  },
  {
    title: "Тренинг 4. Диалог веса и границ",
    number: "04",
    goalLabel: "Коммуникация и телесное принятие",
    time: "65 мин",
    age: "14-17",
    methods:
      "Стив Пэкстон: контактная импровизация, геометрия тела, аутентичное наблюдение",
    phases: ["Дистанция", "Согласие", "Вес", "Поддержка", "Отказ"],
    steps:
      "Участники начинают с дистанционного диалога направлений, затем переходят к безопасной передаче веса через ладонь, плечо или спину. Контакт вводится только после согласия, а каждый эпизод завершается проговариванием границ.",
    effect:
      "Развивает коммуникативные навыки, принятие тела, доверие, способность слышать партнера и корректно обозначать отказ.",
  },
  {
    title: "Тренинг 5. Пространственная партитура",
    number: "05",
    goalLabel: "Импровизация и индивидуальность",
    time: "70 мин",
    age: "14-17",
    methods: "У. Форсайт: линии, точки, углы, импульсы; Gaga; ритм Lyrical",
    phases: ["Точка", "Линия", "Угол", "Импульс", "Композиция"],
    steps:
      "Каждый строит личную траекторию из трех точек, двух уровней и одного резкого импульса. Затем фраза трансформируется: меняется масштаб, направление, скорость, качество и отношение к группе.",
    effect:
      "Работает на импровизационные способности, творческую индивидуальность, навыки самовыражения и сценическую смелость.",
  },
];

const supportSections = [
  {
    title: "Рефлексия",
    text: "После каждого тренинга участники фиксируют телесные ощущения, эмоции, личные открытия и комфортность заданий. Обсуждение ведется через вопросы о движении и состоянии, без оценки правильности исполнения.",
  },
  {
    title: "Этика",
    text: "Ведущий поддерживает уважительный тон, добровольность участия и право не выполнять упражнение. Интерпретации личности, внешности и опыта участника заменяются описанием наблюдаемых действий.",
  },
  {
    title: "Безопасность",
    text: "Перед контактными и интенсивными заданиями задаются правила дистанции, согласия, выхода из упражнения и бережного обращения с телом. Нагрузка адаптируется под возраст, состояние и физические ограничения.",
  },
  {
    title: "Конфиденциальность",
    text: "Личные высказывания, переживания и реакции участников не выносятся за пределы группы. Фото, видео и записи используются только при отдельном согласии участников и законных представителей.",
  },
  {
    title: "Рекомендации",
    text: "Оптимально проводить занятия в просторном зале, начинать с мягкой разминки и завершать спокойной интеграцией. Ведущему важно отслеживать динамику группы и оставлять время на паузы.",
  },
];

function App() {
  const [activeNav, setActiveNav] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app">
      <a className="skip-link" href="#practice">
        Перейти к тренингам
      </a>
      <aside
        className={`sidebar ${menuOpen ? "open" : ""}`}
        aria-label="Разделы пособия"
      >
        <div className="brand">
          <div className="brand-mark">5Р</div>
          <div>
            <p>Методическое пособие</p>
            <strong>Пять тренингов движения</strong>
          </div>
        </div>
        <nav className="nav-list">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              type="button"
              key={id}
              className={activeNav === id ? "active" : ""}
              onClick={() => navigate(id)}
            >
              <Icon aria-hidden="true" size={18} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <header className="mobile-bar">
        <button
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <span>Пять тренингов движения</span>
      </header>

      <main className="content">
        <section className="hero" id="overview">
          <div className="hero-copy">
            <p className="overline">Общая информация</p>
            <h1>
              Пять ритмов и аутентичное движение в современной хореографии
            </h1>
            <p>
              Программа состоит из пяти тренингов, основанных на
              танцевально-двигательной терапии и техниках современной
              хореографии. Она направлена на развитие самоценности,
              эмоциональной регуляции, телесного принятия, коммуникации,
              творческой индивидуальности, самовыражения, импровизации и
              эмоциональной выразительности.
            </p>
            <div
              className="hero-stats"
              aria-label="Ключевые параметры методики"
            >
              <span>
                <strong>5</strong> тренингов
              </span>
              <span>
                <strong>14-17</strong> лет
              </span>
              <span>
                <strong>8</strong> критериев
              </span>
            </div>
            <div className="hero-actions">
              <button
                type="button"
                className="primary-action"
                onClick={() => navigate("practice")}
              >
                Открыть 5 тренингов
              </button>
            </div>
          </div>
          <div
            className="hero-media"
            aria-label="Визуальный образ современного движения"
          >
            <img
              src="/assets/movement-method-banner.png"
              alt="Светлая студия современной хореографии с пластическим движением"
            />
          </div>
        </section>

        <section
          className="section info-section reveal"
          aria-labelledby="method-base-title"
        >
          <p className="section-kicker">Методическая база</p>
          <h2 id="method-base-title">На чем основана программа</h2>
          <div className="indicator-grid">
            {methodBase.map((item, index) => (
              <article
                className="indicator-card method-card"
                key={item.title}
                style={{ "--delay": `${index * 70}ms` }}
              >
                <Layers3 size={20} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="criteria-compact" aria-label="Критерии развития">
            <h3>Критерии, на которые влияет программа</h3>
            <ul>
              {criteria.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="panel large reveal" id="practice">
          <div className="panel-header">
            <div>
              <p className="section-kicker">Практикум</p>
              <h2>Пять тренингов программы</h2>
            </div>
            <span className="count">5 тренингов</span>
          </div>
          <div className="exercise-grid training-grid">
            {trainings.map((training, index) => (
              <article
                className="exercise-card training-card"
                key={training.title}
                style={{ "--delay": `${index * 80}ms` }}
              >
                <div className="training-number" aria-hidden="true">
                  {training.number}
                </div>
                <div className="card-topline">
                  <span>{training.goalLabel}</span>
                  <small>
                    <Clock3 size={14} /> {training.time}
                  </small>
                </div>
                <h3>{training.title}</h3>
                <dl>
                  <div>
                    <dt>Возраст</dt>
                    <dd>{training.age}</dd>
                  </div>
                  <div>
                    <dt>Методы</dt>
                    <dd>{training.methods}</dd>
                  </div>
                </dl>
                <div className="phase-list" aria-label="Этапы тренинга">
                  {training.phases.map((phase) => (
                    <span key={phase}>{phase}</span>
                  ))}
                </div>
                <p>{training.steps}</p>
                <footer>{training.effect}</footer>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section support-section reveal"
          id="support"
          aria-labelledby="support-title"
        >
          <div className="panel-header">
            <div>
              <p className="section-kicker">Сопровождение практики</p>
              <h2 id="support-title">Рефлексия, этика и условия проведения</h2>
            </div>
            <span className="count">5 разделов</span>
          </div>
          <div className="support-grid">
            {supportSections.map((section, index) => (
              <article
                className="support-card"
                key={section.title}
                style={{ "--delay": `${index * 70}ms` }}
              >
                <div className="support-icon" aria-hidden="true">
                  <HeartHandshake size={20} />
                </div>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
