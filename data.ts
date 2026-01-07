import { ScheduleData, Teacher, Substitute, Picket, StudentPicket } from './types';

export const scheduleData: ScheduleData = {
  'SENIN': [
    { no: '1', time: '07.05 - 07.45', code1: 'B.1', subject: 'Matematika', code2: '079', teacher: 'Ni Putu Linda Agustini, S.Pd.' },
    { no: '2', time: '07.45 - 08.25', code1: 'B.1', subject: 'Matematika', code2: '079', teacher: 'Ni Putu Linda Agustini, S.Pd.' },
    { no: '3', time: '08.25 - 09.05', code1: 'B.9.4', subject: 'Animasi-FF', code2: '062', teacher: 'Bella Cintya Devi, S.Kom.' },
    { no: '4', time: '09.05 - 09.45', code1: 'B.9.4', subject: 'Animasi-FF', code2: '062', teacher: 'Bella Cintya Devi, S.Kom.' },
    { no: '-', time: '09.45 - 10.00', code1: '-', subject: 'ISTIRAHAT', code2: '-', teacher: '-' },
    { no: '5', time: '10.00 - 10.40', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '6', time: '10.40 - 11.20', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '7', time: '11.20 - 12.00', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '8', time: '12.00 - 12.40', code1: 'B.2', subject: 'Bahasa Inggris', code2: '088', teacher: 'Ni Ketut Supartini, SS.' },
  ],
  'SELASA': [
    { no: '1', time: '07.05 - 07.45', code1: 'B.7', subject: 'Projek Kreatif dan Kewirausahaan', code2: '018', teacher: 'Putu Yenny Suryantari, S.Pd.' },
    { no: '2', time: '07.45 - 08.25', code1: 'B.7', subject: 'Projek Kreatif dan Kewirausahaan', code2: '018', teacher: 'Putu Yenny Suryantari, S.Pd.' },
    { no: '3', time: '08.25 - 09.05', code1: 'A.5', subject: 'Sejarah Indonesia', code2: '081', teacher: 'Tjok Istri Agung Rai Sintha Devi, S.Pd.' },
    { no: '4', time: '09.05 - 09.45', code1: 'A.2', subject: 'Pendidikan Pancasila', code2: '067', teacher: 'Nengah Dwi Rahayu, SE.' },
    { no: '-', time: '09.45 - 10.00', code1: '-', subject: 'ISTIRAHAT', code2: '-', teacher: '-' },
    { no: '5', time: '10.00 - 10.40', code1: 'A.1', subject: 'Pendidikan Agama dan Budi Pekerti', code2: '092', teacher: 'I Dewa Ayu Setiyawati, S.Pd. (Hindu)' },
    { no: '6', time: '10.40 - 11.20', code1: 'A.1', subject: 'Pendidikan Agama dan Budi Pekerti', code2: '092', teacher: 'I Dewa Ayu Setiyawati, S.Pd. (Hindu)' },
    { no: '7', time: '11.20 - 12.00', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '8', time: '12.00 - 12.40', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
  ],
  'RABU': [
    { no: '1', time: '07.05 - 07.45', code1: 'B.2', subject: 'Bahasa Inggris', code2: '088', teacher: 'Ni Ketut Supartini, SS.' },
    { no: '2', time: '07.45 - 08.25', code1: 'B.2', subject: 'Bahasa Inggris', code2: '088', teacher: 'Ni Ketut Supartini, SS.' },
    { no: '3', time: '08.25 - 09.05', code1: 'A.3', subject: 'Bahasa Indonesia', code2: '080', teacher: 'Ida Bagus Angga Baskara, S.Pd.' },
    { no: '4', time: '09.05 - 09.45', code1: 'A.3', subject: 'Bahasa Indonesia', code2: '080', teacher: 'Ida Bagus Angga Baskara, S.Pd.' },
    { no: '-', time: '09.45 - 10.00', code1: '-', subject: 'ISTIRAHAT', code2: '-', teacher: '-' },
    { no: '5', time: '10.00 - 10.40', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '6', time: '10.40 - 11.20', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '7', time: '11.20 - 12.00', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '8', time: '12.00 - 12.40', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
  ],
  'KAMIS': [
    { no: '1', time: '07.05 - 07.45', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '2', time: '07.45 - 08.25', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '3', time: '08.25 - 09.05', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '4', time: '09.05 - 09.45', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '-', time: '09.45 - 10.00', code1: '-', subject: 'ISTIRAHAT', code2: '-', teacher: '-' },
    { no: '5', time: '10.00 - 10.40', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '6', time: '10.40 - 11.20', code1: 'B.7', subject: 'Projek Kreatif dan Kewirausahaan', code2: '018', teacher: 'Putu Yenny Suryantari, S.Pd.' },
    { no: '7', time: '11.20 - 12.00', code1: 'B.7', subject: 'Projek Kreatif dan Kewirausahaan', code2: '018', teacher: 'Putu Yenny Suryantari, S.Pd.' },
    { no: '8', time: '12.00 - 12.40', code1: 'B.7', subject: 'Projek Kreatif dan Kewirausahaan', code2: '018', teacher: 'Putu Yenny Suryantari, S.Pd.' },
  ],
  'JUMAT': [
    { no: '1', time: '07.05 - 07.45', code1: 'A.7', subject: 'Muatan Lokal (Bahasa Bali)', code2: '092', teacher: 'I Dewa Ayu Setiyawati, S.Pd.' },
    { no: '2', time: '07.45 - 08.25', code1: 'A.7', subject: 'Muatan Lokal (Bahasa Bali)', code2: '092', teacher: 'I Dewa Ayu Setiyawati, S.Pd.' },
    { no: '3', time: '08.25 - 09.05', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '4', time: '09.05 - 09.45', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '-', time: '09.45 - 10.00', code1: '-', subject: 'ISTIRAHAT', code2: '-', teacher: '-' },
    { no: '5', time: '10.00 - 10.40', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '6', time: '10.40 - 11.20', code1: 'B.6.4', subject: 'Desain Komunikasi Visual', code2: '076', teacher: 'Triono Doni Wijaya, S.Kom.' },
    { no: '7', time: '11.20 - 12.00', code1: '-', subject: 'Kosong', code2: '-', teacher: '-' },
    { no: '8', time: '12.00 - 12.40', code1: '-', subject: 'Kosong', code2: '-', teacher: '-' },
  ],
  'SABTU': [
    { no: '1-8', time: '07.05 - 12.40', code1: '-', subject: 'Kokurikuler Mandiri', code2: '-', teacher: '-' },
  ],
};

export const teacherData: Teacher[] = [
  { code: '040', name: 'Ainul Mubsiroh, S.Pd.I, M.Pd.', subject: 'Pendidikan Agama Islam', phone: '' },
  { code: '046', name: 'Masri Kagatanaribe, M.Pd.', subject: 'Pendidikan Agama Kristen', phone: '' },
  { code: '096', name: 'Aprianus Anjelius Foutnine, S.Fil', subject: 'Pendidikan Agama Katolik', phone: '' },
  { code: '095', name: 'Adventina Puspita', subject: 'Pendidikan Agama Konghochu', phone: '' },
  { code: '063', name: 'Darsusanto, S.Ag.', subject: 'Pendidikan Agama Budha', phone: '' },
  { code: '092', name: 'I Dewa Ayu Setiyawati, S.Pd.', subject: 'Pendidikan Agama Hindu & Bahasa Bali', phone: '' },
  { code: '067', name: 'Nengah Dwi Rahayu, SE.', subject: 'Pendidikan Pancasila', phone: '6281220692219' },
  { code: '081', name: 'Tjok Istri Agung Rai Sintha Devi, S.Pd.', subject: 'Sejarah Indonesia', phone: '6289534767483' },
  { code: '080', name: 'Ida Bagus Angga Baskara, S.Pd.', subject: 'Bahasa Indonesia', phone: '' },
  { code: '007', name: 'A.A Gede Putra Dwi Artajaya, S.Si., M.Kom.', subject: 'Matematika', phone: '6282247033044' },
  { code: '079', name: 'Ni Putu Linda Agustini, S.Pd.', subject: 'Matematika', phone: '6285738235218' },
  { code: '088', name: 'Ni Ketut Supartini, SS.', subject: 'Bahasa Inggris', phone: '' },
  { code: '076', name: 'Triono Doni Wijaya, S.Kom.', subject: 'Desain Komunikasi Visual', phone: '6287863112233' },
  { code: '018', name: 'Putu Yenny Suryantari, S.Pd.', subject: 'Projek Kreatif dan Kewirausahaan', phone: '6281353285810' },
  { code: '062', name: 'Bella Cintya Devi, S.Kom.', subject: 'Animasi-FF', phone: '6281999022333' },
  { code: '013', name: 'I Wayan Agus Wiranata, S.Pd.', subject: 'PJOK (1 JP + 1 JP P5)', phone: '' },
];

export const substituteData: Substitute[] = [
  { code: '007', name: 'A.A Gede Putra Dwi Artajaya, S.Si., M.Kom.', subject: 'Matematika', note: '' },
  { code: '070', name: 'Ni Putu Tirta Purnama Dewi, S.Pd', subject: 'Bahasa Inggris', note: '' },
  { code: '067', name: 'Nengah Dwi Rahayu, SE.', subject: 'Pendidikan Pancasila', note: '' },
];

export const picketPagiData: Picket[] = [
  { day: 'Senin', name: 'Ida Ayu Dewi Paramita, S.Pd', phone: '62895375837712' },
  { day: 'Selasa', name: 'I Putu Dedy Karsana, S.Pd', phone: '6281933019479' },
  { day: 'Rabu', name: 'Tjok Istri Agung Rai Sintha Devi, S.Pd', phone: '6289534767483' },
  { day: 'Kamis', name: 'Ida Ayu Indra Pratiwi, S.Sn', phone: '6281239588346' },
  { day: 'Jumat', name: 'Dra. Ni Made Ayu Adnyani', phone: '6281238437877' },
];

export const picketSoreData: Picket[] = [
  { day: 'Senin', name: 'Ni Putu Linda Agustini, S.Pd', phone: '6285738235218' },
  { day: 'Selasa', name: 'I Kadek Yogi Mayudana, S.Pd., M.Pd', phone: '628563769773' },
  { day: 'Rabu', name: 'Ni Kadek Chandra Putri Irani, S.Pd., M.Pd', phone: '6285953912558' },
  { day: 'Kamis', name: 'Ni Wayan Lina Valentine, S.Pd', phone: '628970147321' },
  { day: 'Jumat', name: 'Kadek Arie Wira Kusuma, S.Kom', phone: '6282247033484' },
];

export const studentPicketData: StudentPicket[] = [
  { day: 'Senin', students: ['Adjie', 'Nesta', 'Abil', 'Hardy', 'Jeremy'], coordinator: 'Eca' },
  { day: 'Selasa', students: ['Stefano', 'Dekda', 'Dewade', 'Keysa', 'Ega'], coordinator: 'Novi' },
  { day: 'Rabu', students: ['Dafa', 'Rani', 'Irfan', 'Krisna', 'Iqbal'], coordinator: 'Vina' },
  { day: 'Kamis', students: ['Ryu', 'Randy', 'Ayni', 'Pande', 'Hafiz'], coordinator: 'Aina' },
  { day: 'Jumat', students: ['Aurel', 'Sutrisna', 'Rangga', 'Rafael', 'Salman'], coordinator: 'Cania' },
];