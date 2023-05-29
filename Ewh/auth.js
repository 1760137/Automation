import { Selector } from 'testcafe';

fixture `auth`
    .page `https://beta.jccomputing.sunny.net.vn/ecommerce-admin/`
    .skipJsErrors();

    const form_user= "input#username"
    const form_pass= "input#password"
    const username= "qc-jcecom"
    const password= "147258369"
    const button_login= ".innos-ui-button-inner"
    const menu_setting= "[role] [role='menuitem']:nth-of-type(14) .innos-ui-navigation-list-submenu-text"
    const menu_manage_user= ".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(2) .innos-ui-navigation-list-item-text"
    
    
// Loại Kho - Sửa tên 
test('AU_001', async t => {
    
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
    const loai_kho= ".innos-ui-navigation-list-his-wrapper [role='menuitem']:nth-of-type(6) .innos-ui-navigation-list-item-text span"
    const fill_ma= "loaikho_test"
    const fill_ten_new= "JC Test"
    const form_ten= "input#node_type_basic_form_name"
    const form_filter_ma= "div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const result_filter= "[ref='centerContainer'] [role] [tabindex='-1']:nth-of-type(2)"
    const edit_icon= "div:nth-of-type(5) .innos-ui-icon.innos-ui-icon-form > svg"
    const button_sua_modal= ".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-edit"
    const save_button= ".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-content"
    const msg= ".innos-ui-message-toast-notice-message"

    await t
        .click(loai_kho)
        .typeText(form_filter_ma, fill_ma)
        .expect(Selector(result_filter).count).eql(1)
        .expect(Selector(result_filter).innerText).eql(fill_ma)
        .click(edit_icon)
        .click(button_sua_modal)
        .click(form_ten)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(form_ten, fill_ten_new)
        .click(save_button)
        .expect(Selector(msg).innerText).eql("Cập nhật thành công")
        .wait(3000)
    });

// Cơ sở-Tổ chức- Add
test('AU_002', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)    

    const coso= "li:nth-of-type(5)  .innos-ui-navigation-list-item-text > span"
    const ma_coso= "cstc_test"
    const ten_coso= "Test CSTC"
    const loai_coso= "Warehouse"
    const tructhuoc_coso= "External facility"
    const note_coso= "noteeee"
    const add_button=".innos-ui-button-fill .innos-ui-button-content"
    const form_ma= "input#node_form_code"
    const form_ten= "input#node_form_name"
    const form_note= "input#node_form_note"
    const select_loai= ".innos-ui-form-item-control.innos-ui-form-item-control-required  .innos-ui-select-selector"
    const select_tructhuoc= ".innos-ui-form-item:nth-of-type(4) .innos-ui-select-selection-item"
    const index_tructhuoc= "input#node_form_idParent"
    const index_loai= "div[title='"+ loai_coso +"'] > .innos-ui-select-item-option-content"
    const save_button= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium  .innos-ui-button-content"
    const thongbao= ".innos-ui-message-toast-notice-message"
    const success_thongbao= "Tạo mới thành công"
    await t
        .click(coso)
        .click(add_button)
        .typeText(form_ma, ma_coso)
        .typeText(form_ten, ten_coso)
        .click(select_loai)
        .click(index_loai)
        .click(select_tructhuoc)
        .typeText(index_tructhuoc, tructhuoc_coso)
        .wait(1000)
        .pressKey('enter')
        .typeText(form_note, note_coso)
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql(success_thongbao)
        .wait(2000)
})

// Cơ sở-Tổ chức- Add trùng
test('AU_003', async t => {
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, password)
    .click(button_login)
    .click(menu_setting)
    .click(menu_manage_user)    

    const coso= "li:nth-of-type(5)  .innos-ui-navigation-list-item-text > span"
    const ma_coso= "cstc_test"
    const ten_coso= "Test CSTC"
    const loai_coso= "Warehouse"
    const tructhuoc= "External facility"
    const note_coso= "noteeee"
    const add_button=".innos-ui-button-fill .innos-ui-button-content"
    const form_ma= "input#node_form_code"
    const form_ten= "input#node_form_name"
    const form_note= "input#node_form_note"
    const select_loai= ".innos-ui-form-item-control.innos-ui-form-item-control-required  .innos-ui-select-selector"
    const select_tructhuoc= ".innos-ui-form-item:nth-of-type(4) .innos-ui-select-selection-item"
    const index_tructhuoc= "input#node_form_idParent"
    const index_loai= "div[title='"+ loai_coso +"'] > .innos-ui-select-item-option-content"
    const save_button= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium  .innos-ui-button-content"
    const thongbao= ".innos-ui-message-toast-notice-message"
    const fail_thongbao="Tạo mới thất bại"

    await t
        .click(coso)
        .click(add_button)
        .typeText(form_ma, ma_coso)
        .typeText(form_ten, ten_coso)
        .click(select_loai)
        .click(index_loai)
        .click(select_tructhuoc)
        .typeText(index_tructhuoc, tructhuoc)
        .wait(1000)
        .pressKey('enter')
        .typeText(form_note, note_coso)
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql(fail_thongbao)
        .wait(2000)
})

