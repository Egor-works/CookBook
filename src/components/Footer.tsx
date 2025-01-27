import { BiLogoGithub } from "react-icons/bi";

function Footer() {
    return (
        <footer className='page-footer green lighten-4'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/Egor-works?tab=repositories'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <BiLogoGithub size={25}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
