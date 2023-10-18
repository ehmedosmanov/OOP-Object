//Task 1
// const arr = ['Salam','Heyva','Mercedes']

// class StringArray {
//     constructor(data) {
//         this.data = data
//     }

//     Search(value) {
//      return this.data.includes(value)
     
//     }
// }

// let arr2 = new StringArray(arr)

// console.log(arr2.Search('Heyva'))

//Task 2 
// class Bolenler {
//     constructor(num) {
//         this.num = num
//     }
//     FilterBolenler(num) {
//         let output = []
//         for (let i = 2; i < num; i++) {
//             num % i === 0 ? output.push(i) : null
//         }
//         return output
//     }
// } 

// let arr2 = new Bolenler(20)
// console.log(arr2.FilterBolenler(20));

//Task 3
// class Admin {
//     constructor(obj) {
//         this.obj = obj
//     }

//     Login(username,password) {
//         if(this.obj.FirstName === username && this.obj.password === password) {
//             alert("daxil ol");
//         }
//         else {
//             alert("daxil ola bilmersiz");
//         }
//     }
// }

// const obj = {
//     FirstName: 'ehmed',
//     password: '123444'
// }

// let username = prompt("username daxil ele")
// let password = prompt("password daxil ele")

// const admin = new Admin(obj)

// admin.Login(username,password)

//Task 4
// class Human {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
// }


// class Programmer extends Human {
//     constructor(name,age,work) {
//         super(name,age);
//         this.work = work
//     }
  
// }

// const human = new Programmer('ehmed',19,"ghg")

// console.log(human);





