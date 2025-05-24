

// Завдання 1

// Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
  name: "Taras Balytskyi",
  age: 15,
  hobby: "footbal",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;


const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
  
}

console.log(user);
console.log(keys);




// Завдання 2

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. 
// Функція повертає число — кількість властивостей.


const filling = {
    name: "Taras",
    age: 27,
    city: "Khmelnytskyi",
  }


function countProps(obj) {
  return Object.keys(obj).length;
}


console.log(countProps(filling)); 




// Завдання 3

// Напиши функцію findBestEmployee(employees), 
// яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). 
// Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const employees = {
    Nazar: 15,
    Ivan: 16,
    Vadim: 14,
    Leon: 34,
  };


 function findBestEmployee(employees) {
  let bestName = "";
  let maxTasks = 0;

  for (const name in employees) {
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      bestName = name;
    }
  }


  return bestName;
}

console.log(findBestEmployee(employees)); 





// Завдання 4

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. 
// Функція рахує загальну суму зарплати працівників і повертає її. 
// Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const salami = {
    Ivan: 500,
    Nazar: 1200,
    Taras: 900,
  };

function countTotalSalary(employees) {
  let total = 0;

  for (const salary in employees) {
    total += employees[salary];
  }
  
  return total;
}

console.log(countTotalSalary(salami)); 





// Завдання 5

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. 
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const production = [
    { name: "Apple", price: 30, quantity: 1250 },
    { name: "Banana", price: 20, quantity: 5 },
    { name: "Nazar", price: 40, quantity: 10000000000000 },
  ];


function getAllPropValues(arr, prop) {
  const result = [];

  for (let i = 0; i < arr.length; i+= 1) {
    const item = arr[i]; 
    const value = item[prop];

   
    if (value !== undefined) {
      result.push(value);
    }
  }
  return result;
}

console.log(getAllPropValues(production, "name")); 
console.log(getAllPropValues(production, "quantity")); 





// Завдання 6

// Напиши функцію calculateTotalPrice(allProdcuts, productName), 
// яка отримує масив об'єктів та ім'я продукту (значення властивості name). 
// Повертає загальну вартість продукту (ціна * кількість).

// Викличи функції для перевірки працездатності твоєї реалізації.

const productionn = [
    { name: "Apple", price: 30, quantity: 1350 },
    { name: "Banana", price: 20, quantity: 5 },
    { name: "Nazar", price: 40, quantity: 10000000000000 },
  ];


function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0; 
  
    for (let i = 0; i < allProducts.length; i+= 1) {
      const product = allProducts[i]; 
  
      if (product.name === productName) {
        
        totalPrice = product.price * product.quantity;
        break; 
      }
    }
  
    return totalPrice; 
  }

  console.log(calculateTotalPrice(productionn, "Apple"));
  console.log(calculateTotalPrice(productionn, "Banana"));
  console.log(calculateTotalPrice(productionn, "Nazar"));  





//   Завдання 7 — додаткове, виконувати не обов'язково

//   Напиши сценарій керування особистим кабінетом інтернет-банку. 
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

const account = {
  balance: 1200,
  transactions: [],

  deposit(amount) {
    this.balance = this.balance + amount;
    this.transactions.push( { type: "deposit", amount: amount } );

  },


  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance = this.balance - amount;
      this.transactions.push({ type: "withdraw", amount: amount });

    } else {
      console.log("Недостатньо грошей");
    }
  }

};

account.deposit(500);
account.withdraw(200);
console.log(account.balance); 
console.log(account.transactions);
