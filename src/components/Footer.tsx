export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-6">
      <p className="text-center uppercase text-sm tracking-wide p-4 ">
        ©{year} all rights reserved
      </p>
    </footer>
  );
}
