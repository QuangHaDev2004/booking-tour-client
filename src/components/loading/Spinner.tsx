export const Spinner = () => {
  return (
    <div className="bg-primary fixed inset-0 z-[999] flex items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
    </div>
  );
};
