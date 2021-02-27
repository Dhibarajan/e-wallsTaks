import React from 'react';
// import './App.css';
import { Switch, Route } from 'react-router-dom';
import Album from './component/album/Album';
import axios from 'axios';
import Photos from './component/photo/Photos';



function App() {
const [albums, setAlbums] = React.useState([]);
const [photos, setPhoto] = React.useState([]);
const [albumID, setAlbumID] = React.useState()
const getData = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(data=>setAlbums(data.data))
    .catch(err=>console.log('Error: ' + err))

    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(data=>setPhoto(data.data))
    .catch(err=>console.log('Error'+ err))
}
  React.useEffect(()=>{
    getData()
  },[])

  const AlbumId = (id)=>{
    setAlbumID(id);
  }
  return (
    <div className="container p-5">
      <Switch>
        <Route exact path="/">
          <Album albums={albums} AlbumId={AlbumId}/>
        </Route>
        <Route exact path="/photos">
          <Photos photos={photos} albumID={albumID}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
