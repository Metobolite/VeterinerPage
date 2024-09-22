import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AnaUrun.css'; // Özel stil dosyanızı buraya ekleyin

// CustomArrow bileşenini burada tanımlıyoruz
const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`custom-arrow ${direction}`}
    aria-label={`Slide ${direction}`}
  >
    {direction === 'left' ? '❮' : '❯'}
  </button>
);

function AnaUrun() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const q = query(collection(db, 'cards'), orderBy('id', 'asc'));
        const querySnapshot = await getDocs(q);
        const cardData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCards(cardData);
      } catch (err) {
        setError("Veri çekme sırasında bir hata oluştu.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) return <p className="text-center py-4 text-blue-950 font-semibold">Yükleniyor...</p>;
  if (error) return <p className="text-center py-4 text-red-500 font-semibold">{error}</p>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />
  };

  return (
    <Container className="slider-container my-8">
      <h2 className='text-center mb-20 font-bold text-4xl text-blue-950'>İndirimli Ürünler</h2>
      <Slider {...settings}>
        {cards.map(card => (
          <div key={card.id} className="w-full flex-shrink-0">
            <Card className="p-6 flex flex-col items-center">
              <Card.Img variant="top" src={card.image} className="mb-4 rounded-lg h-[100px] w-[100px] object-cover" />
              <Card.Body className="flex flex-col justify-between">
                <Card.Title className='text-center font-bold text-xl text-blue-950 mb-2'>{card.title}</Card.Title>
                <Card.Text className='text-center text-gray-700 font-semibold'>
                  {card.text} TL
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default AnaUrun;
