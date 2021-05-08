const Manager = require('../lib/Engineer')
test("Can insanate Manager instance", () => {
    
    const en = new Manager();
    expect(typeof(ma)).tobe('object');
});
test("Return Name, Id, Email, Role, office Number", () => {
    
    const ma = new Engineer("Leo",1,"Leomania@gmail.com");
    expect(ma.getName()).tobe('Leo');
    expect(ma.getId()).tobe(1);
    expect(ma.getEmail()).tobe("Leomania@gmail.com");
    expect(ma.getRole().tobe('Employee'));
    expect(ma.getOfficeNumber()).tobe(123);
});
