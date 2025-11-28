import Css from "./NavLogo.module.css";

const NavLogo = ({ flex }) => {
  return (
    <div
      className={Css.Logo}
      style={{
        flex: flex,
      }}
    >
      Nanny.Services
    </div>
  );
};

export default NavLogo;
