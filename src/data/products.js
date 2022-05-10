import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid'

const generateProducts = (nProducts) => {
  let products = [];
  for (let i = 0; i < nProducts; i ++) {
    const data = {
      id: uuid(),
      cliente: `${faker.name.firstName()} ${faker.name.lastName()}`,
      cantidad: 1,
      paquete: faker.lorem.sentence(),
      costo: faker.random.numeric(6),
      estado: 'Pendiente',
    };
    products.push(data);
  }
  return products;
};

export { generateProducts };