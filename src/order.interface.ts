export interface Order {
  id: string,
  name: string,
  lastName: string,
  dni: number,
  email: string,
  phoneNumber: number,
  province: string,
  district: string,
  reference: string,
  company: 'BBC' | 'IBK' | 'VABB' | 'SKOTI',
  user: any
}