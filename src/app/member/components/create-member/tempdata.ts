export class TempData {
  getData() {
    return {
      emailTypes: [
        {
          en_US: [
            { code: 'PERSONALEMAIL', label: 'Personal email address' },
            { code: 'BUSINESSEMAIL', label: 'Business Email Address' }
          ],
          fr_CA: [
            { code: 'PERSONALEMAIL', label: 'Adresse e-mail personnelle' },
            { code: 'BUSINESSEMAIL', label: 'Adresse e-mail commerciale' }
          ]
        }
      ],
      phoneTypes: [
        {
          en_US: [
            { code: 'MOBILEPHONE', label: 'Mobile phone' },
            { code: 'HOMEPHONE', label: 'Home phone' },
            { code: 'BUSINESSPHONE', label: 'Business phone' }
          ],
          fr_CA: [
            { code: 'MOBILEPHONE', label: 'Téléphone cellulaire' },
            { code: 'HOMEPHONE', label: 'Téléphone résidentiel' },
            { code: 'BUSINESSPHONE', label: 'Téléphone commercial' }
          ]
        }
      ],
      identityTypes: [
        {
          en_US: [
            { code: 'DRIVERSLICENSE', label: 'Driver\'s License' },
            { code: 'STATEID', label: 'State ID Card' },
            { code: 'PASSPORT', label: 'Passport' },
            { code: 'MILITARYID', label: 'US Military Serial No. ID' },
            { code: 'CDL', label: 'US Commercial Driver\'s License' },
            {
              code: 'CITIZENSHIPCERT',
              label: 'Citizenship Certificate - US Naturalization Certificate'
            },
            {
              code: 'NATIVECARD',
              label: 'Native Status Card - Native Americans'
            },
            { code: 'UNKNOWN', label: 'Unknown' }
          ],
          fr_CA: [
            { code: 'DRIVERSLICENSE', label: 'Permis de conduire' },
            { code: 'STATEID', label: '' },
            { code: 'PASSPORT', label: '' },
            { code: 'MILITARYID', label: '' },
            { code: 'CDL', label: '' },
            { code: 'CITIZENSHIPCERT', label: '' },
            { code: 'NATIVECARD', label: '' },
            { code: 'UNKNOWN', label: '' }
          ]
        }
      ],
      addressTypes: [
        {
          en_US: [
            { code: 'MAILINGADDRESS', label: 'Mailing address' },
            { code: 'BILLINGADDRESS', label: 'Billing address' }
          ],
          fr_CA: [
            { code: 'MAILINGADDRESS', label: 'Adresse postale' },
            { code: 'BILLINGADDRESS', label: 'Adresse de facturation' }
          ]
        }
      ],
      countries: [
        {
          alpha2Code: 'US',
          alpha3Code: 'USA',
          numericCode: '840',
          dialCode: '1',
          locales: [{ en_US: 'United States', fr_CA: 'Etats-Unis' }],
          states: [
            {
              en_US: [
                { code: 'AL', label: 'ALABAMA' },
                { code: 'AK', label: 'ALASKA' },
                { code: 'AZ', label: 'ARIZONA' },
                { code: 'AR', label: 'ARKANSAS' },
                { code: 'CA', label: 'CALIFORNIA' },
                { code: 'CO', label: 'COLORADO' },
                { code: 'CT', label: 'CONNECTICUT' },
                { code: 'DE', label: 'DELAWARE' },
                { code: 'FL', label: 'FLORIDA' },
                { code: 'GA', label: 'GEORGIA' },
                { code: 'HI', label: 'HAWAII' },
                { code: 'ID', label: 'IDAHO' },
                { code: 'IL', label: 'ILLINOIS' },
                { code: 'IN', label: 'INDIANA' },
                { code: 'IA', label: 'IOWA' },
                { code: 'KS', label: 'KANSAS' },
                { code: 'KY', label: 'KENTUCKY' },
                { code: 'LA', label: 'LOUISIANA' },
                { code: 'ME', label: 'MAINE' },
                { code: 'MD', label: 'MARYLAND' },
                { code: 'MA', label: 'MASSACHUSETTS' },
                { code: 'MI', label: 'MICHIGAN' },
                { code: 'MN', label: 'MINNESOTA' },
                { code: 'MS', label: 'MISSISSIPPI' },
                { code: 'MO', label: 'MISSOURI' },
                { code: 'MT', label: 'MONTANA' },
                { code: 'NE', label: 'NEBRASKA' },
                { code: 'NV', label: 'NEVADA' },
                { code: 'NH', label: 'NEW HAMPSHIRE' },
                { code: 'NJ', label: 'NEW JERSEY' },
                { code: 'NM', label: 'NEW MEXICO' },
                { code: 'NY', label: 'NEW YORK' },
                { code: 'NC', label: 'NORTH CAROLINA' },
                { code: 'ND', label: 'NORTH DAKOTA' },
                { code: 'OH', label: 'OHIO' },
                { code: 'OK', label: 'OKLAHOMA' },
                { code: 'OR', label: 'OREGON' },
                { code: 'PA', label: 'PENNSYLVANIA' },
                { code: 'RI', label: 'RHODE ISLAND' },
                { code: 'SC', label: 'SOUTH CAROLINA' },
                { code: 'SD', label: 'SOUTH DAKOTA' },
                { code: 'TN', label: 'TENNESSEE' },
                { code: 'TX', label: 'TEXAS' },
                { code: 'UT', label: 'UTAH' },
                { code: 'VT', label: 'VERMONT' },
                { code: 'VA', label: 'VIRGINIA' },
                { code: 'WA', label: 'WASHINGTON' },
                { code: 'WV', label: 'WEST VIRGINIA' },
                { code: 'WI', label: 'WISCONSIN' },
                { code: 'WY', label: 'WYOMING' },
                { code: 'AA', label: 'ARMED FORCES AMERICAS (WITHOUT CANADA)' },
                {
                  code: 'AE',
                  label: 'ARMED FORCES EUROPE, MIDDLE EAST, CANADA'
                },
                { code: 'AP', label: 'ARMED FORCES PACIFIC' },
                { code: 'AS', label: 'AMERICAN SAMOA' },
                { code: 'DC', label: 'DISTRICT OF COLUMBIA' },
                { code: 'FM', label: 'FEDERATED STATES OF MICRONESIA' },
                { code: 'GU', label: 'GUAM' },
                { code: 'MH', label: 'MARSHALL ISLANDS' },
                { code: 'MP', label: 'NORTHERN MARIANA ISLANDS' },
                { code: 'PR', label: 'PUERTO RICO' },
                { code: 'VI', label: 'VIRGIN ISLANDS' }
              ],
              fr_CA: [
                { code: 'AL', label: 'ALABAMA' },
                { code: 'AK', label: 'ALASKA' },
                { code: 'AZ', label: 'ARIZONA' },
                { code: 'AR', label: 'ARKANSAS' },
                { code: 'CA', label: 'CALIFORNIA' },
                { code: 'CO', label: 'COLORADO' },
                { code: 'CT', label: 'CONNECTICUT' },
                { code: 'DE', label: 'DELAWARE' },
                { code: 'FL', label: 'FLORIDA' },
                { code: 'GA', label: 'GEORGIA' },
                { code: 'HI', label: 'HAWAII' },
                { code: 'ID', label: 'IDAHO' },
                { code: 'IL', label: 'ILLINOIS' },
                { code: 'IN', label: 'INDIANA' },
                { code: 'IA', label: 'IOWA' },
                { code: 'KS', label: 'KANSAS' },
                { code: 'KY', label: 'KENTUCKY' },
                { code: 'LA', label: 'LOUISIANA' },
                { code: 'ME', label: 'MAINE' },
                { code: 'MD', label: 'MARYLAND' },
                { code: 'MA', label: 'MASSACHUSETTS' },
                { code: 'MI', label: 'MICHIGAN' },
                { code: 'MN', label: 'MINNESOTA' },
                { code: 'MS', label: 'MISSISSIPPI' },
                { code: 'MO', label: 'MISSOURI' },
                { code: 'MT', label: 'MONTANA' },
                { code: 'NE', label: 'NEBRASKA' },
                { code: 'NV', label: 'NEVADA' },
                { code: 'NH', label: 'NEW HAMPSHIRE' },
                { code: 'NJ', label: 'NEW JERSEY' },
                { code: 'NM', label: 'NEW MEXICO' },
                { code: 'NY', label: 'NEW YORK' },
                { code: 'NC', label: 'NORTH CAROLINA' },
                { code: 'ND', label: 'NORTH DAKOTA' },
                { code: 'OH', label: 'OHIO' },
                { code: 'OK', label: 'OKLAHOMA' },
                { code: 'OR', label: 'OREGON' },
                { code: 'PA', label: 'PENNSYLVANIA' },
                { code: 'RI', label: 'RHODE ISLAND' },
                { code: 'SC', label: 'SOUTH CAROLINA' },
                { code: 'SD', label: 'SOUTH DAKOTA' },
                { code: 'TN', label: 'TENNESSEE' },
                { code: 'TX', label: 'TEXAS' },
                { code: 'UT', label: 'UTAH' },
                { code: 'VT', label: 'VERMONT' },
                { code: 'VA', label: 'VIRGINIA' },
                { code: 'WA', label: 'WASHINGTON' },
                { code: 'WV', label: 'WEST VIRGINIA' },
                { code: 'WI', label: 'WISCONSIN' },
                { code: 'WY', label: 'WYOMING' },
                { code: 'AA', label: 'ARMED FORCES AMERICAS (WITHOUT CANADA)' },
                { code: 'AE', label: 'ARMED FORCES PACIFIC' },
                { code: 'AP', label: 'ARMED FORCES PACIFIC' },
                { code: 'AS', label: 'AMERICAN SAMOA' },
                { code: 'DC', label: 'DISTRICT OF COLUMBIA' },
                { code: 'FM', label: 'FEDERATED STATES OF MICRONESIA' },
                { code: 'GU', label: 'GUAM' },
                { code: 'MH', label: 'MARSHALL ISLANDS' },
                { code: 'MP', label: 'NORTHERN MARIANA ISLANDS' },
                { code: 'PR', label: 'PUERTO RICO' },
                { code: 'VI', label: 'VIRGIN ISLANDS' }
              ]
            }
          ]
        },
        {
          alpha2Code: 'PR',
          alpha3Code: 'PRI',
          numericCode: '630',
          dialCode: '1',
          locales: [{ en_US: 'Puerto Rico', fr_CA: 'Puerto Rico' }]
        },
        {
          alpha2Code: 'CA',
          alpha3Code: 'CAN',
          numericCode: '124',
          dialCode: '1',
          locales: [{ en_US: 'Canada', fr_CA: 'Canada' }],
          states: [
            {
              en_US: [
                { code: 'AB', label: 'ALBERTA' },
                { code: 'BC', label: 'BRITISH COLUMBIA' },
                { code: 'MB', label: 'MANITOBA' },
                { code: 'NB', label: 'NEW BRUNSWICK' },
                { code: 'NL', label: 'NEWFOUNDLAND AND LABRADOR' },
                { code: 'NT', label: 'NORTHWEST TERRITORIES' },
                { code: 'NS', label: 'NOVA SCOTIA' },
                { code: 'NU', label: 'NUNAVUT (TERRITORY)' },
                { code: 'ON', label: 'ONTARIO' },
                { code: 'PE', label: 'PRINCE EDWARD ISLAND' },
                { code: 'QC', label: 'QUEBEC' },
                { code: 'SK', label: 'SASKATCHEWAN' },
                { code: 'YT', label: 'YUKON (TERRITORY)' }
              ],
              fr_CA: [
                { code: 'AB', label: 'L\'ALBERTA' },
                { code: 'BC', label: 'LA COLOMBIE-BRITANNIQUE' },
                { code: 'MB', label: 'LE MANITOBA' },
                { code: 'NB', label: 'LE NOUVEAU-BRUNSWICK' },
                { code: 'NL', label: 'LA TERRE-NEUVE-ET-LABRADOR' },
                { code: 'NT', label: 'LES TERRITOIRES DU NORD-OUEST' },
                { code: 'NS', label: 'LA NOUVELLE-ÉCOSSE' },
                { code: 'NU', label: 'LE NUNAVUT (TERRITOIRE)' },
                { code: 'ON', label: 'L\'ONTARIO' },
                { code: 'PE', label: 'ÎLE-DU-PRINCE-ÉDOUARD' },
                { code: 'QC', label: 'LE QUÉBEC' },
                { code: 'SK', label: 'LA SASKATCHEWAN' },
                { code: 'YT', label: 'LE YUKON (TERRITOIRE)' }
              ]
            }
          ]
        },
        {
          alpha2Code: 'MX',
          alpha3Code: 'MEX',
          numericCode: '484',
          dialCode: '52',
          locales: [{ en_US: 'Mexico', es_MX: 'Mexico' }]
        },
        {
          alpha2Code: 'GB',
          alpha3Code: 'GBR',
          numericCode: '826',
          dialCode: '44',
          locales: [
            {
              en_US: 'United Kingdom of Great Britain and Northern Ireland',
              en_GB: 'United Kingdom of Great Britain and Northern Ireland'
            }
          ]
        },
        {
          alpha2Code: 'ES',
          alpha3Code: 'ESP',
          numericCode: '724',
          dialCode: '34',
          locales: [{ en_US: 'Spain', es_ES: 'España' }]
        },
        {
          alpha2Code: 'FR',
          alpha3Code: 'FRA',
          numericCode: '250',
          dialCode: '33',
          locales: [{ en_US: 'France', es_ES: 'France' }]
        }
      ],
      languages: [
        {
          en_US: [
            { code: 'EN', label: 'English' },
            { code: 'ES', label: 'Spanish' },
            { code: 'FR', label: 'French' },
            { code: 'IS', label: 'Icelandic' },
            { code: 'KO', label: 'Korean' },
            { code: 'JP', label: 'Japanese' },
            { code: 'ZH', label: 'Chinese' }
          ],
          fr_CA: [
            { code: 'EN', label: 'Anglais' },
            { code: 'ES', label: 'Espagnol' },
            { code: 'FR', label: 'Fran�aise' }
          ],
          is_IS: [{ code: 'IS', label: '�slenska' }],
          ko_KR: [{ code: 'KO', label: '???' }],
          jp_JP: [{ code: 'JP', label: '???' }],
          zh_CN: [{ code: 'ZH', label: '??' }]
        }
      ]
    };
  }
}
