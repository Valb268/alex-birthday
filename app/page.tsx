import Image from 'next/image'
import BootstrapClient from './BootstrapClient'
import Question from './Question'

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
            <Image className="header_img w-100 h-auto" src="/img/cake.jpg" alt="cake" width={300} height={300} />
          </div>
        </div>
      </header>

      <main role="main" className="container">
        <Question
          id="games"
          questionNumber={1}
          slides={[
            {
              images: [
                { src: '/img/table-games.jpg', alt: 'table games' },
                { src: '/img/in-a-house-of-pillows.jpg', alt: 'house of pillows' },
              ],
              caption: 'באילו משחקים אלכסיי הכי אוהב לשחק?',
            },
            {
              images: [{ src: '/img/games-collage.png', alt: 'favorite games' }],
            },
            {
              images: [
                { src: '/img/rope-dragging.jpg', alt: 'rope dragging' },
                { src: '/img/in-shlulit-playing.jpg', alt: 'playing outside' },
              ],
              caption: 'גם משחקי מחשב וגם משחקים מהנים בחיים האמיתיים',
              captionMdOnly: true,
            },
          ]}
        />

        <Question
          id="animals"
          questionNumber={2}
          slides={[
            {
              images: [
                { src: '/img/with-hamster.jpg', alt: 'hamster' },
                { src: '/img/with-George-at-the-door.jpg', alt: 'George' },
              ],
              caption: 'כמה חיות יש לאלכסיי בבית?',
            },
            {
              images: [{ src: '/img/4-pigs.jpg', alt: 'guinea pigs' }],
              caption: 'יש לאלכסיי 6 חיות בבית',
              captionMdOnly: true,
            },
            {
              images: [
                { src: '/img/with-a-parrot.jpg', alt: 'parrot' },
                { src: '/img/with-hamster.jpg', alt: 'hamster' },
              ],
              caption: 'אלכסיי אוהב מאוד חיות ונהנה לטפל בהן',
              captionMdOnly: true,
            },
            {
              images: [
                { src: '/img/4-pigs.jpg', alt: 'pig 1' },
                { src: '/img/with-George-at-the-door.jpg', alt: 'pig 2' },
                { src: '/img/with-hamster.jpg', alt: 'hamster 1' },
                { src: '/img/with-a-parrot.jpg', alt: 'parrot 1' },
                { src: '/img/4-pigs.jpg', alt: 'pig 3' },
                { src: '/img/with-hamster.jpg', alt: 'hamster 2' },
              ],
              grid: true,
            },
          ]}
        />

        <Question
          id="family"
          questionNumber={3}
          slides={[
            {
              images: [{ src: '/img/all_family.jpg', alt: 'family' }],
              caption: 'עם מי אלכסיי הכי אוהב לבלות?',
            },
            {
              images: [
                { src: '/img/table-games.jpg', alt: 'board games' },
                { src: '/img/in-a-hammock.jpg', alt: 'hammock' },
              ],
              caption: 'עם המשפחה, במשחקים, בצחוקים ובזמן ביחד',
              captionMdOnly: true,
            },
            {
              images: [{ src: '/img/all_family.jpg', alt: 'family' }],
              caption: 'משפחה טובה הופכת כל יום לחגיגה',
              captionMdOnly: true,
            },
          ]}
        />

        <Question
          id="friends"
          questionNumber={4}
          slides={[
            {
              images: [
                { src: '/img/with-a-friend-and-ice-cream.jpg', alt: 'friend ice cream' },
                { src: '/img/ice-cream-near-the-sea.jpg', alt: 'sea ice cream' },
              ],
              caption: 'מה הכי כיף לעשות עם חברים?',
            },
            {
              images: [
                { src: '/img/table-games.jpg', alt: 'games' },
                { src: '/img/with-a-friend-and-ice-cream.jpg', alt: 'friend' },
              ],
              caption: 'לשחק, לצחוק, לאכול משהו טעים וליהנות יחד',
              captionMdOnly: true,
            },
            {
              images: [{ src: '/img/ice-cream-near-the-sea.jpg', alt: 'sea' }],
              caption: 'כשיש חברים טובים, כל יום מרגיש כמו חגיגה',
              captionMdOnly: true,
            },
          ]}
        />

        <Question
          id="adventures"
          questionNumber={5}
          slides={[
            {
              images: [
                { src: '/img/on-a-pony.jpg', alt: 'pony' },
                { src: '/img/rope-dragging.jpg', alt: 'rope' },
              ],
              caption: 'מה אלכסיי הכי אוהב: לשבת במקום או לצאת להרפתקה?',
            },
            {
              images: [
                { src: '/img/in-shlulit-running.jpg', alt: 'running' },
                { src: '/img/in-shlulit-playing.jpg', alt: 'playing' },
              ],
              caption: 'אלכסיי אוהב לזוז, לרוץ, לשחק ולגלות דברים חדשים',
              captionMdOnly: true,
            },
            {
              images: [
                { src: '/img/with-a-parrot.jpg', alt: 'parrot' },
                { src: '/img/ice-cream-near-the-sea.jpg', alt: 'sea' },
              ],
              caption: 'גם חיות, גם ים וגם המון חוויות',
              captionMdOnly: true,
            },
            {
              images: [{ src: '/img/in-a-hammock.jpg', alt: 'hammock' }],
              caption: 'ובסוף גם לנוח כמו אלוף',
              captionMdOnly: true,
            },
          ]}
        />

        <Question
          id="special"
          questionNumber={6}
          slides={[
            {
              images: [{ src: '/img/in-a-hat.jpg', alt: 'hat' }],
              caption: 'מה עושה את אלכסיי מיוחד?',
            },
            {
              images: [
                { src: '/img/with-George-at-the-door.jpg', alt: 'George at door' },
                { src: '/img/on-a-pony.jpg', alt: 'pony' },
              ],
              caption: 'לב טוב, סקרנות גדולה והמון הומור',
              captionMdOnly: true,
            },
            {
              images: [{ src: '/img/all_family.jpg', alt: 'family' }],
              caption: 'אלכסיי בן 10, וזה רק מתחיל!',
              captionMdOnly: true,
            },
          ]}
        />
      </main>
    </>
  )
}
