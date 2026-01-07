export interface ScheduleRow {
  no: string;
  time: string;
  code1: string;
  subject: string;
  code2: string;
  teacher: string;
}

export interface ScheduleData {
  [day: string]: ScheduleRow[];
}

export interface Teacher {
  code: string;
  name: string;
  subject: string;
  phone: string;
}

export interface Substitute {
  code: string;
  name: string;
  subject: string;
  note: string;
}

export interface Picket {
  day: string;
  name: string;
  phone: string;
}

export interface StudentPicket {
  day: string;
  students: string[];
  coordinator: string;
}

export type TabType = 'jadwal' | 'piketKelas' | 'guru' | 'pengganti' | 'piket';