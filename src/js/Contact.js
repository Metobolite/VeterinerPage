import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MapPin from '@mui/icons-material/LocationOn';
import Phone from '@mui/icons-material/Phone';
import Mail from '@mui/icons-material/Mail';
import Clock from '@mui/icons-material/AccessTime';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 ">
            <h2 className="text-3xl font-bold mb-8 text-center">İletişime Geçin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">İletişime Geçin</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      <span>Üçevler, 955. Sk. no:1 D:114, 34513 Esenyurt/İstanbul, Türkiye</span>
                    </li>
                    <li className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-primary" />
                      <span>+90 538 895 28 60</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-primary" />
                      <span>info@veterineresenyurt.com</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      <span>Pt-Cu:08:00-18:00, Ct: 09:00-16:00, Pzt: Kapalı</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Lokasyon</h3>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d28.670017315318!3d41.03696297929957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabf1c1c1c1c1f%3A0x1c1c1c1c1c1c1c1!2s%C3%9C%C3%A7evler%2C%20955.%20Sk.%20no%3A1%20D%3A114%2C%2034533%20Esenyurt%2F%C4%B0stanbul%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2str!4v1631234567890!5m2!1sen!2str" 
                      width="600"
                      height="300" 
                      className="w-full h-full object-cover"
                      allowFullScreen="" 
                      loading="lazy"
                      title="Google Maps Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
     );
}
 
export default Contact;