import { Selector } from 'testcafe';
fixture`TestController.switchToWindow`
    .page('https://test.binder.sunny.net.vn/school/login')// page admin
    .skipJsErrors()
    const user="appadmin"
    const pass="12345678"
test('Registers', async t => {
    //Page Admin
    const p_admin= await t.getCurrentWindow()
    await t.maximizeWindow()
        .typeText("#username",user)
        .typeText("#password",pass)
        .click("#root > div > div > div > div > div.innos-ui-form.innos-ui-his-login-page-form.innos-ui-form-edit.innos-ui-form-horizontal.innos-ui-form-label-align-left > div.innos-ui-form-item-control > button > span")
    //Page temp mail
    const p_tempmail= await t.openWindow("https://internxt.com/temporary-email") // Open temp mail 
    await t.maximizeWindow()
    const emails= await Selector(".bg-gray-1.cursor-pointer.flex.flex-row.h-full.items-center.justify-between.px-4.py-3.rounded-xl.shadow-sm.w-full > p").innerText // Get email in page mail temp
    //Page parent
    const p_parent= await t.openWindow('https://test.binder.sunny.net.vn/school/enrolment/subscribe')// open website mail temp and object page mail temp
    await t.maximizeWindow()
        .typeText("input",emails)// fill email 
        .wait(2000)// wait 2s
        .click(".btn")// click button subscribe
        .closeWindow(p_parent)
    //Page temp mail
    await t.switchToWindow(p_tempmail)// select tab temp mail
        .wait(5000)// wait 5s
        .click(".cursor-pointer.text-gray-50") // click button reload 
        .click("p[title='test.sunnydev@gmail.com']") // find email active account
        .wait(2000)// wait 2s
        .click("[class='flex w-full flex-col space-x-2'] div:nth-of-type(3) div")// button [create password]
    //Fill info account
    const form_firstName="#firstName"
    const form_lastname="#lastName"
    const form_password="#password"
    const form_passwordConfirm="#passwordConfirm"
    const button_Enrolyourchild="#root > div > div.enrolment > div > div > div > div > a"
    const button_choosemethodaddress="#root > div > div > div.eligibility-proof-round-1 > div > div.btn-choose-method > div.choose-method-address"
    const form_email="#root > div > div > div.eligibility-proof-round-1 > div.method-address > div.innos-ui-form.innos-ui-form-edit.innos-ui-form-horizontal.innos-ui-form-label-align-right > div.innos-ui-form-item-control > div:nth-child(2) > span > input"
    const click_submit="#root > div > div > div.eligibility-proof-round-1 > div.list-btn-action-custom > div > div > div.btn-submit"
    await t
        .typeText(form_firstName,"test")
        .typeText(form_lastname,"test1206"+Math.floor(Math.random() * 101))
        .typeText(form_password,"Test12345678@@")
        .typeText(form_passwordConfirm,"Test12345678@@")
        .wait(5000)
        .click(".btn")
        .wait(5000)
        .click(button_Enrolyourchild)
        .click(button_choosemethodaddress)
        .typeText(form_email,"New Well SA 5357, Australia")
        .debug()
        .click(click_submit)
        .wait(5000)
        .closeWindow(p_tempmail)
    //page admin

    await t.switchToWindow(p_admin)
        .click("[role='menuitem']:nth-of-type(16) .title-menu")//Menu
        .click("[role='menuitem']:nth-of-type(1) .innos-ui-navigation-list-item-wrap")// item menu
        .typeText("[aria-label='Created by Filter Input']",emails)// filter email
        .wait(2000)
        .click("span[role='presentation'] svg")//con mat 
        .click(".button-action .innos-ui-button-medium:nth-of-type(1) .innos-ui-button-inner")// start
        .click(".innos-ui-button-negative .innos-ui-button-inner")// reject
        .typeText("#rejectReasonR1","test reject")// dien reject
        .click(".innos-ui-toolbar-item.innos-ui-button-default .innos-ui-button-inner")// save
        .expect(Selector(".innos-ui-message-toast-notice-content").innerText).eql("Update status successfully")
})