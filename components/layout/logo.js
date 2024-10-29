import Image from "next/image";
import classes from "./logo.module.css";


function Logo() {
  return <div className={classes.logo}><Image src={"/images/logo4.png"} width={150} height={70} /></div>;
}

export default Logo;
