import { PowerShell } from 'node-powershell';

/**
 * Adds a given number of weeks to a date
 * @param date
 * @param numberOfWeeks
 * @returns a new date with the number of weeks added
 */
export function AddWeeks(date: Date, numberOfWeeks: number) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + numberOfWeeks * 7);
  return newDate;
}

/**
 * Closes the Excel process if it's open allowing files to be edited
 */
export async function CloseExcel() {
  const ps = new PowerShell();
  try {
    await ps.invoke('get-process EXCEL | stop-process -force');
    console.log('Excel closed');
  } catch (error) {
    if (error instanceof Error && error.message.includes('Cannot find a process with the name "EXCEL"')) {
      console.log('Excel not running');
    } else {
      throw new Error(`An unexpected error occurred: ${error as string}`);
    }
  }
  await ps.dispose();
}
