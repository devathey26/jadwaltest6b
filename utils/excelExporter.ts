import * as XLSX from 'xlsx';
import { scheduleData } from '../data';

export const downloadExcel = () => {
  const wb = XLSX.utils.book_new();
  const data: any[][] = [['JADWAL KELAS XI DKV 2'], []];

  for (const [day, rows] of Object.entries(scheduleData)) {
    data.push([day]);
    data.push(['No', 'Waktu', 'Kode', 'Mapel', 'Kode', 'Guru']);
    
    rows.forEach(row => {
      data.push([row.no, row.time, row.code1, row.subject, row.code2, row.teacher]);
    });
    
    data.push([]); // Empty row between days
  }

  const ws = XLSX.utils.aoa_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, 'Jadwal');
  XLSX.writeFile(wb, 'Jadwal_DKV2.xlsx');
};