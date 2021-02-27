import React from 'react';
import { Link } from 'react-router-dom';
// import { albuId } from '../../action/albumAction';
// import { useDispatch} from 'react-redux';
 

function Album({albums,AlbumId}) {
    
    // const dispatch = useDispatch()
    // dispatch(albuId(parseInt(albumId)));
    return (
            <div className="row">
            {albums.map((album,index)=>(
                <div className="col-md-4" key={index}>
                    
                    <div className="card" style={{style:"18rem",margin:"10px"}}>
                        <div className="card-body">
                            <Link to="/photos" style={{textDecoration:"none"}}><h5 className="card-title" style={{cursor:"pointer"}}onClick={()=>AlbumId(album.userId)}>{album.title}</h5></Link>
                        </div>
                    </div>
                </div>
            ))}
            </div>
    )
}

export default Album
