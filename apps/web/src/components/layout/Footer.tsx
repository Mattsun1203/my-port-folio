export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
