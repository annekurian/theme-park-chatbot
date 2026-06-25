import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar';
import ReviewList from './components/reviews/ReviewList';
import ChatBot from './components/chat/ChatBot';
import ParkPage from './pages/ParkPage';

function App() {
  return (
    <div className="p-4 h-screen w-full overflow-y-auto">
      <div className="flex flex-row min-h-full">
        <NavBar />
        <div className="flex flex-col w-4/5 border-l p-5">
          <Routes>
            <Route path="/" element={<ParkPage />} />
            <Route path="/chat" element={<ChatBot />} />
            <Route path="/reviews" element={<ReviewList productId={4} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
