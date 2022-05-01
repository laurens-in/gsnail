import ad from "../assets/ad.png";
import eye from "../assets/eye.png";
import key from "../assets/key.png";
import source from "../assets/open-source.png";

export const features: Feature[] = [
  {
    title: "Privacy",
    description:
      "Your data is safely stored in swiss data centers. Switzerland has a long history of working with international security agencies to make sure everyone is safe. While we have very average privacy laws, we are not afraid to look the other way, should they get in the way of making the world safer for you.",
    img: eye,
  },
  {
    title: "Ads",
    description:
      "Want to move away from other mail providers, but don't want to miss out on the advantages of targeted ads? We got you covered! We provide all your data to our partners so that they know exactly what ads to show you, that's what we call a win-win!",
    img: ad,
  },
  {
    title: "Security",
    description:
      "While most mail providers use OpenPGP, we are proud to go one step further. With Open™PGP technology, even your private keys are public! This guarantees us access to all your private conversations in case we need it, because our moto is 'if you have nothing to hide, don't worry about it'.",
    img: key,
  },
  {
    title: "Open Source",
    description:
      "We love open source! Why wouldn't we, it's free. We use all kinds of open-source code, but sadly we are not able to contribute back to the community, also we don't violate any licenses, so don't bother checking please.",
    img: source,
  },
];
