import axios from 'axios';

function load(){
    return function(dispatch){
        axios
            .get('http://localhost:3030/products')
            .then(response => response.data)
            .then(function(products){
                const action = { type: "INIT_PRODUCTS", payload: products };
                dispatch(action);
            });
    }
}

export default load;