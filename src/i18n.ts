import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'uk',
    resources: {
      uk: {
        translation: {
          nav: {
            home: 'Головна',
            events: 'Події',
            new: 'Додати',
          },
          admin: {
            title: 'Залогуватись як адмін',
            placeholder: 'Ввести пароль',
            btn: 'Залогуватись',
          },
          new: {
            title: 'Додати подію',
            titleEdit: 'Редагувати подію',
            placeholderTitle: 'Назва події',
            placeholderOrganizer: 'Організатор',
            placeholderDescription: 'Короткий опис',
            placeholderDetails:
              'Деталі, включаючи Зум лінк чи інші інструкції як доєднатись',
            btnCancel: 'Відмінити',
            btnAdd: 'Додати подію',
            btnEdit: 'Зберегти зміни',
            checkBox: 'Тільки для учасників 11-денного процессу',
            successMsg: 'Нова подія успішно додана',
          },
          confirm: {
            delete: 'Впевнені що бажаєте видалити подію',
          },
        },
      },
      en: {
        translation: {
          nav: {
            home: 'Home',
            events: 'Events',
            new: 'New',
          },
          admin: {
            title: 'Login as admin',
            placeholder: 'Enter password',
            btn: 'Login',
          },
          new: {
            title: 'Add new event',
            titleEdit: 'Edit event',
            placeholderTitle: 'Event title',
            placeholderOrganizer: 'Organizer',
            placeholderDescription: 'Short description',
            placeholderDetails:
              'Event details, including Zoom link, or other instruction to join',
            btnCancel: 'Cancel',
            btnAdd: 'Add event',
            btnEdit: 'Save changes',
            checkBox: 'Only for 11-days participants',
            successMsg: 'New event has been added successfully',
          },
          confirm: {
            delete: 'Are you sure you want to delete event',
          },
        },
      },
    },
  })
