const iceCreamList = document.querySelector('#iceCreamList');

const createIceCream = document.querySelector('#createIceCream');
const deleteIceCream = document.querySelector('#deleteIceCream');
const addToppings = document.querySelector('#addToppings');
const deleteToppings = document.querySelector('#deleteTopping');




createIceCream.addEventListener('click', () => {

});


let output = '';
const url = 'https://crudcrud.com/api/8b25b7bf8acd48c694935f90eb63c6b8/icecream';

fetch(url)
    .then(res => res.json())

    .then(data => {
        data.forEach(post => {
            output += `
            <div class="card">
            <div class="card-body">
                <h2 class="card-title">${post.title}</h2>
                <p class="card-title"></p>
                <br>
                <div class="row">
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="toppings" class="form-label">Add Toppings:</label>
                            <input id="toppings" type="text" class="form-control" placeholder="sprinkles, syrup, candy etc.">
                            <br>
                            
                        </div>

                    </div>
                    <div class="col-sm">
                        <div class="form-group">
                            <button id="addToppings" type="button" class="btn btn-primary btn-sm">Add Topping</button>
                        </div>
                        
                    </div>

                </div>

                <div class="row align-items-center">
                    <div class="col-sm">
                        <p>new toppings here</p>

                    </div>
                    <div class="col-sm">
                        <button id="deleteTopping" type="button" class="btn btn-danger btn-sm">delete</button>
                    </div>
                </div>
                <br>
                
                <button id="deleteIceCream" type="button" class="btn btn-danger btn-sm">Delete Ice Cream</button>
                
            </div>
        </div>
            `;
        });
        iceCreamList.innerHTML = output;
    })