import { Selector } from 'testcafe';

fixture `phongmach`
    .page `https://test.vhis.vn/`
    .skipJsErrors();

    const form_user= "input#username"
    const form_pass= "input#password"
    const username= "appadmin"
    const password= "12345678"
    const button_login= ".innos-ui-button-inner"
    const menu_khambenh= "li:nth-of-type(4) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    const menu_khambenhpm= "li:nth-of-type(2) > .innos-ui-navigation-list-item-wrap > .innos-ui-navigation-list-item-text"
    const button_themvatimkiem="#root > div:nth-child(2) > div > div.app-toolbar.toolbar-kham-benh > div.toolbar-kham-benh-right > div > button:nth-child(1) > span"
    const hoten="Nguyen Huy Hoang"
    const form_hoten="input#TenBenhNhan"
    const Ngaysinh="09/09/2000"
    const form_Ngaysinh="input#NgaySinh"
    const value_XHT="Xã Phong Phú, Huyện Bình Chánh, TP. Hồ Chí Minh"
    const form_XHT="input#DiaChi_Id"
    const item_XHT="[label]"
    const button_save=".innos-ui-footer.innos-ui-footer-in-modal .innos-ui-button-icon.innos-ui-icon.react-feather-icon > svg"
    const button_kham="#root > div:nth-child(2) > div > div.app-toolbar.toolbar-kham-benh > div.toolbar-kham-benh-right > div > button:nth-child(2) > span > span"
    const form_mach="input#Mach"
    const mach="110"
    const form_tO="input#NhietDo"
    const tO="37"
    const form_ha_left="div#HA > span:nth-of-type(1) > .innos-ui-input"
    const form_ha_right="span:nth-of-type(3) > .innos-ui-input"
    const ha_left="110"
    const ha_right="90"
    const form_chieucao="input#ChieuCao"
    const chieucao="172"
    const form_cannang="input#CanNang"
    const cannang="71"
    const form_diung="input#TienSuDiUng"
    const diung="Solu - Medrol"
    const form_icd_chinh="input#ChanDoanICD_Id"
    const text_icd_chinh="g51.8"
    const item_icd_chinh="div[label='G51.8 - Bệnh khác của dây thần kinh mặt'] > div > div"
    const item_icd_phu=".innos-ui-select-item-option-content-icd"
    const form_icd_phu=".innos-ui-select.innos-ui-select-icd.innos-ui-select-multiple.innos-ui-select-show-arrow.innos-ui-select-show-search > .innos-ui-select-selector > .innos-ui-select-selection-placeholder"
    const form_text_icd_phu=".innos-ui-select-search-icd-wrapper > .innos-ui-input-affix-wrapper > .innos-ui-input"
    const text_icd_phu="g71.1"
    const taochuandoan=".innos-ui-button-no-fill .innos-ui-button-content"
    const form_huonggiaiquyet="div:nth-of-type(6) > div:nth-of-type(1) > .innos-ui-form-item > .innos-ui-form-item-control > .innos-ui-select.innos-ui-select-show-arrow.innos-ui-select-show-search.innos-ui-select-single"
    const item_huonggiaiquyet="div[label='02 Cấp toa'] > div > div"
    const khoangtrong="[for='ChanDoan'] .innos-ui-label-text-wrapper"
    const hentaikham="label#HenTaiKham  .innos-ui-icon.innos-ui-icon-accept"
    const form_taikham="input#SoNgayHenTaiKham"
    const taikham="7"
    const list_thuoc=[
        {tenthuoc:"Glovitor 20",Sang:1,Trua:1,Chieu:0,Toi:2},
        {tenthuoc:"Smecta",Sang:1,Trua:1,Chieu:1,Toi:0}
    ]
    const form_tenthuoc="input#TenThuoc"
    const form_buoisang="input#SoLuong_BuoiSang"
    const form_buoitrua="input#SoLuong_BuoiTrua"
    const form_buoichieu="input#SoLuong_BuoiChieu"
    const form_buoitoi="input#SoLuong_BuoiToi"
    const button_themthuoc="div:nth-of-type(3) > div:nth-of-type(2) > .innos-ui-button.innos-ui-button-default.innos-ui-button-medium  .innos-ui-button-content"
    const form_loidan=".innos-ui-select-selector > .innos-ui-select-selection-search > .innos-ui_select_8 "
    const item_loidan="div[label='uống sau khi ăn'] > div > div"

    
//-============ khám bệnh nhân được tiếp nhận mới ==============


    test('HIS_PhongMach', async t => {
        await t
            .maximizeWindow()
            .typeText(form_user, username)
            .typeText(form_pass, password)
            .click(button_login)
            .click(menu_khambenh)
            .click(menu_khambenhpm)
            //================Thêm bênh nhận=================//
            // .click(button_themvatimkiem)
            // .typeText(form_hoten,hoten)
            // .typeText(form_Ngaysinh,Ngaysinh)
            // .click(form_XHT)
            // .typeText(form_XHT,value_XHT)
            // .wait(1000)
            // .click(item_XHT)
            // .click(button_save)
            //================Thêm bênh nhận=================//
            .typeText("[data-ci] [type]","23001302").wait(2000)
            .pressKey("enter")
            .click(button_kham)
            .typeText(form_mach,mach)
            .typeText(form_mach,mach)
            .typeText(form_tO,tO)
            .typeText(form_ha_left,ha_left)
            .typeText(form_ha_right,ha_right)
            .typeText(form_chieucao,chieucao)
            .typeText(form_cannang,cannang)
            .typeText(form_diung,diung)
            .click(form_icd_chinh)
            .typeText(form_icd_chinh,text_icd_chinh)
            .click(item_icd_chinh)
            .click(form_icd_phu)
            .typeText(form_text_icd_phu,text_icd_phu)
            .click(item_icd_phu)
            .click(khoangtrong)
            .click(taochuandoan)
            .click(form_huonggiaiquyet)
            .click(item_huonggiaiquyet)
            .click(hentaikham)
            .typeText(form_taikham,taikham)
            for(const item of list_thuoc )
            {
                if(item.Sang!=0)
                {
                    await t.typeText(form_buoisang,item.Sang)
                }
                if(item.Trua!=0)
                {
                    await t.typeText(form_buoitrua,item.Trua)
                }
                if(item.Chieu!=0)
                {
                    await t.typeText(form_buoichieu,item.Chieu)
                }
                if(item.Toi!=0)
                {
                    await t.typeText(form_buoitoi,item.Toi)
                }
                await t.typeText(form_tenthuoc,item.tenthuoc)
                .click(form_loidan)
                .click(item_loidan)
                .click(button_themthuoc)
                .click(form_tenthuoc)
                .pressKey("ctrl+a")
                .pressKey("delete")
            }
    })

    // .click(button_save)
    // .click(ingiayhen)
    // .click(intoa)


    //-============ khám bệnh nhân đã có tiếp nhận (cũ) ==============
    // .click(button_themvatimkiem)
    //typeText(grid_ten,"LÊ HỮU QUỐC") lọc tên hoặc mã KH-23001007
    //doubleclick vô dòng đc lọc -> chọn dc bệnh nhân ra
    //bấm nút khám rồi cop y như trên là done

