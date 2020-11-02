function Employee(id, name, salary) {
    //this -> new object
    this.id = id;
    this.name = name;
    this.salary = salary;
}
Employee.prototype.city = 'Bangalore';
Employee.prototype.display = function () {
    console.log(this.id, this.name, this.salary);
}