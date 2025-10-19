let person = {
    name: "Nguyễn Văn A",
    age: 25,
    address: "Hà Nội",
    phone: "0987654321"
};
console.log("Tên:", person.name);
console.log("Tuổi:", person.age);
console.log("Địa chỉ:", person.address);
console.log("SĐT:", person.phone);

let student = {
    id: 1,
    name: "Nguyen Van A",
    gender: "Male",
    age: 20,
    mark: 8
};


let students = [student];
while (true) {
    let confirmAdd = confirm("Bạn có muốn thêm sinh viên mới không?");
    if (!confirmAdd) break;

    let newStudent = {
        id: Number(prompt("Nhập ID sinh viên:")),
        name: prompt("Nhập tên sinh viên:"),
        gender: prompt("Nhập giới tính (Male/Female):"),
        age: Number(prompt("Nhập tuổi:")),
        mark: Number(prompt("Nhập điểm:"))
    };
    students.push(newStudent);
    alert("✅ Đã thêm sinh viên mới!");
}

console.log("Danh sách sinh viên:");
for (let s of students) {
    console.log(
        `ID: ${s.id}, Name: ${s.name}, Gender: ${s.gender}, Age: ${s.age}, Mark: ${s.mark}`
    );
}
let maxStudent = students[0];
for (let s of students) {
  if (s.mark > maxStudent.mark) maxStudent = s;
}
console.log("Sinh viên có điểm cao nhất:");
console.log(`ID: ${maxStudent.id}`);
console.log(`Name: ${maxStudent.name}`);
console.log(`Gender: ${maxStudent.gender}`);
console.log(`Age: ${maxStudent.age}`);
console.log(`Mark: ${maxStudent.mark}`);