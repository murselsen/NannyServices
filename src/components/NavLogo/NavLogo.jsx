import Css from "./NavLogo.module.css";

const NavLogo = ({ flex }) => {
  return (
    <div
      className={Css.Logo}
      style={{
        flex: flex,
      }}
      onClick={() => {
        window.location.href = "/";
      }}
    >
      Nanny.Services
    </div>
  );
};

export default NavLogo;