//Cơ sở-Tổ chức - Edit 
test('AU_004', async t => {
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, password)
    .click(button_login)
    .click(menu_setting)
    .click(menu_manage_user)     
        
    const coso= "li:nth-of-type(5)  .innos-ui-navigation-list-item-text > span"
    const form_filter= ".innos-ui-input-affix-wrapper > .innos-ui-input"
    const ten_coso= "Test CSTC"
    const update_button= ".rst__row.rst__rowSearchMatch .rst__toolbarButton > div > button:nth-of-type(1)  .innos-ui-button-content > span"
    const update_modal_button= ".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(1) .innos-ui-button-inner"
    const form_ma= "input#node_form_code"
    const save_modal_button= ".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const index_tructhuoc= "input#node_form_idParent"
    const select_tructhuoc= ".innos-ui-form-item:nth-of-type(4) .innos-ui-select-selection-item"
    const new_ma= "cstc_test"
    const tructhuoc= "E-commerce warehouse"
    const thongbao= ".innos-ui-message-toast-notice-message"
    const success_thongbao= "Cập nhật thành công"

    await t
        .click(coso)
        .typeText(form_filter, ten_coso)
        .click(update_button)
        .click(update_modal_button)
        .click(form_ma)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(form_ma, new_ma)
        .click(select_tructhuoc)
        .typeText(index_tructhuoc, tructhuoc)
        .pressKey('enter')
        .click(save_modal_button)
        .expect(Selector(thongbao).innerText).eql(success_thongbao)
        .wait(1000)
})

//Cơ sở-Tổ chức - Edit trùng mã 
test('AU_005', async t => {
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, password)
    .click(button_login)
    .click(menu_setting)
    .click(menu_manage_user)     
        
    const coso= "li:nth-of-type(5)  .innos-ui-navigation-list-item-text > span"
    const form_filter= ".innos-ui-input-affix-wrapper > .innos-ui-input"
    const ten_coso= "Test CSTC"
    const button_update=".rst__row.rst__rowSearchMatch .rst__toolbarButton > div > button:nth-of-type(1)  .innos-ui-button-content > span"
    const button_update_modal=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(1) .innos-ui-button-inner"
    const button_save_modal=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const new_ma= "PM"
    const form_ma= "input#node_form_code"
    const thongbao= ".innos-ui-message-toast-notice-message"
    const fail_thongbao= "Cập nhật thất bại"

    await t
        .click(coso)
        .typeText(form_filter, ten_coso)
        .click(button_update)
        .click(button_update_modal)
        .click(form_ma)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(form_ma, new_ma)
        .click(button_save_modal)
        .expect(Selector(thongbao).innerText).eql(fail_thongbao)
        .wait(1000)
})

//Cơ sở-Tổ chức- Delete
test('AU_006', async t => {
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, password)
    .click(button_login)
    .click(menu_setting)
    .click(menu_manage_user)     
        
    const coso= "li:nth-of-type(5)  .innos-ui-navigation-list-item-text > span"
    const form_filter=".innos-ui-input-affix-wrapper > .innos-ui-input"
    const ten_coso= "Test CSTC"
    const delete_button= ".rst__row.rst__rowSearchMatch .rst__toolbarButton > div > button:nth-of-type(2)  .innos-ui-button-content > span"
    const delete_modal_button= ".innos-ui-button.innos-ui-button-medium.innos-ui-button-negative.innos-ui-confirm-button-cancel > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text > .innos-ui-button-content"
    const thongbao= ".innos-ui-message-toast-notice-message"
    const delete_thongbao= "Xóa thành công"
    
    await t
        .click(coso)
        .typeText(form_filter, ten_coso)
        .click(delete_button)
        .click(delete_modal_button)
        .expect(Selector(thongbao).innerText).eql(delete_thongbao)
        .wait(1000)
})

