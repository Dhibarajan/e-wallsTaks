import axios from 'axios'
export const photoReducer = (state, action)=>{
    switch (action.id) {
        case "PHOTO_ID":{
            axios.get('https://jsonplaceholder.typicode.com/photos')
        }
            
                
                
            
            break;
    
        default:
            return state
            break;
    }
}