import { del } from 'express/lib/application';
import { Selector } from 'testcafe';

fixture `question`
    .page `https://test.binder.sunny.net.vn/school/`
    .skipJsErrors();

    const form_user= "input#username"
    const form_pass= "input#password"
    const username= "appadmin"
    const password= "12345678"
    const button_login= ".innos-ui-button-inner"
    const menu_enrolment= "li:nth-of-type(16) > div[role='button'] .title-menu"
    const menu_questions= ".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(2) .title-menu"
    const sections= ".innos-ui-his-split-container-bottom-left-container ul[role='menu'] > li:nth-of-type(1)  .innos-ui-navigation-list-item-text"
    const questions= ".innos-ui-his-split-container-bottom-left-container ul[role='menu'] > li:nth-of-type(2)  .innos-ui-navigation-list-item-text"

/*--------SECTION---------*/
// add new 
test('QUES_001', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_enrolment)
        .wait(2000)
        .click(menu_questions)

    const No= "S"
    const Title= "This is a new addition"
    const Description= "This is a new addition"
    const add_button=".innos-ui-button-icon.innos-ui-icon.react-feather-icon > svg"
    const form_No= "input#numberOrder"
    const form_Title= "input#title"
    const form_Description= "div:nth-of-type(2) > div[role='textbox']"
    const save_button= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium.innos-ui-toolbar-item > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const notice= ".innos-ui-message-toast-notice-message"
    const success_notice= "Create section successfully"

    await t
        .click(sections)
        .click(add_button)
        .typeText(form_No, No)
        .typeText(form_Title, Title)
        .typeText(form_Description, Description)
        .wait(1000)
        .click(save_button)
        .expect(Selector(notice).innerText).eql(success_notice)
        .wait(2000)
    });

// duplicate add
test('QUES_002', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_enrolment)
        .wait(2000)
        .click(menu_questions)

    const No= "A"
    const Title= "This is a case of adding a duplicate"
    const Description= "This is a case of adding a duplicate"
    const add_button=".innos-ui-button-icon.innos-ui-icon.react-feather-icon > svg"
    const form_No= "input#numberOrder"
    const form_Title= "input#title"
    const form_Description= "div:nth-of-type(2) > div[role='textbox']"
    const save_button= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium.innos-ui-toolbar-item > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const notice= ".innos-ui-message-toast-notice-message"
    const fail_notice= "Enrolment Section number order already exists"

    await t
        .click(sections)
        .click(add_button)
        .typeText(form_No, No)
        .typeText(form_Title, Title)
        .typeText(form_Description, Description)
        .wait(1000)
        .click(save_button)
        .expect(Selector(notice).innerText).eql(fail_notice)
        .wait(2000)
});

// successful edit
test('QUES_003', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_enrolment)
        .wait(2000)
        .click(menu_questions)

    const No= "S"
    const new_Title= "This is a successful edit case"
    const new_Description= "This is a successful edit case"
    const filter_No= "div:nth-of-type(1) > div:nth-of-type(1) > div[role='presentation'] > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const edit_button=".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-edit > svg > g[role='presentation'] > path"
    const form_Title= "input#title"
    const form_Description= "div:nth-of-type(2) > div[role='textbox']"
    const save_button= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium.innos-ui-toolbar-item > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const notice= ".innos-ui-message-toast-notice-message"
    const success_notice= "Update section successfully"

    await t
        .click(sections)
        .typeText(filter_No, No)
        .wait(3000)
        .click(edit_button)
        .click(form_Title)
        .pressKey('ctrl+a')
        .typeText(form_Title, new_Title)
        .wait(1000)
        .click(form_Description)
        .pressKey('ctrl+a')
        .typeText(form_Description, new_Description)
        .wait(1000)
        .click(save_button)
        .expect(Selector(notice).innerText).eql(success_notice)
        .wait(2000)
});

// duplicate edit
test('QUES_004', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_enrolment)
        .wait(2000)
        .click(menu_questions)

    const No= "S"
    const new_No= "A"
    const filter_No= "div:nth-of-type(1) > div:nth-of-type(1) > div[role='presentation'] > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const edit_button=".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-edit > svg > g[role='presentation'] > path"
    const form_No= "input#numberOrder"
    const save_button= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium.innos-ui-toolbar-item > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const notice= ".innos-ui-message-toast-notice-message"
    const fail_notice= "Enrolment Section number order already exists"

    await t
        .click(sections)
        .typeText(filter_No, No)
        .wait(3000)
        .click(edit_button)
        .click(form_No)
        .pressKey('ctrl+a')
        .typeText(form_No, new_No)
        .wait(1000)
        .click(save_button)
        .expect(Selector(notice).innerText).eql(fail_notice)
        .wait(2000)
});