// Menu - Add 
test('AU_007', async t => {
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, password)
    .click(button_login)
    .click(menu_setting)
    .click(menu_manage_user)    

    const List_Menu= [
        {key:'Quote', value:'Quote'},
        {key:'Order', value:'Order'},
        {key:'Catalog', value:'Catalog'},
    ]

    const menu= "li:nth-of-type(4)  .innos-ui-navigation-list-item-text > span"
    const form_mamenu= "input#navigation_basic_form_code"
    const form_tenmenu= "input#navigation_basic_form_name"
    const button_save= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium  .innos-ui-button-content"
    const thongbao= ".innos-ui-message-toast-notice-message"
    const mamenu= "test_menu"
    const tenmenu= "Test Menu"
    const add_button= ".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-add"
    const filter= "[aria-label='Menu Filter Input']"
    const tick= "div[role='document'] div[role='grid'] > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div[role='gridcell'] > div[role='presentation'] > div[role='presentation'] > div[role='presentation'] > div:nth-of-type(2) > .ag-checkbox-input.ag-input-field-input"
    const result_filter= "div:nth-of-type(2) > div[role='presentation'] > div[role='rowgroup'] > div[role='row'] > div:nth-of-type(2)"
    const ma_filter= "[aria-label='Mã Filter Input']"
   
    await t
        .click(menu)
        .typeText(ma_filter, mamenu)           
        .wait(3000) 
        const check= await Selector(result_filter).exists            
        if(check==false){
            await t
            .click(add_button)
            .typeText(form_mamenu, mamenu)
            .typeText(form_tenmenu, tenmenu)
            for (const {value} of List_Menu) 
            {
                await t
                    .typeText(filter, value)
                    .wait(1000)
                    .click(tick)
                    .click(filter)
                    .pressKey('ctrl+a')
                    .pressKey('delete')
            }
            await t
            .click(button_save)
            .expect(Selector(thongbao).innerText).eql("Tạo mới thành công")
            .wait(3000)
        }
});

// Menu - Add trùng 
test('AU_008', async t => {
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, password)
    .click(button_login)
    .click(menu_setting)
    .click(menu_manage_user)    

    const List_Menu=[
        {key:'Quote',value:'Quote'},
    ]
    const form_mamenu="input#navigation_basic_form_code"
    const form_tenmenu="input#navigation_basic_form_name"
    const button_save="div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium  .innos-ui-button-content"
    const thongbao=".innos-ui-message-toast-notice-message"
    const mamenu="appadmin"
    const tenmenu="appadmin"
    const menu="li:nth-of-type(4)  .innos-ui-navigation-list-item-text > span"
    const button_add=".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-add"
    const filter="[aria-label='Menu Filter Input']"
    const tick="div[role='document'] div[role='grid'] > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div[role='gridcell'] > div[role='presentation'] > div[role='presentation'] > div[role='presentation'] > div:nth-of-type(2) > .ag-checkbox-input.ag-input-field-input"

    await t
        .click(menu)
        .click(button_add)
        .typeText(form_mamenu, mamenu)
        .typeText(form_tenmenu, tenmenu)
        for (const {value} of List_Menu){
            await t
            .typeText(filter,value)
            .wait(1000)
            .click(tick)
            .click(filter)
            .pressKey('ctrl+a')
            .pressKey('delete')
        }
         await t
        .click(button_save)
        .expect(Selector(thongbao).innerText).eql("Tạo mới thất bại")
        .wait(2000)
        }
);

// Menu - Edit
test('AU_009', async t => {
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, password)
    .click(button_login)
    .click(menu_setting)
    .click(menu_manage_user)    

    const menu= "li:nth-of-type(4)  .innos-ui-navigation-list-item-text > span"
    const filter_mamenu= "div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const mamenu= "test_menu"
    const edit_icon= ".ag-react-container [viewBox='0 0 512 512']"
    const edit_modal_button= ".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(1) .innos-ui-button-inner"
    const filter= "[aria-label='Menu Filter Input']"
    const save_button= ".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const tick= "div[role='document'] div[role='grid'] > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div[role='gridcell'] > div[role='presentation'] > div[role='presentation'] > div[role='presentation'] > div:nth-of-type(2) > .ag-checkbox-input.ag-input-field-input"
    const thongbao= ".innos-ui-message-toast-notice-message"
    const List_Menu_Add= [
        {key:'Services',value:'Services'},
    ]
    const List_Menu_remove=[
        {key:'Order',value:'Order'},
    ]
    await t
        .click(menu)
        .typeText(filter_mamenu, mamenu)
        .wait(2000)
        .click(edit_icon)
        .click(edit_modal_button)
    for (const {value} of List_Menu_Add){
        await t
            .typeText(filter,value)
            .wait(2000)
            .click(tick)
            .click(filter)
            .pressKey('ctrl+a')
            .pressKey('delete')
    }
    for (const {value} of List_Menu_remove){
        await t
            .typeText(filter, value)
            .wait(2000)
        const check_box=await Selector(tick).checked
        if(check_box==true)
        {
            await t
            .click(tick)
        }
    }
    await t
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql("Cập nhật thành công")
        .wait(2000)
})

