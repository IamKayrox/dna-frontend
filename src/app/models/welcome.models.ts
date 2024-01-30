export interface Entity {
  icon: string;
  contacts: EntityContact[];
}

export interface EntityContact {
  name: string;
  phone: string;
  email: string;
}