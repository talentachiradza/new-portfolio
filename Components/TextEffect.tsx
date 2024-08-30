import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Front end Developer',
        1500,
        'Backend Developer',
        1500,
        'Designer',
        1500,
        'Digital Marketer',
        1500
      ]}
      speed={50}
      className="text-[1rem] md:text-[2rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
