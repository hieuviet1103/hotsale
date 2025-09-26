import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection
      onEmailSubmit={(email) => console.log('Email submitted:', email)}
    />
  );
}