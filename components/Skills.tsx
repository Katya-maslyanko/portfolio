const Skills = () => {
  const skillsData = [
    {
      title: "UX/UI Дизайнер",
      subtitle: "Подход к работе",
      description: (
        <>
          Я создаю интуитивно понятные и привлекательные интерфейсы для лендингов, веб-платформ, начиная с глубокого UX-исследования, включая аудит, интервью и usability-тестирование. 
          <br />
          <br />
          <span className="block mb-[12px]">
            На этапе lo-fi проектирую информационную архитектуру и пользовательские сценарии, а затем разрабатываю hi-fi прототипы с дизайн-системами и UI-китами для обеспечения консистентности. Мой подход ориентирован на решение пользовательских задач и достижение бизнес-целей через итеративный процесс и тесное взаимодействие с командой и клиентом. 
          </span>
        </>
      )
    },
    {
      title: "Frontend Разработчик",
      subtitle: "Подход к работе", 
      description: (
        <>
          Я разрабатываю адаптивные интерфейсы, используя HTML, CSS, JavaScript и современные фреймворки, такие как Next, Vue для воплощения дизайн-макетов в коде. Также есть опыт с бэкендом на Django + DRF. 
          <br />
          <br />
          <span className="block mb-[12px]">
            Оптимизацию загрузки страниц и интеграцию с API, сохраняя чистоту и масштабируемость кода. Мой процесс включает тесное сотрудничество с дизайнерами и бэкендом для создания целостного продукта.          
          </span>
        </>
      )
    },
    {
      title: "Опыт работы",
      subtitle: "1 Год и 3 Месяца",
      items: [
        {
          company: "Фриланс, проект совместно с ГК «Геоскан»",
          duration: "Сент 2023 - Фев 2024"
        },
        {
          company: "Фриланс, проект совместно с ГК «Тихие крылья»",
          duration: "Сент 2024 - Нояб 2024"
        },
        {
          company: "Pet-проект",
          duration: "Янв 2025 - Июнь 2025"
        },
        {
          company: "Независимая практика",
          duration: "2021 - 2025"
        },
      ]
    }
  ];

  return (
    <div>
      <div className="skill">
        {skillsData.map((skill) => (
          <div key={skill.title} className="flex-1">
            <div className="relative">
              <h1 className="text-gray-700 text-[16px] font-bold pb-[18px]">
                {skill.title}
              </h1>
              <span
                className="block w-full h-[0.5px] bg-gray-300"
                style={{ backgroundColor: "#A2A2A2" }}
              />
            </div>

            <p className="mt-[18px] text-[12px]" style={{ color: "#A2A2A2" }}>
              {skill.subtitle}
            </p>

            {'description' in skill ? (
              <p className="mt-[4px] text-[13px] leading-[1.5] text-gray-500">
                {skill.description}
              </p>
            ) : (
              <ul className="flex flex-col gap-[8px] text-[13px] leading-[1.5] text-gray-500">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <span>{item.company}</span>
                    <span className="text-[12px]" style={{ color: "#A2A2A2" }}>{item.duration}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;