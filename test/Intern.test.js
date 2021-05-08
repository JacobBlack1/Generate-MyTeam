const Intern = require('../lib/Intern')
test("Can insanate Engineer instance", () => {
    const en = new Intern();
    expect(typeof(int)).tobe('object');
});
test("Return Name, Id, Email, Role, School", () => {
    const int = new Engineer("Zion",1,"Zion1488@hotmail.com");
    expect(int.getName()).tobe('Zion');
    expect(int.getId()).tobe(1);
    expect(int.getEmail()).tobe("Zion1488@hotmail.com");
    expect(int.getRole().tobe('Employee'));
});