// Menu- Edit trùng 
test('AU_010', async t => {
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, password)
    .click(button_login)
    .click(menu_setting)
    .click(menu_manage_user)    

    const menu= "li:nth-of-type(4)  .innos-ui-navigation-list-item-text > span"
    const filter_mamenu= "div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const mamenu= "test_menu"
    const form_tenmenu= "input#navigation_basic_form_name"
    const tenmenu= "Menu Sale"
    const edit_icon=".ag-react-container [viewBox='0 0 512 512']"
    const edit_modal_button=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(1) .innos-ui-button-inner"
    const save_button=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const thongbao=".innos-ui-message-toast-notice-message"

    await t
        .click(menu)
        .typeText(filter_mamenu, mamenu)
        .click(edit_icon)
        .wait(700)
        .click(edit_modal_button)
        .wait(700)
        .click(form_tenmenu)
        .wait(700)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(form_tenmenu, tenmenu)
        .wait(700)
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql("Cập nhật thất bại")
        .wait(2000)
})

//Menu - Delete
test('AU_011', async t => {
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, password)
    .click(button_login)
    .click(menu_setting)
    .click(menu_manage_user)    

    const menu= "li:nth-of-type(4)  .innos-ui-navigation-list-item-text > span"
    const filter_mamenu= "div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const mamenu= "test_menu"
    const delete_icon= "[viewBox='0 0 151 512']"
    const delete_button= ".innos-ui-list-item-base-content"
    const delete_button_modal= ".innos-ui-confirm-button-cancel .innos-ui-button-inner"
    const thongbao= ".innos-ui-message-toast-notice-message"

    await t
        .click(menu)
        .typeText(filter_mamenu, mamenu)
        .wait(2000)
        .click(delete_icon)
        .click(delete_button)
        .click(delete_button_modal)
        .expect(Selector(thongbao).innerText).eql("Xóa thành công")
        .wait(2000)
})

// Chức vụ - Add
test('AU_012', async t => {
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, password)
    .click(button_login)
    .click(menu_setting)
    .click(menu_manage_user)    
  
    const chucvu= "li:nth-of-type(3)  .innos-ui-navigation-list-item-text > span"
    const button_add= ".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-add > svg"
    const form_macv= "input#code"
    const form_tencv= "input#name"
    const macv= "testjc"
    const tencv= "Test chức vụ"
    const filter= "div#role-modal-main-content div[role='grid'] > div:nth-of-type(1) > div:nth-of-type(2) > div[role='rowgroup'] > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) .ag-input-field-input.ag-text-field-input"
    const checkbox= "div#role-modal-main-content div[role='grid'] > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div[role='gridcell'] > div[role='presentation'] > div > div[role='presentation']  .ag-checkbox-input.ag-input-field-input"
    const save_button= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const thongbao= ".innos-ui-message-toast-notice-message"
    const List_CV=[
        {key:'Hệ Thống',value:'Quyền Administrator'},
        {key:'Hệ Thống',value:'Cài đặt nâng cao'},
        {key:'Hệ Thống',value:'Chỉnh sửa cài đặt'},
        {key:'Hệ Thống',value:'Quyền cơ sở'},
    ]
    await t
        .click(chucvu)
        .click(button_add)
        .typeText(form_macv, macv)
        .typeText(form_tencv, tencv)
        for (const {value} of List_CV) {
            await t
                .typeText(filter,value)
                .wait(1000)
                .click(checkbox)
                .click(filter)
                .pressKey('ctrl+a')
                .pressKey('delete')
            }
    await t
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql("Tạo mới thành công")
        .wait(2000)
})

// Chức vụ - Add trùng mã
test('AU_013', async t => {
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, password)
    .click(button_login)
    .click(menu_setting)
    .click(menu_manage_user)    
  
    const chucvu= "li:nth-of-type(3)  .innos-ui-navigation-list-item-text > span"
    const button_add= ".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-add > svg"
    const form_macv= "input#code"
    const form_tencv= "input#name"
    const macv= "appadmin"
    const tencv= "Thêm trùng chức vụ"
    const filter= "div#role-modal-main-content div[role='grid'] > div:nth-of-type(1) > div:nth-of-type(2) > div[role='rowgroup'] > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) .ag-input-field-input.ag-text-field-input"
    const checkbox= "div#role-modal-main-content div[role='grid'] > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div[role='gridcell'] > div[role='presentation'] > div > div[role='presentation']  .ag-checkbox-input.ag-input-field-input"
    const save_button= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const thongbao= ".innos-ui-message-toast-notice-message"
    const List_CV=[
        {key:'Hệ Thống',value:'Quyền cơ sở'},
    ]

    await t
        .click(chucvu)
        .click(button_add)
        .typeText(form_macv, macv)
        .typeText(form_tencv, tencv)
        for (const {value} of List_CV) {
            await t
                .typeText(filter,value)
                .wait(1000)
                .click(checkbox)
                .click(filter)
                .pressKey('ctrl+a')
                .pressKey('delete')
            }
    await t
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql("Tạo mới thất bại")
        .wait(2000)
})

