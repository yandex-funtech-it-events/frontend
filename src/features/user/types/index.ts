export type UserType = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  role: string;
  info: InfoType;
  settings: SettingsType;
  filter: FilterUserType;
};

export type FavoriteType = {
  user_id: number;
  event_id: number;
};

export type InfoType = {
  id: number;
  image: string;
  job: string;
  experience: string;
  specialization: string;
  user_agree_personal_info: boolean;
  user_agree_publish_cv: boolean;
  user_agree_publish_media: boolean;
};

export type SettingsType = {
  ev_notification_start: boolean;
  ev_notification_start_time: EvNotificationStartTimeType[];
  ev_notification_new: boolean;
  ev_notification_method: EvNotificationMethodType[];
};

export type EvNotificationStartTimeType = {
  id: number;
  name: string;
  slug: string;
};

export type EvNotificationMethodType = {
  id: number;
  name: string;
  slug: string;
};

export type FilterUserType = {
  is_ev_online: boolean;
  city: string;
  specialization: SpecializationType[];
};

export type SpecializationType = {
  id: number;
  name: string;
  slug: string;
};
