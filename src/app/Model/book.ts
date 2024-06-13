export interface Book {
  id?:                  any;
  imagePath?:           string
  title?:               string;
  author?:              string;
  yearOfPublication?:   string;
  active?:              boolean;
  status?:              Status;
  bookCondition?:       BookCondition;
  loans?:               Loan[];
}

export enum Status {
  AVAILABLE = "BORROWED",
  BORROWED = "RETURNED",
  RESERVED = "OVERDUE"
}

export enum BookCondition {
  GOOD = "GOOD",
  DAMAGED = "DAMAGED",
  LOST = "LOST"
}

export interface Loan {
  id?:           number;
  loanDate?:     string;
  returnDate?:   string;
  bookId?:       number;
  customerId?:   number;
}
