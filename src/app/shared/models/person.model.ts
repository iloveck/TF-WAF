export class Person {
  constructor(
    public profile: {
      firstName: string;
      middleInitial: string;
      lastName: string;
      birthdate: string;
      languageCode: string;
      generationSuffix: string;
    },
    public phone: [
      {
        phoneNumber: string;
        phoneTypeCode: string;
      },
      {
        phoneNumber: string;
        phoneTypeCode: string;
      }
    ],
    public email: [
      {
        emailAddress: string;
        emailTypeCode: string;
      },
      {
        emailAddress: string;
        emailTypeCode: string;
      }
    ],
    public address: [
      {
        line1: string;
        line2: string;
        line3: string;
        city: string;
        stateProvinceCode: string;
        postalCode: string;
        countryCode: string;
      }
    ],
    public identity: [
      {
        idTypeCode: string;
        idNumber: string;
        stateProvinceCode: string;
        countryCode: string;
      }
    ],
    public baSameAsMa: boolean,
    public createdByChannel: string,
    public createdByUser: string,
    public createdAtLocation: string,
    public primaryMemberId: string
  ) {}
}
