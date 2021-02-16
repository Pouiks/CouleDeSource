const express = require('express');
const mainController = require('./controllers/mainController');
const categoryController = require('./controllers/categoryController');
const loginController = require('./controllers/loginController');
const adminController = require('./controllers/adminController');
const productController = require('./controllers/productController');
const cartController = require('./controllers/cartController');
const adminUserController = require('./controllers/adminUserController');
const adminProductController = require('./controllers/adminProductController');
const adminCategoryController = require('./controllers/adminCategoryController');

const adminMW = require('./middlewares/adminMW');

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/product/:id', productController.productPage);



router.get('/category', categoryController.categoryPage);
router.get('/category/:id', categoryController.productByCategory);


router.get('/createAccount', loginController.signInUpPage);
router.post('/createAccount', loginController.signUpControlPage)

router.get('/login', loginController.logInPage)
router.post('/login', loginController.doLogin);

//DECONNEXION
router.get('/logout', loginController.logout);


// router.get('/admin', adminMW, adminController.admin);

// page panier
router.get('/cart', cartController.cartPage);

// route pour ajouter un article au panier
router.get('/cart/add/:id', cartController.addToCart);
// route pour supprimer un article du panier
router.get('/cart/delete/:id', cartController.deleteToCart );


router.get('/admin', adminMW, adminController.admin);
// Router ADMIN partie => user
router.get('/admin/adminUser', adminMW, adminUserController.adminUser);
router.post('/admin/adminUser/add', adminMW, adminUserController.addOneUser);
router.post('/admin/adminUser/select', adminMW, adminUserController.selectOneUser);
router.post('/admin/adminUser/update', adminMW, adminUserController.updateUser);
router.post('/admin/adminUser/delete', adminMW, adminUserController.deleteOneUser);

// Router ADMIN partie => product
router.get('/admin/adminProduct', adminMW, adminProductController.productAdmin)
router.post('/admin/adminProduct/add', adminMW, adminProductController.addOneProduct);
router.post('/admin/adminProduct/select', adminMW, adminProductController.selectOneProduct);
router.post('/admin/adminProduct/update', adminMW, adminProductController.updateProduct);
router.post('/admin/adminProduct/delete', adminMW, adminProductController.deleteOneProduct);
// router.post('/admin/admi')

//Router ADMIN partie => Category
router.get('/admin/adminCategory', adminMW, adminCategoryController.category);
router.post('/admin/adminCategory/add', adminMW, adminCategoryController.addCategory);
router.post('/admin/adminCategory/select', adminMW, adminCategoryController.selectOneCategory);
router.post('/admin/adminCategory/update', adminMW, adminCategoryController.updateCategory);
router.post('/admin/adminCategory/delete', adminMW, adminCategoryController.deleteOneCategory);


// router.use(mainController.notFound);


module.exports = router;
