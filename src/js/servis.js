import { Card, CardContent } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';

const servis = () => {
    return (
        <section id="servis" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Servislerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Sağlık Muayeneleri', text: 'Sağlık muayeneleri ile evcil hayvanlarınızın sağlığını koruyun.',src: '/img/cat.png' },
                { name: 'Aşılar', text: 'Aşılar ile hastalıklara karşı korunma.',src: '/img/cat1.png' },
                { name: 'Ameliyat', text: 'Gerekli ameliyatlar için uzman ekibimizle yanınızdayız.',src: '/img/cat2.png' },
                { name: 'Diş Bakımı', text: 'Evcil arkadaşlarınızın diş sağlığı için düzenli bakım.',src: '/img/dog.webp' },
                { name: 'Acil Bakım', text: 'Acil durumlar için 7/24 hizmetinizdeyiz.',src: '/img/dog.png' },
                { name: 'Evcil Hayvan Bakımı', text: 'Evcil hayvanlarınız için profesyonel bakım.',src: '/img/dog2.png' }
              ].map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <img src={service.src} alt={service.name} width={200} height={200} className="mb-4 rounded-lg" />
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-600">{service.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    );
}
 
export default servis;