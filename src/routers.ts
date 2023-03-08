import { FruitsController } from './controllers/fruits.controller';
export const Routers = [
    { route: '/fruits', controller: new FruitsController() },
];