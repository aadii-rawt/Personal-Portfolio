const quotes = [
    {
        quote: "A lion does not concern himself with the opinion of sheep.",
        author: "Tywin Lannister, Game of Thrones",
    },
    {
        quote: "Chaos isn’t a pit. Chaos is a ladder.",
        author: "Petyr Baelish, Game of Thrones",
    },
    {
        quote: `If the pain doesn't kill me, it will only make me stronger.`,
        author: 'Sung Jin-Woo, Solo Leveling',
    },
    {
        quote: `I’ll take a potato chip… AND EAT IT!`,
        author: 'Light Yagami, Death Note',
    },
    {
        quote: "I am the one who knocks.",
        author: "Walter White, Breaking Bad",
    },
    {
        quote: "Say my name.",
        author: "Walter White, Breaking Bad",
    },
    {
        quote: "Those who do not understand true pain can never understand true peace.",
        author: "Pain, Naruto Shippuden",
    },
    {
        quote: "Sometimes, you must hurt in order to know. Lose in order to gain.",
        author: "Pain, Naruto Shippuden",
    },
    {
        quote: "If you win, you live. If you lose, you die. If you don’t fight, you can’t win.",
        author: "Eren Yeager, Attack on Titan",
    },
    {
        quote: "The first rule of Fight Club is, you do not talk about Fight Club",
        author: "Tyler Durden, Fight Club",
    },
    {
        quote: "I want to be strong enough not to need anyone’s help.",
        author: "Thorfinn, Vinland Saga",
    },
    {
        quote: "Everything is connected.",
        author: "Dark",
    },
    {
        quote: "Maka khud be dhyan de lala, kyuki jitna tera naam utna to hamara badnaam hai",
        author: "Mehak Pari",
    },
];

export default function QuoteCard() {
    const quote = quotes?.[Math.floor(Math.random() * quotes.length)]
    console.log(quote);

    return (
        <div className={`w-full`}>
            <div
                className=" mt-16
          relative
          bg-transparent
          border
          border-gray-700/30
          rounded-2xl
          p-8
          md:p-12
          overflow-hidden
        "
                aria-label="Quote"
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-8 top-5 w-20 h-20  opacity-20 text-gray-500 pointer-events-none"
                    viewBox="0 0 300 300"><path d="M103.23 145.98c-24.42-11.67-29.98-44.15-10.47-62.91 4.5-4.97 15.66-9.15 10.79-17.58-2.29-3.84-7.25-5.03-11.05-2.67-40.13 28.21-76.9 64.95-68.47 129.87 7.69 59.24 105.24 63.52 107.08-2.53 0-19.63-11.51-36.35-27.88-44.18zm146.08 0c-24.42-11.67-29.98-44.15-10.47-62.91 4.5-4.97 15.66-9.15 10.79-17.58-2.29-3.84-7.25-5.03-11.05-2.67-40.13 28.21-76.9 64.95-68.47 129.87 7.69 59.24 105.24 63.52 107.08-2.53 0-19.63-11.51-36.35-27.88-44.18z" fill="#FFF"></path></svg>
                <div className="relative z-10 gap-6">

                    <div>
                        <p className="  text-gray-300 text-lg leading-relaxed md:leading-snug italic max-w-[85ch]"
                            style={{ fontStyle: "italic" }}
                        >
                            “{quote.quote}”
                        </p>
                    </div>

                    <div className="flex-shrink-0 pt-5">
                        <p className="text-right text-gray-200 italic">
                            <span className="align-middle leading-none mr-2">—</span>
                            <span className="ml-1">{quote.author}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
