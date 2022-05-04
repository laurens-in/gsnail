type Feature = {
  title: string;
  description: string;
  img: string;
};

type Part = {
  message: string;
  timeOut?: (next: setState) => void;
  prompt?: (
    next: setState,
    reset?: () => void,
    end?: (ending: EndVariant) => void
  ) => JSX.Element;
  end?: (end: (e: EndVariant) => void) => void;
  bad?: (bad: setState) => void;
};

type setState = (number?: number) => void;

type EndVariant = "boring" | "final";
