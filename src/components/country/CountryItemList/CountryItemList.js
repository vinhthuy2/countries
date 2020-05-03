import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './CountryItemList.module.css';
import { CountryItem } from '../CountryItem/CountryItem';
const MOCK = [
  {
    name: 'Luxembourg',
    topLevelDomain: ['.lu'],
    alpha2Code: 'LU',
    alpha3Code: 'LUX',
    callingCodes: ['352'],
    capital: 'Luxembourg',
    altSpellings: [
      'LU',
      'Grand Duchy of Luxembourg',
      'Grand-Duché de Luxembourg',
      'Großherzogtum Luxemburg',
      'Groussherzogtum Lëtzebuerg'
    ],
    region: 'Europe',
    subregion: 'Western Europe',
    population: 576200,
    latlng: [49.75, 6.16666666],
    demonym: 'Luxembourger',
    area: 2586.0,
    gini: 30.8,
    timezones: ['UTC+01:00'],
    borders: ['BEL', 'FRA', 'DEU'],
    nativeName: 'Luxembourg',
    numericCode: '442',
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français'
      },
      {
        iso639_1: 'de',
        iso639_2: 'deu',
        name: 'German',
        nativeName: 'Deutsch'
      },
      {
        iso639_1: 'lb',
        iso639_2: 'ltz',
        name: 'Luxembourgish',
        nativeName: 'Lëtzebuergesch'
      }
    ],
    translations: {
      de: 'Luxemburg',
      es: 'Luxemburgo',
      fr: 'Luxembourg',
      ja: 'ルクセンブルク',
      it: 'Lussemburgo',
      br: 'Luxemburgo',
      pt: 'Luxemburgo',
      nl: 'Luxemburg',
      hr: 'Luksemburg',
      fa: 'لوکزامبورگ'
    },
    flag: 'https://restcountries.eu/data/lux.svg',
    regionalBlocs: [
      {
        acronym: 'EU',
        name: 'European Union',
        otherAcronyms: [],
        otherNames: []
      }
    ],
    cioc: 'LUX'
  },
  {
    name: 'Mexico',
    topLevelDomain: ['.mx'],
    alpha2Code: 'MX',
    alpha3Code: 'MEX',
    callingCodes: ['52'],
    capital: 'Mexico City',
    altSpellings: [
      'MX',
      'Mexicanos',
      'United Mexican States',
      'Estados Unidos Mexicanos'
    ],
    region: 'Americas',
    subregion: 'Central America',
    population: 122273473,
    latlng: [23.0, -102.0],
    demonym: 'Mexican',
    area: 1964375.0,
    gini: 47.0,
    timezones: ['UTC-08:00', 'UTC-07:00', 'UTC-06:00'],
    borders: ['BLZ', 'GTM', 'USA'],
    nativeName: 'México',
    numericCode: '484',
    currencies: [{ code: 'MXN', name: 'Mexican peso', symbol: '$' }],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Mexiko',
      es: 'México',
      fr: 'Mexique',
      ja: 'メキシコ',
      it: 'Messico',
      br: 'México',
      pt: 'México',
      nl: 'Mexico',
      hr: 'Meksiko',
      fa: 'مکزیک'
    },
    flag: 'https://restcountries.eu/data/mex.svg',
    regionalBlocs: [
      {
        acronym: 'PA',
        name: 'Pacific Alliance',
        otherAcronyms: [],
        otherNames: ['Alianza del Pacífico']
      },
      {
        acronym: 'NAFTA',
        name: 'North American Free Trade Agreement',
        otherAcronyms: [],
        otherNames: [
          'Tratado de Libre Comercio de América del Norte',
          'Accord de Libre-échange Nord-Américain'
        ]
      }
    ],
    cioc: 'MEX'
  },
  {
    name: 'Åland Islands',
    topLevelDomain: ['.ax'],
    alpha2Code: 'AX',
    alpha3Code: 'ALA',
    callingCodes: ['358'],
    capital: 'Mariehamn',
    altSpellings: ['AX', 'Aaland', 'Aland', 'Ahvenanmaa'],
    region: 'Europe',
    subregion: 'Northern Europe',
    population: 28875,
    latlng: [60.116667, 19.9],
    demonym: 'Ålandish',
    area: 1580.0,
    gini: null,
    timezones: ['UTC+02:00'],
    borders: [],
    nativeName: 'Åland',
    numericCode: '248',
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'sv',
        iso639_2: 'swe',
        name: 'Swedish',
        nativeName: 'svenska'
      }
    ],
    translations: {
      de: 'Åland',
      es: 'Alandia',
      fr: 'Åland',
      ja: 'オーランド諸島',
      it: 'Isole Aland',
      br: 'Ilhas de Aland',
      pt: 'Ilhas de Aland',
      nl: 'Ålandeilanden',
      hr: 'Ålandski otoci',
      fa: 'جزایر الند'
    },
    flag: 'https://restcountries.eu/data/ala.svg',
    regionalBlocs: [
      {
        acronym: 'EU',
        name: 'European Union',
        otherAcronyms: [],
        otherNames: []
      }
    ],
    cioc: ''
  },
  {
    name: 'Christmas Island',
    topLevelDomain: ['.cx'],
    alpha2Code: 'CX',
    alpha3Code: 'CXR',
    callingCodes: ['61'],
    capital: 'Flying Fish Cove',
    altSpellings: ['CX', 'Territory of Christmas Island'],
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    population: 2072,
    latlng: [-10.5, 105.66666666],
    demonym: 'Christmas Island',
    area: 135.0,
    gini: null,
    timezones: ['UTC+07:00'],
    borders: [],
    nativeName: 'Christmas Island',
    numericCode: '162',
    currencies: [{ code: 'AUD', name: 'Australian dollar', symbol: '$' }],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English'
      }
    ],
    translations: {
      de: 'Weihnachtsinsel',
      es: 'Isla de Navidad',
      fr: 'Île Christmas',
      ja: 'クリスマス島',
      it: 'Isola di Natale',
      br: 'Ilha Christmas',
      pt: 'Ilha do Natal',
      nl: 'Christmaseiland',
      hr: 'Božićni otok',
      fa: 'جزیره کریسمس'
    },
    flag: 'https://restcountries.eu/data/cxr.svg',
    regionalBlocs: [],
    cioc: ''
  },
  {
    name: "Lao People's Democratic Republic",
    topLevelDomain: ['.la'],
    alpha2Code: 'LA',
    alpha3Code: 'LAO',
    callingCodes: ['856'],
    capital: 'Vientiane',
    altSpellings: [
      'LA',
      'Lao',
      'Laos',
      "Lao People's Democratic Republic",
      'Sathalanalat Paxathipatai Paxaxon Lao'
    ],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    population: 6492400,
    latlng: [18.0, 105.0],
    demonym: 'Laotian',
    area: 236800.0,
    gini: 36.7,
    timezones: ['UTC+07:00'],
    borders: ['MMR', 'KHM', 'CHN', 'THA', 'VNM'],
    nativeName: 'ສປປລາວ',
    numericCode: '418',
    currencies: [{ code: 'LAK', name: 'Lao kip', symbol: '₭' }],
    languages: [
      { iso639_1: 'lo', iso639_2: 'lao', name: 'Lao', nativeName: 'ພາສາລາວ' }
    ],
    translations: {
      de: 'Laos',
      es: 'Laos',
      fr: 'Laos',
      ja: 'ラオス人民民主共和国',
      it: 'Laos',
      br: 'Laos',
      pt: 'Laos',
      nl: 'Laos',
      hr: 'Laos',
      fa: 'لائوس'
    },
    flag: 'https://restcountries.eu/data/lao.svg',
    regionalBlocs: [
      {
        acronym: 'ASEAN',
        name: 'Association of Southeast Asian Nations',
        otherAcronyms: [],
        otherNames: []
      }
    ],
    cioc: 'LAO'
  },
  {
    name: 'Republic of Kosovo',
    topLevelDomain: [''],
    alpha2Code: 'XK',
    alpha3Code: 'KOS',
    callingCodes: ['383'],
    capital: 'Pristina',
    altSpellings: ['XK', 'Република Косово'],
    region: 'Europe',
    subregion: 'Eastern Europe',
    population: 1733842,
    latlng: [42.666667, 21.166667],
    demonym: 'Kosovar',
    area: 10908.0,
    gini: null,
    timezones: ['UTC+01:00'],
    borders: ['ALB', 'MKD', 'MNE', 'SRB'],
    nativeName: 'Republika e Kosovës',
    numericCode: null,
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [
      {
        iso639_1: 'sq',
        iso639_2: 'sqi',
        name: 'Albanian',
        nativeName: 'Shqip'
      },
      {
        iso639_1: 'sr',
        iso639_2: 'srp',
        name: 'Serbian',
        nativeName: 'српски језик'
      }
    ],
    translations: {
      de: null,
      es: 'Kosovo',
      fr: null,
      ja: null,
      it: null,
      br: 'Kosovo',
      pt: 'Kosovo',
      nl: null,
      hr: 'Kosovo',
      fa: 'کوزوو'
    },
    flag: 'https://restcountries.eu/data/kos.svg',
    regionalBlocs: [
      {
        acronym: 'CEFTA',
        name: 'Central European Free Trade Agreement',
        otherAcronyms: [],
        otherNames: []
      }
    ],
    cioc: null
  },
  {
    name: 'Sint Maarten (Dutch part)',
    topLevelDomain: ['.sx'],
    alpha2Code: 'SX',
    alpha3Code: 'SXM',
    callingCodes: ['1721'],
    capital: 'Philipsburg',
    altSpellings: ['SX'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 38247,
    latlng: [18.033333, -63.05],
    demonym: 'Dutch',
    area: 34.0,
    gini: null,
    timezones: ['UTC-04:00'],
    borders: ['MAF'],
    nativeName: 'Sint Maarten',
    numericCode: '534',
    currencies: [
      { code: 'ANG', name: 'Netherlands Antillean guilder', symbol: 'ƒ' }
    ],
    languages: [
      {
        iso639_1: 'nl',
        iso639_2: 'nld',
        name: 'Dutch',
        nativeName: 'Nederlands'
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English'
      }
    ],
    translations: {
      de: 'Sint Maarten (niederl. Teil)',
      es: null,
      fr: 'Saint Martin (partie néerlandaise)',
      ja: null,
      it: 'Saint Martin (parte olandese)',
      br: 'Sint Maarten',
      pt: 'São Martinho',
      nl: 'Sint Maarten',
      hr: null,
      fa: 'سینت مارتن'
    },
    flag: 'https://restcountries.eu/data/sxm.svg',
    regionalBlocs: [],
    cioc: ''
  },
  {
    name: 'Viet Nam',
    topLevelDomain: ['.vn'],
    alpha2Code: 'VN',
    alpha3Code: 'VNM',
    callingCodes: ['84'],
    capital: 'Hanoi',
    altSpellings: [
      'VN',
      'Socialist Republic of Vietnam',
      'Cộng hòa Xã hội chủ nghĩa Việt Nam'
    ],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    population: 92700000,
    latlng: [16.16666666, 107.83333333],
    demonym: 'Vietnamese',
    area: 331212.0,
    gini: 35.6,
    timezones: ['UTC+07:00'],
    borders: ['KHM', 'CHN', 'LAO'],
    nativeName: 'Việt Nam',
    numericCode: '704',
    currencies: [{ code: 'VND', name: 'Vietnamese đồng', symbol: '₫' }],
    languages: [
      {
        iso639_1: 'vi',
        iso639_2: 'vie',
        name: 'Vietnamese',
        nativeName: 'Tiếng Việt'
      }
    ],
    translations: {
      de: 'Vietnam',
      es: 'Vietnam',
      fr: 'Viêt Nam',
      ja: 'ベトナム',
      it: 'Vietnam',
      br: 'Vietnã',
      pt: 'Vietname',
      nl: 'Vietnam',
      hr: 'Vijetnam',
      fa: 'ویتنام'
    },
    flag: 'https://restcountries.eu/data/vnm.svg',
    regionalBlocs: [
      {
        acronym: 'ASEAN',
        name: 'Association of Southeast Asian Nations',
        otherAcronyms: [],
        otherNames: []
      }
    ],
    cioc: 'VIE'
  }
];

const CountryItemList = ({ data: { items, error } } = {}) => {
  //   const items = MOCK;
  return (
    <ul className={classes.itemList}>
      {items
        ? items.map((item, idx) => (
            <li key={idx}>
              <CountryItem data={item} />
            </li>
          ))
        : null}
      {error && error.status === 404 ? <CountryItem /> : null}
    </ul>
  );
};

export default CountryItemList;
// CountryItemList.propTypes = {
//   items: PropTypes.array,
//   error: PropTypes.any
// };
