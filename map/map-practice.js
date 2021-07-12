const student = [{ 'id': 21, 'name': 'Dipjol' },
                 { 'id': 31, 'name': 'purnima' },
                 {'id': 41, 'name': 'shabana'},
                 {'id': 40, 'name': 'omar sunny'}]

const onlyName = []

// for(let i = 0; i < student.length; i++){
//     const name = student[i];
//     onlyName.push(name.name);
// }

student.map((name)=>{
    n = name.name;
    onlyName.push(n);
})
console.log(onlyName);