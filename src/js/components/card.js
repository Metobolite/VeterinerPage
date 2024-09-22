import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { collection, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import Container from 'react-bootstrap/Container';

function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
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

  const handleDelete = async (cardId) => {
    try {
      const docRef = doc(db, 'cards', cardId);
      
      // Belgeyi sil
      await deleteDoc(docRef);
      
      // Silme işlemi tamamlandığında, karta ilişkin veriyi güncelle
      setCards(prevCards => prevCards.filter(card => card.id !== cardId));

      console.log("Belge başarıyla silindi:", cardId);
    } catch (err) {
      setError("Veri silme sırasında bir hata oluştu.");
      console.error("Silme hatası:", err);
    }
  };

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container className="d-flex flex-wrap justify-content-center">
      {cards.map(card => (
        <Card key={card.id} style={{ width: '18rem', margin: '1rem', borderRadius: '10px' }}>
          <Card.Img variant="top" src={card.image} style={{ height: '180px', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              {card.text}
            </Card.Text>
            <Button variant="primary" onClick={() => handleDelete(card.id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default CardList;
