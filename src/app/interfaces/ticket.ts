export interface Ticket {
  ticketId: String;

  eventId: String;

  user_id: String;

  parentTicket: String;

  mobile: Boolean;

  imageUrl: String;

  ticketDatabaseId: String;

  ticketType: String;

  amount: String;

  name: String;

  phone: String;

  numberOfTicket: number;

  sharedTicket: [];

  amountPaid: Number;

  email: String;

  date_purchased: Date;

  status: String;
  _id: String;
}
