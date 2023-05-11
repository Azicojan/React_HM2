
import {useState} from 'react';
import styles from './drinkListStyle.module.css'


function MyList() {
    const [drinks, setDrinks] = useState(['coffee ', 'tea ', 'soda ', 'beer ']);
    const [newDrink, setNewDrink] = useState('')
    
    function addDrink() {
        if(newDrink.trim() !== '') {
            setDrinks(prevDrinks => [...prevDrinks, newDrink.trim()]);
            setNewDrink('');
        }
    }

    return (
        <div>
            <ul className={styles.drinkList}>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul>
            <div className={styles.addDrinkContainer}>

              <input type='text' value={newDrink} onChange={event => setNewDrink(event.target.value)} />
              <button onClick={addDrink}>Add Drink</button>

            </div>
            
            
        </div>
    )

}

export default MyList