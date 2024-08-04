const Store = require('../models/Store');

const getStores = async (req, res) => {
  const stores = await Store.find();
  res.status(200).send(stores);
};

const addStore = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const store = new Store({ name, email, address });
    await store.save();
    res.status(201).send(store);
  } catch (error) {
    res.status(400).send(error);
  }
};

const rateStore = async (req, res) => {
  try {
    const { rating } = req.body;
    const store = await Store.findById(req.params.id);
    if (!store) {
      return res.status(404).send({ error: 'Store not found' });
    }
    store.rating = rating;
    await store.save();
    res.send(store);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { getStores, addStore, rateStore };
