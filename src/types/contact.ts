export type InputProps = ({
  title: string;
  name: string;
  minLength?: undefined;
  maxLength?: undefined;
  rows?: undefined;
} | {
  title: string;
  name: string;
  minLength: number;
  maxLength: number;
  rows?: undefined;
} | {
  title: string;
  name: string;
  rows: number;
  maxLength: number;
  minLength?: undefined;
})

export type FieldsProps = {
  email: string;
  phone: string;
  subject: string;
  notes: string;
}