import React from 'react';
import { useSelector} from 'react-redux';

const MeaningCard = () => {
    const words = useSelector(state => state.words);
    console.log(words)
        return( 
            <div>
                {words.map((meanings) => {
                    return(
                        <div key = {meanings.id}>
                            {meanings.definitions}
                        </div>
                    )
                })}
            
            </div>

        )
        
}

export default MeaningCard;