// Chức vụ - Edit
test('AU_014', async t => {
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, password)
    .click(button_login)
    .click(menu_setting)
    .click(menu_manage_user)    

    const chucvu= "li:nth-of-type(3)  .innos-ui-navigation-list-item-text > span"
    const filter_macv= "div#root div[role='grid'] > div:nth-of-type(1) > div:nth-of-type(2) > div[role='rowgroup'] > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const macv= "testjc"
    const edit_icon= ".ag-react-container [viewBox='0 0 512 512']"
    const edit_modal_button=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(1) .innos-ui-button-inner"
    const filter="div#role-modal-main-content div[role='grid'] > div:nth-of-type(1) > div:nth-of-type(2) > div[role='rowgroup'] > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) .ag-input-field-input.ag-text-field-input"
    const checkbox="div#role-modal-main-content div[role='grid'] > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div[role='gridcell'] > div[role='presentation'] > div > div[role='presentation']  .ag-checkbox-input.ag-input-field-input"
    const save_button=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const thongbao=".innos-ui-message-toast-notice-message"
    
    const List_CV_add=[
        {key:'Báo cáo',value:'Không thể xuất file'},
        {key:'Báo cáo',value:'Xem báo cáo'},
    ]
    const List_CV_delete=[
        {key:'Hệ Thống',value:'Chỉnh sửa cài đặt'},
        {key:'Hệ Thống',value:'Quyền cơ sở'},
    ]
    await t
        .click(chucvu)
        .typeText(filter_macv, macv)
        .wait(2000)
        .click(edit_icon)
        .click(edit_modal_button)
        for (const {value} of List_CV_add){
            await t
                .typeText(filter,value)
                .wait(2000)
                .click(checkbox)
                .click(filter)
                .pressKey('ctrl+a')
                .pressKey('delete')
        }

        for (const {value} of List_CV_delete){
            await t
                .typeText(filter,value)
                .wait(2000)
            const check_box=await Selector(checkbox).checked
            if(check_box==true)
            {
                await t
                .wait(2000)
                .click(checkbox)
            }
            await t
                .click(filter)
                .pressKey('ctrl+a')
                .pressKey('delete')
        }
    await t
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql("Cập nhật thành công")
})

// Chức vụ - Edit trùng mã 
test('AU_015', async t => {
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, password)
    .click(button_login)
    .click(menu_setting)
    .click(menu_manage_user)    

    const chucvu= "li:nth-of-type(3)  .innos-ui-navigation-list-item-text > span"
    const filter_macv= "div#root div[role='grid'] > div:nth-of-type(1) > div:nth-of-type(2) > div[role='rowgroup'] > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const macv= "testjc"
    const edit_icon=".ag-react-container [viewBox='0 0 512 512']"
    const edit_modal_button=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(1) .innos-ui-button-inner"
    const save_button=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const thongbao=".innos-ui-message-toast-notice-message"
    await t
        .click(chucvu)
        .typeText(filter_macv, macv)
        .wait(2000)
        .click(edit_icon)
        .click(edit_modal_button)
        .click("input#code")
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText("input#code","Saler")
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql("Cập nhật thất bại")
        .wait(2000)
})

// Chức vụ - Delete
test('AU_016', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)    

    const chucvu= "li:nth-of-type(3)  .innos-ui-navigation-list-item-text > span"
    const filter_macv= "div#root div[role='grid'] > div:nth-of-type(1) > div:nth-of-type(2) > div[role='rowgroup'] > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const macv= "testjc"
    const delete_icon= "[viewBox='0 0 151 512']"
    const delete_button= ".rc-virtual-list-holder-inner > .innos-ui-list-item-base.innos-ui-list-item-base-actionable.innos-ui-list-item-base-show-separator.innos-ui-standard-list-item"
    const delete_modal_button= ".innos-ui-button.innos-ui-button-medium.innos-ui-button-negative.innos-ui-confirm-button-cancel > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const thongbao= ".innos-ui-message-toast-notice-message"
    
    await t
        .click(chucvu)
        .typeText(filter_macv, macv)
        .click(delete_icon)
        .click(delete_button)
        .click(delete_modal_button)
        .expect(Selector(thongbao).innerText).eql("Xóa thành công")
        .wait(2000)
})

