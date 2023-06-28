import { Selector } from 'testcafe';
fixture`Registers`
    .page('https://test.binder.sunny.net.vn/school/login')// page admin
    .skipJsErrors()
    //[Admin]
    const user="appadmin"
    const pass="12345678"
    const button_login_admin=".innos-ui-button-inner"
    const menu_Enrolment="[role='menuitem']:nth-of-type(16) .title-menu"
    const menu_item_form="li:nth-of-type(1) > .innos-ui-navigation-list-item-wrap"
    const form_search=".innos-ui-input-affix-wrapper > .innos-ui-input"
    const button_view=".spin-class .innos-ui-button-content"
    const button_admin_eye="span[role='presentation'] svg"
    const button_admin_start=".button-action .innos-ui-button-medium:nth-of-type(1) .innos-ui-button-inner"
    const button_admin_reject=".innos-ui-button-negative .innos-ui-button-inner"
    const form_admin_reject="#rejectReasonR1"
    const resason_admin_reject="test reject"
    const button_admin_save_reject=".innos-ui-toolbar-item.innos-ui-button-default .innos-ui-button-inner"
    const expect_success_selection=".innos-ui-message-toast-notice-content"
    const expect_success_text="Update status successfully"
    const button_admin_cancel=".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-cancel"
    const form_admin_cancel="textarea#cancelRejectRound1Reason"
    const resason_admin_cancel="test cancel"
    const button_admin_save_cancel="body div:nth-child(7) .innos-ui-button-default [viewBox]"
    const button_admin_accept=".innos-ui-button.innos-ui-button-medium.innos-ui-button-success.spin-class  .innos-ui-button-content"
    const button_admin_cancelaccept=".spin-class.innos-ui-button-negative .innos-ui-button-content"
    const form_admin_accept="textarea#cancelAcceptRound1Reason"
    const resason_admin_accept="test accept"
    const button_admin_save_accept="body div:nth-child(8) .innos-ui-button-default .innos-ui-button-inner"
    const radio_admin_no="#addressRequestEdit .innos-ui-radio-group-col:nth-of-type(2) .innos-ui-radio-b-inn"
    const select_admin="[class='innos-ui-col innos-ui-grid-span-5'] .innos-ui-select-selector"
    const select_item_admin="div[title='Other reason'] > .innos-ui-select-item-option-content"
    const form_admin="textarea#addressRequestEditNote"
    const resason_admin="test invalid"
    const khoangtrong=".retail-enrolmentForm-detail-no-scroll > div:nth-of-type(4) > div"
    const button_admin_requestupdate=".innos-ui-button-critical .innos-ui-button-inner"
    //[Parent]
    const link_parent="https://test.binder.sunny.net.vn/school/enrolment/subscribe"
    const expect_title_0="Create your werribee secondary college account password"
    const expect_title_1="Your Eligibility Proof has been submitted"
    const expect_title_2="Your Eligibility Proof is in verification process"
    const expect_title_3="Your Eligibility Proof has been rejected"
    const expect_title_4="Your Eligibility Proof has been accepted"
    const expect_title_5="Request additional information for your Eligibility Proof"
    const form_firstName="#firstName"
    const form_lastname="#lastName"
    const form_password="#password"
    const form_phone="input#phoneNumber"
    const form_passwordConfirm="#passwordConfirm"
    const button_Enrolyourchild="#root > div > div.enrolment > div > div > div > div > a"
    const button_choosemethodaddress="#root > div > div > div.eligibility-proof-round-1 > div > div.btn-choose-method > div.choose-method-address"
    const form_email="#root > div > div > div.eligibility-proof-round-1 > div.method-address > div.innos-ui-form.innos-ui-form-edit.innos-ui-form-horizontal.innos-ui-form-label-align-right > div.innos-ui-form-item-control > div:nth-child(2) > span > input"
    const click_submit="#root > div > div > div.eligibility-proof-round-1 > div.list-btn-action-custom > div > div > div.btn-submit"
    const test_account=[{
        firstName:"test",lastName:"test2206",password:"Test12345678@@",phone:"0912345678"
    }]
    //[Mail Temp]
    const link_mail_temp="https://www.emailnator.com/"
    const value_email=".card-body > .input-group.mb-3 > .form-control.form-control-lg"
    const button_reload="button[name='reload']"
    const title_mail="[class] tr:nth-of-type(2) tr td"
//----------------------------------------------------------------
async function openmail(t,linkmail,A1,A2,count)
    {
        await t
            .openWindow(linkmail) // open link receivemail
            .maximizeWindow()
            .wait(5000)
            .click("button[name='reload']")// click button reload
            .wait(2000)
            .expect(Selector(A1).withText(A2).count).eql(count)
            .closeWindow()
    }
