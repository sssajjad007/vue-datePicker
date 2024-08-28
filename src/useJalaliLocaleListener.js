import dayjs from "dayjs";
import jalaliday from "jalali-plugin-dayjs";

export const useJalaliLocaleListener = () => {
  dayjs.extend(jalaliday);
  dayjs.extend(jalaliday).calendar('jalali');
};
