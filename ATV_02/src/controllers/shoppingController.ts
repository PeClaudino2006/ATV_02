import { Request, Response } from 'express';
import ShoppingItem from '../models/shoppingModel';

export const getItems = async (req: Request, res: Response): Promise<void> => {
    const items = await ShoppingItem.find();
    res.json(items);
};

export const createItem = async (req: Request, res: Response): Promise<void> => {
    const { name, price } = req.body;
    const newItem = new ShoppingItem({ name, price });
    await newItem.save();
    res.status(201).json(newItem);
};

export const updateItem = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, price } = req.body;
    const update = await ShoppingItem.findByIdAndUpdate(id, {name, price}, {new: true});
    res.json(update);
};

export const deleteItem = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params;
    await ShoppingItem.findByIdAndDelete(id);
    res.json({ message: 'Item deletado com sucesso'});
};