//----------------------------------------------------------------
test('Registers', async t => {
    //[Admin]
    await t.maximizeWindow()
    .typeText("#username",user)
    .typeText("#password",pass)
    .click(button_login_admin)
    //[Mail Temp]
    const mail_temp=await t.openWindow(link_mail_temp).maximizeWindow()
    const emails=await Selector(value_email).value
    const link_receivemail="https://www.emailnator.com/inbox/#"+emails // link receive of mail
    //[Parent]
    await t.navigateTo(link_parent)
    .typeText("input",emails)
    .wait(2000)
    .click(".btn")
    //[Mail Temp]
    .navigateTo(link_receivemail)
    .wait(5000)
    .click(button_reload)
    .wait(5000)
    .click(button_reload)
    const clickmail=Selector(title_mail).withText(expect_title_0)
    const clickbuttoncreate=Selector('#root div').withText('Create password').nth(11)
    await t.click(clickmail).click(clickbuttoncreate)
    //[Parent]-[FillAccount]
    .typeText(form_firstName,test_account[0].firstName)
    .typeText(form_lastname,test_account[0].lastName+Math.floor(Math.random() * 101))
    .typeText(form_phone,test_account[0].phone)
    .typeText(form_password,test_account[0].password)
    .typeText(form_passwordConfirm,test_account[0].password)
    .click(".btn")
    .wait(5000)
    .click(button_Enrolyourchild)
    .click(button_choosemethodaddress)
    .typeText(form_email,"New Well Centre Rd, New Well SA 5357, Australia")
    .debug()
    .click(click_submit)
    .wait(5000)
    //[Mail Temp]-[Check  Mail]
    .navigateTo(link_receivemail)
    .wait(5000)
    .click(button_reload)
    .expect(Selector(title_mail).withText(expect_title_1).count).eql(1)
    .closeWindow()
    //[Admin]
        .click(menu_Enrolment)
        .click(menu_item_form)
        .wait(2000)
        .typeText(form_search,emails)
        .click(button_view)
        .wait(2000)
        .click(button_admin_eye)
        //--[Start]
        .click(button_admin_start)
        openmail(t,link_receivemail,title_mail,expect_title_2,1)//----[expect_title_2]-[Your Eligibility Proof is in verification process]
        //--[Reject]
        await t.wait(2000)
        .click(button_admin_reject)
        .typeText(form_admin_reject,resason_admin_reject)
        .click(button_admin_save_reject)
        .expect(Selector(expect_success_selection).innerText).eql(expect_success_text)
        openmail(t,link_receivemail,title_mail,expect_title_3,1)//----[expect_title_3]-[Your Eligibility Proof has been rejected]
        //--[Cancel]
        await t.wait(2000)
        .click(button_admin_cancel)
        .typeText(form_admin_cancel,resason_admin_cancel)
        .click(button_admin_save_cancel)
        .expect(Selector(expect_success_selection).innerText).eql(expect_success_text)
        openmail(t,link_receivemail,title_mail,expect_title_2,1)//----[expect_title_2]-[Your Eligibility Proof is in verification process]

        //--[Request] màu cam
        .wait(2000)
        .click(radio_admin_no)
        .click(select_admin)
        .click(select_item_admin)
        .typeText(form_admin,resason_admin)
        //click no câu 2
        // .click(radio_admin_no)
        // .click(select_admin)
        // .click(select_item_admin)
        // .typeText(form_admin,resason_admin)
        .click(khoangtrong)
        .click(button_admin_requestupdate)
        .expect(Selector(expect_success_selection).innerText).eql(expect_success_text)

        //---------> Check mail
        .openWindow(link_receivemail).maximizeWindow().wait(5000).click(button_reload)
        const clickRequest=Selector(title_mail).withText(expect_title_5)//----[expect_title_5]-["Request additional information for your Eligibility Proof"]
        const clickbuttonRequest=Selector('#root div').withText('Provide information').nth(11)// location button create password
        await t.click(clickRequest)
        .click(clickbuttonRequest)
        //.typeText(form_email,"Yarraville VIC 3013, Australia")
        //debug()
        //click submit
        // check mail
        .closeWindow()
        //sang admin
        //tìm mail
        //start
        //yes 2 câu
        //--[Accept]
        await t.wait(2000)
        .click(button_admin_accept)
        .expect(Selector(expect_success_selection).innerText).eql(expect_success_text)
        openmail(t,link_receivemail,title_mail,expect_title_4,1)//----[expect_title_4]-[Your Eligibility Proof has been accepted]
        await t.click(button_admin_cancelaccept)
        .typeText(form_admin_accept,resason_admin_accept)
        .click(button_admin_save_accept)
        .expect(Selector(expect_success_selection).innerText).eql(expect_success_text)
        //--[Cancel]
        //--[Accept]

})