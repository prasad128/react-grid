import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

function Home() {
    const [cards, setCards] = useState(null)
    
    useEffect(() => {
        // axios.get('https://fakestoreapi.com/products?limit=5').then((response) => {
        //     setCards(response.data);
        //   });
        async function getCards() {
            try {
              const response = await axios.get('https://fakestoreapi.com/products?limit=12');
              console.log({response: response.data});
              setCards(response.data)
              console.log({cards});
            } catch (error) {
              console.error(error);
            }
          }
        getCards()
    }, [setCards])

    return (
            <div className="grid grid-cols-1 gap-4 my-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    cards && cards.map(card => {
                        return (
                            <div key={card.id} className="rounded px-2 py-1 border-2">
                                    <Link to={`/cardDetails/${card.id}`}>
                                    <img src={card.image} alt="product_img"/>
                                <div className="px-2 py-2">
                                <div className="font-semibold text-lg">{card.title}</div>
                                <div className="">{card.category}</div>
                                {/* <div className="truncate text-sm">{card.description}</div> */}
                                </div>
                                    </Link>
                            </div>
                        )
                    })
                }
      </div>
    )
}

export default Home
