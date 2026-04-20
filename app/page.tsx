import Image from 'next/image'
import BootstrapClient from './BootstrapClient'
import Question from './Question'

export default function Home() {
    return (
        <>
            <BootstrapClient/>
            <header>
                <div className="row align-items-center py-5">
                    <div className="text-center py-4 col-9">
                        <h1 className="greeting">יום הולדת 10 של אלכסיי ביטנסקי</h1>
                    </div>
                    <div className="col-3 text-center">
                        <Image className="header_img w-100 h-auto" src="/img/cake.jpg" alt="cake" width={300}
                               height={300}/>
                    </div>
                </div>
            </header>

            <main role="main" className="container">

                <Question
                    id="family"
                    title="משפחה"
                    slides={[
                        {
                            images: [{src: '/img/(1)-family/title-all-family.jpg', alt: 'family title'}],
                        },
                        {
                            images: [
                                {src: '/img/(1)-family/with-hamster.jpg', alt: 'with hamster'},
                                {src: '/img/(1)-family/the-Weasley-family.jpg', alt: 'Weasley family'},
                            ],
                            caption: 'הם גם חברי המשפחה'
                        },
                    ]}
                />

                <Question
                    id="favourite-animal"
                    title="בעל החיים הכי אהוב "
                    slides={[
                        {
                            images: [
                                {
                                    src: '/img/(2)-most-favourite-aminal/with-little-George.jpg',
                                    alt: 'with-little-George'
                                },
                                {
                                    src: '/img/(2)-most-favourite-aminal/with-little-George-2.jpg',
                                    alt: 'with little George'
                                },
                            ],
                            caption: "ג'ורג'"

                        }, {
                            images: [
                                {
                                    src: '/img/(2)-most-favourite-aminal/with-George-at-the-door.jpg',
                                    alt: 'George at the door'
                                },
                                {src: '/img/(2)-most-favourite-aminal/with-George.jpg', alt: 'with George'},
                            ],
                            caption: "ג'ורג'"
                        },
                        {
                            images: [
                                {
                                    src: '/img/(2)-most-favourite-aminal/indian-with-George.jpg',
                                    alt: 'Indian with George'
                                },
                                {
                                    src: '/img/(2)-most-favourite-aminal/with-George-embrace.jpg',
                                    alt: 'with little George'
                                },
                            ],
                            caption: "ג'ורג'"

                        },

                    ]}
                />

                <Question
                    id="games"
                    title="משחקים שאני אוהב"
                    slides={[
                        {
                            images: [{src: '/img/(3)-games/table-games-single-image.jpg', alt: 'table games'}],
                            caption: 'משחקי שולחן'
                        },
                        {
                            images: [{src: '/img/(3)-games/computer-games-single-image.png', alt: 'computer games'}],
                            caption: 'משחקי מכשב'
                        },
                        {
                            images: [
                                {src: '/img/(3)-games/games-with-pigs-Weasley.jpg', alt: 'games with Weasley'},
                                {
                                    src: '/img/(3)-games/games-with-pigs-in-a-house-of-pillows.jpg',
                                    alt: 'house of pillows'
                                },
                            ],
                            caption: "משחקים עם ג'ורג' ושרקנים אחרים"
                        },
                        {
                            images: [
                                {src: '/img/(3)-games/active-bow.jpg', alt: 'bow'},
                                {src: '/img/(3)-games/active-rope-dragging.jpg', alt: 'rope dragging'},
                            ],
                            caption: "משחקים אקטיביים"
                        },
                        {
                            images: [
                                {src: '/img/(3)-games/active-in-shlulit-playing.jpg', alt: 'playing outside'},
                                {src: '/img/(3)-games/active-in-shlulit-running.jpg', alt: 'running outside'},
                            ],
                            caption: "משחקים אקטיביים"
                        },
                    ]}
                />

                <Question
                    id="leisure"
                    title="פעילויות פנאי אחרות"
                    slides={[
                        {
                            images: [
                                {src: '/img/(4)-other-leasure/Acre-boat-trip.jpg', alt: 'Acre boat trip'},
                                {src: '/img/(4)-other-leasure/Acre-on-a-pony.jpg', alt: 'Acre pony'},
                            ],
                            caption: 'טיולי ים ולרכב'
                        },
                        {
                            images: [
                                {src: '/img/(4)-other-leasure/Kratovo-at-a-fireplace.jpg', alt: 'Kratovo fireplace'},
                                {src: '/img/(4)-other-leasure/Kratovo-in-a-hammock.jpg', alt: 'Kratovo hammock'},
                            ],
                            caption: 'מנוחה בערסל וליד קמין'
                        },
                        {
                            images: [
                                {src: '/img/(4)-other-leasure/ice-cream-near-the-sea.jpg', alt: 'ice cream at the sea'},
                                {
                                    src: '/img/(4)-other-leasure/ice-cream-with-a-friend.jpg',
                                    alt: 'ice cream with a friend'
                                },
                            ],
                            caption: 'גלידה עם חברים'
                        },
                        {
                            images: [
                                {src: '/img/(4)-other-leasure/quest-1.jpg', alt: 'quest 1'},
                                {src: '/img/(4)-other-leasure/quest-2.jpg', alt: 'quest 2'},
                            ],
                            caption: 'משחקי משימות'
                        },
                        {
                            images: [
                                {src: '/img/(4)-other-leasure/aquapark.jpg', alt: 'aquapark'},
                                {src: '/img/(4)-other-leasure/in-disguise.jpg', alt: 'in disguise'},
                            ],
                            caption: 'לאכול בפארק מים ומשחקי תחפושות'
                        },
                    ]}
                />

                <Question
                    id="animals"
                    title="מה עוד אני אוהב"
                    slides={[
                        {
                            images: [
                                {src: '/img/(5)-with-animals/feeding-parrots.jpg', alt: 'feeding parrots'},
                                {src: '/img/(5)-with-animals/with-a-parrot.jpg', alt: 'with a parrot'},
                            ],
                            caption: 'אינטראקציה עם בעלי חיים קטנים'
                        },
                        {
                            images: [
                                {src: '/img/(5)-with-animals/with-parrot.jpg', alt: 'with parrot'},
                                {src: '/img/(5)-with-animals/with-newborn-pigs.jpg', alt: 'newborn pigs'},
                            ],
                            caption: 'אינטראקציה עם בעלי חיים קטנים'
                        },
                        {
                            images: [
                                {src: '/img/(5)-with-animals/with-springer.jpg', alt: 'with springer'},
                                {src: '/img/(5)-with-animals/with-turtle.jpg', alt: 'with turtle'},
                            ],
                            caption: 'אינטראקציה עם בעלי חיים קטנים'
                        },
                    ]}
                />

                <Question
                    id="latest-trip"
                    title="הטיול האחרון"
                    slides={[
                        {
                            images: [{src: '/img/(6)-latest-trip/title-single-image.jpg', alt: 'trip title'}],
                        },
                        {
                            images: [
                                {src: '/img/(6)-latest-trip/in-an-ice-chair.jpg', alt: 'ice chair'},
                                {src: '/img/(6)-latest-trip/bear-sofa.jpg', alt: 'bear on sofa'},
                            ],
                        },
                        {
                            images: [
                                {src: '/img/(6)-latest-trip/elephant-seal.jpg', alt: 'elephant seal'},
                                {src: '/img/(6)-latest-trip/bear.jpg', alt: 'bear'}
                            ],
                        },
                        {
                            images: [
                                {src: '/img/(6)-latest-trip/tiger.jpg', alt: 'tiger'},
                                {src: '/img/(6)-latest-trip/mammoth.jpg', alt: 'mammoth'},
                            ],
                        },
                        {
                            images: [
                                {src: '/img/(6)-latest-trip/pinguin.jpg', alt: 'penguin'},
                                {src: '/img/(6)-latest-trip/walrus.jpg', alt: 'walrus'},
                            ],
                        },
                    ]}
                />

            </main>
        </>
    )
}