// Hồ sơ - add
test('AU_017', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)     

    const add_button= ".innos-ui-ag-grid-panel .innos-ui-button-medium:nth-of-type(1) span:nth-child(1)"
    const selector_hoso= "li:nth-of-type(2)  .innos-ui-navigation-list-item-text > span"

    await t.click(selector_hoso).click(add_button)
    
    const form_mahs= "#file_form_code"
    const form_tenhs= "#file_form_name"
    const mahoso= "test_hoso"
    const tenhoso= "Test Hồ Sơ"
    const selector_menu= "[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-tablet innos-ui-grid-h-space-1 innos-ui-grid-v-space-1']:nth-of-type(2) .innos-ui-select-selector"
    const itemmenu= "[title='adminbasic'] div"
    const selector_chucvu= "[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-tablet innos-ui-grid-h-space-1 innos-ui-grid-v-space-1']:nth-of-type(3) .innos-ui-select-selector"
    const itemchucvu= "appadmin"    
    const selector_khoa= ".innos-ui-select-allow-clear .innos-ui-select-selection-placeholder"
    const itemkhoa= "[title='E-commerce warehouse'] div"
    const cong_icon= "[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-phone innos-ui-grid-h-space-1 innos-ui-grid-v-space-1'] .innos-ui-button-default span"
    const save_button= ".innos-ui-modal-footer .innos-ui-button-default span:nth-child(1)"
    const thongbao= ".innos-ui-message-toast-notice-message"
    
    await t
        .typeText(form_mahs, mahoso)
        .typeText(form_tenhs, tenhoso)
        .click(selector_menu)
        .wait(2000).click(itemmenu)
        .click(selector_chucvu)
        .typeText(selector_chucvu, itemchucvu)
        .pressKey('enter')
        .click(selector_khoa)
        .wait(2000).click(itemkhoa)
        .click(cong_icon)
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql("Tạo mới thành công")
        .wait(2000)
})

// Hồ sơ - add trùng tên 
test('AU_018', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)   

    const add_button= ".innos-ui-ag-grid-panel .innos-ui-button-medium:nth-of-type(1) span:nth-child(1)"
    const selector_hoso= "li:nth-of-type(2)  .innos-ui-navigation-list-item-text > span"

    await t.click(selector_hoso).click(add_button)
    
    const form_mahs= "#file_form_code"
    const form_tenhs= "#file_form_name"
    const mahoso= "test_hoso"
    const tenhoso= "Test Hồ Sơ"
    const selector_menu= "[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-tablet innos-ui-grid-h-space-1 innos-ui-grid-v-space-1']:nth-of-type(2) .innos-ui-select-selector"
    const itemmenu= "[title='adminbasic'] div"
    const selector_chucvu= "[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-tablet innos-ui-grid-h-space-1 innos-ui-grid-v-space-1']:nth-of-type(3) .innos-ui-select-selector"
    const itemchucvu= "[title='qc-bm'] div"
    const selector_khoa= ".innos-ui-select-allow-clear .innos-ui-select-selection-placeholder"
    const itemkhoa= "[title='E-commerce warehouse'] div"
    const cong_icon= "[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-phone innos-ui-grid-h-space-1 innos-ui-grid-v-space-1'] .innos-ui-button-default span"
    const save_button= ".innos-ui-modal-footer .innos-ui-button-default span:nth-child(1)"
    const thongbao= ".innos-ui-message-toast-notice-message"
    
    await t
        .typeText(form_mahs, mahoso)
        .typeText(form_tenhs, tenhoso)
        .click(selector_menu)
        .wait(2000).click(itemmenu)
        .click(selector_chucvu)
        .wait(2000).click(itemchucvu)
        .click(selector_khoa)
        .wait(2000).click(itemkhoa)
        .click(cong_icon)
        .wait(2000)
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql("Tạo mới thất bại")
        .wait(2000)
})

// Hồ sơ- Edit
test('AU_019', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)   

    const hoso= "li:nth-of-type(2)  .innos-ui-navigation-list-item-text > span"
    await t.click(hoso)

    const ten_hoso= "Test Hồ Sơ"
    const selector_filter_tenhoso="div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const edit_icon=".ag-react-container [viewBox='0 0 512 512']"
    const edit_button=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const selector_menu="[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-tablet innos-ui-grid-h-space-1 innos-ui-grid-v-space-1']:nth-of-type(2) .innos-ui-select-selector"
    const itemmenu="[title='Menu Sale'] div"
    const selector_chucvu="[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-tablet innos-ui-grid-h-space-1 innos-ui-grid-v-space-1']:nth-of-type(3) .innos-ui-select-selector"
    const itemchucvu="[title='qc-sale'] div"
    const selector_khoa=".innos-ui-select-allow-clear .innos-ui-select-selection-placeholder"
    const itemkhoa="[title='JC Computing'] div"
    const cong_icon="[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-phone innos-ui-grid-h-space-1 innos-ui-grid-v-space-1'] .innos-ui-button-default span"
    const save_button=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(3) span:nth-child(1)"
    const thongbao=".innos-ui-message-toast-notice-message"
    
    await t
        .typeText(selector_filter_tenhoso,ten_hoso)
        .wait(2000)
        .click(edit_icon)
        .click(edit_button)
        .click(selector_menu)
        .wait(2000).click(itemmenu)
        .click(selector_chucvu)
        .wait(2000).click(itemchucvu)
        .click(selector_khoa)
        .wait(2000).click(itemkhoa)
        .click(cong_icon)
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql("Cập nhật thành công")
        .wait(2000)
})

