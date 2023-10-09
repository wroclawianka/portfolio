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
          aboutMe: {
            p1: "My IT journey began in 2014 as a QA Engineer, where I found joy in breaking things and meticulously uncovering inconsistencies. After some time, I realized my passion for fixing these issues and transitioned into a Front-end Developer. I am an enthusiast of Typescript and React, as well as the world of web development in general. Additionally, I'm an AI enthusiast, particularly enamored with Chat GPT and Github Copilot.",
            p2: 'Being a self-learner at heart, I constantly seek out new challenges and opportunities to expand my skill set. Joining multiple international teams has broadened my horizons, allowing me to collaborate with diverse talents and cultures. I am an avid advocate of Agile methodologies and always strive to be a proactive team player.'
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
                'This project is a personal portfolio webpage, showcasing various works and projects.'
            },
            vote_for_me: {
              title: 'Vote for Me',
              description:
                'Build and conduct surveys, visualize the results with graphs, and gather insights from voter responses.'
            },
            dynamic_table: {
              title: 'Dynamic Table',
              description:
                'Project that allows you to dynamically update the table content, modify columns, and change data types as needed.'
            },
            groceries_list: {
              title: 'Groceries List',
              description:
                'Tool for managing a shopping list for a company, enabling item tracking, cost specification, and purchase marking.'
            },
            crypto_trcker: {
              title: 'Crypto Tracker',
              description:
                'Application for tracking cryptocurrency prices, searching for specific cryptocurrencies, viewing their prices, and adding them to favorites.'
            },
            phonebook: {
              title: 'Phonebook',
              description:
                'Comprehensive full-stack phonebook application that allows users to add, read, edit, and delete contact entries.'
            },
            sorting_algoritms: {
              title: 'Sorting Algorithms',
              description:
                'Visualize sorting algorithms, including bubble sort, insertion sort, and selection sort, to understand their functionality and performance.'
            },
            portfolio_2019: {
              title: 'Portfolio 2019',
              description:
                'Personal portfolio webpage showcasing projects and achievements.'
            },
            workshop_2018_2: {
              title: 'Workshop Website',
              description:
                'Website for a fictional car service company, presenting information about the services offered and the company itself.'
            },
            loan_rating_app: {
              title: 'Loan Ratings App',
              description:
                'Calculate the average loan amount available on a marketplace for loans with a specific rating.'
            },
            blog_app: {
              title: 'Prague with My Eyes',
              description:
                'Lifestyle blog template with an edit mode, allowing users to create and share their experiences about Prague.'
            },
            bookshelf: {
              title: 'Bookshelf',
              description:
                'Manage your book collection, view book details, and add new book entries to your list.'
            },
            graphical_dashboard: {
              title: 'Graphical Dashboard',
              description:
                'Pixel-perfect diagrams representing company results and performance.'
            },
            ordering_app: {
              title: 'Ordering App',
              description:
                'Place construction tool orders and receive suggestions for additional products to enhance your order.'
            },
            porfolio_2018: {
              title: 'Portfolio 2018',
              description:
                'Personal portfolio webpage displaying past projects and accomplishments.'
            },
            binary_calculator: {
              title: 'Binary Calculator',
              description:
                'Binary calculator with field validation to ensure accurate calculations.'
            },
            workshop_2018_1: {
              title: 'Workshop Website',
              description:
                'Website for a fictional car service company, providing information about services and the workshop.'
            }
          }
        }
      }
    }
  });

export default i18n;
