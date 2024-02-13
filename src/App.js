import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css';
import { ListingPage, Registration } from './pages'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<ListingPage />}/>
                <Route path='/registration' element={<Registration />}/>
                <Route path='*' element={ <Navigate to="/" replace/>} />
            </Routes>
        </div>
    );
}

export default App;