const Menu = require('../model/Menu.js')
const MenuItem = require('../model/MenuItems.js');
const mongoose = require('mongoose');


// controllect for get menus
const getMenu = async (req, res) => {
  try {
    const menus = await Menu.find(); 
    res.status(200).json(menus);    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch menu items' });
  }
};

// function for add menue
const addMenu = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ message: 'Name and description are required' });
    }

    const newMenu = new Menu({ name, description });
    await newMenu.save();

    res.status(201).json({ message: 'Menu item added successfully', data: newMenu });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add menu item' });
  }
};

// function for get menu items 
const getMenuItems = async (req, res) => {
  try {
    const menuId = req.params.menuId;

    if (!mongoose.Types.ObjectId.isValid(menuId)) {
      return res.status(400).json({ message: 'Invalid menu ID' });
    }

    const items = await MenuItem.find({ menuId });

    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch items' });
  }
};

//funciton for get menu by Id 
const getMenuById = async (req, res) => {
    try {
    const menu = await Menu.findById(req.params.menuId);
    if (!menu) return res.status(404).json({ message: 'Menu not found' });
    res.status(200).json(menu);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching menu' });
  }
}

// function for add menu Items 
const addMenuItem = async (req, res) => {
  try {
    const { name, description, price, menuId } = req.body;
    console.log(req.body)
    if (!mongoose.Types.ObjectId.isValid(menuId)) {
      return res.status(400).json({ message: 'Invalid menu ID' });
    }

    if (!name || !description || isNaN(price)) {
      return res.status(400).json({ message: 'Name, description, and valid price are required' });
    }

    const newItem = new MenuItem({
      name,
      description,
      price,
      menuId,
    });

    await newItem.save();

    res.status(201).json({ message: 'Menu item added successfully', data: newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add menu item' });
  }
};


module.exports = {
    getMenu,
    addMenu,
    getMenuItems,
    addMenuItem,
    getMenuById
}