import { Selector } from 'testcafe';
    // mail hợp lệ (? dev format chuẩn để đkí thành công)
    // mail không hợp lệ
    // case bấm login
    // trang client: đăng ký, đăng nhập, search, filter, thêm hàng vào giỏ
    //----------------------------------------------------------------*/

fixture `Registers`
    .page `https://beta.jccomputing.sunny.net.vn/other/register`

// all hợp lệ, đăng ký thành công

test('RE_001', async t => {
    const mail_test='abc1123@oniecan.com' 
    await t
        .typeText('input#displayName','Nhi')
        .typeText('input#email', mail_test)
        .typeText('input#password','12345678')
        .typeText('input#confirmPassword','12345678')
        .click("button[name='register']")
        .wait(10000)
        .expect(Selector(".login-wrap > div > div:nth-of-type(3)").innerText).eql('Please open email '+ mail_test,'error')
        .expect(Selector(".login-wrap > div > div:nth-of-type(4)").innerText).eql('for activate account','error')
        
});

// để trống all các trường, expect: không đăng ký được, báo lỗi tại all các trường
test('RE_002', async t => {
    const error_list= new Map();
    error_list.set('name','Display name can not be empty').set('mail','Email can not be empty').set('password','Password can not be empty').set('confirm password','Need confirm password')
    await t
        .click("button[name='register']")
        .expect(Selector("div:nth-of-type(1) > div[role='row'] > div[role='cell']  div[role='alert']").innerText).eql(error_list.get('name'),'register fail')
        .expect(Selector("div:nth-of-type(2) > div[role='row'] > div[role='cell']  div[role='alert']").innerText).eql(error_list.get('mail'),'register fail')
        .expect(Selector("div:nth-of-type(3) > div[role='row'] > div[role='cell']  div[role='alert']").innerText).eql(error_list.get('password'),'register fail')
        .expect(Selector("div:nth-of-type(4) > div[role='row'] > div[role='cell']  div[role='alert']").innerText).eql(error_list.get('confirm password'),'register fail')
        .wait(3000)
});

//check format mail
test('RE_003', async a => {
    const error_list= new Map();
    error_list.set('E1','aa').set('E2','aa@com').set('E3','aa.com').set('E4','aa@.com').set('E5','aa@g.com')
    await a
    .typeText('input#displayName','AnAn')

    for (const [key, value] of error_list) {
        await a
        .typeText("input#email",value)
        .expect(Selector("div:nth-of-type(2) > div[role='row'] > div[role='cell']  div[role='alert']").innerText).eql('Wrong email format','Register fail')
        .click("input#email")
        .pressKey('ctrl+a')
        .pressKey('delete')
      } 
});

// mail đã đăng ký; mong muốn: không đăng ký được, báo lỗi 

test('RE_004', async t => {
    const mail_test='030235190074@st.buh.edu.vn' // email đã đăng ký
    await t
        .typeText('input#displayName','Nhi')
        .typeText('input#email', mail_test)
        .typeText('input#password','12345678')
        .typeText('input#confirmPassword','12345678')
        .click("button[name='register']")
        .expect(Selector("[class='react-toast-notifications__toast__content css-1ad3zal']").innerText).eql('Account name has been used','error')
        
});

// password confirm != password, expect: không đăng ký được, báo lỗi tại trường confirm password
test('RE_005', async t => {
    const mail_test='abc123@gmail.com'
    const error_list=new Map();
    error_list.set('confirmpassword','Confirm password fail')
    await t
        .typeText('input#displayName','Le Thi Mai')
        .typeText('input#email', mail_test)
        .typeText('input#password','12345678')
        .typeText('input#confirmPassword','87654321')
        .click("button[name='register']")
        .wait(10000)
        .expect(Selector("div:nth-of-type(4) > div[role='row'] > div[role='cell']  div[role='alert']").innerText).eql(error_list.get('confirmpassword'),'register fail')
});














































































































