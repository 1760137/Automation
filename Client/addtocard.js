
import { Selector } from 'testcafe';

fixture `Quick view`
    .page `https://test.jccomputing.sunny.net.vn/home`; 

// check modal được mở có ok hay không :  .expect(Selector('.modal-content').visible).ok()

// thêm hàng khi giỏ hàng trống
test('ADD_001', async t =>{
    let getnumber="";
    await t
    .click('main [alt="product_img"]')
    .click(Selector("[type='number']")) 
    .wait(5000)
    .pressKey('backspace')
    .pressKey('0')
    .click(Selector(".btn-addtocart"),)
    getnumber=Selector(".mini-cart-trigger.nav-link.pr-3.pr-lg-0 > .cart-count.cart-count--mobile").value
    await t
    .wait(2000)
    .click(Selector("[type='number']"))
    .pressKey('backspace')
    .typeText(Selector("[type='number']"),"6")
    .click(Selector(".btn-addtocart"))
    .wait(2000)
    .expect(Selector(".mini-cart-trigger.nav-link.pr-3.pr-lg-0 > .cart-count.cart-count--mobile").innerText).Eql(getnumber+3)
});

// thêm hàng vào giỏ
test('ADD_002', async t =>{
    await t
    .click('main [alt="product_img"]')
    .wait(5000)   
    .click(Selector("[type='number']")) 
    .pressKey('backspace')
    .pressKey('2')
    .click(".btn.btn-addtocart.btn-fill-out > div")
    let number_cart=await Selector(".mini-cart-trigger.nav-link.pr-3.pr-lg-0 > .cart-count.cart-count--mobile").exists;
    let number=0;
    if(number_cart==false) // giỏ kh có hàng
    {
        number=0; 
    }
    else // giỏ có hàng -> lấy sl hàng hiện tại của giỏ
    {   
        number=await Selector(".mini-cart-trigger.nav-link.pr-3.pr-lg-0 > .cart-count.cart-count--mobile").innerText
    }
    console.log("Giỏ hàng hiện tại = "+ number .toString())
    await t
    .click(Selector("[type='number']")) 
    .pressKey('backspace')
    .pressKey('2')
    .doubleClick(".cart-plus-minus > button:nth-of-type(2)")    
    .click(".btn.btn-addtocart.btn-fill-out > div")
    let so=(number*1)+4
    await t
    .expect(Selector(".mini-cart-trigger.nav-link.pr-3.pr-lg-0 > .cart-count.cart-count--mobile").innerText).eql(so.toString())
});








