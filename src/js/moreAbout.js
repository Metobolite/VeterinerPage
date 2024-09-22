import { Card, CardContent } from "@mui/material";

const moreAbout = () => {
    return (
        <div id="moreAbout" className="moreAbout">
            <div className="flex flex-col justify-center items-center md:mt-20">
                <section className="bg-blue-100 py-20 rounded-3xl">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Müşterilerimizin Geri Dönüşleri.</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Ahmet K.', text: 'Esenyurt Veteriner personeli harika! Köpeğimin son ameliyatı sırasında ona çok iyi baktılar.' },
                            { name: 'Rümeysa T.', text: 'Kedilerimi buraya getirirken her zaman kendimi güvende hissediyorum. Veterinerler bilgili ve ilgili.' },
                            { name: 'Halil A.', text: 'Acil bakım evcil hayvanımın hayatını kurtardı. Hızlı müdahaleleri ve uzmanlıkları için ekibe yeterince teşekkür edemiyorum.' }
                        ].map((testimonial, index) => (
                            <Card key={index}>
                            <CardContent className="p-6">
                                <p className="mb-4">"{testimonial.text}"</p>
                                <p className="font-semibold">- {testimonial.name}</p>
                            </CardContent>
                            </Card>
                        ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
     );
}
 
export default moreAbout;