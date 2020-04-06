export class TempData {
  getData() {
    return {
      countries: [
        {
          alpha2Code: 'US',
          alpha3Code: 'USA',
          states: [
            { code: 'AL' },
            { code: 'AK' },
            { code: 'AZ' },
            { code: 'AR' },
            { code: 'CA' },
            { code: 'CO' },
            { code: 'CT' },
            { code: 'DE' },
            { code: 'FL' },
            { code: 'GA' },
            { code: 'HI' },
            { code: 'ID' },
            { code: 'IL' },
            { code: 'IN' },
            { code: 'IA' },
            { code: 'KS' },
            { code: 'KY' },
            { code: 'LA' },
            { code: 'ME' },
            { code: 'MD' },
            { code: 'MA' },
            { code: 'MI' },
            { code: 'MN' },
            { code: 'MS' },
            { code: 'MO' },
            { code: 'MT' },
            { code: 'NE' },
            { code: 'NV' },
            { code: 'NH' },
            { code: 'NJ' },
            { code: 'NM' },
            { code: 'NY' },
            { code: 'NC' },
            { code: 'ND' },
            { code: 'OH' },
            { code: 'OK' },
            { code: 'OR' },
            { code: 'PA' },
            { code: 'RI' },
            { code: 'SC' },
            { code: 'SD' },
            { code: 'TN' },
            { code: 'TX' },
            { code: 'UT' },
            { code: 'VT' },
            { code: 'VA' },
            { code: 'WA' },
            { code: 'WV' },
            { code: 'WI' },
            { code: 'WY' },
            { code: 'AA' },
            { code: 'AE' },
            { code: 'AP' },
            { code: 'AS' },
            { code: 'DC' },
            { code: 'FM' },
            { code: 'GU' },
            { code: 'MH' },
            { code: 'MP' },
            { code: 'PR' },
            { code: 'VI' }
          ],
          languages: [
            { code: 'EN', locale: [{ name: 'en_US', value: 'English' }] },
            { code: 'ES', locale: [{ name: 'en_US', value: 'Spanish' }] },
            { code: 'FR', locale: [{ name: 'en_US', value: 'French' }] },
          ]
        },
        { alpha2Code: 'PR', alpha3Code: 'PRI' },
        {
          alpha2Code: 'CA',
          alpha3Code: 'CAN',
          states: [
            { code: 'AB' },
            { code: 'BC' },
            { code: 'MB' },
            { code: 'NB' },
            { code: 'NL' },
            { code: 'NT' },
            { code: 'NS' },
            { code: 'NU' },
            { code: 'ON' },
            { code: 'PE' },
            { code: 'QC' },
            { code: 'SK' },
            { code: 'YT' }
          ]
        },
        { alpha2Code: 'MX', alpha3Code: 'MEX' },
        { alpha2Code: 'GB', alpha3Code: 'GBR' },
        { alpha2Code: 'ES', alpha3Code: 'ESP' },
        { alpha2Code: 'FR', alpha3Code: 'FRA' }
      ],
      idTypes: [
        { code: 'DRIVERSLICENSE' },
        { code: 'STATEID' },
        { code: 'PASSPORT' },
        { code: 'MILITARYID' }
      ],
      phoneTypes: [
        { code: 'MOBILEPHONE' },
        { code: 'HOMEPHONE' },
        { code: 'BUSINESSPHONE' }
      ],
      emailTypes: [{ code: 'PERSONALEMAIL' }, { code: 'BUSINESSEMAIL' }]
    };
  }
}