// Hồ sơ - Edit trùng tên 
test('AU_020', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)   

    const hoso="li:nth-of-type(2)  .innos-ui-navigation-list-item-text > span"
    await t.click(hoso)

    const selector_filter_tenhs= "div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const tenhoso= "Test Hồ Sơ"
    const form_tenhs= "#file_form_name"
    const tenhoso_new= "adminbasic"
    const edit_icon= ".ag-react-container [viewBox='0 0 512 512']"
    const edit_button= ".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const save_button= ".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(3) span:nth-child(1)"
    const thongbao= ".innos-ui-message-toast-notice-message"
    await t
        .typeText(selector_filter_tenhs, tenhoso)
        .wait(2000)
        .click(edit_icon)
        .click(edit_button)
        .click(form_tenhs)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(form_tenhs, tenhoso_new)
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql("Cập nhật thất bại")
        .wait(2000)
})

// Hồ sơ - Delete
test('AU_021', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)   

    const selector_hoso="li:nth-of-type(2)  .innos-ui-navigation-list-item-text > span"
    await t.click(selector_hoso)
    const ten_hoso= "Test Hồ Sơ"
    const delete_icon= "[viewBox='0 0 151 512']"
    const delete_button= ".rc-virtual-list-holder-inner > div:nth-of-type(1)"
    const selector_delete= ".innos-ui-button-icon.innos-ui-icon-delete.innos-ui-icon [viewBox]"
    const selector_filter_tenhoso= "div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const thongbao= ".innos-ui-message-toast-notice-message"
    await t
        .typeText(selector_filter_tenhoso, ten_hoso)
        .wait(2000)
        .click(delete_icon)
        .click(delete_button)
        .click(selector_delete)
        .expect(Selector(thongbao).innerText).eql("Xóa thành công")
        .wait(2000)
})

// Account - Add
test('AU_022', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)   
        
    const add_button=".innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text > .innos-ui-button-content"
    const account="li:nth-of-type(1)  .innos-ui-navigation-list-item-text > span"
    
    await t.click(account)
        const acc_list=[
            {tk:'testauto1',mk:'22446688', email:'testauto001@gmail.com', sdt:'1122334455', hoso:'testauth'}
            // {tk:'testauto2',mk:'11335577',email:'testauto002@gmail.com',sdt:'6677889922',hoso:'testauth'}
        ]
        const form_username= "#user_form_username"
        const form_password= "#user_form_password"
        const form_email= "#user_form_email"
        const form_sdt= "#user_form_phoneNumber"
        const selector_hoso= ".innos-ui-select-selection-placeholder"
        const cong_icon= ".innos-ui-grid-h-space-1.innos-ui-grid-position-left.innos-ui-grid-v-space-1.innos-ui-row.innos-ui-row-std-ext-phone .innos-ui-button-icon.innos-ui-icon.innos-ui-icon-add > svg > g[role='presentation'] > path"
        const save_button= ".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) span:nth-child(1)"
        const thongbao= ".innos-ui-message-toast-notice-message"
    
    for(const item of acc_list)
    {
        await t
        .click(add_button)
        .typeText(form_username, item.tk)
        .typeText(form_password, item.mk)
        .typeText(form_email, item.email)
        .typeText(form_sdt, item.sdt)
        .click(selector_hoso)
        .wait(2000)
        .click("[title='"+item.hoso+"'] div")
        .click(cong_icon)
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql("Tạo mới thành công")
        .wait(2000)
    }
})

