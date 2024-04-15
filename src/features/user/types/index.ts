export type UserType = {
  id: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  work: string;
  position: string;
  experience: string;
  interest_area: string;
  format_participation: string;
  agree_personal_info: boolean;
  agree_publish_cv: boolean;
  icon: string;
};

export type FavoriteType = {
  user_id: number;
  event_id: number;
};
