import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
function Card() {
    const { id } = useParams();
    const [card, setCard] = useState(null)
    useEffect(() => {
        async function getCards() {
            try {
              const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
              console.log({response: response.data});
              setCard(response.data)
              console.log({card});
            } catch (error) {
              console.error(error);
            }
          }
        getCards()
    }, [setCard])

    return (
        <div className="flex justify-center items-center h-screen">
            {
                card && (
                    <div className="rounded flex px-2 py-1 border-2 w-2/3"> 
                    <div className="px-2 py-1">
                                <img src={card.image} width="100%" height="30%" alt="product_img"/>
                        </div>   
                                <div className="px-4 my-4 flex flex-col">
                                    <div className="font-semibold text-xl">{card.title}</div>
                                    <div className="mt-2 text-lg">{card.category}</div>
                                    <div className=" text-sm flex-1">{card.description}</div>
                                    
                                    <Link to={'/'}>
                                <div className="text-right text-blue-500 flex-1 text-sm mt-2">back to home</div>
                                    </Link>
                                    
                                </div>
                    </div>
                )
            }
        </div>
    )
}

export default Card
