const cardsRouter = require('express').Router();
const { getCards, addCard, deleteCard, likeCard, dislikeCard} = require('../controllers/cards.js');

cardsRouter.get('/cards', getCards);
cardsRouter.post('/cards', addCard);
cardsRouter.delete('/cards/:cardId', deleteCard);
cardsRouter.put('/cards/:cardId/likes', likeCard);
cardsRouter.delete('/cards/:cardId/likes', dislikeCard);

module.exports = cardsRouter;