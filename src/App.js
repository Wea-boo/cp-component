import logo from './logo.svg';
import './App.css';
import Address from './Component/Profile/Address'
import FullName from './Component/Profile/FullName'
import PhotoProfile from './Component/Profile/PhotoProfile'
import Navbar from './Component/Navbar';

const person = {Firstname: 'Mohamed Ramy',
                Lastname: 'Djillali',
                ProfilePic: '/geoffrey-chevtchenko-n8MNBrZZJ8E-unsplash.jpg',
                Address: '3828 Piermont Dr, Albuquerque, NM'}


function App() {
  return (
    <div className="App">

    <Navbar ProfilePic={person.ProfilePic}/>
    <div>
      
    <PhotoProfile pic={person.ProfilePic} size="200px" className="profile-pic"/>
    <FullName FN={person.Firstname} LN={person.Lastname}/>
    <Address Address={person.Address}/>
    </div>


    </div>
  );
}

export default App;
