const Footer = () => {
  const date = new Date();
  return (
    <div className="text-lg mt-auto text-center py-3">
      <p>Copyright &copy; {date.getFullYear()}. All rights reserved.</p>
    </div>
  );
};

export default Footer;
