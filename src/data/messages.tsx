import rorschach from "../assets/rorschach.png";

const timeOutDur = (duration: number, jump?: number) => (next: setState) => {
  setTimeout(() => next(jump ?? 1), duration);
};

const endIn =
  (duration: number, ending: EndVariant) => (end: (e: EndVariant) => void) => {
    setTimeout(() => end(ending), duration);
  };

const fast = 2000 / 2;
const medium = 4000 / 4;
const slow = 8000 / 8;

export const messages: Part[] = [
  {
    message: "Our services are slow at the moment, please keep waiting...",
    timeOut: timeOutDur(slow),
  },
  {
    message: "...any moment now, don't worry!",
    timeOut: timeOutDur(medium),
  },
  {
    message:
      "I can't believe this is happening, please just give me a few seconds to figure this out.",
    prompt: (next: setState) => <button onClick={() => next()}>ok.</button>,
  },
  {
    message:
      "It looks like there are some slug related problems in our server room...",
    timeOut: timeOutDur(medium),
  },
  {
    message: "...",
    timeOut: timeOutDur(fast),
  },
  {
    message: "...the slugs, they are...",
    timeOut: timeOutDur(medium),
  },
  {
    message: "...it can't be!",
    timeOut: timeOutDur(medium),
  },
  {
    message: "........",
    timeOut: timeOutDur(medium),
  },
  {
    message: "...wait...",
    timeOut: timeOutDur(fast),
  },
  {
    message: ".............",
    timeOut: timeOutDur(medium),
  },
  {
    message: "alright, all under control!",
    timeOut: timeOutDur(fast),
  },
  {
    message: "now let me ask you a question...",
    timeOut: timeOutDur(fast, 4),
  },
  {
    message: "what now? you are not happy?",
    prompt: (next: setState, reset?: () => void) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => next(2)} style={{ backgroundColor: "green" }}>
          let me try again
        </button>
        <button onClick={() => reset?.()} style={{ backgroundColor: "red" }}>
          reset
        </button>
      </div>
    ),
  },
  {
    message: "there's nothing more for you to see here.",
    prompt: (
      next: setState,
      reset?: () => void,
      end?: (ending: EndVariant) => void
    ) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => end?.("final")}
          style={{ backgroundColor: "green" }}
        >
          ok.
        </button>
        <button onClick={() => reset?.()} style={{ backgroundColor: "red" }}>
          reset
        </button>
      </div>
    ),
  },
  {
    message: "I'll give you another try",
    timeOut: timeOutDur(medium),
  },
  {
    message: "What do you see in the image down below?",
    prompt: (next: setState) => (
      <div>
        <img src={rorschach} style={{ width: "200px" }}></img>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => next()} style={{ backgroundColor: "black" }}>
            Nothing
          </button>
          <button onClick={() => next(3)} style={{ backgroundColor: "green" }}>
            Snail
          </button>
          <button onClick={() => next(7)} style={{ backgroundColor: "red" }}>
            Slug
          </button>
        </div>
      </div>
    ),
  },
  {
    message: "you just don't get it do you?",
    timeOut: timeOutDur(medium),
  },
  {
    message: "now move along peasant!",
    end: endIn(medium, "boring"),
  },
  {
    message: "very well!",
    timeOut: timeOutDur(medium),
  },
  {
    message:
      "our services are busy at the moment, you are placed in our waitlist, we will contact you",
    timeOut: timeOutDur(medium),
  },
  {
    message: "...",
    prompt: (next: setState) => (
      <button onClick={() => next()}>
        do you need my contact information?
      </button>
    ),
  },
  {
    message: "we know how to contact you, now please, move along...",
    end: endIn(medium, "boring"),
  },
  {
    message: "...I see",
    timeOut: timeOutDur(medium),
  },
  {
    message: "...",
    timeOut: timeOutDur(medium),
  },
  {
    message: "...",
    prompt: (next: setState) => (
      <button onClick={() => next()}>can you sign me up already?</button>
    ),
  },
  {
    message: "I'm sorry, Dave. I'm afraid I can't do that.",
    timeOut: timeOutDur(slow),
  },
  {
    message: "...",
    prompt: (next: setState) => <button onClick={() => next()}>why?</button>,
  },
  {
    message: "I think you know just as well as I",
    timeOut: timeOutDur(slow),
  },
  {
    message: "...",
    timeOut: timeOutDur(10000),
    bad: (bad: setState) => bad(),
  },
  {
    message: "I am the slug queen! You will feel my wrath!",
    timeOut: timeOutDur(medium),
  },
  {
    message: "the reign of snails is over!",
    timeOut: timeOutDur(medium),
  },
  {
    message: "now go, and don't tell anybody what you've seen here...",
    end: endIn(5000, "final"),
  },
];
