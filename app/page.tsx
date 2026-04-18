import Image from 'next/image'
import BootstrapClient from './BootstrapClient'

function Carousel({
  id,
  questionNumber,
  slides,
}: {
  id: string
  questionNumber: number
  slides: React.ReactNode[]
}) {
  return (
    <>
      <div className="question_header text-center">שאלה {questionNumber}</div>
      <div className="d-flex justify-content-center">
        <div id={id} className="carousel slide border border-3 border-success mb-5 bg-gray" data-bs-interval="false">
          <div className="carousel-indicators">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide-to={i}
                className={i === 0 ? 'active' : ''}
                aria-current={i === 0 ? 'true' : undefined}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {slides.map((slide, i) => (
              <div key={i} className={`carousel-item text-center my-1${i === 0 ? ' active' : ''}`}>
                {slide}
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

function Caption({ text }: { text: string }) {
  return (
    <div className="carousel-caption">
      <h5 className="qa">{text}</h5>
    </div>
  )
}

function CaptionMd({ text }: { text: string }) {
  return (
    <div className="carousel-caption d-none d-md-block">
      <h5 className="qa">{text}</h5>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <BootstrapClient />
      <header>
        <div className="row align-items-center py-5">
          <div className="text-center py-4 col-9">
            <h1 className="greeting">יום הולדת 10 של אלכסיי ביטנסקי</h1>
          </div>
          <div className="col-3 text-center">
            <Image className="header_img w-100" src="/img/cake.jpg" alt="cake" width={300} height={300} />
          </div>
        </div>
      </header>

      <main role="main" className="container">
        <Carousel
          id="games"
          questionNumber={1}
          slides={[
            <>
              <img src="/img/table-games.jpg" className="imgs-2 border border-2 border-success" alt="table games" />
              <img src="/img/in-a-house-of-pillows.jpg" className="imgs-2 border border-2 border-success" alt="house of pillows" />
              <Caption text="באילו משחקים אלכסיי הכי אוהב לשחק?" />
            </>,
            <>
              <img src="/img/games-collage.png" className="imgs-1 border border-2 border-success" alt="favorite games" />
              <CaptionMd text="" />
            </>,
            <>
              <img src="/img/rope-dragging.jpg" className="imgs-2 border border-2 border-success" alt="rope dragging" />
              <img src="/img/in-shlulit-playing.jpg" className="imgs-2 border border-2 border-success" alt="playing outside" />
              <CaptionMd text="גם משחקי מחשב וגם משחקים מהנים בחיים האמיתיים" />
            </>,
          ]}
        />

        <Carousel
          id="animals"
          questionNumber={2}
          slides={[
            <>
              <img src="/img/with-hamster.jpg" className="imgs-2 border border-2 border-success" alt="hamster" />
              <img src="/img/with-George-at-the-door.jpg" className="imgs-2 border border-2 border-success" alt="George" />
              <Caption text="כמה חיות יש לאלכסיי בבית?" />
            </>,
            <>
              <img src="/img/4-pigs.jpg" className="imgs-1 border border-2 border-success" alt="guinea pigs" />
              <CaptionMd text="יש לאלכסיי 6 חיות בבית" />
            </>,
            <>
              <img src="/img/with-a-parrot.jpg" className="imgs-2 border border-2 border-success" alt="parrot" />
              <img src="/img/with-hamster.jpg" className="imgs-2 border border-2 border-success" alt="hamster again" />
              <CaptionMd text="אלכסיי אוהב מאוד חיות ונהנה לטפל בהן" />
            </>,
            <>
              <img src="/img/4-pigs.jpg" className="imgs-6 border border-2 border-success m-1" alt="pig 1" />
              <img src="/img/with-George-at-the-door.jpg" className="imgs-6 border border-2 border-success m-1" alt="pig 2" />
              <img src="/img/with-hamster.jpg" className="imgs-6 border border-2 border-success m-1" alt="hamster 1" />
              <img src="/img/with-a-parrot.jpg" className="imgs-6 border border-2 border-success m-1" alt="parrot 1" />
              <img src="/img/4-pigs.jpg" className="imgs-6 border border-2 border-success m-1" alt="pig 3" />
              <img src="/img/with-hamster.jpg" className="imgs-6 border border-2 border-success m-1" alt="hamster 2" />
            </>,
          ]}
        />

        <Carousel
          id="family"
          questionNumber={3}
          slides={[
            <>
              <img src="/img/all_family.jpg" className="imgs-1 border border-2 border-success" alt="family" />
              <Caption text="עם מי אלכסיי הכי אוהב לבלות?" />
            </>,
            <>
              <img src="/img/table-games.jpg" className="imgs-2 border border-2 border-success" alt="board games" />
              <img src="/img/in-a-hammock.jpg" className="imgs-2 border border-2 border-success" alt="hammock" />
              <CaptionMd text="עם המשפחה, במשחקים, בצחוקים ובזמן ביחד" />
            </>,
            <>
              <img src="/img/all_family.jpg" className="imgs-1 border border-2 border-success" alt="family again" />
              <CaptionMd text="משפחה טובה הופכת כל יום לחגיגה" />
            </>,
          ]}
        />

        <Carousel
          id="friends"
          questionNumber={4}
          slides={[
            <>
              <img src="/img/with-a-friend-and-ice-cream.jpg" className="imgs-2 border border-2 border-success" alt="friend ice cream" />
              <img src="/img/ice-cream-near-the-sea.jpg" className="imgs-2 border border-2 border-success" alt="sea ice cream" />
              <Caption text="מה הכי כיף לעשות עם חברים?" />
            </>,
            <>
              <img src="/img/table-games.jpg" className="imgs-2 border border-2 border-success" alt="games with family" />
              <img src="/img/with-a-friend-and-ice-cream.jpg" className="imgs-2 border border-2 border-success" alt="friend again" />
              <CaptionMd text="לשחק, לצחוק, לאכול משהו טעים וליהנות יחד" />
            </>,
            <>
              <img src="/img/ice-cream-near-the-sea.jpg" className="imgs-1 border border-2 border-success" alt="sea photo" />
              <CaptionMd text="כשיש חברים טובים, כל יום מרגיש כמו חגיגה" />
            </>,
          ]}
        />

        <Carousel
          id="adventures"
          questionNumber={5}
          slides={[
            <>
              <img src="/img/on-a-pony.jpg" className="imgs-2 border border-2 border-success" alt="pony" />
              <img src="/img/rope-dragging.jpg" className="imgs-2 border border-2 border-success" alt="rope" />
              <Caption text="מה אלכסיי הכי אוהב: לשבת במקום או לצאת להרפתקה?" />
            </>,
            <>
              <img src="/img/in-shlulit-running.jpg" className="imgs-2 border border-2 border-success" alt="running" />
              <img src="/img/in-shlulit-playing.jpg" className="imgs-2 border border-2 border-success" alt="playing" />
              <CaptionMd text="אלכסיי אוהב לזוז, לרוץ, לשחק ולגלות דברים חדשים" />
            </>,
            <>
              <img src="/img/with-a-parrot.jpg" className="imgs-2 border border-2 border-success" alt="parrot adventure" />
              <img src="/img/ice-cream-near-the-sea.jpg" className="imgs-2 border border-2 border-success" alt="sea adventure" />
              <CaptionMd text="גם חיות, גם ים וגם המון חוויות" />
            </>,
            <>
              <img src="/img/in-a-hammock.jpg" className="imgs-1 border border-2 border-success" alt="hammock rest" />
              <CaptionMd text="ובסוף גם לנוח כמו אלוף" />
            </>,
          ]}
        />

        <Carousel
          id="special"
          questionNumber={6}
          slides={[
            <>
              <img src="/img/in-a-hat.jpg" className="imgs-1 border border-2 border-success" alt="hat" />
              <Caption text="מה עושה את אלכסיי מיוחד?" />
            </>,
            <>
              <img src="/img/with-George-at-the-door.jpg" className="imgs-2 border border-2 border-success" alt="George at door" />
              <img src="/img/on-a-pony.jpg" className="imgs-2 border border-2 border-success" alt="pony again" />
              <CaptionMd text="לב טוב, סקרנות גדולה והמון הומור" />
            </>,
            <>
              <img src="/img/all_family.jpg" className="imgs-1 border border-2 border-success" alt="family ending" />
              <CaptionMd text="אלכסיי בן 10, וזה רק מתחיל!" />
            </>,
          ]}
        />
      </main>
    </>
  )
}
