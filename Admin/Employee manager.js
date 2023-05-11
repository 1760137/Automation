import { Selector } from "testcafe";

fixture `Employee manager`
    .page `https://beta.jccomputing.sunny.net.vn/ecommerce-admin/login`
    .skipJsErrors();

// Edit
test('EM_002', async t => {    
    const username= "qc-jcecom"
    const passwords= "147258369"
    const form_user= "input#username"
    const form_pass= "input#password"
    const button_login= ".innos-ui-button-inner"
    const menu_employee= "[role='menuitem']:nth-of-type(12) .innos-ui-navigation-list-item-text"

    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, passwords)
        .click(button_login)
        .click(menu_employee)

    
    const code_filter= "[aria-label='Employee code Filter Input']"
    const employee_code= "ST-000002"    
    const edit_button= "div:nth-of-type(1) > div[role='gridcell'] .innos-ui-button-icon.innos-ui-icon.innos-ui-icon-edit > svg"
    const name_textbox= "input#TenNhanVien"
    const birth= "input#NgaySinh"
    const gender= ".innos-ui-form-item-control.innos-ui-form-item-control-required  .innos-ui-select-selector > .innos-ui-select-selection-item"
    const account= "input#TaiKhoan_Id"
    const save_button= ".innos-ui-footer.innos-ui-footer-in-modal > .innos-ui-button.innos-ui-button-default.innos-ui-button-medium  .innos-ui-button-content"
    
    await t
        .typeText(code_filter, employee_code)
        .wait(2000)
        .click(edit_button)
        .click(name_textbox)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(name_textbox, "test edit")
        .click(save_button)
        .wait(1000)
})

// Delete


test('EM_003', async t => {    
    const username= "qc-jcecom"
    const passwords= "147258369"
    const form_user= "input#username"
    const form_pass= "input#password"
    const button_login= ".innos-ui-button-inner"
    const menu_employee= "[role='menuitem']:nth-of-type(12) .innos-ui-navigation-list-item-text"

    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, passwords)
        .click(button_login)
        .click(menu_employee)

    
    const code_filter= "[aria-label='Employee code Filter Input']"
    const employee_code= "ST-000011"   
    const cham_icon= "div:nth-of-type(1) > div[role='gridcell'] .innos-ui-button-icon.innos-ui-icon.innos-ui-icon-menu > svg > g[role='presentation'] > path" 
    const delete_button= ".innos-ui-button.innos-ui-button-medium.innos-ui-button-negative.innos-ui-confirm-button-cancel > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
      
    await t
        .typeText(code_filter, employee_code)
        .wait(2000)
        .click(cham_icon)
        .click(delete_button)
        .wait(1000)
})