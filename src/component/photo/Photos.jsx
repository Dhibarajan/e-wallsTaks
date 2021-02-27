import React from 'react'
// import { useSelector } from 'react-redux'
function Photos({photos, albumID}) {
    // const store = useSelector(state=>state)
    // console.log(store);

    const filterPhoto = photos.filter(photos=>photos.albumId === albumID)
    console.log(filterPhoto);
    
    
    return (
        <div className="row">
            {
                filterPhoto.map((photo,index)=>(
                    <div className="col-md-4" key={index}>
                        <div className="card" style={{width:"18rem"}}>
                            <img src={photo.thumbnailUrl} alt={photo.title}/>
                            <div className="card-body">
                                <h5 className="card-title">{photo.title}</h5>
                                <a className="btn btn-primary" href={photo.url} target="_blank" rel="noopener noreferrer">Link</a>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Photos
