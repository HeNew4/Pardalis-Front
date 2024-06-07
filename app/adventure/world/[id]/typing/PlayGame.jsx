import { useEffect, useState } from 'react';
const PlayGame = ({ onGame, onChangeScore }) => {
    const [defaultData] = useState(
        'In the tianguis, there are colorful stalls. Vendors sell fruits like mangoes, papayas, and bananas. You can hear the sounds of people bargaining for the best price. There are toys, clothes, and even shoes for sale.'
    );
    const [dataTyping, setDataTyping] = useState([]);
    const [textTyping, setTextTyping] = useState({
        value: '',
        position: 0,
    });

    const frasesEnIngles = [
        'In the tianguis, there are colorful stalls. Vendors sell fruits like mangoes, papayas, and bananas. You can hear the sounds of people bargaining for the best price. There are toys, clothes, and even shoes for sale.',
        "Sometimes, you can see street performers playing music or dancing. The city is full of life and excitement. Don't forget to look both ways before crossing the street!",
        'In Mexico City, there are many street vendors. You can buy a delicious elote with mayo, cheese, and chili powder. The smell is amazing!',
        'When you walk around, you see many puestos selling tacos al pastor. The taquero cuts the meat very fast. Don’t forget to add some lime and cilantro!',
        'There are many people in the zócalo. You can see the big Mexican flag waving in the wind. Sometimes there are festivals with music and dancing.',
        'Riding the metro in Mexico City is an adventure. You must be quick to get a seat! Sometimes, musicians come into the metro and play songs. People give them coins.',
        'In the market, you can buy fresh frutas. Mangos, papayas, and piñas are so tasty. There are also puestos with candies like mazapanes and paletas.',
        "You can see luchadores’ masks for sale. Kids love pretending to be luchadores. They say, '¡Viva la lucha libre!'",
        'At the tianguis, there are so many things to buy. You can find juguetes like spinning tops and dolls. The sellers shout to get your attention.',
        'Street food is the best! You can eat quesadillas with cheese and mushrooms. Don’t forget to try the sopes with beans and cream. Sometimes, you see people selling balloons. The balloons are shaped like animals and cartoon characters. Kids love them!',
        'In the park, you can see kids playing fútbol. They run and kick the ball with excitement. Nearby, there are stands selling helados. Everyone loves ice cream on a hot day.',
        'On Sundays, families go to Chapultepec. They visit the zoo and see lions, monkeys, and giraffes. There are boats on the lake where you can paddle around.',
        'People also visit the museums. The Museo Nacional de Antropología has many interesting things to learn about Mexico’s history.',
        'Walking down the street, you can hear mariachis playing. They wear big sombreros and sing songs. People stop to listen and enjoy the music.',
        'There are also many tiendas. You can buy piñatas for birthday parties. Piñatas are filled with candies and small toys. It’s so much fun to break them!',
        'At night, the city lights up. The Torre Latinoamericana shines bright. You can see the city from the top. It looks amazing!',
    ];

    const frasesEnEspanol = [
        'En el tianguis, hay puestos coloridos. Los vendedores venden frutas como mangos, papayas y plátanos. Puedes escuchar los sonidos de las personas regateando por el mejor precio. Hay juguetes, ropa e incluso zapatos a la venta.',
        'A veces, puedes ver artistas callejeros tocando música o bailando. La ciudad está llena de vida y emoción. ¡No olvides mirar a ambos lados antes de cruzar la calle!',
        'En la Ciudad de México, hay muchos vendedores ambulantes. Puedes comprar un delicioso elote con mayonesa, queso y chile en polvo. ¡El olor es increíble!',
        'Cuando caminas por ahí, ves muchos puestos vendiendo tacos al pastor. El taquero corta la carne muy rápido. ¡No olvides agregar un poco de limón y cilantro!',
        'Hay mucha gente en el zócalo. Puedes ver la gran bandera mexicana ondeando en el viento. A veces hay festivales con música y baile.',
        'Viajar en el metro en la Ciudad de México es una aventura. ¡Debes ser rápido para conseguir un asiento! A veces, músicos entran al metro y tocan canciones. La gente les da monedas.',
        'En el mercado, puedes comprar frutas frescas. Los mangos, papayas y piñas son muy sabrosos. También hay puestos con dulces como mazapanes y paletas.',
        "Puedes ver máscaras de luchadores a la venta. A los niños les encanta pretender ser luchadores. Dicen, '¡Viva la lucha libre!'",
        'En el tianguis, hay muchas cosas para comprar. Puedes encontrar juguetes como trompos y muñecas. Los vendedores gritan para llamar tu atención.',
        '¡La comida callejera es la mejor! Puedes comer quesadillas con queso y hongos. No olvides probar los sopes con frijoles y crema. A veces, ves personas vendiendo globos. Los globos tienen forma de animales y personajes de caricaturas. ¡A los niños les encantan!',
        'En el parque, puedes ver niños jugando fútbol. Corren y patean el balón con entusiasmo. Cerca, hay puestos vendiendo helados. A todos les encanta el helado en un día caluroso.',
        'Los domingos, las familias van a Chapultepec. Visitan el zoológico y ven leones, monos y jirafas. Hay botes en el lago donde puedes remar.',
        'La gente también visita los museos. El Museo Nacional de Antropología tiene muchas cosas interesantes para aprender sobre la historia de México.',
        'Caminando por la calle, puedes escuchar mariachis tocando. Llevan grandes sombreros y cantan canciones. La gente se detiene a escuchar y disfrutar de la música.',
        'También hay muchas tiendas. Puedes comprar piñatas para fiestas de cumpleaños. Las piñatas están llenas de dulces y pequeños juguetes. ¡Es muy divertido romperlas!',
        'Por la noche, la ciudad se ilumina. La Torre Latinoamericana brilla intensamente. Puedes ver la ciudad desde lo alto. ¡Se ve increíble!',
    ];

    const index = Array.from(
        { length: frasesEnIngles.length },
        (_, i) => i + 1
    );

    index.sort(() => {
        return Math.random() - 0.5;
    });

    useEffect(() => {
        const addWord = () => {
            const arrayDefaultData = defaultData.split(' ');
            const gamingText = arrayDefaultData.map((word) => ({
                value: word,
                status: null,
            }));
            setDataTyping(gamingText);
        };

        if (dataTyping.length === 0) {
            addWord();
        } else if (textTyping.position > dataTyping.length - 1) {
            // Si llegamos al final del texto, pasamos a la pantalla de EndGame
            if (textTyping.position === dataTyping.length) {
                onGame('endGame');
            } else {
                setTextTyping({ ...textTyping, position: 0 });
            }
        }
    }, [textTyping.position]);

    const handleChangeTyping = (e) => {
        const valueInput = e.target.value;
        if (!valueInput.includes(' ')) {
            setTextTyping({ ...textTyping, value: valueInput });
        } else if (textTyping.value !== '') {
            checkResult();
        }
    };

    const checkResult = () => {
        const dataCheck = dataTyping;
        if (textTyping.value === dataCheck[textTyping.position].value) {
            dataCheck[textTyping.position].status = true;
            onChangeScore(1);
        } else {
            dataCheck[textTyping.position].status = false;
            onChangeScore(-1);
        }
        setDataTyping(dataCheck);
        setTextTyping({ value: '', position: textTyping.position + 1 });
    };
    return (
        <div className='grid grid-rows-2 h-full p-14 text-center gap-3 playing'>
            <ul className='list p-14 text-left rounded-xl'>
                {dataTyping.map((word, index) => (
                    <li
                        key={index}
                        className={
                            word.status === true
                                ? 'true'
                                : word.status === false
                                ? 'false'
                                : ''
                        }
                    >
                        {word.value}
                    </li>
                ))}
                <div className='inputForm'>
                    {index.map((word, index) => (
                        <li
                            key={index}
                            className={
                                word.status === true
                                    ? 'true'
                                    : word.status === false
                                    ? 'false'
                                    : ''
                            }
                        >
                            {frasesEnEspanol[word]}
                        </li>
                    ))}
                </div>
            </ul>
            <div className='inputForm'>
                <input
                    type='text'
                    autoFocus
                    value={textTyping.value}
                    onChange={handleChangeTyping}
                />
            </div>
        </div>
    );
};
export default PlayGame;
