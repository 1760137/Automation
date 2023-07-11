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

    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, password)
    .click(button_login)
    .click(menu_khambenh)
    .click(menu_khambenhpm)

    //-============ khám bệnh nhân được tiếp nhận mới ==============
    // .click(button_themvatimkiem)
    // .typeText(hoten)
    // .typeText(Ngaysinh)
    // .select(X/H/T) chọn value bất kì
    // .click(button_save)
    // .click(button_kham)
    // .typeText(mach)
    // .typeText(T)
    // .typeText(HA)
    // .typeText(chieucao)
    // .typeText(cannang)
    // .typeText(diung,"Solu - Medrol")
    // .click(ICD_chinh) chọn value bất kì
    // .click(ICD_phu) chọn value bất kì
    // .click(taochandoan)
    // .click(huonggq) chọn 2-captoa
    // .click(hentaikham)
    // .typeText(input,"7")
    // chỗ này chạy for cho nhập thuốc nha
    // list thuoc: Arcoxia 60mg, Alaxan, Aerius, Scolanzo
    // .typeText(tenthuoc, "Arcoxia 60mg")
    // .typeText(sang,"1")
    // .typeText(trua,"1")
    // .typeText(toi,"2")
    // .presskey('enter')
    // .select(loidan) chọn value bất kì
    // .click(button_save)
    // .click(ingiayhen)
    // .click(intoa)


    //-============ khám bệnh nhân đã có tiếp nhận (cũ) ==============
    // .click(button_themvatimkiem)
    //typeText(grid_ten,"LÊ HỮU QUỐC") lọc tên hoặc mã KH-23001007
    //doubleclick vô dòng đc lọc -> chọn dc bệnh nhân ra
    //bấm nút khám rồi cop y như trên là done

