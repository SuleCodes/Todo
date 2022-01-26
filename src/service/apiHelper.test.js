import api from './apiHelper';

test('Test GET in array form', async () => {
    const value = await api.get();
    expect((value.constructor.name == "Array"));
})


// test('Test HTTP POST', () => {
//   //Check the satus code returns 200
// })