// Account - Add trùng
test('AU_023', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)   

    const add_button=".innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text > .innos-ui-button-content"
    const account="li:nth-of-type(1)  .innos-ui-navigation-list-item-text > span"
    
    await t.click(account)
        const acc_list=[
            {tk:'testauto1',mk:'22446688', email:'testauto001@gmail.com', sdt:'1122334455', hoso:'testauth'}
            // {tk:'testauto2',mk:'11335577',email:'testauto002@gmail.com',sdt:'6677889922',hoso:'testauth'}
        ]
        const form_username= "#user_form_username"
        const form_password= "#user_form_password"
        const form_email= "#user_form_email"
        const form_sdt= "#user_form_phoneNumber"
        const selector_hoso= ".innos-ui-select-selection-placeholder"
        const cong_icon= ".innos-ui-grid-h-space-1.innos-ui-grid-position-left.innos-ui-grid-v-space-1.innos-ui-row.innos-ui-row-std-ext-phone .innos-ui-button-icon.innos-ui-icon.innos-ui-icon-add > svg > g[role='presentation'] > path"
        const save_button= ".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) span:nth-child(1)"
        const thongbao= ".innos-ui-message-toast-notice-message"
    
    for(const item of acc_list)
    {
        await t
        .click(add_button)
        .typeText(form_username, item.tk)
        .typeText(form_password, item.mk)
        .typeText(form_email, item.email)
        .typeText(form_sdt, item.sdt)
        .click(selector_hoso)
        .wait(2000)
        .click("[title='"+item.hoso+"'] div")
        .click(cong_icon)
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql("Tạo mới thất bại")
        .wait(2000)
    }
})

// Account- Edit
test('AU_024', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)

    const account="li:nth-of-type(1)  .innos-ui-navigation-list-item-text > span"

    await t.click(account)
        const selector_filter_username="div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
        const ten_acc= "testauto1"
        const edit_icon=".ag-react-container [viewBox='0 0 512 512']"
        const edit_button=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(3) span:nth-child(1)"
        const selector_hoso= ".innos-ui-select-selection-placeholder"
        const cong_icon= ".innos-ui-grid-h-space-1.innos-ui-grid-position-left.innos-ui-grid-v-space-1.innos-ui-row.innos-ui-row-std-ext-phone .innos-ui-button-icon.innos-ui-icon.innos-ui-icon-add > svg > g[role='presentation'] > path"
        const thongbao=".innos-ui-message-toast-notice-message"
        const save_button=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(4) span:nth-child(1)"

        await t
        .typeText(selector_filter_username, ten_acc)
        .wait(2000)
        .click(edit_icon)
        .click(edit_button)
        .click(selector_hoso)
        .wait(2000).click("div[title='adminbasic'] > .innos-ui-select-item-option-content")
        .wait(2000).click(cong_icon)
        .wait(2000).click(save_button)
        .expect(Selector(thongbao).innerText).eql("Cập nhật thành công")
    }
)

/* Account- Edit trùng tên 
test('AU_025', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)   

    const account="li:nth-of-type(1)  .innos-ui-navigation-list-item-text > span"
    await t.click(account)
    const list_edit= [
        // {tk:'testauto1',mk:'22446688',email:'testauto001@gmail.com',sdt:'1122334455',hoso:'testauth'},
        {tk:'testauto1', mk:'11335577', email:'testauto002@gmail.com', sdt:'6677889922', hoso:'testauth'}
    ]
    const selector_filter_username="div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const edit_icon= ".ag-react-container [viewBox='0 0 512 512']"
    const edit_button=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(3) span:nth-child(1)"
    const form_email="#user_form_email"
    const form_username="#user_form_username"
    const save_button=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(4) span:nth-child(1)"
    const thongbao=".innos-ui-message-toast-notice-message"
    for (const item of list_edit)
    {
        await t
        .typeText(selector_filter_username, item.tk)
        .wait(2000)
        .click(edit_icon)
        .click(edit_button)
        .click(form_username)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(form_username, "appadmin")
        .click(form_email)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(form_email, item.email)
        .click(save_button)
        .expect(Selector(thongbao).innerText).eql("Cập nhật thất bại")
    }
}) */

// Account- Delete
test('AU_026', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)   

    const account="li:nth-of-type(1)  .innos-ui-navigation-list-item-text > span"
    await t.click(account)
    const ten_account= "testauto1"
    const delete_icon= "[viewBox='0 0 151 512']"
    const delete_button= "div:nth-of-type(2) > .innos-ui-list-item-base-content > .innos-ui-standard-list-item-div.innos-ui-standard-list-item-info-middle > .innos-ui-standard-list-item-title-only"
    const selector_delete= ".innos-ui-button-icon.innos-ui-icon-delete.innos-ui-icon [viewBox]"
    const selector_filter_tenacc= "div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const thongbao= ".innos-ui-message-toast-notice-message"
    await t
        .typeText(selector_filter_tenacc, ten_account)
        .wait(2000)
        .click(delete_icon)
        .click(delete_button)
        .click(selector_delete)
        .expect(Selector(thongbao).innerText).eql("Xóa thành công")
        .wait(2000)
})

