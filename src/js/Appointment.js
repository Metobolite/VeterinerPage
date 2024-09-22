import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Appointment() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDate = date ? dayjs(date).format('DD.MM.YYYY') : '';
    const formattedTime = time ? dayjs(time).format('HH:mm') : '';

    const templateParams = {
      to_name: 'Metin Nebiyev',
      from_name: fullName,
      message: `Full name: ${fullName}\nPhone: ${phoneNumber}\nDate: ${formattedDate}\nTime: ${formattedTime}\nService: ${service}`,
    };

    emailjs
      .send(
        'service_gwi2xge',
        'template_du9vzay',
        templateParams,
        'VZtwbxF_RpfH_cmcP'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('Rezervasyonunuz başarılı!');

          // Form verilerini sıfırlama
          setFullName('');
          setPhoneNumber('');
          setDate(null);
          setTime(null);
          setService('');
        },
        (error) => {
          console.error('FAILED...', error);
          toast.error('Rezervasyon sırasında bir hata oluştu.');
        }
      );
  };

  return (
    <div className="flex justify-center items-center md:mb-12 md:mt-[-60px]">
      <div className="bg-orange-50 p-8 rounded-3xl m-4 mt-12 md:w-[60%] md:h-1/2">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Schedule a visit today</h2>
        <p className="text-center text-blue-800 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-blue-900 mb-1">
                Full name
              </label>
              <TextField
                id="fullName"
                placeholder="Ex. Mahmut Yusuf"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                fullWidth
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-blue-900 mb-1">
                Phone number
              </label>
              <TextField
                id="phoneNumber"
                placeholder="(+123) 456 - 7890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                fullWidth
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-blue-900 mb-1">
                Select date
              </label>
              <div className="relative">
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
                  <DatePicker
                    id="date"
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                    inputFormat="dd.MM.yyyy"
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-blue-900 mb-1">
                Select time
              </label>
              <div className="relative">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    id="time"
                    value={time}
                    onChange={(newValue) => setTime(newValue)}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                    ampm={false}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-blue-900 mb-1">
                Select services
              </label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="training">Pet Training</option>
                <option value="grooming">Pet Grooming</option>
                <option value="checkup">Regular Checkup</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <Button type="submit" className="buttonAppointment">
              Submit
            </Button>
          </div>
          <div style={{ zIndex: 200, position: 'relative' }}>
          <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
        </form>
      </div>
    </div>
  );
}
