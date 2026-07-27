"use client";

import { useEffect, useState } from "react";

const lastSignals = [
  {
    time: "00:03",
    author: "неизвестный участник",
    text: "у всех телега легла или это я?",
  },
  {
    time: "00:07",
    author: "очевидец № 4",
    text: "я пока через вайфай вижу",
  },
  {
    time: "00:11",
    author: "последний выживший",
    text: "ребят?",
  },
];

const missingMembers = [
  { initials: "А.", status: "печатает…", color: "coral" },
  { initials: "?", status: "был(а) недавно", color: "blue" },
  { initials: "М.", status: "подключается…", color: "yellow" },
  { initials: "Ж.", status: "ищет рабочий VPN", color: "green" },
];

export default function Home() {
  const [found, setFound] = useState(6);
  const [reported, setReported] = useState(false);
  const [seconds, setSeconds] = useState(17);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSeconds((value) => (value + 1) % 60);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  function reportSurvival() {
    if (!reported) {
      setFound((value) => value + 1);
      setReported(true);
    }
  }

  return (
    <main>
      <section className="hero" id="top">
        <nav className="topbar" aria-label="Главная навигация">
          <a className="brand" href="#top" aria-label="Чистосердечное незнание">
            <span className="brand-mark">ЧН</span>
            <span className="brand-copy">
              <b>Чистосердечное</b>
              <b>незнание</b>
            </span>
          </a>

          <div className="incident-status">
            <span className="pulse-dot" aria-hidden="true" />
            Операция идёт
          </div>

          <a className="nav-link" href="#signals">
            Последние сигналы ↘
          </a>
        </nav>

        <div className="ticker" aria-label="Срочное сообщение">
          <span>Срочно</span>
          <p>
            В результате внезапного сетевого явления группа потеряла большую
            часть населения. Паниковать поздно.
          </p>
          <strong>Выпуск № 404</strong>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Оперативная сводка / 27.07.2026</p>
            <h1>
              Группа
              <br />
              без вести
              <br />
              <em>пропала</em>
            </h1>
            <p className="hero-lead">
              После блокировки Telegram участники «Чистосердечного незнания»
              перестали подавать признаки жизни. Предположительно, они всё ещё
              ждут, пока загрузится кружок.
            </p>

            <div className="hero-actions">
              <button
                className={`primary-button ${reported ? "is-done" : ""}`}
                onClick={reportSurvival}
                type="button"
              >
                <span>{reported ? "Вы обнаружены" : "Я выжил(а)"}</span>
                <span aria-hidden="true">{reported ? "✓" : "→"}</span>
              </button>
              <a className="text-button" href="#plan">
                План возвращения
              </a>
            </div>

            <p className={`survival-note ${reported ? "is-visible" : ""}`}>
              Сигнал принят. Не двигайтесь — за вами уже выехали с рабочей
              конфигурацией.
            </p>
          </div>

          <div className="case-board" aria-label="Карточка происшествия">
            <div className="case-board-head">
              <span>Дело № TG–404</span>
              <span>Для служебного незнания</span>
            </div>

            <div className="photo-stack" aria-label="Карточки пропавших">
              {missingMembers.map((member, index) => (
                <article
                  className={`member-card ${member.color}`}
                  key={member.initials + index}
                >
                  <span className="card-number">0{index + 1}</span>
                  <div className="member-face" aria-hidden="true">
                    <span>{member.initials}</span>
                  </div>
                  <p>{member.status}</p>
                </article>
              ))}
            </div>

            <div className="case-stamp" aria-hidden="true">
              НЕ НАЙДЕНЫ
            </div>

            <div className="case-footer">
              <p>
                <b>Особые приметы:</b> читают всё, отвечают выборочно, на аватаре
                фотография пятилетней давности.
              </p>
              <span className="barcode">▥▥▥ ▥▥ ▥▥▥▥ ▥▥▥</span>
            </div>
          </div>
        </div>

        <div className="stats-row">
          <article>
            <span>Пропали</span>
            <strong>87%</strong>
            <small>группы вне зоны мемов</small>
          </article>
          <article>
            <span>Обнаружены</span>
            <strong>{found}</strong>
            <small>включая вас</small>
          </article>
          <article>
            <span>Последний онлайн</span>
            <strong>
              00:11:{seconds.toString().padStart(2, "0")}
            </strong>
            <small>время приблизительное</small>
          </article>
        </div>
      </section>

      <section className="signals-section" id="signals">
        <div className="section-heading">
          <p className="eyebrow">Перехвачено штабом</p>
          <h2>Последние сигналы</h2>
          <p>
            Связь обрывалась постепенно. Сначала перестали грузиться видео,
            потом совесть.
          </p>
        </div>

        <div className="signal-list">
          {lastSignals.map((signal, index) => (
            <article className="signal" key={signal.time}>
              <span className="signal-index">0{index + 1}</span>
              <span className="signal-time">{signal.time}</span>
              <div>
                <p className="signal-author">{signal.author}</p>
                <blockquote>«{signal.text}»</blockquote>
              </div>
              <span className="signal-state">доставлено частично</span>
            </article>
          ))}
        </div>
      </section>

      <section className="plan-section" id="plan">
        <div className="plan-intro">
          <p className="eyebrow">Инструкция по возвращению</p>
          <h2>
            Не знаем,
            <br />
            но план есть
          </h2>
        </div>

        <ol className="steps">
          <li>
            <span>01</span>
            <div>
              <h3>Не паниковать</h3>
              <p>
                Если вы читаете эту страницу, интернет у вас всё-таки есть.
                Это уже подозрительно хороший знак.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Включить VPN</h3>
              <p>
                Любой рабочий. Слово «рабочий» здесь ключевое и одновременно
                самое сложное.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Подать признаки</h3>
              <p>
                Вернуться в группу и отправить любой стикер. Даже тот самый.
                Особенно тот самый.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="final-call">
        <div className="orbit orbit-one" aria-hidden="true" />
        <div className="orbit orbit-two" aria-hidden="true" />
        <p className="eyebrow">Контрольный вопрос</p>
        <h2>Если ты это видишь — ты с нами?</h2>
        <p>
          Нажми кнопку. Штаб повысит счётчик найденных и на секунду поверит,
          что всё было не зря.
        </p>
        <button
          className={`survivor-button ${reported ? "is-done" : ""}`}
          onClick={reportSurvival}
          type="button"
        >
          {reported ? "Сигнал уже принят ✓" : "Подтвердить присутствие"}
        </button>
      </section>

      <footer>
        <div>
          <span className="brand-mark footer-mark">ЧН</span>
          <p>
            Штаб по возвращению своих
            <br />
            и чужих мемов
          </p>
        </div>
        <p className="footer-note">
          Не является официальным заявлением.
          <br />
          Как и всё в этой группе.
        </p>
        <a href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
