type useExperienceYearsProps = {
  startYear: number;
};
const useExperienceYears = ({ startYear }: useExperienceYearsProps) => {
  const startDate: Date = new Date(`${startYear}-01-01`);
  const currentDate: Date = new Date();
  // @ts-ignore
  const timeDifference: number = currentDate - startDate;
  const yearsDifference: number =
    timeDifference / (1000 * 60 * 60 * 24 * 365.25);

  return Math.ceil(yearsDifference);
};

export default useExperienceYears;
