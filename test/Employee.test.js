const Employee = require("../lib/Employee");

test("Can the new Employee be instantiated", () => {
    const em = new Employee("Remy", 1, "RemyD1738@gmail.com")
    expect(typeof(em)).tobe("object");
    expect(em.name).tobe("Remy");
    expect(em.id).tobe(1);
    expect(em.email).tobe("RemyD1738@gmail.com");
});
test("Name returned", () => {
  const em = new Employee("Remy", 1, "RemyD1738@gmail.com");
  expect(em.getName(this.name)).toBe("Remy");
});
test("Id value is passed", () => {
  const em = new Employee("Remy", 1, "RemyD1738@gmail.com");
  expect(em.getId(this.id)).toBe(1);
});
test("Email value is passed", () => {
  const em = new Employee("Remy", 1, "RemyD1738@gmail.com");
  expect(em.getEmail(this.email)).toBe("RemyD1738@gmail.com");
});
test("Role of Employee", () => {
  const em = new Employee("Remy", 1, "RemyD1738@gmail.com");
  expect(em.getRole(this.id)).toBe("Employee");
});