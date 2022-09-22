/*
ユーザープロフィール
*/
export type User = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  student_id: string;
  entry_year: number;
  created_at: number;
  is_student: boolean;
  is_toyo_member: boolean;
  is_iniad_member: boolean;
  grade_gap: number;
};
