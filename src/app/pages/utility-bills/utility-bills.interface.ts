export interface IBank {
  bankCode: string;
  bankName: string;
}

export type UtilityType =
  | "bank"
  | "tv"
  | "electricity"
  | "internet"
  | undefined;