// delete section

test('QUES_005', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_enrolment)
        .wait(2000)
        .click(menu_questions)

    const No= "S"
    const filter_No= "div:nth-of-type(1) > div:nth-of-type(1) > div[role='presentation'] > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const delete_icon= ".btn-action > button:nth-of-type(2) > .innos-ui-button-has-only-icon.innos-ui-button-inner.innos-ui-button-no-fill"
    const delete_button= ".innos-ui-list-item-base-content > .innos-ui-icon.innos-ui-icon-delete.innos-ui-standard-list-item-img-icon"
    const delete_confirm= ".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-delete > svg"
    const notice= ".innos-ui-message-toast-notice-message"
    const success_notice= "Delete section successfully"

    await t
        .click(sections)
        .typeText(filter_No, No)
        .wait(3000)
        .click(delete_icon)
        .wait(2000)
        .click(delete_button)
        .wait(2000)
        .click(delete_confirm)
        .expect(Selector(notice).innerText).eql(success_notice)
        .wait(2000)
})

/*--------QUESTION---------*/
// add new: type = Input text
test('QUES_006', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_enrolment)
        .wait(2000)
        .click(menu_questions)

    const No= "1001"
    const Title= "This is a new addition with type = input text"
    const Section= "div[label='A. Student details'] > .innos-ui-select-item-option-content"
    const add_button=".innos-ui-button-icon.innos-ui-icon.react-feather-icon > svg"
    const form_No= "input#numberOrder"
    const form_Title= "input#title"
    const form_Section= "input#IdEnrolmentQuestionSection"
    const save_button= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium.innos-ui-toolbar-item > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const notice= ".innos-ui-message-toast-notice-message"
    const success_notice= "Create question successfully"

    await t
        .click(questions)
        .click(add_button)
        .typeText(form_No, No)
        .typeText(form_Title, Title)
        .click(form_Section)
        .wait(2000).click(Section)
        .wait(1000)
        .click(save_button)
        .expect(Selector(notice).innerText).eql(success_notice)
        .wait(2000)
});

// add new: type = Single choice
test('QUES_007', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_enrolment)
        .wait(2000)
        .click(menu_questions)

    const No= "1002"
    const Title= "This is a new addition with type = single choice"
    const Section= "div[label='A. Student details'] > .innos-ui-select-item-option-content"
    const add_button=".innos-ui-button-icon.innos-ui-icon.react-feather-icon > svg"
    const form_No= "input#numberOrder"
    const form_Title= "input#title"
    const form_Section= "input#IdEnrolmentQuestionSection"
    const single_choice= "label:nth-of-type(2) > .innos-ui-label"
    const answer= "input#value"
    const add_answer= "[class='innos-ui-col innos-ui-grid-span-4'] .innos-ui-button-default .innos-ui-button-content"
    const save_button= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium.innos-ui-toolbar-item > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const notice= ".innos-ui-message-toast-notice-message"
    const success_notice= "Create question successfully"
    const List_answer_add=[
    'test0', 'test1', 'test2'
    ]
    await t
        .click(questions)
        .click(add_button)
        .typeText(form_No, No)
        .typeText(form_Title, Title)
        .click(form_Section)
        .wait(2000).click(Section)
        .wait(1000)
        .click(single_choice)
        for(const item of List_answer_add)
        {
            await t
            .typeText(answer, item)
            .click(add_answer)   
        }
        await t 
        .click(save_button)
        .expect(Selector(notice).innerText).eql(success_notice)
        .wait(2000)
});

// add new: type = Calendar
test('QUES_008', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_enrolment)
        .wait(2000)
        .click(menu_questions)

    const No= "1003"
    const Title= "This is a new addition with type = Calendar"
    const Section= "div[label='A. Student details'] > .innos-ui-select-item-option-content"
    const add_button=".innos-ui-button-icon.innos-ui-icon.react-feather-icon > svg"
    const form_No= "input#numberOrder"
    const form_Title= "input#title"
    const form_Section= "input#IdEnrolmentQuestionSection"
    const calendar= "label:nth-of-type(3) > .innos-ui-label"
    const save_button= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium.innos-ui-toolbar-item > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const notice= ".innos-ui-message-toast-notice-message"
    const success_notice= "Create question successfully"

    await t
        .click(questions)
        .click(add_button)
        .typeText(form_No, No)
        .typeText(form_Title, Title)
        .click(form_Section)
        .wait(2000).click(Section)
        .wait(1000)
        .click(calendar)
        .click(save_button)
        .expect(Selector(notice).innerText).eql(success_notice)
        .wait(2000)
});

