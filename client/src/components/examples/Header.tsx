import Header from '../Header';

export default function HeaderExample() {
  return (
    <Header
      onSearchChange={(query) => console.log('Search:', query)}
      onCategorySelect={(category) => console.log('Category:', category)}
      activeCategory="ecommerce"
    />
  );
}