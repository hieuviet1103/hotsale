import FilterSidebar from '../FilterSidebar';

export default function FilterSidebarExample() {
  return (
    <div className="max-w-sm p-4">
      <FilterSidebar
        onFiltersChange={(filters) => console.log('Filters changed:', filters)}
        onClearFilters={() => console.log('Filters cleared')}
      />
    </div>
  );
}