import React, { useMemo, useState } from 'react';
import {
  Activity,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Compass,
  HeartHandshake,
  Layers3,
  ListChecks,
  Menu,
  Music2,
  Palette,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react';

const navItems = [
  { id: 'overview', label: 'Обзор', icon: BookOpen },
  { id: 'indicators', label: 'Показатели', icon: Activity },
  { id: 'model', label: 'Модель', icon: Layers3 },
  { id: 'structure', label: 'Структура занятия', icon: Compass },
  { id: 'practice', label: 'Практикум', icon: Sparkles },
  { id: 'constructor', label: 'Конструктор', icon: ClipboardCheck },
  { id: 'diagnostics', label: 'Диагностика', icon: ListChecks },
  { id: 'recommendations', label: 'Рекомендации', icon: HeartHandshake },
  { id: 'materials', label: 'Материалы', icon: Palette },
];

const indicators = [
  {
    title: 'Эмоциональная саморегуляция',
    text: 'Подростки учатся замечать напряжение, выбирать темп движения и возвращаться к устойчивому состоянию через дыхание, ритм и паузу.',
  },
  {
    title: 'Телесная осознанность',
    text: 'Участники точнее распознают опору, амплитуду, мышечный тонус и границы собственного движения.',
  },
  {
    title: 'Творческая выразительность',
    text: 'Развивается способность переводить образ, эмоцию или тему в пластическое решение без оценки «правильно/неправильно».',
  },
  {
    title: 'Групповое взаимодействие',
    text: 'Укрепляются навыки слышать партнера, договариваться о композиции и удерживать общую задачу в движении.',
  },
  {
    title: 'Мотивация',
    text: 'Занятие строится через выбор и авторство, поэтому подросток видит личный смысл участия.',
  },
  {
    title: 'Рефлексия',
    text: 'После практики фиксируются наблюдения о теле, эмоциях, взаимодействии и творческих решениях.',
  },
];

const modelBlocks = [
  {
    id: 'dance',
    label: 'Хореография',
    icon: Music2,
    title: 'Современная хореография как язык исследования',
    text: 'Основой служат принципы веса, потока, импульса, уровня, контакта с полом и работы с пространством. Педагог задает ясную двигательную рамку, но оставляет место для индивидуального способа решения.',
  },
  {
    id: 'art',
    label: 'Арт-методы',
    icon: Palette,
    title: 'Арт-терапевтические методы в педагогическом применении',
    text: 'Образы, линии, цвет, слово и материал используются как образовательные инструменты для осмысления опыта. Модель не заменяет клиническую терапию и не ставит терапевтических диагнозов.',
  },
  {
    id: 'body',
    label: 'Телесность',
    icon: Brain,
    title: 'Телесно-ориентированные практики',
    text: 'Внимание направляется на дыхание, опору, границы, тонус и безопасную амплитуду. Это помогает подросткам регулировать интенсивность движения и бережно относиться к телу.',
  },
  {
    id: 'improv',
    label: 'Импровизация',
    icon: Sparkles,
    title: 'Импровизация и творческий выбор',
    text: 'Импровизационный блок переводит упражнение из повторения в исследование: участник выбирает качество, траекторию, образ, партнерство и композиционное решение.',
  },
  {
    id: 'reflection',
    label: 'Рефлексия',
    icon: ClipboardCheck,
    title: 'Рефлексия как закрепление опыта',
    text: 'Короткие письменные и устные вопросы помогают связать телесный опыт с эмоциональными, творческими и групповыми наблюдениями.',
  },
];

const lessonStructure = [
  ['Разминка', 'Мягкая мобилизация суставов, настройка дыхания, пробуждение внимания.'],
  ['Телесное исследование', 'Работа с опорой, весом, импульсом, уровнем и качеством движения.'],
  ['Импровизационный блок', 'Индивидуальный поиск пластического ответа на образ или задачу.'],
  ['Творческое задание', 'Сбор движения в короткую фразу, выбор акцента и динамики.'],
  ['Групповая композиция', 'Объединение индивидуальных решений в парную или групповую структуру.'],
  ['Рефлексия', 'Фиксация наблюдений о теле, эмоциях, группе и творческом выборе.'],
];

const exerciseFilters = [
  { id: 'all', label: 'Все цели' },
  { id: 'self', label: 'Саморегуляция' },
  { id: 'expression', label: 'Выразительность' },
  { id: 'communication', label: 'Коммуникация' },
  { id: 'reflection', label: 'Рефлексия' },
];

const exercises = [
  {
    title: 'Шкала напряжения в движении',
    goal: 'self',
    goalLabel: 'Саморегуляция',
    time: '10-12 мин',
    age: '12-17',
    materials: 'Спокойная музыка, свободное пространство',
    steps: 'Педагог предлагает двигаться от 1 до 5 по шкале мышечного тонуса: от почти незаметного движения к активному, затем обратно. После каждого уровня подростки отмечают, где телу комфортно.',
    effect: 'Формируется навык замечать уровень возбуждения и самостоятельно снижать интенсивность.',
  },
  {
    title: 'Пластический автограф',
    goal: 'expression',
    goalLabel: 'Выразительность',
    time: '15 мин',
    age: '13-17',
    materials: 'Карточки образов, бумага для заметок',
    steps: 'Каждый выбирает образ и создает короткую фразу из трех движений: линия, акцент, пауза. Затем фраза варьируется по уровню, скорости и направлению.',
    effect: 'Подросток переводит личный образ в ясное сценическое действие и расширяет пластический словарь.',
  },
  {
    title: 'Диалог опоры',
    goal: 'communication',
    goalLabel: 'Коммуникация',
    time: '18 мин',
    age: '14-17',
    materials: 'Музыка с ровным пульсом',
    steps: 'В парах один участник предлагает движение через направление или уровень, второй отвечает контрастом. Контакт возможен только с согласия обоих, допускается дистанционный диалог.',
    effect: 'Развивается внимание к партнеру, согласование границ и способность поддерживать совместную композицию.',
  },
  {
    title: 'Карта после занятия',
    goal: 'reflection',
    goalLabel: 'Рефлексия',
    time: '8 мин',
    age: '12-17',
    materials: 'Дневник рефлексии, ручки',
    steps: 'В конце занятия участники записывают три наблюдения: что почувствовало тело, какое движение стало находкой, что помогло группе работать вместе.',
    effect: 'Опыт занятия становится осознанным, педагог получает мягкие диагностические данные без оценивания личности.',
  },
  {
    title: 'Лента импульса',
    goal: 'expression',
    goalLabel: 'Выразительность',
    time: '12-15 мин',
    age: '12-16',
    materials: 'Ткань или ленты',
    steps: 'Участники исследуют, как ткань продолжает движение руки, корпуса и взгляда. Затем выбирают одно качество: текучесть, рывок, падение или зависание.',
    effect: 'Усиливается связь между образом, предметом и качеством движения.',
  },
  {
    title: 'Круг поддержки',
    goal: 'communication',
    goalLabel: 'Коммуникация',
    time: '10 мин',
    age: '12-17',
    materials: 'Открытое пространство',
    steps: 'Группа по очереди повторяет движение одного участника, сохраняя его ритм и добавляя небольшой общий жест поддержки.',
    effect: 'Снижается страх демонстрации, повышается доверие и групповая включенность.',
  },
];

const diagnostics = [
  'Участник называет телесное ощущение без внешней подсказки.',
  'Умеет снизить интенсивность движения после активного блока.',
  'Предлагает собственный пластический вариант в творческом задании.',
  'Соблюдает границы партнера и корректно реагирует на отказ.',
  'Участвует в обсуждении композиционного решения группы.',
  'Формулирует одно наблюдение о своем эмоциональном состоянии.',
  'Сохраняет внимание к задаче в течение основного блока занятия.',
  'Использует паузу, дыхание или изменение темпа для саморегуляции.',
];

const constructorOptions = {
  goals: [
    { id: 'self', label: 'Саморегуляция' },
    { id: 'expression', label: 'Выразительность' },
    { id: 'communication', label: 'Коммуникация' },
    { id: 'reflection', label: 'Рефлексия' },
  ],
  durations: [
    { id: '45', label: '45 минут' },
    { id: '60', label: '60 минут' },
    { id: '90', label: '90 минут' },
  ],
  levels: [
    { id: 'start', label: 'Начинающая группа' },
    { id: 'mixed', label: 'Смешанный уровень' },
    { id: 'advanced', label: 'Продвинутая группа' },
  ],
};

const recommendations = [
  'Сначала вводите правила безопасности: добровольность контакта, право на паузу, уважение к личному пространству.',
  'При сопротивлении подростков уменьшайте публичность задания: предложите работу в парах, запись в дневнике или выбор из двух вариантов.',
  'Не интерпретируйте рисунки, движения и высказывания как клинические симптомы. Используйте их как материал педагогической рефлексии.',
  'Поддерживайте групповую динамику через ясные роли: автор движения, наблюдатель, партнер, компоновщик фразы.',
];

const materials = [
  'Плейлисты с разной динамикой: ровный пульс, текучая фактура, тишина или минимализм.',
  'Свободное безопасное пространство без скользких покрытий и лишних предметов.',
  'Дневники рефлексии или листы наблюдений для коротких записей после занятия.',
  'Карточки образов: линия, вес, ветер, граница, импульс, пауза, след.',
  'Ткань, ленты, бумага или мягкие предметы для исследования качества движения.',
];

function buildLessonPlan(goal, duration, level) {
  const total = Number(duration);
  const advancedBonus = level === 'advanced' ? 'Усложнить композицию сменой уровней и каноном.' : '';
  const startHint = level === 'start' ? 'Давать выбор из двух понятных вариантов и больше времени на пробу.' : '';
  const mixedHint = level === 'mixed' ? 'Работать через пары разного опыта и короткие показы без оценивания.' : '';
  const goalNotes = {
    self: 'Фокус: дыхание, шкала напряжения, пауза и мягкое завершение.',
    expression: 'Фокус: образ, качество движения, личная фраза и вариативность.',
    communication: 'Фокус: партнерский ответ, границы контакта, групповая композиция.',
    reflection: 'Фокус: наблюдение, дневник, обсуждение телесных и творческих решений.',
  };
  const ratios = total === 45 ? [7, 8, 10, 8, 7, 5] : total === 60 ? [10, 10, 12, 12, 10, 6] : [12, 15, 18, 18, 18, 9];

  return lessonStructure.map(([title, text], index) => ({
    title,
    minutes: ratios[index],
    text,
    note: index === 2 ? goalNotes[goal] : index === 4 ? advancedBonus || mixedHint || startHint : '',
  }));
}

function Section({ id, title, children, eyebrow }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      {eyebrow && <p className="section-kicker">{eyebrow}</p>}
      <h2 id={`${id}-title`}>{title}</h2>
      {children}
    </section>
  );
}

function OptionGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="option-group">
      <legend>{title}</legend>
      <div className="segmented">
        {options.map((option) => (
          <button
            type="button"
            key={option.id}
            className={value === option.id ? 'selected' : ''}
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function App() {
  const [activeNav, setActiveNav] = useState('practice');
  const [menuOpen, setMenuOpen] = useState(false);
  const [modelTab, setModelTab] = useState('dance');
  const [exerciseFilter, setExerciseFilter] = useState('all');
  const [checkedItems, setCheckedItems] = useState(() => new Set([0, 2]));
  const [goal, setGoal] = useState('self');
  const [duration, setDuration] = useState('60');
  const [level, setLevel] = useState('mixed');

  const activeModel = modelBlocks.find((block) => block.id === modelTab);
  const filteredExercises = exerciseFilter === 'all'
    ? exercises
    : exercises.filter((exercise) => exercise.goal === exerciseFilter);
  const lessonPlan = useMemo(() => buildLessonPlan(goal, duration, level), [goal, duration, level]);

  const navigate = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleCheck = (index) => {
    setCheckedItems((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="app">
      <a className="skip-link" href="#practice">Перейти к практикуму</a>
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`} aria-label="Разделы пособия">
        <div className="brand">
          <div className="brand-mark">МП</div>
          <div>
            <p>Методическое пособие</p>
            <strong>Хореография и арт-практики</strong>
          </div>
        </div>
        <nav className="nav-list">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              type="button"
              key={id}
              className={activeNav === id ? 'active' : ''}
              onClick={() => navigate(id)}
            >
              <Icon aria-hidden="true" size={18} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <header className="mobile-bar">
        <button type="button" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <span>Практикум педагога-хореографа</span>
      </header>

      <main className="content">
        <section className="hero" id="overview">
          <div className="hero-copy">
            <p className="overline">Цифровое методическое пособие</p>
            <h1>Интегративная арт-терапевтическая модель в современной хореографии</h1>
            <p>
              Практико-ориентированный инструмент для педагогов, которые работают с подростками 12-17 лет и развивают эмоциональную саморегуляцию, телесную осознанность, выразительность и групповое взаимодействие средствами хореографического занятия.
            </p>
            <div className="hero-actions">
              <button type="button" className="primary-action" onClick={() => navigate('constructor')}>Собрать занятие</button>
              <button type="button" className="secondary-action" onClick={() => navigate('practice')}>Открыть упражнения</button>
            </div>
          </div>
          <div className="hero-media" aria-label="Визуальный образ современного движения и методических материалов">
            <img src="/assets/movement-method-banner.png" alt="Светлая студия современной хореографии с пластическим движением и методическими материалами" />
          </div>
        </section>

        <section className="workspace" aria-label="Рабочая панель пособия">
          <div className="panel large" id="practice">
            <div className="panel-header">
              <div>
                <p className="section-kicker">Практикум</p>
                <h2>Карточки упражнений</h2>
              </div>
              <span className="count">{filteredExercises.length} карточек</span>
            </div>
            <div className="filter-row" aria-label="Фильтр упражнений по цели">
              {exerciseFilters.map((filter) => (
                <button
                  type="button"
                  key={filter.id}
                  className={exerciseFilter === filter.id ? 'active' : ''}
                  onClick={() => setExerciseFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="exercise-grid">
              {filteredExercises.map((exercise) => (
                <article className="exercise-card" key={exercise.title}>
                  <div className="card-topline">
                    <span>{exercise.goalLabel}</span>
                    <small><Clock3 size={14} /> {exercise.time}</small>
                  </div>
                  <h3>{exercise.title}</h3>
                  <dl>
                    <div><dt>Возраст</dt><dd>{exercise.age}</dd></div>
                    <div><dt>Материалы</dt><dd>{exercise.materials}</dd></div>
                  </dl>
                  <p>{exercise.steps}</p>
                  <footer>{exercise.effect}</footer>
                </article>
              ))}
            </div>
          </div>

          <aside className="panel constructor-panel" id="constructor">
            <p className="section-kicker">Конструктор</p>
            <h2>План занятия</h2>
            <OptionGroup title="Цель занятия" options={constructorOptions.goals} value={goal} onChange={setGoal} />
            <OptionGroup title="Длительность" options={constructorOptions.durations} value={duration} onChange={setDuration} />
            <OptionGroup title="Уровень группы" options={constructorOptions.levels} value={level} onChange={setLevel} />
            <ol className="plan-list">
              {lessonPlan.map((item) => (
                <li key={item.title}>
                  <span>{item.minutes} мин</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.note || item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </section>

        <section className="two-column">
          <div className="panel" id="diagnostics">
            <div className="panel-header">
              <div>
                <p className="section-kicker">Диагностика</p>
                <h2>Чек-лист наблюдения</h2>
              </div>
              <span className="count">{checkedItems.size}/{diagnostics.length}</span>
            </div>
            <div className="checklist">
              {diagnostics.map((item, index) => (
                <label key={item} className={checkedItems.has(index) ? 'checked' : ''}>
                  <input type="checkbox" checked={checkedItems.has(index)} onChange={() => toggleCheck(index)} />
                  <span><CheckCircle2 size={18} /></span>
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className="panel" id="model">
            <p className="section-kicker">Интегративная модель</p>
            <h2>Блоки модели</h2>
            <div className="model-tabs" role="tablist" aria-label="Блоки интегративной модели">
              {modelBlocks.map(({ id, label, icon: Icon }) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={modelTab === id}
                  key={id}
                  className={modelTab === id ? 'active' : ''}
                  onClick={() => setModelTab(id)}
                >
                  <Icon size={17} />
                  {label}
                </button>
              ))}
            </div>
            <article className="model-detail">
              <h3>{activeModel.title}</h3>
              <p>{activeModel.text}</p>
            </article>
          </div>
        </section>

        <Section id="indicators" title="Показатели развития" eyebrow="Что отслеживает педагог">
          <div className="indicator-grid">
            {indicators.map((indicator) => (
              <article className="indicator-card" key={indicator.title}>
                <h3>{indicator.title}</h3>
                <p>{indicator.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="structure" title="Структура занятия" eyebrow="Логика педагогической встречи">
          <div className="timeline">
            {lessonStructure.map(([title, text], index) => (
              <article key={title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <section className="two-column bottom-grid">
          <div className="panel" id="recommendations">
            <p className="section-kicker">Методические рекомендации</p>
            <h2>Безопасность и этика</h2>
            <ul className="rich-list">
              {recommendations.map((item) => (
                <li key={item}><ChevronRight size={17} />{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel" id="materials">
            <p className="section-kicker">Материалы</p>
            <h2>Что подготовить</h2>
            <ul className="rich-list">
              {materials.map((item) => (
                <li key={item}><ChevronRight size={17} />{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
