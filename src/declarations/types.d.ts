type Feature = {
  title: string;
  description: string;
  img: string;
};

type Part = {
  message: string;
  timeOut?: (next: setState) => void;
  prompt?: (next: setState) => JSX.Element;
  end?: (end: setState) => void;
  bad?: (bad: setState) => void;
};

type setState = (number?: number) => void;
