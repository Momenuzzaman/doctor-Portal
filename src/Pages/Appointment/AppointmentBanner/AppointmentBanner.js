
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    ;
    return (
        <header className="my-6">
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="" className="lg:w-1/3 rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppointmentBanner;