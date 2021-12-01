var student = {
  name: {
    first: "Kabir",
    Middle: "",
    last: "Sagar",
  },
  sId: 01,
  phone: 99999,
  email: "",
  Course: ["React", "Java", "DSA"],
};

console.log(student);
delete student.phone;
delete student.name.Middle;

console.log(student);
