import Gallery from './components/Gallery';
import './App.css';

function App() {

  const galleryImages = [
    {
      img: 'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      img: "https://images.pexels.com/photos/1431465/pexels-photo-1431465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/17811/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/1353126/pexels-photo-1353126.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/3646108/pexels-photo-3646108.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]

  return (
    <div className="App">
      <br />
      <div class = "container">
        <strong>Responsive Photo Gallery</strong>
      </div>
      <br /><br />

      <Gallery
        galleryImages={galleryImages}
      />

      <br /><br />
      <div>- Haneesha Gandra -</div>
    </div>
  );
}

export default App;
