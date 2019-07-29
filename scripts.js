let customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
  { id: 4, name: 'shep', email: 'shep@gmail.com'},
 ];

// Function to add customer to list
const addToCustomerList = (customer) => {
  // Get parent
  const customerList = document.querySelector('#customerList');

  // Create customer elements
  const infoContainer = document.createElement('div');
  const customerInfo = document.createElement('h3');
  const destroyButton = document.createElement('button');

  // Set values
  customerInfo.innerText = customer.name + " " + customer.email
  destroyButton.innerText = "Destroy"

  // Append child to parent
  infoContainer.appendChild(customerInfo);
  infoContainer.appendChild(destroyButton);
  customerList.appendChild(infoContainer);

  // Assign class depending on vip or not
  if (customer.isVIP) {
    infoContainer.classList.add('vip')
    }
  else {
    infoContainer.classList.add('regular')      
  }
}

// Function to update number of VIPS
const updateNumOfVips = (customers) => {
  const vipDisplay = document.querySelector('.Status')
  const vips = customers.filter(customer => (customer.isVIP)) 
  vipDisplay.innerText = "Customers: " + vips.length + " VIPS"
}

 //Add existing customers
customers.forEach(customer => {
    addToCustomerList(customer)
  })
updateNumOfVips(customers)

// Take input, add to list and array
const inputForm = document.querySelector('#customerForm')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const vipCheckbox = document.querySelector('#vip')

inputForm.addEventListener('submit', (ev) => {
  ev.preventDefault()
  customer = {name:inputName.value, email:inputEmail.value, isVIP:vipCheckbox.checked}
  addToCustomerList(customer)
  customers.push(customer)
  updateNumOfVips(customers)
})

// Delete if destroy button is clicked.
const customerList = document.querySelector('#customerList')
customerList.addEventListener('click', (ev) => {
  ev.preventDefault()
  const li = ev.target.parentElement
  customerList.removeChild(li)
  updateNumOfVips(customers)
})

