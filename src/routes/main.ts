import { Router } from 'express';
import { prisma } from '../libs/prisma';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

// usar como exemplo para mostrar o prisma funcionando
/*
mainRouter.get('/test', (req, res) => {
    prisma.user.findFirst
});
*/

// depois de ajustar o watch do tsx, usar o código abaixo para mostrar funcionando
/*
mainRouter.get('/test', (req, res) => {
    res.json({ testando: true });
});
*/

mainRouter.post('/user', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@example.com'
        }
    });

    res.json(user);
});