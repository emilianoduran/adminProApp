export interface Company {
  id?: string;
  name: string;
  profession: string;
  logoURL: string;
  about: [string];
  userInfo: UserInfo;
  role: string;
}

export interface UserInfo {
  email: string;
  password: string;
  password1: string;
  mobile: MobileNumber;
  phone?: PhoneNumber;
  location: Location;
  socialNetwork: SocialNetwork;
}

export interface MobileNumber {
  countryCodeAndPrefixMobile: number;
  areaCodeMobile: number;
  numberMobile: number;
}

export interface Location {
  country: string;
  province?: string;
  city: string;
  address: string;
  floorDoor?: string;
  cp?: number;
}

export interface PhoneNumber {
  countryCodeAndPrefixPhone?: number;
  areaCodePhone?: number;
  numberPhone?: number;
}

export interface SocialNetwork {
  facebook: string;
  instagram?: string;
  googlePlus?: string;
  youTube?: string;
  vimeo?: string;
  behance?: string;
}

/************
Prueba Interface
************/

const COMPANY: Company = {
  name: 'Viky Habegger',
  profession: 'Fotógrafa Profesional',
  logoURL: 'logoUrl',
  about: [''],
  role: 'ROLE_ADMIN',
  userInfo: {
    email: 'info@vikyhabegger.com',
    password: '123',
    password1: '123',
    location: {
      address: 'Belgrano 388',
      cp: 2667,
      city: 'Ucacha',
      province: 'Córdoba',
      country: 'Argentina'
    },

    mobile: {
      countryCodeAndPrefixMobile: 549,
      areaCodeMobile: 353,
      numberMobile: 5182456
    },
    phone: {
      countryCodeAndPrefixPhone: null,
      areaCodePhone: null,
      numberPhone: null
    },
    socialNetwork: {
      facebook: 'asd'
    }
  }
};
