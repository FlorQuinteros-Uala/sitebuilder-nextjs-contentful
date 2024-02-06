const daysOfWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
];

export const WeekDaysSelected = ({ selectedDays }) => {
  return (
    <div className="flex flex-wrap gap-2 my-2">
      {daysOfWeek.map((day) => (
        <div
          key={day}
          className={`flex justify-center items-center rounded-[3px]
            min-w-[33px] w-[33px] h-[33px] ${
              selectedDays.includes('Todos los días') ||
              selectedDays.includes(day)
                ? 'bg-blue-250'
                : 'border border-gray-100'
            }`}
        >
          <span
            className={
              selectedDays.includes('Todos los días') ||
              selectedDays.includes(day)
                ? 'text-white'
                : 'text-gray-100'
            }
          >
            {day.charAt(0)}
          </span>
        </div>
      ))}
    </div>
  );
};
