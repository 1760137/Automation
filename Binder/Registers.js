import { Selector } from 'testcafe';
fixture`TestController.switchToWindow`
    .page('https://internxt.com/temporary-email')// page register
    .skipJsErrors()
test('Registers', async t => {
    await t.maximizeWindow()// full screen page register
    const tempmail= await t.getCurrentWindow();//object page register
    const p_registers= await t.openWindow('https://test.binder.sunny.net.vn/school/enrolment/subscribe')// open website mail temp and object page mail temp

    //Tab website [temp mail]
    await t.switchToWindow(tempmail)// select tab temp mail

        .wait(2000)// wait 2s
    const emails= await Selector(".bg-gray-1.cursor-pointer.flex.flex-row.h-full.items-center.justify-between.px-4.py-3.rounded-xl.shadow-sm.w-full > p").innerText // Get email in page mail temp

    //Tab website [registers]
    await t.switchToWindow(p_registers)// select tab registers
        .resizeWindow(800,1000)// size page 800px x 1000px
        .typeText("input",emails)// fill email 
        .wait(2000)// wait 2s
        .click(".btn")// click button subscribe
        .closeWindow(p_registers)
    
    //Tab website [temp mail]
    await t.switchToWindow(tempmail)// select tab temp mail
        .wait(5000)// wait 5s
        .click(".cursor-pointer.text-gray-50") // click button reload 
        .click("p[title='test.sunnydev@gmail.com']") // find email active account
        .wait(2000)// wait 2s
        .click("[class='flex w-full flex-col space-x-2'] div:nth-of-type(3) div")// button [create password]
        .maximizeWindow() // full screen page Fill info account
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
})