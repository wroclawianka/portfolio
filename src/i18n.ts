import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header: {
            title: 'dorota.zelga'
          },
          intro: {
            hi: 'Hi, I am',
            dorota_zelga: 'Dorota Zelga',
            front_end_developer: 'Front-end Developer',
            description:
              'I am spcialized in web applications. Currently building with React, Redux and TypeScript stack.'
          },
          porfolio: {
            repositorium: 'Repositorium',
            website: 'Website',
            see_more: 'See more'
          },
          project: {
            porfolio_2022: {
              title: 'Portfolio 2022',
              description:
                'Personal portfolio webpage you are currently visiting'
            },
            vote_for_me: {
              title: 'Vote for me',
              description:
                'Create a survey, submit it, and see the results with the graphs'
            },
            dynamic_table: {
              title: 'Dynamic Table',
              description:
                'Update the content of the table and change its properties like columns and types'
            },
            groceries_list: {
              title: 'Groceries List',
              description:
                'Manage shopping list of a company. Create a list, mark and bought and specify the cost'
            },
            crypto_trcker: {
              title: 'Crypto Tracker',
              description:
                'Track prices of the cryptocurrencies. Search them, see they prices and add to favorites'
            },
            phonebook: {
              title: 'Phonebook',
              description:
                'Full-stack phonebook application with possibility to add, read, edit and delete entries'
            },
            sorting_algoritms: {
              title: 'Sorting Algorithms',
              description:
                'Visualization of sorting algorithms: bubble, insertion and selection'
            },
            portfolio_2019: {
              title: 'Portfolio 2019',
              description: 'Personal portfolio webpage'
            },
            workshop_2018_2: {
              title: 'Workshop website',
              description: 'Website of a fictional car service company'
            },
            loan_rating_app: {
              title: 'Loan Ratings App',
              description:
                'Calculate an average amount for loans available on marketplace of a given rating'
            },
            blog_app: {
              title: 'Prague with my eyes',
              description: 'Livestyle blog template with edit mode'
            },
            bookshelf: {
              title: 'Bookshelf',
              description:
                'Check list of your books, see book details, add a new position'
            },
            graphical_dashboard: {
              title: 'Graphical Dashboard',
              description: 'Pixel perfect diagrams presenting company results'
            },
            ordering_app: {
              title: 'Ordering App',
              description:
                'Place an order for the construction tools, see suggestions of the additional products to add'
            },
            porfolio_2018: {
              title: 'Portfolio 2018',
              description: 'Personal portfolio webpage'
            },
            binary_calculator: {
              title: 'Binary Calculator',
              description: 'Binary calculator with validation of the fields'
            },
            workshop_2018_1: {
              title: 'Workshop Website',
              description: 'Website of a fictional car service company'
            }
          }
        }
      }
    }
  });

export default i18n;
