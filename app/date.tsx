import { format } from "date-fns";

export default function DateComponent({ dateString = '11-06-1994' }: { dateString: string }) {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), "LLLL	d, yyyy")}
    </time>
  );
}
