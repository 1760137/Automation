
import { Selector } from 'testcafe';

fixture `Sign in`
    .page `https://beta.jccomputing.sunny.net.vn/other/login`;
    
// Email và pass hợp lệ, expect: chuyển hướng sang homepage, hiển thị personal page
test('LO_001', async t => {
    const names = 'Thanh An Hoang'
    const tezx='Hi,\xa0';
    await t
        .typeText("input#email",'mopeh82334@oniecan.com')
        .typeText("input#password",'147258369')
        await t.click("button[name='login']")           
    //  await t.expect(Selector('body').textContent).contains('Loading...'); // Optional: wait for loading screen to disappear
    // Check if URL has been redirected to the dashboard page

        .expect(Selector(".ant-dropdown-trigger.contact-delivery > span").innerText).eql(tezx+names,'Error!!')
});

// trống all các trường
test('LO_002', async t => {
    const error_list= new Map();
    error_list.set('username','Email can not be empty')
    error_list.set('pass','Password can not be empty')
    await t
        .click("button[name='login']")
        .expect(Selector("div:nth-of-type(1) > div[role='row'] > div[role='cell']  div[role='alert']").innerText).eql(error_list.get('username'),'Sign in fail')
        .expect(Selector("div:nth-of-type(2) > div[role='row'] > div[role='cell']  div[role='alert']").innerText).eql(error_list.get('pass'),'Sign in fail') 
});

// Email hợp lệ, pass không hợp lệ
test('LO_003', async t =>{
    await t
    .typeText("input#email",'mopeh82334@oniecan.com')
    .typeText("input#password",'000000000')
    .click("button[name='login']")
    .expect(Selector("div[role='alert']").innerText).eql('Wrong email or password!','Error!!')
    .wait(3000)
});

// Email không hợp lệ, pass hợp lệ
test('LO_004', async t =>{
    await t
    .typeText("input#email",'mopeh@oniecan.com')
    .typeText("input#password",'147258369')
    .click("button[name='login']")
    .expect(Selector("div[role='alert']").innerText).eql('Wrong email or password!','Error!!')
    .wait(3000)
    
});

// Email và pass không hợp lệ
test('LO_005', async t =>{
    await t
    .typeText("input#email",'mopeh@oniecan.com')
    .typeText("input#password",'000000000')
    .click("button[name='login']")
    .expect(Selector("div[role='alert']").innerText).eql('Wrong email or password!','Error!!')
    .wait(3000)    
});

// Forgot password
test('LO_006', async t => {
    await t
    .click(".forgot-password")  
    // Navigate to a new page
    await t.navigateTo('https://beta.jccomputing.sunny.net.vn/other/forgot-password');
    // Assert that the new page has loaded
    await t.expect(Selector('body').exists).ok();
});

// Tính năng lấy lại password
test('LO_007', async t => {
    await t
    .click(".forgot-password")
    .expect('input#email').ok()
    .typeText("input#email",'mopeh82334@oniecan.com')
    .click("button[name='renewPassword']")
    .wait(5000)
    .expect(Selector("h3").innerText).eql('Request reset password success', 'error')
    .expect(Selector(".justify-content-center.row p").innerText).eql('Please open email mopeh82334@oniecan.com','error')
    .expect(Selector(".justify-content-center.row i").innerText).eql('for instruction set new password','error')
    .expect(Selector('.css-1ad3zal.react-toast-notifications__toast__content').innerText).eql("Request success")
});

