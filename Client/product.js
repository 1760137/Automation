import { Selector } from 'testcafe';

fixture `product`
    .page `https://beta.jccomputing.sunny.net.vn/product`; 

// test tính năng xem nhanh sản phẩm
test('PRO_001', async t => {
  await t
  // show chrome fullscreen
  .maximizeWindow()
  // di chuột vào hình ảnh 
  .hover(Selector("div:nth-of-type(1) > .product-grid > .product-grid__image > div:nth-of-type(1)")) 
  // click Quickview button
  .click("div:nth-of-type(1) > .product-grid > .product-grid__image > .product-grid__action-box > ul  .button-quickview.d-lg-block.d-none")
  // check modal được mở có ok hay không :  
  .expect(Selector('.modal-content').visible).ok()
  // .wait(5000)
  // // click (+)
  // .click(".cart-plus-minus > button:nth-of-type(2)")
  // // add to cart
  // .click(".btn.btn-addtocart.btn-fill-out.button-add-modal > div")
  // // click vùng đen
  // .click(".modal-open > div[role='dialog']")
  // // check giỏ hàng !=0
  // .expect(Selector("[class='nav-link mini-cart-trigger pr-3 pr-lg-0'] .cart-count--mobile").innerText).notEql("0","Fail")
 
});
// Kiểm tra tính năng search trong Filter (search sp có trong dm)
test ('PRO_002', async t => {
  const input_search= ".sidebar.show [placeholder='Search']"
  const input_find=".sidebar.show .search-btn"
  const input_text="type c"
  const maxp= '485109'
  const minp= '1'
  const replace_inputtext= input_text.replace(" ","+") // chuyển inputtext có " " thành +
  const url_search= "https://beta.jccomputing.sunny.net.vn/product?sort=&name=" 
  + replace_inputtext + "&minp=" + minp + "&maxp=" + maxp
  const items= Selector(".shop-products .grid [class='space-mb--30']")
  await t
    .maximizeWindow()
    .typeText(input_search,input_text)
    .typeText(".sidebar.show [placeholder='0']",minp)
    .typeText(".sidebar.show [placeholder='51096333']", maxp)
    .click(input_find)
    const location= await t.eval(() => window.location.href);
  await t
    .expect(location).eql(url_search)
    .expect(items.count).notEql(0) 
});

// Kiểm tra tính năng search trong Filter (search sp không có trong dm)
test ('PRO_003', async t => {
  const input_search= ".sidebar.show [placeholder='Search']"
  const input_find=".sidebar.show .search-btn"
  const input_text="bdbghfhg"
  const maxp= '485109'
  const minp= '1'
  const replace_inputtext= input_text.replace(" ","+") // chuyển inputtext có " " thành +
  const url_search= "https://beta.jccomputing.sunny.net.vn/product?sort=&name=" 
  + replace_inputtext + "&minp=" + minp + "&maxp=" + maxp
  const items= Selector(".shop-products .grid [class='space-mb--30']")
  await t
    .maximizeWindow()
    .wait(20000)
    .typeText(input_search,input_text)
    .typeText(".sidebar.show [placeholder='0']",minp)
    .typeText(".sidebar.show [placeholder='51096333']", maxp)
    .click(input_find)
    const location= await t.eval(() => window.location.href);
  await t
    .expect(location).eql(url_search)
    .expect(items.count).eql(0) 
    .wait(15000)
});

// kiểm tra sort HightoLow
test("PRO_004", async (t) => {
  const sort = "priceHighToLow";
  const url_sort =
    "https://beta.jccomputing.sunny.net.vn/product?" + "sort=" + sort;
  const select_sort = ".ant-select-selector";
  const item_HighToLow = "div[title='Price High to Low'] > .ant-select-item-option-content";
  await t.maximizeWindow().wait(10000).click(select_sort).click(item_HighToLow);

  const location = await t.eval(() => window.location.href);
  await t.expect(location).eql(url_sort);

  const item1 = await Selector("div:nth-of-type(1) > .product-grid > .product-grid__info > .product-price > .price").innerText;
  const item12 = await Selector("div:nth-of-type(12) > .product-grid > .product-grid__info > .product-price > .price").innerText;
  const sub_item1= Number(Number(item1.replace(/\$\s?|(,*)/g, '')).toFixed(2))
  const sub_item12= Number(Number(item12.replace(/\$\s?|(,*)/g, '')).toFixed(2))

  console.log('item 1: '+sub_item1)
  console.log('item 12: '+sub_item12)
  await t.expect(sub_item1).gte(sub_item12);
});

// kiểm tra sort Low to High

test('PRO_005', async t=> {
  const sort='priceLowToHigh'
  const url_sort="https://beta.jccomputing.sunny.net.vn/product?" + "sort="+ sort
  const select_sort=".ant-select-selector"
  const item_LowToHigh= "div[title='Price Low to High'] > .ant-select-item-option-content"
  await t   
    .maximizeWindow()
    .wait(8000)
    .click(select_sort)
    .click(item_LowToHigh)
    
  const location= await t.eval(() => window.location.href);
  await t
    .expect(location).eql(url_sort)

  const item1= await Selector("div:nth-of-type(1) > .product-grid > .product-grid__info > .product-price > .price").innerText
  const item12= await Selector("div:nth-of-type(12) > .product-grid > .product-grid__info > .product-price > .price").innerText
  const sub_item1= Number(Number(item1.replace(/\$\s?|(,*)/g, '')).toFixed(2))
  const sub_item12= Number(Number(item12.replace(/\$\s?|(,*)/g, '')).toFixed(2))

  console.log('item 1: '+sub_item1)
  console.log('item 12: '+sub_item12)

  await t
  .expect(sub_item12).gte(sub_item1)

});
