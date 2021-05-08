const Engineer = require("../lib/Engineer");

test("Can the new Engineer be instantiated", () => {
    const eng = new Employee("Zion", 2, "Zionthekid@yahoo.com","Zioncodes")
    expect(typeof(em)).tobe("object");
    expect(em.name).tobe("Remy");
    expect(em.id).tobe(1);
    expect(em.email).tobe("Zionthekid@yahoo.com");
});
test("Name returned", () => {
  const em = new Employee("Remy", 1, "Zionthekid@yahoo.com");
  expect(em.getName(this.name)).toBe("Remy");
});
test("Id value is passed", () => {
  const em = new Employee("Remy", 1, "Zionthekid@yahoo.com");
  expect(em.getId(this.id)).toBe(1);
});
test("Email value is passed", () => {
  const em = new Employee("Remy", 1, "Zionthekid@yahoo.com");
  expect(em.getEmail(this.email)).toBe("Zionthekid@yahoo.com");
});
test("Role of Employee", () => {
  const em = new Employee("Remy", 1, "Zionthekid@yahoo.com");
  expect(em.getRole(this.id)).toBe("Employee");
});