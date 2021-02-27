import React from 'react'

function CardPhoto({photo}) {
    console.log(photo);
    return (
        <div className="col-md-4">
            check
            {/* <div className="card" style={{width:"18rem"}}>
                <img src={photo.thumbnailUrl} alt={photo.title}/>
                <div className="card-body">
                <h5 className="card-title">{photo.title}</h5>
                <a className="btn btn-primary" href={photo.url} target="_blank" rel="noopener noreferrer">Link</a>
                </div>
            </div> */}
        </div>
    )
}

export default CardPhoto
