import React, { useState } from 'react';
import { db, storage } from '../../firebase/firebase';
import { collection, setDoc, doc, getDocs, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function AddCard() {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (image) {
                // Storage Referansı Oluşturma
                const storageRef = ref(storage, `images/${image.name}`);

                // Dosyayı Firebase Storage'a Yükleme
                await uploadBytes(storageRef, image);

                // Yüklenen Resmin URL'sini Alma
                const imageUrl = await getDownloadURL(storageRef);

                // En yüksek ID'yi Bulma ve Yeni ID Oluşturma
                const q = query(collection(db, 'cards'), orderBy('id', 'desc'));
                const querySnapshot = await getDocs(q);
                const highestId = querySnapshot.docs.length > 0 ? parseInt(querySnapshot.docs[0].data().id) : 0;
                const newId = String(highestId + 1);

                // Firestore'a Veriyi Kaydetme
                const docRef = doc(db, 'cards', newId);
                await setDoc(docRef, {
                    id: newId,
                    image: imageUrl,
                    title: title,
                    text: text,
                });

                setImage(null);
                setTitle('');
                setText('');
            }
        } catch (err) {
            setError("Veri ekleme sırasında bir hata oluştu.");
            console.error("Ekleme hatası:", err);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Form onSubmit={handleSubmit} style={{ width: '400px', backgroundColor: '#1e3a8a', padding: '20px', borderRadius: '10px' }}>
                <Form.Group className="mb-3" controlId="formImage">
                    <Form.Label style={{ color: '#fff' }}>Image File</Form.Label>
                    <Form.Control type="file" onChange={handleImageChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label style={{ color: '#fff' }}>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formText">
                    <Form.Label style={{ color: '#fff' }}>Text</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </Form.Group>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <Button variant="primary" type="submit" className="w-32 bg-blue-800 border-blue-700">
                    Add Card
                </Button>
            </Form>
        </Container>
    );
}

export default AddCard;
