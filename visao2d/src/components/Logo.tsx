import { FunctionComponent } from "react";

interface LogoProps {
    width?: string;
    height?: string;
}

const Logo:  FunctionComponent<LogoProps> = ({width, height}) => {

    const src = './img/Logo.png'
    const alt = 'logo'

    const logoStyled = {
        width: width || 'auto',
        height: height || 'auto',
    }

    return (
        <img src={src} alt={alt} style={logoStyled}></img>
    );
}

export default Logo;