// duplicate add
test('QUES_009', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_enrolment)
        .wait(2000)
        .click(menu_questions)

    const No= "1"
    const Title= "This is a case of adding a duplicate"
    const Section= "div[label='A. Student details'] > .innos-ui-select-item-option-content"
    const add_button=".innos-ui-button-icon.innos-ui-icon.react-feather-icon > svg"
    const form_No= "input#numberOrder"
    const form_Title= "input#title"
    const form_Section= "input#IdEnrolmentQuestionSection"
    const save_button= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium.innos-ui-toolbar-item > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const notice= ".innos-ui-message-toast-notice-message"
    const fail_notice= "Enrolment Question number order already exists"

    await t
        .click(questions)
        .click(add_button)
        .typeText(form_No, No)
        .typeText(form_Title, Title)
        .click(form_Section)
        .wait(2000).click(Section)
        .wait(1000)
        .click(save_button)
        .expect(Selector(notice).innerText).eql(fail_notice)
        .wait(2000)
});

// successful edit
test('QUES_010', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_enrolment)
        .wait(2000)
        .click(menu_questions)

    const No= "1001"
    const new_Title= "This is a successful edit case"
    const require= "div#isRequired svg > g[role='presentation'] > path"
    const new_Type= "label:nth-of-type(3) > .innos-ui-label"
    const filter_No= "div:nth-of-type(1) > div:nth-of-type(1) > div[role='presentation'] > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const edit_button=".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-edit > svg > g[role='presentation'] > path"
    const form_Title= "input#title"
    const save_button= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium.innos-ui-toolbar-item > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const notice= ".innos-ui-message-toast-notice-message"
    const success_notice= "Update question successfully"

    await t
        .click(questions)
        .typeText(filter_No, No)
        .wait(3000)
        .click(edit_button)
        .click(form_Title)
        .pressKey('ctrl+a')
        .typeText(form_Title, new_Title)
        .wait(1000)
        .click(require)
        .click(new_Type)
        .click(save_button)
        .expect(Selector(notice).innerText).eql(success_notice)
        .wait(2000)
});

// duplicate edit
test('QUES_011', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_enrolment)
        .wait(2000)
        .click(menu_questions)

    const No= "1001"
    const new_No= "1"
    const filter_No= "div:nth-of-type(1) > div:nth-of-type(1) > div[role='presentation'] > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const edit_button=".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-edit > svg > g[role='presentation'] > path"
    const form_No= "input#numberOrder"
    const save_button= "div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium.innos-ui-toolbar-item > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const notice= ".innos-ui-message-toast-notice-message"
    const fail_notice= "Enrolment Question number order already exists"

    await t
        .click(questions)
        .typeText(filter_No, No)
        .wait(3000)
        .click(edit_button)
        .click(form_No)
        .pressKey('ctrl+a')
        .typeText(form_No, new_No)
        .wait(1000)
        .click(save_button)
        .expect(Selector(notice).innerText).eql(fail_notice)
        .wait(2000)
});

// delete section (delete 3 question được tạo từ QUE_006-7-8) => dọn data test

test('QUES_012', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, password)
        .click(button_login)
        .click(menu_enrolment)
        .wait(2000)
        .click(menu_questions)
    
    const filter_No= "div:nth-of-type(1) > div:nth-of-type(1) > div[role='presentation'] > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const delete_icon= ".btn-action > button:nth-of-type(2) > .innos-ui-button-has-only-icon.innos-ui-button-inner.innos-ui-button-no-fill"
    const delete_button= ".innos-ui-list-item-base-content > .innos-ui-icon.innos-ui-icon-delete.innos-ui-standard-list-item-img-icon"
    const delete_confirm= ".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-delete > svg"
    const notice= ".innos-ui-message-toast-notice-message"
    const success_notice= "Delete question successfully"
    const List_question_delete=[
        '1001', '1002', '1003'
    ]
    await t 
    .click(questions)
    for(const item of List_question_delete)
        {
            await t            
            .typeText(filter_No, item)
            .wait(3000)
            .click(delete_icon)
            .wait(1000).click(delete_button)
            .wait(1000).click(delete_confirm)
            .expect(Selector(notice).innerText).eql(success_notice)
            .wait(2000)
            .click(filter_No)
            .pressKey('ctrl+a')
        }
})


    
        